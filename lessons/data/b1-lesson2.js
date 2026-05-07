/* ============================================================
   b1-lesson2.js — Lesson 2 Data
   ============================================================ */

const LESSON_DATA = {
  book: 'book1',
  lessonNum: 2,
  titleArabic: 'ذٰلِكَ',
  titleEnglish: 'That is...',
  summary: 'You already know هٰذَا for something close. Now learn ذٰلِكَ for something farther away, using the same simple sentence patterns.',
  nextLesson: 'b1-lesson3.html',
  passMark: 8,
  totalQuestions: 11,

  guidedPattern: 'هٰذَا / ذٰلِكَ',
  guidedIntro: 'هٰذَا points to something close. ذٰلِكَ points to something farther away. The questions and answers work just like Lesson 1.',
  reviewVocabAtEnd: true,
  skipMidMilestone: true,

  guidedPages: [
    {
      titleArabic: 'الدَّرْسُ الثَّانِي',
      title: 'Lesson Two',
      pattern: 'ذٰلِكَ',
      intro: 'Use ذٰلِكَ when the thing you are pointing to is farther away.',
      groups: [
        {
          icon: '⭐',
          lines: [
            { ar: 'مَا ذٰلِكَ؟', isPrompt: true },
            { ar: 'ذٰلِكَ نَجْمٌ.' }
          ]
        },
        {
          icon: '🕌🏠',
          lines: [
            { ar: 'هٰذَا مَسْجِدٌ وَذٰلِكَ بَيْتٌ.' }
          ]
        },
        {
          icon: '🐎🫏',
          lines: [
            { ar: 'هٰذَا حِصَانٌ وَذٰلِكَ حِمَارٌ.' }
          ]
        },
        {
          icon: '🐈',
          lines: [
            { ar: 'أَذٰلِكَ كَلْبٌ؟', isPrompt: true },
            { ar: 'لا، ذٰلِكَ قِطٌّ.' }
          ]
        },
        {
          icon: '🛏️',
          lines: [
            { ar: 'مَا ذٰلِكَ؟', isPrompt: true },
            { ar: 'ذٰلِكَ سَرِيرٌ.' }
          ]
        }
      ],
      keyPoints: ['ذٰلِكَ = that', 'هٰذَا = this', 'وَ joins two ideas: this ... and that ...']
    },
    {
      titleArabic: 'صَفْحَة ١٣',
      title: 'Who is this and who is that?',
      pattern: 'مَنْ هٰذَا وَمَنْ ذٰلِكَ؟',
      intro: 'Now use هٰذَا and ذٰلِكَ with people and a few new words.',
      groups: [
        {
          icon: '🏫🕌',
          lines: [
            { ar: 'مَنْ هٰذَا وَمَنْ ذٰلِكَ؟', isPrompt: true },
            { ar: 'هٰذَا مُدَرِّسٌ وَذٰلِكَ إِمَامٌ.' }
          ]
        },
        {
          icon: '🪨',
          lines: [
            { ar: 'مَا ذٰلِكَ؟', isPrompt: true },
            { ar: 'ذٰلِكَ حَجَرٌ.' }
          ]
        },
        {
          icon: '🍬🥛',
          lines: [
            { ar: 'هٰذَا سُكَّرٌ وَذٰلِكَ لَبَنٌ.' }
          ]
        }
      ],
      keyPoints: ['مَنْ = who?', 'إِمَامٌ = an imam', 'حَجَرٌ = a stone', 'سُكَّرٌ = sugar', 'لَبَنٌ = milk']
    }
  ],

  // ============================================================
  // VOCABULARY
  // ============================================================
  vocab: [
    { ar: 'ذٰلِكَ', trans: 'dhālika', meaning: 'That', type: 'Demonstrative' },
    { ar: 'مَا ذٰلِكَ؟', trans: 'mā dhālika?', meaning: 'What is that?', type: 'Question' },
    { ar: 'مَنْ ذٰلِكَ؟', trans: 'man dhālika?', meaning: 'Who is that?', type: 'Question' },
    { ar: 'أَذٰلِكَ', trans: 'a-dhālika', meaning: 'Is that...?', type: 'Question prefix' },
    { ar: 'إِمَامٌ', trans: 'imāmun', meaning: 'An imam', type: 'Person' },
    { ar: 'حَجَرٌ', trans: 'ḥajarun', meaning: 'A stone', type: 'Noun' },
    { ar: 'سُكَّرٌ', trans: 'sukkarun', meaning: 'Sugar', type: 'Noun' },
    { ar: 'لَبَنٌ', trans: 'labanun', meaning: 'Milk', type: 'Noun' }
  ],

  // ============================================================
  // GRAMMAR BLOCKS
  // ============================================================
  grammarBlocks: [
    {
      title: 'This and that',
      content: '<p><strong>هٰذَا</strong> means "this" for something close. <strong>ذٰلِكَ</strong> means "that" for something farther away.</p>',
      rule: 'هٰذَا مَسْجِدٌ وَذٰلِكَ بَيْتٌ. = This is a mosque and that is a house.'
    },
    {
      title: 'Questions with ذٰلِكَ',
      content: '<p>The Lesson 1 question patterns stay the same. Replace هٰذَا with ذٰلِكَ when asking about something farther away.</p>',
      rule: 'مَا ذٰلِكَ؟ = What is that?<br>مَنْ ذٰلِكَ؟ = Who is that?'
    },
    {
      title: 'Joining with وَ',
      content: '<p><strong>وَ</strong> means "and". It attaches directly to the next word, so وَ + ذٰلِكَ becomes <strong>وَذٰلِكَ</strong>.</p>',
      rule: 'هٰذَا سُكَّرٌ وَذٰلِكَ لَبَنٌ. = This is sugar and that is milk.'
    }
  ],

  practiceQuestions: [],

  // ============================================================
  // READING COMPREHENSION
  // ============================================================
  comprehension: {
    title: 'This and That',
    arabic: 'هٰذَا مُدَرِّسٌ وَذٰلِكَ إِمَامٌ. مَا ذٰلِكَ؟ ذٰلِكَ حَجَرٌ. هٰذَا سُكَّرٌ وَذٰلِكَ لَبَنٌ.',
    english: 'This is a teacher and that is an imam. What is that? That is a stone. This is sugar and that is milk.',
    questions: [
      {
        text: 'Who is far away in the first sentence?',
        options: ['A teacher', 'An imam', 'A doctor', 'A boy'],
        correct: 'An imam'
      },
      {
        text: 'What does ذٰلِكَ حَجَرٌ mean?',
        options: ['This is a stone.', 'That is a stone.', 'This is sugar.', 'That is milk.'],
        correct: 'That is a stone.'
      },
      {
        text: 'Which word means milk?',
        options: ['سُكَّرٌ', 'حَجَرٌ', 'لَبَنٌ', 'إِمَامٌ'],
        correct: 'لَبَنٌ'
      }
    ]
  },

  // ============================================================
  // QUIZ QUESTIONS
  // ============================================================
  quizQuestions: {
    multipleChoice: [
      { prompt: 'What does ذٰلِكَ mean?', options: ['This', 'That', 'Who?', 'And'], correct: 1 },
      { prompt: 'How do you say "What is that?"', options: ['مَا هٰذَا؟', 'مَنْ هٰذَا؟', 'مَا ذٰلِكَ؟', 'أَذٰلِكَ كَلْبٌ؟'], correct: 2 },
      { prompt: 'Translate: ذٰلِكَ حَجَرٌ.', options: ['This is sugar.', 'That is a stone.', 'That is milk.', 'This is a teacher.'], correct: 1 },
      { prompt: 'Which sentence means "This is sugar and that is milk"?', options: ['هٰذَا لَبَنٌ وَذٰلِكَ سُكَّرٌ.', 'هٰذَا سُكَّرٌ وَذٰلِكَ لَبَنٌ.', 'ذٰلِكَ سُكَّرٌ وَهٰذَا لَبَنٌ.', 'هٰذَا حَجَرٌ وَذٰلِكَ لَبَنٌ.'], correct: 1 },
      { prompt: 'What is إِمَامٌ?', options: ['An imam', 'A stone', 'Sugar', 'Milk'], correct: 0 },
      { prompt: 'What does وَ mean?', options: ['No', 'What?', 'And', 'That'], correct: 2 }
    ],
    typing: [
      {
        prompt: 'Type in Arabic: "That is a stone."',
        ideal: 'ذٰلِكَ حَجَرٌ.',
        accepts: ['ذلك حجر', 'ذلك حجر.', 'ذٰلِكَ حَجَرٌ', 'ذٰلِكَ حَجَرٌ.']
      },
      {
        prompt: 'Type in Arabic: "This is sugar and that is milk."',
        ideal: 'هٰذَا سُكَّرٌ وَذٰلِكَ لَبَنٌ.',
        accepts: ['هذا سكر وذلك لبن', 'هذا سكر وذلك لبن.', 'هٰذَا سُكَّرٌ وَذٰلِكَ لَبَنٌ', 'هٰذَا سُكَّرٌ وَذٰلِكَ لَبَنٌ.']
      }
    ],
    conceptCheck: [
      {
        statement: 'ذٰلِكَ is used for something farther away, while هٰذَا is used for something close.',
        correct: true,
        explanation: 'Lesson 2 keeps the same sentence pattern as Lesson 1, but changes the pointing word. هٰذَا means "this"; ذٰلِكَ means "that".'
      },
      {
        statement: 'مَنْ ذٰلِكَ؟ asks about a thing, like a stone or milk.',
        correct: false,
        explanation: 'مَنْ asks "who?", so it is used for people. For things, use مَا: مَا ذٰلِكَ؟ means "What is that?"'
      },
      {
        statement: 'In وَذٰلِكَ, the وَ means "and" and attaches directly to ذٰلِكَ.',
        correct: true,
        explanation: 'Arabic writes وَ directly onto the next word. So وَ + ذٰلِكَ becomes وَذٰلِكَ, meaning "and that".'
      }
    ]
  }
};
