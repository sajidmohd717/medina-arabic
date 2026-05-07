/* ============================================================
   b1-lesson8.js - Lesson 8 Data
   ============================================================ */

const LESSON_DATA = {
  book: 'book1',
  lessonNum: 8,
  titleArabic: 'الحُرُوفُ الشَّمْسِيَّةُ وَالقَمَرِيَّةُ',
  titleEnglish: 'Sun and Moon Letters',
  summary: 'Learn how الـ (the definite article) changes its pronunciation depending on the letter that follows. Sun letters swallow the ل sound; moon letters keep it. Master the 14 sun letters and their doubled sound.',
  nextLesson: 'b1-lesson9.html',
  passMark: 8,
  totalQuestions: 11,

  guidedPattern: 'الشَّمْسُ / القَمَرُ',
  guidedIntro: 'الـ = "the." But sometimes the ل is silent and the next letter doubles — that is the sun letter rule.',
  reviewVocabAtEnd: true,
  milestoneAfterPage: 4,

  guidedPages: [
    {
      titleArabic: 'الحُرُوفُ الشَّمْسِيَّةُ وَالقَمَرِيَّةُ',
      title: 'Lesson Eight',
      pattern: 'الشَّمْسُ وَالقَمَرُ',
      intro: 'Listen to the difference: الشَّمْسُ (ash-shamsu — the ل is silent) vs. القَمَرُ (al-qamaru — the ل is pronounced).',
      groups: [
        { type: 'scene', text: 'Sun letters make the ل of ال silent. The letter doubles instead.' },
        {
          icon: '☀️',
          role: 'teacher',
          lines: [
            { ar: 'الشَّمْسُ — ash-shamsu (the sun)' },
            { ar: 'الرَّجُلُ — ar-rajulu (the man)' },
            { ar: 'الدَّارُ — ad-dāru (the house)' }
          ]
        },
        {
          icon: '🌙',
          role: 'student',
          lines: [
            { ar: 'القَمَرُ — al-qamaru (the moon)' },
            { ar: 'الكِتَابُ — al-kitābu (the book)' },
            { ar: 'البَيْتُ — al-baytu (the house)' }
          ]
        },
        { type: 'callout', icon: '💡', title: 'The key idea', body: '<strong>Sun letters</strong> = the ل is silent, the letter doubles with shadda.<br><strong>Moon letters</strong> = the ل is pronounced clearly.' }
      ],
      exerciseIntro: 'Say each word aloud — which has a silent ل?',
      exercise: [
        {
          icon: '☀️',
          prompt: 'الشَّمْسُ — is ل silent or pronounced?',
          placeholder: 'silent / pronounced',
          ideal: 'silent',
          accepts: ['silent', 'Silent', 'ساكن', 'ساكنة']
        },
        {
          icon: '🌙',
          prompt: 'القَمَرُ — is ل silent or pronounced?',
          placeholder: 'silent / pronounced',
          ideal: 'pronounced',
          accepts: ['pronounced', 'Pronounced', 'منطوق', 'منطوقة']
        }
      ],
      keyPoints: [
        'الشَّمْس = ash-shams (ل silent) — sun letter',
        'القَمَر = al-qamar (ل pronounced) — moon letter'
      ]
    },
    {
      title: 'Sun Letters (14)',
      pattern: 'ت ث د ذ ر ز س ش ص ض ط ظ ل ن',
      intro: 'These 14 letters eat the ل. The letter doubles with shadda.',
      cards: [
        { icon: '☀️', ar: 'التَّاجِرُ — at-tājiru' },
        { icon: '☀️', ar: 'الثَّوْبُ — ath-thawbu' },
        { icon: '☀️', ar: 'الدِّيكُ — ad-dīku' },
        { icon: '☀️', ar: 'الذَّهَبُ — adh-dhahabu' },
        { icon: '☀️', ar: 'الرَّجُلُ — ar-rajulu' },
        { icon: '☀️', ar: 'الزَّهْرَةُ — az-zahratu' },
        { icon: '☀️', ar: 'السَّمَكُ — as-samaku' },
        { icon: '☀️', ar: 'الشَّمْسُ — ash-shamsu' }
      ],
      keyPoints: [
        'ت ث د ذ ر ز س ش ص ض ط ظ ل ن = الحروف الشمسية',
        'Memorise: the ل of ال is silent → letter doubles'
      ]
    },
    {
      title: 'Moon Letters (14)',
      pattern: 'أ ب ج ح خ ع غ ف ق ك م ه و ي',
      intro: 'These 14 letters keep the ل clear and distinct.',
      cards: [
        { icon: '🌙', ar: 'الأُسْتَاذُ — al-ustādhu' },
        { icon: '🌙', ar: 'البَابُ — al-bābu' },
        { icon: '🌙', ar: 'الجَبَلُ — al-jabalu' },
        { icon: '🌙', ar: 'الحِمَارُ — al-ḥimāru' },
        { icon: '🌙', ar: 'الخُبْزُ — al-khubzu' },
        { icon: '🌙', ar: 'العَيْنُ — al-ʿaynu' },
        { icon: '🌙', ar: 'القَمَرُ — al-qamaru' },
        { icon: '🌙', ar: 'الكَلْبُ — al-kalbu' }
      ],
      keyPoints: [
        'أ ب ج ح خ ع غ ف ق ك م ه و ي = الحروف القمرية',
        'The ل of ال is pronounced clearly'
      ]
    },
    {
      title: 'Sun or Moon?',
      pattern: 'Choose the right group',
      intro: 'Tap the correct category for each letter. Is it a sun letter or a moon letter?',
      wordBank: ['شمسي', 'قمري'],
      tapFill: [
        { parts: ['حرف الـ', null, ' في: الشَّمْس'], answer: 'شمسي' },
        { parts: ['حرف الـ', null, ' في: القَمَر'], answer: 'قمري' },
        { parts: ['حرف الـ', null, ' في: الرَّجُل'], answer: 'شمسي' },
        { parts: ['حرف الـ', null, ' في: الكِتَاب'], answer: 'قمري' },
        { parts: ['حرف الـ', null, ' في: النَّجْم'], answer: 'شمسي' },
        { parts: ['حرف الـ', null, ' في: البَيْت'], answer: 'قمري' },
        { parts: ['حرف الـ', null, ' في: الطَّالِب'], answer: 'شمسي' },
        { parts: ['حرف الـ', null, ' في: المَسْجِد'], answer: 'قمري' },
        { parts: ['حرف الـ', null, ' في: السَّيَّارَة'], answer: 'شمسي' },
        { parts: ['حرف الـ', null, ' في: الوَلَد'], answer: 'قمري' }
      ],
      keyPoints: [
        'If ل is silent = sun letter (شمسي)',
        'If ل is pronounced = moon letter (قمري)'
      ]
    },
    {
      title: 'Read the Pattern',
      pattern: 'Sun and moon in sentences',
      intro: 'Read these sentences. Notice where the ل is silent (sun) and where it is pronounced (moon).',
      groups: [
        {
          icon: '☀️',
          lines: [
            { ar: 'الشَّمْسُ فِي السَّمَاءِ.' }
          ]
        },
        {
          icon: '🌙',
          lines: [
            { ar: 'القَمَرُ جَمِيلٌ اللَّيْلَةَ.' }
          ]
        },
        {
          icon: '🐟',
          lines: [
            { ar: 'السَّمَكُ فِي المَاءِ.' }
          ]
        },
        {
          icon: '👨',
          lines: [
            { ar: 'الرَّجُلُ عَلَى الطَّرِيقِ.' }
          ]
        },
        {
          icon: '🌹',
          lines: [
            { ar: 'الزَّهْرَةُ جَمِيلَةٌ فِي الجَنَّةِ.' }
          ]
        }
      ],
      keyPoints: [
        'ash-shamsu (sun ل) — al-qamaru (moon ل)',
        'as-samaku (sun ل) — al-māʾi (moon ل)'
      ]
    },
    {
      title: 'More Reading',
      pattern: 'Mixed practice',
      intro: 'Each sentence has both sun and moon letters. Read aloud and feel the difference.',
      groups: [
        {
          icon: '🍞',
          lines: [
            { ar: 'الخُبْزُ عَلَى المَكْتَبِ.' }
          ]
        },
        {
          icon: '🏠',
          lines: [
            { ar: 'الدَّارُ قَرِيبَةٌ مِنَ المَدْرَسَةِ.' }
          ]
        },
        {
          icon: '🕌',
          lines: [
            { ar: 'الإِمَامُ فِي المَسْجِدِ.' }
          ]
        },
        {
          icon: '🧑‍🎓',
          lines: [
            { ar: 'الطَّالِبُ يَقْرَأُ الكِتَابَ.' }
          ]
        },
        {
          icon: '🌤️',
          lines: [
            { ar: 'الجَوُّ جَمِيلٌ وَالشَّمْسُ مُشْرِقَةٌ.' }
          ]
        }
      ],
      keyPoints: [
        'Sun: lām silent, letter doubled (shadda)',
        'Moon: lām pronounced clearly'
      ]
    },
    {
      titleArabic: 'تَمْرِين',
      title: 'Practice',
      pattern: 'Reading sun and moon words',
      intro: 'Type the word with shadda on the sun letter if needed, or with clear ل for moon letters.',
      tip: 'Tip: if the first letter of the noun is a sun letter, the ل is silent and the letter doubles.',
      exercise: [
        {
          icon: '☀️',
          prompt: 'Type: "the sun" (with shadda)',
          ideal: 'الشَّمْسُ',
          accepts: ['الشمس', 'الشَّمْسُ', 'الشمسُ']
        },
        {
          icon: '🌙',
          prompt: 'Type: "the moon"',
          ideal: 'القَمَرُ',
          accepts: ['القمر', 'القَمَرُ', 'القمرُ']
        },
        {
          icon: '🐟',
          prompt: 'Type: "the fish" (sun letter س)',
          ideal: 'السَّمَكُ',
          accepts: ['السمك', 'السَّمَكُ', 'السمكُ']
        },
        {
          icon: '👨',
          prompt: 'Type: "the man" (sun letter ر)',
          ideal: 'الرَّجُلُ',
          accepts: ['الرجل', 'الرَّجُلُ', 'الرجلُ']
        }
      ]
    }
  ],

  vocab: [
    { ar: 'الشَّمْسُ', trans: 'ash-shamsu', meaning: 'The sun (sun ل)', type: 'Noun' },
    { ar: 'القَمَرُ', trans: 'al-qamaru', meaning: 'The moon (moon ل)', type: 'Noun' },
    { ar: 'الرَّجُلُ', trans: 'ar-rajulu', meaning: 'The man', type: 'Noun' },
    { ar: 'الدَّارُ', trans: 'ad-dāru', meaning: 'The house / home', type: 'Noun' },
    { ar: 'الثَّوْبُ', trans: 'ath-thawbu', meaning: 'The garment', type: 'Noun' },
    { ar: 'الزَّهْرَةُ', trans: 'az-zahratu', meaning: 'The flower', type: 'Noun' },
    { ar: 'السَّمَكُ', trans: 'as-samaku', meaning: 'The fish', type: 'Noun' },
    { ar: 'الظُّهْرُ', trans: 'aẓ-ẓuhru', meaning: 'The noon', type: 'Noun' },
    { ar: 'اللَّحْمُ', trans: 'al-laḥmu', meaning: 'The meat', type: 'Noun' },
    { ar: 'الهَوَاءُ', trans: 'al-hawāʾu', meaning: 'The air', type: 'Noun' },
    { ar: 'اليَدُ', trans: 'al-yadu', meaning: 'The hand', type: 'Noun' },
    { ar: 'الغَدَاءُ', trans: 'al-ghadāʾu', meaning: 'The lunch', type: 'Noun' },
    { ar: 'الفَمُ', trans: 'al-famu', meaning: 'The mouth', type: 'Noun' },
    { ar: 'المَاءُ', trans: 'al-māʾu', meaning: 'The water', type: 'Noun' },
    { ar: 'العَيْنُ', trans: 'al-ʿaynu', meaning: 'The eye', type: 'Noun' },
    { ar: 'الجَنَّةُ', trans: 'al-jannatu', meaning: 'The garden / paradise', type: 'Noun' }
  ],

  grammarBlocks: [
    {
      title: 'The Definite Article الـ',
      content: '<p>Arabic nouns become definite by adding <strong>الـ</strong> at the beginning. The way الـ is pronounced depends on the letter that follows.</p>',
      rule: 'بَيْتٌ (a house) → البَيْتُ (the house)'
    },
    {
      title: 'Moon Letters (الحروف القمرية) — 14 Letters',
      content: '<p>With moon letters, the <strong>ل of الـ</strong> is pronounced clearly. There is no shadda on the following letter.</p><p>Moon letters: <strong>أ ب ج ح خ ع غ ف ق ك م ه و ي</strong></p>',
      rule: 'القَمَرُ = al-qamaru (the moon) — ل is pronounced.'
    },
    {
      title: 'Sun Letters (الحروف الشمسية) — 14 Letters',
      content: '<p>With sun letters, the <strong>ل of الـ</strong> is silent (not pronounced). The sun letter takes a shadda (doubling).</p><p>Sun letters: <strong>ت ث د ذ ر ز س ش ص ض ط ظ ل ن</strong></p>',
      rule: 'الشَّمْسُ = ash-shamsu (the sun) — ل is silent, ش doubles.'
    },
    {
      title: 'How to Remember',
      content: '<p>The word <strong>الشَّمْس</strong> itself starts with a sun letter (ش), and <strong>القَمَر</strong> starts with a moon letter (ق).</p><p>Sun letters are often pronounced with the tip of the tongue. Moon letters are pronounced further back or at the lips.</p>',
      rule: 'Test: say the letter before ال. If your tongue touches your teeth/roof = sun letter.'
    }
  ],

  comprehension: {
    title: 'A Sunny Day in the Garden',
    arabic: 'الجَوُّ جَمِيلٌ اليَوْمَ. الشَّمْسُ فِي السَّمَاءِ. الرَّجُلُ فِي الجَنَّةِ. الزَّهْرَةُ جَمِيلَةٌ. السَّمَكُ فِي المَاءِ. الهَوَاءُ نَقِيٌّ. الثَّوْبُ عَلَى الكُرْسِيِّ. القَمَرُ جَمِيلٌ فِي اللَّيْلِ. الحِمَارُ فِي الحَقْلِ. الكَلْبُ تَحْتَ الشَّجَرَةِ.',
    english: 'The weather is beautiful today. The sun is in the sky. The man is in the garden. The flower is beautiful. The fish is in the water. The air is clean. The garment is on the chair. The moon is beautiful at night. The donkey is in the field. The dog is under the tree.',
    questions: [
      {
        text: 'Where is the sun?',
        options: ['In the garden', 'In the water', 'In the sky', 'Under the tree'],
        correct: 'In the sky'
      },
      {
        text: 'What is in the water?',
        options: ['The flower', 'The fish', 'The dog', 'The donkey'],
        correct: 'The fish'
      },
      {
        text: 'الشَّمْسُ starts with which type of letter?',
        options: ['Sun letter', 'Moon letter', 'Neither', 'Both'],
        correct: 'Sun letter'
      },
      {
        text: 'Where is the dog?',
        options: ['In the field', 'On the chair', 'Under the tree', 'In the sky'],
        correct: 'Under the tree'
      }
    ]
  },

  quizQuestions: {
    multipleChoice: [
      {
        prompt: 'In الشَّمْسُ, is the ل of ال pronounced or silent?',
        options: ['Pronounced', 'Silent', 'Half-pronounced', 'It depends'],
        correct: 1
      },
      {
        prompt: 'Which of these is a sun letter?',
        options: ['ب (bāʾ)', 'ش (shīn)', 'ق (qāf)', 'م (mīm)'],
        correct: 1
      },
      {
        prompt: 'Which of these is a moon letter?',
        options: ['ت (tāʾ)', 'د (dāl)', 'س (sīn)', 'ك (kāf)'],
        correct: 3
      },
      {
        prompt: 'How many sun letters are there?',
        options: ['7', '10', '14', '28'],
        correct: 2
      },
      {
        prompt: 'How is الرَّجُلُ pronounced?',
        options: ['al-rajulu', 'ar-rajulu', 'a-rajulu', 'al-rājulu'],
        correct: 1
      },
      {
        prompt: 'Which word has a moon letter after ال?',
        options: ['النَّجْمُ', 'السَّمَكُ', 'الكِتَابُ', 'الثَّوْبُ'],
        correct: 2
      }
    ],
    typing: [
      {
        prompt: 'Type in Arabic: "the sun" (with shadda)',
        ideal: 'الشَّمْسُ',
        accepts: ['الشمس', 'الشَّمْسُ', 'الشمسُ']
      },
      {
        prompt: 'Type in Arabic: "the moon"',
        ideal: 'القَمَرُ',
        accepts: ['القمر', 'القَمَرُ', 'القمرُ']
      }
    ],
    conceptCheck: [
      {
        statement: 'With sun letters, the ل of ال is silent and the following letter doubles.',
        correct: true,
        explanation: 'Sun letters "eat" the ل sound: الشَّمْس = ash-shams (not al-shams).'
      },
      {
        statement: 'There are 14 sun letters and 14 moon letters, making 28 total Arabic letters.',
        correct: true,
        explanation: 'The Arabic alphabet has 28 letters — exactly half are sun letters and half are moon letters.'
      },
      {
        statement: 'The word القَمَرُ starts with a sun letter.',
        correct: false,
        explanation: 'القَمَر starts with ق (qāf), which is a moon letter. The ل is pronounced: al-qamar.'
      }
    ]
  },

  practiceQuestions: []
};
