/* ============================================================
   b1-lesson17.js - Lesson 17 Data
   ============================================================ */

const LESSON_DATA = {
  book: 'book1',
  lessonNum: 17,
  titleArabic: 'الفِعْلُ المُضَارِعُ',
  titleEnglish: 'The Present Tense',
  summary: 'Learn the Arabic present tense (المضارع). The pattern يَفْعَلُ means "he does/is doing." Master the prefix-suffix system for all 14 pronoun forms and use it with common everyday verbs.',
  nextLesson: null,
  passMark: 8,
  totalQuestions: 11,

  guidedPattern: 'يَذْهَبُ',
  guidedIntro: 'Arabic present tense verbs start with a prefix letter (يـ, تـ, أـ, نـ) that tells you who is doing the action right now.',
  reviewVocabAtEnd: true,
  milestoneAfterPage: 4,

  guidedPages: [
    {
      titleArabic: 'الفِعْلُ المُضَارِعُ',
      title: 'Lesson Seventeen',
      pattern: 'يَفْعَلُ — تَفْعَلُ',
      intro: 'Start with a dialogue in the present tense. Listen for يَذْهَبُ (he goes) vs. past ذَهَبَ (he went).',
      groups: [
        { type: 'scene', text: 'Every morning: Khalid describes his family\'s daily routine.' },
        {
          icon: '🏫',
          role: 'teacher',
          lines: [
            { label: 'حامد', ar: 'أَيْنَ يَذْهَبُ أَخُوكَ كُلَّ يَوْمٍ؟', isPrompt: true },
            { label: 'خالد', ar: 'يَذْهَبُ إِلَى المَدْرَسَةِ.' }
          ]
        },
        {
          icon: '🏥',
          role: 'student',
          lines: [
            { label: 'حامد', ar: 'وَأَيْنَ تَذْهَبُ أُخْتُكَ؟', isPrompt: true },
            { label: 'خالد', ar: 'تَذْهَبُ إِلَى المُسْتَشْفَى. هِيَ طَبِيبَةٌ.' }
          ]
        },
        {
          icon: '📖',
          role: 'teacher',
          lines: [
            { label: 'حامد', ar: 'مَاذَا تَقْرَأُ فِي المَدْرَسَةِ؟', isPrompt: true },
            { label: 'خالد', ar: 'نَقْرَأُ القُرْآنَ وَالكُتُبَ.' }
          ]
        }
      ],
      exerciseIntro: 'Answer from the dialogue',
      exercise: [
        {
          icon: '🏫',
          prompt: 'أَيْنَ يَذْهَبُ الأَخُ؟',
          placeholder: 'يَذْهَبُ ...',
          ideal: 'يَذْهَبُ إِلَى المَدْرَسَةِ.',
          accepts: ['يذهب إلى المدرسة', 'يَذْهَبُ إِلَى المَدْرَسَةِ', 'يذهب إلى المدرسة.', 'يَذْهَبُ إِلَى المَدْرَسَةِ.']
        },
        {
          icon: '🏥',
          prompt: 'أَيْنَ تَذْهَبُ الأُخْتُ؟',
          placeholder: 'تَذْهَبُ ...',
          ideal: 'تَذْهَبُ إِلَى المُسْتَشْفَى.',
          accepts: ['تذهب إلى المستشفى', 'تَذْهَبُ إِلَى المُسْتَشْفَى', 'تذهب إلى المستشفى.', 'تَذْهَبُ إِلَى المُسْتَشْفَى.']
        }
      ],
      keyPoints: [
        'يَذْهَبُ = he goes (present) vs. ذَهَبَ = he went (past)',
        'تَذْهَبُ = she goes',
        'نَقْرَأُ = we read'
      ]
    },
    {
      title: 'Present Tense Prefixes',
      pattern: 'يـ / تـ / أـ / نـ',
      intro: 'The present tense has four prefix letters. The prefix identifies the doer — just like the suffix did in the past tense.',
      cards: [
        { icon: '👤', ar: 'يَذْهَبُ — he goes' },
        { icon: '👤', ar: 'تَذْهَبُ — she goes / you (m.) go' },
        { icon: '👤', ar: 'تَذْهَبِينَ — you (f.) go' },
        { icon: '👤', ar: 'أَذْهَبُ — I go' },
        { icon: '👥', ar: 'نَذْهَبُ — we go' },
        { icon: '👥', ar: 'يَذْهَبُونَ — they (m.) go' }
      ],
      keyPoints: [
        'يـ = he / they (m.)',
        'تـ = she / you',
        'أـ = I',
        'نـ = we'
      ]
    },
    {
      title: 'Past vs Present',
      pattern: 'ذَهَبَ (past) → يَذْهَبُ (present)',
      intro: 'Compare past and present forms side by side. Past uses suffixes; present uses prefixes.',
      groups: [
        {
          icon: '👤',
          lines: [
            { ar: 'ذَهَبَ — he went (past)' },
            { ar: 'يَذْهَبُ — he goes / is going (present)' }
          ]
        },
        {
          icon: '👤',
          lines: [
            { ar: 'ذَهَبَتْ — she went (past)' },
            { ar: 'تَذْهَبُ — she goes (present)' }
          ]
        },
        {
          icon: '👤',
          lines: [
            { ar: 'ذَهَبْتُ — I went (past)' },
            { ar: 'أَذْهَبُ — I go (present)' }
          ]
        },
        {
          icon: '👥',
          lines: [
            { ar: 'ذَهَبْنَا — we went (past)' },
            { ar: 'نَذْهَبُ — we go (present)' }
          ]
        }
      ],
      keyPoints: [
        'Past: root + suffix (ذَهَبَ, ذَهَبْتُ)',
        'Present: prefix + root (يَذْهَبُ, أَذْهَبُ)',
        'The root letters (ذ ه ب) stay the same'
      ]
    },
    {
      title: 'Pick the Right Form',
      pattern: 'Present tense prefix',
      intro: 'Tap the correct present-tense verb for each pronoun.',
      wordBank: ['يَذْهَبُ', 'تَذْهَبُ', 'أَذْهَبُ', 'نَذْهَبُ'],
      tapFill: [
        { parts: ['هُوَ ', null, ' إِلَى المَدْرَسَةِ'], answer: 'يَذْهَبُ' },
        { parts: ['هِيَ ', null, ' إِلَى السُّوقِ'], answer: 'تَذْهَبُ' },
        { parts: ['أَنْتَ ', null, ' إِلَى المَسْجِدِ'], answer: 'تَذْهَبُ' },
        { parts: ['أَنَا ', null, ' إِلَى البَيْتِ'], answer: 'أَذْهَبُ' },
        { parts: ['نَحْنُ ', null, ' إِلَى الجَامِعَةِ'], answer: 'نَذْهَبُ' },
        { parts: ['هُمْ ', null, ' إِلَى المَلْعَبِ'], answer: 'يَذْهَبُونَ' }
      ],
      keyPoints: [
        'هُوَ → يَـ · هِيَ → تَـ',
        'أَنْتَ → تَـ · أَنَا → أَـ',
        'نَحْنُ → نَـ'
      ]
    },
    {
      title: 'Common Present Tense Verbs',
      pattern: 'يَفْعَلُ — يَدْخُلُ — يَجْلِسُ',
      intro: 'The same prefix pattern works for all verbs. Learn these common ones.',
      groups: [
        {
          icon: '🚪',
          lines: [
            { ar: 'يَدْخُلُ — he enters · تَدْخُلُ — she enters' },
            { ar: 'أَدْخُلُ — I enter · نَدْخُلُ — we enter' }
          ]
        },
        {
          icon: '🪑',
          lines: [
            { ar: 'يَجْلِسُ — he sits · تَجْلِسُ — she sits' },
            { ar: 'أَجْلِسُ — I sit · نَجْلِسُ — we sit' }
          ]
        },
        {
          icon: '📖',
          lines: [
            { ar: 'يَقْرَأُ — he reads · تَقْرَأُ — she reads' },
            { ar: 'أَقْرَأُ — I read · نَقْرَأُ — we read' }
          ]
        },
        {
          icon: '✍️',
          lines: [
            { ar: 'يَكْتُبُ — he writes · تَكْتُبُ — she writes' },
            { ar: 'أَكْتُبُ — I write · نَكْتُبُ — we write' }
          ]
        }
      ],
      keyPoints: [
        'يَدْخُلُ = he enters (present)',
        'يَجْلِسُ = he sits',
        'يَقْرَأُ = he reads',
        'يَكْتُبُ = he writes'
      ]
    },
    {
      title: 'Daily Routine Reading',
      pattern: 'كُلَّ يَوْمٍ — every day',
      intro: 'Read about a typical day, all in the present tense.',
      groups: [
        {
          icon: '🌅',
          lines: [
            { ar: 'كُلَّ يَوْمٍ، أَذْهَبُ إِلَى المَدْرَسَةِ صَبَاحًا.' }
          ]
        },
        {
          icon: '📖',
          lines: [
            { ar: 'أَقْرَأُ الدَّرْسَ وَأَكْتُبُ فِي الدَّفْتَرِ.' }
          ]
        },
        {
          icon: '👨',
          lines: [
            { ar: 'أَبِي يَذْهَبُ إِلَى عَمَلِهِ كُلَّ يَوْمٍ.' }
          ]
        },
        {
          icon: '👩',
          lines: [
            { ar: 'أُمِّي تَذْهَبُ إِلَى السُّوقِ يَوْمَ الجُمُعَةِ.' }
          ]
        },
        {
          icon: '👥',
          lines: [
            { ar: 'فِي المَسَاءِ، نَجْلِسُ مَعًا وَنَقْرَأُ.' }
          ]
        }
      ],
      keyPoints: [
        'كُلَّ يَوْمٍ = every day',
        'يَوْمَ الجُمُعَةِ = on Friday',
        'The present tense describes habits and routines'
      ]
    },
    {
      titleArabic: 'تَمْرِين',
      title: 'Practice',
      pattern: 'Present tense',
      intro: 'Type the Arabic present-tense verb with the correct prefix.',
      tip: 'Tip: يـ for he, تـ for she/you, أـ for I, نـ for we.',
      exercise: [
        {
          icon: '👤',
          prompt: 'Type: "He goes."',
          ideal: 'يَذْهَبُ',
          accepts: ['يذهب', 'يَذْهَبُ']
        },
        {
          icon: '👤',
          prompt: 'Type: "I go."',
          ideal: 'أَذْهَبُ',
          accepts: ['أذهب', 'أَذْهَبُ']
        },
        {
          icon: '👤',
          prompt: 'Type: "She reads."',
          ideal: 'تَقْرَأُ',
          accepts: ['تقرأ', 'تَقْرَأُ']
        },
        {
          icon: '👥',
          prompt: 'Type: "We write."',
          ideal: 'نَكْتُبُ',
          accepts: ['نكتب', 'نَكْتُبُ']
        }
      ]
    }
  ],

  vocab: [
    { ar: 'يَذْهَبُ', trans: 'yadhhabu', meaning: 'He goes', type: 'Verb (Pres.)' },
    { ar: 'تَذْهَبُ', trans: 'tadhhabu', meaning: 'She goes / You (m.) go', type: 'Verb (Pres.)' },
    { ar: 'أَذْهَبُ', trans: 'adhhabu', meaning: 'I go', type: 'Verb (Pres.)' },
    { ar: 'نَذْهَبُ', trans: 'nadhhabu', meaning: 'We go', type: 'Verb (Pres.)' },
    { ar: 'يَدْخُلُ', trans: 'yadkhulu', meaning: 'He enters', type: 'Verb (Pres.)' },
    { ar: 'يَجْلِسُ', trans: 'yajlisu', meaning: 'He sits', type: 'Verb (Pres.)' },
    { ar: 'يَقْرَأُ', trans: 'yaqraʾu', meaning: 'He reads', type: 'Verb (Pres.)' },
    { ar: 'يَكْتُبُ', trans: 'yaktubu', meaning: 'He writes', type: 'Verb (Pres.)' },
    { ar: 'يَخْرُجُ', trans: 'yakhruju', meaning: 'He leaves', type: 'Verb (Pres.)' },
    { ar: 'كُلَّ يَوْمٍ', trans: 'kulla yawmin', meaning: 'Every day', type: 'Expression' },
    { ar: 'صَبَاحًا', trans: 'ṣabāḥan', meaning: 'In the morning', type: 'Adverb' },
    { ar: 'مَسَاءً', trans: 'masāʾan', meaning: 'In the evening', type: 'Adverb' }
  ],

  grammarBlocks: [
    {
      title: 'What Is the Present Tense (المضارع)?',
      content: '<p>The present tense (<strong>المُضَارِع</strong>) describes actions happening now or regularly. Unlike the past tense (which uses suffixes), the present tense uses <strong>prefixes</strong> to show who is doing the action.</p><ul><li><strong>يَذْهَبُ</strong> = he goes / he is going</li><li><strong>تَذْهَبُ</strong> = she goes / you (m.) go</li><li><strong>أَذْهَبُ</strong> = I go</li><li><strong>نَذْهَبُ</strong> = we go</li></ul>',
      rule: 'Prefix (يـ/تـ/أـ/نـ) + verb root + ـُ = present tense.'
    },
    {
      title: 'The Four Prefix Letters',
      content: '<p>These four letters are the key to the present tense:</p><ul><li><strong>يـ</strong> (yāʾ) — for "he" and "they" (masculine)</li><li><strong>تـ</strong> (tāʾ) — for "she" and "you"</li><li><strong>أـ</strong> (hamza) — for "I"</li><li><strong>نـ</strong> (nūn) — for "we"</li></ul><p>They are remembered by the word <strong>أَنَيْتُ</strong> (anaytu).</p>',
      rule: 'يـ = he/they · تـ = she/you · أـ = I · نـ = we'
    },
    {
      title: 'Past vs Present: Key Difference',
      content: '<p><strong>Past tense</strong>: the ending changes (ذَهَبَ → ذَهَبْتُ → ذَهَبُوا).<br><strong>Present tense</strong>: the beginning changes (يَذْهَبُ → أَذْهَبُ → نَذْهَبُ).</p><p>The root letters (ذ-ه-ب) remain the same in both tenses.</p>',
      rule: 'Past: suffix system. Present: prefix system. Same root throughout.'
    }
  ],

  comprehension: {
    title: 'Our Daily Routine',
    arabic: 'كُلَّ يَوْمٍ، أَسْتَيْقِظُ فِي الصَّبَاحِ. أَذْهَبُ إِلَى المَدْرَسَةِ مَعَ إِخْوَتِي. نَدْخُلُ الفَصْلَ وَنَجْلِسُ. نَقْرَأُ القُرْآنَ وَنَكْتُبُ الدَّرْسَ. أَبِي يَذْهَبُ إِلَى عَمَلِهِ. أُمِّي تَبْقَى فِي البَيْتِ. فِي المَسَاءِ، يَرْجِعُ أَبِي مِنْ عَمَلِهِ. نَجْلِسُ مَعًا وَنَتَحَدَّثُ. هٰذَا يَوْمُنَا كُلَّ يَوْمٍ.',
    english: 'Every day, I wake up in the morning. I go to school with my brothers. We enter the classroom and sit. We read the Qurʾan and write the lesson. My father goes to his work. My mother stays at home. In the evening, my father returns from his work. We sit together and talk. This is our day, every day.',
    questions: [
      {
        text: 'Where does "I" go every morning?',
        options: ['To the market', 'To the mosque', 'To school', 'To work'],
        correct: 'To school'
      },
      {
        text: 'What does the father do?',
        options: ['Stays at home', 'Goes to work', 'Goes to school', 'Goes to the market'],
        correct: 'Goes to work'
      },
      {
        text: 'What happens in the evening?',
        options: ['They go to the market', 'The father returns and they sit together', 'They go to the mosque', 'They read alone'],
        correct: 'The father returns and they sit together'
      },
      {
        text: 'What does نَجْلِسُ mean?',
        options: ['He sits', 'She sits', 'I sit', 'We sit'],
        correct: 'We sit'
      }
    ]
  },

  quizQuestions: {
    multipleChoice: [
      {
        prompt: 'What does يَذْهَبُ mean?',
        options: ['He went', 'He goes', 'I go', 'We go'],
        correct: 1
      },
      {
        prompt: 'What prefix is used for "I" in the present tense?',
        options: ['يـ', 'تـ', 'أـ', 'نـ'],
        correct: 2
      },
      {
        prompt: 'What does أَذْهَبُ mean?',
        options: ['He goes', 'She goes', 'I go', 'We go'],
        correct: 2
      },
      {
        prompt: 'Choose: "He reads."',
        options: ['يَقْرَأُ', 'تَقْرَأُ', 'أَقْرَأُ', 'نَقْرَأُ'],
        correct: 0
      },
      {
        prompt: 'Choose: "We sit."',
        options: ['يَجْلِسُ', 'تَجْلِسُ', 'أَجْلِسُ', 'نَجْلِسُ'],
        correct: 3
      },
      {
        prompt: 'What is the main difference between past and present tense?',
        options: ['Past uses prefixes, present uses suffixes', 'Past uses suffixes, present uses prefixes', 'They are the same', 'Present has no prefixes'],
        correct: 1
      }
    ],
    typing: [
      {
        prompt: 'Type: "He goes."',
        ideal: 'يَذْهَبُ',
        accepts: ['يذهب', 'يَذْهَبُ']
      },
      {
        prompt: 'Type: "We read."',
        ideal: 'نَقْرَأُ',
        accepts: ['نقرأ', 'نَقْرَأُ']
      }
    ],
    conceptCheck: [
      {
        statement: 'Arabic present-tense verbs use prefixes (letters at the beginning) to show who is doing the action.',
        correct: true,
        explanation: 'يَذْهَبُ (he goes), تَذْهَبُ (she goes), أَذْهَبُ (I go), نَذْهَبُ (we go) — the prefix changes.'
      },
      {
        statement: 'The prefix تـ is only used for "she" in the present tense.',
        correct: false,
        explanation: 'تـ is used for both "she" (تَذْهَبُ = she goes) and "you" masculine (تَذْهَبُ = you m. go). Context clarifies the meaning.'
      },
      {
        statement: 'The root letters of a verb (like ذ-ه-ب) stay the same in both past and present tenses.',
        correct: true,
        explanation: 'Past: ذَهَبَ. Present: يَذْهَبُ. The root ذ-ه-ب remains intact — only the beginning/ending changes.'
      }
    ]
  },

  practiceQuestions: []
};
