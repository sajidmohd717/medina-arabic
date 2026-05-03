/* ============================================================
   lesson-core.js — Medina Arabic
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

function normalise(str) {
  return stripDiacritics(str)
    .replace(/[.،؟?!,،.]/g, '')
    .replace(/\s+/g, '')
    .toLowerCase();
}

// ─────────────────────────────────────────────────────────────
// STEP NAVIGATION
// ─────────────────────────────────────────────────────────────

function goToStep(step) {
  if (!UNLOCKED_STEPS[step]) return;
  
  const steps = ['vocab', 'lesson', 'comprehension', 'practice', 'quiz'];
  steps.forEach(s => {
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
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function unlockAndGo(step) {
  UNLOCKED_STEPS[step] = true;
  const btn = document.getElementById(`step-${step}`);
  if (btn) btn.classList.remove('locked');
  goToStep(step);
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
  
  if (scoreNumber) scoreNumber.textContent = `${score} / ${total}`;
  if (scoreLabel) {
    scoreLabel.textContent = passed
      ? '🎉 Great work! Lesson marked as complete.'
      : `You need at least ${CURRENT_LESSON_DATA.passMark} out of ${total} to pass. Review the lesson and try again.`;
  }
  if (scoreCard) scoreCard.style.display = 'block';
  if (submitBtn) submitBtn.style.display = 'none';
  
  if (passed) {
    if (typeof markComplete === 'function') {
      markComplete(CURRENT_LESSON_NUM, CURRENT_BOOK);
      if (typeof updateProgressBar === 'function') updateProgressBar(CURRENT_BOOK);
      if (typeof updateCompletedCount === 'function') updateCompletedCount(CURRENT_BOOK);
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

function buildVocabularyPanel(data) {
  const slot = document.querySelector('#panel-vocab .vocab-grid');
  if (!slot) return;

  slot.className = 'vocab-layout';
  slot.innerHTML = '';
  slot._vocabCtx = null;

  const hint = document.createElement('p');
  hint.className = 'vocab-rating-hint';
  hint.textContent =
    'Rate each word: ✓ know it well · ≈ still practising · ✗ new or difficult. Words marked ✓ move into Words you know well — just above the words you are still studying. Open it anytime to review. Tap the same rating again to clear.';

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
      <div class="comprehension-story-arabic">${data.comprehension.arabic}</div>
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
        <div class="comprehension-q-number">Question ${qNum}</div>
        <div class="comprehension-q-text">${q.text}</div>
        <div class="comprehension-options">${optionsHtml}</div>
        <div class="comprehension-feedback"></div>
      </div>
    `;
    COMPREHENSION_RESULTS[qNum] = null;
  });
  
  html += `</div>`;
  comprehensionContent.innerHTML = html;
}

function buildPracticePanel(data) {
  const practiceContainer = document.querySelector('#panel-practice .practice-container');
  if (!practiceContainer) return;
  
  let html = '';
  data.practiceQuestions.forEach((q, idx) => {
    const qNum = idx + 1;
    const optionsHtml = q.options.map((opt, optIdx) => {
      const isCorrect = opt === q.correct;
      return `<button class="practice-option" onclick="checkPractice(this, ${isCorrect})">${opt}</button>`;
    }).join('');
    
    html += `
      <div class="practice-question">
        <div class="practice-q-label">Question ${qNum} of ${data.practiceQuestions.length}</div>
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
  
  const mcCount = data.quizQuestions.multipleChoice.length;
  const typingCount = data.quizQuestions.typing.length;
  const total = mcCount + typingCount;
  
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
        <div class="quiz-q-number">Question ${qNum} of ${total}</div>
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
        <div class="quiz-q-number">Question ${qNum} of ${total}</div>
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
  document.title = `Lesson ${CURRENT_LESSON_NUM} — ${CURRENT_LESSON_DATA.titleArabic} — Medina Arabic`;
  
  const lessonEyebrow = document.querySelector('.lesson-eyebrow');
  const lessonH1 = document.querySelector('.lesson-header h1');
  const lessonSpan = document.querySelector('.lesson-header h1 span');
  const lessonSummary = document.querySelector('.lesson-summary');
  
  if (lessonEyebrow) lessonEyebrow.textContent = `Book ${CURRENT_BOOK.replace('book', '')} · Lesson ${CURRENT_LESSON_NUM}`;
  if (lessonH1) lessonH1.innerHTML = `${CURRENT_LESSON_DATA.titleArabic}<span>${CURRENT_LESSON_DATA.titleEnglish}</span>`;
  if (lessonSummary) lessonSummary.textContent = CURRENT_LESSON_DATA.summary;
  
  // Build all panels
  buildVocabularyPanel(CURRENT_LESSON_DATA);
  buildLessonPanel(CURRENT_LESSON_DATA);
  buildComprehensionPanel(CURRENT_LESSON_DATA);
  buildPracticePanel(CURRENT_LESSON_DATA);
  buildQuizPanel(CURRENT_LESSON_DATA);
  
  // Set next lesson link
  const nextBtn = document.getElementById('nextLessonBtn');
  if (nextBtn) nextBtn.href = CURRENT_LESSON_DATA.nextLesson;
  
  // Attach keyboard after DOM is ready
  setTimeout(attachKeyboard, 100);
  
  // Update progress bar if function exists
  if (typeof updateProgressBar === 'function') {
    updateProgressBar(CURRENT_BOOK);
  }
}

// Export for global access
window.goToStep = goToStep;
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