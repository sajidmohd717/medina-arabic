/* ============================================================
   lesson-core.js — Kalamo
   Shared functions for all lesson pages.
   Handles: keyboard, navigation, scoring, normalisation, UI building
   ============================================================ */

// ─────────────────────────────────────────────────────────────
// GLOBAL STATE (set by lesson-loader.js)
// ─────────────────────────────────────────────────────────────

let CURRENT_LESSON_DATA = null;
let CURRENT_BOOK = null;
let CURRENT_LESSON_NUM = null;
let UNLOCKED_STEPS = { vocab: true, lesson: false, comprehension: false, quiz: false };
let QUIZ_RESULTS = {};
let COMPREHENSION_RESULTS = {};
let CURRENT_STEP = 'vocab';

// DOM elements (populated after load)
let ELEMENTS = {};

// ─────────────────────────────────────────────────────────────
// NORMALISATION HELPERS
// ─────────────────────────────────────────────────────────────

function stripDiacritics(str) {
  return str.replace(/[\u0610-\u061A\u064B-\u065F\u0670]/g, '');
}

function annotateArabicText(text, vocab) {
  const lookup = {};
  vocab.forEach(item => {
    const key = stripDiacritics(item.ar).replace(/\s+/g, '').trim();
    if (key) lookup[key] = item.meaning;
  });

  return text.split(/\s+/).map(token => {
    const bare = stripDiacritics(token).replace(/[.\u060C\u061F?!,]/g, '').trim();
    const meaning = lookup[bare];
    if (meaning) {
      const safeMeaning = meaning.replace(/"/g, '&quot;');
      return `<span class="ar-word" data-meaning="${safeMeaning}" tabindex="0" role="button" aria-label="${token}: ${safeMeaning}">${token}</span>`;
    }
    return token;
  }).join(' ');
}

function attachArabicWordMeaningToggles(root = document) {
  const words = root.querySelectorAll('.ar-word[data-meaning]');
  if (!words.length) return;

  words.forEach(word => {
    word.addEventListener('click', event => {
      event.stopPropagation();
      const isOpen = word.classList.contains('is-open');
      words.forEach(w => w.classList.remove('is-open'));
      word.classList.toggle('is-open', !isOpen);
    });

    word.addEventListener('keydown', event => {
      if (event.key !== 'Enter' && event.key !== ' ') return;
      event.preventDefault();
      word.click();
    });

    word.addEventListener('blur', () => {
      word.classList.remove('is-open');
    });
  });

  if (!document._kalamoMeaningClickAttached) {
    document.addEventListener('click', () => {
      document.querySelectorAll('.ar-word.is-open').forEach(word => word.classList.remove('is-open'));
    });
    document._kalamoMeaningClickAttached = true;
  }
}

// ─────────────────────────────────────────────────────────────
// RENDER HELPERS
// ─────────────────────────────────────────────────────────────

function normalise(str) {
  return stripDiacritics(str)
    .replace(/ـ/g, '')
    .replace(/[.,،;؛:؟?!()[\]{}"'`´‘’“”«»]/g, '')
    .replace(/\s+/g, '')
    .toLowerCase();
}

function displayNumber(value) {
  return typeof toArabicNumeral === 'function' ? toArabicNumeral(value) : String(value);
}

function renderIcon(icon) {
  if (!icon) return '•';
  const chars = [...icon];
  if (chars.length <= 1) return icon;
  return chars.map(c => `<span>${c}</span>`).join('');
}

function renderGuidedArabicLine(ar, vocab) {
  return `<div class="guided-sentence-arabic">${annotateArabicText(ar, vocab)}</div>`;
}

function getPhraseGloss(ar, vocab) {
  const lookup = {};
  vocab.forEach(item => {
    const key = stripDiacritics(item.ar).replace(/\s+/g, '').trim();
    if (key) lookup[key] = { trans: item.trans, meaning: item.meaning };
  });

  const tokens = ar.split(/\s+/);
  const transParts = [];
  const meaningParts = [];

  tokens.forEach(token => {
    const bare = stripDiacritics(token).replace(/[.\u060C\u061F?!,]/g, '').trim();
    const gloss = lookup[bare];
    transParts.push(gloss ? gloss.trans : token);
    meaningParts.push(gloss ? gloss.meaning : token);
  });

  return {
    trans: transParts.join(' '),
    meaning: meaningParts.join(' ')
  };
}

function encodeExercisePayload(value) {
  return encodeURIComponent(JSON.stringify(value || []));
}

function decodeExercisePayload(value) {
  try {
    return JSON.parse(decodeURIComponent(value || '%5B%5D'));
  } catch {
    return [];
  }
}

function attachGuidedExerciseHandlers(root = document) {
  root.querySelectorAll('.guided-exercise-input').forEach(input => {
    input.addEventListener('input', () => {
      const card = input.closest('.guided-exercise-card');
      if (!card || input.disabled) return;
      saveGuidedExerciseState(card, { status: 'draft', value: input.value });
    });

    input.addEventListener('keydown', event => {
      if (event.key !== 'Enter') return;
      const card = input.closest('.guided-exercise-card');
      if (!card) return;
      checkGuidedExercise(
        card.dataset.exerciseId,
        decodeExercisePayload(card.dataset.accepts),
        Number(card.dataset.total || 0)
      );
    });
  });

  root.querySelectorAll('.guided-exercise-check').forEach(button => {
    button.addEventListener('click', () => {
      const card = button.closest('.guided-exercise-card');
      if (!card) return;
      checkGuidedExercise(
        card.dataset.exerciseId,
        decodeExercisePayload(card.dataset.accepts),
        Number(card.dataset.total || 0)
      );
    });
  });

  root.querySelectorAll('.guided-exercise-redo').forEach(button => {
    button.addEventListener('click', () => resetGuidedExercise(button.closest('.guided-exercise-card')));
  });
}

// ─────────────────────────────────────────────────────────────
// STEP NAVIGATION
// ─────────────────────────────────────────────────────────────

function goToStep(step) {
  if (!UNLOCKED_STEPS[step]) return;

  const stepOrder = ['vocab', 'lesson', 'comprehension', 'quiz'];
  const stepIndex = stepOrder.indexOf(step);

  stepOrder.forEach(s => {
    const panel = document.getElementById(`panel-${s}`);
    const btn = document.getElementById(`step-${s}`);
    if (panel) panel.classList.remove('active');
    if (btn) btn.classList.remove('active');
  });

  const targetPanel = document.getElementById(`panel-${step}`);
  const targetBtn = document.getElementById(`step-${step}`);
  if (targetPanel) targetPanel.classList.add('active');
  if (targetBtn) targetBtn.classList.add('active');

  CURRENT_STEP = step;
  saveLessonStep(step);
  if (step === 'quiz') showQuizIntro();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function unlockAndGo(step) {
  UNLOCKED_STEPS[step] = true;
  const btn = document.getElementById(`step-${step}`);
  if (btn) btn.classList.remove('locked');

  const prevBtn = document.getElementById(`step-${CURRENT_STEP}`);
  if (prevBtn && CURRENT_STEP !== step) {
    prevBtn.classList.remove('active');
    prevBtn.classList.add('completed');
    prevBtn.style.animation = 'bounceIn 0.3s ease';
  }

  if (btn && CURRENT_STEP !== step) {
    btn.style.animation = 'bounceIn 0.4s ease';
  }

  goToStep(step);

  const icon = document.getElementById(`step-${CURRENT_STEP}`)?.querySelector('.step-icon');
  if (icon) {
    icon.style.animation = 'none';
    void icon.offsetHeight;
    icon.style.animation = 'bounceIn 0.35s ease';
  }
}

/** Open all steps and go straight to the quiz (used with ?step=quiz from the book list). */
function applyQuizJumpMode() {
  UNLOCKED_STEPS = { vocab: true, lesson: true, comprehension: true, quiz: true };
  ['vocab', 'lesson', 'comprehension', 'quiz'].forEach(step => {
    const btn = document.getElementById(`step-${step}`);
    if (btn) btn.classList.remove('locked');
  });
  goToStep('quiz');
}

function setupLessonIntro() {
  const intro = document.getElementById('lessonIntro');
  const page = document.getElementById('lessonPage');
  if (!intro || !page || !CURRENT_LESSON_DATA) {
    if (page) page.classList.remove('is-waiting');
    return;
  }

  const params = new URLSearchParams(window.location.search);
  if (params.get('step') === 'quiz') {
    intro.hidden = true;
    page.classList.remove('is-waiting');
    return;
  }

  if (shouldSkipLessonIntro()) {
    intro.hidden = true;
    page.classList.remove('is-waiting');
    return;
  }

  const bookNum = CURRENT_BOOK.replace('book', '');
  const eyebrow = document.getElementById('lessonIntroEyebrow');
  const title = document.getElementById('lessonIntroTitle');
  const english = document.getElementById('lessonIntroEnglish');
  const summary = document.getElementById('lessonIntroSummary');
  const mark = intro.querySelector('.lesson-intro-mark');
  const continueBtn = document.getElementById('lessonIntroContinue');

  if (eyebrow) eyebrow.textContent = `Book ${displayNumber(bookNum)} · Lesson ${displayNumber(CURRENT_LESSON_NUM)}`;
  if (title) title.textContent = CURRENT_LESSON_DATA.titleArabic;
  if (english) english.textContent = CURRENT_LESSON_DATA.titleEnglish;
  if (summary) summary.textContent = CURRENT_LESSON_DATA.summary;
  if (mark) mark.textContent = CURRENT_LESSON_DATA.titleArabic;

  page.classList.add('is-waiting');
  intro.hidden = false;

  if (continueBtn) {
    continueBtn.addEventListener('click', () => {
      intro.classList.add('is-leaving');
      window.setTimeout(() => {
        intro.hidden = true;
        intro.classList.remove('is-leaving');
        page.classList.remove('is-waiting');
        page.classList.add('is-entering');
        saveGuidedPage(0);
        saveLessonStep('vocab');
        window.scrollTo({ top: 0, behavior: 'smooth' });
        window.setTimeout(() => page.classList.remove('is-entering'), 480);
      }, 320);
    }, { once: true });
  }
}

// ─────────────────────────────────────────────────────────────
// COMPREHENSION FUNCTIONS
// ─────────────────────────────────────────────────────────────

function checkComprehension(btn, qNum, isCorrect) {
  const container = btn.closest('.comprehension-question');
  const feedback = container.querySelector('.comprehension-feedback');
  const options = container.querySelectorAll('.comprehension-option');
  
  options.forEach(o => o.disabled = true);
  COMPREHENSION_RESULTS[qNum] = isCorrect;
  
  if (isCorrect) {
    btn.classList.add('correct');
    feedback.textContent = '✓ Correct!';
    feedback.className = 'comprehension-feedback correct';
  } else {
    btn.classList.add('wrong');
    feedback.textContent = '✗ Not quite — look at the story again.';
    feedback.className = 'comprehension-feedback wrong';
    options.forEach(o => {
      // Find the correct option to highlight it
      if (o.getAttribute('onclick') && o.getAttribute('onclick').includes('true')) {
        o.classList.add('correct');
      }
    });
  }
}


// ─────────────────────────────────────────────────────────────
// QUIZ FUNCTIONS
// ─────────────────────────────────────────────────────────────

function checkQuiz(btn, qNum, isCorrect) {
  const container = btn.closest('.quiz-question');
  const feedback = container.querySelector('.quiz-feedback');
  const options = container.querySelectorAll('.quiz-option');
  
  options.forEach(o => o.disabled = true);
  QUIZ_RESULTS[qNum] = isCorrect;
  
  if (isCorrect) {
    btn.classList.add('correct');
    feedback.textContent = '✓ Correct!';
    feedback.className = 'quiz-feedback correct';
  } else {
    btn.classList.add('wrong');
    feedback.textContent = '✗ Incorrect.';
    feedback.className = 'quiz-feedback wrong';
    options.forEach(o => {
      if (o.getAttribute('onclick') && o.getAttribute('onclick').includes('true')) {
        o.classList.add('correct');
      }
    });
  }
}

function checkTyping(qNum, questionData) {
  const input = document.getElementById(`qi${qNum}`);
  const feedback = document.getElementById(`qf${qNum}`);
  const idealEl = document.getElementById(`ideal${qNum}`);
  const checkBtn = document.getElementById(`checkBtn${qNum}`);
  
  const userRaw = input.value.trim();
  if (!userRaw) {
    feedback.textContent = 'Please type your answer first.';
    feedback.className = 'quiz-feedback wrong';
    return;
  }
  
  const userNorm = normalise(userRaw);
  const isCorrect = questionData.accepts.some(a => normalise(a) === userNorm);
  
  QUIZ_RESULTS[qNum] = isCorrect;
  
  input.disabled = true;
  checkBtn.disabled = true;
  checkBtn.style.opacity = '0.4';
  
  if (isCorrect) {
    input.classList.add('correct');
    feedback.textContent = '✓ Correct!';
    feedback.className = 'quiz-feedback correct';
    idealEl.textContent = 'Full answer with vowels: ' + questionData.ideal;
    idealEl.style.display = 'block';
  } else {
    input.classList.add('wrong');
    feedback.textContent = '✗ Not quite.';
    feedback.className = 'quiz-feedback wrong';
    idealEl.textContent = 'Ideal answer: ' + questionData.ideal + '  (you wrote: ' + userRaw + ')';
    idealEl.style.display = 'block';
  }
}

function playPassSound() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();

    // Each note: sine fundamental + quiet octave harmonic = clean bell/marimba hit
    function hit(freq, t, vol = 0.28, dur = 0.38) {
      [[freq, vol], [freq * 2, vol * 0.12]].forEach(([f, v]) => {
        const osc  = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.type = 'sine';
        osc.frequency.value = f;
        const s = ctx.currentTime + t;
        gain.gain.setValueAtTime(0, s);
        gain.gain.linearRampToValueAtTime(v, s + 0.006);   // snappy attack
        gain.gain.exponentialRampToValueAtTime(0.001, s + dur);
        osc.start(s);
        osc.stop(s + dur + 0.02);
      });
    }

    // E5 → G5 → C6 (with C5 under it for warmth) — tight and bright
    hit(659.25, 0.00, 0.22, 0.30);   // E5
    hit(783.99, 0.10, 0.25, 0.30);   // G5
    hit(1046.5, 0.20, 0.28, 0.50);   // C6  ┐ resolution chord
    hit(523.25, 0.20, 0.14, 0.50);   // C5  ┘
  } catch (e) { /* audio unavailable — fail silently */ }
}

function discoverCurrentLessonWords() {
  if (!window.SRS || !CURRENT_LESSON_DATA || !CURRENT_LESSON_DATA.vocab) return;
  SRS.discoverWords(
    CURRENT_LESSON_DATA.book || CURRENT_BOOK || 'book1',
    CURRENT_LESSON_DATA.lessonNum || CURRENT_LESSON_NUM,
    CURRENT_LESSON_DATA.vocab
  );
}

function checkConcept(btn, qNum, isCorrect, conceptIdx) {
  const container = btn.closest('.quiz-question');
  const feedback = container.querySelector('.quiz-feedback');
  const btns = container.querySelectorAll('.concept-btn');
  const explanation = CURRENT_LESSON_DATA.quizQuestions.conceptCheck[conceptIdx].explanation;

  btns.forEach(b => b.disabled = true);
  QUIZ_RESULTS[qNum] = isCorrect;

  const label = isCorrect ? '✓ Correct!' : '✗ Not quite.';
  const expId = `concept-exp-${qNum}`;

  if (isCorrect) {
    btn.classList.add('correct');
    feedback.className = 'quiz-feedback correct';
  } else {
    btn.classList.add('wrong');
    btns.forEach(b => { if (b !== btn) b.classList.add('correct'); });
    feedback.className = 'quiz-feedback wrong';
  }

  feedback.innerHTML = `
    ${label}
    <button class="concept-learn-more" onclick="
      const el = document.getElementById('${expId}');
      const open = el.style.display !== 'none';
      el.style.display = open ? 'none' : 'block';
      this.textContent = open ? 'Learn more ›' : 'Hide ‹';
    ">Learn more ›</button>
    <span class="quiz-concept-explanation" id="${expId}" style="display:none;">${explanation}</span>
  `;
}

function submitQuiz() {
  // Auto-check any unanswered typing questions
  if (CURRENT_LESSON_DATA.quizQuestions.typing) {
    const ccCount = (CURRENT_LESSON_DATA.quizQuestions.conceptCheck || []).length;
    const mcLen = CURRENT_LESSON_DATA.quizQuestions.multipleChoice.length;
    CURRENT_LESSON_DATA.quizQuestions.typing.forEach((q, idx) => {
      const qNum = ccCount + mcLen + idx + 1;
      if (QUIZ_RESULTS[qNum] === null) {
        checkTyping(qNum, q);
      }
    });
  }
  
  const total = CURRENT_LESSON_DATA.totalQuestions;
  const score = Object.values(QUIZ_RESULTS).filter(Boolean).length;
  const passed = score >= CURRENT_LESSON_DATA.passMark;
  
  const scoreNumber = document.getElementById('scoreNumber');
  const scoreLabel = document.getElementById('scoreLabel');
  const scoreCard = document.getElementById('scoreCard');
  const submitBtn = document.getElementById('submitQuizBtn');
  const nextBtn = document.getElementById('nextLessonBtn');

  if (scoreNumber) animateNumber(scoreNumber, score, ` / ${displayNumber(total)}`);
  if (scoreLabel) {
    scoreLabel.innerHTML = passed
      ? `<span class="quiz-score-icon">🎉</span>Great work! You've mastered this lesson.`
      : `You need at least ${displayNumber(CURRENT_LESSON_DATA.passMark)} out of ${displayNumber(total)} to pass. Review the lesson and try again — you've got this!`;
  }
  if (scoreCard) {
    document.body.appendChild(scoreCard);
    scoreCard.style.display = 'flex';
    scoreCard.classList.toggle('passed', passed);
    scoreCard.classList.toggle('failed', !passed);
    document.body.classList.add('quiz-result-open');
    scoreCard.querySelector('.quiz-score-dialog')?.focus({ preventScroll: true });
    if (passed) celebrate('pass');
    else celebrate('fail');
  }
  if (submitBtn) submitBtn.style.display = 'none';
  
  if (passed) {
    playPassSound();
    if (typeof markComplete === 'function') {
      markComplete(CURRENT_LESSON_NUM, CURRENT_BOOK);
      discoverCurrentLessonWords();
      clearGuidedResume();
      if (typeof updateProgressBar === 'function') updateProgressBar(CURRENT_BOOK);
      if (typeof updateCompletedCount === 'function') updateCompletedCount(CURRENT_BOOK);
    }
    if (typeof awardXP === 'function') {
      awardXP(score === total ? 100 : 50);
    }
    if (typeof updateStreak === 'function') {
      updateStreak();
    }
    if (nextBtn) nextBtn.style.display = 'inline-block';
  } else {
    if (nextBtn) nextBtn.style.display = 'none';
  }
}

function retryQuiz() {
  const ccCount = (CURRENT_LESSON_DATA.quizQuestions.conceptCheck || []).length;
  const mcCount = CURRENT_LESSON_DATA.quizQuestions.multipleChoice.length;
  const typingCount = CURRENT_LESSON_DATA.quizQuestions.typing.length;

  // Reset concept check questions (now first in the quiz)
  for (let i = 0; i < ccCount; i++) {
    const qNum = i + 1;
    QUIZ_RESULTS[qNum] = null;
    const fb = document.getElementById(`qf${qNum}`);
    if (fb) { fb.textContent = ''; fb.className = 'quiz-feedback'; }
    const container = document.getElementById(`qq${qNum}`);
    if (container) {
      container.querySelectorAll('.concept-btn').forEach(b => {
        b.disabled = false;
        b.classList.remove('correct', 'wrong');
      });
    }
  }

  // Reset multiple choice questions
  for (let i = 1; i <= mcCount; i++) {
    const qNum = ccCount + i;
    QUIZ_RESULTS[qNum] = null;
    const fb = document.getElementById(`qf${qNum}`);
    if (fb) { fb.textContent = ''; fb.className = 'quiz-feedback'; }
    const container = document.getElementById(`qq${qNum}`);
    if (container) {
      container.querySelectorAll('.quiz-option').forEach(o => {
        o.disabled = false;
        o.classList.remove('correct', 'wrong');
      });
    }
  }

  // Reset typing questions
  for (let i = 1; i <= typingCount; i++) {
    const qNum = ccCount + mcCount + i;
    QUIZ_RESULTS[qNum] = null;
    const input = document.getElementById(`qi${qNum}`);
    const fb = document.getElementById(`qf${qNum}`);
    const ideal = document.getElementById(`ideal${qNum}`);
    const btn = document.getElementById(`checkBtn${qNum}`);
    if (input) { input.value = ''; input.disabled = false; input.classList.remove('correct', 'wrong'); }
    if (fb) { fb.textContent = ''; fb.className = 'quiz-feedback'; }
    if (ideal) { ideal.style.display = 'none'; ideal.textContent = ''; }
    if (btn) { btn.disabled = false; btn.style.opacity = '1'; }
  }

  const scoreCard = document.getElementById('scoreCard');
  const submitBtn = document.getElementById('submitQuizBtn');
  const introCard = document.getElementById('quizIntroCard');
  const quizContainer = document.querySelector('#panel-quiz .quiz-container');
  const quizPanelNav = document.getElementById('quizPanelNav');
  const quizTotalLabel = document.getElementById('quizTotalLabel');
  if (introCard) introCard.style.display = 'none';
  if (quizContainer) quizContainer.style.display = 'block';
  if (quizPanelNav) quizPanelNav.style.display = 'flex';
  if (quizTotalLabel) quizTotalLabel.style.display = 'none';
  if (scoreCard) scoreCard.style.display = 'none';
  document.body.classList.remove('quiz-result-open');
  if (submitBtn) submitBtn.style.display = 'inline-block';

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function startQuiz() {
  const introCard = document.getElementById('quizIntroCard');
  const quizContainer = document.querySelector('#panel-quiz .quiz-container');
  const quizPanelNav = document.getElementById('quizPanelNav');
  const quizTotalLabel = document.getElementById('quizTotalLabel');

  if (introCard) introCard.style.display = 'none';
  if (quizTotalLabel) quizTotalLabel.style.display = 'none';
  if (quizContainer) quizContainer.style.display = 'block';
  if (quizPanelNav) quizPanelNav.style.display = 'flex';
  quizContainer?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function showQuizIntro() {
  const scoreCard = document.getElementById('scoreCard');
  if (scoreCard && scoreCard.style.display !== 'none') return;

  const introCard = document.getElementById('quizIntroCard');
  const quizContainer = document.querySelector('#panel-quiz .quiz-container');
  const quizPanelNav = document.getElementById('quizPanelNav');
  const quizTotalLabel = document.getElementById('quizTotalLabel');

  if (introCard) introCard.style.display = 'block';
  if (quizTotalLabel) quizTotalLabel.style.display = 'none';
  if (quizContainer) quizContainer.style.display = 'none';
  if (quizPanelNav) quizPanelNav.style.display = 'none';
}


// ─────────────────────────────────────────────────────────────
// UI BUILDING FUNCTIONS
// ─────────────────────────────────────────────────────────────

const VOCAB_RATING_CLASSES = ['know', 'struggle', 'unknown'];

function applyVocabCardRating(card, book, lessonNum, wordIndex, rating) {
  VOCAB_RATING_CLASSES.forEach(r => card.classList.remove(`vocab-card--${r}`));
  card.querySelectorAll('.vocab-rate-btn').forEach(b => {
    b.classList.toggle('is-active', b.dataset.rating === rating && rating !== null && rating !== '');
    b.setAttribute('aria-pressed', b.dataset.rating === rating && rating !== null && rating !== '' ? 'true' : 'false');
  });
  if (rating === 'know' || rating === 'struggle' || rating === 'unknown') {
    card.classList.add(`vocab-card--${rating}`);
  }
  if (typeof setVocabWordRating === 'function') {
    setVocabWordRating(book, lessonNum, wordIndex, rating || null);
  }
}

function insertVocabCardSorted(grid, card) {
  const idx = parseInt(card.dataset.wordIndex, 10);
  for (const child of grid.children) {
    const ci = parseInt(child.dataset.wordIndex, 10);
    if (idx < ci) {
      grid.insertBefore(card, child);
      return;
    }
  }
  grid.appendChild(card);
}

function refreshVocabKnownBucket(ctx) {
  const n = ctx.knownGrid.children.length;
  ctx.knownDetails.hidden = n === 0;
  if (ctx.summaryCountEl) ctx.summaryCountEl.textContent = String(n);
}

function placeVocabCardInBucket(card, layoutEl) {
  const ctx = layoutEl && layoutEl._vocabCtx;
  if (!ctx) return;
  const isKnow = card.classList.contains('vocab-card--know');
  card.classList.toggle('vocab-card--compact-known', isKnow);
  const target = isKnow ? ctx.knownGrid : ctx.activeGrid;
  insertVocabCardSorted(target, card);
  refreshVocabKnownBucket(ctx);
}

function buildVocabRatingLayout(data, slot, hintText) {
  if (!slot) return;

  slot.className = 'vocab-layout';
  slot._vocabCtx = null;

  const hint = document.createElement('p');
  hint.className = 'vocab-rating-hint';
  hint.textContent = hintText || 'Rate each word: ✓ know it well · ≈ still practising · ✗ new or difficult. Rated words are saved for later review.';

  const activeGrid = document.createElement('div');
  activeGrid.className = 'vocab-grid vocab-grid-active';

  const knownDetails = document.createElement('details');
  knownDetails.className = 'vocab-known-details';

  const summary = document.createElement('summary');
  summary.className = 'vocab-known-summary';
  summary.innerHTML =
    'Words you know well <span class="vocab-known-count-wrap">(<span class="vocab-known-count">0</span>)</span>';

  const knownGrid = document.createElement('div');
  knownGrid.className = 'vocab-grid vocab-grid-known';

  knownDetails.appendChild(summary);
  knownDetails.appendChild(knownGrid);
  slot.append(hint, knownDetails, activeGrid);

  const ctx = {
    activeGrid,
    knownGrid,
    knownDetails,
    summaryCountEl: summary.querySelector('.vocab-known-count'),
  };
  slot._vocabCtx = ctx;

  const ratings =
    typeof getVocabRatingsForLesson === 'function'
      ? getVocabRatingsForLesson(data.book, data.lessonNum)
      : {};

  data.vocab.forEach((item, index) => {
    const card = document.createElement('div');
    card.className = 'vocab-card';
    card.dataset.wordIndex = String(index);

    const saved = ratings[String(index)];
    if (saved === 'know' || saved === 'struggle' || saved === 'unknown') {
      card.classList.add(`vocab-card--${saved}`);
    }

    card.innerHTML = `
      <div class="vocab-card-body">
        <div class="vocab-arabic">${item.ar}</div>
        <div class="vocab-transliteration">${item.trans}</div>
        <div class="vocab-meaning">${item.meaning}</div>
        <span class="vocab-type">${item.type}</span>
      </div>
      <div class="vocab-card-actions" role="group" aria-label="How well do you know this word?">
        <button type="button" class="vocab-rate-btn vocab-rate-know${saved === 'know' ? ' is-active' : ''}" data-rating="know" title="Know well" aria-pressed="${saved === 'know' ? 'true' : 'false'}">✓</button>
        <button type="button" class="vocab-rate-btn vocab-rate-struggle${saved === 'struggle' ? ' is-active' : ''}" data-rating="struggle" title="Still practising" aria-pressed="${saved === 'struggle' ? 'true' : 'false'}">≈</button>
        <button type="button" class="vocab-rate-btn vocab-rate-unknown${saved === 'unknown' ? ' is-active' : ''}" data-rating="unknown" title="New or difficult" aria-pressed="${saved === 'unknown' ? 'true' : 'false'}">✗</button>
      </div>
    `;

    card.querySelectorAll('.vocab-rate-btn').forEach(btn => {
      btn.addEventListener('click', e => {
        e.preventDefault();
        e.stopPropagation();
        const choice = btn.dataset.rating;
        const isToggleOff =
          (choice === 'know' && card.classList.contains('vocab-card--know')) ||
          (choice === 'struggle' && card.classList.contains('vocab-card--struggle')) ||
          (choice === 'unknown' && card.classList.contains('vocab-card--unknown'));
        applyVocabCardRating(card, data.book, data.lessonNum, index, isToggleOff ? null : choice);
        placeVocabCardInBucket(card, slot);
      });
    });

    if (saved === 'know') {
      card.classList.add('vocab-card--compact-known');
      insertVocabCardSorted(knownGrid, card);
    } else {
      insertVocabCardSorted(activeGrid, card);
    }
  });

  refreshVocabKnownBucket(ctx);
  attachArabicWordMeaningToggles(slot);
}

// ─────────────────────────────────────────────────────────────
// PANEL BUILDERS
// ─────────────────────────────────────────────────────────────

function buildVocabularyPanel(data) {
  const slot = document.querySelector('#panel-vocab .vocab-grid');
  if (!slot) return;

  slot.className = 'vocab-layout';
  slot.innerHTML = '';
  slot._vocabCtx = null;

  if (data.guidedPages && data.guidedPages.length) {
    const panelNav = document.querySelector('#panel-vocab > .panel-nav');
    if (panelNav) panelNav.hidden = true;

    const pager = document.createElement('section');
    pager.className = 'guided-page-shell';
    pager.dataset.pageIndex = '0';
    slot.appendChild(pager);

    const renderPage = pageIndex => {
      const page = data.guidedPages[pageIndex];
      const total = data.guidedPages.length;
      const cardsHtml = (page.cards || []).map(item => `
        <article class="guided-sentence-card">
          <div class="guided-sentence-visual${item.icon && [...item.icon].length > 1 ? ' guided-sentence-visual--multi' : ''}" aria-hidden="true">${renderIcon(item.icon)}</div>
          <div class="guided-sentence-body">
            ${renderGuidedArabicLine(item.ar, data.vocab)}
          </div>
        </article>
      `).join('');

      const linesHtml = (page.lines || []).map((item, i) => {
        const gloss = getPhraseGloss(item.ar, data.vocab);
        return `
          <article class="guided-line-card${item.isPrompt ? ' guided-line-card--prompt' : ''}">
            <div class="guided-line-num">${i + 1}</div>
            <div class="guided-sentence-body">
              ${renderGuidedArabicLine(item.ar, data.vocab)}
              <div class="guided-sentence-trans">${gloss.trans}</div>
              <div class="guided-sentence-meaning">${gloss.meaning}</div>
            </div>
          </article>
        `;
      }).join('');

      const groupsHtml = (page.groups || []).map(group => `
        <article class="guided-qa-card">
          <div class="guided-sentence-visual${group.icon && [...group.icon].length > 1 ? ' guided-sentence-visual--multi' : ''}" aria-hidden="true">${renderIcon(group.icon)}</div>
          <div class="guided-qa-body">
            ${(group.lines || []).map(line => `
              <div class="guided-qa-line${line.isPrompt ? ' guided-qa-line--prompt' : ''}">
                ${renderGuidedArabicLine(line.ar, data.vocab)}
              </div>
            `).join('')}
          </div>
        </article>
      `).join('');

      const exerciseItems = page.exercise || [];
      const exerciseHtml = exerciseItems.map((item, i) => {
        const eid = `ex_${pageIndex}_${i}`;
        const promptText = item.prompt || 'مَا هٰذَا؟';
        const placeholder = promptText.includes('أَهٰذَا') ? 'نَعَمْ / لا ...' : 'هٰذَا ...';
        const acceptsPayload = encodeExercisePayload(item.accepts);
        return `
          <article class="guided-exercise-card" id="card_${eid}" data-exercise-id="${eid}" data-accepts="${acceptsPayload}" data-total="${exerciseItems.length}">
            <div class="guided-exercise-icon" aria-hidden="true">${item.icon}</div>
            <div class="guided-exercise-prompt">${annotateArabicText(promptText, data.vocab)}</div>
            <div class="guided-exercise-input-row">
              <input class="arabic-input guided-exercise-input" type="text" id="${eid}"
                placeholder="${placeholder}"
                autocomplete="off" dir="rtl" />
              <button class="btn btn-secondary guided-exercise-check" type="button">Check</button>
            </div>
            <div class="guided-exercise-feedback" id="fb_${eid}"></div>
            <div class="guided-exercise-reveal" id="rv_${eid}" style="display:none">${annotateArabicText(item.ideal, data.vocab)}</div>
            <button class="guided-exercise-redo" type="button" hidden>Redo</button>
          </article>
        `;
      }).join('');

      const keyHtml = (page.keyPoints || []).length ? `
        <div class="guided-key-points">
          ${(page.keyPoints || []).map(point => `<div>${annotateArabicText(point, data.vocab)}</div>`).join('')}
        </div>
      ` : '';

      pager.innerHTML = `
        ${exerciseItems.length ? '' : `
          <div class="guided-lesson-intro">
            ${page.titleArabic ? `<div class="guided-page-title-arabic">${page.titleArabic}</div>` : ''}
            ${page.title ? `<div class="guided-page-title">${page.title}</div>` : ''}
            ${page.pattern ? `<div class="guided-pattern">${page.pattern}</div>` : ''}
            ${page.intro ? `<p>${page.intro}</p>` : ''}
          </div>
        `}
        ${cardsHtml ? `<div class="guided-sentence-grid">${cardsHtml}</div>` : ''}
        ${groupsHtml ? `<div class="guided-qa-stack">${groupsHtml}</div>` : ''}
        ${linesHtml ? `<div class="guided-line-stack">${linesHtml}</div>` : ''}
        ${page.tip ? `<p class="guided-exercise-tip">${page.tip}</p>` : ''}
        ${exerciseHtml ? `<div class="guided-exercise-grid">${exerciseHtml}</div>` : ''}
        ${keyHtml}
        <div class="guided-page-controls">
          ${pageIndex === 0
            ? '<a class="btn btn-secondary" href="../book1.html">← Back to Book</a>'
            : '<button type="button" class="btn btn-secondary" data-guided-prev>← Back</button>'}
          <button type="button" class="btn btn-primary" data-guided-next
            ${exerciseItems.length ? 'disabled data-exercise-locked="true"' : ''}>
            ${pageIndex === total - 1 ? 'Next: Reading →' : 'Next →'}
          </button>
          ${exerciseItems.length ? '<p class="guided-exercise-lock-hint">Complete all exercises above to continue</p>' : ''}
        </div>
      `;

      attachArabicWordMeaningToggles(pager);
      attachGuidedExerciseHandlers(pager);
      restoreGuidedExerciseStates(pager);

      // Save current page to localStorage
      saveGuidedPage(pageIndex);

      // Update in-lesson progress bar
      updateGuidedProgress(pageIndex, total);

      const prevBtn = pager.querySelector('[data-guided-prev]');
      if (prevBtn) {
        prevBtn.addEventListener('click', () => renderPage(pageIndex - 1));
      }

      const nextBtn = pager.querySelector('[data-guided-next]');
      if (nextBtn) {
        nextBtn.addEventListener('click', () => {
          if (pageIndex < total - 1) {
            if (!data.skipMidMilestone && pageIndex === getMilestonePageIndex(total)) {
              showGuidedMilestone(data, () => {
                renderPage(pageIndex + 1);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              });
              return;
            }
            renderPage(pageIndex + 1);
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return;
          }
          showGuidedFinalMilestone(data, () => {
            unlockAndGo('lesson');
          });
        });
      }
    };

    const savedPage = Math.min(loadGuidedPage(), data.guidedPages.length - 1);
    renderPage(savedPage);
    return;
  }

  if (data.guidedSentences && data.guidedSentences.length) {
    const intro = document.createElement('div');
    intro.className = 'guided-lesson-intro';
    intro.innerHTML = `
      <div class="guided-pattern">${data.guidedPattern || ''}</div>
      <p>${data.guidedIntro || 'Start with the sentence pattern, then tap Arabic words to see what they mean.'}</p>
    `;
    slot.appendChild(intro);

    const sentenceGrid = document.createElement('div');
    sentenceGrid.className = 'guided-sentence-grid';

    data.guidedSentences.forEach(item => {
      const card = document.createElement('article');
      card.className = 'guided-sentence-card';
      card.innerHTML = `
        <div class="guided-sentence-visual${item.icon && [...item.icon].length > 1 ? ' guided-sentence-visual--multi' : ''}" aria-hidden="true">${renderIcon(item.icon)}</div>
        <div class="guided-sentence-body">
          <div class="guided-sentence-arabic">${annotateArabicText(item.ar, data.vocab)}</div>
          <div class="guided-sentence-trans">${item.trans}</div>
          <div class="guided-sentence-meaning">${item.meaning}</div>
        </div>
      `;
      sentenceGrid.appendChild(card);
    });

    slot.appendChild(sentenceGrid);
    attachArabicWordMeaningToggles(slot);
    if (data.reviewVocabAtEnd) return;
  }

  buildVocabRatingLayout(data, slot);
}

function buildLessonPanel(data) {
  const lessonContent = document.querySelector('#panel-lesson .lesson-content-inner');
  if (!lessonContent) return;
  
  let html = '';
  
  data.grammarBlocks.forEach(block => {
    html += `
      <div class="grammar-block">
        <h3>${block.title}</h3>
        ${block.content}
        <div class="grammar-rule">${block.rule}</div>
      </div>
    `;
  });
  
  lessonContent.innerHTML = html;
}

function buildComprehensionPanel(data) {
  const comprehensionPanel = document.getElementById('panel-comprehension');
  if (!comprehensionPanel) return;
  
  const comprehensionContent = comprehensionPanel.querySelector('.comprehension-content');
  if (!comprehensionContent) return;
  
  if (!data.comprehension) {
    // If no comprehension data, hide the step from navigation
    const stepBtn = document.getElementById('step-comprehension');
    if (stepBtn) stepBtn.style.display = 'none';
    return;
  }
  
  let html = `
    <div class="comprehension-story">
      <div class="comprehension-story-title">${data.comprehension.title}</div>
      <div class="comprehension-story-arabic">${annotateArabicText(data.comprehension.arabic, data.vocab)}</div>
      <details class="comprehension-translation-details">
        <summary>Show Translation</summary>
        <div class="comprehension-story-english">${data.comprehension.english}</div>
      </details>
    </div>
    <div class="comprehension-questions">
  `;
  
  data.comprehension.questions.forEach((q, idx) => {
    const qNum = idx + 1;
    const optionsHtml = q.options.map((opt, optIdx) => {
      const isCorrect = opt === q.correct;
      return `<button class="comprehension-option" onclick="checkComprehension(this, ${qNum}, ${isCorrect})">${opt}</button>`;
    }).join('');
    
    html += `
      <div class="comprehension-question">
        <div class="comprehension-q-number">Question ${displayNumber(qNum)}</div>
        <div class="comprehension-q-text">${q.text}</div>
        <div class="comprehension-options">${optionsHtml}</div>
        <div class="comprehension-feedback"></div>
      </div>
    `;
    COMPREHENSION_RESULTS[qNum] = null;
  });
  
  html += `</div>`;
  comprehensionContent.innerHTML = html;
  attachArabicWordMeaningToggles(comprehensionContent);
}


function buildQuizPanel(data) {
  const quizContainer = document.querySelector('#panel-quiz .quiz-container');
  if (!quizContainer) return;
  
  // Set title in nav and quiz panel
  const navTitle = document.getElementById('navTitle');
  if (navTitle) navTitle.textContent = `Lesson ${displayNumber(data.lessonNum)} — Kalamo`;

  const mcCount = data.quizQuestions.multipleChoice.length;
  const typingCount = data.quizQuestions.typing.length;
  const conceptCount = (data.quizQuestions.conceptCheck || []).length;
  const total = mcCount + typingCount + conceptCount;
  const quizTotalLabel = document.getElementById('quizTotalLabel');
  const quizIntroCard = document.getElementById('quizIntroCard');
  const quizPanelNav = document.getElementById('quizPanelNav');
  if (quizTotalLabel) {
    quizTotalLabel.textContent = `${displayNumber(total)} questions. Score ${displayNumber(data.passMark)} or more to pass.`;
    quizTotalLabel.style.display = 'none';
  }
  if (quizIntroCard) {
    quizIntroCard.style.display = 'block';
    quizIntroCard.innerHTML = `
      <div class="quiz-intro-eyebrow">Quiz</div>
      <div class="quiz-intro-title">Ready for the check?</div>
      <div class="quiz-intro-meta">
        <span class="quiz-intro-pill">${displayNumber(total)} questions</span>
        <span class="quiz-intro-pill">Score ${displayNumber(data.passMark)}+ to pass</span>
      </div>
      <button type="button" class="btn btn-primary" onclick="startQuiz()">Start Quiz →</button>
    `;
  }
  if (quizPanelNav) quizPanelNav.style.display = 'none';
  quizContainer.style.display = 'none';
  
  let html = '';

  // Concept check (True/False grammar questions) — rendered first
  (data.quizQuestions.conceptCheck || []).forEach((q, idx) => {
    const qNum = idx + 1;
    const trueIsCorrect = q.correct === true;
    html += `
      <div class="quiz-question" id="qq${qNum}">
        <div class="quiz-q-number">
          <span class="concept-check-tag">Grammar</span>
          Question ${displayNumber(qNum)} of ${displayNumber(total)}
        </div>
        <div class="concept-stmt">${q.statement}</div>
        <div class="concept-btn-row">
          <button class="concept-btn" onclick="checkConcept(this, ${qNum}, ${trueIsCorrect}, ${idx})">✓ True</button>
          <button class="concept-btn" onclick="checkConcept(this, ${qNum}, ${!trueIsCorrect}, ${idx})">✗ False</button>
        </div>
        <div class="quiz-feedback" id="qf${qNum}"></div>
      </div>
    `;
  });

  // Multiple choice questions
  data.quizQuestions.multipleChoice.forEach((q, idx) => {
    const qNum = conceptCount + idx + 1;
    const optionsHtml = q.options.map((opt, optIdx) => {
      const isCorrect = optIdx === q.correct;
      return `<button class="quiz-option" onclick="checkQuiz(this, ${qNum}, ${isCorrect})">${opt}</button>`;
    }).join('');
    html += `
      <div class="quiz-question" id="qq${qNum}">
        <div class="quiz-q-number">Question ${displayNumber(qNum)} of ${displayNumber(total)}</div>
        <div class="quiz-q-prompt">${q.prompt}</div>
        ${q.arabic ? `<div class="quiz-q-arabic">${q.arabic}</div>` : ''}
        <div class="quiz-options">${optionsHtml}</div>
        <div class="quiz-feedback" id="qf${qNum}"></div>
      </div>
    `;
  });

  // Typing questions
  data.quizQuestions.typing.forEach((q, idx) => {
    const qNum = conceptCount + mcCount + idx + 1;
    html += `
      <div class="quiz-question" id="qq${qNum}">
        <div class="quiz-q-number">Question ${displayNumber(qNum)} of ${displayNumber(total)}</div>
        <div class="quiz-q-prompt">${q.prompt}</div>
        <div class="arabic-input-wrap">
          <input class="arabic-input" type="text" id="qi${qNum}" placeholder="اكتب هنا..." autocomplete="off" onkeydown="if(event.key==='Enter') checkTyping(${qNum}, CURRENT_LESSON_DATA.quizQuestions.typing[${idx}])" />
        </div>
        <div class="guided-exercise-tip">💡 Pro tip: You don't need to type vowel marks — type bare letters and it will still match.</div>
        <div style="margin-top:0.6rem;">
          <button class="btn btn-secondary" id="checkBtn${qNum}" onclick="checkTyping(${qNum}, CURRENT_LESSON_DATA.quizQuestions.typing[${idx}])">Check Answer</button>
        </div>
        <div class="quiz-feedback" id="qf${qNum}"></div>
        <div class="quiz-ideal" id="ideal${qNum}" style="display:none; margin-top:0.5rem; font-family:'Amiri',serif; font-size:1.15rem; color:var(--text-mid); direction:rtl; text-align:right;"></div>
      </div>
    `;
  });

  quizContainer.innerHTML = html;

  // Initialize QUIZ_RESULTS
  for (let i = 1; i <= total; i++) {
    QUIZ_RESULTS[i] = null;
  }
}

// ─────────────────────────────────────────────────────────────
// MAIN INITIALISATION
// ─────────────────────────────────────────────────────────────

function initLesson() {
  if (!CURRENT_LESSON_DATA) {
    console.error('No lesson data loaded!');
    return;
  }
  
  // Set page title and header
  document.title = `Lesson ${CURRENT_LESSON_NUM} — ${CURRENT_LESSON_DATA.titleArabic} — Kalamo`;
  
  setupLessonIntro();

  if (CURRENT_LESSON_DATA.guidedSentences && CURRENT_LESSON_DATA.guidedSentences.length) {
    const vocabStepLabel = document.querySelector('#step-vocab .step-label');
    const lessonStepLabel = document.querySelector('#step-lesson .step-label');
    if (vocabStepLabel) vocabStepLabel.textContent = 'Learn';
    if (lessonStepLabel) lessonStepLabel.textContent = 'Questions';
  }

  if (CURRENT_LESSON_DATA.guidedPages && CURRENT_LESSON_DATA.guidedPages.length) {
    const lessonStepLabel = document.querySelector('#step-lesson .step-label');
    const vocabStepLabel = document.querySelector('#step-vocab .step-label');
    const readingBackBtn = document.querySelector('#panel-comprehension .btn-secondary');
    if (vocabStepLabel) vocabStepLabel.textContent = 'Learn';
    if (lessonStepLabel) lessonStepLabel.textContent = 'Concepts';
    if (readingBackBtn) {
      readingBackBtn.textContent = '← Concepts';
      readingBackBtn.setAttribute('onclick', "goToStep('lesson')");
    }
  }
  
  // Build all panels
  buildVocabularyPanel(CURRENT_LESSON_DATA);
  buildLessonPanel(CURRENT_LESSON_DATA);
  buildComprehensionPanel(CURRENT_LESSON_DATA);
  buildQuizPanel(CURRENT_LESSON_DATA);
  restoreLessonResume();
  
  // Set next lesson link
  const nextBtn = document.getElementById('nextLessonBtn');
  if (nextBtn) {
    let nextHref = CURRENT_LESSON_DATA.nextLesson;
    // Transform b1-lesson2.html to lesson.html?book=1&lesson=2
    if (nextHref && nextHref.includes('-lesson')) {
      const match = nextHref.match(/b(\d+)-lesson(\d+)\.html/);
      if (match) {
        nextHref = `lesson.html?book=${match[1]}&lesson=${match[2]}`;
      }
    }
    nextBtn.href = nextHref;
  }
  
  // Update progress bar if function exists
  if (typeof updateProgressBar === 'function') {
    updateProgressBar(CURRENT_BOOK);
  }
}

// ─────────────────────────────────────────────────────────────
// GUIDED PAGES — EXERCISE LOGIC
// ─────────────────────────────────────────────────────────────

function checkGuidedExercise(eid, accepts, totalInPage) {
  const input = document.getElementById(eid);
  const feedback = document.getElementById(`fb_${eid}`);
  const reveal = document.getElementById(`rv_${eid}`);
  const card = document.getElementById(`card_${eid}`);
  if (!input || !feedback || !reveal || !card) return;
  const btn = card.querySelector('.guided-exercise-check');
  const redoBtn = card.querySelector('.guided-exercise-redo');

  if (input.disabled) return; // already checked

  const userRaw = input.value.trim();
  if (!userRaw) {
    feedback.textContent = 'Type your answer first.';
    feedback.className = 'guided-exercise-feedback wrong';
    return;
  }

  const isCorrect = accepts.some(a => normalise(a) === normalise(userRaw));
  const isIncompleteAnswer = !isCorrect && isGuidedIncompleteAnswer(userRaw, reveal.textContent);

  if (isCorrect) {
    input.disabled = true;
    if (btn) btn.disabled = true;
    reveal.style.display = 'block';
    if (redoBtn) redoBtn.hidden = false;
    feedback.textContent = '✓ Correct!';
    feedback.className = 'guided-exercise-feedback correct';
    card.classList.add('is-correct');
    saveGuidedExerciseState(card, { status: 'correct', value: userRaw });
  } else if (isIncompleteAnswer) {
    feedback.textContent = 'Good start. Complete the sentence.';
    feedback.className = 'guided-exercise-feedback hint';
    card.classList.remove('is-correct', 'is-wrong');
    reveal.style.display = 'none';
    if (redoBtn) redoBtn.hidden = true;
    saveGuidedExerciseState(card, { status: 'draft', value: userRaw });
    window.setTimeout(() => {
      input.focus();
      input.setSelectionRange(input.value.length, input.value.length);
    }, 0);
    return;
  } else {
    input.disabled = true;
    if (btn) btn.disabled = true;
    reveal.style.display = 'block';
    if (redoBtn) redoBtn.hidden = false;
    feedback.textContent = '✗ Not quite — here is the answer:';
    feedback.className = 'guided-exercise-feedback wrong';
    card.classList.add('is-wrong');
    saveGuidedExerciseState(card, { status: 'wrong', value: userRaw });
  }

  updateGuidedExerciseLock(totalInPage);
}

function arabicLettersOnly(value) {
  return stripDiacritics(value || '').replace(/[^\u0621-\u064A]/g, '');
}

function isGuidedIncompleteAnswer(userRaw, idealRaw) {
  const userLetters = arabicLettersOnly(userRaw);
  if (userLetters !== 'نعم' && userLetters !== 'لا') return false;
  return arabicLettersOnly(idealRaw).startsWith(userLetters);
}

function resetGuidedExercise(card) {
  if (!card) return;
  const input = card.querySelector('.guided-exercise-input');
  const checkBtn = card.querySelector('.guided-exercise-check');
  const redoBtn = card.querySelector('.guided-exercise-redo');
  const feedback = card.querySelector('.guided-exercise-feedback');
  const reveal = card.querySelector('.guided-exercise-reveal');

  card.classList.remove('is-correct', 'is-wrong');
  if (input) {
    input.disabled = false;
    input.value = '';
    window.setTimeout(() => input.focus(), 0);
  }
  if (checkBtn) checkBtn.disabled = false;
  if (redoBtn) redoBtn.hidden = true;
  if (feedback) {
    feedback.textContent = '';
    feedback.className = 'guided-exercise-feedback';
  }
  if (reveal) reveal.style.display = 'none';
  clearGuidedExerciseState(card);
  updateGuidedExerciseLock(Number(card.dataset.total || 0));
}

function guidedExerciseStateKey(card) {
  if (!CURRENT_LESSON_DATA || !card?.dataset?.exerciseId) return '';
  return `guided_exercise_${CURRENT_LESSON_DATA.book}_${CURRENT_LESSON_DATA.lessonNum}_${card.dataset.exerciseId}`;
}

function saveGuidedExerciseState(card, state) {
  const key = guidedExerciseStateKey(card);
  if (!key) return;
  localStorage.setItem(key, JSON.stringify({
    status: state.status || 'draft',
    value: state.value || ''
  }));
}

function loadGuidedExerciseState(card) {
  const key = guidedExerciseStateKey(card);
  if (!key) return null;
  try {
    return JSON.parse(localStorage.getItem(key) || 'null');
  } catch {
    return null;
  }
}

function clearGuidedExerciseState(card) {
  const key = guidedExerciseStateKey(card);
  if (key) localStorage.removeItem(key);
}

function restoreGuidedExerciseStates(root = document) {
  root.querySelectorAll('.guided-exercise-card').forEach(card => {
    const state = loadGuidedExerciseState(card);
    if (!state?.value) return;

    const input = card.querySelector('.guided-exercise-input');
    const checkBtn = card.querySelector('.guided-exercise-check');
    const redoBtn = card.querySelector('.guided-exercise-redo');
    const feedback = card.querySelector('.guided-exercise-feedback');
    const reveal = card.querySelector('.guided-exercise-reveal');
    if (!input || !feedback || !reveal) return;

    input.value = state.value;
    card.classList.remove('is-correct', 'is-wrong');
    feedback.className = 'guided-exercise-feedback';
    reveal.style.display = 'none';
    if (redoBtn) redoBtn.hidden = true;
    if (checkBtn) checkBtn.disabled = false;
    input.disabled = false;

    if (state.status === 'correct' || state.status === 'wrong') {
      input.disabled = true;
      if (checkBtn) checkBtn.disabled = true;
      if (redoBtn) redoBtn.hidden = false;
      reveal.style.display = 'block';
      if (state.status === 'correct') {
        feedback.textContent = '✓ Correct!';
        feedback.className = 'guided-exercise-feedback correct';
        card.classList.add('is-correct');
      } else {
        feedback.textContent = '✗ Not quite — here is the answer:';
        feedback.className = 'guided-exercise-feedback wrong';
        card.classList.add('is-wrong');
      }
    }
  });

  const total = Number(root.querySelector('.guided-exercise-card')?.dataset.total || 0);
  updateGuidedExerciseLock(total);
}

function updateGuidedExerciseLock(totalInPage) {
  if (!totalInPage) return;
  const allCards = document.querySelectorAll('.guided-exercise-card');
  const doneCount = [...allCards].filter(c => c.querySelector('.guided-exercise-input:disabled')).length;
  const nextBtn = document.querySelector('[data-guided-next]');
  const hint = document.querySelector('.guided-exercise-lock-hint');

  if (doneCount >= totalInPage) {
    if (nextBtn) {
      nextBtn.disabled = false;
      nextBtn.removeAttribute('data-exercise-locked');
    }
    if (hint) hint.style.display = 'none';
    return;
  }

  if (nextBtn && allCards.length) {
    nextBtn.disabled = true;
    nextBtn.setAttribute('data-exercise-locked', 'true');
  }
  if (hint) hint.style.display = '';
}

// ─────────────────────────────────────────────────────────────
// GUIDED PAGES — STATE (localStorage)
// ─────────────────────────────────────────────────────────────

function guidedPageKey() {
  if (!CURRENT_LESSON_DATA) return '';
  return `guided_page_${CURRENT_LESSON_DATA.book}_${CURRENT_LESSON_DATA.lessonNum}`;
}

function guidedResumeKey() {
  if (!CURRENT_LESSON_DATA) return '';
  return `guided_resume_${CURRENT_LESSON_DATA.book}_${CURRENT_LESSON_DATA.lessonNum}`;
}

function lessonStepKey() {
  if (!CURRENT_LESSON_DATA) return '';
  return `lesson_step_${CURRENT_LESSON_DATA.book}_${CURRENT_LESSON_DATA.lessonNum}`;
}

function saveGuidedPage(pageIndex) {
  const pageKey = guidedPageKey();
  const resumeKey = guidedResumeKey();
  if (!pageKey || !resumeKey) return;
  localStorage.setItem(pageKey, String(pageIndex));
  localStorage.setItem(resumeKey, 'active');
}

function saveLessonStep(step) {
  const stepKey = lessonStepKey();
  const resumeKey = guidedResumeKey();
  if (!stepKey || !resumeKey || !step) return;
  localStorage.setItem(stepKey, step);
  localStorage.setItem(resumeKey, 'active');
}

function loadGuidedPage() {
  const key = guidedPageKey();
  if (!key) return 0;
  return parseInt(localStorage.getItem(key) || '0', 10);
}

function shouldSkipLessonIntro() {
  const resumeKey = guidedResumeKey();
  if (!resumeKey || localStorage.getItem(resumeKey) !== 'active') return false;
  const savedPage = loadGuidedPage();
  if (savedPage > 0) return true;
  const savedStep = localStorage.getItem(lessonStepKey()) || 'vocab';
  return savedStep !== 'vocab';
}

function restoreLessonResume() {
  const resumeKey = guidedResumeKey();
  const stepKey = lessonStepKey();
  if (!resumeKey || localStorage.getItem(resumeKey) !== 'active') return;

  const savedStep = localStorage.getItem(stepKey) || 'vocab';
  const stepOrder = ['vocab', 'lesson', 'comprehension', 'quiz'];
  const targetIndex = stepOrder.indexOf(savedStep);
  if (targetIndex <= 0) return;

  stepOrder.slice(0, targetIndex + 1).forEach(step => {
    UNLOCKED_STEPS[step] = true;
    const btn = document.getElementById(`step-${step}`);
    if (btn) btn.classList.remove('locked');
    if (stepOrder.indexOf(step) < targetIndex) btn?.classList.add('completed');
  });
  goToStep(savedStep);
}

function clearGuidedResume() {
  const pageKey = guidedPageKey();
  const resumeKey = guidedResumeKey();
  const stepKey = lessonStepKey();
  const exercisePrefix = CURRENT_LESSON_DATA
    ? `guided_exercise_${CURRENT_LESSON_DATA.book}_${CURRENT_LESSON_DATA.lessonNum}_`
    : '';
  if (pageKey) localStorage.removeItem(pageKey);
  if (resumeKey) localStorage.removeItem(resumeKey);
  if (stepKey) localStorage.removeItem(stepKey);
  if (exercisePrefix) {
    Object.keys(localStorage)
      .filter(key => key.startsWith(exercisePrefix))
      .forEach(key => localStorage.removeItem(key));
  }
}

function updateGuidedProgress(pageIndex, total) {
  const wrap = document.getElementById('guidedPageProgress');
  const bar = document.getElementById('guidedProgressFill');
  const label = document.getElementById('guidedProgressLabel');
  const marker = document.getElementById('guidedMilestoneMarker');
  const markerEnd = document.getElementById('guidedMilestoneMarkerEnd');
  if (!bar) return;
  if (wrap) wrap.style.display = 'flex';
  const pct = Math.round(((pageIndex + 1) / total) * 100);
  bar.style.width = pct + '%';

  if (marker) {
    const milestoneIdx = getMilestonePageIndex(total);
    const milestonePct = ((milestoneIdx + 1) / total) * 100;
    marker.style.left = milestonePct.toFixed(1) + '%';
    if (pageIndex > milestoneIdx) {
      marker.classList.add('milestone-marker--passed');
    } else {
      marker.classList.remove('milestone-marker--passed');
    }
  }

  if (markerEnd) {
    markerEnd.style.left = '100%';
    if (pageIndex >= total - 1) {
      markerEnd.classList.add('milestone-marker--passed');
    } else {
      markerEnd.classList.remove('milestone-marker--passed');
    }
  }

  if (label) {
    const milestoneIdx = getMilestonePageIndex(total);
    if (pageIndex === total - 1) {
      label.textContent = `Page ${pageIndex + 1} of ${total}  🏁`;
    } else if (pageIndex === milestoneIdx) {
      label.textContent = `Page ${pageIndex + 1} of ${total}  ✨`;
    } else if (pageIndex > milestoneIdx) {
      label.textContent = `Page ${pageIndex + 1} of ${total}  💪`;
    } else {
      label.textContent = `Page ${pageIndex + 1} of ${total}`;
    }
  }
}

// ─────────────────────────────────────────────────────────────
// MILESTONE CELEBRATION (shown mid-way through guided lesson)
// ─────────────────────────────────────────────────────────────

function getMilestonePageIndex(total) {
  if (CURRENT_LESSON_DATA && typeof CURRENT_LESSON_DATA.milestoneAfterPage === 'number') {
    return Math.min(CURRENT_LESSON_DATA.milestoneAfterPage, total - 2);
  }
  return Math.max(1, Math.min(Math.ceil(total / 2) - 1, total - 2));
}

function extractArabicTextFromGuidedPage(page) {
  const texts = [];
  (page.cards || []).forEach(c => texts.push(c.ar));
  (page.groups || []).forEach(g => (g.lines || []).forEach(l => texts.push(l.ar)));
  (page.exercise || []).forEach(e => {
    if (e.prompt) texts.push(e.prompt);
    if (e.ideal) texts.push(e.ideal);
    (e.accepts || []).forEach(a => texts.push(a));
  });
  (page.lines || []).forEach(l => texts.push(l.ar));
  (page.keyPoints || []).forEach(k => texts.push(k));
  return texts;
}

function getSeenVocabWords(data, upToPageIndex) {
  if (!data.vocab || !data.guidedPages) return [];
  const seenTexts = [];
  for (let i = 0; i <= upToPageIndex && i < data.guidedPages.length; i++) {
    seenTexts.push(...extractArabicTextFromGuidedPage(data.guidedPages[i]));
  }
  const allArabic = seenTexts.join(' ');
  return data.vocab.filter(v => allArabic.includes(v.ar));
}

function getSeenVocabWordsBetween(data, fromPage, toPage) {
  if (!data.vocab || !data.guidedPages) return [];

  const newTexts = [];
  for (let i = fromPage; i <= toPage && i < data.guidedPages.length; i++) {
    newTexts.push(...extractArabicTextFromGuidedPage(data.guidedPages[i]));
  }
  const newArabic = newTexts.join(' ');

  const oldTexts = [];
  for (let i = 0; i < fromPage && i < data.guidedPages.length; i++) {
    oldTexts.push(...extractArabicTextFromGuidedPage(data.guidedPages[i]));
  }
  const oldArabic = oldTexts.join(' ');

  return data.vocab.filter(v => newArabic.includes(v.ar) && !oldArabic.includes(v.ar));
}

function buildSatchelSVG() {
  return `<svg class="satchel-svg" viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M 34 30 Q 50 14 66 30" stroke="#C4904A" stroke-width="4.5" fill="none" stroke-linecap="round"/>
    <path d="M 16 46 C 12 92 18 112 50 114 C 82 112 88 92 84 46 Z" fill="#A0622A"/>
    <rect x="13" y="38" width="74" height="15" rx="7.5" fill="#7B4A1E"/>
    <line x1="50" y1="56" x2="50" y2="108" stroke="#7B4A1E" stroke-width="1.5" stroke-dasharray="4 3" opacity="0.45"/>
    <rect x="37" y="43" width="26" height="10" rx="5" fill="#D4A030"/>
    <rect x="43" y="46" width="14" height="4" rx="2" fill="#A0622A"/>
    <path d="M 24 60 Q 28 50 36 56" stroke="rgba(255,210,130,0.28)" stroke-width="3.5" fill="none" stroke-linecap="round"/>
  </svg>`;
}

function launchMilestoneConfetti() {
  const canvas = document.getElementById('milestoneCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const COLORS = ['#7C5CFC', '#B5935A', '#FFD166', '#06D6A0', '#EF476F', '#a78bfa', '#ffd700'];
  const SHAPES = ['✦', '★', '✿', '◆', '✶'];
  const particles = Array.from({ length: 65 }, () => {
    const angle = Math.random() * Math.PI * 2;
    const speed = 3.5 + Math.random() * 9;
    return {
      x: canvas.width / 2, y: canvas.height * 0.38,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed - 5,
      gravity: 0.19 + Math.random() * 0.1,
      alpha: 1,
      size: 11 + Math.random() * 16,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      shape: SHAPES[Math.floor(Math.random() * SHAPES.length)],
      rotation: Math.random() * Math.PI * 2,
      rotSpeed: (Math.random() - 0.5) * 0.14,
      decay: 0.011 + Math.random() * 0.009
    };
  });

  let rafId;
  const animate = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let anyAlive = false;
    particles.forEach(p => {
      if (p.alpha <= 0) return;
      anyAlive = true;
      p.x += p.vx; p.y += p.vy;
      p.vy += p.gravity; p.vx *= 0.99;
      p.rotation += p.rotSpeed;
      p.alpha -= p.decay;
      ctx.save();
      ctx.globalAlpha = Math.max(0, p.alpha);
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rotation);
      ctx.font = `${p.size}px serif`;
      ctx.fillStyle = p.color;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(p.shape, 0, 0);
      ctx.restore();
    });
    if (anyAlive) rafId = requestAnimationFrame(animate);
  };
  animate();
  setTimeout(() => { cancelAnimationFrame(rafId); ctx.clearRect(0, 0, canvas.width, canvas.height); }, 5000);
}

function showGuidedMilestone(data, onContinue) {
  const existing = document.getElementById('milestoneOverlay');
  if (existing) existing.remove();

  const milestonePage = getMilestonePageIndex(data.guidedPages.length);
  const seenWords = getSeenVocabWords(data, milestonePage);
  const displayWords = seenWords;

  const overlay = document.createElement('div');
  overlay.id = 'milestoneOverlay';
  overlay.className = 'milestone-overlay';
  overlay.innerHTML = `
    <canvas id="milestoneCanvas" class="milestone-canvas"></canvas>
    <div class="milestone-card" id="milestoneCard">
      <div class="milestone-ornament" aria-hidden="true">✦</div>
      <h2 class="milestone-heading">Amazing work!</h2>
      <p class="milestone-sub">You've already learned <strong>${seenWords.length}</strong> new words</p>
      <div class="milestone-chips" id="milestoneChips"></div>
      <button type="button" class="btn btn-secondary milestone-pack-btn" id="milestonePackBtn" style="opacity:0;transform:translateY(10px)">Pack words into satchel 🎒</button>
      <div class="milestone-satchel-wrap" id="milestoneSatchelWrap" style="opacity:0">
        <p class="milestone-satchel-label">Words packed into your satchel</p>
        <div class="milestone-satchel" id="milestoneSatchel">${buildSatchelSVG()}</div>
      </div>
      <div class="milestone-btn-wrap" id="milestoneBtnWrap" style="opacity:0">
        <button type="button" class="btn btn-primary" id="milestoneContinueBtn">Keep going →</button>
      </div>
    </div>
  `;
  document.body.appendChild(overlay);
  launchMilestoneConfetti();

  const chipsContainer = document.getElementById('milestoneChips');
  const packBtn        = document.getElementById('milestonePackBtn');
  const satchelWrap    = document.getElementById('milestoneSatchelWrap');
  const satchelEl      = document.getElementById('milestoneSatchel');
  const btnWrap        = document.getElementById('milestoneBtnWrap');
  const continueBtn    = document.getElementById('milestoneContinueBtn');

  continueBtn.addEventListener('click', () => {
    overlay.style.transition = 'opacity 0.3s ease';
    overlay.style.opacity = '0';
    setTimeout(() => { overlay.remove(); onContinue(); }, 320);
  });

  if (!displayWords.length) {
    packBtn.style.display = 'none';
    satchelWrap.style.opacity = '1';
    btnWrap.style.transition = 'opacity 0.45s ease';
    btnWrap.style.opacity = '1';
    return;
  }

  displayWords.forEach(w => {
    const chip = document.createElement('span');
    chip.className = 'milestone-chip';
    chip.innerHTML = `<span class="chip-ar" dir="rtl">${w.ar}</span><span class="chip-en">${w.meaning}</span>`;
    chip.style.cssText = 'opacity:0;transform:translateY(10px)';
    chipsContainer.appendChild(chip);
  });

  const chips = Array.from(chipsContainer.querySelectorAll('.milestone-chip'));
  if (!chips.length) return;

  chips.forEach((chip, i) => {
    setTimeout(() => {
      chip.style.transition = 'opacity 0.35s ease, transform 0.35s ease';
      chip.style.opacity = '1';
      chip.style.transform = 'translateY(0)';
    }, 600 + i * 70);
  });

  const packDelay = 600 + chips.length * 70 + 200;
  setTimeout(() => {
    packBtn.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
    packBtn.style.opacity = '1';
    packBtn.style.transform = 'translateY(0)';
  }, packDelay);

  packBtn.addEventListener('click', () => {
    packBtn.disabled = true;
    packBtn.style.transition = 'opacity 0.2s ease';
    packBtn.style.opacity = '0';

    // Persist all lesson vocab to SRS satchel
    if (window.SRS && data.vocab) {
      SRS.discoverWords(data.book || 'book1', data.lessonNum, data.vocab);
    }

    satchelWrap.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    satchelWrap.style.opacity = '1';

    setTimeout(() => {
      const satchelRect = satchelEl.getBoundingClientRect();
      const tx = satchelRect.left + satchelRect.width / 2;
      const ty = satchelRect.top + satchelRect.height / 2;
      const totalDuration = chips.length * 65 + 520;
      const collapseAt = chips.length * 65 - 30;

      chips.forEach((chip, i) => {
        setTimeout(() => {
          const r = chip.getBoundingClientRect();
          const dx = tx - (r.left + r.width / 2);
          const dy = ty - (r.top + r.height / 2);
          chip.style.transition = 'all 0.55s cubic-bezier(0.25, 0.1, 0.3, 1)';
          chip.style.transform  = `translate(${dx}px, ${dy}px) scale(0.06)`;
          chip.style.opacity    = '0';

          if (i === chips.length - 1) {
            setTimeout(() => {
              satchelEl.classList.add('milestone-satchel--jiggle');
              setTimeout(() => {
                satchelEl.classList.remove('milestone-satchel--jiggle');
                satchelEl.classList.add('milestone-satchel--lift');
                setTimeout(() => satchelEl.classList.remove('milestone-satchel--lift'), 850);
              }, 520);
            }, 480);
          }
        }, i * 65);
      });

      setTimeout(() => {
        chipsContainer.style.transition = 'max-height 0.45s ease, margin 0.45s ease, padding 0.45s ease';
        chipsContainer.style.maxHeight  = '0';
        chipsContainer.style.margin     = '0';
        chipsContainer.style.padding    = '0';
        chipsContainer.style.overflow   = 'hidden';
      }, collapseAt);

      setTimeout(() => {
        btnWrap.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        btnWrap.style.opacity    = '1';
        btnWrap.style.transform  = 'translateY(0)';
      }, totalDuration);
    }, 350);
  });
}

function showGuidedFinalMilestone(data, onContinue) {
  const existing = document.getElementById('milestoneOverlay');
  if (existing) existing.remove();

  const milestonePage = getMilestonePageIndex(data.guidedPages.length);
  const newWords = getSeenVocabWordsBetween(data, milestonePage + 1, data.guidedPages.length - 1);
  const allSeen = getSeenVocabWords(data, data.guidedPages.length - 1);
  const finalSub = data.skipMidMilestone
    ? `You've learned <strong>${allSeen.length}</strong> words in this lesson`
    : `You've learned <strong>${allSeen.length}</strong> words in this lesson${newWords.length ? ` — ${newWords.length} more since the milestone` : ''}`;

  const overlay = document.createElement('div');
  overlay.id = 'milestoneOverlay';
  overlay.className = 'milestone-overlay';
  overlay.innerHTML = `
    <canvas id="milestoneCanvas" class="milestone-canvas"></canvas>
    <div class="milestone-card" id="milestoneCard">
      <div class="milestone-ornament" aria-hidden="true">★</div>
      <h2 class="milestone-heading">Lesson Complete!</h2>
      <p class="milestone-sub">${finalSub}</p>
      <div class="milestone-chips" id="milestoneChips"></div>
      <button type="button" class="btn btn-secondary milestone-pack-btn" id="milestonePackBtn" style="opacity:0;transform:translateY(10px)">Pack words into satchel 🎒</button>
      <div class="milestone-satchel-wrap" id="milestoneSatchelWrap" style="opacity:0">
        <p class="milestone-satchel-label">Words packed into your satchel</p>
        <div class="milestone-satchel" id="milestoneSatchel">${buildSatchelSVG()}</div>
      </div>
      <div class="milestone-btn-wrap" id="milestoneBtnWrap" style="opacity:0">
        <button type="button" class="btn btn-primary" id="milestoneContinueBtn">See what you've learned →</button>
      </div>
    </div>
  `;
  document.body.appendChild(overlay);
  launchMilestoneConfetti();

  const chipsContainer = document.getElementById('milestoneChips');
  const packBtn        = document.getElementById('milestonePackBtn');
  const satchelWrap    = document.getElementById('milestoneSatchelWrap');
  const satchelEl      = document.getElementById('milestoneSatchel');
  const btnWrap        = document.getElementById('milestoneBtnWrap');
  const continueBtn    = document.getElementById('milestoneContinueBtn');

  continueBtn.addEventListener('click', () => {
    overlay.style.transition = 'opacity 0.3s ease';
    overlay.style.opacity = '0';
    setTimeout(() => { overlay.remove(); onContinue(); }, 320);
  });

  const displayWords = data.skipMidMilestone ? allSeen : (newWords.length ? newWords : allSeen);

  if (!displayWords.length) {
    packBtn.style.display = 'none';
    satchelWrap.style.opacity = '1';
    btnWrap.style.transition = 'opacity 0.45s ease';
    btnWrap.style.opacity = '1';
    return;
  }

  displayWords.forEach(w => {
    const chip = document.createElement('span');
    chip.className = 'milestone-chip';
    chip.innerHTML = `<span class="chip-ar" dir="rtl">${w.ar}</span><span class="chip-en">${w.meaning}</span>`;
    chip.style.cssText = 'opacity:0;transform:translateY(10px)';
    chipsContainer.appendChild(chip);
  });

  const chips = Array.from(chipsContainer.querySelectorAll('.milestone-chip'));
  if (!chips.length) return;

  chips.forEach((chip, i) => {
    setTimeout(() => {
      chip.style.transition = 'opacity 0.35s ease, transform 0.35s ease';
      chip.style.opacity = '1';
      chip.style.transform = 'translateY(0)';
    }, 600 + i * 70);
  });

  const packDelay = 600 + chips.length * 70 + 200;
  setTimeout(() => {
    packBtn.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
    packBtn.style.opacity = '1';
    packBtn.style.transform = 'translateY(0)';
  }, packDelay);

  packBtn.addEventListener('click', () => {
    packBtn.disabled = true;
    packBtn.style.transition = 'opacity 0.2s ease';
    packBtn.style.opacity = '0';

    // Persist all lesson vocab to SRS satchel
    if (window.SRS && data.vocab) {
      SRS.discoverWords(data.book || 'book1', data.lessonNum, data.vocab);
    }

    satchelWrap.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    satchelWrap.style.opacity = '1';

    setTimeout(() => {
      const satchelRect = satchelEl.getBoundingClientRect();
      const tx = satchelRect.left + satchelRect.width / 2;
      const ty = satchelRect.top + satchelRect.height / 2;
      const totalDuration = chips.length * 65 + 520;
      const collapseAt = chips.length * 65 - 30;

      chips.forEach((chip, i) => {
        setTimeout(() => {
          const r = chip.getBoundingClientRect();
          const dx = tx - (r.left + r.width / 2);
          const dy = ty - (r.top + r.height / 2);
          chip.style.transition = 'all 0.55s cubic-bezier(0.25, 0.1, 0.3, 1)';
          chip.style.transform  = `translate(${dx}px, ${dy}px) scale(0.06)`;
          chip.style.opacity    = '0';

          if (i === chips.length - 1) {
            setTimeout(() => {
              satchelEl.classList.add('milestone-satchel--jiggle');
              setTimeout(() => {
                satchelEl.classList.remove('milestone-satchel--jiggle');
                satchelEl.classList.add('milestone-satchel--lift');
                setTimeout(() => satchelEl.classList.remove('milestone-satchel--lift'), 850);
              }, 520);
            }, 480);
          }
        }, i * 65);
      });

      setTimeout(() => {
        chipsContainer.style.transition = 'max-height 0.45s ease, margin 0.45s ease, padding 0.45s ease';
        chipsContainer.style.maxHeight  = '0';
        chipsContainer.style.margin     = '0';
        chipsContainer.style.padding    = '0';
        chipsContainer.style.overflow   = 'hidden';
      }, collapseAt);

      setTimeout(() => {
        btnWrap.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        btnWrap.style.opacity    = '1';
        btnWrap.style.transform  = 'translateY(0)';
      }, totalDuration);
    }, 350);
  });
}

// Export for global access
window.goToStep = goToStep;
window.checkGuidedExercise = checkGuidedExercise;
window.unlockAndGo = unlockAndGo;
window.applyQuizJumpMode = applyQuizJumpMode;
window.checkQuiz = checkQuiz;
window.checkTyping = checkTyping;
window.submitQuiz = submitQuiz;
window.retryQuiz = retryQuiz;
window.startQuiz = startQuiz;
window.showQuizIntro = showQuizIntro;
