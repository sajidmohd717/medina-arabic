/* ============================================================
   b1-lesson11.js - Lesson 11 Data
   ============================================================ */

const LESSON_DATA = {
  book: 'book1',
  lessonNum: 11,
  titleArabic: 'فِيهِ — فِيهَا',
  titleEnglish: 'Pronouns with Prepositions',
  summary: 'Learn to attach pronoun suffixes to prepositions. Instead of repeating a noun, Arabic combines them: فِيهِ (in it), عَلَيْهَا (on her), مِنْهُ (from him), and more.',
  nextLesson: 'b1-lesson12.html',
  passMark: 8,
  totalQuestions: 11,

  guidedPattern: 'فِيهِ',
  guidedIntro: 'Pronoun suffixes attach to prepositions just like they attach to nouns — creating one smooth word.',
  reviewVocabAtEnd: true,
  milestoneAfterPage: 4,

  guidedPages: [
    {
      titleArabic: 'فِيهِ',
      title: 'Lesson Eleven',
      pattern: 'فِيهِ — فِيهَا',
      intro: 'Start with a dialogue using pronouns attached to prepositions. Listen for words like فيه (in it) and عليها (on her).',
      groups: [
        { type: 'scene', text: 'Khalid is describing his room to Hamid.' },
        {
          icon: '🚪',
          role: 'teacher',
          lines: [
            { label: 'حامد', ar: 'أَيْنَ مِفْتَاحُ غُرْفَتِكَ؟', isPrompt: true },
            { label: 'خالد', ar: 'مِفْتَاحِي فِي الحَقِيبَةِ.' }
          ]
        },
        {
          icon: '📖',
          role: 'student',
          lines: [
            { label: 'حامد', ar: 'وَمَاذَا فِيهَا؟', isPrompt: true },
            { label: 'خالد', ar: 'فِيهَا كِتَابٌ وَقَلَمٌ.' }
          ]
        },
        {
          icon: '🪑',
          role: 'teacher',
          lines: [
            { label: 'حامد', ar: 'مَنْ هٰذَا الرَّجُلُ؟', isPrompt: true },
            { label: 'خالد', ar: 'هٰذَا أَبِي. هٰذِهِ صُورَتُهُ.' }
          ]
        },
        {
          icon: '👨',
          role: 'student',
          lines: [
            { label: 'حامد', ar: 'لِمَنْ هٰذَا الكِتَابُ؟', isPrompt: true },
            { label: 'خالد', ar: 'لَهُ. هُوَ كِتَابُ أَبِي.' }
          ]
        }
      ],
      exerciseIntro: 'Answer from the dialogue',
      exercise: [
        {
          icon: '📖',
          prompt: 'مَاذَا فِي الحَقِيبَةِ؟',
          placeholder: 'فِيهَا ...',
          ideal: 'فِيهَا كِتَابٌ وَقَلَمٌ.',
          accepts: ['فيها كتاب وقلم', 'فِيهَا كِتَابٌ وَقَلَمٌ', 'فيها كتاب وقلم.', 'فِيهَا كِتَابٌ وَقَلَمٌ.']
        },
        {
          icon: '👨',
          prompt: 'لِمَنْ هٰذَا الكِتَابُ؟',
          placeholder: 'هُوَ ...',
          ideal: 'لِأَبِي. لَهُ الكِتَابُ.',
          accepts: ['لأبي له الكتاب', 'لِأَبِي لَهُ الكِتَابُ', 'لأبي له الكتاب.', 'لِأَبِي. لَهُ الكِتَابُ.']
        }
      ],
      keyPoints: [
        'فِيهَا = in it / in her (fem.)',
        'لَهُ = for him / he has',
        'Pronouns attach directly to prepositions'
      ]
    },
    {
      title: 'Preposition + Pronoun Chart',
      pattern: 'فِي / عَلَى / مِنْ / إِلَى + pronoun',
      intro: 'The same pronoun suffixes from Lesson 10 now attach to prepositions.',
      cards: [
        { icon: '📍', ar: 'فِيهِ — in it (m.)' },
        { icon: '📍', ar: 'فِيهَا — in it (f.)' },
        { icon: '📍', ar: 'عَلَيْهِ — on it (m.)' },
        { icon: '📍', ar: 'عَلَيْهَا — on it (f.)' },
        { icon: '📍', ar: 'مِنْهُ — from him' },
        { icon: '📍', ar: 'مِنْهَا — from her' },
        { icon: '📍', ar: 'إِلَيْهِ — to him' },
        { icon: '📍', ar: 'إِلَيْهَا — to her' }
      ],
      keyPoints: [
        'فِي + هُ = فِيهِ (in it)',
        'عَلَى → عَلَيْـ before pronoun suffixes',
        'إِلَى → إِلَيْـ before pronoun suffixes'
      ]
    },
    {
      title: 'Prepositions Change Shape',
      pattern: 'عَلَيْـ / إِلَيْـ / فِيَّ',
      intro: 'Three prepositions change their form before pronoun suffixes. Tap the right form.',
      wordBank: ['فِيهِ', 'فِيَّ', 'عَلَيْهِ', 'عَلَيَّ', 'إِلَيْهِ', 'إِلَيَّ', 'لَهُ', 'لِي'],
      tapFill: [
        { parts: ['in him: ', null], answer: 'فِيهِ' },
        { parts: ['in me: ', null], answer: 'فِيَّ' },
        { parts: ['on him: ', null], answer: 'عَلَيْهِ' },
        { parts: ['on me: ', null], answer: 'عَلَيَّ' },
        { parts: ['to him: ', null], answer: 'إِلَيْهِ' },
        { parts: ['to me: ', null], answer: 'إِلَيَّ' },
        { parts: ['for him / he has: ', null], answer: 'لَهُ' },
        { parts: ['for me / I have: ', null], answer: 'لِي' }
      ],
      keyPoints: [
        'عَلَى + ي = عَلَيَّ (on me)',
        'إِلَى + ي = إِلَيَّ (to me)',
        'فِي + ي = فِيَّ (in me)'
      ]
    },
    {
      title: 'Read the Pattern',
      pattern: 'Prepositions with pronouns',
      intro: 'Read these sentences. Notice how the preposition and pronoun combine into one word.',
      groups: [
        {
          icon: '🏠',
          lines: [
            { ar: 'هٰذِهِ غُرْفَةُ خَالِدٍ. خَالِدٌ فِيهَا الآنَ.' }
          ]
        },
        {
          icon: '📖',
          lines: [
            { ar: 'عَلَى الطَّاوِلَةِ كِتَابٌ جَدِيدٌ وَقَلَمٌ أَحْمَرُ.' }
          ]
        },
        {
          icon: '🔑',
          lines: [
            { ar: 'المِفْتَاحُ فِي الحَقِيبَةِ. هُوَ فِيهَا.' }
          ]
        },
        {
          icon: '👨',
          lines: [
            { ar: 'الكِتَابُ لِخَالِدٍ. هُوَ لَهُ.' }
          ]
        },
        {
          icon: '🏫',
          lines: [
            { ar: 'خَرَجَ الطَّالِبُ مِنَ الفَصْلِ. خَرَجَ مِنْهُ.' }
          ]
        }
      ],
      keyPoints: [
        'فِيهَا = in it (referring back to الغرفة)',
        'لَهُ = for him / belongs to him'
      ]
    },
    {
      title: 'لَهُ / لَهَا — He Has / She Has',
      pattern: 'لَهُ أَخٌ — He has a brother',
      intro: 'لِـ with pronoun suffixes expresses "has" for relatives and close belonging.',
      groups: [
        {
          icon: '👨‍👩‍👦',
          lines: [
            { ar: 'لَهُ أَخٌ وَأُخْتٌ. — He has a brother and a sister.' },
            { ar: 'لَهَا أَبٌ وَأُمٌّ. — She has a father and a mother.' }
          ]
        },
        {
          icon: '📖',
          lines: [
            { ar: 'هَلْ لَكَ كِتَابٌ؟', isPrompt: true },
            { ar: 'نَعَمْ، لِي كِتَابٌ جَدِيدٌ.' }
          ]
        },
        {
          icon: '✏️',
          lines: [
            { ar: 'لِمَنْ هٰذَا القَلَمُ؟', isPrompt: true },
            { ar: 'هُوَ لِحَامِدٍ. لَهُ قَلَمٌ أَحْمَرُ.' }
          ]
        }
      ],
      exercise: [
        {
          icon: '👨‍👩‍👦',
          prompt: 'Type: "He has a brother."',
          ideal: 'لَهُ أَخٌ.',
          accepts: ['له أخ', 'لَهُ أَخٌ', 'له أخ.', 'لَهُ أَخٌ.']
        },
        {
          icon: '📖',
          prompt: 'Type: "I have a new book."',
          ideal: 'لِي كِتَابٌ جَدِيدٌ.',
          accepts: ['لي كتاب جديد', 'لِي كِتَابٌ جَدِيدٌ', 'لي كتاب جديد.', 'لِي كِتَابٌ جَدِيدٌ.']
        }
      ],
      keyPoints: [
        'لَهُ = he has · لَهَا = she has',
        'لِي = I have (for relatives/close possession)'
      ]
    },
    {
      title: 'بِـ — With / By',
      pattern: 'بِهِ — with it',
      intro: 'The preposition بِـ (with/by) also takes pronoun suffixes.',
      groups: [
        {
          icon: '✏️',
          lines: [
            { ar: 'كَتَبَ الطَّالِبُ بِالقَلَمِ. كَتَبَ بِهِ.' }
          ]
        },
        {
          icon: '🔑',
          lines: [
            { ar: 'فَتَحَ البَابَ بِالمِفْتَاحِ. فَتَحَ بِهِ.' }
          ]
        },
        {
          icon: '🖐️',
          lines: [
            { ar: 'كَتَبْتُ بِيَدِي. — I wrote with my hand.' }
          ]
        }
      ],
      keyPoints: [
        'بِـ = with / by means of',
        'بِهِ = with it / by it'
      ]
    },
    {
      titleArabic: 'تَمْرِين',
      title: 'Practice',
      pattern: 'Preposition + pronoun',
      intro: 'Type the Arabic using prepositions with attached pronouns.',
      tip: 'Tip: عَلَى becomes عَلَيْـ before pronoun suffixes. فِي + ي = فِيَّ.',
      exercise: [
        {
          icon: '📍',
          prompt: 'Type: "in it" (masc.) — فِي + هُ',
          ideal: 'فِيهِ',
          accepts: ['فيه', 'فِيهِ']
        },
        {
          icon: '📍',
          prompt: 'Type: "on her" — عَلَى + هَا',
          ideal: 'عَلَيْهَا',
          accepts: ['عليها', 'عَلَيْهَا']
        },
        {
          icon: '📍',
          prompt: 'Type: "from him" — مِنْ + هُ',
          ideal: 'مِنْهُ',
          accepts: ['منه', 'مِنْهُ']
        },
        {
          icon: '👨‍👩‍👦',
          prompt: 'Type: "He has a brother."',
          ideal: 'لَهُ أَخٌ.',
          accepts: ['له أخ', 'لَهُ أَخٌ', 'له أخ.', 'لَهُ أَخٌ.']
        }
      ]
    }
  ],

  vocab: [
    { ar: 'فِيهِ', trans: 'fīhi', meaning: 'In it (masc.) / In him', type: 'Prep+Pronoun' },
    { ar: 'فِيهَا', trans: 'fīhā', meaning: 'In it (fem.) / In her', type: 'Prep+Pronoun' },
    { ar: 'فِيكَ', trans: 'fīka', meaning: 'In you (masc.)', type: 'Prep+Pronoun' },
    { ar: 'فِيَّ', trans: 'fiyya', meaning: 'In me', type: 'Prep+Pronoun' },
    { ar: 'عَلَيْهِ', trans: 'ʿalayhi', meaning: 'On it (masc.) / On him', type: 'Prep+Pronoun' },
    { ar: 'عَلَيْهَا', trans: 'ʿalayhā', meaning: 'On it (fem.) / On her', type: 'Prep+Pronoun' },
    { ar: 'مِنْهُ', trans: 'minhu', meaning: 'From it / From him', type: 'Prep+Pronoun' },
    { ar: 'مِنْهَا', trans: 'minhā', meaning: 'From it (fem.) / From her', type: 'Prep+Pronoun' },
    { ar: 'إِلَيْهِ', trans: 'ilayhi', meaning: 'To it / To him', type: 'Prep+Pronoun' },
    { ar: 'إِلَيْهَا', trans: 'ilayhā', meaning: 'To it (fem.) / To her', type: 'Prep+Pronoun' },
    { ar: 'لَهُ', trans: 'lahu', meaning: 'For him / He has', type: 'Prep+Pronoun' },
    { ar: 'لَهَا', trans: 'lahā', meaning: 'For her / She has', type: 'Prep+Pronoun' },
    { ar: 'بِهِ', trans: 'bihi', meaning: 'With it / By it (masc.)', type: 'Prep+Pronoun' },
    { ar: 'مِفْتَاحٌ', trans: 'miftāḥun', meaning: 'Key', type: 'Noun' },
    { ar: 'غُرْفَةٌ', trans: 'ghurfatun', meaning: 'Room', type: 'Noun' },
    { ar: 'طَاوِلَةٌ', trans: 'ṭāwilatun', meaning: 'Table', type: 'Noun' },
    { ar: 'كُرْسِيٌّ', trans: 'kursiyyun', meaning: 'Chair', type: 'Noun' }
  ],

  grammarBlocks: [
    {
      title: 'Pronoun Suffixes Attach to Prepositions',
      content: '<p>In Lesson 10 you learned that pronoun suffixes attach to nouns: <strong>كِتَابِي</strong> (my book), <strong>كِتَابُكَ</strong> (your book). The same suffixes also attach to <em>prepositions</em>, creating a single combined word.</p><ul><li><strong>فِي</strong> (in) + <strong>ـهُ</strong> = <strong>فِيهِ</strong> (in it — masc.)</li><li><strong>فِي</strong> (in) + <strong>ـهَا</strong> = <strong>فِيهَا</strong> (in it — fem.)</li><li><strong>عَلَى</strong> (on) + <strong>ـهُ</strong> = <strong>عَلَيْهِ</strong> (on it — masc.)</li></ul>',
      rule: 'Preposition + Pronoun Suffix = one combined word.'
    },
    {
      title: 'فِي, عَلَى, and إِلَى Change Their Shape',
      content: '<p>Three common prepositions change their ending before pronoun suffixes:</p><ul><li><strong>فِي</strong> stays as <strong>فِيـ</strong> before most suffixes, but becomes <strong>فِيَّ</strong> (fiyya) before the "me" suffix.</li><li><strong>عَلَى</strong> becomes <strong>عَلَيْـ</strong>: عَلَيْهِ, عَلَيْهَا, عَلَيْكَ, عَلَيَّ.</li><li><strong>إِلَى</strong> becomes <strong>إِلَيْـ</strong>: إِلَيْهِ, إِلَيْهَا, إِلَيْكَ, إِلَيَّ.</li></ul>',
      rule: 'عَلَى → عَلَيْـ and إِلَى → إِلَيْـ before all suffixes.'
    },
    {
      title: 'لَهُ / لَهَا — "He Has / She Has"',
      content: '<p>Earlier we saw <strong>لِي</strong> (I have). This extends to third person:</p><ul><li><strong>لَهُ أَخٌ</strong> — He has a brother.</li><li><strong>لَهَا أَبٌ</strong> — She has a father.</li></ul><p>In everyday use, <strong>لَهُ / لَهَا</strong> is used broadly for both people and objects.</p>',
      rule: 'لَهُ = "for him" or "he has". لَهَا = "for her" or "she has".'
    }
  ],

  comprehension: {
    title: "Khalid's Room",
    arabic: 'هٰذِهِ غُرْفَةُ خَالِدٍ. خَالِدٌ فِيهَا الآنَ. الغُرْفَةُ كَبِيرَةٌ وَنَظِيفَةٌ. عَلَى الطَّاوِلَةِ كِتَابٌ جَدِيدٌ وَقَلَمٌ أَحْمَرُ. الكِتَابُ لِخَالِدٍ وَالقَلَمُ لَهُ أَيْضًا. حَقِيبَةُ خَالِدٍ عَلَى الكُرْسِيِّ. المِفْتَاحُ فِيهَا. خَالِدٌ طَالِبٌ مُجْتَهِدٌ.',
    english: "This is Khalid's room. Khalid is in it now. The room is large and clean. On the table is a new book and a red pen. The book belongs to Khalid, and the pen is his too. Khalid's bag is on the chair. The key is in it. Khalid is a hardworking student.",
    questions: [
      {
        text: 'Where is Khalid now?',
        options: ['In the classroom', 'In his room', 'In the mosque', 'In the school'],
        correct: 'In his room'
      },
      {
        text: 'What is on the table (عَلَى الطَّاوِلَةِ)?',
        options: ['A bag and a key', 'A new book and a red pen', 'A chair and a table', 'A book and a bag'],
        correct: 'A new book and a red pen'
      },
      {
        text: "Where is Khalid's bag?",
        options: ['On the table', 'In the room', 'On the chair', 'Under the table'],
        correct: 'On the chair'
      },
      {
        text: 'What is inside the bag (فِيهَا)?',
        options: ['A book', 'A pen', 'The key', 'A phone'],
        correct: 'The key'
      }
    ]
  },

  quizQuestions: {
    multipleChoice: [
      {
        prompt: 'What does فِيهِ mean?',
        options: ['In me', 'In you (masc.)', 'In it (masc.) / In him', 'In her'],
        correct: 2
      },
      {
        prompt: 'What is the combined form of عَلَى + ـهَا?',
        options: ['عَلَيْهِ', 'عَلَيْهَا', 'عَلَيْكَ', 'عَلَى'],
        correct: 1
      },
      {
        prompt: 'What does لَهُ mean?',
        options: ['For me', 'For her', 'For him / He has', 'From him'],
        correct: 2
      },
      {
        prompt: 'What does فِيَّ mean?',
        options: ['In him', 'In her', 'In me', 'In you (masc.)'],
        correct: 2
      },
      {
        prompt: 'Choose the correct: "from her"',
        options: ['مِنْهُ', 'مِنْهَا', 'إِلَيْهَا', 'عَلَيْهَا'],
        correct: 1
      },
      {
        prompt: 'Complete: المِفْتَاحُ فِي الحَقِيبَةِ. هُوَ ___.',
        options: ['فِيهَا', 'فِيهِ', 'لَهُ', 'عَلَيْهِ'],
        correct: 0
      }
    ],
    typing: [
      {
        prompt: 'Type: "in it" (masc.)',
        ideal: 'فِيهِ',
        accepts: ['فيه', 'فِيهِ']
      },
      {
        prompt: 'Type: "He has a brother."',
        ideal: 'لَهُ أَخٌ',
        accepts: ['له أخ', 'لَهُ أَخٌ', 'له أخ.', 'لَهُ أَخٌ.']
      }
    ],
    conceptCheck: [
      {
        statement: 'Pronoun suffixes can attach to prepositions to create one combined word.',
        correct: true,
        explanation: 'Just as they attach to nouns (كِتَابِي), pronoun suffixes attach to prepositions: فِي + هُ = فِيهِ.'
      },
      {
        statement: 'The preposition عَلَى stays as عَلَى before all pronoun suffixes.',
        correct: false,
        explanation: 'عَلَى changes to عَلَيْـ before pronoun suffixes: عَلَيْهِ, عَلَيْهَا, عَلَيَّ.'
      },
      {
        statement: 'لَهُ can mean both "for him" and "he has" depending on the context.',
        correct: true,
        explanation: 'لَهُ أَخٌ = He has a brother. الكِتَابُ لَهُ = The book is for him / belongs to him.'
      }
    ]
  },

  practiceQuestions: []
};
