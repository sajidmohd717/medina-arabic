/* ============================================================
   b1-lesson16.js - Lesson 16 Data
   ============================================================ */

const LESSON_DATA = {
  book: 'book1',
  lessonNum: 16,
  titleArabic: 'الفِعْلُ المَاضِي — المُثَنَّى وَالجَمْع',
  titleEnglish: 'Past Tense: Dual & Plural',
  summary: 'Complete the past-tense conjugation with dual and plural forms: they (two) went, they (m.) went, they (f.) went. Learn the full 14-form conjugation table for every past verb.',
  nextLesson: 'b1-lesson17.html',
  passMark: 8,
  totalQuestions: 11,

  guidedPattern: 'ذَهَبَا — ذَهَبُوا — ذَهَبْنَ',
  guidedIntro: 'Arabic past tense has forms for two people (dual) and for groups (plural). Master the full conjugation table.',
  reviewVocabAtEnd: true,
  milestoneAfterPage: 4,

  guidedPages: [
    {
      titleArabic: 'المُثَنَّى وَالجَمْع',
      title: 'Lesson Sixteen',
      pattern: 'ذَهَبَا — ذَهَبُوا',
      intro: 'Start with a dialogue using dual and plural verb forms.',
      groups: [
        { type: 'scene', text: 'Khalid is telling Hamid about his family\'s day yesterday.' },
        {
          icon: '👨‍👦',
          role: 'teacher',
          lines: [
            { label: 'حامد', ar: 'أَيْنَ ذَهَبَ أَبُوكَ وَأَخُوكَ؟', isPrompt: true },
            { label: 'خالد', ar: 'ذَهَبَا إِلَى المَسْجِدِ.' }
          ]
        },
        {
          icon: '👨‍👩‍👧',
          role: 'student',
          lines: [
            { label: 'حامد', ar: 'وَمَاذَا فَعَلَ إِخْوَتُكَ؟', isPrompt: true },
            { label: 'خالد', ar: 'ذَهَبُوا إِلَى المَدْرَسَةِ.' }
          ]
        },
        {
          icon: '👩‍👩‍👧',
          role: 'teacher',
          lines: [
            { label: 'حامد', ar: 'وَبَنَاتُ عَمِّكَ؟', isPrompt: true },
            { label: 'خالد', ar: 'ذَهَبْنَ إِلَى السُّوقِ.' }
          ]
        }
      ],
      exerciseIntro: 'Answer from the dialogue',
      exercise: [
        {
          icon: '👨‍👦',
          prompt: 'أَيْنَ ذَهَبَ الأَبُ وَالأَخُ؟',
          placeholder: 'ذَهَبَا ...',
          ideal: 'ذَهَبَا إِلَى المَسْجِدِ.',
          accepts: ['ذهبا إلى المسجد', 'ذَهَبَا إِلَى المَسْجِدِ', 'ذهبا إلى المسجد.', 'ذَهَبَا إِلَى المَسْجِدِ.']
        },
        {
          icon: '👨‍👩‍👧',
          prompt: 'أَيْنَ ذَهَبَ الإِخْوَةُ؟',
          placeholder: 'ذَهَبُوا ...',
          ideal: 'ذَهَبُوا إِلَى المَدْرَسَةِ.',
          accepts: ['ذهبوا إلى المدرسة', 'ذَهَبُوا إِلَى المَدْرَسَةِ', 'ذهبوا إلى المدرسة.', 'ذَهَبُوا إِلَى المَدْرَسَةِ.']
        }
      ],
      keyPoints: [
        'ذَهَبَا = they (two, m.) went',
        'ذَهَبُوا = they (3+, m.) went',
        'ذَهَبْنَ = they (3+, f.) went'
      ]
    },
    {
      title: 'Full Past Tense Table',
      pattern: '14 forms of the past verb',
      intro: 'Arabic has 14 pronoun forms. Here is the complete past-tense conjugation for ذَهَبَ.',
      cards: [
        { icon: '👤', ar: 'هُوَ ذَهَبَ — he went' },
        { icon: '👤', ar: 'هِيَ ذَهَبَتْ — she went' },
        { icon: '👥', ar: 'هُمَا ذَهَبَا — they (2 m.) went' },
        { icon: '👥', ar: 'هُمَا ذَهَبَتَا — they (2 f.) went' },
        { icon: '👥', ar: 'هُمْ ذَهَبُوا — they (m. pl.) went' },
        { icon: '👥', ar: 'هُنَّ ذَهَبْنَ — they (f. pl.) went' },
        { icon: '👤', ar: 'أَنْتَ ذَهَبْتَ — you (m.) went' },
        { icon: '👤', ar: 'أَنْتِ ذَهَبْتِ — you (f.) went' }
      ],
      keyPoints: [
        'Dual (2 people): ـَا (m.) / ـَتَا (f.)',
        'Plural (m.): ـُوا',
        'Plural (f.): ـْنَ'
      ]
    },
    {
      title: 'Dual Forms — Two People',
      pattern: 'هُمَا ذَهَبَا / هُمَا ذَهَبَتَا',
      intro: 'For exactly two people, Arabic uses the dual form. The suffix differs for masculine and feminine.',
      groups: [
        {
          icon: '👨‍👦',
          lines: [
            { ar: 'الوَلَدَانِ ذَهَبَا — the two boys went (m.)' },
            { ar: 'خَالِدٌ وَحَامِدٌ دَخَلَا — Khalid and Hamid entered' }
          ]
        },
        {
          icon: '👩‍👧',
          lines: [
            { ar: 'البِنْتَانِ ذَهَبَتَا — the two girls went (f.)' },
            { ar: 'آمِنَةُ وَزَيْنَبُ جَلَسَتَا — Aminah and Zaynab sat' }
          ]
        },
        {
          icon: '💡',
          lines: [
            { ar: 'If the group is mixed (m. + f.), use the masculine dual: ذَهَبَا' }
          ]
        }
      ],
      keyPoints: [
        'ـَا = dual masculine (or mixed group)',
        'ـَتَا = dual feminine'
      ]
    },
    {
      title: 'Pick the Right Form',
      pattern: 'Dual and plural',
      intro: 'Tap the correct past-tense form for each subject.',
      wordBank: ['ذَهَبَ', 'ذَهَبَتْ', 'ذَهَبَا', 'ذَهَبَتَا', 'ذَهَبُوا', 'ذَهَبْنَ'],
      tapFill: [
        { parts: ['الوَلَدَانِ ', null], answer: 'ذَهَبَا' },
        { parts: ['البِنْتَانِ ', null], answer: 'ذَهَبَتَا' },
        { parts: ['الطُّلَّابُ ', null], answer: 'ذَهَبُوا' },
        { parts: ['الطَّالِبَاتُ ', null], answer: 'ذَهَبْنَ' },
        { parts: ['خَالِدٌ وَحَامِدٌ ', null], answer: 'ذَهَبَا' },
        { parts: ['الطَّالِبُ ', null], answer: 'ذَهَبَ' }
      ],
      keyPoints: [
        'الوَلَدَانِ (two boys) → dual masculine: ذَهَبَا',
        'الطُّلَّابُ (students, m. pl.) → pl. masculine: ذَهَبُوا',
        'الطَّالِبَاتُ (students, f. pl.) → pl. feminine: ذَهَبْنَ'
      ]
    },
    {
      title: 'Plural Forms — Groups',
      pattern: 'هُمْ ذَهَبُوا / هُنَّ ذَهَبْنَ',
      intro: 'For three or more people, use the plural form. Arabic distinguishes masculine and feminine plurals.',
      groups: [
        {
          icon: '👨‍👨‍👦',
          lines: [
            { ar: 'الطُّلَّابُ ذَهَبُوا إِلَى المَدْرَسَةِ.' },
            { ar: 'الإِخْوَةُ دَخَلُوا الفَصْلَ.' }
          ]
        },
        {
          icon: '👩‍👩‍👧',
          lines: [
            { ar: 'الطَّالِبَاتُ ذَهَبْنَ إِلَى المَكْتَبَةِ.' },
            { ar: 'المُدَرِّسَاتُ جَلَسْنَ.' }
          ]
        },
        {
          icon: '💡',
          lines: [
            { ar: 'Mixed group of men + women → use masculine plural ذَهَبُوا' }
          ]
        }
      ],
      keyPoints: [
        'ـُوا = masculine plural (sound plural ending)',
        'ـْنَ = feminine plural',
        'Mixed groups default to masculine'
      ]
    },
    {
      title: 'Read the Story',
      pattern: 'A Family Day',
      intro: 'Read this passage with dual and plural verb forms woven in naturally.',
      groups: [
        {
          icon: '🌅',
          lines: [
            { ar: 'ذَهَبَ أَبِي وَأُمِّي إِلَى السُّوقِ. ذَهَبَا مَعًا.' }
          ]
        },
        {
          icon: '👨‍👩‍👧',
          lines: [
            { ar: 'ذَهَبَ إِخْوَتِي إِلَى المَدْرَسَةِ. ذَهَبُوا صَبَاحًا.' }
          ]
        },
        {
          icon: '👩‍👩‍👧',
          lines: [
            { ar: 'ذَهَبَتْ أَخَوَاتِي إِلَى الجَامِعَةِ. ذَهَبْنَ بَعْدَ الظُّهْرِ.' }
          ]
        },
        {
          icon: '🏠',
          lines: [
            { ar: 'فِي المَسَاءِ، رَجَعُوا جَمِيعًا إِلَى البَيْتِ.' }
          ]
        }
      ],
      keyPoints: [
        'ذَهَبَا = the two of them (father + mother) went',
        'ذَهَبُوا = they (brothers) went',
        'ذَهَبْنَ = they (sisters) went'
      ]
    },
    {
      titleArabic: 'تَمْرِين',
      title: 'Practice',
      pattern: 'Dual and plural past tense',
      intro: 'Type the Arabic. Match the verb to the subject — dual or plural, masculine or feminine.',
      tip: 'Tip: two people → ـَا (m.) or ـَتَا (f.). Three+ → ـُوا (m.) or ـْنَ (f.).',
      exercise: [
        {
          icon: '👨‍👦',
          prompt: 'Type: "The two boys went."',
          ideal: 'الوَلَدَانِ ذَهَبَا.',
          accepts: ['الولدان ذهبا', 'الوَلَدَانِ ذَهَبَا', 'الولدان ذهبا.', 'الوَلَدَانِ ذَهَبَا.']
        },
        {
          icon: '👨‍👨‍👦',
          prompt: 'Type: "The students (m.) entered."',
          ideal: 'الطُّلَّابُ دَخَلُوا.',
          accepts: ['الطلاب دخلوا', 'الطُّلَّابُ دَخَلُوا', 'الطلاب دخلوا.', 'الطُّلَّابُ دَخَلُوا.']
        },
        {
          icon: '👩‍👩‍👧',
          prompt: 'Type: "The students (f.) went."',
          ideal: 'الطَّالِبَاتُ ذَهَبْنَ.',
          accepts: ['الطالبات ذهبن', 'الطَّالِبَاتُ ذَهَبْنَ', 'الطالبات ذهبن.', 'الطَّالِبَاتُ ذَهَبْنَ.']
        },
        {
          icon: '👨‍👦',
          prompt: 'Type: "Two teachers (m.) sat."',
          ideal: 'مُدَرِّسَانِ جَلَسَا.',
          accepts: ['مدرسان جلسا', 'مُدَرِّسَانِ جَلَسَا', 'مدرسان جلسا.', 'مُدَرِّسَانِ جَلَسَا.']
        }
      ]
    }
  ],

  vocab: [
    { ar: 'ذَهَبَا', trans: 'dhahabā', meaning: 'They (two, m.) went', type: 'Verb' },
    { ar: 'ذَهَبَتَا', trans: 'dhahabatā', meaning: 'They (two, f.) went', type: 'Verb' },
    { ar: 'ذَهَبُوا', trans: 'dhahabū', meaning: 'They (m. pl.) went', type: 'Verb' },
    { ar: 'ذَهَبْنَ', trans: 'dhahabna', meaning: 'They (f. pl.) went', type: 'Verb' },
    { ar: 'هُمَا', trans: 'humā', meaning: 'They (two)', type: 'Pronoun' },
    { ar: 'هُمْ', trans: 'hum', meaning: 'They (m. pl.)', type: 'Pronoun' },
    { ar: 'هُنَّ', trans: 'hunna', meaning: 'They (f. pl.)', type: 'Pronoun' },
    { ar: 'وَلَدَانِ', trans: 'waladāni', meaning: 'Two boys (dual)', type: 'Noun' },
    { ar: 'طُلَّابٌ', trans: 'ṭullābun', meaning: 'Students (pl.)', type: 'Noun' },
    { ar: 'إِخْوَةٌ', trans: 'ikhwatun', meaning: 'Brothers / siblings', type: 'Noun' },
    { ar: 'جَمِيعًا', trans: 'jamīʿan', meaning: 'All together', type: 'Adverb' },
    { ar: 'مَعًا', trans: 'maʿan', meaning: 'Together', type: 'Adverb' }
  ],

  grammarBlocks: [
    {
      title: 'The Dual Form (المثنى)',
      content: '<p>Arabic has a special verb form for exactly <strong>two people</strong>. Add <strong>ـَا</strong> for masculine dual and <strong>ـَتَا</strong> for feminine dual.</p><ul><li><strong>الوَلَدَانِ ذَهَبَا</strong> — The two boys went.</li><li><strong>البِنْتَانِ ذَهَبَتَا</strong> — The two girls went.</li></ul>',
      rule: 'Dual m.: ـَا · Dual f.: ـَتَا'
    },
    {
      title: 'The Plural Form (الجمع)',
      content: '<p>For three or more people, Arabic distinguishes masculine and feminine plural:</p><ul><li><strong>ـُوا</strong> for masculine plural</li><li><strong>ـْنَ</strong> for feminine plural</li></ul><ul><li><strong>الطُّلَّابُ ذَهَبُوا</strong> — The students (m.) went.</li><li><strong>الطَّالِبَاتُ ذَهَبْنَ</strong> — The students (f.) went.</li></ul>',
      rule: 'Plural m.: ـُوا · Plural f.: ـْنَ'
    },
    {
      title: 'Mixed Groups Default to Masculine',
      content: '<p>If a group contains both men and women, Arabic uses the <strong>masculine</strong> form.</p><ul><li><strong>خَالِدٌ وَآمِنَةُ ذَهَبَا</strong> — Khalid and Aminah went. (mixed dual → masc.)</li><li><strong>الطُّلَّابُ وَالطَّالِبَاتُ ذَهَبُوا</strong> — The students went. (mixed pl. → masc.)</li></ul>',
      rule: 'Any group with at least one male → use masculine form.'
    }
  ],

  comprehension: {
    title: 'A Full Household',
    arabic: 'أُسْرَتِي كَبِيرَةٌ. لِي أَبٌ وَأُمٌّ وَثَلَاثَةُ إِخْوَةٍ وَأُخْتَانِ. ذَهَبَ أَبِي وَأُمِّي إِلَى السُّوقِ صَبَاحًا. ذَهَبَا مَعًا. ذَهَبَ إِخْوَتِي إِلَى المَدْرَسَةِ. ذَهَبُوا فِي السَّاعَةِ السَّابِعَةِ. ذَهَبَتْ أُخْتَايَ إِلَى الجَامِعَةِ. ذَهَبَتَا بَعْدَ الظُّهْرِ. أَمَّا أَنَا فَذَهَبْتُ إِلَى المَكْتَبَةِ. فِي المَسَاءِ، رَجَعُوا جَمِيعًا إِلَى البَيْتِ وَجَلَسْنَا مَعًا وَقَرَأْنَا القِصَّةَ.',
    english: 'My family is large. I have a father, a mother, three brothers, and two sisters. My father and mother went to the market in the morning. They went together. My brothers went to the school. They went at seven o\'clock. My two sisters went to the university. They went after noon. As for me, I went to the library. In the evening, they all returned home and we sat together and read the story.',
    questions: [
      {
        text: 'Where did the father and mother go?',
        options: ['To school', 'To the market', 'To the university', 'To the library'],
        correct: 'To the market'
      },
      {
        text: 'How many brothers does the narrator have?',
        options: ['Two', 'Three', 'Four', 'One'],
        correct: 'Three'
      },
      {
        text: 'Where did the two sisters go?',
        options: ['To the market', 'To school', 'To the university', 'To the library'],
        correct: 'To the university'
      },
      {
        text: 'What does رَجَعُوا mean?',
        options: ['They (two) returned', 'They (m. pl.) returned', 'I returned', 'We returned'],
        correct: 'They (m. pl.) returned'
      }
    ]
  },

  quizQuestions: {
    multipleChoice: [
      {
        prompt: 'What does ذَهَبَا mean?',
        options: ['He went', 'She went', 'They (two, m.) went', 'We went'],
        correct: 2
      },
      {
        prompt: 'What does ذَهَبُوا mean?',
        options: ['They (two) went', 'They (m. pl.) went', 'I went', 'You went'],
        correct: 1
      },
      {
        prompt: 'What suffix marks the feminine plural past tense?',
        options: ['ـُوا', 'ـَا', 'ـَتَا', 'ـْنَ'],
        correct: 3
      },
      {
        prompt: 'Choose: "The students (f.) sat."',
        options: ['الطَّالِبَاتُ جَلَسُوا', 'الطَّالِبَاتُ جَلَسْنَ', 'الطُّلَّابُ جَلَسْنَ', 'الطُّلَّابُ جَلَسَتْ'],
        correct: 1
      },
      {
        prompt: 'What form is used for a mixed group of men and women?',
        options: ['Feminine plural', 'Masculine plural', 'Feminine dual', 'It depends'],
        correct: 1
      },
      {
        prompt: 'Choose: "Khalid and Hamid entered."',
        options: ['خَالِدٌ وَحَامِدٌ دَخَلُوا', 'خَالِدٌ وَحَامِدٌ دَخَلَا', 'خَالِدٌ وَحَامِدٌ دَخَلَتَا', 'خَالِدٌ وَحَامِدٌ دَخَلْنَ'],
        correct: 1
      }
    ],
    typing: [
      {
        prompt: 'Type: "The two boys went."',
        ideal: 'الوَلَدَانِ ذَهَبَا',
        accepts: ['الولدان ذهبا', 'الوَلَدَانِ ذَهَبَا', 'الولدان ذهبا.', 'الوَلَدَانِ ذَهَبَا.']
      },
      {
        prompt: 'Type: "The students (m. pl.) went."',
        ideal: 'الطُّلَّابُ ذَهَبُوا',
        accepts: ['الطلاب ذهبوا', 'الطُّلَّابُ ذَهَبُوا', 'الطلاب ذهبوا.', 'الطُّلَّابُ ذَهَبُوا.']
      }
    ],
    conceptCheck: [
      {
        statement: 'Arabic has a special verb form for exactly two people called the dual (المثنى).',
        correct: true,
        explanation: 'ذَهَبَا means "the two of them (m.) went." It is neither singular nor plural — it is dual.'
      },
      {
        statement: 'The feminine plural suffix is ـُوا, the same as the masculine plural.',
        correct: false,
        explanation: 'Feminine plural uses ـْنَ (e.g., ذَهَبْنَ). Masculine plural uses ـُوا (e.g., ذَهَبُوا).'
      },
      {
        statement: 'When a group contains both males and females, Arabic uses the feminine plural form.',
        correct: false,
        explanation: 'Mixed groups default to the masculine form. Even one male in a group of females makes the verb masculine.'
      }
    ]
  },

  practiceQuestions: []
};
