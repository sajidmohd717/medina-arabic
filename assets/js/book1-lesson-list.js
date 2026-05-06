/* ============================================================
   book1-lesson-list.js — Kalamo
   Book 1 section headers + lesson cards as data; builds DOM for
   book1.html (sidebar nav + lesson list). Document in GUIDELINES.md.
   ============================================================ */

(function () {
  const BOOK = 'book1';

  /** Sidebar + section-block chrome */
  const BOOK1_SECTIONS = [
    {
      id: 'section-1',
      navLabel: 'Nouns & Pointing',
      numberArabic: '1',
      title: 'Nouns & Pointing',
      desc: 'Your first Arabic words — how to point at things and name them. The building blocks of every sentence.',
      tag: 'Lessons 1–5',
    },
    {
      id: 'section-2',
      navLabel: 'Gender & Definiteness',
      numberArabic: '2',
      title: 'Gender & Definiteness',
      desc: 'Arabic has two genders. Learn to identify feminine nouns, point at them correctly, and understand sun and moon letters.',
      tag: 'Lessons 6–9',
    },
    {
      id: 'section-3',
      navLabel: 'Pronouns & Verbs',
      numberArabic: '3',
      title: 'Pronouns & Verbs',
      desc: 'Introduce yourself and others. Your first verbs and the pronouns that attach to them.',
      tag: 'Lessons 10–14',
    },
    {
      id: 'section-4',
      navLabel: 'Verbs & Adverbs',
      numberArabic: '4',
      title: 'Verbs, Adverbs & Key Particles',
      desc: 'Building richer sentences — full verb conjugation, describing location, and important grammar particles.',
      tag: 'Lessons 15–19',
    },
    {
      id: 'section-5',
      navLabel: 'Plurals & Numbers',
      numberArabic: '5',
      title: 'Plurals, Duals & Numbers',
      desc: 'Mastering how Arabic handles more than one — sound plurals, broken plurals, duals, and counting.',
      tag: 'Lessons 20–23',
    },
  ];

  /** lessonNum must match slug; section ties row to BOOK1_SECTIONS.id */
  const BOOK1_LESSONS = [
    { lessonNum: 1, section: 'section-1', slug: 'b1-lesson1', available: true, ar: 'هَذَا', title: 'This is… (Masculine)', desc: 'Using هَذَا to point at masculine nouns. Your very first Arabic sentence pattern.' },
    { lessonNum: 2, section: 'section-1', slug: 'b1-lesson2', available: true, ar: 'ذَلِكَ', title: 'That is… (Masculine)', desc: 'Pointing at something farther away using ذَلِكَ. Contrast with هَذَا.' },
    { lessonNum: 3, section: 'section-1', slug: 'b1-lesson3', available: true, ar: 'بَيْتٌ — الْبَيْتُ', title: 'Indefinite & Definite Nouns', desc: 'The difference between "a house" and "the house". Understanding tanwīn and al- (ال).' },
    { lessonNum: 4, section: 'section-1', slug: 'b1-lesson4', available: true, ar: 'حُرُوفُ الْجَرّ', title: 'Prepositions', desc: 'في، عَلَى، مِنْ، إِلَى and more — saying "in", "on", "from", "to" and asking أَيْنَ؟ (Where?).' },
    { lessonNum: 5, section: 'section-1', slug: 'b1-lesson5', available: true, ar: 'مُضَافٌ وَمُضَافٌ إِلَيْهِ', title: 'The Possessive Construction (Iḍāfa)', desc: 'How Arabic expresses "of" and possession — joining two nouns together without any extra word.' },
    { lessonNum: 6, section: 'section-2', slug: 'b1-lesson6', available: true, ar: 'هَذِهِ', title: 'This is… (Feminine)', desc: "Pointing at feminine nouns with هَذِهِ. Understanding the tā' marbūṭa (ة) ending." },
    { lessonNum: 7, section: 'section-2', slug: 'b1-lesson7', available: true, ar: 'تِلْكَ', title: 'That is… (Feminine)', desc: 'The feminine counterpart to ذَلِكَ. Pointing at distant feminine nouns.' },
    { lessonNum: 8, section: 'section-2', slug: 'b1-lesson8', available: true, ar: 'الْحُرُوفُ الشَّمْسِيَّةُ وَالْقَمَرِيَّةُ', title: 'Sun and Moon Letters', desc: 'Why ال sometimes changes pronunciation. The 14 sun letters and 14 moon letters — a key rule for reading Arabic.' },
    { lessonNum: 9, section: 'section-2', slug: 'b1-lesson9', available: true, ar: 'النَّعْتُ وَالْمَنْعُوتُ', title: 'Adjectives', desc: 'How adjectives agree with nouns in gender and definiteness. "A big mosque", "The small book".' },
    { lessonNum: 10, section: 'section-3', slug: 'b1-lesson10', available: true, ar: 'الضَّمَائِرُ الْمُتَّصِلَةُ', title: 'Attached Pronouns', desc: 'Show possession using suffixes like -ka, -hu, and -i. Learn to say "I have" for objects and relatives.' },
    { lessonNum: 11, section: 'section-3', slug: 'b1-lesson11', available: true, ar: 'فِيهِ — فِيهَا', title: 'Pronouns with Prepositions', desc: 'Using attached pronouns with prepositions. "In it", "on her", "from me".' },
    { lessonNum: 12, section: 'section-3', slug: 'b1-lesson12', available: true, ar: 'الَّذِي — الَّتِي', title: 'Relative Pronouns', desc: '"The man who…", "The book which…". Forming relative clauses in Arabic.' },
    { lessonNum: 13, section: 'section-3', slug: 'b1-lesson13', available: true, ar: 'ذَهَبَ — ذَهَبَتْ', title: 'Past Tense Verbs', desc: 'Your first verbs! The past tense for he and she. How verbs change by gender.' },
    { lessonNum: 14, section: 'section-3', slug: 'b1-lesson14', ar: 'ذَهَبْتَ — ذَهَبْتِ', title: 'Past Tense (You & I)', desc: 'Completing the basic past tense conjugation for "you" (m/f) and "I".' },
    { lessonNum: 15, section: 'section-4', slug: 'b1-lesson15', ar: 'أَفْعَالٌ مَاضِيَة', title: 'Past Tense — Full Conjugation', desc: 'All persons of the past tense — I, you (m/f), he, she, we, they. The complete picture of Arabic verb anatomy.' },
    { lessonNum: 16, section: 'section-4', slug: 'b1-lesson16', ar: 'أَمَامَ — خَلْفَ', title: 'Adverbs of Place & Substitution', desc: 'In front of, behind, above, below, between. Positional adverbs and the concept of badal (substitution).' },
    { lessonNum: 17, section: 'section-4', slug: 'b1-lesson17', ar: 'يَا', title: 'The Particle of Calling (Yā)', desc: 'Using يَا to call out to someone. How the called noun changes its ending.' },
    { lessonNum: 18, section: 'section-4', slug: 'b1-lesson18', ar: 'مَنْ — مَا', title: 'Interrogatives — Who & What', desc: 'Asking "who?" and "what?" — and how interrogative particles change sentence structure.' },
    { lessonNum: 19, section: 'section-4', slug: 'b1-lesson19', ar: 'إِنَّ وَأَخَوَاتُهَا', title: 'Inna and Its Sisters', desc: 'Particles that add emphasis and change noun case endings. إِنَّ، أَنَّ، لَكِنَّ and how to use them.' },
    { lessonNum: 20, section: 'section-5', slug: 'b1-lesson20', ar: 'جَمْعُ الْمُذَكَّرِ السَّالِم', title: 'Sound Masculine Plural', desc: 'The regular plural for masculine nouns — adding ون / ين. "Teachers", "students", "Muslims".' },
    { lessonNum: 21, section: 'section-5', slug: 'b1-lesson21', ar: 'جَمْعُ الْمُؤَنَّثِ السَّالِم', title: 'Sound Feminine Plural', desc: 'The regular plural for feminine nouns — adding ات. "Lessons", "schools", "rooms".' },
    { lessonNum: 22, section: 'section-5', slug: 'b1-lesson22', ar: 'الْمُثَنَّى', title: 'The Dual', desc: 'Arabic has a special form for exactly two of something. Adding ان / ين for masculine and feminine duals.' },
    { lessonNum: 23, section: 'section-5', slug: 'b1-lesson23', ar: 'كَمْ — التَّمْيِيز', title: 'How Many? — كَمْ and the Specification Noun', desc: 'Asking "how many?" with كَمْ and using the tamyīz. The final grammar concept of Book 1.' },
  ];

  function lessonHref(lessonNum) {
    return `lessons/lesson.html?book=1&lesson=${lessonNum}`;
  }

  function quizHref(lessonNum) {
    return `${lessonHref(lessonNum)}&step=quiz`;
  }

  function getCurrentLessonNumber() {
    // Find the first unlocked lesson that is not complete
    for (const lesson of BOOK1_LESSONS) {
      const isUnlocked = typeof isLessonUnlocked === 'function'
        ? isLessonUnlocked(lesson.lessonNum, BOOK)
        : lesson.lessonNum === 1;
      const status = typeof getLessonStatus === 'function'
        ? getLessonStatus(lesson.lessonNum, BOOK)
        : 'not_started';
      if (isUnlocked && status !== 'complete') {
        return lesson.lessonNum;
      }
    }
    return null;
  }

  function buildLessonCard(lesson, isCurrent) {
    const href = lessonHref(lesson.lessonNum);
    const isAvailable = lesson.available === true;
    const card = document.createElement('div');
    card.className = 'lesson-card lesson-card--not-started';
    card.dataset.lesson = String(lesson.lessonNum);
    card.dataset.available = isAvailable ? 'true' : 'false';

    const main = document.createElement('a');
    main.className = 'lesson-card-main';
    main.href = href;

    const badge = document.createElement('div');
    badge.className = 'lesson-num-badge';
    badge.textContent = '';

    const textWrap = document.createElement('div');
    textWrap.className = 'lesson-text';

    const ar = document.createElement('div');
    ar.className = 'lesson-arabic';
    ar.textContent = lesson.ar;

    const title = document.createElement('div');
    title.className = 'lesson-title';
    title.textContent = lesson.title;

    const desc = document.createElement('div');
    desc.className = 'lesson-desc';
    desc.textContent = lesson.desc;

    textWrap.append(ar, title, desc);

    if (isCurrent && isAvailable) {
      const btns = document.createElement('div');
      btns.className = 'lesson-card-btns';

      const continueBtn = document.createElement('a');
      continueBtn.className = 'lesson-continue-btn';
      continueBtn.href = href;
      continueBtn.textContent = 'Continue here →';

      const skipBtn = document.createElement('a');
      skipBtn.className = 'lesson-skip-btn';
      skipBtn.href = quizHref(lesson.lessonNum);
      skipBtn.textContent = 'Quiz to skip';

      btns.append(continueBtn, skipBtn);
      textWrap.appendChild(btns);
    }

    main.append(badge, textWrap);
    card.append(main);
    return card;
  }

  function buildSectionBlock(sec, currentLessonNum) {
    const section = document.createElement('section');
    section.className = 'section-block';
    section.id = sec.id;

    const header = document.createElement('div');
    header.className = 'section-header';

    const num = document.createElement('div');
    num.className = 'section-number';
    num.textContent = sec.numberArabic;

    const info = document.createElement('div');
    info.className = 'section-info';

    const st = document.createElement('div');
    st.className = 'section-title';
    st.textContent = sec.title;

    const sd = document.createElement('div');
    sd.className = 'section-desc';
    sd.textContent = sec.desc;

    info.append(st, sd);

    const tag = document.createElement('div');
    tag.className = 'section-tag';
    tag.textContent = sec.tag;

    header.append(num, info, tag);
    section.appendChild(header);

    BOOK1_LESSONS.filter(l => l.section === sec.id)
      .sort((a, b) => a.lessonNum - b.lessonNum)
      .forEach(lesson => section.appendChild(buildLessonCard(lesson, lesson.lessonNum === currentLessonNum)));

    return section;
  }

  window.renderBook1LessonList = function renderBook1LessonList() {
    const sidebarMount = document.getElementById('book1-sidebar-nav');
    const lessonsMount = document.getElementById('book1-lessons-mount');
    if (!sidebarMount || !lessonsMount) return;

    // Determine current lesson before building
    const currentLessonNum = getCurrentLessonNumber();

    sidebarMount.innerHTML = '';
    BOOK1_SECTIONS.forEach((sec, idx) => {
      const a = document.createElement('a');
      a.className = 'section-nav-item' + (idx === 0 ? ' active' : '');
      a.href = `#${sec.id}`;
      const dot = document.createElement('div');
      dot.className = 'section-nav-dot';
      a.appendChild(dot);
      a.appendChild(document.createTextNode(sec.navLabel));
      sidebarMount.appendChild(a);
    });

    lessonsMount.innerHTML = '';
    BOOK1_SECTIONS.forEach(sec => lessonsMount.appendChild(buildSectionBlock(sec, currentLessonNum)));
  };

  window.BOOK1_LIST_META = {
    book: BOOK,
    lessonCount: BOOK1_LESSONS.length,
    availableLessonCount: BOOK1_LESSONS.filter(lesson => lesson.available === true).length,
  };
})();
