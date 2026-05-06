/* ============================================================
   progress.js — Kalamo
   localStorage-based progress tracking.
   Used by book list pages and individual lesson pages.
   ============================================================ */

const PROGRESS_KEYS = {
  book1: 'kalamo_book1_progress',
  book2: 'kalamo_book2_progress',
  book3: 'kalamo_book3_progress',
};

const LEGACY_PROGRESS_KEYS = {
  book1: 'medina_book1_progress',
  book2: 'medina_book2_progress',
  book3: 'medina_book3_progress',
};

const BOOK_TOTALS = { book1: 23, book2: 23, book3: 23 };

/** Per-lesson vocabulary word ratings: word index → 'know' | 'struggle' | 'unknown' */
const VOCAB_RATINGS_KEY = 'kalamo_vocab_ratings';
const LEGACY_VOCAB_RATINGS_KEY = 'medina_vocab_ratings';

/** Stored while the learner has opened a lesson but not yet passed its quiz */
const LESSON_IN_PROGRESS = 'in_progress';

/** Convert a Western digit string to Arabic-Indic numerals (٠١٢...) */
function toArabicNumeral(n) {
  return String(n).split('').map(d => '٠١٢٣٤٥٦٧٨٩'[+d]).join('');
}

function isCompleteValue(v) {
  return v === true || v === 'complete';
}

function readJsonStorage(key) {
  try {
    return JSON.parse(localStorage.getItem(key)) || {};
  } catch {
    return {};
  }
}

function migrateStorageKey(fromKey, toKey) {
  if (localStorage.getItem(toKey) || !localStorage.getItem(fromKey)) return;
  localStorage.setItem(toKey, localStorage.getItem(fromKey));
}

function migrateLegacyProgressStorage() {
  Object.keys(PROGRESS_KEYS).forEach(book => {
    migrateStorageKey(LEGACY_PROGRESS_KEYS[book], PROGRESS_KEYS[book]);
  });
  migrateStorageKey(LEGACY_VOCAB_RATINGS_KEY, VOCAB_RATINGS_KEY);
}

migrateLegacyProgressStorage();

/** Read progress object for a given book */
function getProgress(book = 'book1') {
  return readJsonStorage(PROGRESS_KEYS[book]);
}

/**
 * @returns {'not_started'|'in_progress'|'complete'}
 */
function getLessonStatus(lessonNumber, book = 'book1') {
  const v = getProgress(book)[String(lessonNumber)];
  if (isCompleteValue(v)) return 'complete';
  if (v === LESSON_IN_PROGRESS) return 'in_progress';
  return 'not_started';
}

/** Lesson N opens only after lessons 1 … N−1 are complete (quiz passed). */
function isLessonUnlocked(lessonNumber, book = 'book1') {
  const n = Number(lessonNumber);
  if (n <= 1) return true;
  for (let i = 1; i < n; i++) {
    if (getLessonStatus(i, book) !== 'complete') return false;
  }
  return true;
}

function lessonHtmlRelPath(book, lessonNum) {
  const bookNum = String(book).replace('book', '');
  return `lessons/lesson.html?book=${bookNum}&lesson=${lessonNum}`;
}

/**
 * Sequential locks on book list: grey row, ✕ badge, no navigation until previous quizzes passed.
 * Expects .lesson-card with data-lesson and .lesson-card-main.
 */
function updateLessonSequentialLocks(book = 'book1') {
  document.querySelectorAll('.lesson-card').forEach(card => {
    const n = parseInt(card.dataset.lesson, 10);
    if (Number.isNaN(n)) return;

    const main = card.querySelector('.lesson-card-main');
    const badge = card.querySelector('.lesson-num-badge');
    const unlocked = isLessonUnlocked(n, book);
    const available = card.dataset.available !== 'false';
    const base = lessonHtmlRelPath(book, n);

    if (unlocked && available) {
      card.classList.remove('lesson-card--locked');
      if (badge) badge.removeAttribute('aria-label');
      if (main) {
        main.setAttribute('href', base);
        main.removeAttribute('aria-disabled');
        main.removeAttribute('tabindex');
        main.removeAttribute('title');
      }
      return;
    }

    card.classList.add('lesson-card--locked');
    if (badge) {
      badge.textContent = '✕';
      badge.setAttribute('aria-label', available ? 'Locked — complete earlier lessons first' : 'Coming soon');
    }
    if (main) {
      main.setAttribute('href', '#');
      main.setAttribute('aria-disabled', 'true');
      main.setAttribute('tabindex', '-1');
      main.setAttribute('title', available ? 'Complete the previous lesson quiz to unlock this one.' : 'This lesson is coming soon.');
    }
  });
}

/** Call when the learner opens a lesson page (including quiz-only mode). No-op if already complete. */
function markLessonInProgress(lessonNumber, book = 'book1') {
  const progress = getProgress(book);
  const key = String(lessonNumber);
  if (isCompleteValue(progress[key])) return;
  progress[key] = LESSON_IN_PROGRESS;
  localStorage.setItem(PROGRESS_KEYS[book], JSON.stringify(progress));
}

/** Mark a lesson as complete and save */
function markComplete(lessonNumber, book = 'book1') {
  const progress = getProgress(book);
  progress[String(lessonNumber)] = true;
  localStorage.setItem(PROGRESS_KEYS[book], JSON.stringify(progress));
}

/** Mark a lesson as incomplete */
function markIncomplete(lessonNumber, book = 'book1') {
  const progress = getProgress(book);
  delete progress[String(lessonNumber)];
  localStorage.setItem(PROGRESS_KEYS[book], JSON.stringify(progress));
}

/** Count completed lessons for a book */
function countCompleted(book = 'book1') {
  return Object.values(getProgress(book)).filter(isCompleteValue).length;
}

