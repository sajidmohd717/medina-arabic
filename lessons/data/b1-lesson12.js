/* ============================================================
   b1-lesson12.js - Lesson 12 Data
   ============================================================ */

const LESSON_DATA = {
  book: 'book1',
  lessonNum: 12,
  titleArabic: 'الَّذِي — الَّتِي',
  titleEnglish: 'Relative Pronouns',
  summary: 'Learn how Arabic links a definite noun to a describing sentence using الَّذِي and الَّتِي. Say "the student who...", "the room which...", and build longer, clearer sentences.',
  nextLesson: 'b1-lesson13.html',
  passMark: 8,
  totalQuestions: 11,

  guidedPattern: 'الَّذِي',
  guidedIntro: 'الَّذِي (masc.) and الَّتِي (fem.) connect a definite noun to a sentence that describes it — like "who" or "which" in English.',
  reviewVocabAtEnd: true,
  milestoneAfterPage: 4,

  guidedPages: [
    {
      titleArabic: 'الَّذِي — الَّتِي',
      title: 'Lesson Twelve',
      pattern: 'الطَّالِبُ الَّذِي ...',
      intro: 'Start with a dialogue using relative pronouns. Listen for الَّذِي after masculine nouns and الَّتِي after feminine nouns.',
      groups: [
        { type: 'scene', text: 'At school: the teacher is asking about students.' },
        {
          icon: '🏫',
          role: 'teacher',
          lines: [
            { label: 'المدرس', ar: 'أَيْنَ الطَّالِبُ الَّذِي كَانَ هُنَا؟', isPrompt: true },
            { label: 'حامد', ar: 'الطَّالِبُ الَّذِي كَانَ هُنَا ذَهَبَ إِلَى البَيْتِ.' }
          ]
        },
        {
          icon: '👩‍⚕️',
          role: 'student',
          lines: [
            { label: 'المدرس', ar: 'وَمَنِ الطَّبِيبَةُ الَّتِي جَاءَتْ؟', isPrompt: true },
            { label: 'حامد', ar: 'الطَّبِيبَةُ الَّتِي جَاءَتْ هِيَ آمِنَةُ.' }
          ]
        },
        {
          icon: '📖',
          role: 'teacher',
          lines: [
            { label: 'حامد', ar: 'أَيْنَ الكِتَابُ الَّذِي عَلَى المَكْتَبِ؟', isPrompt: true },
            { label: 'المدرس', ar: 'الكِتَابُ الَّذِي عَلَى المَكْتَبِ لِي.' }
          ]
        },
        {
          icon: '🚪',
          role: 'student',
          lines: [
            { label: 'حامد', ar: 'أَيْنَ الغُرْفَةُ الَّتِي فِيهَا خَالِدٌ؟', isPrompt: true },
            { label: 'المدرس', ar: 'الغُرْفَةُ الَّتِي فِيهَا خَالِدٌ قَرِيبَةٌ.' }
          ]
        }
      ],
      exerciseIntro: 'Answer from the dialogue',
      exercise: [
        {
          icon: '🏫',
          prompt: 'أَيْنَ الطَّالِبُ الَّذِي كَانَ هُنَا؟',
          placeholder: 'ذَهَبَ ...',
          ideal: 'ذَهَبَ إِلَى البَيْتِ.',
          accepts: ['ذهب إلى البيت', 'ذَهَبَ إِلَى البَيْتِ', 'ذهب إلى البيت.', 'ذَهَبَ إِلَى البَيْتِ.']
        },
        {
          icon: '👩‍⚕️',
          prompt: 'مَنِ الطَّبِيبَةُ الَّتِي جَاءَتْ؟',
          placeholder: 'هِيَ ...',
          ideal: 'هِيَ آمِنَةُ.',
          accepts: ['هي آمنة', 'هِيَ آمِنَةُ', 'هي آمنة.', 'هِيَ آمِنَةُ.']
        }
      ],
      keyPoints: [
        'الَّذِي = who/which/that (masculine)',
        'الَّتِي = who/which/that (feminine)',
        'Both come after a DEFINITE noun'
      ]
    },
    {
      title: 'الَّذِي versus الَّتِي',
      pattern: 'Match the gender of the noun',
      intro: 'Tap the correct relative pronoun. الَّذِي for masculine nouns, الَّتِي for feminine nouns.',
      wordBank: ['الَّذِي', 'الَّتِي'],
      tapFill: [
        { parts: ['الكِتَابُ ', null, ' عَلَى المَكْتَبِ'], answer: 'الَّذِي' },
        { parts: ['الحَقِيبَةُ ', null, ' عَلَى الكُرْسِيِّ'], answer: 'الَّتِي' },
        { parts: ['الطَّالِبُ ', null, ' مَرِيضٌ'], answer: 'الَّذِي' },
        { parts: ['الغُرْفَةُ ', null, ' فِيهَا خَالِدٌ'], answer: 'الَّتِي' },
        { parts: ['القَلَمُ ', null, ' فِي يَدِي'], answer: 'الَّذِي' },
        { parts: ['المَدْرَسَةُ ', null, ' كَبِيرَةٌ'], answer: 'الَّتِي' },
        { parts: ['البَابُ ', null, ' مَفْتُوحٌ'], answer: 'الَّذِي' },
        { parts: ['السَّيَّارَةُ ', null, ' سَرِيعَةٌ'], answer: 'الَّتِي' }
      ],
      keyPoints: [
        'الَّذِي → after masculine noun',
        'الَّتِي → after feminine noun'
      ]
    },
    {
      title: 'Only After Definite Nouns',
      pattern: 'Definite noun + relative pronoun + sentence',
      intro: 'الَّذِي and الَّتِي are only used after a DEFINITE noun (usually with الـ). For indefinite nouns, describe directly.',
      groups: [
        {
          icon: '📖',
          lines: [
            { ar: 'طَالِبٌ مَرِيضٌ — a sick student (indefinite → no relative pronoun)' },
            { ar: 'الطَّالِبُ الَّذِي مَرِيضٌ — the student who is sick (definite → use الَّذِي)' }
          ]
        },
        {
          icon: '🚗',
          lines: [
            { ar: 'سَيَّارَةٌ سَرِيعَةٌ — a fast car (indefinite)' },
            { ar: 'السَّيَّارَةُ الَّتِي سَرِيعَةٌ — the car which is fast (definite)' }
          ]
        },
        {
          icon: '🏠',
          lines: [
            { ar: 'بَيْتٌ كَبِيرٌ — a big house (simple adjective)' },
            { ar: 'البَيْتُ الَّذِي كَبِيرٌ — the house which is big (relative clause)' }
          ]
        }
      ],
      keyPoints: [
        'Indefinite: noun + adjective (no relative pronoun)',
        'Definite: noun + الَّذِي/الَّتِي + sentence'
      ]
    },
    {
      title: 'Read the Pattern',
      pattern: 'الَّذِي / الَّتِي in sentences',
      intro: 'Read these sentences. Each uses a relative pronoun to add more information about the noun.',
      groups: [
        {
          icon: '👨‍🏫',
          lines: [
            { ar: 'المُدَرِّسُ الَّذِي فِي الفَصْلِ مَشْغُولٌ.' }
          ]
        },
        {
          icon: '👦',
          lines: [
            { ar: 'الطَّالِبُ الَّذِي عَلَى الكُرْسِيِّ مَرِيضٌ.' }
          ]
        },
        {
          icon: '👩‍⚕️',
          lines: [
            { ar: 'الطَّبِيبَةُ الَّتِي فِي المُسْتَشْفَى مَشْغُولَةٌ.' }
          ]
        },
        {
          icon: '🎒',
          lines: [
            { ar: 'الحَقِيبَةُ الَّتِي عَلَى المَكْتَبِ لِلطَّالِبِ.' }
          ]
        },
        {
          icon: '🔑',
          lines: [
            { ar: 'المِفْتَاحُ الَّذِي فِي الحَقِيبَةِ لِخَالِدٍ.' }
          ]
        }
      ],
      keyPoints: [
        'الطَّالِبُ الَّذِي عَلَى الكُرْسِيِّ = the student who is on the chair',
        'الحَقِيبَةُ الَّتِي عَلَى المَكْتَبِ = the bag which is on the desk'
      ]
    },
    {
      title: 'More Reading',
      pattern: 'Longer sentences with relative clauses',
      intro: 'Relative pronouns let you build richer, more complex sentences.',
      groups: [
        {
          icon: '🚶',
          lines: [
            { ar: 'ذَهَبَ الطَّالِبُ الَّذِي مَرِيضٌ إِلَى البَيْتِ.' }
          ]
        },
        {
          icon: '📝',
          lines: [
            { ar: 'كَتَبَ المُدَرِّسُ الَّذِي فِي الفَصْلِ الدَّرْسَ.' }
          ]
        },
        {
          icon: '🏥',
          lines: [
            { ar: 'الطَّبِيبَةُ الَّتِي جَاءَتْ مِنَ الهِنْدِ مَاهِرَةٌ.' }
          ]
        },
        {
          icon: '🕌',
          lines: [
            { ar: 'أَيْنَ الغُرْفَةُ الَّتِي فِيهَا خَالِدٌ؟' }
          ]
        },
        {
          icon: '🏘️',
          lines: [
            { ar: 'البَيْتُ الَّذِي قَرِيبٌ مِنَ المَسْجِدِ كَبِيرٌ.' }
          ]
        }
      ],
      keyPoints: [
        'Relative clause = more detail about the noun',
        'The sentence after الَّذِي/الَّتِي is called صِلَة (ṣilah)'
      ]
    },
    {
      title: 'Adjectives that Work with Relative Pronouns',
      pattern: 'مَرِيض · غَائِب · مَشْغُول',
      intro: 'These common adjectives are used in relative clauses to describe people.',
      cards: [
        { icon: '🤒', ar: 'مَرِيضٌ | مَرِيضَةٌ — sick' },
        { icon: '🚫', ar: 'غَائِبٌ | غَائِبَةٌ — absent' },
        { icon: '💼', ar: 'مَشْغُولٌ | مَشْغُولَةٌ — busy' },
        { icon: '📏', ar: 'طَوِيلٌ | طَوِيلَةٌ — tall' },
        { icon: '📏', ar: 'قَصِيرٌ | قَصِيرَةٌ — short' },
        { icon: '⭐', ar: 'مَاهِرٌ | مَاهِرَةٌ — skilled' }
      ],
      keyPoints: [
        'مَرِيض = sick · غَائِب = absent · مَشْغُول = busy',
        'All match the gender of the noun they describe'
      ]
    },
    {
      titleArabic: 'تَمْرِين',
      title: 'Practice',
      pattern: 'الَّذِي / الَّتِي',
      intro: 'Type the Arabic using the correct relative pronoun.',
      tip: 'Tip: الَّذِي for masculine nouns, الَّتِي for feminine nouns.',
      exercise: [
        {
          icon: '📖',
          prompt: 'Type: "the book which is on the desk"',
          ideal: 'الكِتَابُ الَّذِي عَلَى المَكْتَبِ',
          accepts: ['الكتاب الذي على المكتب', 'الكِتَابُ الَّذِي عَلَى المَكْتَبِ', 'الكتاب الذي على المكتبِ']
        },
        {
          icon: '🚪',
          prompt: 'Type: "the room which Khalid is in"',
          ideal: 'الغُرْفَةُ الَّتِي فِيهَا خَالِدٌ',
          accepts: ['الغرفة التي فيها خالد', 'الغُرْفَةُ الَّتِي فِيهَا خَالِدٌ', 'الغرفة التي فيها خالدٌ']
        },
        {
          icon: '👦',
          prompt: 'Type: "the student who is sick"',
          ideal: 'الطَّالِبُ الَّذِي مَرِيضٌ',
          accepts: ['الطالب الذي مريض', 'الطَّالِبُ الَّذِي مَرِيضٌ', 'الطالب الذي مريضٌ']
        }
      ]
    }
  ],

  vocab: [
    { ar: 'الَّذِي', trans: 'alladhī', meaning: 'Who / which / that (masc.)', type: 'Relative pronoun' },
    { ar: 'الَّتِي', trans: 'allatī', meaning: 'Who / which / that (fem.)', type: 'Relative pronoun' },
    { ar: 'مَرِيضٌ', trans: 'marīḍun', meaning: 'Sick / ill', type: 'Adjective' },
    { ar: 'مَرِيضَةٌ', trans: 'marīḍatun', meaning: 'Sick / ill (fem.)', type: 'Adjective' },
    { ar: 'غَائِبٌ', trans: 'ghāʾibun', meaning: 'Absent', type: 'Adjective' },
    { ar: 'غَائِبَةٌ', trans: 'ghāʾibatun', meaning: 'Absent (fem.)', type: 'Adjective' },
    { ar: 'طَوِيلٌ', trans: 'ṭawīlun', meaning: 'Tall / long', type: 'Adjective' },
    { ar: 'طَوِيلَةٌ', trans: 'ṭawīlatun', meaning: 'Tall / long (fem.)', type: 'Adjective' },
    { ar: 'قَصِيرٌ', trans: 'qaṣīrun', meaning: 'Short', type: 'Adjective' },
    { ar: 'قَصِيرَةٌ', trans: 'qaṣīratun', meaning: 'Short (fem.)', type: 'Adjective' },
    { ar: 'مَشْغُولٌ', trans: 'mashghūlun', meaning: 'Busy / occupied', type: 'Adjective' },
    { ar: 'مَشْغُولَةٌ', trans: 'mashghūlatun', meaning: 'Busy / occupied (fem.)', type: 'Adjective' }
  ],

  grammarBlocks: [
    {
      title: 'What Is a Relative Pronoun?',
      content: '<p>A relative pronoun connects a noun to extra information about it. Arabic uses <strong>الَّذِي</strong> for a masculine noun and <strong>الَّتِي</strong> for a feminine noun.</p><ul><li><strong>الطَّالِبُ الَّذِي فِي الفَصْلِ</strong> — the student who is in the classroom</li><li><strong>الغُرْفَةُ الَّتِي فِيهَا خَالِدٌ</strong> — the room which Khalid is in</li></ul>',
      rule: 'Definite noun + الَّذِي / الَّتِي + describing sentence = one longer noun phrase.'
    },
    {
      title: 'Match the Gender',
      content: '<p>The relative pronoun must match the noun it describes:</p><ul><li><strong>الكِتَابُ</strong> is masculine → <strong>الَّذِي</strong></li><li><strong>الحَقِيبَةُ</strong> is feminine → <strong>الَّتِي</strong></li></ul><p>The relative pronoun points back to the noun before it.</p>',
      rule: 'Use الَّذِي after a masculine noun and الَّتِي after a feminine noun.'
    },
    {
      title: 'Use It Only After a Definite Noun',
      content: '<p>Use <strong>الَّذِي</strong> and <strong>الَّتِي</strong> after definite nouns (usually with <strong>الـ</strong> or a proper name). If the noun is indefinite, describe it directly without a relative pronoun.</p><ul><li><strong>الطَّالِبُ الَّذِي مَرِيضٌ</strong> — the student who is sick</li><li><strong>طَالِبٌ مَرِيضٌ</strong> — a sick student</li></ul>',
      rule: 'Definite noun: use الَّذِي / الَّتِي. Indefinite noun: describe it directly.'
    }
  ],

  comprehension: {
    title: 'The Busy School',
    arabic: 'هٰذِهِ مَدْرَسَةٌ كَبِيرَةٌ. المُدَرِّسُ الَّذِي فِي الفَصْلِ مَشْغُولٌ. عِنْدَهُ كِتَابٌ طَوِيلٌ وَقَلَمٌ أَحْمَرُ. الطَّالِبُ الَّذِي عَلَى الكُرْسِيِّ مَرِيضٌ. لَهُ أَخٌ وَاحِدٌ فِي البَيْتِ. الطَّبِيبَةُ الَّتِي فِي المُسْتَشْفَى مَشْغُولَةٌ أَيْضًا. الحَقِيبَةُ الَّتِي عَلَى المَكْتَبِ لِلطَّالِبِ. المِفْتَاحُ فِيهَا. أَيْنَ الغُرْفَةُ الَّتِي فِيهَا خَالِدٌ؟ هِيَ قَرِيبَةٌ مِنَ المَسْجِدِ.',
    english: 'This is a large school. The teacher who is in the classroom is busy. He has a long book and a red pen. The student who is on the chair is sick. He has one brother at home. The doctor who is in the hospital is busy too. The bag which is on the desk belongs to the student. The key is in it. Where is the room which Khalid is in? It is near the mosque.',
    questions: [
      {
        text: 'Who is busy in the classroom?',
        options: ['The doctor', 'The teacher', 'The merchant', 'The boy'],
        correct: 'The teacher'
      },
      {
        text: 'What is the student who is on the chair like?',
        options: ['He is sick', 'He is absent', 'He is famous', 'He is short'],
        correct: 'He is sick'
      },
      {
        text: 'Where is the key?',
        options: ['In the room', 'On the chair', 'In the bag', 'Under the desk'],
        correct: 'In the bag'
      },
      {
        text: 'Where is the room which Khalid is in?',
        options: ['Near the mosque', 'In Kuwait', 'In the hospital', 'On the desk'],
        correct: 'Near the mosque'
      }
    ]
  },

  quizQuestions: {
    multipleChoice: [
      {
        prompt: 'What does الَّذِي mean in this lesson?',
        options: ['Who / which / that (masculine)', 'This feminine', 'In him', 'His book'],
        correct: 0
      },
      {
        prompt: 'What does الَّتِي mean in this lesson?',
        options: ['That masculine', 'Who / which / that (feminine)', 'From her', 'The teacher'],
        correct: 1
      },
      {
        prompt: 'Choose: "The book which is on the desk is new."',
        options: ['الكِتَابُ الَّتِي عَلَى المَكْتَبِ جَدِيدٌ', 'الكِتَابُ الَّذِي عَلَى المَكْتَبِ جَدِيدٌ', 'الكِتَابُ هٰذِهِ عَلَى المَكْتَبِ جَدِيدٌ', 'الكِتَابُ الَّذِي عَلَى المَكْتَبِ جَدِيدَةٌ'],
        correct: 1
      },
      {
        prompt: 'Choose: "The room which Khalid is in is large."',
        options: ['الغُرْفَةُ الَّذِي فِيهَا خَالِدٌ كَبِيرَةٌ', 'الغُرْفَةُ الَّتِي فِيهَا خَالِدٌ كَبِيرَةٌ', 'الغُرْفَةُ الَّتِي فِيهِ خَالِدٌ كَبِيرٌ', 'الغُرْفَةُ الَّذِي فِيهِ خَالِدٌ كَبِيرٌ'],
        correct: 1
      },
      {
        prompt: 'Complete: الطَّالِبُ ___ مَرِيضٌ غَائِبٌ.',
        options: ['الَّتِي', 'فِيهَا', 'الَّذِي', 'لَهُ'],
        correct: 2
      },
      {
        prompt: 'In Arabic, relative pronouns are used only after what?',
        options: ['Verbs', 'Definite nouns', 'Prepositions', 'Any word'],
        correct: 1
      }
    ],
    typing: [
      {
        prompt: 'Type: "the student who is sick"',
        ideal: 'الطَّالِبُ الَّذِي مَرِيضٌ',
        accepts: ['الطالب الذي مريض', 'الطَّالِبُ الَّذِي مَرِيضٌ', 'الطالب الذي مريضٌ']
      },
      {
        prompt: 'Type: "the room which is near the mosque"',
        ideal: 'الغُرْفَةُ الَّتِي قَرِيبَةٌ مِنَ المَسْجِدِ',
        accepts: ['الغرفة التي قريبة من المسجد', 'الغُرْفَةُ الَّتِي قَرِيبَةٌ مِنَ المَسْجِدِ']
      }
    ],
    conceptCheck: [
      {
        statement: 'الَّذِي is used after masculine nouns and الَّتِي is used after feminine nouns.',
        correct: true,
        explanation: 'The relative pronoun must match the gender of the noun: الطَّالِبُ الَّذِي (masc.) and الطَّالِبَةُ الَّتِي (fem.).'
      },
      {
        statement: 'You can use الَّذِي after an indefinite noun like طَالِبٌ.',
        correct: false,
        explanation: 'الَّذِي and الَّتِي are only used after definite nouns. For indefinite nouns, describe directly: طَالِبٌ مَرِيضٌ (a sick student).'
      },
      {
        statement: 'الَّذِي and الَّتِي let you build longer, more descriptive sentences in Arabic.',
        correct: true,
        explanation: 'They connect a noun to a full sentence that describes it, adding richness to your Arabic.'
      }
    ]
  },

  practiceQuestions: []
};
