/* ============================================================
   b1-lesson13.js - Lesson 13 Data
   ============================================================ */

const LESSON_DATA = {
  book: 'book1',
  lessonNum: 13,
  titleArabic: 'ذَهَبَ — ذَهَبَتْ',
  titleEnglish: 'Past Tense Verbs',
  summary: 'Learn your first clear past-tense pattern: he did and she did. Arabic marks a feminine past-tense verb with a quiet تْ ending, as in ذَهَبَتْ (she went). Master 8 common verbs.',
  nextLesson: 'b1-lesson14.html',
  passMark: 8,
  totalQuestions: 11,

  guidedPattern: 'ذَهَبَ — ذَهَبَتْ',
  guidedIntro: 'Arabic past-tense verbs have a simple pattern: the basic form means "he did," and adding تْ makes it "she did."',
  reviewVocabAtEnd: true,
  milestoneAfterPage: 4,

  guidedPages: [
    {
      titleArabic: 'ذَهَبَ — ذَهَبَتْ',
      title: 'Lesson Thirteen',
      pattern: 'فَعَلَ — فَعَلَتْ',
      intro: 'Start with a dialogue using past-tense verbs. Listen for the difference between "he went" and "she went."',
      groups: [
        { type: 'scene', text: 'It is morning. Khalid and Aminah are going about their day.' },
        {
          icon: '🏫',
          role: 'teacher',
          lines: [
            { label: 'حامد', ar: 'أَيْنَ ذَهَبَ خَالِدٌ؟', isPrompt: true },
            { label: 'المدرس', ar: 'ذَهَبَ خَالِدٌ إِلَى المَدْرَسَةِ.' }
          ]
        },
        {
          icon: '👩',
          role: 'student',
          lines: [
            { label: 'حامد', ar: 'وَهَلْ ذَهَبَتْ آمِنَةُ؟', isPrompt: true },
            { label: 'المدرس', ar: 'نَعَمْ، ذَهَبَتْ آمِنَةُ أَيْضًا.' }
          ]
        },
        {
          icon: '📝',
          role: 'teacher',
          lines: [
            { label: 'حامد', ar: 'مَاذَا كَتَبَ خَالِدٌ؟', isPrompt: true },
            { label: 'المدرس', ar: 'كَتَبَ الدَّرْسَ فِي الدَّفْتَرِ.' }
          ]
        },
        {
          icon: '📖',
          role: 'student',
          lines: [
            { label: 'حامد', ar: 'وَمَاذَا قَرَأَتْ آمِنَةُ؟', isPrompt: true },
            { label: 'المدرس', ar: 'قَرَأَتِ الكِتَابَ ثُمَّ كَتَبَتْ.' }
          ]
        }
      ],
      exerciseIntro: 'Answer from the dialogue',
      exercise: [
        {
          icon: '🏫',
          prompt: 'أَيْنَ ذَهَبَ خَالِدٌ؟',
          placeholder: 'ذَهَبَ ...',
          ideal: 'ذَهَبَ إِلَى المَدْرَسَةِ.',
          accepts: ['ذهب إلى المدرسة', 'ذَهَبَ إِلَى المَدْرَسَةِ', 'ذهب إلى المدرسة.', 'ذَهَبَ إِلَى المَدْرَسَةِ.']
        },
        {
          icon: '👩',
          prompt: 'هَلْ ذَهَبَتْ آمِنَةُ؟',
          placeholder: 'نَعَمْ، ...',
          ideal: 'نَعَمْ، ذَهَبَتْ آمِنَةُ أَيْضًا.',
          accepts: ['نعم ذهبت آمنة أيضا', 'نَعَمْ ذَهَبَتْ آمِنَةُ أَيْضًا', 'نعم ذهبت آمنة أيضا.', 'نَعَمْ، ذَهَبَتْ آمِنَةُ أَيْضًا.']
        }
      ],
      keyPoints: [
        'ذَهَبَ = he went',
        'ذَهَبَتْ = she went',
        'Add تْ at the end for "she"'
      ]
    },
    {
      title: 'He Did / She Did — Verb Pairs',
      pattern: 'فَعَلَ / فَعَلَتْ',
      intro: 'The past tense verb for "he" is the base. Add تْ (sukūn) for "she."',
      cards: [
        { icon: '🚶', ar: 'ذَهَبَ / ذَهَبَتْ — went' },
        { icon: '🚪', ar: 'خَرَجَ / خَرَجَتْ — left' },
        { icon: '🚶', ar: 'دَخَلَ / دَخَلَتْ — entered' },
        { icon: '🪑', ar: 'جَلَسَ / جَلَسَتْ — sat' },
        { icon: '✍️', ar: 'كَتَبَ / كَتَبَتْ — wrote' },
        { icon: '📖', ar: 'قَرَأَ / قَرَأَتْ — read' },
        { icon: '↩️', ar: 'رَجَعَ / رَجَعَتْ — returned' },
        { icon: '🚶', ar: 'وَقَفَ / وَقَفَتْ — stood' }
      ],
      keyPoints: [
        'He: 3-letter root + a (e.g., ذَهَبَ)',
        'She: add تْ (e.g., ذَهَبَتْ)'
      ]
    },
    {
      title: 'Pick the Right Verb',
      pattern: 'He or She?',
      intro: 'Tap the correct verb for each sentence. Look at who is doing the action.',
      wordBank: ['ذَهَبَ', 'ذَهَبَتْ', 'دَخَلَ', 'دَخَلَتْ', 'جَلَسَ', 'جَلَسَتْ', 'كَتَبَ', 'كَتَبَتْ'],
      tapFill: [
        { parts: ['خَالِدٌ ', null, ' إِلَى المَدْرَسَةِ.'], answer: 'ذَهَبَ' },
        { parts: ['آمِنَةُ ', null, ' إِلَى البَيْتِ.'], answer: 'ذَهَبَتْ' },
        { parts: ['الطَّالِبُ ', null, ' الفَصْلَ.'], answer: 'دَخَلَ' },
        { parts: ['الطَّالِبَةُ ', null, ' الفَصْلَ.'], answer: 'دَخَلَتْ' },
        { parts: ['المُدَرِّسُ ', null, ' عَلَى الكُرْسِيِّ.'], answer: 'جَلَسَ' },
        { parts: ['المُدَرِّسَةُ ', null, ' عَلَى الكُرْسِيِّ.'], answer: 'جَلَسَتْ' },
        { parts: ['حَامِدٌ ', null, ' الدَّرْسَ.'], answer: 'كَتَبَ' },
        { parts: ['آمِنَةُ ', null, ' فِي الدَّفْتَرِ.'], answer: 'كَتَبَتْ' }
      ],
      keyPoints: [
        'Masculine doer → verb ends in َ (fatḥa)',
        'Feminine doer → verb ends in ْت (sukūn + tāʾ)'
      ]
    },
    {
      title: 'Verb First or Noun First',
      pattern: 'ذَهَبَ خَالِدٌ / خَالِدٌ ذَهَبَ',
      intro: 'Arabic can put the verb before or after the doer. Both are correct.',
      groups: [
        {
          icon: '🚶',
          lines: [
            { ar: 'ذَهَبَ خَالِدٌ إِلَى المَدْرَسَةِ. (verb first)' },
            { ar: 'خَالِدٌ ذَهَبَ إِلَى المَدْرَسَةِ. (noun first)' }
          ]
        },
        {
          icon: '👩',
          lines: [
            { ar: 'ذَهَبَتْ آمِنَةُ إِلَى البَيْتِ. (verb first)' },
            { ar: 'آمِنَةُ ذَهَبَتْ إِلَى البَيْتِ. (noun first)' }
          ]
        },
        {
          icon: '💡',
          lines: [
            { ar: 'دَخَلَ المُدَرِّسُ الفَصْلَ. — The teacher entered the class.' }
          ]
        },
        {
          icon: '📖',
          lines: [
            { ar: 'قَرَأَ الطَّالِبُ الكِتَابَ. — The student read the book.' }
          ]
        }
      ],
      keyPoints: [
        'Verb-first is very common in Arabic storytelling',
        'The verb still matches the doer in gender'
      ]
    },
    {
      title: 'Read the Story',
      pattern: 'Morning at School',
      intro: 'Read this passage. Every verb is in the past tense — watch for he/she patterns.',
      groups: [
        {
          icon: '🌅',
          lines: [
            { ar: 'ذَهَبَ خَالِدٌ إِلَى المَدْرَسَةِ صَبَاحًا.' }
          ]
        },
        {
          icon: '🚪',
          lines: [
            { ar: 'دَخَلَ الفَصْلَ وَجَلَسَ عَلَى الكُرْسِيِّ.' }
          ]
        },
        {
          icon: '📖',
          lines: [
            { ar: 'قَرَأَ خَالِدٌ الدَّرْسَ وَكَتَبَ كَلِمَةً فِي الدَّفْتَرِ.' }
          ]
        },
        {
          icon: '👩',
          lines: [
            { ar: 'دَخَلَتْ آمِنَةُ الفَصْلَ أَيْضًا. جَلَسَتْ قَرِيبَةً مِنَ النَّافِذَةِ.' }
          ]
        },
        {
          icon: '🏠',
          lines: [
            { ar: 'بَعْدَ الدَّرْسِ، رَجَعَ خَالِدٌ إِلَى البَيْتِ وَرَجَعَتْ آمِنَةُ إِلَى بَيْتِهَا.' }
          ]
        }
      ],
      keyPoints: [
        'Notice: دَخَلَ (he entered) vs. دَخَلَتْ (she entered)',
        'جَلَسَ (he sat) vs. جَلَسَتْ (she sat)'
      ]
    },
    {
      title: 'قَرَأَ / كَتَبَ — Read and Wrote',
      pattern: 'Reading and writing verbs',
      intro: 'These two verbs are very common in the classroom context.',
      groups: [
        {
          icon: '📖',
          lines: [
            { ar: 'قَرَأَ الطَّالِبُ الكِتَابَ. — The student read the book.' },
            { ar: 'قَرَأَتِ الطَّالِبَةُ الدَّرْسَ. — The student (f.) read the lesson.' }
          ]
        },
        {
          icon: '✍️',
          lines: [
            { ar: 'كَتَبَ المُدَرِّسُ عَلَى السَّبُّورَةِ. — The teacher wrote on the board.' },
            { ar: 'كَتَبَتِ البِنْتُ فِي الدَّفْتَرِ. — The girl wrote in the notebook.' }
          ]
        },
        {
          icon: '❓',
          lines: [
            { ar: 'مَاذَا قَرَأْتَ؟ — What did you (m.) read?', isPrompt: true },
            { ar: 'قَرَأْتُ الكِتَابَ. — I read the book.' }
          ]
        }
      ],
      keyPoints: [
        'قَرَأَ = he read · كَتَبَ = he wrote',
        'قَرَأَتْ = she read · كَتَبَتْ = she wrote'
      ]
    },
    {
      titleArabic: 'تَمْرِين',
      title: 'Practice',
      pattern: 'Past tense verbs',
      intro: 'Type the Arabic. Watch whether the doer is masculine or feminine.',
      tip: 'Tip: masculine doer → ذَهَبَ (fatḥa ending). Feminine doer → ذَهَبَتْ (sukūn + ت).',
      exercise: [
        {
          icon: '🚶',
          prompt: 'Type: "Khalid went to the school."',
          ideal: 'ذَهَبَ خَالِدٌ إِلَى المَدْرَسَةِ.',
          accepts: ['ذهب خالد إلى المدرسة', 'ذَهَبَ خَالِدٌ إِلَى المَدْرَسَةِ', 'ذهب خالد إلى المدرسة.', 'ذَهَبَ خَالِدٌ إِلَى المَدْرَسَةِ.']
        },
        {
          icon: '👩',
          prompt: 'Type: "Aminah entered the classroom."',
          ideal: 'دَخَلَتْ آمِنَةُ الفَصْلَ.',
          accepts: ['دخلت آمنة الفصل', 'دَخَلَتْ آمِنَةُ الفَصْلَ', 'دخلت آمنة الفصل.', 'دَخَلَتْ آمِنَةُ الفَصْلَ.']
        },
        {
          icon: '📖',
          prompt: 'Type: "The student (m.) read the book."',
          ideal: 'قَرَأَ الطَّالِبُ الكِتَابَ.',
          accepts: ['قرأ الطالب الكتاب', 'قَرَأَ الطَّالِبُ الكِتَابَ', 'قرأ الطالب الكتاب.', 'قَرَأَ الطَّالِبُ الكِتَابَ.']
        },
        {
          icon: '✍️',
          prompt: 'Type: "She wrote in the notebook."',
          ideal: 'كَتَبَتْ فِي الدَّفْتَرِ.',
          accepts: ['كتبت في الدفتر', 'كَتَبَتْ فِي الدَّفْتَرِ', 'كتبت في الدفتر.', 'كَتَبَتْ فِي الدَّفْتَرِ.']
        }
      ]
    }
  ],

  vocab: [
    { ar: 'ذَهَبَ', trans: 'dhahaba', meaning: 'He went', type: 'Verb' },
    { ar: 'ذَهَبَتْ', trans: 'dhahabat', meaning: 'She went', type: 'Verb' },
    { ar: 'خَرَجَ', trans: 'kharaja', meaning: 'He left / went out', type: 'Verb' },
    { ar: 'خَرَجَتْ', trans: 'kharajat', meaning: 'She left / went out', type: 'Verb' },
    { ar: 'دَخَلَ', trans: 'dakhala', meaning: 'He entered', type: 'Verb' },
    { ar: 'دَخَلَتْ', trans: 'dakhalat', meaning: 'She entered', type: 'Verb' },
    { ar: 'جَلَسَ', trans: 'jalasa', meaning: 'He sat', type: 'Verb' },
    { ar: 'جَلَسَتْ', trans: 'jalasat', meaning: 'She sat', type: 'Verb' },
    { ar: 'كَتَبَ', trans: 'kataba', meaning: 'He wrote', type: 'Verb' },
    { ar: 'كَتَبَتْ', trans: 'katabat', meaning: 'She wrote', type: 'Verb' },
    { ar: 'قَرَأَ', trans: 'qaraʾa', meaning: 'He read', type: 'Verb' },
    { ar: 'قَرَأَتْ', trans: 'qaraʾat', meaning: 'She read', type: 'Verb' },
    { ar: 'رَجَعَ', trans: 'rajaʿa', meaning: 'He returned', type: 'Verb' },
    { ar: 'رَجَعَتْ', trans: 'rajaʿat', meaning: 'She returned', type: 'Verb' }
  ],

  grammarBlocks: [
    {
      title: 'The Past Tense for "He"',
      content: '<p>The basic past-tense verb form means <strong>he did</strong>. You already met <strong>ذَهَبَ</strong> (he went) and <strong>خَرَجَ</strong> (he left). This lesson makes that pattern clear.</p><ul><li><strong>ذَهَبَ</strong> — he went</li><li><strong>دَخَلَ</strong> — he entered</li><li><strong>جَلَسَ</strong> — he sat</li><li><strong>كَتَبَ</strong> — he wrote</li></ul>',
      rule: 'The plain past-tense form normally means "he did."'
    },
    {
      title: 'The Past Tense for "She"',
      content: '<p>To say <strong>she did</strong>, Arabic adds a quiet <strong>تْ</strong> to the end of the past-tense verb.</p><ul><li><strong>ذَهَبَ</strong> (he went) → <strong>ذَهَبَتْ</strong> (she went)</li><li><strong>دَخَلَ</strong> (he entered) → <strong>دَخَلَتْ</strong> (she entered)</li><li><strong>جَلَسَ</strong> (he sat) → <strong>جَلَسَتْ</strong> (she sat)</li><li><strong>كَتَبَ</strong> (he wrote) → <strong>كَتَبَتْ</strong> (she wrote)</li></ul>',
      rule: 'He did: فَعَلَ pattern. She did: add تْ at the end.'
    },
    {
      title: 'Verb First or Noun First',
      content: '<p>Arabic can place the verb before the doer, especially in simple past-tense sentences.</p><ul><li><strong>ذَهَبَ الطَّالِبُ</strong> — The student went. (verb first)</li><li><strong>الطَّالِبُ ذَهَبَ</strong> — The student went. (noun first)</li></ul><p>If the doer comes first, the verb still matches the doer in gender.</p>',
      rule: 'Use the masculine verb with a masculine doer and the feminine verb with a feminine doer.'
    }
  ],

  comprehension: {
    title: 'Morning at School',
    arabic: 'ذَهَبَ خَالِدٌ إِلَى المَدْرَسَةِ صَبَاحًا. دَخَلَ الفَصْلَ وَجَلَسَ عَلَى الكُرْسِيِّ. عِنْدَهُ كِتَابٌ جَدِيدٌ وَقَلَمٌ أَحْمَرُ. قَرَأَ خَالِدٌ الدَّرْسَ وَكَتَبَ كَلِمَةً فِي الدَّفْتَرِ. دَخَلَتْ آمِنَةُ الفَصْلَ أَيْضًا. جَلَسَتْ قَرِيبَةً مِنَ النَّافِذَةِ. قَرَأَتْ آمِنَةُ الكِتَابَ ثُمَّ كَتَبَتْ فِي الدَّفْتَرِ. بَعْدَ الدَّرْسِ رَجَعَ خَالِدٌ إِلَى البَيْتِ وَرَجَعَتْ آمِنَةُ إِلَى بَيْتِهَا.',
    english: 'Khalid went to the school in the morning. He entered the classroom and sat on the chair. He had a new book and a red pen. Khalid read the lesson and wrote a word in the notebook. Aminah entered the classroom too. She sat near the window. Aminah read the book, then wrote in the notebook. After the lesson, Khalid returned home and Aminah returned to her house.',
    questions: [
      {
        text: 'Where did Khalid go in the morning?',
        options: ['To the mosque', 'To the school', 'To the hospital', 'To Kuwait'],
        correct: 'To the school'
      },
      {
        text: 'What did Khalid do after entering the classroom?',
        options: ['He sat on the chair', 'He left the school', 'He opened the door', 'He went to the market'],
        correct: 'He sat on the chair'
      },
      {
        text: 'Where did Aminah sit?',
        options: ['Near the window', 'Under the desk', 'In the hospital', 'On the table'],
        correct: 'Near the window'
      },
      {
        text: 'What did both Khalid and Aminah do?',
        options: ['They read and wrote', 'They slept', 'They opened the house', 'They went to Kuwait'],
        correct: 'They read and wrote'
      }
    ]
  },

  quizQuestions: {
    multipleChoice: [
      {
        prompt: 'What does دَخَلَ mean?',
        options: ['He entered', 'She entered', 'He sat', 'She wrote'],
        correct: 0
      },
      {
        prompt: 'What does دَخَلَتْ mean?',
        options: ['He entered', 'She entered', 'He returned', 'She read'],
        correct: 1
      },
      {
        prompt: 'Choose: "She sat."',
        options: ['جَلَسَ', 'جَلَسَتْ', 'دَخَلَتْ', 'رَجَعَ'],
        correct: 1
      },
      {
        prompt: 'Choose: "He wrote."',
        options: ['كَتَبَ', 'كَتَبَتْ', 'قَرَأَتْ', 'جَلَسَ'],
        correct: 0
      },
      {
        prompt: 'Complete: خَالِدٌ ___ إِلَى المَدْرَسَةِ.',
        options: ['ذَهَبَتْ', 'ذَهَبَ', 'جَلَسَتْ', 'خَرَجَتْ'],
        correct: 1
      },
      {
        prompt: 'What ending marks a feminine past-tense verb?',
        options: ['ـَة (tāʾ marbūṭa)', 'ـَتْ (fatḥa + tāʾ with sukūn)', 'ـُوا (wāw + alif)', 'ـْنَ (nūn)'],
        correct: 1
      }
    ],
    typing: [
      {
        prompt: 'Type: "He went."',
        ideal: 'ذَهَبَ',
        accepts: ['ذهب', 'ذَهَبَ']
      },
      {
        prompt: 'Type: "She sat."',
        ideal: 'جَلَسَتْ',
        accepts: ['جلست', 'جَلَسَتْ']
      }
    ],
    conceptCheck: [
      {
        statement: 'The basic past-tense verb form in Arabic means "he did" (masculine).',
        correct: true,
        explanation: 'ذَهَبَ = he went, كَتَبَ = he wrote. The plain form defaults to masculine.'
      },
      {
        statement: 'To make a past-tense verb feminine, you add ـَة (tāʾ marbūṭa) at the end.',
        correct: false,
        explanation: 'The feminine past-tense marker is تْ (tāʾ with sukūn), not ة. ذَهَبَتْ (she went), not ذَهَبَة.'
      },
      {
        statement: 'Arabic can place the verb before or after the doer in a sentence.',
        correct: true,
        explanation: 'Both ذَهَبَ خَالِدٌ and خَالِدٌ ذَهَبَ are correct. Verb-first is very common in Arabic.'
      }
    ]
  },

  practiceQuestions: []
};