/**
 * Update the progress bar and label in the nav.
 * Expects elements: #progressFill, #progressLabel
 */
function updateProgressBar(book = 'book1') {
  const completed = countCompleted(book);
  const total = BOOK_TOTALS[book];

  const fill = document.getElementById('progressFill');
  const label = document.getElementById('progressLabel');
  if (fill) fill.style.width = (completed / total * 100) + '%';
  if (label) label.textContent = completed + ' / ' + total;
}

/**
 * Update the completed count stat (Arabic numeral).
 * Expects element: #completedCount
 */
function updateCompletedCount(book = 'book1') {
  const el = document.getElementById('completedCount');
  if (el) el.textContent = toArabicNumeral(countCompleted(book));
}

/**
 * Reflect lesson status on book list cards.
 * Expects .lesson-card elements with data-lesson="N".
 */
function updateLessonCards(book = 'book1') {
  document.querySelectorAll('.lesson-card').forEach(card => {
    const num = card.dataset.lesson;
    const status = getLessonStatus(num, book);

    card.classList.remove('lesson-card--not-started', 'lesson-card--not_started', 'lesson-card--in-progress', 'lesson-card--in_progress', 'lesson-card--complete');
    card.classList.add(`lesson-card--${status.replace('_', '-')}`);

    const badge = card.querySelector('.lesson-num-badge');
    if (!badge) return;
    badge.textContent = toArabicNumeral(num);
  });
}

/**
 * Unlock the final quiz button when all lessons are done.
 * Expects elements: #finalQuizBtn, #finalQuizNote
 */
function updateFinalQuiz(book = 'book1') {
  const completed = countCompleted(book);
  const total = BOOK_TOTALS[book];
  const btn = document.getElementById('finalQuizBtn');
  const note = document.getElementById('finalQuizNote');
  if (!btn) return;

  if (completed >= total) {
    btn.classList.add('unlocked');
    if (note) note.textContent = 'All lessons complete — good luck!';
  } else {
    btn.classList.remove('unlocked');
    if (note) note.textContent = `Complete all ${total} lessons to unlock this.`;
  }
}

/**
 * Full UI refresh — call this on page load for book list pages.
 */
function refreshBookListUI(book = 'book1') {
  updateProgressBar(book);
  updateCompletedCount(book);
  updateLessonCards(book);
  updateLessonSequentialLocks(book);
  updateFinalQuiz(book);
}

/**
 * Sidebar active-section highlighting on scroll.
 * Call after DOM is ready on book list pages.
 */
function initSidebarScroll() {
  const sections = document.querySelectorAll('.section-block');
  const navItems = document.querySelectorAll('.section-nav-item');
  if (!sections.length || !navItems.length) return;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navItems.forEach(i => i.classList.remove('active'));
        const active = document.querySelector(`.section-nav-item[href="#${entry.target.id}"]`);
        if (active) active.classList.add('active');
      }
    });
  }, { rootMargin: '-30% 0px -60% 0px' });

  sections.forEach(s => observer.observe(s));
}

function vocabRatingsLessonKey(book, lessonNum) {
  return `${book}_${lessonNum}`;
}

/** @returns {Record<string, 'know'|'struggle'|'unknown'>} map of word index → rating */
function getVocabRatingsForLesson(book, lessonNum) {
  return readJsonStorage(VOCAB_RATINGS_KEY)[vocabRatingsLessonKey(book, lessonNum)] || {};
}

/** @param {number} wordIndex index in LESSON_DATA.vocab
 * @param {'know'|'struggle'|'unknown'|null} rating pass null to clear */
function setVocabWordRating(book, lessonNum, wordIndex, rating) {
  try {
    const all = JSON.parse(localStorage.getItem(VOCAB_RATINGS_KEY)) || {};
    const lk = vocabRatingsLessonKey(book, lessonNum);
    const idx = String(wordIndex);
    if (!all[lk]) all[lk] = {};

    if (rating !== 'know' && rating !== 'struggle' && rating !== 'unknown') {
      delete all[lk][idx];
      if (!Object.keys(all[lk]).length) delete all[lk];
    } else {
      all[lk][idx] = rating;
    }

    localStorage.setItem(VOCAB_RATINGS_KEY, JSON.stringify(all));
  } catch (e) {
    console.warn('Could not save vocabulary rating', e);
  }
}

/** Remove all saved lesson progress and vocabulary ratings (this site only). */
function clearAllKalamoProgress() {
  Object.values(PROGRESS_KEYS).forEach(k => localStorage.removeItem(k));
  Object.values(LEGACY_PROGRESS_KEYS).forEach(k => localStorage.removeItem(k));
  localStorage.removeItem(VOCAB_RATINGS_KEY);
  localStorage.removeItem(LEGACY_VOCAB_RATINGS_KEY);
}

/** Confirm, clear storage, reload the current page. */
function confirmAndResetAllKalamoProgress() {
  const ok = window.confirm(
    'Clear every lesson, quiz outcome, and vocabulary word rating saved for Kalamo in this browser? This cannot be undone.'
  );
  if (!ok) return;
  clearAllKalamoProgress();
  window.location.reload();
}

window.markLessonInProgress = markLessonInProgress;
window.getLessonStatus = getLessonStatus;
window.isLessonUnlocked = isLessonUnlocked;
window.getVocabRatingsForLesson = getVocabRatingsForLesson;
window.setVocabWordRating = setVocabWordRating;
window.clearAllKalamoProgress = clearAllKalamoProgress;
window.confirmAndResetAllKalamoProgress = confirmAndResetAllKalamoProgress;
window.clearAllMedinaProgress = clearAllKalamoProgress;
window.confirmAndResetAllMedinaProgress = confirmAndResetAllKalamoProgress;
