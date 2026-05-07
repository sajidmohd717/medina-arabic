/* ============================================================
   b1-lesson3.js — Lesson 3 Data
   ============================================================ */

const LESSON_DATA = {
  book: 'book1',
  lessonNum: 3,
  titleArabic: 'بَيْتٌ — البَيْتُ',
  titleEnglish: 'A house / The house',
  summary: 'Learn one small addition that makes a big difference: add اَلـ to the front of any noun and it becomes "the" instead of "a". Then use it to describe things with adjectives.',
  nextLesson: 'b1-lesson4.html',
  passMark: 8,
  totalQuestions: 11,

  guidedPattern: 'اَلـ + اِسْمٌ',
  guidedIntro: 'So far every noun has ended in ٌ (tanwīn) — that means "a". Add اَلـ to the front and it becomes "the". This is one of the most important ideas in Arabic.',
  reviewVocabAtEnd: true,

  guidedPages: [
    // ── Page 14 top: pairs ─────────────────────────────────────
    {
      titleArabic: 'الدَّرْسُ الثَّالِثُ',
      title: 'Lesson Three',
      pattern: 'اَلـ + اِسْمٌ',
      intro: 'Every noun you know ends in ٌ — that means "a". Put اَلـ in front and it becomes "the". Compare each pair.',
      cards: [
        { icon: '🏠', ar: 'بَيْتٌ | البَيْتُ' },
        { icon: '📘', ar: 'كِتَابٌ | الكِتَابُ' },
        { icon: '✏️', ar: 'قَلَمٌ | القَلَمُ' },
        { icon: '🐪', ar: 'جَمَلٌ | الجَمَلُ' }
      ],
      keyPoints: [
        'بَيْتٌ = a house · البَيْتُ = the house',
        'Adding اَلـ removes the ٌ ending'
      ]
    },

    // ── Page 14 middle: first describing sentences ──────────────
    {
      title: 'Describing with اَلـ',
      pattern: 'اَلـ + اِسْمٌ + صِفَةٌ',
      intro: 'Put اَلـ on the noun, then add an adjective after it. There is no word for "is" — just place them side by side.',
      groups: [
        {
          icon: '✏️❌',
          lines: [
            { ar: 'القَلَمُ مَكْسُورٌ.' }
          ]
        },
        {
          icon: '🚪✅',
          lines: [
            { ar: 'البَابُ مَفْتُوحٌ.' }
          ]
        },
        {
          icon: '👦👨‍🏫',
          lines: [
            { ar: 'الوَلَدُ جَالِسٌ،' },
            { ar: 'وَالمُدَرِّسُ وَاقِفٌ.' }
          ]
        }
      ],
      keyPoints: [
        'القَلَمُ مَكْسُورٌ = The pen is broken',
        'No word for "is" — noun + adjective is enough'
      ]
    },

    // ── Page 14 bottom: sentences 1–10 ─────────────────────────
    {
      title: 'Ten sentences',
      pattern: 'اَلـ + اِسْمٌ + صِفَةٌ',
      intro: 'Read each sentence. Tap any word for its meaning.',
      groups: [
        {
          icon: '📘✏️',
          lines: [
            { ar: 'الكِتَابُ جَدِيدٌ وَالقَلَمُ قَدِيمٌ.' }
          ]
        },
        {
          icon: '🫏🐎',
          lines: [
            { ar: 'الحِمَارُ صَغِيرٌ وَالحِصَانُ كَبِيرٌ.' }
          ]
        },
        {
          icon: '🪑❌',
          lines: [
            { ar: 'الكُرْسِيُّ مَكْسُورٌ.' }
          ]
        },
        {
          icon: '🧻',
          lines: [
            { ar: 'الْمِنْدِيلُ وَسِخٌ.' }
          ]
        },
        {
          icon: '💧',
          lines: [
            { ar: 'الْمَاءُ بَارِدٌ.' }
          ]
        },
        {
          icon: '🌙',
          lines: [
            { ar: 'الْقَمَرُ جَمِيلٌ.' }
          ]
        },
        {
          icon: '🏠🕌',
          lines: [
            { ar: 'الْبَيْتُ قَرِيبٌ وَالْمَسْجِدُ بَعِيدٌ.' }
          ]
        },
        {
          icon: '🪨📄',
          lines: [
            { ar: 'الْحَجَرُ ثَقِيلٌ وَالْوَرَقُ خَفِيفٌ.' }
          ]
        },
        {
          icon: '🥛',
          lines: [
            { ar: 'اللَّبَنُ حَارٌّ.' }
          ]
        },
        {
          icon: '👕',
          lines: [
            { ar: 'الْقَمِيصُ نَظِيفٌ.' }
          ]
        }
      ],
      keyPoints: [
        'وَ = and — joins two describing sentences',
        'Pattern: اَلـ + noun + adjective'
      ]
    },

    // ── Page 16: more pairs ─────────────────────────────────────
    {
      title: 'More pairs',
      pattern: 'اَلـ + اِسْمٌ',
      intro: 'More nouns — same pattern. Compare the indefinite and definite form of each.',
      cards: [
        { icon: '⭐', ar: 'نَجْمٌ | النَّجْمُ' },
        { icon: '🐓', ar: 'دِيكٌ | الدِّيكُ' },
        { icon: '👨', ar: 'رَجُلٌ | الرَّجُلُ' },
        { icon: '👨‍🎓', ar: 'طَالِبٌ | الطَّالِبُ' }
      ],
      keyPoints: [
        'Same rule: add اَلـ, the ٌ drops off',
        'Sun letters double the first letter of اَلـ'
      ]
    },

    // ── Page 17: sentences with new vocabulary ──────────────────
    {
      title: 'New sentences',
      pattern: 'اَلـ + اِسْمٌ + صِفَةٌ',
      intro: 'New adjectives, same structure. Read each sentence.',
      groups: [
        {
          icon: '⭐',
          lines: [
            { ar: 'النَّجْمُ بَعِيدٌ.' }
          ]
        },
        {
          icon: '👨',
          lines: [
            { ar: 'الرَّجُلُ وَاقِفٌ.' }
          ]
        },
        {
          icon: '🍬',
          lines: [
            { ar: 'السُّكَّرُ حُلْوٌ.' }
          ]
        },
        {
          icon: '👨‍🎓',
          lines: [
            { ar: 'الطَّالِبُ مَرِيضٌ.' }
          ]
        },
        {
          icon: '🐓',
          lines: [
            { ar: 'الدِّيكُ جَمِيلٌ.' }
          ]
        },
        {
          icon: '🧑‍💼',
          lines: [
            { ar: 'التَّاجِرُ غَنِيٌّ.' }
          ]
        },
        {
          icon: '🏪',
          lines: [
            { ar: 'الدُّكَّانُ مَفْتُوحٌ.' }
          ]
        },
        {
          icon: '🍎',
          lines: [
            { ar: 'التُّفَّاحُ لَذِيذٌ.' }
          ]
        },
        {
          icon: '👨‍⚕️👨‍🏫',
          lines: [
            { ar: 'الطَّبِيبُ طَوِيلٌ وَالْمُدَرِّسُ قَصِيرٌ.' }
          ]
        }
      ],
      keyPoints: [
        'حُلْوٌ = sweet · مَرِيضٌ = sick · غَنِيٌّ = rich',
        'طَوِيلٌ = tall · قَصِيرٌ = short · لَذِيذٌ = delicious'
      ]
    },

    // ── Exercise ────────────────────────────────────────────────
    {
      titleArabic: 'تَمارِين',
      title: 'Practice',
      pattern: 'اَلـ + اِسْمٌ + صِفَةٌ',
      intro: 'Type the Arabic answer. You can type without vowels — the full answer appears after checking.',
      tip: '💡 Tip: focus on the structure first. Harakat can come later.',
      exercise: [
        {
          icon: '✏️',
          prompt: 'Type in Arabic: "The pen is broken."',
          ideal: 'القَلَمُ مَكْسُورٌ',
          accepts: ['القلم مكسور', 'القَلَمُ مَكْسُورٌ', 'القلم مكسورٌ', 'القَلَمُ مكسور']
        },
        {
          icon: '🚪',
          prompt: 'Type in Arabic: "The door is open."',
          ideal: 'البَابُ مَفْتُوحٌ',
          accepts: ['الباب مفتوح', 'البَابُ مَفْتُوحٌ', 'الباب مفتوحٌ', 'البَابُ مفتوح']
        },
        {
          icon: '📘',
          prompt: 'Type in Arabic: "The book is new."',
          ideal: 'الكِتَابُ جَدِيدٌ',
          accepts: ['الكتاب جديد', 'الكِتَابُ جَدِيدٌ', 'الكتاب جديدٌ', 'الكِتَابُ جديد']
        },
        {
          icon: '🫏',
          prompt: 'Type in Arabic: "The donkey is small."',
          ideal: 'الحِمَارُ صَغِيرٌ',
          accepts: ['الحمار صغير', 'الحِمَارُ صَغِيرٌ', 'الحمار صغيرٌ', 'الحِمَارُ صغير']
        }
      ]
    }
  ],

  // ============================================================
  // VOCABULARY
  // ============================================================
  vocab: [
    { ar: 'اَلـ', trans: 'al-', meaning: 'The (definite article)', type: 'Particle' },
    // Nouns — definite forms
    { ar: 'الْبَيْتُ', trans: 'al-baytu', meaning: 'The house', type: 'Noun' },
    { ar: 'الْكِتَابُ', trans: 'al-kitābu', meaning: 'The book', type: 'Noun' },
    { ar: 'الْقَلَمُ', trans: 'al-qalamu', meaning: 'The pen', type: 'Noun' },
    { ar: 'الْجَمَلُ', trans: 'al-jamalu', meaning: 'The camel', type: 'Animal' },
    { ar: 'الْبَابُ', trans: 'al-bābu', meaning: 'The door', type: 'Noun' },
    { ar: 'الْوَلَدُ', trans: 'al-waladu', meaning: 'The boy', type: 'Person' },
    { ar: 'الْمُدَرِّسُ', trans: 'al-mudarrisu', meaning: 'The teacher', type: 'Person' },
    { ar: 'الْحِمَارُ', trans: 'al-ḥimāru', meaning: 'The donkey', type: 'Animal' },
    { ar: 'الْحِصَانُ', trans: 'al-ḥiṣānu', meaning: 'The horse', type: 'Animal' },
    { ar: 'الْكُرْسِيُّ', trans: 'al-kursiyyu', meaning: 'The chair', type: 'Noun' },
    { ar: 'الْمِنْدِيلُ', trans: 'al-mindīlu', meaning: 'The handkerchief', type: 'Noun' },
    { ar: 'الْمَاءُ', trans: 'al-māʾu', meaning: 'The water', type: 'Noun' },
    { ar: 'الْقَمَرُ', trans: 'al-qamaru', meaning: 'The moon', type: 'Noun' },
    { ar: 'الْمَسْجِدُ', trans: 'al-masjidu', meaning: 'The mosque', type: 'Noun' },
    { ar: 'الْحَجَرُ', trans: 'al-ḥajaru', meaning: 'The stone', type: 'Noun' },
    { ar: 'الْوَرَقُ', trans: 'al-waraqu', meaning: 'The paper', type: 'Noun' },
    { ar: 'اللَّبَنُ', trans: 'al-labanu', meaning: 'The milk', type: 'Noun' },
    { ar: 'الْقَمِيصُ', trans: 'al-qamīṣu', meaning: 'The shirt', type: 'Noun' },
    { ar: 'النَّجْمُ', trans: 'al-najmu', meaning: 'The star', type: 'Noun' },
    { ar: 'الدِّيكُ', trans: 'al-dīku', meaning: 'The rooster', type: 'Animal' },
    { ar: 'الرَّجُلُ', trans: 'al-rajulu', meaning: 'The man', type: 'Person' },
    { ar: 'الطَّالِبُ', trans: 'al-ṭālibu', meaning: 'The student', type: 'Person' },
    { ar: 'السُّكَّرُ', trans: 'al-sukkaru', meaning: 'The sugar', type: 'Noun' },
    { ar: 'التَّاجِرُ', trans: 'al-tājiru', meaning: 'The merchant', type: 'Person' },
    { ar: 'الدُّكَّانُ', trans: 'al-dukkānu', meaning: 'The shop', type: 'Noun' },
    { ar: 'التُّفَّاحُ', trans: 'al-tuffāḥu', meaning: 'The apple', type: 'Noun' },
    { ar: 'الطَّبِيبُ', trans: 'al-ṭabību', meaning: 'The doctor', type: 'Person' },
    { ar: 'الدَّفْتَرُ', trans: 'al-daftaru', meaning: 'The notebook', type: 'Noun' },
    // Adjectives
    { ar: 'مَكْسُورٌ', trans: 'maksūrun', meaning: 'Broken', type: 'Adjective' },
    { ar: 'مَفْتُوحٌ', trans: 'maftūḥun', meaning: 'Open', type: 'Adjective' },
    { ar: 'جَالِسٌ', trans: 'jālisun', meaning: 'Sitting', type: 'Adjective' },
    { ar: 'وَاقِفٌ', trans: 'wāqifun', meaning: 'Standing', type: 'Adjective' },
    { ar: 'جَدِيدٌ', trans: 'jadīdun', meaning: 'New', type: 'Adjective' },
    { ar: 'قَدِيمٌ', trans: 'qadīmun', meaning: 'Old', type: 'Adjective' },
    { ar: 'صَغِيرٌ', trans: 'ṣaghīrun', meaning: 'Small', type: 'Adjective' },
    { ar: 'كَبِيرٌ', trans: 'kabīrun', meaning: 'Big', type: 'Adjective' },
    { ar: 'وَسِخٌ', trans: 'wasikhun', meaning: 'Dirty', type: 'Adjective' },
    { ar: 'نَظِيفٌ', trans: 'naẓīfun', meaning: 'Clean', type: 'Adjective' },
    { ar: 'بَارِدٌ', trans: 'bāridun', meaning: 'Cold', type: 'Adjective' },
    { ar: 'حَارٌّ', trans: 'ḥārrun', meaning: 'Hot', type: 'Adjective' },
    { ar: 'جَمِيلٌ', trans: 'jamīlun', meaning: 'Beautiful', type: 'Adjective' },
    { ar: 'قَرِيبٌ', trans: 'qarībun', meaning: 'Near', type: 'Adjective' },
    { ar: 'بَعِيدٌ', trans: 'baʿīdun', meaning: 'Far', type: 'Adjective' },
    { ar: 'ثَقِيلٌ', trans: 'thaqīlun', meaning: 'Heavy', type: 'Adjective' },
    { ar: 'خَفِيفٌ', trans: 'khafīfun', meaning: 'Light', type: 'Adjective' },
    { ar: 'حُلْوٌ', trans: 'ḥulwun', meaning: 'Sweet', type: 'Adjective' },
    { ar: 'مَرِيضٌ', trans: 'marīḍun', meaning: 'Sick', type: 'Adjective' },
    { ar: 'غَنِيٌّ', trans: 'ghaniyyun', meaning: 'Rich', type: 'Adjective' },
    { ar: 'فَقِيرٌ', trans: 'faqīrun', meaning: 'Poor', type: 'Adjective' },
    { ar: 'طَوِيلٌ', trans: 'ṭawīlun', meaning: 'Tall', type: 'Adjective' },
    { ar: 'قَصِيرٌ', trans: 'qaṣīrun', meaning: 'Short', type: 'Adjective' },
    { ar: 'لَذِيذٌ', trans: 'ladhīdhun', meaning: 'Delicious', type: 'Adjective' }
  ],

  // ============================================================
  // GRAMMAR BLOCKS
  // ============================================================
  grammarBlocks: [
    {
      title: 'Adding اَلـ makes it "the"',
      content: '<p>Every noun you have seen ends in ٌ (tanwīn) — that means "a". Add <strong>اَلـ</strong> to the front and it becomes "the". The ٌ ending drops off.</p>',
      rule: 'بَيْتٌ = a house · الْبَيْتُ = the house'
    },
    {
      title: 'Describing "the" noun',
      content: '<p>Put a definite noun (with اَلـ) first, then an adjective after it. There is no word for "is" — Arabic simply puts them side by side.</p>',
      rule: 'الْقَلَمُ مَكْسُورٌ = The pen is broken.'
    },
    {
      title: 'Joining with وَ',
      content: '<p><strong>وَ</strong> (and) joins two describing sentences into one. Both nouns take اَلـ.</p>',
      rule: 'الْكِتَابُ جَدِيدٌ وَالْقَلَمُ قَدِيمٌ = The book is new and the pen is old.'
    }
  ],

  // ============================================================
  // READING COMPREHENSION
  // ============================================================
  comprehension: {
    title: 'From the Book',
    arabic: 'الْكِتَابُ جَدِيدٌ وَالْقَلَمُ قَدِيمٌ. الْحِمَارُ صَغِيرٌ وَالْحِصَانُ كَبِيرٌ. الْكُرْسِيُّ مَكْسُورٌ. الْمِنْدِيلُ وَسِخٌ. الْمَاءُ بَارِدٌ. الْقَمَرُ جَمِيلٌ. الْبَيْتُ قَرِيبٌ وَالْمَسْجِدُ بَعِيدٌ. الْحَجَرُ ثَقِيلٌ وَالْوَرَقُ خَفِيفٌ. اللَّبَنُ حَارٌّ. الْقَمِيصُ نَظِيفٌ.',
    english: 'The book is new and the pen is old. The donkey is small and the horse is big. The chair is broken. The handkerchief is dirty. The water is cold. The moon is beautiful. The house is near and the mosque is far. The stone is heavy and the paper is light. The milk is hot. The shirt is clean.',
    questions: [
      {
        text: 'Which is described as "new" (جَدِيدٌ)?',
        options: ['The pen', 'The book', 'The chair', 'The shirt'],
        correct: 'The book'
      },
      {
        text: 'What does الْحَجَرُ ثَقِيلٌ mean?',
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
      {
        prompt: 'What is the definite form of بَيْتٌ?',
        options: ['الْبَيْتٌ', 'بَيْتُ', 'الْبَيْتُ', 'بَيْتٌ'],
        correct: 2
      },
      {
        prompt: 'What does مَكْسُورٌ mean?',
        options: ['Open', 'New', 'Broken', 'Clean'],
        correct: 2
      },
      {
        prompt: 'Translate: الْقَلَمُ قَدِيمٌ',
        options: ['The pen is new.', 'The pen is broken.', 'The book is old.', 'The pen is old.'],
        correct: 3
      },
      {
        prompt: 'What is the opposite of كَبِيرٌ (big)?',
        options: ['بَعِيدٌ', 'ثَقِيلٌ', 'صَغِيرٌ', 'قَدِيمٌ'],
        correct: 2
      },
      {
        prompt: 'Which sentence means "The door is open"?',
        options: ['الْبَابُ مَكْسُورٌ', 'الْبَابُ مَفْتُوحٌ', 'الْقَلَمُ مَفْتُوحٌ', 'الْبَيْتُ مَفْتُوحٌ'],
        correct: 1
      },
      {
        prompt: 'What does وَاقِفٌ mean?',
        options: ['Sitting', 'Standing', 'Open', 'Broken'],
        correct: 1
      }
    ],
    typing: [
      {
        prompt: 'Type in Arabic: "The pen is broken."',
        ideal: 'الْقَلَمُ مَكْسُورٌ',
        accepts: ['القلم مكسور', 'الْقَلَمُ مَكْسُورٌ', 'القلم مكسورٌ', 'القَلَمُ مكسور', 'القَلَمُ مَكْسُورٌ']
      },
      {
        prompt: 'Type in Arabic: "The door is open."',
        ideal: 'الْبَابُ مَفْتُوحٌ',
        accepts: ['الباب مفتوح', 'الْبَابُ مَفْتُوحٌ', 'الباب مفتوحٌ', 'البَابُ مفتوح', 'البَابُ مَفْتُوحٌ']
      }
    ],
    conceptCheck: [
      {
        statement: 'Adding اَلـ to a noun removes the ٌ (tanwīn) ending.',
        correct: true,
        explanation: 'بَيْتٌ = a house · الْبَيْتُ = the house. The tanwīn (ٌ) disappears when اَلـ is added.'
      },
      {
        statement: 'Arabic needs a separate word for "is" in sentences like الْقَلَمُ مَكْسُورٌ.',
        correct: false,
        explanation: 'Arabic has no word for "is" in this pattern. The noun and adjective placed side by side carry the full meaning.'
      },
      {
        statement: 'وَ can join two describing sentences, as in الْكِتَابُ جَدِيدٌ وَالْقَلَمُ قَدِيمٌ.',
        correct: true,
        explanation: 'وَ means "and". It connects the two halves — both nouns take اَلـ and each has its own adjective.'
      }
    ]
  }
};
