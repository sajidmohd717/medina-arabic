/* ============================================================
   lesson-loader.js — Medina Arabic
   Loads lesson data and initialises the page.
   ============================================================ */

// This script should be loaded AFTER lesson-core.js and the lesson data JS file

(function() {
  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
  
  function init() {
    // Check if LESSON_DATA is defined (from the data file)
    if (typeof LESSON_DATA === 'undefined') {
      console.error('LESSON_DATA not found! Make sure the lesson data file is loaded.');
      return;
    }
    
    // Set global variables for lesson-core.js
    CURRENT_LESSON_DATA = LESSON_DATA;
    CURRENT_BOOK = LESSON_DATA.book;
    CURRENT_LESSON_NUM = LESSON_DATA.lessonNum;
    
    // Reset state
    UNLOCKED_STEPS = { vocab: true, lesson: false, practice: false, quiz: false };
    QUIZ_RESULTS = {};
    CURRENT_STEP = 'vocab';
    
    // Call the main initialisation function from lesson-core.js
    if (typeof initLesson === 'function') {
      initLesson();
    } else {
      console.error('initLesson function not found! Make sure lesson-core.js is loaded.');
    }
  }
})();