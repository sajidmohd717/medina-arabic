/* ============================================================
   b1-lesson5.js - Lesson 5 Data
   ============================================================ */

const LESSON_DATA = {
  book: 'book1',
  lessonNum: 5,
  titleArabic: 'كِتَابُ مُحَمَّدٍ',
  titleEnglish: 'Possession: Muhammad\'s book',
  summary: 'Learn the Madinah Book 1 pattern for joining two nouns: كِتَابُ مُحَمَّدٍ, مَكْتَبُ المُدَرِّسِ, and قَلَمُ مَنْ هٰذَا؟ You will also meet تَحْتَ, هُنَاكَ, and the calling word يَا.',
  nextLesson: 'b1-lesson6.html',
  passMark: 8,
  totalQuestions: 11,

  guidedPattern: 'كِتَابُ مُحَمَّدٍ',
  guidedIntro: 'Arabic does not need a separate word for "of" here. Put the thing first, then the owner: كِتَابُ مُحَمَّدٍ = Muhammad\'s book.',
  reviewVocabAtEnd: true,
  milestoneAfterPage: 3,

  guidedPages: [
    {
      titleArabic: 'الدَّرْسُ الخَامِسُ',
      title: 'Lesson Five',
      pattern: 'كِتَابُ مُحَمَّدٍ',
      intro: 'Start with the book dialogue. Listen for the owned thing first, then the owner.',
      groups: [
        { type: 'scene', text: 'Saeed asks Yaasir and Ali about books, notebooks, a pen, and the teacher\'s bag.' },
        {
          icon: '📘',
          role: 'teacher',
          lines: [
            { label: 'سعيد', ar: 'أَكِتَابُ مُحَمَّدٍ هٰذَا يَا يَاسِرُ؟', isPrompt: true },
            { label: 'ياسر', ar: 'لَا، هٰذَا كِتَابُ حَامِدٍ.' }
          ]
        },
        {
          icon: '📘',
          role: 'student',
          lines: [
            { label: 'سعيد', ar: 'أَيْنَ كِتَابُ مُحَمَّدٍ؟', isPrompt: true },
            { label: 'ياسر', ar: 'هُوَ عَلَى المَكْتَبِ هُنَاكَ.' }
          ]
        },
        {
          icon: '📓',
          role: 'teacher',
          lines: [
            { label: 'سعيد', ar: 'أَيْنَ دَفْتَرُ عَمَّارٍ؟', isPrompt: true },
            { label: 'ياسر', ar: 'هُوَ عَلَى مَكْتَبِ المُدَرِّسِ.' }
          ]
        },
        {
          icon: '✏️',
          role: 'student',
          lines: [
            { label: 'سعيد', ar: 'قَلَمُ مَنْ هٰذَا يَا عَلِيُّ؟', isPrompt: true },
            { label: 'علي', ar: 'هٰذَا قَلَمُ المُدَرِّسِ.' }
          ]
        },
        {
          icon: '🧳',
          role: 'teacher',
          lines: [
            { label: 'سعيد', ar: 'أَيْنَ حَقِيبَةُ المُدَرِّسِ؟', isPrompt: true },
            { label: 'علي', ar: 'هِيَ تَحْتَ المَكْتَبِ.' }
          ]
        }
      ],
      exerciseIntro: 'Answer from the dialogue',
      exercise: [
        {
          icon: '📘',
          prompt: 'أَيْنَ كِتَابُ مُحَمَّدٍ؟',
          placeholder: 'هُوَ ...',
          ideal: 'هُوَ عَلَى المَكْتَبِ هُنَاكَ.',
          accepts: ['هو على المكتب هناك', 'هو على المكتب هناك.', 'هُوَ عَلَى المَكْتَبِ هُنَاكَ', 'هُوَ عَلَى المَكْتَبِ هُنَاكَ.']
        },
        {
          icon: '📓',
          prompt: 'أَيْنَ دَفْتَرُ عَمَّارٍ؟',
          placeholder: 'هُوَ ...',
          ideal: 'هُوَ عَلَى مَكْتَبِ المُدَرِّسِ.',
          accepts: ['هو على مكتب المدرس', 'هو على مكتب المدرس.', 'هُوَ عَلَى مَكْتَبِ المُدَرِّسِ', 'هُوَ عَلَى مَكْتَبِ المُدَرِّسِ.']
        },
        {
          icon: '🧳',
          prompt: 'أَيْنَ حَقِيبَةُ المُدَرِّسِ؟',
          placeholder: 'هِيَ ...',
          ideal: 'هِيَ تَحْتَ المَكْتَبِ.',
          accepts: ['هي تحت المكتب', 'هي تحت المكتب.', 'هِيَ تَحْتَ المَكْتَبِ', 'هِيَ تَحْتَ المَكْتَبِ.']
        }
      ],
      keyPoints: [
        'كِتَابُ مُحَمَّدٍ = Muhammad\'s book',
        'مَكْتَبُ المُدَرِّسِ = the teacher\'s desk',
        'قَلَمُ مَنْ هٰذَا؟ = Whose pen is this?'
      ]
    },
    {
      title: 'The Pattern',
      pattern: 'مُضَافٌ + مُضَافٌ إِلَيْهِ',
      intro: 'Tap the right ending vowels. The first word loses tanwīn and takes ـُ. The owner (a name) takes ـٍ.',
      wordBank: ['ـُ', 'ـِ', 'ـٍ', 'ـٌ'],
      tapFillMatchMode: 'exact',
      tapFill: [
        {
          parts: ['كِتَاب', null, ' مُحَمَّد', null],
          source: 'كِتَابٌ، مُحَمَّدٌ',
          answers: ['ـُ', 'ـٍ']
        },
        {
          parts: ['قَلَم', null, ' حَامِد', null],
          source: 'قَلَمٌ، حَامِدٌ',
          answers: ['ـُ', 'ـٍ']
        },
        {
          parts: ['بَيْت', null, ' عَبَّاس', null],
          source: 'بَيْتٌ، عَبَّاسٌ',
          answers: ['ـُ', 'ـٍ']
        },
        {
          parts: ['غُرْفَة', null, ' عَلِيّ', null],
          source: 'غُرْفَةٌ، عَلِيٌّ',
          answers: ['ـُ', 'ـٍ']
        },
        {
          parts: ['دَفْتَر', null, ' سَعِيد', null],
          source: 'دَفْتَرٌ، سَعِيدٌ',
          answers: ['ـُ', 'ـٍ']
        },
        {
          parts: ['مِنْدِيل', null, ' يَاسِر', null],
          source: 'مِنْدِيلٌ، يَاسِرٌ',
          answers: ['ـُ', 'ـٍ']
        },
        {
          parts: ['قَمِيص', null, ' عَمَّار', null],
          source: 'قَمِيصٌ، عَمَّارٌ',
          answers: ['ـُ', 'ـٍ']
        },
        {
          parts: ['سَرِير', null, ' خَالِد', null],
          source: 'سَرِيرٌ، خَالِدٌ',
          answers: ['ـُ', 'ـٍ']
        }
      ],
      keyPoints: [
        'Muḍāf ending: ـُ',
        'Owner name ending: ـٍ'
      ]
    },
    {
      titleArabic: 'تَمْرِين (٢)',
      title: 'The Pattern with ال',
      pattern: 'مُضَافٌ + مُضَافٌ إِلَيْهِ',
      intro: 'Same pattern, but now the owner has ال. The ending changes to ـِ instead of ـٍ.',
      wordBank: ['ـُ', 'ـِ', 'ـٍ', 'ـٌ'],
      tapFillMatchMode: 'exact',
      tapFill: [
        {
          parts: ['مَكْتَب', null, ' المُدَرِّس', null],
          source: 'مَكْتَبٌ، المُدَرِّسُ',
          answers: ['ـُ', 'ـِ']
        },
        {
          parts: ['مِفْتَاح', null, ' البَيْت', null],
          source: 'مِفْتَاحٌ، البَيْتُ',
          answers: ['ـُ', 'ـِ']
        },
        {
          parts: ['دُكَّان', null, ' التَّاجِر', null],
          source: 'دُكَّانٌ، التَّاجِرُ',
          answers: ['ـُ', 'ـِ']
        },
        {
          parts: ['بَيْت', null, ' المُهَنْدِس', null],
          source: 'بَيْتٌ، المُهَنْدِسُ',
          answers: ['ـُ', 'ـِ']
        },
        {
          parts: ['اِسْم', null, ' الوَلَد', null],
          source: 'اِسْمٌ، الوَلَدُ',
          answers: ['ـُ', 'ـِ']
        },
        {
          parts: ['كِتَاب', null, ' الله', null],
          source: 'كِتَابٌ، اللهُ',
          answers: ['ـُ', 'ـِ']
        },
        {
          parts: ['بَيْت', null, ' الطَّبِيب', null],
          source: 'بَيْتٌ، الطَّبِيبُ',
          answers: ['ـُ', 'ـِ']
        },
        {
          parts: ['مِفْتَاح', null, ' السَّيَّارَة', null],
          source: 'مِفْتَاحٌ، السَّيَّارَةُ',
          answers: ['ـُ', 'ـِ']
        }
      ],
      keyPoints: [
        'Muḍāf ending: ـُ',
        'Owner with ال ending: ـِ'
      ]
    },
    {
      title: 'Read the Book Sentences',
      pattern: 'كِتَابُ اللهِ',
      intro: 'Read these lines from pages 28-29. They reuse the same pattern in short meaningful sentences.',
      groups: [
        {
          icon: '🏠',
          lines: [
            { ar: 'أَيْنَ بَيْتُ المُدَرِّسِ؟', isPrompt: true },
            { ar: 'هُوَ بَعِيدٌ.' }
          ]
        },
        {
          icon: '📖',
          lines: [
            { ar: 'القُرْآنُ كِتَابُ اللهِ.' }
          ]
        },
        {
          icon: '🕋',
          lines: [
            { ar: 'الكَعْبَةُ بَيْتُ اللهِ.' }
          ]
        },
        {
          icon: '⭐',
          lines: [
            { ar: 'مُحَمَّدٌ ﷺ رَسُولُ اللهِ.' }
          ]
        },
        {
          icon: '🏫',
          lines: [
            { ar: 'خَرَجَ المُدَرِّسُ مِنْ غُرْفَةِ المُدِيرِ.' }
          ]
        },
        {
          icon: '🏘️',
          lines: [
            { ar: 'هٰذَا بَيْتُ حَامِدٍ وَذٰلِكَ بَيْتُ خَالِدٍ.' }
          ]
        }
      ],
      keyPoints: [
        'The first noun is the thing: بَيْتُ, كِتَابُ, رَسُولُ',
        'The second noun is the owner or related noun: اللهِ, حَامِدٍ, المُدِيرِ'
      ]
    },
    {
      title: 'More Reading',
      pattern: 'مَنْ؟ أَيْنَ؟',
      intro: 'These book sentences add family words, names, and location questions.',
      groups: [
        {
          icon: '🔑',
          lines: [
            { ar: 'هٰذَا مِفْتَاحُ السَّيَّارَةِ.' },
            { ar: 'أَيْنَ مِفْتَاحُ البَيْتِ؟', isPrompt: true }
          ]
        },
        {
          icon: '👦',
          lines: [
            { ar: 'مَنْ أَنْتَ يَا وَلَدُ؟', isPrompt: true },
            { ar: 'أَنَا ابْنُ عَبَّاسٍ.' }
          ]
        },
        {
          icon: '🕌',
          lines: [
            { ar: 'أَيْنَ مَسْجِدُ رَسُولِ اللهِ ﷺ؟', isPrompt: true },
            { ar: 'هُوَ فِي المَدِينَةِ المُنَوَّرَةِ.' }
          ]
        },
        {
          icon: '👧',
          lines: [
            { ar: 'بِنْتُ حَامِدٍ فِي المَدْرَسَةِ.' },
            { ar: 'وَبِنْتُ مُحَمَّدٍ فِي الجَامِعَةِ.' }
          ]
        },
        {
          icon: '🚪',
          lines: [
            { ar: 'بَابُ المَسْجِدِ مَفْتُوحٌ.' },
            { ar: 'وَبَابُ المَدْرَسَةِ مُغْلَقٌ.' }
          ]
        },
        {
          icon: '🚗',
          lines: [
            { ar: 'أَيْنَ الكَلْبُ؟', isPrompt: true },
            { ar: 'هُوَ تَحْتَ السَّيَّارَةِ.' }
          ]
        }
      ],
      keyPoints: [
        'قَلَمُ مَنْ؟ asks "whose pen?"',
        'اِبْنُ مَنْ؟ asks "whose son?"',
        'تَحْتَ works like this pattern: تَحْتَ السَّيَّارَةِ'
      ]
    },
    {
      titleArabic: 'تَمْرِين (٧)',
      title: 'Calling Someone',
      pattern: 'يَا مُحَمَّدُ',
      intro: 'The book now practices يَا. When you call someone, the name has one ḍamma, not tanwīn.',
      groups: [
        {
          icon: '👦',
          lines: [
            { ar: 'مُحَمَّدٌ ← يَا مُحَمَّدُ' },
            { ar: 'خَالِدٌ ← يَا خَالِدُ' },
            { ar: 'أُسْتَاذٌ ← يَا أُسْتَاذُ' },
            { ar: 'وَلَدٌ ← يَا وَلَدُ' }
          ]
        },
        {
          icon: '📣',
          lines: [
            { ar: 'يَا عَلِيُّ.' },
            { ar: 'يَا عَبَّاسُ.' },
            { ar: 'يَا شَيْخُ.' },
            { ar: 'يَا رَجُلُ.' },
            { ar: 'يَا يَاسِرُ.' }
          ]
        }
      ],
      exercise: [
        {
          icon: '📣',
          prompt: 'خَالِدٌ',
          ideal: 'يَا خَالِدُ',
          accepts: ['يا خالد', 'يَا خَالِدُ', 'يا خالدُ']
        },
        {
          icon: '📣',
          prompt: 'أُسْتَاذٌ',
          ideal: 'يَا أُسْتَاذُ',
          accepts: ['يا أستاذ', 'يا استاذ', 'يَا أُسْتَاذُ', 'يا أستاذُ']
        },
        {
          icon: '📣',
          prompt: 'وَلَدٌ',
          ideal: 'يَا وَلَدُ',
          accepts: ['يا ولد', 'يَا وَلَدُ', 'يا ولدُ']
        }
      ],
      keyPoints: [
        'مُحَمَّدٌ becomes يَا مُحَمَّدُ',
        'يَا means O... / hey... when calling someone'
      ]
    },
    {
      titleArabic: 'تَمْرِين (٥)',
      title: 'Fill the Missing Word',
      pattern: 'بَابُ البَيْتِ',
      intro: 'Complete each phrase from the lesson pattern.',
      tip: 'Use the lesson words: بَابُ, مِفْتَاحُ, رَسُولُ, بِنْتُ, ابْنُ, كِتَابُ.',
      exercise: [
        {
          icon: '🚪',
          prompt: '........ البَيْتِ مُغْلَقٌ.',
          ideal: 'بَابُ البَيْتِ مُغْلَقٌ.',
          accepts: ['باب البيت مغلق', 'بَابُ البَيْتِ مُغْلَقٌ', 'باب البيت مغلقٌ']
        },
        {
          icon: '🔑',
          prompt: 'أَيْنَ ........ السَّيَّارَةِ؟',
          ideal: 'أَيْنَ مِفْتَاحُ السَّيَّارَةِ؟',
          accepts: ['أين مفتاح السيارة', 'اين مفتاح السيارة', 'أَيْنَ مِفْتَاحُ السَّيَّارَةِ', 'أين مفتاح السيارة؟']
        },
        {
          icon: '⭐',
          prompt: 'مُحَمَّدٌ ﷺ رَسُولُ ........',
          ideal: 'مُحَمَّدٌ ﷺ رَسُولُ اللهِ.',
          accepts: ['محمد رسول الله', 'محمد ﷺ رسول الله', 'مُحَمَّدٌ ﷺ رَسُولُ اللهِ', 'محمد رسول الله.']
        },
        {
          icon: '👧',
          prompt: 'خَدِيجَةُ ........ حَامِدٍ.',
          ideal: 'خَدِيجَةُ بِنْتُ حَامِدٍ.',
          accepts: ['خديجة بنت حامد', 'خَدِيجَةُ بِنْتُ حَامِدٍ', 'خديجة بنت حامدٍ']
        }
      ]
    }
  ],

  vocab: [
    { ar: 'مُضَافٌ', trans: 'muḍāfun', meaning: 'The first noun in an iḍāfa phrase; the thing owned or related', type: 'Grammar' },
    { ar: 'مُضَافٌ إِلَيْهِ', trans: 'muḍāfun ilayhi', meaning: 'The second noun in an iḍāfa phrase; the owner or related noun', type: 'Grammar' },
    { ar: 'دَفْتَرٌ', trans: 'daftarun', meaning: 'A notebook', type: 'Noun' },
    { ar: 'حَقِيبَةٌ', trans: 'ḥaqībatun', meaning: 'A bag', type: 'Noun' },
    { ar: 'تَحْتَ', trans: 'taḥta', meaning: 'Under', type: 'Place word' },
    { ar: 'هُنَاكَ', trans: 'hunāka', meaning: 'There', type: 'Place word' },
    { ar: 'يَا', trans: 'yā', meaning: 'O... / hey... used when calling someone', type: 'Particle' },
    { ar: 'اِبْنٌ', trans: 'ibnun', meaning: 'A son', type: 'Noun' },
    { ar: 'بِنْتٌ', trans: 'bintun', meaning: 'A daughter / girl', type: 'Noun' },
    { ar: 'عَمٌّ', trans: 'ʿammun', meaning: 'A paternal uncle', type: 'Noun' },
    { ar: 'خَالٌ', trans: 'khālun', meaning: 'A maternal uncle', type: 'Noun' },
    { ar: 'رَسُولٌ', trans: 'rasūlun', meaning: 'A messenger', type: 'Noun' },
    { ar: 'الكَعْبَةُ', trans: 'al-kaʿbatu', meaning: 'The Kaʿbah', type: 'Noun' },
    { ar: 'اِسْمٌ', trans: 'ismun', meaning: 'A name', type: 'Noun' },
    { ar: 'سَيَّارَةٌ', trans: 'sayyāratun', meaning: 'A car', type: 'Noun' },
    { ar: 'شَارِعٌ', trans: 'shāriʿun', meaning: 'A street', type: 'Noun' },
    { ar: 'مُغْلَقٌ', trans: 'mughlaqun', meaning: 'Closed', type: 'Adjective' }
  ],

  grammarBlocks: [
    {
      title: 'The iḍāfa pattern',
      content: '<p>Arabic joins two nouns directly to show possession or close relationship. The thing comes first, then the owner or related noun.</p>',
      rule: 'كِتَابُ مُحَمَّدٍ = Muhammad\'s book<br>مَكْتَبُ المُدَرِّسِ = the teacher\'s desk'
    },
    {
      title: 'The first noun loses tanwīn',
      content: '<p>The first noun is called the <strong>muḍāf</strong>. It does not take tanwīn in this pattern. كِتَابٌ becomes كِتَابُ.</p>',
      rule: 'كِتَابٌ + مُحَمَّدٌ → كِتَابُ مُحَمَّدٍ'
    },
    {
      title: 'The second noun is majrūr',
      content: '<p>The second noun is called the <strong>muḍāf ilayhi</strong>. It takes a kasra or kasratayn ending.</p>',
      rule: 'مُحَمَّدٌ → مُحَمَّدٍ<br>المُدَرِّسُ → المُدَرِّسِ'
    },
    {
      title: 'Calling with يَا',
      content: '<p>When you call someone with <strong>يَا</strong>, the name usually takes one ḍamma instead of tanwīn.</p>',
      rule: 'مُحَمَّدٌ → يَا مُحَمَّدُ<br>أُسْتَاذٌ → يَا أُسْتَاذُ'
    }
  ],

  quizQuestions: {
    conceptCheck: [
      {
        statement: 'In كِتَابُ مُحَمَّدٍ, كِتَابُ is the thing and مُحَمَّدٍ is the owner.',
        correct: true,
        explanation: 'The iḍāfa pattern puts the owned thing first, then the owner: كِتَابُ مُحَمَّدٍ = Muhammad\'s book.'
      },
      {
        statement: 'The first noun in an iḍāfa keeps tanwīn, so كِتَابٌ مُحَمَّدٍ is the careful form.',
        correct: false,
        explanation: 'The first noun loses tanwīn. The book pattern is كِتَابُ مُحَمَّدٍ, not كِتَابٌ مُحَمَّدٍ.'
      },
      {
        statement: 'قَلَمُ مَنْ هٰذَا؟ means "Whose pen is this?"',
        correct: true,
        explanation: 'مَنْ means "who/whose" here, and the phrase starts with the thing being asked about: قَلَمُ مَنْ؟'
      }
    ],
    multipleChoice: [
      {
        prompt: 'What does كِتَابُ مُحَمَّدٍ mean?',
        options: ['Muhammad is a book', 'Muhammad\'s book', 'A book and Muhammad', 'This is Muhammad'],
        correct: 1
      },
      {
        prompt: 'Choose the correct form for "Hamid\'s pen."',
        options: ['قَلَمٌ حَامِدٌ', 'القَلَمُ حَامِدٍ', 'قَلَمُ حَامِدٍ', 'قَلَمَ حَامِدٌ'],
        correct: 2
      },
      {
        prompt: 'Where is Muhammad\'s book in the dialogue?',
        options: ['تَحْتَ المَكْتَبِ', 'فِي المَسْجِدِ', 'عَلَى المَكْتَبِ هُنَاكَ', 'مِنَ البَيْتِ'],
        correct: 2
      },
      {
        prompt: 'Which sentence means "The bag is under the desk"?',
        options: ['الحَقِيبَةُ عَلَى المَكْتَبِ', 'الحَقِيبَةُ تَحْتَ المَكْتَبِ', 'المَكْتَبُ تَحْتَ الحَقِيبَةِ', 'الحَقِيبَةُ هُنَاكَ'],
        correct: 1
      },
      {
        prompt: 'Choose the correct phrase for "the teacher\'s desk."',
        options: ['مَكْتَبُ المُدَرِّسِ', 'مَكْتَبٌ المُدَرِّسُ', 'المَكْتَبُ المُدَرِّسُ', 'مَكْتَبُ المُدَرِّسُ'],
        correct: 0
      },
      {
        prompt: 'Which form correctly calls Khalid?',
        options: ['يَا خَالِدٌ', 'يَا خَالِدُ', 'يَا خَالِدٍ', 'يَا الخَالِدُ'],
        correct: 1
      }
    ],
    typing: [
      {
        prompt: 'Type in Arabic: "The Book of Allah"',
        ideal: 'كِتَابُ اللهِ',
        accepts: ['كتاب الله', 'كتاب الله.', 'كِتَابُ اللهِ', 'كِتَابُ اللهِ.', 'كتابُ اللهِ']
      },
      {
        prompt: 'Type in Arabic: "O teacher!"',
        ideal: 'يَا أُسْتَاذُ',
        accepts: ['يا أستاذ', 'يا أستاذ!', 'يا استاذ', 'يَا أُسْتَاذُ', 'يَا أُسْتَاذُ!']
      }
    ]
  },

  practiceQuestions: []
};
