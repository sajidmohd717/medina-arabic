/* ============================================================
   b1-lesson10.js - Lesson 10 Data
   ============================================================ */

const LESSON_DATA = {
  book: 'book1',
  lessonNum: 10,
  titleArabic: 'الضَّمَائِرُ المُتَّصِلَةُ',
  titleEnglish: 'Attached Pronouns',
  summary: 'Learn how to show possession in Arabic by attaching pronoun suffixes to nouns: كِتَابِي (my book), كِتَابُكَ (your book), كِتَابُهُ (his book). Also learn عِنْدَ (have) and مَعَ (with).',
  nextLesson: 'b1-lesson11.html',
  passMark: 8,
  totalQuestions: 11,

  guidedPattern: 'كِتَابِي',
  guidedIntro: 'Instead of saying "the book of me," Arabic attaches a small pronoun ending to the noun: كِتَابِي = my book.',
  reviewVocabAtEnd: true,
  milestoneAfterPage: 4,

  guidedPages: [
    {
      titleArabic: 'الضَّمَائِرُ المُتَّصِلَةُ',
      title: 'Lesson Ten',
      pattern: 'كِتَابِي',
      intro: 'Start with a dialogue about belongings. Listen for the short endings that mean "my," "your," "his," and "her."',
      groups: [
        { type: 'scene', text: 'Khalid and Hamid talk about their books, pens, and family.' },
        {
          icon: '📖',
          role: 'teacher',
          lines: [
            { label: 'خالد', ar: 'أَيْنَ كِتَابُكَ يَا حَامِدُ؟', isPrompt: true },
            { label: 'حامد', ar: 'كِتَابِي عَلَى المَكْتَبِ.' }
          ]
        },
        {
          icon: '✏️',
          role: 'student',
          lines: [
            { label: 'خالد', ar: 'وَقَلَمُكَ؟', isPrompt: true },
            { label: 'حامد', ar: 'قَلَمِي فِي حَقِيبَتِي.' }
          ]
        },
        {
          icon: '👨',
          role: 'teacher',
          lines: [
            { label: 'خالد', ar: 'مَا اسْمُ أَبِيكَ؟', isPrompt: true },
            { label: 'حامد', ar: 'اسْمُ أَبِي عَبَّاسٌ.' }
          ]
        },
        {
          icon: '👩',
          role: 'student',
          lines: [
            { label: 'خالد', ar: 'وَأَيْنَ أُمُّكَ؟', isPrompt: true },
            { label: 'حامد', ar: 'أُمِّي فِي البَيْتِ.' }
          ]
        }
      ],
      exerciseIntro: 'Answer from the dialogue',
      exercise: [
        {
          icon: '📖',
          prompt: 'أَيْنَ كِتَابُ حَامِدٍ؟',
          placeholder: 'كِتَابُهُ ...',
          ideal: 'كِتَابُهُ عَلَى المَكْتَبِ.',
          accepts: ['كتابه على المكتب', 'كِتَابُهُ عَلَى المَكْتَبِ', 'كتابه على المكتب.', 'كِتَابُهُ عَلَى المَكْتَبِ.']
        },
        {
          icon: '👨',
          prompt: 'مَا اسْمُ أَبِي حَامِدٍ؟',
          placeholder: 'اسْمُ ...',
          ideal: 'اسْمُ أَبِيهِ عَبَّاسٌ.',
          accepts: ['اسم ابيه عباس', 'اسْمُ أَبِيهِ عَبَّاسٌ', 'اسم أبيه عباس.', 'اسْمُ أَبِيهِ عَبَّاسٌ.']
        }
      ],
      keyPoints: [
        'كِتَابِي = my book',
        'كِتَابُكَ = your book (masc.)',
        'أَبُوكَ = your father'
      ]
    },
    {
      title: 'The Pronoun Suffixes',
      pattern: 'ـِي · ـكَ · ـكِ · ـهُ · ـهَا',
      intro: 'These five endings attach to the end of a noun to show who it belongs to.',
      cards: [
        { icon: '👤', ar: 'كِتَابِي — my book' },
        { icon: '👤', ar: 'كِتَابُكَ — your book (m.)' },
        { icon: '👤', ar: 'كِتَابُكِ — your book (f.)' },
        { icon: '👤', ar: 'كِتَابُهُ — his book' },
        { icon: '👤', ar: 'كِتَابُهَا — her book' },
        { icon: '👤', ar: 'قَلَمِي — my pen' },
        { icon: '👤', ar: 'بَيْتُكَ — your house (m.)' },
        { icon: '👤', ar: 'اِسْمُهَا — her name' }
      ],
      keyPoints: [
        'ـِي = my        ـهُ = his',
        'ـكَ = your (m.)   ـهَا = her',
        'ـكِ = your (f.)'
      ]
    },
    {
      title: 'Choose the Pronoun',
      pattern: 'Pick the right ending',
      intro: 'Tap the correct pronoun suffix for each meaning.',
      wordBank: ['ـِي', 'ـكَ', 'ـكِ', 'ـهُ', 'ـهَا'],
      tapFill: [
        { parts: ['my book: كِتَاب', null], answer: 'ـِي' },
        { parts: ['your (m.) pen: قَلَم', null], answer: 'ـكَ' },
        { parts: ['his house: بَيْت', null], answer: 'ـهُ' },
        { parts: ['her name: اِسْم', null], answer: 'ـهَا' },
        { parts: ['your (f.) bag: حَقِيبَة', null], answer: 'ـكِ' },
        { parts: ['my mother: أُمّ', null], answer: 'ـِي' },
        { parts: ['his book: كِتَاب', null], answer: 'ـهُ' },
        { parts: ['her pen: قَلَم', null], answer: 'ـهَا' }
      ],
      keyPoints: [
        'The suffix replaces "of me / of you / of him / of her"',
        'The noun before the suffix takes ḍamma: كِتَابُ + هُ = كِتَابُهُ'
      ]
    },
    {
      title: 'Family Words with Pronouns',
      pattern: 'أَبِي · أَخُوكَ · أُمُّهَا',
      intro: 'Family words are very common with attached pronouns. Notice that أَب and أَخ have special forms.',
      groups: [
        {
          icon: '👨‍👩‍👦',
          lines: [
            { ar: 'أَبِي — my father' },
            { ar: 'أَبُوكَ — your father (m.)' },
            { ar: 'أَبُوهُ — his father' }
          ]
        },
        {
          icon: '👨‍👩‍👦',
          lines: [
            { ar: 'أَخِي — my brother' },
            { ar: 'أَخُوكَ — your brother (m.)' },
            { ar: 'أَخُوهَا — her brother' }
          ]
        },
        {
          icon: '👨‍👩‍👦',
          lines: [
            { ar: 'أُمِّي — my mother' },
            { ar: 'اِبْنُكَ — your son' },
            { ar: 'بِنْتُهُ — his daughter' }
          ]
        }
      ],
      keyPoints: [
        'أَب becomes أَبُو before pronouns (except ـِي)',
        'أَخ becomes أَخُو before pronouns (except ـِي)'
      ]
    },
    {
      title: 'Read the Pattern',
      pattern: 'Pronouns in sentences',
      intro: 'Read these sentences. Each has a pronoun suffix showing possession.',
      groups: [
        {
          icon: '📖',
          lines: [
            { ar: 'كِتَابِي جَدِيدٌ وَكِتَابُكَ قَدِيمٌ.' }
          ]
        },
        {
          icon: '🏠',
          lines: [
            { ar: 'بَيْتُهُ كَبِيرٌ وَبَيْتُهَا صَغِيرٌ.' }
          ]
        },
        {
          icon: '👨',
          lines: [
            { ar: 'اِسْمُ أَبِي خَالِدٌ وَاسْمُ أُمِّي آمِنَةُ.' }
          ]
        },
        {
          icon: '📝',
          lines: [
            { ar: 'مَا اسْمُكَ؟ اِسْمِي حَامِدٌ.', isPrompt: true }
          ]
        },
        {
          icon: '🕌',
          lines: [
            { ar: 'أَيْنَ مَسْجِدُكُمْ؟ مَسْجِدُنَا قَرِيبٌ.', isPrompt: true }
          ]
        }
      ],
      keyPoints: [
        'كِتَابِي = my book',
        'مَا اسْمُكَ؟ = What is your name?'
      ]
    },
    {
      title: 'عِنْدَ — To Have',
      pattern: 'عِنْدِي كِتَابٌ',
      intro: 'Arabic expresses "have" using عِنْدَ followed by a pronoun suffix. عِنْدِي = I have.',
      groups: [
        {
          icon: '📖',
          lines: [
            { ar: 'عِنْدِي كِتَابٌ. — I have a book.' },
            { ar: 'عِنْدَكَ قَلَمٌ. — You (m.) have a pen.' }
          ]
        },
        {
          icon: '🚗',
          lines: [
            { ar: 'عِنْدَهُ سَيَّارَةٌ. — He has a car.' },
            { ar: 'عِنْدَهَا سَاعَةٌ. — She has a watch.' }
          ]
        },
        {
          icon: '❓',
          lines: [
            { ar: 'هَلْ عِنْدَكَ دَفْتَرٌ؟', isPrompt: true },
            { ar: 'نَعَمْ، عِنْدِي دَفْتَرٌ.' }
          ]
        }
      ],
      exercise: [
        {
          icon: '📖',
          prompt: 'Type: "You (m.) have a book."',
          ideal: 'عِنْدَكَ كِتَابٌ.',
          accepts: ['عندك كتاب', 'عِنْدَكَ كِتَابٌ', 'عندك كتاب.', 'عِنْدَكَ كِتَابٌ.']
        },
        {
          icon: '🚗',
          prompt: 'Type: "He has a car."',
          ideal: 'عِنْدَهُ سَيَّارَةٌ.',
          accepts: ['عنده سيارة', 'عِنْدَهُ سَيَّارَةٌ', 'عنده سيارة.', 'عِنْدَهُ سَيَّارَةٌ.']
        }
      ],
      keyPoints: [
        'عِنْدَ + pronoun suffix = to have',
        'عِنْدِي = I have · عِنْدَكَ = you (m.) have'
      ]
    },
    {
      titleArabic: 'تَمْرِين',
      title: 'Practice',
      pattern: 'Attached pronouns',
      intro: 'Type the Arabic using the correct pronoun suffix.',
      tip: 'Tip: كِتَاب + ي = كِتَابِي. The noun gets ḍamma before the suffix.',
      exercise: [
        {
          icon: '📖',
          prompt: 'Type: "my book"',
          ideal: 'كِتَابِي',
          accepts: ['كتابي', 'كِتَابِي']
        },
        {
          icon: '📖',
          prompt: 'Type: "your (m.) book"',
          ideal: 'كِتَابُكَ',
          accepts: ['كتابك', 'كِتَابُكَ', 'كتابُكَ']
        },
        {
          icon: '👨',
          prompt: 'Type: "his name"',
          ideal: 'اِسْمُهُ',
          accepts: ['اسمه', 'اِسْمُهُ', 'اسمُهُ']
        },
        {
          icon: '📖',
          prompt: 'Type: "I have a book."',
          ideal: 'عِنْدِي كِتَابٌ.',
          accepts: ['عندي كتاب', 'عِنْدِي كِتَابٌ', 'عندي كتاب.', 'عِنْدِي كِتَابٌ.']
        }
      ]
    }
  ],

  vocab: [
    { ar: 'ـِي', trans: '-ī', meaning: 'My (attached pronoun)', type: 'Grammar' },
    { ar: 'ـكَ', trans: '-ka', meaning: 'Your — masc. (attached pronoun)', type: 'Grammar' },
    { ar: 'ـكِ', trans: '-ki', meaning: 'Your — fem. (attached pronoun)', type: 'Grammar' },
    { ar: 'ـهُ', trans: '-hu', meaning: 'His (attached pronoun)', type: 'Grammar' },
    { ar: 'ـهَا', trans: '-hā', meaning: 'Her (attached pronoun)', type: 'Grammar' },
    { ar: 'أَبٌ', trans: 'abun', meaning: 'A father', type: 'Noun' },
    { ar: 'أَخٌ', trans: 'akhun', meaning: 'A brother', type: 'Noun' },
    { ar: 'أُمٌّ', trans: 'ummun', meaning: 'A mother', type: 'Noun' },
    { ar: 'زَمِيلٌ', trans: 'zamīlun', meaning: 'A colleague', type: 'Noun' },
    { ar: 'عِنْدَ', trans: 'ʿinda', meaning: 'At / with (to have)', type: 'Preposition' },
    { ar: 'مَعَ', trans: 'maʿa', meaning: 'With (accompanying)', type: 'Preposition' },
    { ar: 'لِي', trans: 'lī', meaning: 'I have / Mine', type: 'Expression' },
    { ar: 'أُحِبُّ', trans: 'uḥibbu', meaning: 'I love / like', type: 'Verb' },
    { ar: 'زَوْجٌ', trans: 'zawjun', meaning: 'A husband', type: 'Noun' },
    { ar: 'طِفْلٌ', trans: 'ṭiflun', meaning: 'A child', type: 'Noun' },
    { ar: 'فَتىً', trans: 'fatan', meaning: 'A young man / boy', type: 'Noun' }
  ],

  grammarBlocks: [
    {
      title: 'Attached Pronouns (Possessive)',
      content: '<p>To show possession in Arabic, attach a short pronoun suffix directly to the end of the noun. The noun takes ḍamma before the suffix.</p><table><tr><td>ـِي (-ī)</td><td>my</td><td>كِتَابِي = my book</td></tr><tr><td>ـكَ (-ka)</td><td>your (m.)</td><td>كِتَابُكَ = your book</td></tr><tr><td>ـكِ (-ki)</td><td>your (f.)</td><td>كِتَابُكِ = your book</td></tr><tr><td>ـهُ (-hu)</td><td>his</td><td>كِتَابُهُ = his book</td></tr><tr><td>ـهَا (-hā)</td><td>her</td><td>كِتَابُهَا = her book</td></tr></table>',
      rule: 'Noun (with ḍamma) + pronoun suffix = possession'
    },
    {
      title: 'Expressing "to Have" with عِنْدَ',
      content: '<p>Arabic does not have a verb "to have." Instead, use <strong>عِنْدَ</strong> followed by a pronoun suffix.</p><ul><li><strong>عِنْدِي كِتَابٌ</strong> = I have a book (literally "at me is a book")</li><li><strong>عِنْدَهُ سَيَّارَةٌ</strong> = He has a car</li></ul>',
      rule: 'عِنْدَ + pronoun suffix + noun = possession / having'
    },
    {
      title: 'مَعَ (With) vs عِنْدَ (At/Have)',
      content: '<p><strong>مَعَ</strong> means "with" in the sense of accompanying someone.</p><ul><li><strong>الكِتَابُ مَعِي</strong> = The book is with me (I have it on me)</li></ul><p><strong>عِنْدَ</strong> means having something (ownership or possession, not necessarily with you right now).</p><ul><li><strong>عِنْدِي كِتَابٌ</strong> = I have a book (I own one)</li></ul>',
      rule: 'مَعَ = physically with · عِنْدَ = own / possess'
    }
  ],

  comprehension: {
    title: 'My New Colleague',
    arabic: 'اِسْمِي حَامِدٌ. أَنَا طَالِبٌ فِي الجَامِعَةِ. عِنْدِي زَمِيلٌ جَدِيدٌ. اِسْمُهُ خَالِدٌ. هُوَ مِنَ الكُوَيْتِ. عِنْدَهُ أَخٌ وَأُخْتٌ. أَبُوهُ طَبِيبٌ وَأُمُّهُ مُدَرِّسَةٌ. كِتَابُهُ عَلَى المَكْتَبِ وَقَلَمُهُ فِي حَقِيبَتِهِ. نَحْنُ مَعًا فِي الفَصْلِ. أُحِبُّ اللُّغَةَ العَرَبِيَّةَ. الكِتَابُ مَعِي دَائِمًا.',
    english: 'My name is Hamid. I am a student at the university. I have a new colleague. His name is Khalid. He is from Kuwait. He has a brother and a sister. His father is a doctor and his mother is a teacher. His book is on the desk and his pen is in his bag. We are together in class. I love the Arabic language. The book is always with me.',
    questions: [
      {
        text: 'What is Hamid?',
        options: ['A teacher', 'A doctor', 'A student', 'An engineer'],
        correct: 'A student'
      },
      {
        text: 'Where is Khalid from?',
        options: ['Egypt', 'Kuwait', 'India', 'Japan'],
        correct: 'Kuwait'
      },
      {
        text: 'What is Khalid\'s father?',
        options: ['An engineer', 'A teacher', 'A doctor', 'A merchant'],
        correct: 'A doctor'
      },
      {
        text: 'Where is the book always?',
        options: ['On the desk', 'In the bag', 'With Hamid (مَعِي)', 'With Khalid'],
        correct: 'With Hamid (مَعِي)'
      }
    ]
  },

  quizQuestions: {
    multipleChoice: [
      {
        prompt: 'What does كِتَابِي mean?',
        options: ['Your book', 'His book', 'My book', 'Her book'],
        correct: 2
      },
      {
        prompt: 'What is the suffix for "your" (masc.)?',
        options: ['ـِي', 'ـكَ', 'ـهُ', 'ـهَا'],
        correct: 1
      },
      {
        prompt: 'Translate: "his house"',
        options: ['بَيْتُكَ', 'بَيْتِي', 'بَيْتُهُ', 'بَيْتُهَا'],
        correct: 2
      },
      {
        prompt: 'How do you say "I have a pen"?',
        options: ['مَعِي قَلَمٌ', 'عِنْدِي قَلَمٌ', 'لِي قَلَمٌ', 'قَلَمِي'],
        correct: 1
      },
      {
        prompt: 'What does عِنْدَكَ كِتَابٌ mean?',
        options: ['My book', 'Your book', 'You have a book', 'His book'],
        correct: 2
      },
      {
        prompt: 'Translate: "her mother"',
        options: ['أُمِّي', 'أُمُّكَ', 'أُمُّهُ', 'أُمُّهَا'],
        correct: 3
      }
    ],
    typing: [
      {
        prompt: 'Type: "my book"',
        ideal: 'كِتَابِي',
        accepts: ['كتابي', 'كِتَابِي']
      },
      {
        prompt: 'Type: "I have a pen"',
        ideal: 'عِنْدِي قَلَمٌ',
        accepts: ['عندي قلم', 'عِنْدِي قَلَمٌ', 'عندي قلم.', 'عِنْدِي قَلَمٌ.']
      }
    ],
    conceptCheck: [
      {
        statement: 'To show possession in Arabic, you attach a pronoun suffix to the end of the noun.',
        correct: true,
        explanation: 'كِتَاب (book) + ـِي (my) = كِتَابِي (my book). The pronoun attaches directly to the noun.'
      },
      {
        statement: 'Arabic uses a verb "to have" just like English does.',
        correct: false,
        explanation: 'Arabic uses عِنْدَ + pronoun to express "having" — there is no single verb for "to have."'
      },
      {
        statement: 'مَعَ and عِنْدَ mean exactly the same thing and are interchangeable.',
        correct: false,
        explanation: 'مَعَ means "with" (physical accompaniment), while عِنْدَ means "at" / "to have" (possession). They are used differently.'
      }
    ]
  },

  practiceQuestions: []
};
