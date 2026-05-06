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
let UNLOCKED_STEPS = { vocab: true, lesson: false, comprehension: false, practice: false, quiz: false };
let QUIZ_RESULTS = {};
let COMPREHENSION_RESULTS = {};
let ACTIVE_INPUT = null;
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

function renderGuidedArabicLine(ar, vocab) {
  return `<div class="guided-sentence-arabic">${annotateArabicText(ar, vocab)}</div>`;
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

  const stepOrder = ['vocab', 'lesson', 'comprehension', 'practice', 'quiz'];
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
  UNLOCKED_STEPS = { vocab: true, lesson: true, comprehension: true, practice: true, quiz: true };
  ['vocab', 'lesson', 'comprehension', 'practice', 'quiz'].forEach(step => {
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
// PRACTICE FUNCTIONS
// ─────────────────────────────────────────────────────────────

function checkPractice(btn, isCorrect) {
  const container = btn.closest('.practice-question');
  const feedback = container.querySelector('.practice-feedback');
  const options = container.querySelectorAll('.practice-option');
  
  options.forEach(o => o.disabled = true);
  
  if (isCorrect) {
    btn.classList.add('correct');
    feedback.textContent = '✓ Correct!';
    feedback.className = 'practice-feedback correct';
  } else {
    btn.classList.add('wrong');
    feedback.textContent = '✗ Not quite — the correct answer is highlighted.';
    feedback.className = 'practice-feedback wrong';
    options.forEach(o => {
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

function submitQuiz() {
  // Auto-check any unanswered typing questions
  if (CURRENT_LESSON_DATA.quizQuestions.typing) {
    CURRENT_LESSON_DATA.quizQuestions.typing.forEach((q, idx) => {
      const qNum = idx + 1 + CURRENT_LESSON_DATA.quizQuestions.multipleChoice.length;
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
      ? `<span style="font-size:2.5rem;display:block;margin-bottom:0.5rem;">🎉</span>Great work! You've mastered this lesson.`
      : `You need at least ${displayNumber(CURRENT_LESSON_DATA.passMark)} out of ${displayNumber(total)} to pass. Review the lesson and try again — you've got this!`;
  }
  if (scoreCard) {
    scoreCard.style.display = 'block';
    scoreCard.classList.toggle('passed', passed);
    scoreCard.classList.toggle('failed', !passed);
    if (passed) celebrate('pass');
    else celebrate('fail');
  }
  if (submitBtn) submitBtn.style.display = 'none';
  
  if (passed) {
    if (typeof markComplete === 'function') {
      markComplete(CURRENT_LESSON_NUM, CURRENT_BOOK);
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
  
  if (scoreCard) scoreCard.scrollIntoView({ behavior: 'smooth' });
}

function retryQuiz() {
  const mcCount = CURRENT_LESSON_DATA.quizQuestions.multipleChoice.length;
  const typingCount = CURRENT_LESSON_DATA.quizQuestions.typing.length;
  
  // Reset multiple choice questions
  for (let i = 1; i <= mcCount; i++) {
    QUIZ_RESULTS[i] = null;
    const fb = document.getElementById(`qf${i}`);
    if (fb) {
      fb.textContent = '';
      fb.className = 'quiz-feedback';
    }
    const container = document.getElementById(`qq${i}`);
    if (container) {
      container.querySelectorAll('.quiz-option').forEach(o => {
        o.disabled = false;
        o.classList.remove('correct', 'wrong');
      });
    }
  }
  
  // Reset typing questions
  for (let i = 1; i <= typingCount; i++) {
    const qNum = mcCount + i;
    QUIZ_RESULTS[qNum] = null;
    const input = document.getElementById(`qi${qNum}`);
    const fb = document.getElementById(`qf${qNum}`);
    const ideal = document.getElementById(`ideal${qNum}`);
    const btn = document.getElementById(`checkBtn${qNum}`);
    if (input) {
      input.value = '';
      input.disabled = false;
      input.classList.remove('correct', 'wrong');
    }
    if (fb) {
      fb.textContent = '';
      fb.className = 'quiz-feedback';
    }
    if (ideal) {
      ideal.style.display = 'none';
      ideal.textContent = '';
    }
    if (btn) {
      btn.disabled = false;
      btn.style.opacity = '1';
    }
  }
  
  const scoreCard = document.getElementById('scoreCard');
  const submitBtn = document.getElementById('submitQuizBtn');
  if (scoreCard) scoreCard.style.display = 'none';
  if (submitBtn) submitBtn.style.display = 'inline-block';
  
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ─────────────────────────────────────────────────────────────
// ON-SCREEN KEYBOARD
// ─────────────────────────────────────────────────────────────

function attachKeyboard() {
  ACTIVE_INPUT = null;
  
  document.querySelectorAll('.arabic-input').forEach(input => {
    input.addEventListener('focus', () => { ACTIVE_INPUT = input; });
  });
  
  window.typeKey = function(char) {
    if (!ACTIVE_INPUT || ACTIVE_INPUT.disabled) {
      const inputs = document.querySelectorAll('.arabic-input:not(:disabled)');
      if (inputs.length) ACTIVE_INPUT = inputs[0];
      else return;
    }
    const pos = ACTIVE_INPUT.selectionStart;
    const val = ACTIVE_INPUT.value;
    ACTIVE_INPUT.value = val.slice(0, pos) + char + val.slice(pos);
    ACTIVE_INPUT.focus();
    ACTIVE_INPUT.setSelectionRange(pos + 1, pos + 1);
  };
  
  window.deleteKey = function() {
    if (!ACTIVE_INPUT || ACTIVE_INPUT.disabled) return;
    const pos = ACTIVE_INPUT.selectionStart;
    if (pos === 0) return;
    const val = ACTIVE_INPUT.value;
    ACTIVE_INPUT.value = val.slice(0, pos - 1) + val.slice(pos);
    ACTIVE_INPUT.focus();
    ACTIVE_INPUT.setSelectionRange(pos - 1, pos - 1);
  };
  
  window.clearInput = function() {
    if (!ACTIVE_INPUT || ACTIVE_INPUT.disabled) return;
    ACTIVE_INPUT.value = '';
    ACTIVE_INPUT.focus();
  };
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
          <div class="guided-sentence-visual" aria-hidden="true">${item.icon || '•'}</div>
          <div class="guided-sentence-body">
            ${renderGuidedArabicLine(item.ar, data.vocab)}
          </div>
        </article>
      `).join('');

      const linesHtml = (page.lines || []).map(item => `
        <article class="guided-line-card${item.isPrompt ? ' guided-line-card--prompt' : ''}">
          ${item.icon ? `<div class="guided-sentence-visual" aria-hidden="true">${item.icon}</div>` : ''}
          <div class="guided-sentence-body">
            ${renderGuidedArabicLine(item.ar, data.vocab)}
          </div>
        </article>
      `).join('');

      const groupsHtml = (page.groups || []).map(group => `
        <article class="guided-qa-card">
          <div class="guided-sentence-visual" aria-hidden="true">${group.icon || '•'}</div>
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
        <div class="guided-page-status">Page ${displayNumber(pageIndex + 1)} of ${displayNumber(total)}</div>
        ${exerciseItems.length ? '' : `
          <div class="guided-lesson-intro">
            ${page.titleArabic ? `<div class="guided-page-title-arabic">${page.titleArabic}</div>` : ''}
            <div class="guided-page-title">${page.title}</div>
            ${page.pattern ? `<div class="guided-pattern">${page.pattern}</div>` : ''}
            ${page.intro ? `<p>${page.intro}</p>` : ''}
          </div>
        `}
        ${cardsHtml ? `<div class="guided-sentence-grid">${cardsHtml}</div>` : ''}
        ${groupsHtml ? `<div class="guided-qa-stack">${groupsHtml}</div>` : ''}
        ${linesHtml ? `<div class="guided-line-stack">${linesHtml}</div>` : ''}
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
            renderPage(pageIndex + 1);
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return;
          }
          unlockAndGo('comprehension');
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
        <div class="guided-sentence-visual" aria-hidden="true">${item.icon || '•'}</div>
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
  
  if (data.examples && data.examples.length) {
    html += `
      <div class="grammar-block">
        <h3>Example sentences</h3>
        <table class="example-table">
          <thead>
            <tr><th>Arabic</th><th>Transliteration</th><th>Meaning</th></tr>
          </thead>
          <tbody>
    `;
    data.examples.forEach(ex => {
      html += `
        <tr>
          <td class="col-arabic">${ex.ar}</td>
          <td class="col-trans">${ex.trans}</td>
          <td class="col-meaning">${ex.meaning}</td>
        </tr>
      `;
    });
    html += `</tbody></table></div>`;
  }
  
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

function buildPracticePanel(data) {
  const practiceContainer = document.querySelector('#panel-practice .practice-container');
  if (!practiceContainer) return;

  if (data.reviewVocabAtEnd) {
    const panel = document.getElementById('panel-practice');
    const heading = panel && panel.querySelector('.panel-heading-text');
    if (heading) {
      heading.innerHTML = `
        <h2>Review Words</h2>
        <p>Now that you have seen the words in sentences and reading, choose what should come back in Review.</p>
      `;
    }
    buildVocabRatingLayout(
      data,
      practiceContainer,
      'Rate the words from this lesson: ✓ easy · ≈ needs practice · ✗ difficult. Words marked ≈ or ✗ are the most useful ones to review later.'
    );
    return;
  }
  
  let html = '';
  data.practiceQuestions.forEach((q, idx) => {
    const qNum = idx + 1;
    const optionsHtml = q.options.map((opt, optIdx) => {
      const isCorrect = opt === q.correct;
      return `<button class="practice-option" onclick="checkPractice(this, ${isCorrect})">${opt}</button>`;
    }).join('');
    
    html += `
      <div class="practice-question">
        <div class="practice-q-label">Question ${displayNumber(qNum)} of ${displayNumber(data.practiceQuestions.length)}</div>
        ${q.arabic ? `<div class="practice-q-arabic">${q.arabic}</div>` : ''}
        ${q.text ? `<div class="practice-q-text">${q.text}</div>` : ''}
        <div class="practice-options">${optionsHtml}</div>
        <div class="practice-feedback" id="pf${qNum}"></div>
      </div>
    `;
  });
  
  practiceContainer.innerHTML = html;
}

function buildQuizPanel(data) {
  const quizContainer = document.querySelector('#panel-quiz .quiz-container');
  if (!quizContainer) return;
  
  // Set title in nav and quiz panel
  const navTitle = document.getElementById('navTitle');
  if (navTitle) navTitle.textContent = `Lesson ${displayNumber(data.lessonNum)} — Kalamo`;

  const mcCount = data.quizQuestions.multipleChoice.length;
  const typingCount = data.quizQuestions.typing.length;
  const total = mcCount + typingCount;
  const quizTotalLabel = document.getElementById('quizTotalLabel');
  if (quizTotalLabel) {
    quizTotalLabel.textContent = `${displayNumber(total)} questions. Answer all of them to complete this lesson.`;
  }
  
  let html = '';
  let qCounter = 1;
  
  // Multiple choice questions
  data.quizQuestions.multipleChoice.forEach((q, idx) => {
    const qNum = idx + 1;
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
    qCounter++;
  });
  
  // Typing questions
  data.quizQuestions.typing.forEach((q, idx) => {
    const qNum = mcCount + idx + 1;
    html += `
      <div class="quiz-question" id="qq${qNum}">
        <div class="quiz-q-number">Question ${displayNumber(qNum)} of ${displayNumber(total)}</div>
        <div class="quiz-q-prompt">${q.prompt}</div>
        <div class="arabic-input-wrap">
          <input class="arabic-input" type="text" id="qi${qNum}" placeholder="اكتب هنا..." autocomplete="off" onkeydown="if(event.key==='Enter') checkTyping(${qNum}, CURRENT_LESSON_DATA.quizQuestions.typing[${idx}])" />
        </div>
        <div class="input-hint">Tip: Use the keyboard below, or your system Arabic keyboard. Vowel marks are optional.</div>
        <div style="margin-top:0.6rem;">
          <button class="btn btn-secondary" id="checkBtn${qNum}" onclick="checkTyping(${qNum}, CURRENT_LESSON_DATA.quizQuestions.typing[${idx}])">Check Answer</button>
        </div>
        <div class="quiz-feedback" id="qf${qNum}"></div>
        <div class="quiz-ideal" id="ideal${qNum}" style="display:none; margin-top:0.5rem; font-family:'Amiri',serif; font-size:1.15rem; color:var(--text-mid); direction:rtl; text-align:right;"></div>
      </div>
    `;
    qCounter++;
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
    const lessonStep = document.getElementById('step-lesson');
    const vocabStepLabel = document.querySelector('#step-vocab .step-label');
    const readingBackBtn = document.querySelector('#panel-comprehension .btn-secondary');
    if (lessonStep) lessonStep.hidden = true;
    if (vocabStepLabel) vocabStepLabel.textContent = 'Learn';
    if (readingBackBtn) {
      readingBackBtn.textContent = '← Learn';
      readingBackBtn.setAttribute('onclick', "goToStep('vocab')");
    }
  }

  if (CURRENT_LESSON_DATA.reviewVocabAtEnd) {
    const practiceStepLabel = document.querySelector('#step-practice .step-label');
    const readingNextBtn = document.querySelector('#panel-comprehension .btn-primary');
    const quizBackBtn = document.querySelector('#panel-quiz .btn-secondary');
    if (practiceStepLabel) practiceStepLabel.textContent = 'Review Words';
    if (readingNextBtn) readingNextBtn.textContent = 'Finished — Next: Review Words →';
    if (quizBackBtn) quizBackBtn.textContent = '← Review Words';
  }
  
  // Build all panels
  buildVocabularyPanel(CURRENT_LESSON_DATA);
  buildLessonPanel(CURRENT_LESSON_DATA);
  buildComprehensionPanel(CURRENT_LESSON_DATA);
  buildPracticePanel(CURRENT_LESSON_DATA);
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
  
  // Attach keyboard after DOM is ready
  setTimeout(attachKeyboard, 100);
  
  // Update progress bar if function exists
  if (typeof updateProgressBar === 'function') {
    updateProgressBar(CURRENT_BOOK);
  }
}

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
  if (!resumeKey) return false;
  return localStorage.getItem(resumeKey) === 'active';
}

function restoreLessonResume() {
  const resumeKey = guidedResumeKey();
  const stepKey = lessonStepKey();
  if (!resumeKey || localStorage.getItem(resumeKey) !== 'active') return;

  const savedStep = localStorage.getItem(stepKey) || 'vocab';
  const stepOrder = ['vocab', 'lesson', 'comprehension', 'practice', 'quiz'];
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
  if (!bar) return;
  if (wrap) wrap.style.display = 'flex';
  const pct = Math.round(((pageIndex + 1) / total) * 100);
  bar.style.width = pct + '%';
  if (label) label.textContent = `Page ${pageIndex + 1} of ${total}`;
}

// Export for global access
window.goToStep = goToStep;
window.checkGuidedExercise = checkGuidedExercise;
window.unlockAndGo = unlockAndGo;
window.applyQuizJumpMode = applyQuizJumpMode;
window.checkPractice = checkPractice;
window.checkQuiz = checkQuiz;
window.checkTyping = checkTyping;
window.submitQuiz = submitQuiz;
window.retryQuiz = retryQuiz;
window.typeKey = null; // will be set by attachKeyboard
window.deleteKey = null;
window.clearInput = null;
