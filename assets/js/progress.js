/* ============================================================
   progress.js — Medina Arabic
   localStorage-based progress tracking.
   Used by book list pages and individual lesson pages.
   ============================================================ */

const PROGRESS_KEYS = {
  book1: 'medina_book1_progress',
  book2: 'medina_book2_progress',
  book3: 'medina_book3_progress',
};

const BOOK_TOTALS = { book1: 23, book2: 23, book3: 23 };

/** Convert a Western digit string to Arabic-Indic numerals (٠١٢...) */
function toArabicNumeral(n) {
  return String(n).split('').map(d => '٠١٢٣٤٥٦٧٨٩'[+d]).join('');
}

/** Read progress object for a given book */
function getProgress(book = 'book1') {
  try {
    return JSON.parse(localStorage.getItem(PROGRESS_KEYS[book])) || {};
  } catch {
    return {};
  }
}

/** Mark a lesson as complete and save */
function markComplete(lessonNumber, book = 'book1') {
  const progress = getProgress(book);
  progress[lessonNumber] = true;
  localStorage.setItem(PROGRESS_KEYS[book], JSON.stringify(progress));
}

/** Mark a lesson as incomplete */
function markIncomplete(lessonNumber, book = 'book1') {
  const progress = getProgress(book);
  delete progress[lessonNumber];
  localStorage.setItem(PROGRESS_KEYS[book], JSON.stringify(progress));
}

/** Count completed lessons for a book */
function countCompleted(book = 'book1') {
  return Object.values(getProgress(book)).filter(Boolean).length;
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
  if (fill)  fill.style.width = (completed / total * 100) + '%';
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
 * Mark completed lesson cards visually on the book list page.
 * Expects .lesson-card elements with data-lesson="N" attributes.
 */
function updateLessonCards(book = 'book1') {
  const progress = getProgress(book);
  document.querySelectorAll('.lesson-card').forEach(card => {
    const num = card.dataset.lesson;
    if (progress[num]) {
      card.classList.add('completed');
      const badge = card.querySelector('.lesson-num-badge');
      if (badge) badge.textContent = '✓';
    } else {
      card.classList.remove('completed');
      const badge = card.querySelector('.lesson-num-badge');
      if (badge) badge.textContent = toArabicNumeral(num);
    }
  });
}

/**
 * Unlock the final quiz button when all lessons are done.
 * Expects elements: #finalQuizBtn, #finalQuizNote
 */
function updateFinalQuiz(book = 'book1') {
  const completed = countCompleted(book);
  const total = BOOK_TOTALS[book];
  const btn  = document.getElementById('finalQuizBtn');
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