/* ============================================================
   b1-lesson3.js — Lesson 3 Data
   ============================================================ */

const LESSON_DATA = {
  book: 'book1',
  lessonNum: 3,
  titleArabic: 'بَيْتٌ — البَيْتُ',
  titleEnglish: 'A house / The house',
  summary: 'Learn one small addition that makes a big difference: add اَلـ to the front of any noun and it becomes "the" instead of "a". Then learn your first adjectives to describe things.',
  nextLesson: 'b1-lesson4.html',
  passMark: 6,
  totalQuestions: 8,

  guidedPattern: 'اَلـ + اِسْمٌ',
  guidedIntro: 'So far every noun has ended in ٌ (tanwīn) — that means "a". Add اَلـ to the front and it becomes "the". This is one of the most important ideas in Arabic.',
  reviewVocabAtEnd: true,

  guidedPages: [
    {
      titleArabic: 'الدَّرْسُ الثَّالِثُ',
      title: 'A house vs The house',
      pattern: 'بَيْتٌ — البَيْتُ',
      intro: 'Every noun you have learned ends in ٌ which means "a". Add اَلـ to the front and it becomes "the". The ٌ at the end disappears.',
      cards: [
        { icon: '🏠', ar: 'بَيْتٌ — البَيْتُ' },
        { icon: '✏️', ar: 'قَلَمٌ — القَلَمُ' },
        { icon: '📘', ar: 'كِتابٌ — الكِتابُ' },
        { icon: '🐪', ar: 'جَمَلٌ — الجَمَلُ' },
        { icon: '🕌', ar: 'مَسْجِدٌ — المَسْجِدُ' },
        { icon: '🚪', ar: 'بابٌ — البابُ' }
      ],
      keyPoints: ['بَيْتٌ = a house', 'البَيْتُ = the house', 'اَلـ + noun removes the ٌ ending']
    },
    {
      title: 'Describing Things',
      pattern: 'البَيْتُ + صِفَةٌ',
      intro: 'Now say something about "the" noun. Use a definite noun as the subject, then add an adjective. Arabic does not need "is" — just put them side by side.',
      groups: [
        {
          icon: '✏️💔',
          lines: [
            { ar: 'القَلَمُ مَكْسُورٌ.' }
          ]
        },
        {
          icon: '🚪',
          lines: [
            { ar: 'البابُ مَفْتُوحٌ.' }
          ]
        },
        {
          icon: '👦🧑‍🏫',
          lines: [
            { ar: 'الوَلَدُ جالِسٌ، والمُدَرِّسُ واقِفٌ.' }
          ]
        },
        {
          icon: '💧',
          lines: [
            { ar: 'الماءُ بارِدٌ.' }
          ]
        },
        {
          icon: '🌙',
          lines: [
            { ar: 'القَمَرُ جَمِيلٌ.' }
          ]
        }
      ],
      keyPoints: ['Subject is definite (with اَلـ)', 'Adjective is indefinite (with ٌ)', 'No word for "is" needed']
    },
    {
      title: 'Opposites',
      pattern: 'جَدِيدٌ — قَدِيمٌ',
      intro: 'The book has many pairs of opposite adjectives. Each pair is shown together so they are easy to remember.',
      groups: [
        {
          icon: '📘🔑',
          lines: [
            { ar: 'الكِتابُ جَدِيدٌ والقَلَمُ قَدِيمٌ.' }
          ]
        },
        {
          icon: '🫏🐎',
          lines: [
            { ar: 'الحِمارُ صَغِيرٌ والحِصانُ كَبِيرٌ.' }
          ]
        },
        {
          icon: '🏠🕌',
          lines: [
            { ar: 'البَيْتُ قَرِيبٌ والمَسْجِدُ بَعِيدٌ.' }
          ]
        },
        {
          icon: '🪨📄',
          lines: [
            { ar: 'الحَجَرُ ثَقِيلٌ والوَرَقُ خَفِيفٌ.' }
          ]
        },
        {
          icon: '🧣💧',
          lines: [
            { ar: 'اللَّبَنُ حارٌّ.' }
          ]
        },
        {
          icon: '👕',
          lines: [
            { ar: 'القَمِيصُ نَظِيفٌ.' }
          ]
        }
      ],
      keyPoints: ['جَدِيدٌ / قَدِيمٌ = new / old', 'صَغِيرٌ / كَبِيرٌ = small / big', 'قَرِيبٌ / بَعِيدٌ = near / far', 'ثَقِيلٌ / خَفِيفٌ = heavy / light']
    },
    {
      titleArabic: 'تَمارِين (١)',
      title: 'Exercise One',
      pattern: 'اِقْرَأْ وَاكْتُبْ',
      intro: 'From the book: read and write each sentence. Practice switching between indefinite (ٌ) and definite (اَلـ).',
      groups: [
        {
          lines: [
            { ar: 'مَسْجِد — المسجد' },
            { ar: 'الماء — ماء' },
            { ar: 'البيت — باب — قلم — القلم' }
          ]
        },
        {
          lines: [
            { ar: 'الكلب — كلب — قميص — ولد' },
            { ar: 'الحجر — الولد — حمار — الحمار' },
            { ar: 'الحصان — حصان' }
          ]
        }
      ],
      keyPoints: ['Adding اَلـ removes the ٌ', 'مَسْجِدٌ → المَسْجِدُ']
    },
    {
      titleArabic: 'تَمارِين (٢)',
      title: 'Exercise Two',
      pattern: 'اِقْرَأْ وَاكْتُبْ',
      intro: 'Now read and write full sentences. Each one uses the definite article with an adjective.',
      groups: [
        {
          lines: [
            { ar: 'المكتب مكسور.' },
            { ar: 'المدرس جالس.' },
            { ar: 'القميص وسخ.' }
          ]
        },
        {
          lines: [
            { ar: 'اللبن بارد.' },
            { ar: 'المسجد مفتوح.' },
            { ar: 'الحجر كبير.' }
          ]
        },
        {
          lines: [
            { ar: 'اللبن بارد والماء حار.' },
            { ar: 'المهندس جالس والمدرس واقف.' },
            { ar: 'القمر بعيد.' },
            { ar: 'المنديل نظيف.' }
          ]
        }
      ],
      keyPoints: ['Subject اَلـ + adjective ٌ = complete sentence', 'No word for "is" in Arabic']
    },
    {
      titleArabic: 'تَمارِين (٣)',
      title: 'Exercise Three',
      pattern: 'اِمْلأ الفَراغَ',
      intro: 'Fill in the blank with the right adjective from the box.',
      tip: '💡 Tip: No need to type vowel marks — bare letters will match.',
      exercise: [
        {
          prompt: 'الحجر ............',
          ideal: 'الحجر ثقيل.',
          accepts: ['الحجر ثقيل', 'الحجر ثقيل.', 'الحَجَرُ ثَقِيلٌ', 'الحَجَرُ ثَقِيلٌ.']
        },
        {
          prompt: 'الباب ............',
          ideal: 'الباب مفتوح.',
          accepts: ['الباب مفتوح', 'الباب مفتوح.', 'البابُ مَفْتُوحٌ', 'البابُ مَفْتُوحٌ.']
        },
        {
          prompt: 'القمر ............',
          ideal: 'القمر جميل.',
          accepts: ['القمر جميل', 'القمر جميل.', 'القَمَرُ جَمِيلٌ', 'القَمَرُ جَمِيلٌ.']
        },
        {
          prompt: 'اللبن ............',
          ideal: 'اللبن حار.',
          accepts: ['اللبن حار', 'اللبن حار.', 'اللَّبَنُ حارٌّ', 'اللَّبَنُ حارٌّ.', 'اللبن حارّ', 'اللبن حارّ.']
        }
      ]
    }
  ],

  // ============================================================
  // VOCABULARY
  // ============================================================
  vocab: [
    { ar: 'اَلـ', trans: 'al-', meaning: 'The (definite article)', type: 'Particle' },
    { ar: 'البَيْتُ', trans: 'al-baytu', meaning: 'The house', type: 'Noun' },
    { ar: 'القَلَمُ', trans: 'al-qalamu', meaning: 'The pen', type: 'Noun' },
    { ar: 'الكِتابُ', trans: 'al-kitābu', meaning: 'The book', type: 'Noun' },
    { ar: 'المَسْجِدُ', trans: 'al-masjidu', meaning: 'The mosque', type: 'Noun' },
    { ar: 'البابُ', trans: 'al-bābu', meaning: 'The door', type: 'Noun' },
    { ar: 'الوَلَدُ', trans: 'al-waladu', meaning: 'The boy', type: 'Noun' },
    { ar: 'القَمَرُ', trans: 'al-qamaru', meaning: 'The moon', type: 'Noun' },
    { ar: 'الماءُ', trans: 'al-māʾu', meaning: 'The water', type: 'Noun' },
    { ar: 'الوَرَقُ', trans: 'al-waraqu', meaning: 'The paper', type: 'Noun' },
    { ar: 'مَكْسُورٌ', trans: 'maksūrun', meaning: 'Broken', type: 'Adjective' },
    { ar: 'مَفْتُوحٌ', trans: 'maftūḥun', meaning: 'Open', type: 'Adjective' },
    { ar: 'جالِسٌ', trans: 'jālisun', meaning: 'Sitting', type: 'Adjective' },
    { ar: 'واقِفٌ', trans: 'wāqifun', meaning: 'Standing', type: 'Adjective' },
    { ar: 'جَدِيدٌ', trans: 'jadīdun', meaning: 'New', type: 'Adjective' },
    { ar: 'قَدِيمٌ', trans: 'qadīmun', meaning: 'Old', type: 'Adjective' },
    { ar: 'صَغِيرٌ', trans: 'ṣaghīrun', meaning: 'Small', type: 'Adjective' },
    { ar: 'كَبِيرٌ', trans: 'kabīrun', meaning: 'Big', type: 'Adjective' },
    { ar: 'وَسِخٌ', trans: 'wasikhun', meaning: 'Dirty', type: 'Adjective' },
    { ar: 'نَظِيفٌ', trans: 'naẓīfun', meaning: 'Clean', type: 'Adjective' },
    { ar: 'بارِدٌ', trans: 'bāridun', meaning: 'Cold', type: 'Adjective' },
    { ar: 'حارٌّ', trans: 'ḥārrun', meaning: 'Hot', type: 'Adjective' },
    { ar: 'قَرِيبٌ', trans: 'qarībun', meaning: 'Near', type: 'Adjective' },
    { ar: 'بَعِيدٌ', trans: 'baʿīdun', meaning: 'Far', type: 'Adjective' },
    { ar: 'ثَقِيلٌ', trans: 'thaqīlun', meaning: 'Heavy', type: 'Adjective' },
    { ar: 'خَفِيفٌ', trans: 'khafīfun', meaning: 'Light', type: 'Adjective' },
    { ar: 'جَمِيلٌ', trans: 'jamīlun', meaning: 'Beautiful', type: 'Adjective' }
  ],

  // ============================================================
  // GRAMMAR BLOCKS (Concepts tab)
  // ============================================================
  grammarBlocks: [
    {
      title: 'Adding اَلـ makes it "the"',
      content: '<p>Every noun you have seen ends in ٌ (tanwīn) — that means "a". Add <strong>اَلـ</strong> to the front and it becomes "the". The ٌ ending drops off.</p>',
      rule: 'بَيْتٌ = a house · البَيْتُ = the house'
    },
    {
      title: 'Describing "the" noun',
      content: '<p>Put a definite noun (with اَلـ) first, then an adjective after it. There is no word for "is" — Arabic simply puts them side by side.</p>',
      rule: 'القَلَمُ مَكْسُورٌ = The pen is broken.'
    },
    {
      title: 'Opposites to remember',
      content: '<p>Learn these pairs together — they will appear throughout the book.</p>',
      rule: 'جَدِيدٌ / قَدِيمٌ · صَغِيرٌ / كَبِيرٌ · قَرِيبٌ / بَعِيدٌ · ثَقِيلٌ / خَفِيفٌ · نَظِيفٌ / وَسِخٌ · حارٌّ / بارِدٌ'
    }
  ],

  // ============================================================
  // READING COMPREHENSION
  // ============================================================
  comprehension: {
    title: 'From the Book',
    arabic: 'الكِتابُ جَدِيدٌ والقَلَمُ قَدِيمٌ. الحِمارُ صَغِيرٌ والحِصانُ كَبِيرٌ. الكُرْسِيُّ مَكْسُورٌ. المِنْدِيلُ وَسِخٌ. الماءُ بارِدٌ. القَمَرُ جَمِيلٌ. البَيْتُ قَرِيبٌ والمَسْجِدُ بَعِيدٌ. الحَجَرُ ثَقِيلٌ والوَرَقُ خَفِيفٌ. اللَّبَنُ حارٌّ. القَمِيصُ نَظِيفٌ.',
    english: 'The book is new and the pen is old. The donkey is small and the horse is big. The chair is broken. The handkerchief is dirty. The water is cold. The moon is beautiful. The house is near and the mosque is far. The stone is heavy and the paper is light. The milk is hot. The shirt is clean.',
    questions: [
      {
        text: 'Which is described as "new" (جَدِيدٌ)?',
        options: ['The pen', 'The book', 'The chair', 'The shirt'],
        correct: 'The book'
      },
      {
        text: 'What does "الحَجَرُ ثَقِيلٌ" mean?',
        options: ['The stone is small.', 'The stone is heavy.', 'The stone is far.', 'The stone is old.'],
        correct: 'The stone is heavy.'
      },
      {
        text: 'Which is near — the house or the mosque?',
        options: ['The mosque', 'The house', 'Both are near', 'Neither'],
        correct: 'The house'
      }
    ]
  },

  // ============================================================
  // QUIZ QUESTIONS
  // ============================================================
  quizQuestions: {
    multipleChoice: [
      { prompt: 'What is the definite form of بَيْتٌ?', options: ['البَيْتٌ', 'بَيْتُ', 'البَيْتُ', 'بَيْتٌ'], correct: 2 },
      { prompt: 'What does مَكْسُورٌ mean?', options: ['Open', 'New', 'Broken', 'Clean'], correct: 2 },
      { prompt: 'Translate: القَلَمُ قَدِيمٌ', options: ['The pen is new.', 'The pen is broken.', 'The book is old.', 'The pen is old.'], correct: 3 },
      { prompt: 'What is the opposite of كَبِيرٌ (big)?', options: ['بَعِيدٌ', 'ثَقِيلٌ', 'صَغِيرٌ', 'قَدِيمٌ'], correct: 2 },
      { prompt: 'Which sentence means "The water is cold"?', options: ['الماءُ حارٌّ', 'اللَّبَنُ بارِدٌ', 'الماءُ بارِدٌ', 'الماءُ نَظِيفٌ'], correct: 2 },
      { prompt: 'What is the opposite of قَرِيبٌ (near)?', options: ['صَغِيرٌ', 'خَفِيفٌ', 'وَسِخٌ', 'بَعِيدٌ'], correct: 3 }
    ],
    typing: [
      { prompt: 'Type in Arabic: "The pen is broken."', ideal: 'القَلَمُ مَكْسُورٌ', accepts: ['القلم مكسور', 'القَلَمُ مَكْسُورٌ', 'القلم مكسورٌ', 'القَلَمُ مكسور'] },
      { prompt: 'Type in Arabic: "The water is cold."', ideal: 'الماءُ بارِدٌ', accepts: ['الماء بارد', 'الماءُ بارِدٌ', 'الماء باردٌ', 'الماءُ بارد'] }
    ]
  }
};
