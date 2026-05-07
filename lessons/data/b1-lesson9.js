/* ============================================================
   b1-lesson9.js - Lesson 9 Data
   ============================================================ */

const LESSON_DATA = {
  book: 'book1',
  lessonNum: 9,
  titleArabic: 'النَّعْتُ وَالمَنْعُوتُ',
  titleEnglish: 'Adjectives (Qualifying Nouns)',
  summary: 'Learn how adjectives describe nouns in Arabic. The adjective (نَعْت) matches the noun (مَنْعُوت) in four things: definiteness, gender, number, and case. Also meet the diptote adjectives that never take tanwīn.',
  nextLesson: 'b1-lesson10.html',
  passMark: 8,
  totalQuestions: 11,

  guidedPattern: 'بَيْتٌ جَمِيلٌ',
  guidedIntro: 'Arabic adjectives follow the noun and match it. بَيْتٌ جَمِيلٌ = a beautiful house. البَيْتُ الجَمِيلُ = the beautiful house.',
  reviewVocabAtEnd: true,
  milestoneAfterPage: 4,

  guidedPages: [
    {
      titleArabic: 'النَّعْتُ وَالمَنْعُوتُ',
      title: 'Lesson Nine',
      pattern: 'بَيْتٌ جَمِيلٌ',
      intro: 'In Arabic, the adjective comes AFTER the noun and matches it in definiteness, gender, number, and case.',
      groups: [
        { type: 'scene', text: 'Khalid and Hamid are describing things they see.' },
        {
          icon: '🏠',
          role: 'teacher',
          lines: [
            { label: 'خالد', ar: 'هٰذَا بَيْتٌ جَمِيلٌ.', isPrompt: true },
            { label: 'حامد', ar: 'نَعَمْ، البَيْتُ الجَمِيلُ كَبِيرٌ أَيْضًا.' }
          ]
        },
        {
          icon: '📖',
          role: 'student',
          lines: [
            { label: 'خالد', ar: 'هَلْ هٰذَا كِتَابٌ جَدِيدٌ؟', isPrompt: true },
            { label: 'حامد', ar: 'نَعَمْ، هُوَ كِتَابٌ جَدِيدٌ.' }
          ]
        },
        {
          icon: '🚗',
          role: 'teacher',
          lines: [
            { label: 'خالد', ar: 'هٰذِهِ سَيَّارَةٌ سَرِيعَةٌ.', isPrompt: true },
            { label: 'حامد', ar: 'السَّيَّارَةُ السَّرِيعَةُ جَمِيلَةٌ جِدًّا.' }
          ]
        },
        {
          icon: '🕌',
          role: 'student',
          lines: [
            { label: 'خالد', ar: 'المَسْجِدُ الكَبِيرُ قَرِيبٌ.', isPrompt: true },
            { label: 'حامد', ar: 'وَالمَدْرَسَةُ الصَّغِيرَةُ بَعِيدَةٌ.' }
          ]
        }
      ],
      exerciseIntro: 'Answer from the dialogue',
      exercise: [
        {
          icon: '🏠',
          prompt: 'كَيْفَ البَيْتُ؟',
          placeholder: 'البَيْتُ ...',
          ideal: 'البَيْتُ الجَمِيلُ كَبِيرٌ.',
          accepts: ['البيت الجميل كبير', 'البَيْتُ الجَمِيلُ كَبِيرٌ', 'البيت الجميل كبير.', 'البَيْتُ الجَمِيلُ كَبِيرٌ.']
        },
        {
          icon: '🚗',
          prompt: 'كَيْفَ السَّيَّارَةُ؟',
          placeholder: 'السَّيَّارَةُ ...',
          ideal: 'السَّيَّارَةُ السَّرِيعَةُ جَمِيلَةٌ.',
          accepts: ['السيارة السريعة جميلة', 'السَّيَّارَةُ السَّرِيعَةُ جَمِيلَةٌ', 'السيارة السريعة جميلة.', 'السَّيَّارَةُ السَّرِيعَةُ جَمِيلَةٌ.']
        }
      ],
      keyPoints: [
        'نَعْت = adjective (describes the noun)',
        'مَنْعُوت = the noun being described'
      ]
    },
    {
      title: 'The Matching Rule',
      pattern: 'نَعْت matches مَنْعُوت',
      intro: 'The adjective copies four things from the noun: definiteness, gender, number, and case.',
      groups: [
        {
          icon: '📘',
          lines: [
            { ar: 'كِتَابٌ جَدِيدٌ — a new book (indefinite)' },
            { ar: 'الكِتَابُ الجَدِيدُ — the new book (definite)' }
          ]
        },
        {
          icon: '🚗',
          lines: [
            { ar: 'سَيَّارَةٌ جَدِيدَةٌ — a new car (indefinite, fem.)' },
            { ar: 'السَّيَّارَةُ الجَدِيدَةُ — the new car (definite, fem.)' }
          ]
        },
        {
          icon: '👨‍🏫',
          lines: [
            { ar: 'مُدَرِّسٌ جَدِيدٌ — a new teacher (masc.)' },
            { ar: 'مُدَرِّسَةٌ جَدِيدَةٌ — a new teacher (fem.)' }
          ]
        }
      ],
      keyPoints: [
        'If noun has ال → adjective gets ال too',
        'If noun is feminine → adjective is feminine',
        'If noun has ḍamma → adjective has ḍamma'
      ]
    },
    {
      title: 'Read the Pattern',
      pattern: 'النَّعْتُ وَالمَنْعُوتُ',
      intro: 'Read these sentences. Notice how each adjective matches its noun.',
      groups: [
        {
          icon: '🏠',
          lines: [
            { ar: 'البَيْتُ الكَبِيرُ جَمِيلٌ.' }
          ]
        },
        {
          icon: '📖',
          lines: [
            { ar: 'القُرْآنُ كِتَابٌ كَرِيمٌ.' }
          ]
        },
        {
          icon: '👦',
          lines: [
            { ar: 'الطَّالِبُ المُجْتَهِدُ نَاجِحٌ.' }
          ]
        },
        {
          icon: '🌆',
          lines: [
            { ar: 'القَاهِرَةُ مَدِينَةٌ كَبِيرَةٌ.' }
          ]
        },
        {
          icon: '📝',
          lines: [
            { ar: 'اللُّغَةُ العَرَبِيَّةُ لُغَةٌ جَمِيلَةٌ.' }
          ]
        }
      ],
      keyPoints: [
        'البَيْتُ الكَبِيرُ = the big house',
        'اللُّغَةُ العَرَبِيَّةُ = the Arabic language'
      ]
    },
    {
      title: 'More Adjectives',
      pattern: 'Opposites and descriptions',
      intro: 'Common adjective pairs. Tap for meanings.',
      cards: [
        { icon: '📏', ar: 'كَبِيرٌ | صَغِيرٌ' },
        { icon: '📏', ar: 'طَوِيلٌ | قَصِيرٌ' },
        { icon: '⭐', ar: 'جَمِيلٌ | قَبِيحٌ' },
        { icon: '⚡', ar: 'سَرِيعٌ | بَطِيءٌ' },
        { icon: '📖', ar: 'جَدِيدٌ | قَدِيمٌ' },
        { icon: '💪', ar: 'قَوِيٌّ | ضَعِيفٌ' },
        { icon: '💰', ar: 'غَنِيٌّ | فَقِيرٌ' },
        { icon: '😊', ar: 'سَعِيدٌ | حَزِينٌ' }
      ],
      keyPoints: [
        'Adjectives with opposite pairs',
        'All match gender: كَبِيرَة / صَغِيرَة (fem.)'
      ]
    },
    {
      title: 'Diptote Adjectives',
      pattern: 'كَسْلَانُ / جَوْعَانُ',
      intro: 'Some adjectives ending in ـَانُ never take tanwīn. They are called diptotes.',
      groups: [
        {
          icon: '😴',
          lines: [
            { ar: 'الوَلَدُ كَسْلَانُ. — The boy is lazy.' },
            { ar: 'البِنْتُ كَسْلَى. — The girl is lazy.' }
          ]
        },
        {
          icon: '🍽️',
          lines: [
            { ar: 'حَامِدٌ جَوْعَانُ. — Hamid is hungry.' },
            { ar: 'آمِنَةُ جَوْعَى. — Aminah is hungry.' }
          ]
        },
        {
          icon: '💧',
          lines: [
            { ar: 'الرَّجُلُ عَطْشَانُ. — The man is thirsty.' },
            { ar: 'المَرْأَةُ عَطْشَى. — The woman is thirsty.' }
          ]
        },
        {
          icon: '😡',
          lines: [
            { ar: 'المُدَرِّسُ غَضْبَانُ. — The teacher is angry.' }
          ]
        }
      ],
      keyPoints: [
        'Diptotes: never take tanwīn (no ـٌ)',
        'Feminine form ends in ـَى: كَسْلَى, جَوْعَى, عَطْشَى'
      ]
    },
    {
      title: 'Easy vs Difficult',
      pattern: 'سَهْل / صَعْب',
      intro: 'These adjectives appear often. They also match their noun.',
      groups: [
        {
          icon: '✅',
          lines: [
            { ar: 'الدَّرْسُ سَهْلٌ. — The lesson is easy.' },
            { ar: 'اللُّغَةُ العَرَبِيَّةُ سَهْلَةٌ. — Arabic is easy.' }
          ]
        },
        {
          icon: '❌',
          lines: [
            { ar: 'الاِمْتِحَانُ صَعْبٌ. — The exam is difficult.' },
            { ar: 'المَسْأَلَةُ صَعْبَةٌ. — The problem is difficult.' }
          ]
        },
        {
          icon: '📖',
          lines: [
            { ar: 'هٰذَا كِتَابٌ سَهْلٌ. — This is an easy book.' },
            { ar: 'هٰذِهِ قِصَّةٌ سَهْلَةٌ. — This is an easy story.' }
          ]
        }
      ],
      keyPoints: [
        'سَهْل (masc.) / سَهْلَة (fem.) = easy',
        'صَعْب (masc.) / صَعْبَة (fem.) = difficult'
      ]
    },
    {
      titleArabic: 'تَمْرِين',
      title: 'Practice',
      pattern: 'النَّعْتُ وَالمَنْعُوتُ',
      intro: 'Type the Arabic. Make sure the adjective matches the noun.',
      tip: 'Tip: if the noun has ال, the adjective needs ال too.',
      exercise: [
        {
          icon: '📖',
          prompt: 'Type: "the new book"',
          ideal: 'الكِتَابُ الجَدِيدُ',
          accepts: ['الكتاب الجديد', 'الكِتَابُ الجَدِيدُ', 'الكتابُ الجديدُ']
        },
        {
          icon: '🏠',
          prompt: 'Type: "a beautiful house"',
          ideal: 'بَيْتٌ جَمِيلٌ',
          accepts: ['بيت جميل', 'بَيْتٌ جَمِيلٌ', 'بيتٌ جميلٌ']
        },
        {
          icon: '🚗',
          prompt: 'Type: "the fast car"',
          ideal: 'السَّيَّارَةُ السَّرِيعَةُ',
          accepts: ['السيارة السريعة', 'السَّيَّارَةُ السَّرِيعَةُ', 'السيارةُ السريعةُ']
        },
        {
          icon: '😴',
          prompt: 'Type: "the boy is lazy" (diptote)',
          ideal: 'الوَلَدُ كَسْلَانُ',
          accepts: ['الولد كسلان', 'الوَلَدُ كَسْلَانُ', 'الولدُ كسلانُ']
        }
      ]
    }
  ],

  vocab: [
    { ar: 'نَعْتٌ', trans: 'naʿtun', meaning: 'An adjective', type: 'Grammar' },
    { ar: 'مَنْعُوتٌ', trans: 'manʿūtun', meaning: 'The noun being described', type: 'Grammar' },
    { ar: 'جَدِيدٌ', trans: 'jadīdun', meaning: 'New', type: 'Adjective' },
    { ar: 'قَدِيمٌ', trans: 'qadīmun', meaning: 'Old', type: 'Adjective' },
    { ar: 'صَغِيرٌ', trans: 'ṣaghīrun', meaning: 'Small', type: 'Adjective' },
    { ar: 'كَبِيرٌ', trans: 'kabīrun', meaning: 'Big', type: 'Adjective' },
    { ar: 'جَمِيلٌ', trans: 'jamīlun', meaning: 'Beautiful', type: 'Adjective' },
    { ar: 'سَهْلٌ', trans: 'sahlun', meaning: 'Easy', type: 'Adjective' },
    { ar: 'صَعْبٌ', trans: 'ṣaʿbun', meaning: 'Difficult', type: 'Adjective' },
    { ar: 'مُجْتَهِدٌ', trans: 'mujtahidun', meaning: 'Hardworking', type: 'Adjective' },
    { ar: 'كَسْلَانُ', trans: 'kaslānu', meaning: 'Lazy (diptote)', type: 'Adjective (Diptote)' },
    { ar: 'جَوْعَانُ', trans: 'jawʿānu', meaning: 'Hungry (diptote)', type: 'Adjective (Diptote)' },
    { ar: 'عَطْشَانُ', trans: 'ʿaṭshānu', meaning: 'Thirsty (diptote)', type: 'Adjective (Diptote)' },
    { ar: 'غَضْبَانُ', trans: 'ghaḍbānu', meaning: 'Angry (diptote)', type: 'Adjective (Diptote)' },
    { ar: 'القَاهِرَةُ', trans: 'al-qāhiratu', meaning: 'Cairo', type: 'Place' },
    { ar: 'لُغَةٌ', trans: 'lughatun', meaning: 'A language', type: 'Noun' },
    { ar: 'مَدِينَةٌ', trans: 'madīnatun', meaning: 'A city', type: 'Noun' },
    { ar: 'عُصْفُورٌ', trans: 'ʿuṣfūrun', meaning: 'A sparrow', type: 'Noun' }
  ],

  grammarBlocks: [
    {
      title: 'The Noun-Adjective Phrase',
      content: '<p>In Arabic the adjective (<strong>نَعْت</strong>) comes <em>after</em> the noun it describes (<strong>مَنْعُوت</strong>). Together they form the <strong>نَعْت وَمَنْعُوت</strong> phrase.</p>',
      rule: 'بَيْتٌ جَمِيلٌ = a beautiful house<br>مَنْعُوت + نَعْت = noun + adjective'
    },
    {
      title: 'The Four Matching Rules',
      content: '<p>The adjective must match the noun in <strong>four things</strong>:</p><ol><li><strong>Definiteness</strong> — both indefinite or both definite (with ال)</li><li><strong>Gender</strong> — both masculine or both feminine</li><li><strong>Number</strong> — both singular, dual, or plural</li><li><strong>Case</strong> — both nominative (ـُ), accusative (ـَ), or genitive (ـِ)</li></ol>',
      rule: 'الكِتَابُ الجَدِيدُ (def. masc. nom. sing.)<br>كِتَابٌ جَدِيدٌ (indef. masc. nom. sing.)'
    },
    {
      title: 'Diptote Adjectives (الممنوع من الصرف)',
      content: '<p>Some adjectives ending in <strong>ـَانُ</strong> never take tanwīn. In the indefinite form they end with a single ḍamma (ـُ), never ـٌ.</p><p>Their feminine form ends in <strong>ـَى</strong> (short alif): كَسْلَى, جَوْعَى, عَطْشَى.</p>',
      rule: 'كَسْلَانُ · جَوْعَانُ · عَطْشَانُ · غَضْبَانُ · مَلْآنُ<br>Feminine: كَسْلَى · جَوْعَى · عَطْشَى'
    }
  ],

  comprehension: {
    title: 'The Hardworking Student',
    arabic: 'هٰذَا طَالِبٌ مُجْتَهِدٌ. اِسْمُهُ حَامِدٌ. هُوَ طَالِبٌ جَدِيدٌ فِي الجَامِعَةِ. اللُّغَةُ العَرَبِيَّةُ لُغَةٌ جَمِيلَةٌ. الدَّرْسُ سَهْلٌ وَالكِتَابُ جَدِيدٌ. حَامِدٌ سَعِيدٌ اليَوْمَ. صَدِيقُهُ كَسْلَانُ وَجَوْعَانُ. القَاهِرَةُ مَدِينَةٌ كَبِيرَةٌ. الجَوُّ جَمِيلٌ وَالشَّمْسُ مُشْرِقَةٌ.',
    english: 'This is a hardworking student. His name is Hamid. He is a new student at the university. The Arabic language is a beautiful language. The lesson is easy and the book is new. Hamid is happy today. His friend is lazy and hungry. Cairo is a big city. The weather is beautiful and the sun is shining.',
    questions: [
      {
        text: 'What kind of student is Hamid?',
        options: ['A lazy student', 'A hardworking student', 'A hungry student', 'A new teacher'],
        correct: 'A hardworking student'
      },
      {
        text: 'How is the Arabic language described?',
        options: ['Difficult', 'Beautiful', 'Old', 'Small'],
        correct: 'Beautiful'
      },
      {
        text: 'How is the lesson described?',
        options: ['Difficult (صَعْب)', 'Easy (سَهْل)', 'New (جَدِيد)', 'Big (كَبِير)'],
        correct: 'Easy (سَهْل)'
      },
      {
        text: 'What is his friend like?',
        options: ['Happy and rich', 'Lazy and hungry', 'Tall and strong', 'Angry and sad'],
        correct: 'Lazy and hungry'
      }
    ]
  },

  quizQuestions: {
    multipleChoice: [
      {
        prompt: 'In بَيْتٌ جَمِيلٌ, which word is the adjective (نَعْت)?',
        options: ['بَيْتٌ', 'جَمِيلٌ', 'Both', 'Neither'],
        correct: 1
      },
      {
        prompt: 'Choose the correct phrase: "the big house"',
        options: ['البَيْتُ الكَبِيرُ', 'بَيْتٌ كَبِيرٌ', 'البَيْتُ كَبِيرٌ', 'بَيْتٌ الكَبِيرُ'],
        correct: 0
      },
      {
        prompt: 'What must the adjective match?',
        options: ['Only gender', 'Only definiteness', 'Definiteness, gender, number, and case', 'Only case'],
        correct: 2
      },
      {
        prompt: 'Choose the correct form: "a new car" (fem.)',
        options: ['سَيَّارَةٌ جَدِيدٌ', 'السَّيَّارَةُ الجَدِيدَةُ', 'سَيَّارَةٌ جَدِيدَةٌ', 'سَيَّارَةٌ جَدِيدٍ'],
        correct: 2
      },
      {
        prompt: 'Why does كَسْلَانُ not take tanwīn?',
        options: ['It is feminine', 'It is a diptote', 'It has ال', 'It is broken plural'],
        correct: 1
      },
      {
        prompt: 'What is the feminine of جَوْعَانُ?',
        options: ['جَوْعَانَةٌ', 'جَوْعَى', 'جَوْعَاءُ', 'جَوْعَانِيَّةٌ'],
        correct: 1
      }
    ],
    typing: [
      {
        prompt: 'Type: "the new book"',
        ideal: 'الكِتَابُ الجَدِيدُ',
        accepts: ['الكتاب الجديد', 'الكِتَابُ الجَدِيدُ', 'الكتابُ الجديدُ']
      },
      {
        prompt: 'Type: "the boy is hungry"',
        ideal: 'الوَلَدُ جَوْعَانُ',
        accepts: ['الولد جوعان', 'الوَلَدُ جَوْعَانُ', 'الولدُ جوعانُ']
      }
    ],
    conceptCheck: [
      {
        statement: 'In Arabic, the adjective (نَعْت) comes after the noun it describes (مَنْعُوت).',
        correct: true,
        explanation: 'Unlike English (where "beautiful house" puts the adjective first), Arabic puts it second: بَيْتٌ جَمِيلٌ.'
      },
      {
        statement: 'If the noun has ال, the adjective must also have ال.',
        correct: true,
        explanation: 'Definiteness must match: البَيْتُ الجَمِيلُ (both definite), not البَيْتُ جَمِيلٌ.'
      },
      {
        statement: 'Diptote adjectives like كَسْلَانُ and جَوْعَانُ take regular tanwīn like other adjectives.',
        correct: false,
        explanation: 'Diptotes never take tanwīn. They end in a single ḍamma (ـُ) in the indefinite form: كَسْلَانُ, not كَسْلَانٌ.'
      }
    ]
  },

  practiceQuestions: []
};
