/* ============================================================
   b1-lesson2.js — Lesson 2 Data
   ============================================================ */

const LESSON_DATA = {
  book: 'book1',
  lessonNum: 2,
  titleArabic: 'ذَلِكَ',
  titleEnglish: 'That is...',
  summary: 'You already know هٰذَا for things that are close. Now learn ذَلِكَ — the same idea but for things that are far away. One new word, the same pattern.',
  nextLesson: 'b1-lesson3.html',
  passMark: 6,
  totalQuestions: 8,

  guidedPattern: 'ذَلِكَ + اِسْمٌ',
  guidedIntro: 'هٰذَا points at things near you. ذَلِكَ points at things far away. The sentence works exactly the same way.',
  reviewVocabAtEnd: true,

  guidedPages: [
    {
      titleArabic: 'الدَّرْسُ الثَّانِي',
      title: 'Lesson Two',
      pattern: 'ذَلِكَ',
      intro: 'هٰذَا = this (close). ذَلِكَ = that (far away). Use it the same way — ذَلِكَ + noun.',
      cards: [
        { icon: '🏠', ar: 'ذَلِكَ بَيْتٌ' },
        { icon: '🕌', ar: 'ذَلِكَ مَسْجِدٌ' },
        { icon: '📘', ar: 'ذَلِكَ كِتَابٌ' },
        { icon: '✏️', ar: 'ذَلِكَ قَلَمٌ' },
        { icon: '🔑', ar: 'ذَلِكَ مِفْتَاحٌ' },
        { icon: '🪑', ar: 'ذَلِكَ كُرْسِيٌّ' },
        { icon: '🛏️', ar: 'ذَلِكَ سَرِيرٌ' },
        { icon: '🧾', ar: 'ذَلِكَ مَكْتَبٌ' }
      ],
      keyPoints: ['ذَلِكَ = that (far away)', 'هٰذَا = this (close by)']
    },
    {
      title: 'Asking About Far Things',
      pattern: 'مَا ذَلِكَ؟',
      intro: 'The question words work the same way — just swap هٰذَا for ذَلِكَ.',
      groups: [
        {
          icon: '🏠',
          lines: [
            { ar: 'مَا ذَلِكَ؟', isPrompt: true },
            { ar: 'ذَلِكَ بَيْتٌ.' }
          ]
        },
        {
          icon: '🕌',
          lines: [
            { ar: 'أَذَلِكَ مَسْجِدٌ؟', isPrompt: true },
            { ar: 'نَعَمْ، ذَلِكَ مَسْجِدٌ.' }
          ]
        },
        {
          icon: '📘',
          lines: [
            { ar: 'أَذَلِكَ قَلَمٌ؟', isPrompt: true },
            { ar: 'لا، ذَلِكَ كِتَابٌ.' }
          ]
        },
        {
          icon: '👨‍🏫',
          lines: [
            { ar: 'مَنْ ذَلِكَ؟', isPrompt: true },
            { ar: 'ذَلِكَ مُدَرِّسٌ.' }
          ]
        }
      ],
      keyPoints: ['مَا ذَلِكَ؟ = What is that?', 'مَنْ ذَلِكَ؟ = Who is that?', 'أَذَلِكَ ...؟ = Is that ...?']
    },
    {
      title: 'This and That Together',
      pattern: 'هٰذَا ... وَذَلِكَ ...',
      intro: 'Use وَ (and) to contrast something close with something far in one sentence.',
      groups: [
        {
          icon: '🏠🕌',
          lines: [
            { ar: 'هٰذَا بَيْتٌ وَذَلِكَ مَسْجِدٌ.' }
          ]
        },
        {
          icon: '✏️📘',
          lines: [
            { ar: 'هٰذَا قَلَمٌ وَذَلِكَ كِتَابٌ.' }
          ]
        },
        {
          icon: '🐎🫏',
          lines: [
            { ar: 'هٰذَا حِصَانٌ وَذَلِكَ حِمَارٌ.' }
          ]
        },
        {
          icon: '👨‍🏫🧑‍💼',
          lines: [
            { ar: 'هٰذَا مُدَرِّسٌ وَذَلِكَ تَاجِرٌ.' }
          ]
        }
      ],
      keyPoints: ['وَ attaches directly to the next word', 'هٰذَا = close · ذَلِكَ = far']
    },
    {
      title: 'New Words',
      pattern: 'ذَلِكَ + كَلِمَة جَدِيدَة',
      intro: 'Here are some new nouns. They all work with ذَلِكَ the same way.',
      cards: [
        { icon: '🥛', ar: 'ذَلِكَ لَبَنٌ' },
        { icon: '🧂', ar: 'ذَلِكَ سُكَّرٌ' },
        { icon: '🪨', ar: 'ذَلِكَ حَجَرٌ' },
        { icon: '🕌', ar: 'ذَلِكَ إِمَامٌ' }
      ],
      keyPoints: ['لَبَنٌ = milk', 'سُكَّرٌ = sugar', 'حَجَرٌ = a stone', 'إِمَامٌ = an imam']
    },
    {
      titleArabic: 'تَمْرِين (١)',
      title: 'Exercise One',
      pattern: 'مَا ذَلِكَ؟',
      intro: 'Look at each picture. Type the Arabic answer for مَا ذَلِكَ؟',
      tip: '💡 Tip: You can type without vowels — e.g. ذلك بيت instead of ذَلِكَ بَيْتٌ',
      exercise: [
        {
          icon: '🏠',
          ideal: 'ذَلِكَ بَيْتٌ.',
          accepts: ['ذلك بيت', 'ذلك بيت.', 'ذَلِكَ بَيْتٌ', 'ذَلِكَ بَيْتٌ.', 'ذلك بيتٌ']
        },
        {
          icon: '🕌',
          ideal: 'ذَلِكَ مَسْجِدٌ.',
          accepts: ['ذلك مسجد', 'ذلك مسجد.', 'ذَلِكَ مَسْجِدٌ', 'ذَلِكَ مَسْجِدٌ.', 'ذلك مسجدٌ']
        },
        {
          icon: '📘',
          ideal: 'ذَلِكَ كِتَابٌ.',
          accepts: ['ذلك كتاب', 'ذلك كتاب.', 'ذَلِكَ كِتَابٌ', 'ذَلِكَ كِتَابٌ.', 'ذلك كتابٌ']
        },
        {
          icon: '🪨',
          ideal: 'ذَلِكَ حَجَرٌ.',
          accepts: ['ذلك حجر', 'ذلك حجر.', 'ذَلِكَ حَجَرٌ', 'ذَلِكَ حَجَرٌ.', 'ذلك حجرٌ']
        },
        {
          icon: '🥛',
          ideal: 'ذَلِكَ لَبَنٌ.',
          accepts: ['ذلك لبن', 'ذلك لبن.', 'ذَلِكَ لَبَنٌ', 'ذَلِكَ لَبَنٌ.', 'ذلك لبنٌ']
        }
      ]
    },
    {
      titleArabic: 'تَمْرِين (٢)',
      title: 'Exercise Two',
      pattern: 'هٰذَا أَمْ ذَلِكَ؟',
      intro: 'Read each sentence. Type it out in full — watch whether it uses هٰذَا or ذَلِكَ.',
      tip: '💡 Tip: No need to type vowel marks — bare letters will match.',
      exercise: [
        {
          prompt: 'هٰذَا قَلَمٌ وَذَلِكَ كِتَابٌ.',
          ideal: 'هٰذَا قَلَمٌ وَذَلِكَ كِتَابٌ.',
          accepts: ['هذا قلم وذلك كتاب', 'هذا قلم وذلك كتاب.', 'هٰذَا قَلَمٌ وَذَلِكَ كِتَابٌ', 'هٰذَا قَلَمٌ وَذَلِكَ كِتَابٌ.']
        },
        {
          prompt: 'مَا ذَلِكَ؟ ذَلِكَ حَجَرٌ.',
          ideal: 'مَا ذَلِكَ؟ ذَلِكَ حَجَرٌ.',
          accepts: ['ما ذلك ذلك حجر', 'ما ذلك؟ ذلك حجر', 'ما ذلك؟ ذلك حجر.', 'مَا ذَلِكَ؟ ذَلِكَ حَجَرٌ']
        },
        {
          prompt: 'هٰذَا سُكَّرٌ وَذَلِكَ لَبَنٌ.',
          ideal: 'هٰذَا سُكَّرٌ وَذَلِكَ لَبَنٌ.',
          accepts: ['هذا سكر وذلك لبن', 'هذا سكر وذلك لبن.', 'هٰذَا سُكَّرٌ وَذَلِكَ لَبَنٌ', 'هٰذَا سُكَّرٌ وَذَلِكَ لَبَنٌ.']
        }
      ]
    }
  ],

  // ============================================================
  // VOCABULARY
  // ============================================================
  vocab: [
    { ar: 'ذَلِكَ', trans: 'dhālika', meaning: 'That (masc., far)', type: 'Demonstrative' },
    { ar: 'مَا ذَلِكَ؟', trans: 'mā dhālika?', meaning: 'What is that?', type: 'Question' },
    { ar: 'مَنْ ذَلِكَ؟', trans: 'man dhālika?', meaning: 'Who is that?', type: 'Question' },
    { ar: 'أَذَلِكَ', trans: 'a-dhālika', meaning: 'Is that...?', type: 'Question' },
    { ar: 'لَبَنٌ', trans: 'labanun', meaning: 'Milk', type: 'Noun' },
    { ar: 'سُكَّرٌ', trans: 'sukkarun', meaning: 'Sugar', type: 'Noun' },
    { ar: 'حَجَرٌ', trans: 'ḥajarun', meaning: 'A stone', type: 'Noun' },
    { ar: 'إِمَامٌ', trans: 'imāmun', meaning: 'An imam', type: 'Person' },
    { ar: 'حِصَانٌ', trans: 'ḥiṣānun', meaning: 'A horse', type: 'Animal' }
  ],

  // ============================================================
  // GRAMMAR BLOCKS (Concepts tab)
  // ============================================================
  grammarBlocks: [
    {
      title: 'هٰذَا vs ذَلِكَ',
      content: '<p><strong>هٰذَا</strong> points at something <strong>close</strong> to you. <strong>ذَلِكَ</strong> points at something <strong>far away</strong>. The sentence structure is exactly the same.</p>',
      rule: 'هٰذَا بَيْتٌ = This is a house. · ذَلِكَ بَيْتٌ = That is a house.'
    },
    {
      title: 'Questions work the same way',
      content: '<p>All the question patterns from Lesson 1 work with ذَلِكَ too — just swap هٰذَا for ذَلِكَ.</p>',
      rule: 'مَا ذَلِكَ؟ = What is that? · مَنْ ذَلِكَ؟ = Who is that?'
    },
    {
      title: 'Joining with وَ',
      content: '<p><strong>وَ</strong> means "and" and attaches directly to the next word. Use it to contrast something close with something far.</p>',
      rule: 'هٰذَا قَلَمٌ وَذَلِكَ كِتَابٌ. = This is a pen and that is a book.'
    }
  ],

  // ============================================================
  // READING COMPREHENSION
  // ============================================================
  comprehension: {
    title: 'Near and Far',
    arabic: 'هٰذَا بَيْتٌ وَذَلِكَ مَسْجِدٌ. هٰذَا حِصَانٌ وَذَلِكَ حِمَارٌ. مَا ذَلِكَ؟ ذَلِكَ حَجَرٌ. هٰذَا سُكَّرٌ وَذَلِكَ لَبَنٌ. مَنْ هٰذَا وَمَنْ ذَلِكَ؟ هٰذَا مُدَرِّسٌ وَذَلِكَ إِمَامٌ.',
    english: 'This is a house and that is a mosque. This is a horse and that is a donkey. What is that? That is a stone. This is sugar and that is milk. Who is this and who is that? This is a teacher and that is an imam.',
    questions: [
      {
        text: 'In the first sentence, which is near and which is far?',
        options: ['The mosque is near, the house is far', 'The house is near, the mosque is far', 'Both are near', 'Both are far'],
        correct: 'The house is near, the mosque is far'
      },
      {
        text: 'What does ذَلِكَ حَجَرٌ mean?',
        options: ['This is a stone.', 'That is a stone.', 'What is that?', 'That is a key.'],
        correct: 'That is a stone.'
      },
      {
        text: 'Who is the far person (ذَلِكَ) in the last sentence?',
        options: ['A teacher', 'A student', 'An imam', 'A merchant'],
        correct: 'An imam'
      }
    ]
  },

  // ============================================================
  // QUIZ QUESTIONS
  // ============================================================
  quizQuestions: {
    multipleChoice: [
      { prompt: 'What does ذَلِكَ mean?', options: ['This (close)', 'That (far)', 'What?', 'Who?'], correct: 1 },
      { prompt: 'Translate: ذَلِكَ كِتَابٌ', options: ['This is a pen.', 'That is a key.', 'That is a book.', 'This is a book.'], correct: 2 },
      { prompt: 'How do you say "What is that?"', options: ['مَا هٰذَا؟', 'مَنْ هٰذَا؟', 'مَا ذَلِكَ؟', 'أَذَلِكَ بَيْتٌ؟'], correct: 2 },
      { prompt: 'Which sentence means "This is a pen and that is a book"?', options: ['ذَلِكَ قَلَمٌ وَهٰذَا كِتَابٌ', 'هٰذَا قَلَمٌ وَذَلِكَ كِتَابٌ', 'هٰذَا كِتَابٌ وَذَلِكَ قَلَمٌ', 'ذَلِكَ كِتَابٌ وَهٰذَا قَلَمٌ'], correct: 1 },
      { prompt: 'What is لَبَنٌ?', options: ['Sugar', 'Stone', 'Milk', 'Key'], correct: 2 },
      { prompt: 'Which word means "and" in Arabic?', options: ['مَا', 'مَنْ', 'وَ', 'أَ'], correct: 2 }
    ],
    typing: [
      { prompt: 'Type in Arabic: "That is a house."', ideal: 'ذَلِكَ بَيْتٌ', accepts: ['ذلك بيت', 'ذَلِكَ بَيْتٌ', 'ذلك بيتٌ', 'ذَلِكَ بيت'] },
      { prompt: 'Type in Arabic: "What is that?"', ideal: 'مَا ذَلِكَ؟', accepts: ['ما ذلك', 'مَا ذَلِكَ', 'ما ذلك؟', 'مَا ذَلِكَ؟'] }
    ]
  }
};
