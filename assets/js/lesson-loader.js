/* ============================================================
   lesson-loader.js — Medina Arabic
   Loads lesson data dynamically based on URL params and initialises the page.
   ============================================================ */

// This script should be loaded AFTER lesson-core.js

(function() {
  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', startLoading);
  } else {
    startLoading();
  }
  
  function startLoading() {
    const params = new URLSearchParams(window.location.search);
    const bookNum = params.get('book') || '1';
    const lessonNum = params.get('lesson');
    
    if (!lessonNum) {
      console.error('No lesson number provided in URL!');
      window.location.replace(`../book${bookNum}.html`);
      return;
    }

    // Determine the data file path
    // Format: data/b1-lesson1.js
    const dataFilePath = `data/b${bookNum}-lesson${lessonNum}.js`;

    // Inject the data script
    const script = document.createElement('script');
    script.src = dataFilePath;
    script.onload = () => {
      init();
    };
    script.onerror = () => {
      console.error(`Failed to load lesson data from ${dataFilePath}`);
      alert(`Lesson ${lessonNum} data not found!`);
      window.location.replace(`../book${bookNum}.html`);
    };
    document.body.appendChild(script);
  }
  
  function init() {
    // Check if LESSON_DATA is defined (from the injected data file)
    if (typeof LESSON_DATA === 'undefined') {
      console.error('LESSON_DATA not found! Make sure the lesson data file is loaded.');
      return;
    }
    
    // Set global variables for lesson-core.js
    CURRENT_LESSON_DATA = LESSON_DATA;
    CURRENT_BOOK = LESSON_DATA.book;
    CURRENT_LESSON_NUM = LESSON_DATA.lessonNum;

    // Update navigation links based on book
    const bookNum = CURRENT_BOOK.replace('book', '');
    const navBackLink = document.getElementById('navBackLink');
    const panelVocabBackLink = document.getElementById('panelVocabBackLink');
    if (navBackLink) {
      navBackLink.href = `../book${bookNum}.html`;
      navBackLink.textContent = `Book ${bookNum}`;
    }
    if (panelVocabBackLink) {
      panelVocabBackLink.href = `../book${bookNum}.html`;
    }

    if (typeof isLessonUnlocked === 'function' && !isLessonUnlocked(CURRENT_LESSON_NUM, CURRENT_BOOK)) {
      window.location.replace(`../book${bookNum}.html`);
      return;
    }

    if (typeof markLessonInProgress === 'function') {
      markLessonInProgress(CURRENT_LESSON_NUM, CURRENT_BOOK);
    }
    
    // Reset state
    UNLOCKED_STEPS = { vocab: true, lesson: false, comprehension: false, practice: false, quiz: false };
    QUIZ_RESULTS = {};
    CURRENT_STEP = 'vocab';
    
    // Call the main initialisation function from lesson-core.js
    if (typeof initLesson === 'function') {
      initLesson();
    } else {
      console.error('initLesson function not found! Make sure lesson-core.js is loaded.');
      return;
    }

    const params = new URLSearchParams(window.location.search);
    if (params.get('step') === 'quiz' && typeof applyQuizJumpMode === 'function') {
      applyQuizJumpMode();
    }
  }
})();
