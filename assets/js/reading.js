/* ============================================================
   reading.js - one-story reading track
   ============================================================ */

(function () {
  const READING_PROGRESS_KEY = 'kalamo_reading_progress';
  const READING_WORDS_KEY = 'kalamo_reading_satchel';
  const LEVEL_ONE_TARGET = 5;
  const RANKS = [
    { name: 'Pre-Level One', required: 0 },
    { name: 'Level One', required: 5 },
    { name: 'Level Two', required: 10 },
    { name: 'Level Three', required: 15 },
  ];

  const COURSE_WORDS = [
    { lesson: 1, ar: 'هٰذَا', trans: 'hādhā', meaning: 'this' },
    { lesson: 1, ar: 'بَيْتٌ', trans: 'baytun', meaning: 'house' },
    { lesson: 1, ar: 'مَسْجِدٌ', trans: 'masjidun', meaning: 'mosque' },
    { lesson: 1, ar: 'كِتَابٌ', trans: 'kitābun', meaning: 'book' },
    { lesson: 1, ar: 'قَلَمٌ', trans: 'qalamun', meaning: 'pen' },
    { lesson: 2, ar: 'ذٰلِكَ', trans: 'dhālika', meaning: 'that' },
    { lesson: 2, ar: 'بَابٌ', trans: 'bābun', meaning: 'door' },
    { lesson: 2, ar: 'كُرْسِيٌّ', trans: 'kursiyyun', meaning: 'chair' },
    { lesson: 3, ar: 'الْبَيْتُ', trans: 'al-baytu', meaning: 'the house' },
    { lesson: 3, ar: 'الْكِتَابُ', trans: 'al-kitābu', meaning: 'the book' },
    { lesson: 4, ar: 'فِي', trans: 'fī', meaning: 'in' },
    { lesson: 4, ar: 'عَلَى', trans: 'ʿalā', meaning: 'on' },
    { lesson: 4, ar: 'مِنْ', trans: 'min', meaning: 'from' },
    { lesson: 4, ar: 'أَيْنَ', trans: 'ayna', meaning: 'where' },
    { lesson: 5, ar: 'طَالِبٌ', trans: 'ṭālibun', meaning: 'student' },
    { lesson: 5, ar: 'مُدَرِّسٌ', trans: 'mudarrisun', meaning: 'teacher' },
    { lesson: 6, ar: 'هٰذِهِ', trans: 'hādhihi', meaning: 'this feminine' },
    { lesson: 6, ar: 'مَدْرَسَةٌ', trans: 'madrasatun', meaning: 'school' },
    { lesson: 6, ar: 'غُرْفَةٌ', trans: 'ghurfatun', meaning: 'room' },
    { lesson: 7, ar: 'تِلْكَ', trans: 'tilka', meaning: 'that feminine' },
    { lesson: 9, ar: 'كَبِيرٌ', trans: 'kabīrun', meaning: 'big' },
    { lesson: 9, ar: 'صَغِيرٌ', trans: 'ṣaghīrun', meaning: 'small' },
    { lesson: 10, ar: 'كِتَابُهُ', trans: 'kitābuhu', meaning: 'his book' },
    { lesson: 11, ar: 'فِيهَا', trans: 'fīhā', meaning: 'in her/it' },
  ];

  const CHALLENGES = [
    {
      id: 'starter-house',
      level: 'Pre-Level One',
      unlockAfterLesson: 1,
      title: 'A House and a Book',
      target: 'Short nouns and pointing words',
      newWords: [{ ar: 'جَدِيدٌ', trans: 'jadīdun', meaning: 'new' }],
      story: 'هٰذَا بَيْتٌ. هٰذَا كِتَابٌ. الْكِتَابُ جَدِيدٌ. هٰذَا قَلَمٌ.',
      translation: 'This is a house. This is a book. The book is new. This is a pen.',
      questions: [
        { prompt: 'What is new?', options: ['The house', 'The book', 'The pen'], correct: 1 },
        { prompt: 'Which word means pen?', options: ['قَلَمٌ', 'بَيْتٌ', 'كِتَابٌ'], correct: 0 },
        { prompt: 'How many things are named?', options: ['One', 'Two', 'Three'], correct: 2 },
      ],
    },
    {
      id: 'starter-mosque',
      level: 'Pre-Level One',
      unlockAfterLesson: 2,
      title: 'That Mosque',
      target: 'This/that contrast',
      newWords: [{ ar: 'قَرِيبٌ', trans: 'qarībun', meaning: 'near' }],
      story: 'هٰذَا بَيْتٌ قَرِيبٌ. ذٰلِكَ مَسْجِدٌ. الْمَسْجِدُ كَبِيرٌ.',
      translation: 'This is a nearby house. That is a mosque. The mosque is big.',
      questions: [
        { prompt: 'What is far enough to use "that"?', options: ['The house', 'The mosque', 'The book'], correct: 1 },
        { prompt: 'What is the mosque like?', options: ['Big', 'Small', 'New'], correct: 0 },
        { prompt: 'قَرِيبٌ means:', options: ['near', 'old', 'open'], correct: 0 },
      ],
    },
    {
      id: 'starter-room',
      level: 'Pre-Level One',
      unlockAfterLesson: 4,
      title: 'In the Room',
      target: 'Location with fī and ʿalā',
      newWords: [{ ar: 'مَفْتُوحٌ', trans: 'maftūḥun', meaning: 'open' }],
      story: 'أَيْنَ الْكِتَابُ؟ الْكِتَابُ فِي الْغُرْفَةِ. وَالْقَلَمُ عَلَى الْكُرْسِيِّ. الْبَابُ مَفْتُوحٌ.',
      translation: 'Where is the book? The book is in the room. The pen is on the chair. The door is open.',
      questions: [
        { prompt: 'Where is the book?', options: ['In the room', 'On the chair', 'In the mosque'], correct: 0 },
        { prompt: 'Where is the pen?', options: ['On the chair', 'From the house', 'In the book'], correct: 0 },
        { prompt: 'What is open?', options: ['The door', 'The room', 'The pen'], correct: 0 },
      ],
    },
    {
      id: 'level1-student',
      level: 'Level One',
      unlockAfterLesson: 5,
      title: 'The Student’s Book',
      target: 'Possession and location',
      newWords: [{ ar: 'قَدِيمٌ', trans: 'qadīmun', meaning: 'old' }],
      story: 'هٰذَا كِتَابُ الطَّالِبِ. الْكِتَابُ قَدِيمٌ. قَلَمُ الْمُدَرِّسِ عَلَى الْكِتَابِ. الطَّالِبُ فِي الْمَدْرَسَةِ.',
      translation: 'This is the student’s book. The book is old. The teacher’s pen is on the book. The student is in the school.',
      questions: [
        { prompt: 'Whose book is it?', options: ['The student’s', 'The teacher’s', 'The school’s'], correct: 0 },
        { prompt: 'Where is the teacher’s pen?', options: ['On the book', 'In the school', 'Near the door'], correct: 0 },
        { prompt: 'Where is the student?', options: ['In the school', 'In the house', 'On the chair'], correct: 0 },
      ],
    },
    {
      id: 'level1-school',
      level: 'Level One',
      unlockAfterLesson: 7,
      title: 'This School',
      target: 'Feminine demonstratives',
      newWords: [{ ar: 'نَظِيفَةٌ', trans: 'naẓīfatun', meaning: 'clean' }],
      story: 'هٰذِهِ مَدْرَسَةٌ. الْمَدْرَسَةُ نَظِيفَةٌ. تِلْكَ غُرْفَةٌ صَغِيرَةٌ. فِيهَا كِتَابٌ وَقَلَمٌ.',
      translation: 'This is a school. The school is clean. That is a small room. In it there is a book and a pen.',
      questions: [
        { prompt: 'What is clean?', options: ['The school', 'The room', 'The pen'], correct: 0 },
        { prompt: 'What is small?', options: ['The room', 'The school', 'The mosque'], correct: 0 },
        { prompt: 'What is in the room?', options: ['A book and a pen', 'A sun and moon', 'A teacher'], correct: 0 },
      ],
    },
  ];

  let state = readProgress();

  function readProgress() {
    try {
      return JSON.parse(localStorage.getItem(READING_PROGRESS_KEY)) || { passed: {} };
    } catch {
      return { passed: {} };
    }
  }

  function saveProgress() {
    localStorage.setItem(READING_PROGRESS_KEY, JSON.stringify(state));
  }

  function readReadingWords() {
    try {
      return JSON.parse(localStorage.getItem(READING_WORDS_KEY)) || [];
    } catch {
      return [];
    }
  }

  function saveReadingWords(words) {
    localStorage.setItem(READING_WORDS_KEY, JSON.stringify(words));
  }

  function completedLessons() {
    let total = 0;
    for (let i = 1; i <= 23; i++) {
      if (typeof getLessonStatus === 'function' && getLessonStatus(i, 'book1') === 'complete') total++;
    }
    return total;
  }

  function passedIds() {
    return Object.keys(state.passed || {}).filter(id => state.passed[id]);
  }

  function currentLevelName() {
    const passed = passedIds().length;
    return [...RANKS].reverse().find(rank => passed >= rank.required).name;
  }

  function nextRank() {
    const passed = passedIds().length;
    return RANKS.find(rank => passed < rank.required) || null;
  }

  function nextChallenge(excludeId = '') {
    const completed = completedLessons();
    return CHALLENGES.find(challenge => completed >= challenge.unlockAfterLesson && !state.passed[challenge.id] && challenge.id !== excludeId)
      || CHALLENGES.find(challenge => completed >= challenge.unlockAfterLesson && challenge.id !== excludeId)
      || CHALLENGES.find(challenge => completed >= challenge.unlockAfterLesson)
      || null;
  }

  function nextUnreadChallenge(excludeId = '') {
    const completed = completedLessons();
    return CHALLENGES.find(challenge => (
      completed >= challenge.unlockAfterLesson
      && !state.passed[challenge.id]
      && challenge.id !== excludeId
    )) || null;
  }

  function stripDiacritics(value) {
    return String(value || '').replace(/[\u064B-\u065F\u0670]/g, '');
  }

  function satchelWords() {
    const completed = completedLessons();
    const course = COURSE_WORDS.filter(word => word.lesson <= completed).map(word => ({ ...word, source: 'Course' }));
    const reading = readReadingWords();
    const seen = new Set();
    return course.concat(reading).filter(word => {
      const key = stripDiacritics(word.ar);
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
  }

  function addReadingWords(words) {
    const current = readReadingWords();
    const keys = new Set(current.map(word => stripDiacritics(word.ar)));
    words.forEach(word => {
      const key = stripDiacritics(word.ar);
      if (!keys.has(key)) current.push({ ...word, source: 'Reading' });
    });
    saveReadingWords(current);
  }

  function renderStats() {
    const passed = passedIds().length;
    const total = CHALLENGES.length;
    const targetRank = nextRank();
    const activeRank = currentLevelName();
    const previousRank = [...RANKS].reverse().find(rank => passed >= rank.required) || RANKS[0];
    const rankStart = previousRank.required;
    const rankEnd = targetRank ? targetRank.required : Math.max(passed, previousRank.required + LEVEL_ONE_TARGET);
    const rankSpan = Math.max(1, rankEnd - rankStart);
    const rankProgress = Math.min(rankSpan, Math.max(0, passed - rankStart));
    const rankPct = (rankProgress / rankSpan) * 100;

    document.getElementById('readingLevelName').textContent = activeRank;
    document.getElementById('passedCount').textContent = toArabicNumeral(passed);
    document.getElementById('satchelCount').textContent = toArabicNumeral(satchelWords().length);
    document.getElementById('readingProgressFill').style.width = `${total ? (passed / total) * 100 : 0}%`;
    document.getElementById('readingProgressLabel').textContent = `${toArabicNumeral(passed)} / ${toArabicNumeral(total)}`;
    document.getElementById('nextUpgradeHint').textContent = targetRank
      ? `Pass ${toArabicNumeral(targetRank.required - passed)} more stories to reach ${targetRank.name}.`
      : 'Highest reading rank reached for now.';
    document.getElementById('rankHeadline').textContent = activeRank;
    document.getElementById('rankProgressText').textContent = `${toArabicNumeral(rankProgress)} / ${toArabicNumeral(rankSpan)}`;
    document.getElementById('rankTrackFill').style.width = `${rankPct}%`;
    document.getElementById('rankNote').textContent = targetRank
      ? `${toArabicNumeral(targetRank.required - passed)} more passed stories to reach ${targetRank.name}.`
      : 'You have cleared every reading rank currently available.';
    renderRankNodes(passed);
  }

  function renderRankNodes(passed) {
    const mount = document.getElementById('rankNodes');
    mount.innerHTML = RANKS.map((rank, index) => {
      const complete = passed >= rank.required;
      const current = rank.name === currentLevelName();
      const state = current ? 'current' : complete ? 'complete' : 'locked';
      return `
        <div class="rank-node ${state}">
          <span>${toArabicNumeral(index + 1)}</span>
          <strong>${rank.name}</strong>
          <small>${rank.required ? `${toArabicNumeral(rank.required)} stories` : 'Start'}</small>
        </div>
      `;
    }).join('');
  }

  function renderSatchel() {
    const mount = document.getElementById('satchelList');
    const words = satchelWords();
    if (!words.length) {
      mount.innerHTML = '<p class="empty-note">Complete Book One Lesson ١ to unlock your first reading words.</p>';
      return;
    }
    mount.innerHTML = words.map(word => `
      <div class="satchel-word">
        <div class="satchel-ar">${word.ar}</div>
        <div class="satchel-meaning">${word.trans} - ${word.meaning}</div>
      </div>
    `).join('');
  }

  function levelProgressMarkup() {
    const passed = passedIds().length;
    const targetRank = nextRank();
    const previousRank = [...RANKS].reverse().find(rank => passed >= rank.required) || RANKS[0];
    const rankStart = previousRank.required;
    const rankEnd = targetRank ? targetRank.required : Math.max(passed, previousRank.required + LEVEL_ONE_TARGET);
    const rankSpan = Math.max(1, rankEnd - rankStart);
    const rankProgress = Math.min(rankSpan, Math.max(0, passed - rankStart));
    const pct = (rankProgress / rankSpan) * 100;
    const note = targetRank
      ? `${toArabicNumeral(targetRank.required - passed)} more stories to reach ${targetRank.name}.`
      : 'Highest reading rank reached for now.';
    return `
      <div class="level-progress-card">
        <div class="level-progress-copy">
          <strong>${toArabicNumeral(rankProgress)} / ${toArabicNumeral(rankSpan)} completed</strong>
          <span>${note}</span>
        </div>
        <div class="level-progress-track" aria-hidden="true">
          <div class="level-progress-fill" style="width:${pct}%"></div>
        </div>
      </div>
    `;
  }

  function renderReader(resultText = '', resultClass = '', forcedChallenge = null, passedCurrent = false) {
    const mount = document.getElementById('readerCard');
    const challenge = forcedChallenge || nextChallenge();

    if (!challenge) {
      mount.innerHTML = `
        <div class="reader-empty">
          <div class="reader-title">Your first story is waiting.</div>
          <p class="empty-note">Pass Book One Lesson ١, then come back here for a short reading challenge.</p>
        </div>
      `;
      return;
    }

    const questions = challenge.questions.map((question, qIndex) => {
      const options = question.options.map((option, optionIndex) => `
        <label>
          <input type="radio" name="q${qIndex}" value="${optionIndex}" />
          <span>${option}</span>
        </label>
      `).join('');

      return `
        <div class="reading-question">
          <h3>${toArabicNumeral(qIndex + 1)}. ${question.prompt}</h3>
          <div class="answer-options">${options}</div>
        </div>
      `;
    }).join('');

    const newWords = challenge.newWords
      .map(word => `<strong>${word.ar}</strong> ${word.trans} - ${word.meaning}`)
      .join(', ');
    const next = nextUnreadChallenge(challenge.id);
    const lockedHint = passedCurrent && !next
      ? '<p class="next-story-hint">No new unlocked story yet. Complete more Book One lessons to unlock the next reading challenge.</p>'
      : '';
    const resultPanel = resultText ? `
      <div class="reading-result-panel ${resultClass}">
        <div>
          <strong>${resultText}</strong>
          <span>${passedCurrent ? 'Nice. This story now counts toward your reading level.' : 'No stress. Reread the story and try again.'}</span>
        </div>
        ${levelProgressMarkup()}
        ${passedCurrent && next ? '<button class="reading-btn" type="button" id="nextStoryBtn">Read next story</button>' : ''}
        ${lockedHint}
      </div>
    ` : '';

    mount.innerHTML = `
      <div class="reader-topline">
        <div>
          <div class="reader-kicker">${challenge.level}</div>
          <h2 class="reader-title">${challenge.title}</h2>
          <p class="reader-note">${challenge.target}</p>
        </div>
        <span class="reader-badge">${state.passed[challenge.id] ? 'Review' : 'Next Story'}</span>
      </div>
      <div class="story-text">${challenge.story}</div>
      <p class="new-word-note">New word after passing: ${newWords}</p>
      <details class="story-translation">
        <summary>Show Translation</summary>
        <p>${challenge.translation}</p>
      </details>
      <div class="questions">${questions}</div>
      <div class="reader-actions">
        <button class="reading-btn" type="button" id="submitReading">Check Answers</button>
        <span class="reading-inline-result" id="readingInlineResult"></span>
      </div>
      ${resultPanel}
    `;

    document.getElementById('submitReading').addEventListener('click', () => submitChallenge(challenge));
    const nextStoryBtn = document.getElementById('nextStoryBtn');
    if (nextStoryBtn) {
      nextStoryBtn.addEventListener('click', () => renderReader('', '', next));
    }
  }

  function submitChallenge(challenge) {
    let score = 0;
    let answered = 0;
    challenge.questions.forEach((question, index) => {
      const selected = document.querySelector(`input[name="q${index}"]:checked`);
      if (!selected) return;
      answered++;
      if (Number(selected.value) === question.correct) score++;
    });

    if (answered < challenge.questions.length) {
      const inlineResult = document.getElementById('readingInlineResult');
      if (inlineResult) inlineResult.textContent = 'Answer every question before checking.';
      return;
    }

    const passed = score >= Math.ceil(challenge.questions.length * 0.7);
    if (passed) {
      state.passed[challenge.id] = true;
      saveProgress();
      addReadingWords(challenge.newWords);
      renderStats();
      renderSatchel();
      renderReader(`Passed: ${toArabicNumeral(score)}/${toArabicNumeral(challenge.questions.length)}.`, 'pass', challenge, true);
    } else {
      renderReader(`Score: ${toArabicNumeral(score)}/${toArabicNumeral(challenge.questions.length)}.`, 'retry', challenge, false);
    }
  }

  function init() {
    renderStats();
    renderSatchel();
    renderReader();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
