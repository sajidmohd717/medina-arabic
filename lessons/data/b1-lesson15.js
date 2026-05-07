/* ============================================================
   b1-lesson15.js - Lesson 15 Data
   ============================================================ */

const LESSON_DATA = {
  book: 'book1',
  lessonNum: 15,
  titleArabic: 'صَرْفُ الفِعْلِ المَاضِي',
  titleEnglish: 'Past Tense Conjugation',
  summary: 'Complete the past-tense conjugation table: I did, you (m.) did, you (f.) did, he did, she did, we did. Learn all six forms with 8 common verbs.',
  nextLesson: 'b1-lesson16.html',
  passMark: 8,
  totalQuestions: 11,

  guidedPattern: 'ذَهَبَ · ذَهَبَتْ · ذَهَبْتَ',
  guidedIntro: 'Now learn the full past-tense table. Every verb follows the same pattern — once you know the suffixes, you can conjugate any past verb.',
  reviewVocabAtEnd: true,
  milestoneAfterPage: 4,

  guidedPages: [
    {
      titleArabic: 'صَرْفُ الفِعْلِ المَاضِي',
      title: 'Lesson Fifteen',
      pattern: 'فَعَلَ — فَعَلَتْ — فَعَلْتَ',
      intro: 'Start with a dialogue using different past-tense forms: I went, you went, we went.',
      groups: [
        { type: 'scene', text: 'Khalid and Hamid are talking about what they did yesterday.' },
        {
          icon: '🏫',
          role: 'teacher',
          lines: [
            { label: 'حامد', ar: 'مَاذَا فَعَلْتَ أَمْسِ يَا خَالِدُ؟', isPrompt: true },
            { label: 'خالد', ar: 'ذَهَبْتُ إِلَى المَدْرَسَةِ وَقَرَأْتُ الدَّرْسَ.' }
          ]
        },
        {
          icon: '📖',
          role: 'student',
          lines: [
            { label: 'حامد', ar: 'وَمَاذَا فَعَلْتِ يَا آمِنَةُ؟', isPrompt: true },
            { label: 'آمنة', ar: 'ذَهَبْتُ إِلَى السُّوقِ وَاشْتَرَيْتُ كِتَابًا.' }
          ]
        },
        {
          icon: '👥',
          role: 'teacher',
          lines: [
            { label: 'حامد', ar: 'مَاذَا فَعَلْتُمَا؟', isPrompt: true },
            { label: 'خالد', ar: 'ذَهَبْنَا إِلَى المَسْجِدِ مَعًا.' }
          ]
        }
      ],
      exerciseIntro: 'Answer from the dialogue',
      exercise: [
        {
          icon: '🏫',
          prompt: 'مَاذَا فَعَلَ خَالِدٌ أَمْسِ؟',
          placeholder: 'ذَهَبَ ...',
          ideal: 'ذَهَبَ إِلَى المَدْرَسَةِ وَقَرَأَ الدَّرْسَ.',
          accepts: ['ذهب إلى المدرسة وقرأ الدرس', 'ذَهَبَ إِلَى المَدْرَسَةِ وَقَرَأَ الدَّرْسَ']
        },
        {
          icon: '👥',
          prompt: 'أَيْنَ ذَهَبَا مَعًا؟',
          placeholder: 'ذَهَبَا ...',
          ideal: 'ذَهَبَا إِلَى المَسْجِدِ.',
          accepts: ['ذهبا إلى المسجد', 'ذَهَبَا إِلَى المَسْجِدِ', 'ذهبا إلى المسجد.', 'ذَهَبَا إِلَى المَسْجِدِ.']
        }
      ],
      keyPoints: [
        'فَعَلْتَ = you (m.) did',
        'فَعَلْتِ = you (f.) did',
        'فَعَلْتُ = I did',
        'فَعَلْنَا = we did'
      ]
    },
    {
      title: 'Full Conjugation Table',
      pattern: 'ذَهَبَ — he went',
      intro: 'Every past-tense verb follows this pattern. Learn the six suffixes.',
      cards: [
        { icon: '👤', ar: 'ذَهَبَ — he went' },
        { icon: '👤', ar: 'ذَهَبَتْ — she went' },
        { icon: '👤', ar: 'ذَهَبْتَ — you (m.) went' },
        { icon: '👤', ar: 'ذَهَبْتِ — you (f.) went' },
        { icon: '👤', ar: 'ذَهَبْتُ — I went' },
        { icon: '👥', ar: 'ذَهَبْنَا — we went' }
      ],
      keyPoints: [
        'He: ـَ (fatḥa)',
        'She: ـَتْ (fatḥa + tāʾ sukūn)',
        'You (m.): ـْتَ (sukūn + tāʾ fatḥa)',
        'You (f.): ـْتِ (sukūn + tāʾ kasra)',
        'I: ـْتُ (sukūn + tāʾ ḍamma)',
        'We: ـْنَا (sukūn + nūn + alif)'
      ]
    },
    {
      title: 'Pick the Right Form',
      pattern: 'Match the pronoun',
      intro: 'Tap the correct verb form for each pronoun.',
      wordBank: ['ذَهَبَ', 'ذَهَبَتْ', 'ذَهَبْتَ', 'ذَهَبْتِ', 'ذَهَبْتُ', 'ذَهَبْنَا'],
      tapFill: [
        { parts: ['هُوَ ', null], answer: 'ذَهَبَ' },
        { parts: ['هِيَ ', null], answer: 'ذَهَبَتْ' },
        { parts: ['أَنْتَ ', null], answer: 'ذَهَبْتَ' },
        { parts: ['أَنْتِ ', null], answer: 'ذَهَبْتِ' },
        { parts: ['أَنَا ', null], answer: 'ذَهَبْتُ' },
        { parts: ['نَحْنُ ', null], answer: 'ذَهَبْنَا' }
      ],
      keyPoints: [
        'هُوَ → ـَ · هِيَ → ـَتْ',
        'أَنْتَ → ـْتَ · أَنْتِ → ـْتِ',
        'أَنَا → ـْتُ · نَحْنُ → ـْنَا'
      ]
    },
    {
      title: 'Conjugate Any Verb',
      pattern: 'كَتَبَ — to write',
      intro: 'Apply the same suffixes to كَتَبَ (he wrote). The pattern is identical.',
      groups: [
        {
          icon: '✍️',
          lines: [
            { ar: 'هُوَ كَتَبَ — he wrote' },
            { ar: 'هِيَ كَتَبَتْ — she wrote' }
          ]
        },
        {
          icon: '✍️',
          lines: [
            { ar: 'أَنْتَ كَتَبْتَ — you (m.) wrote' },
            { ar: 'أَنْتِ كَتَبْتِ — you (f.) wrote' }
          ]
        },
        {
          icon: '✍️',
          lines: [
            { ar: 'أَنَا كَتَبْتُ — I wrote' },
            { ar: 'نَحْنُ كَتَبْنَا — we wrote' }
          ]
        }
      ],
      keyPoints: [
        'Every past verb uses the same suffixes',
        'Just remove َ from the "he" form and add the suffix'
      ]
    },
    {
      title: 'Read the Story',
      pattern: 'Yesterday',
      intro: 'Read this passage. Every verb is conjugated in the past tense for different people.',
      groups: [
        {
          icon: '🌅',
          lines: [
            { ar: 'ذَهَبْتُ إِلَى المَدْرَسَةِ صَبَاحًا.' }
          ]
        },
        {
          icon: '📖',
          lines: [
            { ar: 'قَرَأْتُ الدَّرْسَ وَكَتَبْتُ فِي الدَّفْتَرِ.' }
          ]
        },
        {
          icon: '👩',
          lines: [
            { ar: 'ذَهَبَتْ آمِنَةُ إِلَى السُّوقِ.' }
          ]
        },
        {
          icon: '👨',
          lines: [
            { ar: 'ذَهَبَ أَبِي إِلَى عَمَلِهِ.' }
          ]
        },
        {
          icon: '👥',
          lines: [
            { ar: 'فِي المَسَاءِ، ذَهَبْنَا إِلَى بَيْتِ جَدِّي.' }
          ]
        }
      ],
      keyPoints: [
        'ذَهَبْتُ = I went (speaker)',
        'ذَهَبَتْ = she went',
        'ذَهَبْنَا = we went'
      ]
    },
    {
      title: 'دَخَلَ / جَلَسَ / رَجَعَ',
      pattern: 'More verb conjugations',
      intro: 'Three more common verbs, fully conjugated in the past tense.',
      groups: [
        {
          icon: '🚪',
          lines: [
            { ar: 'دَخَلَ / دَخَلَتْ / دَخَلْتَ / دَخَلْتِ / دَخَلْتُ / دَخَلْنَا — entered' }
          ]
        },
        {
          icon: '🪑',
          lines: [
            { ar: 'جَلَسَ / جَلَسَتْ / جَلَسْتَ / جَلَسْتِ / جَلَسْتُ / جَلَسْنَا — sat' }
          ]
        },
        {
          icon: '↩️',
          lines: [
            { ar: 'رَجَعَ / رَجَعَتْ / رَجَعْتَ / رَجَعْتِ / رَجَعْتُ / رَجَعْنَا — returned' }
          ]
        }
      ],
      keyPoints: [
        'دَخَلْتُ = I entered',
        'جَلَسْنَا = we sat',
        'رَجَعْتَ = you (m.) returned'
      ]
    },
    {
      titleArabic: 'تَمْرِين',
      title: 'Practice',
      pattern: 'Past tense conjugation',
      intro: 'Type the Arabic. Match the verb form to the pronoun.',
      tip: 'Tip: أَنَا → ـْتُ (sukūn + tāʾ ḍamma). أَنْتَ → ـْتَ (sukūn + tāʾ fatḥa).',
      exercise: [
        {
          icon: '👤',
          prompt: 'Type: "I went."',
          ideal: 'ذَهَبْتُ',
          accepts: ['ذهبت', 'ذَهَبْتُ']
        },
        {
          icon: '👤',
          prompt: 'Type: "You (m.) wrote."',
          ideal: 'كَتَبْتَ',
          accepts: ['كتبت', 'كَتَبْتَ']
        },
        {
          icon: '👤',
          prompt: 'Type: "She read."',
          ideal: 'قَرَأَتْ',
          accepts: ['قرأت', 'قَرَأَتْ']
        },
        {
          icon: '👥',
          prompt: 'Type: "We returned."',
          ideal: 'رَجَعْنَا',
          accepts: ['رجعنا', 'رَجَعْنَا']
        }
      ]
    }
  ],

  vocab: [
    { ar: 'ذَهَبَ', trans: 'dhahaba', meaning: 'He went', type: 'Verb' },
    { ar: 'ذَهَبَتْ', trans: 'dhahabat', meaning: 'She went', type: 'Verb' },
    { ar: 'ذَهَبْتَ', trans: 'dhahabta', meaning: 'You (m.) went', type: 'Verb' },
    { ar: 'ذَهَبْتِ', trans: 'dhahabti', meaning: 'You (f.) went', type: 'Verb' },
    { ar: 'ذَهَبْتُ', trans: 'dhahabtu', meaning: 'I went', type: 'Verb' },
    { ar: 'ذَهَبْنَا', trans: 'dhahabnā', meaning: 'We went', type: 'Verb' },
    { ar: 'فَعَلَ', trans: 'faʿala', meaning: 'He did', type: 'Verb' },
    { ar: 'دَخَلَ', trans: 'dakhala', meaning: 'He entered', type: 'Verb' },
    { ar: 'جَلَسَ', trans: 'jalasa', meaning: 'He sat', type: 'Verb' },
    { ar: 'رَجَعَ', trans: 'rajaʿa', meaning: 'He returned', type: 'Verb' },
    { ar: 'أَمْسِ', trans: 'amsi', meaning: 'Yesterday', type: 'Adverb' },
    { ar: 'مَعًا', trans: 'maʿan', meaning: 'Together', type: 'Adverb' }
  ],

  grammarBlocks: [
    {
      title: 'The Six Past-Tense Forms',
      content: '<p>The Arabic past tense has six distinct forms for singular people. The base form means "he did," and five suffixes create the other forms:</p><table><tr><td><strong>هُوَ</strong></td><td>ـَ</td><td>فَعَلَ (he did)</td></tr><tr><td><strong>هِيَ</strong></td><td>ـَتْ</td><td>فَعَلَتْ (she did)</td></tr><tr><td><strong>أَنْتَ</strong></td><td>ـْتَ</td><td>فَعَلْتَ (you m. did)</td></tr><tr><td><strong>أَنْتِ</strong></td><td>ـْتِ</td><td>فَعَلْتِ (you f. did)</td></tr><tr><td><strong>أَنَا</strong></td><td>ـْتُ</td><td>فَعَلْتُ (I did)</td></tr><tr><td><strong>نَحْنُ</strong></td><td>ـْنَا</td><td>فَعَلْنَا (we did)</td></tr></table>',
      rule: 'فَعَلَ (he did) → add suffixes for all other forms.'
    },
    {
      title: 'The Root + Suffix Pattern',
      content: '<p>To conjugate any past verb, take the "he" form, remove the final fatḥa, and add the suffix:</p><ul><li>كَتَبَ → كَتَبْـ + تُ = كَتَبْتُ (I wrote)</li><li>دَخَلَ → دَخَلْـ + تَ = دَخَلْتَ (you m. entered)</li><li>جَلَسَ → جَلَسْـ + نَا = جَلَسْنَا (we sat)</li></ul>',
      rule: 'Root (with sukūn on last letter) + pronoun suffix.'
    },
    {
      title: 'Using the Correct Form',
      content: '<p>The verb form must match the doer. Arabic often drops the pronoun because the verb ending already tells you who did it:</p><ul><li><strong>ذَهَبْتُ</strong> = I went (no need for أَنَا)</li><li><strong>ذَهَبْنَا</strong> = We went (no need for نَحْنُ)</li></ul>',
      rule: 'The verb ending itself identifies the doer — pronouns are often optional.'
    }
  ],

  comprehension: {
    title: 'Our Day Yesterday',
    arabic: 'ذَهَبْتُ إِلَى المَدْرَسَةِ صَبَاحًا. دَخَلْتُ الفَصْلَ وَجَلَسْتُ عَلَى الكُرْسِيِّ. قَرَأْتُ الدَّرْسَ وَكَتَبْتُ فِي الدَّفْتَرِ. ذَهَبَ أَبِي إِلَى عَمَلِهِ وَذَهَبَتْ أُمِّي إِلَى السُّوقِ. رَجَعَ أَبِي فِي المَسَاءِ. فِي اللَّيْلِ، ذَهَبْنَا جَمِيعًا إِلَى بَيْتِ جَدِّي. جَلَسْنَا مَعَهُ وَقَرَأْنَا القِصَّةَ. كَانَ يَوْمًا جَمِيلًا.',
    english: 'I went to school in the morning. I entered the classroom and sat on the chair. I read the lesson and wrote in the notebook. My father went to his work and my mother went to the market. My father returned in the evening. At night, we all went to my grandfather\'s house. We sat with him and read the story. It was a beautiful day.',
    questions: [
      {
        text: 'Where did "I" go in the morning?',
        options: ['To the market', 'To school', 'To the mosque', 'To grandfather\'s house'],
        correct: 'To school'
      },
      {
        text: 'Where did the mother go?',
        options: ['To school', 'To work', 'To the market', 'To the mosque'],
        correct: 'To the market'
      },
      {
        text: 'Where did the family go at night?',
        options: ['To the market', 'To the mosque', 'To grandfather\'s house', 'To school'],
        correct: 'To grandfather\'s house'
      },
      {
        text: 'What does جَلَسْنَا mean?',
        options: ['I sat', 'He sat', 'She sat', 'We sat'],
        correct: 'We sat'
      }
    ]
  },

  quizQuestions: {
    multipleChoice: [
      {
        prompt: 'What does ذَهَبْتُ mean?',
        options: ['He went', 'She went', 'I went', 'We went'],
        correct: 2
      },
      {
        prompt: 'What does ذَهَبْنَا mean?',
        options: ['You went', 'I went', 'We went', 'They went'],
        correct: 2
      },
      {
        prompt: 'What suffix marks "you" (masc.) in the past tense?',
        options: ['ـَتْ', 'ـْتَ', 'ـْتِ', 'ـْنَا'],
        correct: 1
      },
      {
        prompt: 'Choose: "You (f.) sat."',
        options: ['جَلَسْتِ', 'جَلَسْتَ', 'جَلَسَتْ', 'جَلَسْنَا'],
        correct: 0
      },
      {
        prompt: 'Choose: "We returned."',
        options: ['رَجَعْتُ', 'رَجَعْتَ', 'رَجَعَتْ', 'رَجَعْنَا'],
        correct: 3
      },
      {
        prompt: 'What does كَتَبْتُ mean?',
        options: ['He wrote', 'I wrote', 'We wrote', 'You wrote'],
        correct: 1
      }
    ],
    typing: [
      {
        prompt: 'Type: "I went."',
        ideal: 'ذَهَبْتُ',
        accepts: ['ذهبت', 'ذَهَبْتُ']
      },
      {
        prompt: 'Type: "We wrote."',
        ideal: 'كَتَبْنَا',
        accepts: ['كتبنا', 'كَتَبْنَا']
      }
    ],
    conceptCheck: [
      {
        statement: 'The past-tense verb in Arabic changes its ending to show who did the action.',
        correct: true,
        explanation: 'ذَهَبَ (he), ذَهَبْتُ (I), ذَهَبْنَا (we) — the suffix tells you the doer.'
      },
      {
        statement: 'The suffix for "I" in the past tense is the same as the suffix for "you" (masc.).',
        correct: false,
        explanation: '"I" uses ـْتُ (sukūn + tāʾ ḍamma) and "you" (m.) uses ـْتَ (sukūn + tāʾ fatḥa). They are different.'
      },
      {
        statement: 'Arabic often drops the pronoun because the verb ending already identifies the doer.',
        correct: true,
        explanation: 'ذَهَبْتُ already means "I went" — you do not need to say أَنَا ذَهَبْتُ.'
      }
    ]
  },

  practiceQuestions: []
};
