/* ============================================================
   b1-lesson7.js - Lesson 7 Data
   ============================================================ */

const LESSON_DATA = {
  book: 'book1',
  lessonNum: 7,
  titleArabic: 'تِلْكَ',
  titleEnglish: 'That is… (Feminine)',
  summary: 'Learn the feminine counterpart to ذٰلِكَ: تِلْكَ. You now have four pointing words — this/that × masculine/feminine. New vocabulary for farm animals, occupations, and adjectives.',
  nextLesson: 'b1-lesson8.html',
  passMark: 8,
  totalQuestions: 11,

  guidedPattern: 'تِلْكَ',
  guidedIntro: 'ذٰلِكَ points to far masculine things. Now learn تِلْكَ for far feminine things — completing the set of four demonstratives.',
  reviewVocabAtEnd: true,
  milestoneAfterPage: 4,

  guidedPages: [
    {
      titleArabic: 'تِلْكَ',
      title: 'Lesson Seven',
      pattern: 'تِلْكَ',
      intro: 'Start with a dialogue mixing near and far, masculine and feminine.',
      groups: [
        { type: 'scene', text: 'At the farm: Hamid and Aminah are pointing at things near and far.' },
        {
          icon: '🐔',
          role: 'teacher',
          lines: [
            { label: 'حامد', ar: 'مَا هٰذِهِ يَا آمِنَةُ؟', isPrompt: true },
            { label: 'آمنة', ar: 'هٰذِهِ دَجَاجَةٌ.' }
          ]
        },
        {
          icon: '🦆',
          role: 'student',
          lines: [
            { label: 'حامد', ar: 'وَمَا تِلْكَ هُنَاكَ؟', isPrompt: true },
            { label: 'آمنة', ar: 'تِلْكَ بَطَّةٌ.' }
          ]
        },
        {
          icon: '🐓',
          role: 'teacher',
          lines: [
            { label: 'حامد', ar: 'أَذٰلِكَ دِيكٌ؟', isPrompt: true },
            { label: 'آمنة', ar: 'نَعَمْ، ذٰلِكَ دِيكٌ.' }
          ]
        },
        {
          icon: '🥚',
          role: 'student',
          lines: [
            { label: 'حامد', ar: 'أَتِلْكَ بَيْضَةٌ؟', isPrompt: true },
            { label: 'آمنة', ar: 'نَعَمْ، تِلْكَ بَيْضَةٌ.' }
          ]
        }
      ],
      exerciseIntro: 'Answer from the dialogue',
      exercise: [
        {
          icon: '🐔',
          prompt: 'مَا هٰذِهِ؟',
          placeholder: 'هٰذِهِ ...',
          ideal: 'هٰذِهِ دَجَاجَةٌ.',
          accepts: ['هذه دجاجة', 'هٰذِهِ دَجَاجَةٌ', 'هذه دجاجة.', 'هٰذِهِ دَجَاجَةٌ.']
        },
        {
          icon: '🦆',
          prompt: 'وَمَا تِلْكَ؟',
          placeholder: 'تِلْكَ ...',
          ideal: 'تِلْكَ بَطَّةٌ.',
          accepts: ['تلك بطة', 'تِلْكَ بَطَّةٌ', 'تلك بطة.', 'تِلْكَ بَطَّةٌ.']
        },
        {
          icon: '🥚',
          prompt: 'أَتِلْكَ بَيْضَةٌ؟',
          placeholder: 'نَعَمْ، ...',
          ideal: 'نَعَمْ، تِلْكَ بَيْضَةٌ.',
          accepts: ['نعم تلك بيضة', 'نَعَمْ تِلْكَ بَيْضَةٌ', 'نعم تلك بيضة.', 'نَعَمْ، تِلْكَ بَيْضَةٌ.']
        }
      ],
      keyPoints: [
        'هٰذِهِ = this (near, fem.)',
        'تِلْكَ = that (far, fem.)',
        'ذٰلِكَ = that (far, masc.)'
      ]
    },
    {
      title: 'The Four Demonstratives',
      pattern: 'هٰذَا · هٰذِهِ · ذٰلِكَ · تِلْكَ',
      intro: 'Tap the right pointing word. Match gender AND distance.',
      wordBank: ['هٰذَا', 'هٰذِهِ', 'ذٰلِكَ', 'تِلْكَ'],
      tapFill: [
        { parts: [null, ' كِتَابٌ (near)'], answer: 'هٰذَا' },
        { parts: [null, ' مِلْعَقَةٌ (near)'], answer: 'هٰذِهِ' },
        { parts: [null, ' بَيْتٌ (far)'], answer: 'ذٰلِكَ' },
        { parts: [null, ' دَجَاجَةٌ (far)'], answer: 'تِلْكَ' },
        { parts: [null, ' قَلَمٌ (near)'], answer: 'هٰذَا' },
        { parts: [null, ' سَاعَةٌ (near)'], answer: 'هٰذِهِ' },
        { parts: [null, ' دِيكٌ (far)'], answer: 'ذٰلِكَ' },
        { parts: [null, ' بَطَّةٌ (far)'], answer: 'تِلْكَ' }
      ],
      keyPoints: [
        'Near masc: هٰذَا    Near fem: هٰذِهِ',
        'Far masc: ذٰلِكَ     Far fem: تِلْكَ'
      ]
    },
    {
      title: 'Read the Pattern',
      pattern: 'تِلْكَ',
      intro: 'Read these sentences from the book, mixing all four demonstratives.',
      groups: [
        {
          icon: '👩‍⚕️',
          lines: [
            { ar: 'هٰذِهِ طَبِيبَةٌ وَتِلْكَ مُمَرِّضَةٌ.' }
          ]
        },
        {
          icon: '🌏',
          lines: [
            { ar: 'الطَّبِيبَةُ مِنَ الهِنْدِ وَالمُمَرِّضَةُ مِنَ اليَابَانِ.' }
          ]
        },
        {
          icon: '📏',
          lines: [
            { ar: 'هٰذِهِ طَوِيلَةٌ وَتِلْكَ قَصِيرَةٌ.' }
          ]
        },
        {
          icon: '👨',
          lines: [
            { ar: 'مَنْ هٰذَا؟ هٰذَا حَامِدٌ. وَمَنْ ذٰلِكَ؟ ذٰلِكَ عَلِيٌّ.' }
          ]
        },
        {
          icon: '🚗',
          lines: [
            { ar: 'تِلْكَ سَيَّارَةُ المُدِيرِ.' }
          ]
        }
      ],
      keyPoints: [
        'هٰذِهِ ... وَتِلْكَ ... = This (one) is ... and that (one) is ...',
        'مِنَ = from (preposition)'
      ]
    },
    {
      title: 'Occupations',
      pattern: 'مُدَرِّس → مُدَرِّسَة',
      intro: 'Many jobs are made feminine by adding ة. Tap for meanings.',
      cards: [
        { icon: '👨‍🏫', ar: 'مُدَرِّسٌ | مُدَرِّسَةٌ' },
        { icon: '👨‍⚕️', ar: 'طَبِيبٌ | طَبِيبَةٌ' },
        { icon: '👨‍🎓', ar: 'طَالِبٌ | طَالِبَةٌ' },
        { icon: '🏥', ar: 'مُمَرِّضٌ | مُمَرِّضَةٌ' },
        { icon: '🕌', ar: 'مُؤَذِّنٌ' },
        { icon: '👔', ar: 'مُدِيرٌ | مُدِيرَةٌ' }
      ],
      keyPoints: [
        'Masculine + ة = Feminine occupation',
        'مُدَرِّس (masc.) → مُدَرِّسَة (fem.)'
      ]
    },
    {
      title: 'Farm Animals',
      pattern: 'هٰذِهِ / تِلْكَ + animal',
      intro: 'Farm and household vocabulary for the reading.',
      groups: [
        {
          icon: '🐔',
          lines: [
            { ar: 'هٰذِهِ دَجَاجَةٌ. تِلْكَ بَطَّةٌ.' }
          ]
        },
        {
          icon: '🐓',
          lines: [
            { ar: 'هٰذَا دِيكٌ. ذٰلِكَ حِصَانٌ.' }
          ]
        },
        {
          icon: '🥚',
          lines: [
            { ar: 'مَا تِلْكَ؟ تِلْكَ بَيْضَةٌ.', isPrompt: true }
          ]
        },
        {
          icon: '🐄',
          lines: [
            { ar: 'أَتِلْكَ بَقَرَةٌ؟', isPrompt: true },
            { ar: 'نَعَمْ، تِلْكَ بَقَرَةٌ.' }
          ]
        }
      ],
      keyPoints: [
        'دَجَاجَة = hen (fem.) · بَطَّة = duck (fem.)',
        'دِيك = rooster (masc.) · بَيْضَة = egg (fem.)'
      ]
    },
    {
      title: 'Tall and Short',
      pattern: 'طَوِيلَة / قَصِيرَة',
      intro: 'These adjectives describe people. They change for gender — add ة for feminine.',
      groups: [
        {
          icon: '📏',
          lines: [
            { ar: 'حَامِدٌ طَوِيلٌ. (Hamid is tall — masc.)' },
            { ar: 'آمِنَةُ طَوِيلَةٌ. (Aminah is tall — fem.)' }
          ]
        },
        {
          icon: '📏',
          lines: [
            { ar: 'عَلِيٌّ قَصِيرٌ. (Ali is short — masc.)' },
            { ar: 'زَيْنَبُ قَصِيرَةٌ. (Zaynab is short — fem.)' }
          ]
        },
        {
          icon: '👩‍⚕️',
          lines: [
            { ar: 'الطَّبِيبَةُ طَوِيلَةٌ وَالمُمَرِّضَةُ قَصِيرَةٌ.' }
          ]
        }
      ],
      keyPoints: [
        'طَوِيل (masc.) → طَوِيلَة (fem.) = tall',
        'قَصِير (masc.) → قَصِيرَة (fem.) = short'
      ]
    },
    {
      titleArabic: 'تَمْرِين',
      title: 'Practice',
      pattern: 'تِلْكَ',
      intro: 'Type the Arabic. The full form with harakāt appears when you check.',
      tip: 'Tip: remember to match gender — masculine or feminine?',
      exercise: [
        {
          icon: '👩‍⚕️',
          prompt: 'Type: "That is a nurse."',
          ideal: 'تِلْكَ مُمَرِّضَةٌ.',
          accepts: ['تلك ممرضة', 'تِلْكَ مُمَرِّضَةٌ', 'تلك ممرضة.', 'تِلْكَ مُمَرِّضَةٌ.']
        },
        {
          icon: '🐔',
          prompt: 'Type: "That is a hen."',
          ideal: 'تِلْكَ دَجَاجَةٌ.',
          accepts: ['تلك دجاجة', 'تِلْكَ دَجَاجَةٌ', 'تلك دجاجة.', 'تِلْكَ دَجَاجَةٌ.']
        },
        {
          icon: '📏',
          prompt: 'Type: "This (fem.) is tall and that (fem.) is short."',
          ideal: 'هٰذِهِ طَوِيلَةٌ وَتِلْكَ قَصِيرَةٌ.',
          accepts: ['هذه طويلة وتلك قصيرة', 'هٰذِهِ طَوِيلَةٌ وَتِلْكَ قَصِيرَةٌ', 'هذه طويلة وتلك قصيرة.', 'هٰذِهِ طَوِيلَةٌ وَتِلْكَ قَصِيرَةٌ.']
        }
      ]
    }
  ],

  vocab: [
    { ar: 'تِلْكَ', trans: 'tilka', meaning: 'That (fem.)', type: 'Demonstrative' },
    { ar: 'مُمَرِّضَةٌ', trans: 'mumarriḍatun', meaning: 'A nurse (fem.)', type: 'Noun' },
    { ar: 'طَبِيبَةٌ', trans: 'ṭabībatun', meaning: 'A doctor (fem.)', type: 'Noun' },
    { ar: 'طَالِبَةٌ', trans: 'ṭālibatun', meaning: 'A student (fem.)', type: 'Noun' },
    { ar: 'دَجَاجَةٌ', trans: 'dajājatun', meaning: 'A hen', type: 'Noun' },
    { ar: 'بَطَّةٌ', trans: 'baṭṭatun', meaning: 'A duck', type: 'Noun' },
    { ar: 'دِيكٌ', trans: 'dīkun', meaning: 'A rooster', type: 'Noun (Masc.)' },
    { ar: 'بَيْضَةٌ', trans: 'bayḍatun', meaning: 'An egg', type: 'Noun' },
    { ar: 'مُؤَذِّنٌ', trans: 'muʾadhdhinun', meaning: 'A caller to prayer', type: 'Noun (Masc.)' },
    { ar: 'طَوِيلَةٌ', trans: 'ṭawīlatun', meaning: 'Tall (fem.)', type: 'Adjective' },
    { ar: 'قَصِيرَةٌ', trans: 'qaṣīratun', meaning: 'Short (fem.)', type: 'Adjective' }
  ],

  grammarBlocks: [
    {
      title: 'The Feminine "That": تِلْكَ',
      content: '<p>Just as <strong>ذٰلِكَ</strong> (dhālika) is used to point to masculine nouns that are far away, <strong>تِلْكَ</strong> (tilka) is used for feminine nouns.</p>',
      rule: 'ذٰلِكَ (That — Masc.) vs. تِلْكَ (That — Fem.).'
    },
    {
      title: 'Demonstrative Summary',
      content: '<p>We now have a complete set of pointing words for singular nouns:</p><ul><li><strong>هٰذَا</strong>: This (Masc., Near)</li><li><strong>هٰذِهِ</strong>: This (Fem., Near)</li><li><strong>ذٰلِكَ</strong>: That (Masc., Far)</li><li><strong>تِلْكَ</strong>: That (Fem., Far)</li></ul>',
      rule: 'Always match the gender and the distance!'
    },
    {
      title: 'Feminine Occupations',
      content: '<p>Many occupations are made feminine by adding the <strong>Tāʾ Marbūṭa (ة)</strong>.</p><ul><li><strong>طَبِيبٌ</strong> (Doctor, masc.) → <strong>طَبِيبَةٌ</strong> (Doctor, fem.)</li><li><strong>مُمَرِّضٌ</strong> (Nurse, masc.) → <strong>مُمَرِّضَةٌ</strong> (Nurse, fem.)</li></ul>',
      rule: 'Masc + ة = Fem.'
    }
  ],

  comprehension: {
    title: 'The Farm and the Hospital',
    arabic: 'هٰذِهِ طَبِيبَةٌ وَتِلْكَ مُمَرِّضَةٌ. الطَّبِيبَةُ مِنَ الهِنْدِ وَالمُمَرِّضَةُ مِنَ اليَابَانِ. هٰذِهِ طَوِيلَةٌ وَتِلْكَ قَصِيرَةٌ. مَنْ هٰذَا؟ هٰذَا حَامِدٌ. وَمَنْ ذٰلِكَ؟ ذٰلِكَ عَلِيٌّ. أَتِلْكَ دَجَاجَةٌ؟ لَا، تِلْكَ بَطَّةٌ. مَا تِلْكَ؟ تِلْكَ بَيْضَةٌ. تِلْكَ سَيَّارَةُ المُدِيرِ.',
    english: 'This is a doctor and that is a nurse. The doctor is from India and the nurse is from Japan. This one (the doctor) is tall and that one (the nurse) is short. Who is this? This is Hamid. And who is that? That is Ali. Is that a hen? No, that is a duck. What is that? That is an egg. That is the principal\'s car.',
    questions: [
      {
        text: 'Where is the nurse from?',
        options: ['India', 'Japan', 'China', 'The Philippines'],
        correct: 'Japan'
      },
      {
        text: 'Who is described as "short" (قَصِيرَة)?',
        options: ['The doctor', 'The nurse', 'Hamid', 'Ali'],
        correct: 'The nurse'
      },
      {
        text: 'What is the object that is not a hen?',
        options: ['A rooster', 'A duck', 'An egg', 'A car'],
        correct: 'A duck'
      },
      {
        text: 'Whose car is mentioned at the end?',
        options: ["The doctor's", "The teacher's", "The principal's", "Hamid's"],
        correct: "The principal's"
      }
    ]
  },

  quizQuestions: {
    multipleChoice: [
      {
        prompt: 'What is the feminine counterpart to ذٰلِكَ?',
        options: ['هٰذِهِ', 'تِلْكَ', 'هِيَ', 'ذٰلِكَ'],
        correct: 1
      },
      {
        prompt: 'Translate: "That is a hen."',
        options: ['تِلْكَ بَطَّةٌ', 'تِلْكَ دَجَاجَةٌ', 'ذٰلِكَ دِيكٌ', 'هٰذِهِ دَجَاجَةٌ'],
        correct: 1
      },
      {
        prompt: 'Which word means "Nurse" (fem.)?',
        options: ['طَبِيبَةٌ', 'مُدَرِّسَةٌ', 'مُمَرِّضَةٌ', 'طَالِبَةٌ'],
        correct: 2
      },
      {
        prompt: 'Translate: "That is a duck."',
        options: ['تِلْكَ بَطَّةٌ', 'تِلْكَ دَجَاجَةٌ', 'تِلْكَ بَيْضَةٌ', 'هٰذِهِ بَطَّةٌ'],
        correct: 0
      },
      {
        prompt: 'What is the opposite of طَوِيلَة (tall — fem.)?',
        options: ['جَمِيلَة', 'قَصِيرَة', 'سَرِيعَة', 'كَبِيرَة'],
        correct: 1
      },
      {
        prompt: 'Translate: "That is the principal\'s car."',
        options: ['تِلْكَ سَيَّارَةُ المُدِيرِ', 'هٰذِهِ سَيَّارَةُ المُدِيرِ', 'ذٰلِكَ سَيَّارَةُ المُدِيرِ', 'تِلْكَ سَيَّارَةُ المُدَرِّسِ'],
        correct: 0
      }
    ],
    typing: [
      {
        prompt: 'Type in Arabic: "That is a nurse."',
        ideal: 'تِلْكَ مُمَرِّضَةٌ',
        accepts: ['تلك ممرضة', 'تِلْكَ مُمَرِّضَةٌ', 'تلك ممرضة.', 'تِلْكَ مُمَرِّضَةٌ.']
      },
      {
        prompt: 'Type in Arabic: "That is a hen."',
        ideal: 'تِلْكَ دَجَاجَةٌ',
        accepts: ['تلك دجاجة', 'تِلْكَ دَجَاجَةٌ', 'تلك دجاجة.', 'تِلْكَ دَجَاجَةٌ.']
      }
    ],
    conceptCheck: [
      {
        statement: 'تِلْكَ is the feminine form of "that," used for far feminine things.',
        correct: true,
        explanation: 'Just as ذٰلِكَ points to far masculine things, تِلْكَ points to far feminine things.'
      },
      {
        statement: 'There is no difference between هٰذِهِ and تِلْكَ — they are interchangeable.',
        correct: false,
        explanation: 'هٰذِهِ is for near things and تِلْكَ is for far things. Distance matters in Arabic demonstratives.'
      },
      {
        statement: 'To make a male occupation feminine, you usually add ة.',
        correct: true,
        explanation: 'طَبِيب (male doctor) → طَبِيبَة (female doctor). The ة signals feminine gender.'
      }
    ]
  },

  practiceQuestions: []
};
