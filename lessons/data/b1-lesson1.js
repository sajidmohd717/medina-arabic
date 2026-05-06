/* ============================================================
   b1-lesson1.js — Lesson 1 Data
   ============================================================ */

const LESSON_DATA = {
  book: 'book1',
  lessonNum: 1,
  titleArabic: 'هٰذَا',
  titleEnglish: 'This is...',
  summary: 'Begin with one useful Arabic pattern: هٰذَا + nounٌ. You will learn to say "This is a..." and ask simple questions like "What is this?" and "Is this a...?"',
  nextLesson: 'b1-lesson2.html',
  passMark: 5,
  totalQuestions: 8,

  guidedPattern: 'هٰذَا + اِسْمٌ',
  guidedIntro: 'The first win is simple: هٰذَا means "this", and the noun after it names the thing. Tap any Arabic word in the cards to check its meaning.',
  reviewVocabAtEnd: true,

  guidedPages: [
    {
      titleArabic: 'الدَّرْسُ الأَوَّلُ',
      title: 'Lesson One',
      pattern: 'هٰذَا',
      intro: 'Use هٰذَا to point at something near you. Each card says: this is a...',
      cards: [
        { icon: '🚪', ar: 'هٰذَا بَابٌ' },
        { icon: '🕌', ar: 'هٰذَا مَسْجِدٌ' },
        { icon: '🏠', ar: 'هٰذَا بَيْتٌ' },
        { icon: '🔑', ar: 'هٰذَا مِفْتَاحٌ' },
        { icon: '✏️', ar: 'هٰذَا قَلَمٌ' },
        { icon: '📘', ar: 'هٰذَا كِتَابٌ' },
        { icon: '🪑', ar: 'هٰذَا كُرْسِيٌّ' },
        { icon: '🛏️', ar: 'هٰذَا سَرِيرٌ' },
        { icon: '🧾', ar: 'هٰذَا مَكْتَبٌ' }
      ],
      keyPoints: ['هٰذَا + nounٌ', 'هٰذَا كِتَابٌ']
    },
    {
      title: 'Questions and Answers',
      pattern: 'مَا هٰذَا؟',
      intro: 'Now use the same words to ask: what is this?',
      lines: [
        { ar: 'مَا هٰذَا؟', isPrompt: true },
        { ar: 'هٰذَا بَيْتٌ.' },
        { ar: 'أَهٰذَا بَيْتٌ؟', isPrompt: true },
        { ar: 'نَعَمْ، هٰذَا بَيْتٌ.' },
        { ar: 'مَا هٰذَا؟', isPrompt: true },
        { ar: 'هٰذَا قَمِيصٌ.' },
        { ar: 'أَهٰذَا سَرِيرٌ؟', isPrompt: true },
        { ar: 'لا، هٰذَا كُرْسِيٌّ.' },
        { ar: 'أَهٰذَا مِفْتَاحٌ؟', isPrompt: true },
        { ar: 'لا، هٰذَا قَلَمٌ.' },
        { ar: 'مَا هٰذَا؟', isPrompt: true },
        { ar: 'هٰذَا نَجْمٌ.' }
      ],
      keyPoints: ['مَا هٰذَا؟ = What is this?', 'أَهٰذَا ...؟ = Is this ...?', 'نَعَمْ = Yes', 'لا = No']
    },
    {
      titleArabic: 'تَمْرِين (١)',
      title: 'Exercise One',
      pattern: 'مَا هٰذَا؟',
      intro: 'Look at the picture, then answer with هٰذَا + nounٌ.',
      cards: [
        { icon: '🔑', ar: 'هٰذَا مِفْتَاحٌ.' },
        { icon: '📘', ar: 'هٰذَا كِتَابٌ.' },
        { icon: '✏️', ar: 'هٰذَا قَلَمٌ.' },
        { icon: '🚪', ar: 'هٰذَا بَابٌ.' },
        { icon: '🏠', ar: 'هٰذَا بَيْتٌ.' },
        { icon: '🪑', ar: 'هٰذَا كُرْسِيٌّ.' }
      ],
      keyPoints: ['مَا هٰذَا؟', 'هٰذَا مِفْتَاحٌ.']
    },
    {
      titleArabic: 'تَمْرِين (٢)',
      title: 'Exercise Two',
      pattern: 'أَهٰذَا ...؟',
      intro: 'Answer yes/no questions with نَعَمْ or لا.',
      lines: [
        { icon: '🕌', ar: 'أَهٰذَا بَيْتٌ؟', isPrompt: true },
        { ar: 'لا، هٰذَا مَسْجِدٌ.' },
        { icon: '✏️', ar: 'أَهٰذَا مِفْتَاحٌ؟', isPrompt: true },
        { ar: 'لا، هٰذَا قَلَمٌ.' },
        { icon: '👕', ar: 'أَهٰذَا قَمِيصٌ؟', isPrompt: true },
        { ar: 'نَعَمْ، هٰذَا قَمِيصٌ.' },
        { icon: '⭐', ar: 'أَهٰذَا نَجْمٌ؟', isPrompt: true },
        { ar: 'نَعَمْ، هٰذَا نَجْمٌ.' }
      ],
      keyPoints: ['نَعَمْ، هٰذَا بَيْتٌ.', 'لا، هٰذَا مَسْجِدٌ.']
    },
    {
      titleArabic: 'تَمْرِين (٣)',
      title: 'Read and Write',
      pattern: 'اِقْرَأْ وَاكْتُبْ',
      intro: 'Read these short sentences. This page also introduces مَنْ for people.',
      lines: [
        { ar: 'هٰذَا مَكْتَبٌ.' },
        { ar: 'هٰذَا سَرِيرٌ.' },
        { ar: 'أَهٰذَا بَيْتٌ؟', isPrompt: true },
        { ar: 'هٰذَا مَسْجِدٌ.' },
        { ar: 'مَا هٰذَا؟', isPrompt: true },
        { ar: 'لا، هٰذَا مَسْجِدٌ.' },
        { ar: 'مَنْ هٰذَا؟', isPrompt: true },
        { ar: 'هٰذَا وَلَدٌ.' },
        { ar: 'مَنْ هٰذَا؟', isPrompt: true },
        { ar: 'هٰذَا طَبِيبٌ.' },
        { ar: 'لا، هٰذَا رَجُلٌ.' },
        { ar: 'هٰذَا طَالِبٌ.' }
      ],
      keyPoints: ['مَا هٰذَا؟ = for things', 'مَنْ هٰذَا؟ = for people']
    },
    {
      title: 'Animals and And',
      pattern: 'وَ',
      intro: 'وَ means and. Animals still use مَا هٰذَا؟',
      lines: [
        { ar: 'مَا هٰذَا؟ هٰذَا مَسْجِدٌ.' },
        { ar: 'مَنْ هٰذَا؟ هٰذَا تَاجِرٌ.' },
        { ar: 'هٰذَا كَلْبٌ.' },
        { ar: 'أَهٰذَا كَلْبٌ؟', isPrompt: true },
        { ar: 'لا، هٰذَا قِطٌّ.' },
        { ar: 'هٰذَا حِمَارٌ.' },
        { ar: 'أَهٰذَا حِمَارٌ؟', isPrompt: true },
        { ar: 'لا، هٰذَا حِصَانٌ.' },
        { ar: 'وَمَا هٰذَا؟', isPrompt: true },
        { ar: 'هٰذَا جَمَلٌ.' }
      ],
      keyPoints: ['وَ = and', 'مَا هٰذَا؟ = things and animals', 'مَنْ هٰذَا؟ = people']
    },
    {
      title: 'More Reading Practice',
      pattern: 'مَا، مَنْ، أَ',
      intro: 'One final page to read through the full Lesson One pattern.',
      lines: [
        { ar: 'مَا هٰذَا؟' },
        { ar: 'هٰذَا دِيكٌ.' },
        { ar: 'مَنْ هٰذَا؟' },
        { ar: 'هٰذَا مُدَرِّسٌ.' },
        { ar: 'أَهٰذَا قَمِيصٌ؟', isPrompt: true },
        { ar: 'لا، هٰذَا مَنْدِيلٌ.' },
        { ar: 'مَا هٰذَا؟ هٰذَا قَلَمٌ.' },
        { ar: 'أَهٰذَا كَلْبٌ؟ لا، هٰذَا قِطٌّ.' },
        { ar: 'أَهٰذَا دِيكٌ؟ نَعَمْ.' },
        { ar: 'أَهٰذَا حِصَانٌ؟ لا، هٰذَا حِمَارٌ.' },
        { ar: 'مَنْ هٰذَا؟ هٰذَا رَجُلٌ.' }
      ],
      keyPoints: ['مَا هٰذَا؟', 'مَنْ هٰذَا؟', 'أَهٰذَا ...؟']
    }
  ],

  // ============================================================
  // VOCABULARY
  // ============================================================
  vocab: [
    { ar: 'هٰذَا', trans: 'hādhā', meaning: 'This / this is', type: 'Pattern word' },
    { ar: 'مَا', trans: 'mā', meaning: 'What?', type: 'Question word' },
    { ar: 'مَنْ', trans: 'man', meaning: 'Who?', type: 'Question word' },
    { ar: 'أَ', trans: 'a', meaning: 'Question prefix: is this...?', type: 'Question prefix' },
    { ar: 'أَهٰذَا', trans: 'a-hādhā', meaning: 'Is this...?', type: 'Question phrase' },
    { ar: 'نَعَمْ', trans: 'naʿam', meaning: 'Yes', type: 'Answer' },
    { ar: 'لا', trans: 'lā', meaning: 'No', type: 'Answer' },
    { ar: 'وَ', trans: 'wa', meaning: 'And', type: 'Connector' },
    { ar: 'وَمَا', trans: 'wa-mā', meaning: 'And what?', type: 'Question phrase' },
    { ar: 'بَابٌ', trans: 'bābun', meaning: 'A door', type: 'Noun' },
    { ar: 'مَسْجِدٌ', trans: 'masjidun', meaning: 'A mosque', type: 'Noun' },
    { ar: 'بَيْتٌ', trans: 'baytun', meaning: 'A house', type: 'Noun' },
    { ar: 'مِفْتَاحٌ', trans: 'miftāḥun', meaning: 'A key', type: 'Noun' },
    { ar: 'قَلَمٌ', trans: 'qalamun', meaning: 'A pen', type: 'Noun' },
    { ar: 'كِتَابٌ', trans: 'kitābun', meaning: 'A book', type: 'Noun' },
    { ar: 'كُرْسِيٌّ', trans: 'kursiyyun', meaning: 'A chair', type: 'Noun' },
    { ar: 'سَرِيرٌ', trans: 'sarīrun', meaning: 'A bed', type: 'Noun' },
    { ar: 'مَكْتَبٌ', trans: 'maktabun', meaning: 'A desk', type: 'Noun' },
    { ar: 'قَمِيصٌ', trans: 'qamīṣun', meaning: 'A shirt', type: 'Noun' },
    { ar: 'نَجْمٌ', trans: 'najmun', meaning: 'A star', type: 'Noun' },
    { ar: 'وَلَدٌ', trans: 'waladun', meaning: 'A boy', type: 'Person' },
    { ar: 'طَبِيبٌ', trans: 'ṭabībun', meaning: 'A doctor', type: 'Person' },
    { ar: 'رَجُلٌ', trans: 'rajulun', meaning: 'A man', type: 'Person' },
    { ar: 'طَالِبٌ', trans: 'ṭālibun', meaning: 'A student', type: 'Person' },
    { ar: 'تَاجِرٌ', trans: 'tājirun', meaning: 'A merchant', type: 'Person' },
    { ar: 'مُدَرِّسٌ', trans: 'mudarrisun', meaning: 'A teacher', type: 'Person' },
    { ar: 'كَلْبٌ', trans: 'kalbun', meaning: 'A dog', type: 'Animal' },
    { ar: 'قِطٌّ', trans: 'qiṭṭun', meaning: 'A cat', type: 'Animal' },
    { ar: 'حِمَارٌ', trans: 'ḥimārun', meaning: 'A donkey', type: 'Animal' },
    { ar: 'حِصَانٌ', trans: 'ḥiṣānun', meaning: 'A horse', type: 'Animal' },
    { ar: 'جَمَلٌ', trans: 'jamalun', meaning: 'A camel', type: 'Animal' },
    { ar: 'دِيكٌ', trans: 'dīkun', meaning: 'A rooster', type: 'Animal' },
    { ar: 'مَنْدِيلٌ', trans: 'mandīlun', meaning: 'A handkerchief', type: 'Noun' },
    { ar: 'اِقْرَأْ', trans: 'iqraʾ', meaning: 'Read', type: 'Command' },
    { ar: 'وَاكْتُبْ', trans: 'waktub', meaning: 'And write', type: 'Command' },
    { ar: 'اُكْتُبْ', trans: 'uktub', meaning: 'Write', type: 'Command' }
  ],

  // ============================================================
  // GRAMMAR BLOCKS
  // ============================================================
  grammarBlocks: [
    {
      title: 'The first pattern',
      content: '<p><strong>هٰذَا</strong> means "this" or "this is". Arabic does not need a separate word for "is" in this sentence.</p>',
      rule: 'هٰذَا بَيْتٌ = This is a house.'
    },
    {
      title: 'Ask: what is this?',
      content: '<p>Put <strong>مَا</strong> before هٰذَا to ask what something is.</p>',
      rule: 'مَا هٰذَا؟ = What is this?'
    },
    {
      title: 'Ask: is this...?',
      content: '<p>Put <strong>أَ</strong> at the start to ask a yes/no question. Answer with <strong>نَعَمْ</strong> for yes or <strong>لا</strong> for no.</p>',
      rule: 'أَهٰذَا بَيْتٌ؟ = Is this a house?<br>نَعَمْ، هٰذَا بَيْتٌ. = Yes, this is a house.<br>لا، هٰذَا كُرْسِيٌّ. = No, this is a chair.'
    }
  ],

  // ============================================================
  // EXAMPLE SENTENCES
  // ============================================================
  examples: [
    { ar: 'مَا هٰذَا؟', trans: 'mā hādhā?', meaning: 'What is this?' },
    { ar: 'هٰذَا بَيْتٌ.', trans: 'hādhā baytun', meaning: 'This is a house.' },
    { ar: 'أَهٰذَا بَيْتٌ؟', trans: 'a-hādhā baytun?', meaning: 'Is this a house?' },
    { ar: 'نَعَمْ، هٰذَا بَيْتٌ.', trans: 'naʿam, hādhā baytun', meaning: 'Yes, this is a house.' },
    { ar: 'مَا هٰذَا؟', trans: 'mā hādhā?', meaning: 'What is this?' },
    { ar: 'هٰذَا قَمِيصٌ.', trans: 'hādhā qamīṣun', meaning: 'This is a shirt.' },
    { ar: 'أَهٰذَا سَرِيرٌ؟', trans: 'a-hādhā sarīrun?', meaning: 'Is this a bed?' },
    { ar: 'لا، هٰذَا كُرْسِيٌّ.', trans: 'lā, hādhā kursiyyun', meaning: 'No, this is a chair.' },
    { ar: 'أَهٰذَا مِفْتَاحٌ؟', trans: 'a-hādhā miftāḥun?', meaning: 'Is this a key?' },
    { ar: 'لا، هٰذَا قَلَمٌ.', trans: 'lā, hādhā qalamun', meaning: 'No, this is a pen.' },
    { ar: 'مَا هٰذَا؟', trans: 'mā hādhā?', meaning: 'What is this?' },
    { ar: 'هٰذَا نَجْمٌ.', trans: 'hādhā najmun', meaning: 'This is a star.' }
  ],

  // ============================================================
  // READING COMPREHENSION
  // ============================================================
  comprehension: {
    title: 'Simple Objects',
    arabic: 'هٰذَا بَيْتٌ. هٰذَا بَابٌ. هٰذَا مِفْتَاحٌ. هٰذَا كُرْسِيٌّ. هٰذَا كِتَابٌ وَهٰذَا قَلَمٌ. مَا هٰذَا؟ هٰذَا مَكْتَبٌ. أَهٰذَا سَرِيرٌ؟ لا، هٰذَا كُرْسِيٌّ.',
    english: 'This is a house. This is a door. This is a key. This is a chair. This is a book and this is a pen. What is this? This is a desk. Is this a bed? No, this is a chair.',
    questions: [
      {
        text: 'What is هٰذَا مِفْتَاحٌ?',
        options: ['This is a book.', 'This is a key.', 'This is a bed.', 'This is a desk.'],
        correct: 'This is a key.'
      },
      {
        text: 'How does the story answer أَهٰذَا سَرِيرٌ؟',
        options: ['Yes, this is a bed.', 'No, this is a chair.', 'No, this is a pen.', 'What is this?'],
        correct: 'No, this is a chair.'
      },
      {
        text: 'Which Arabic question means "What is this?"',
        options: ['مَا هٰذَا؟', 'هٰذَا بَابٌ', 'نَعَمْ', 'لا'],
        correct: 'مَا هٰذَا؟'
      }
    ]
  },

  // ============================================================
  // PRACTICE QUESTIONS
  // ============================================================
  practiceQuestions: [
    { arabic: 'هٰذَا كِتَابٌ', correct: 'This is a book.', options: ['This is a pen.', 'This is a book.', 'This is a house.', 'This is a door.'] },
    { arabic: 'هٰذَا مَسْجِدٌ', correct: 'This is a mosque.', options: ['This is a chair.', 'This is a book.', 'This is a mosque.', 'This is a bed.'] },
    { text: 'Which word means "a pen"?', correct: 'قَلَمٌ', options: ['كِتَابٌ', 'بَيْتٌ', 'قَلَمٌ', 'بَابٌ'] },
    { text: 'What does مَا هٰذَا؟ mean?', correct: 'What is this?', options: ['What is this?', 'Is this a house?', 'This is a key.', 'Yes.'] },
    { text: 'How do you ask "Is this a key?"', correct: 'أَهٰذَا مِفْتَاحٌ؟', options: ['مَا هٰذَا؟', 'أَهٰذَا مِفْتَاحٌ؟', 'نَعَمْ، هٰذَا مِفْتَاحٌ.', 'لا، هٰذَا قَلَمٌ.'] },
    { text: 'How do you say "No" in Arabic?', correct: 'لا', options: ['نَعَمْ', 'لا', 'مَا', 'هٰذَا'] }
  ],

  // ============================================================
  // QUIZ QUESTIONS
  // ============================================================
  quizQuestions: {
    multipleChoice: [
      { prompt: 'What does هٰذَا mean in this lesson?', options: ['That is', 'This is', 'Who is', 'Where is'], correct: 1 },
      { prompt: 'Translate into English:', arabic: 'هٰذَا بَابٌ', options: ['This is a book.', 'This is a door.', 'This is a key.', 'This is a pen.'], correct: 1 },
      { prompt: 'What does مَا هٰذَا؟ mean?', options: ['What is this?', 'Is this a house?', 'This is a mosque.', 'No.'], correct: 0 },
      { prompt: 'Which of these is "a mosque"?', options: ['بَيْتٌ', 'كُرْسِيٌّ', 'مَسْجِدٌ', 'سَرِيرٌ'], correct: 2 },
      { prompt: 'How do you say "Yes" in Arabic?', options: ['لا', 'نَعَمْ', 'مَا', 'هٰذَا'], correct: 1 },
      { prompt: 'Which Arabic sentence means "This is a chair"?', options: ['هٰذَا قَلَمٌ', 'هٰذَا كُرْسِيٌّ', 'هٰذَا بَيْتٌ', 'هٰذَا بَابٌ'], correct: 1 }
    ],
    typing: [
      { prompt: 'Type in Arabic: "This is a house."', ideal: 'هٰذَا بَيْتٌ', accepts: ['هذا بيت', 'هٰذَا بَيْتٌ', 'هذا بيتٌ', 'هَذَا بَيْتٌ', 'هَذَا بيت'] },
      { prompt: 'Type in Arabic: "What is this?"', ideal: 'مَا هٰذَا؟', accepts: ['ما هذا', 'مَا هٰذَا؟', 'مَا هَذَا؟', 'ما هٰذا'] }
    ]
  }
};
