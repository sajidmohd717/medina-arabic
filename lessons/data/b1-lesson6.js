/* ============================================================
   b1-lesson6.js - Lesson 6 Data
   ============================================================ */

const LESSON_DATA = {
  book: 'book1',
  lessonNum: 6,
  titleArabic: 'هٰذِهِ',
  titleEnglish: 'This is… (Feminine)',
  summary: 'Learn the feminine counterpart to هٰذَا: هٰذِهِ. You will identify feminine nouns by the tāʾ marbūṭa (ة), see how adjectives match gender, and use the preposition لِـ (for / belongs to).',
  nextLesson: 'b1-lesson7.html',
  passMark: 8,
  totalQuestions: 11,

  guidedPattern: 'هٰذِهِ',
  guidedIntro: 'هٰذَا points to masculine things. Now learn هٰذِهِ for feminine nouns — watch for the ة ending.',
  reviewVocabAtEnd: true,
  milestoneAfterPage: 4,

  guidedPages: [
    {
      titleArabic: 'هٰذِهِ',
      title: 'Lesson Six',
      pattern: 'هٰذِهِ',
      intro: 'Start with a short dialogue. Listen for هٰذِهِ when pointing to feminine objects.',
      groups: [
        { type: 'scene', text: 'Hamid and Aminah are looking at things in the house.' },
        {
          icon: '🥄',
          role: 'teacher',
          lines: [
            { label: 'حامد', ar: 'مَا هٰذِهِ يَا آمِنَةُ؟', isPrompt: true },
            { label: 'آمنة', ar: 'هٰذِهِ مِلْعَقَةٌ.' }
          ]
        },
        {
          icon: '🔧',
          role: 'student',
          lines: [
            { label: 'حامد', ar: 'أَهٰذِهِ مِكْوَاةٌ؟', isPrompt: true },
            { label: 'آمنة', ar: 'نَعَمْ، هٰذِهِ مِكْوَاةٌ.' }
          ]
        },
        {
          icon: '🚗',
          role: 'teacher',
          lines: [
            { label: 'حامد', ar: 'وَمَا هٰذِهِ؟', isPrompt: true },
            { label: 'آمنة', ar: 'هٰذِهِ سَيَّارَةٌ.' }
          ]
        },
        {
          icon: '⏰',
          role: 'student',
          lines: [
            { label: 'حامد', ar: 'أَهٰذِهِ سَاعَةٌ جَدِيدَةٌ؟', isPrompt: true },
            { label: 'آمنة', ar: 'نَعَمْ، هِيَ سَاعَةٌ جَمِيلَةٌ.' }
          ]
        }
      ],
      exerciseIntro: 'Answer from the dialogue',
      exercise: [
        {
          icon: '🥄',
          prompt: 'مَا هٰذِهِ؟',
          placeholder: 'هٰذِهِ ...',
          ideal: 'هٰذِهِ مِلْعَقَةٌ.',
          accepts: ['هذه ملعقة', 'هٰذِهِ مِلْعَقَةٌ', 'هذه ملعقة.', 'هٰذِهِ مِلْعَقَةٌ.']
        },
        {
          icon: '🚗',
          prompt: 'وَمَا هٰذِهِ؟',
          placeholder: 'هٰذِهِ ...',
          ideal: 'هٰذِهِ سَيَّارَةٌ.',
          accepts: ['هذه سيارة', 'هٰذِهِ سَيَّارَةٌ', 'هذه سيارة.', 'هٰذِهِ سَيَّارَةٌ.']
        },
        {
          icon: '⏰',
          prompt: 'كَيْفَ السَّاعَةُ؟',
          placeholder: 'هِيَ ...',
          ideal: 'هِيَ سَاعَةٌ جَمِيلَةٌ.',
          accepts: ['هي ساعة جميلة', 'هِيَ سَاعَةٌ جَمِيلَةٌ', 'هي ساعة جميلة.', 'هِيَ سَاعَةٌ جَمِيلَةٌ.']
        }
      ],
      keyPoints: [
        'هٰذِهِ = this (feminine)',
        'مَا هٰذِهِ؟ = What is this? (fem.)',
        'أَهٰذِهِ ...؟ = Is this ...? (fem.)'
      ]
    },
    {
      title: 'The Feminine Pattern',
      pattern: 'هٰذِهِ + noun with ة',
      intro: 'هٰذِهِ is used with feminine nouns. Most feminine nouns end with ة (tāʾ marbūṭa).',
      wordBank: ['هٰذَا', 'هٰذِهِ'],
      tapFill: [
        { parts: [null, ' مِلْعَقَةٌ.'], answer: 'هٰذِهِ' },
        { parts: [null, ' مِكْوَاةٌ.'], answer: 'هٰذِهِ' },
        { parts: [null, ' كِتَابٌ.'], answer: 'هٰذَا' },
        { parts: [null, ' دَرَّاجَةٌ.'], answer: 'هٰذِهِ' },
        { parts: [null, ' قَلَمٌ.'], answer: 'هٰذَا' },
        { parts: [null, ' سَاعَةٌ.'], answer: 'هٰذِهِ' },
        { parts: [null, ' ثَلَّاجَةٌ.'], answer: 'هٰذِهِ' },
        { parts: [null, ' بَيْتٌ.'], answer: 'هٰذَا' }
      ],
      keyPoints: [
        'هٰذَا for masculine nouns',
        'هٰذِهِ for feminine nouns',
        'Look for ة at the end = feminine'
      ]
    },
    {
      title: 'Read the Pattern',
      pattern: 'هٰذِهِ',
      intro: 'Read these lines from the book. They reuse هٰذِهِ in short meaningful sentences.',
      groups: [
        {
          icon: '👩‍⚕️',
          lines: [
            { ar: 'هٰذِهِ آمِنَةُ. هِيَ طَبِيبَةٌ.' }
          ]
        },
        {
          icon: '🚗',
          lines: [
            { ar: 'هٰذِهِ سَيَّارَةُ الطَّبِيبَةِ.' }
          ]
        },
        {
          icon: '⭐',
          lines: [
            { ar: 'السَّيَّارَةُ جَمِيلَةٌ وَسَرِيعَةٌ جِدًّا.' }
          ]
        },
        {
          icon: '⏰',
          lines: [
            { ar: 'هٰذِهِ سَاعَةُ آمِنَةَ. هِيَ عَلَى المَكْتَبِ.' }
          ]
        },
        {
          icon: '🍳',
          lines: [
            { ar: 'المِلْعَقَةُ فِي القِدْرِ. القِدْرُ عَلَى النَّارِ.' }
          ]
        },
        {
          icon: '🎓',
          lines: [
            { ar: 'آمِنَةُ أَيْضًا طَالِبَةٌ فِي الجَامِعَةِ.' }
          ]
        }
      ],
      keyPoints: [
        'هٰذِهِ آمِنَةُ = This is Aminah',
        'لِمَنْ هٰذِهِ؟ = Whose is this? (fem.)'
      ]
    },
    {
      title: 'More Feminine Words',
      pattern: 'هٰذِهِ + body parts / more nouns',
      intro: 'Many body parts and special words are feminine even without ة. Tap for meanings.',
      cards: [
        { icon: '🖐️', ar: 'يَدٌ' },
        { icon: '🦶', ar: 'رِجْلٌ' },
        { icon: '👁️', ar: 'عَيْنٌ' },
        { icon: '👂', ar: 'أُذُنٌ' },
        { icon: '🗣️', ar: 'رَأْسٌ' },
        { icon: '👃', ar: 'أَنْفٌ' },
        { icon: '👄', ar: 'فَمٌ' },
        { icon: '🍲', ar: 'قِدْرٌ' }
      ],
      keyPoints: [
        'Body parts in pairs are feminine: يَدٌ, رِجْلٌ, عَيْنٌ, أُذُنٌ',
        'Some words are feminine by convention: قِدْرٌ (pot)'
      ]
    },
    {
      title: 'Adjectives Match Gender',
      pattern: 'noun + adjective (matching)',
      intro: 'Adjectives must match the gender of the noun. Add ة to make an adjective feminine.',
      groups: [
        {
          icon: '🚗',
          lines: [
            { ar: 'سَيَّارَةٌ جَمِيلَةٌ — a beautiful car (fem.)' },
            { ar: 'بَيْتٌ جَمِيلٌ — a beautiful house (masc.)' }
          ]
        },
        {
          icon: '⚡',
          lines: [
            { ar: 'دَرَّاجَةٌ سَرِيعَةٌ — a fast bicycle (fem.)' },
            { ar: 'حِصَانٌ سَرِيعٌ — a fast horse (masc.)' }
          ]
        },
        {
          icon: '📏',
          lines: [
            { ar: 'سَاعَةٌ كَبِيرَةٌ — a big watch (fem.)' },
            { ar: 'مَكْتَبٌ كَبِيرٌ — a big desk (masc.)' }
          ]
        },
        {
          icon: '👩‍🏫',
          lines: [
            { ar: 'مُدَرِّسَةٌ جَدِيدَةٌ — a new teacher (fem.)' }
          ]
        }
      ],
      keyPoints: [
        'مذكّر (masc.): جَمِيلٌ، سَرِيعٌ، كَبِيرٌ',
        'مؤنّث (fem.): جَمِيلَةٌ، سَرِيعَةٌ، كَبِيرَةٌ'
      ]
    },
    {
      title: 'لِمَنْ — Whose Is This?',
      pattern: 'لِمَنْ هٰذِهِ؟',
      intro: 'The preposition لِـ means "for / belongs to." لِمَنْ asks "whose?"',
      groups: [
        {
          icon: '🔑',
          lines: [
            { ar: 'هٰذِهِ سَيَّارَةٌ.', isPrompt: true },
            { ar: 'لِمَنْ هٰذِهِ السَّيَّارَةُ؟' },
            { ar: 'هِيَ لِخَالِدٍ.' }
          ]
        },
        {
          icon: '⏰',
          lines: [
            { ar: 'لِمَنْ هٰذِهِ السَّاعَةُ؟', isPrompt: true },
            { ar: 'هِيَ لِآمِنَةَ.' }
          ]
        },
        {
          icon: '🥄',
          lines: [
            { ar: 'لِمَنْ هٰذِهِ المِلْعَقَةُ؟', isPrompt: true },
            { ar: 'هِيَ لِلطَّبِيبَةِ.' }
          ]
        }
      ],
      exercise: [
        {
          icon: '🚗',
          prompt: 'لِمَنْ هٰذِهِ السَّيَّارَةُ؟ (خَالِد)',
          ideal: 'هِيَ لِخَالِدٍ.',
          accepts: ['هي لخالد', 'هِيَ لِخَالِدٍ', 'هي لخالد.', 'هِيَ لِخَالِدٍ.']
        },
        {
          icon: '⏰',
          prompt: 'لِمَنْ هٰذِهِ السَّاعَةُ؟ (آمِنَة)',
          ideal: 'هِيَ لِآمِنَةَ.',
          accepts: ['هي لآمنة', 'هِيَ لِآمِنَةَ', 'هي لآمنة.', 'هِيَ لِآمِنَةَ.']
        },
        {
          icon: '📖',
          prompt: 'لِمَنْ هٰذَا الكِتَابُ؟ (المُدَرِّس)',
          ideal: 'هُوَ لِلْمُدَرِّسِ.',
          accepts: ['هو للمدرس', 'هُوَ لِلْمُدَرِّسِ', 'هو للمدرس.', 'هُوَ لِلْمُدَرِّسِ.']
        }
      ],
      keyPoints: [
        'لِمَنْ = whose? / to whom?',
        'لِـ + noun with kasra = belongs to'
      ]
    },
    {
      titleArabic: 'تَمْرِين',
      title: 'Practice',
      pattern: 'هٰذِهِ',
      intro: 'Type the Arabic answer. You can skip harakāt — the full form appears when you check.',
      tip: 'Tip: focus on getting the words right first. Harakāt come with practice.',
      exercise: [
        {
          icon: '🚗',
          prompt: 'Type in Arabic: "This is a car."',
          ideal: 'هٰذِهِ سَيَّارَةٌ.',
          accepts: ['هذه سيارة', 'هٰذِهِ سَيَّارَةٌ', 'هذه سيارة.', 'هٰذِهِ سَيَّارَةٌ.']
        },
        {
          icon: '⏰',
          prompt: 'Type in Arabic: "This is a beautiful watch."',
          ideal: 'هٰذِهِ سَاعَةٌ جَمِيلَةٌ.',
          accepts: ['هذه ساعة جميلة', 'هٰذِهِ سَاعَةٌ جَمِيلَةٌ', 'هذه ساعة جميلة.', 'هٰذِهِ سَاعَةٌ جَمِيلَةٌ.']
        },
        {
          icon: '🥄',
          prompt: 'Type in Arabic: "Whose is this spoon?"',
          ideal: 'لِمَنْ هٰذِهِ المِلْعَقَةُ؟',
          accepts: ['لمن هذه الملعقة', 'لِمَنْ هٰذِهِ المِلْعَقَةُ', 'لمن هذه الملعقة؟', 'لِمَنْ هٰذِهِ المِلْعَقَةُ؟']
        }
      ]
    }
  ],

  vocab: [
    { ar: 'هٰذِهِ', trans: 'hādhihi', meaning: 'This (fem.)', type: 'Demonstrative' },
    { ar: 'مِلْعَقَةٌ', trans: 'milʿaqatun', meaning: 'A spoon', type: 'Noun' },
    { ar: 'مِكْوَاةٌ', trans: 'mikwātun', meaning: 'An iron', type: 'Noun' },
    { ar: 'دَرَّاجَةٌ', trans: 'darrājatun', meaning: 'A bicycle', type: 'Noun' },
    { ar: 'سَاعَةٌ', trans: 'sāʿatun', meaning: 'A watch / clock', type: 'Noun' },
    { ar: 'ثَلَّاجَةٌ', trans: 'thallājatun', meaning: 'A fridge', type: 'Noun' },
    { ar: 'سَيَّارَةٌ', trans: 'sayyāratun', meaning: 'A car', type: 'Noun' },
    { ar: 'نَافِذَةٌ', trans: 'nāfidhatun', meaning: 'A window', type: 'Noun' },
    { ar: 'مُدَرِّسَةٌ', trans: 'mudarrisatun', meaning: 'A teacher (fem.)', type: 'Noun' },
    { ar: 'طَبِيبَةٌ', trans: 'ṭabībatun', meaning: 'A doctor (fem.)', type: 'Noun' },
    { ar: 'قِدْرٌ', trans: 'qidrun', meaning: 'A cooking pot', type: 'Noun (Fem.)' },
    { ar: 'يَدٌ', trans: 'yadun', meaning: 'A hand', type: 'Noun (Fem.)' },
    { ar: 'رِجْلٌ', trans: 'rijlun', meaning: 'A leg / foot', type: 'Noun (Fem.)' },
    { ar: 'عَيْنٌ', trans: 'ʿaynun', meaning: 'An eye', type: 'Noun (Fem.)' },
    { ar: 'أُذُنٌ', trans: 'udhunun', meaning: 'An ear', type: 'Noun (Fem.)' },
    { ar: 'رَأْسٌ', trans: 'raʾsun', meaning: 'A head', type: 'Noun' },
    { ar: 'أَنْفٌ', trans: 'anfun', meaning: 'A nose', type: 'Noun' },
    { ar: 'فَمٌ', trans: 'famun', meaning: 'A mouth', type: 'Noun' },
    { ar: 'جَمِيلَةٌ', trans: 'jamīlatun', meaning: 'Beautiful (fem.)', type: 'Adjective' },
    { ar: 'سَرِيعَةٌ', trans: 'sarīʿatun', meaning: 'Fast (fem.)', type: 'Adjective' },
    { ar: 'كَبِيرَةٌ', trans: 'kabīratun', meaning: 'Big (fem.)', type: 'Adjective' },
    { ar: 'لِـ', trans: 'li-', meaning: 'For / Belongs to', type: 'Preposition' },
    { ar: 'لِمَنْ', trans: 'liman', meaning: 'Whose? / To whom?', type: 'Interrogative' },
    { ar: 'أَيْضًا', trans: 'ayḍan', meaning: 'Also / Too', type: 'Particle' },
    { ar: 'جِدًّا', trans: 'jiddan', meaning: 'Very', type: 'Adverb' }
  ],

  grammarBlocks: [
    {
      title: 'The Feminine "This": هٰذِهِ',
      content: '<p>In Arabic, every noun is either masculine or feminine. To point at a feminine noun that is near, we use <strong>هٰذِهِ</strong> (hādhihi).</p>',
      rule: 'هٰذَا (Masculine) vs. هٰذِهِ (Feminine).'
    },
    {
      title: 'Identifying Feminine Nouns',
      content: '<p>The most common sign of a feminine noun is the <strong>Tāʾ Marbūṭa (ة)</strong> at the end. For example: <strong>سَيَّارَةٌ</strong> (car), <strong>سَاعَةٌ</strong> (watch).</p><p>However, some words are feminine by nature (like body parts in pairs: eyes, ears, hands, legs) or by convention (like <strong>قِدْرٌ</strong> — pot, or <strong>شَمْسٌ</strong> — sun).</p>',
      rule: 'Look for ة at the end, but remember body parts and special exceptions!'
    },
    {
      title: 'Noun-Adjective Agreement',
      content: '<p>Adjectives must match the gender of the noun they describe. To make a masculine adjective feminine, add a ة to the end.</p><ul><li><strong>بَيْتٌ جَمِيلٌ</strong> (A beautiful house — masc.)</li><li><strong>سَيَّارَةٌ جَمِيلَةٌ</strong> (A beautiful car — fem.)</li></ul>',
      rule: 'Noun gender = Adjective gender.'
    },
    {
      title: 'The Preposition لِـ (Belongs to)',
      content: '<p>The preposition <strong>لِـ</strong> (li-) means "for" or "belongs to." It causes the following noun to take a kasra (genitive case).</p><p><strong>لِمَنْ هٰذِهِ؟</strong> means "Whose is this?" or "To whom does this belong?"</p>',
      rule: 'هٰذِهِ لِخَالِدٍ = This belongs to Khalid.'
    }
  ],

  comprehension: {
    title: 'Aminah\'s Belongings',
    arabic: 'هٰذِهِ آمِنَةُ. هِيَ طَبِيبَةٌ. هٰذِهِ سَيَّارَةُ الطَّبِيبَةِ. السَّيَّارَةُ جَمِيلَةٌ وَسَرِيعَةٌ جِدًّا. هٰذِهِ سَاعَةُ آمِنَةَ. هِيَ عَلَى المَكْتَبِ. المِلْعَقَةُ فِي القِدْرِ. القِدْرُ عَلَى النَّارِ. هٰذِهِ أُذُنٌ وَهٰذِهِ عَيْنٌ. آمِنَةُ أَيْضًا طَالِبَةٌ فِي الجَامِعَةِ.',
    english: 'This is Aminah. She is a doctor. This is the doctor\'s car. The car is beautiful and very fast. This is Aminah\'s watch. It is on the desk. The spoon is in the pot. The pot is on the fire. This is an ear and this is an eye. Aminah is also a student in the university.',
    questions: [
      {
        text: 'What is Aminah\'s profession?',
        options: ['A teacher', 'A doctor', 'An engineer', 'A merchant'],
        correct: 'A doctor'
      },
      {
        text: 'How is the car described?',
        options: ['Old and slow', 'Big and heavy', 'Beautiful and very fast', 'Small and clean'],
        correct: 'Beautiful and very fast'
      },
      {
        text: 'Where is the spoon (المِلْعَقَة)?',
        options: ['On the desk', 'In the car', 'In the pot', 'In the room'],
        correct: 'In the pot'
      },
      {
        text: 'Is Aminah only a doctor?',
        options: ['Yes, only a doctor', 'No, she is also a student', 'No, she is also a teacher', 'Yes, she is an engineer'],
        correct: 'No, she is also a student'
      }
    ]
  },

  quizQuestions: {
    multipleChoice: [
      {
        prompt: 'What is the feminine counterpart to هٰذَا?',
        options: ['تِلْكَ', 'هٰذِهِ', 'ذٰلِكَ', 'هِيَ'],
        correct: 1
      },
      {
        prompt: 'Translate: "This is a teacher (fem.)"',
        options: ['هٰذَا مُدَرِّسٌ', 'هٰذِهِ مُدَرِّسَةٌ', 'هٰذِهِ طَبِيبَةٌ', 'هِيَ مُدَرِّسٌ'],
        correct: 1
      },
      {
        prompt: 'Which of these is a sign of a feminine noun?',
        options: ['Tanwīn', 'Al- prefix', 'Tāʾ Marbūṭa (ة)', 'Ḍamma ending'],
        correct: 2
      },
      {
        prompt: 'Translate: "Whose is this car?"',
        options: ['لِمَنْ هٰذَا السَّيَّارَةُ؟', 'لِمَنْ هٰذِهِ السَّيَّارَةُ؟', 'مَنْ هٰذِهِ السَّيَّارَةُ؟', 'أَيْنَ هٰذِهِ السَّيَّارَةُ؟'],
        correct: 1
      },
      {
        prompt: 'Which of these body parts is masculine?',
        options: ['عَيْنٌ (Eye)', 'أُذُنٌ (Ear)', 'يَدٌ (Hand)', 'أَنْفٌ (Nose)'],
        correct: 3
      },
      {
        prompt: 'Translate: "The bicycle is fast."',
        options: ['الدَّرَّاجَةُ سَرِيعٌ', 'الدَّرَّاجَةُ سَرِيعَةٌ', 'الحِصَانُ سَرِيعٌ', 'الدَّرَّاجَةُ جَمِيلَةٌ'],
        correct: 1
      }
    ],
    typing: [
      {
        prompt: 'Type in Arabic: "This is a car."',
        ideal: 'هٰذِهِ سَيَّارَةٌ',
        accepts: ['هذه سيارة', 'هٰذِهِ سَيَّارَةٌ', 'هذه سيارة.', 'هٰذِهِ سَيَّارَةٌ.']
      },
      {
        prompt: 'Type in Arabic: "Whose is this?" (feminine)',
        ideal: 'لِمَنْ هٰذِهِ؟',
        accepts: ['لمن هذه', 'لِمَنْ هٰذِهِ', 'لمن هذه؟', 'لِمَنْ هٰذِهِ؟']
      }
    ],
    conceptCheck: [
      {
        statement: 'In Arabic, هٰذِهِ is used to point to feminine things that are near.',
        correct: true,
        explanation: 'هٰذِهِ is the feminine form of "this," just as هٰذَا is the masculine form.'
      },
      {
        statement: 'All Arabic nouns ending with ة are feminine, and all feminine nouns end with ة.',
        correct: false,
        explanation: 'Most feminine nouns end with ة, but some feminine nouns (like يَدٌ, شَمْسٌ) do not have ة.'
      },
      {
        statement: 'When you describe a feminine noun, the adjective must also be feminine.',
        correct: true,
        explanation: 'Adjectives match the noun in gender: سَيَّارَةٌ جَمِيلَةٌ (a beautiful car — both fem.).'
      }
    ]
  },

  practiceQuestions: []
};
