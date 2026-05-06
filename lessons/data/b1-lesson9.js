/* ============================================================
   b1-lesson9.js â€” Lesson 9 Data
   ============================================================ */

const LESSON_DATA = {
  book: 'book1',
  lessonNum: 9,
  titleArabic: 'Ø§Ù„Ù†ÙŽÙ‘Ø¹Ù’ØªÙ ÙˆÙŽØ§Ù„Ù’Ù…ÙŽÙ†Ù’Ø¹ÙÙˆØªÙ',
  titleEnglish: 'Adjectives (Qualifying Nouns)',
  summary: 'In this lesson, you will learn how to use adjectives (Na\'t) to describe nouns (Man\'ut). You will discover the "Golden Rule" of Arabic adjectives: they must match the noun they describe in gender, definiteness, and grammatical case.',
  nextLesson: 'b1-lesson10.html',
  passMark: 6,
  totalQuestions: 12,
  
  // ============================================================
  // VOCABULARY
  // ============================================================
  vocab: [
    // Grammar terms
    { ar: 'Ù†ÙŽØ¹Ù’ØªÙŒ', trans: 'na\'tun', meaning: 'Adjective / Qualifiers', type: 'Grammar' },
    { ar: 'Ù…ÙŽÙ†Ù’Ø¹ÙÙˆØªÙŒ', trans: 'man\'Å«tun', meaning: 'The noun being described', type: 'Grammar' },
    
    // Nouns
    { ar: 'Ø¹ÙØµÙ’ÙÙÙˆØ±ÙŒ', trans: 'Ê¿uá¹£fÅ«run', meaning: 'A sparrow', type: 'Noun' },
    { ar: 'Ø·ÙŽÙŠÙ’Ø±ÙŒ', trans: 'á¹­ayrun', meaning: 'A bird', type: 'Noun' },
    { ar: 'Ù„ÙØºÙŽØ©ÙŒ', trans: 'lughatun', meaning: 'A language', type: 'Noun' },
    { ar: 'Ù…ÙŽØ¯ÙÙŠÙ†ÙŽØ©ÙŒ', trans: 'madÄ«natun', meaning: 'A city', type: 'Noun' },
    { ar: 'Ø§Ù„Ù’Ù‚ÙŽØ§Ù‡ÙØ±ÙŽØ©Ù', trans: 'al-qÄhiratu', meaning: 'Cairo', type: 'Noun' },
    { ar: 'Ø§Ù„Ù’ÙŠÙŽÙˆÙ’Ù…ÙŽ', trans: 'al-yawma', meaning: 'Today', type: 'Adverb' },
    { ar: 'Ù„ÙÙ…ÙŽØ§Ø°ÙŽØ§', trans: 'limÄdhÄ', meaning: 'Why?', type: 'Interrogative' },
    { ar: 'Ø§Ù„Ù’ÙƒÙÙˆØ¨Ù', trans: 'al-kÅ«bu', meaning: 'The cup / glass', type: 'Noun' },
    
    // Adjectives (Regular)
    { ar: 'Ø´ÙŽÙ‡ÙÙŠØ±ÙŒ', trans: 'shahÄ«run', meaning: 'Famous', type: 'Adjective' },
    { ar: 'Ø³ÙŽÙ‡Ù’Ù„ÙŒ', trans: 'sahlun', meaning: 'Easy', type: 'Adjective' },
    { ar: 'ØµÙŽØ¹Ù’Ø¨ÙŒ', trans: 'á¹£aÊ¿bun', meaning: 'Difficult', type: 'Adjective' },
    { ar: 'Ù…ÙØ¬Ù’ØªÙŽÙ‡ÙØ¯ÙŒ', trans: 'mujtahidun', meaning: 'Hardworking', type: 'Adjective' },
    
    // Adjectives (Diptotes - pattern ending in -aanu, no tanwin)
    { ar: 'ÙƒÙŽØ³Ù’Ù„ÙŽØ§Ù†Ù', trans: 'kaslÄnu', meaning: 'Lazy', type: 'Adjective' },
    { ar: 'Ø¬ÙŽÙˆÙ’Ø¹ÙŽØ§Ù†Ù', trans: 'jawÊ¿Änu', meaning: 'Hungry', type: 'Adjective' },
    { ar: 'Ø¹ÙŽØ·Ù’Ø´ÙŽØ§Ù†Ù', trans: 'Ê¿aá¹­shÄnu', meaning: 'Thirsty', type: 'Adjective' },
    { ar: 'ØºÙŽØ¶Ù’Ø¨ÙŽØ§Ù†Ù', trans: 'ghaá¸bÄnu', meaning: 'Angry', type: 'Adjective' },
    { ar: 'Ù…ÙŽÙ„Ù’Ø¢Ù†Ù', trans: 'mal\'Änu', meaning: 'Full', type: 'Adjective' }
  ],
  
  // ============================================================
  // GRAMMAR BLOCKS
  // ============================================================
  grammarBlocks: [
    {
      title: 'The Noun-Adjective Phrase',
      content: '<p>In Arabic, the adjective (<strong>Na\'t</strong>) comes <u>after</u> the noun it describes (<strong>Man\'ut</strong>). For example, "A new book" is written as "Book new".</p>',
      rule: 'ÙƒÙØªÙŽØ§Ø¨ÙŒ (Man\'ut) + Ø¬ÙŽØ¯ÙÙŠØ¯ÙŒ (Na\'t) = ÙƒÙØªÙŽØ§Ø¨ÙŒ Ø¬ÙŽØ¯ÙÙŠØ¯ÙŒ (A new book).'
    },
    {
      title: 'The Matching Rule',
      content: '<p>The adjective is a "follower". It must match the noun in four things:</p><ul><li><strong>Gender</strong>: Masc/Masc or Fem/Fem.</li><li><strong>Definiteness</strong>: Both have Ø§Ù„Ù€ or both have tanwÄ«n.</li><li><strong>Case</strong>: Both end in damma, kasra, or fatha.</li></ul>',
      rule: 'Ø§Ù„Ù’Ù…ÙØ¯ÙŽØ±ÙÙ‘Ø³Ù (Definite) + Ø§Ù„Ù’Ø¬ÙŽØ¯ÙÙŠØ¯Ù (Definite) = "The new teacher."'
    },
    {
      title: 'Diptote Adjectives (-aanu)',
      content: '<p>Some adjectives follow a special pattern ending in <strong>Ù€ÙŽØ§Ù†Ù</strong> (aanu). These words <u>never</u> take tanwÄ«n and only have one damma at the end.</p>',
      rule: 'Ø£ÙŽÙ†ÙŽØ§ Ø¬ÙŽÙˆÙ’Ø¹ÙŽØ§Ù†Ù (I am hungry) â€” never say Ø¬ÙŽÙˆÙ’Ø¹ÙŽØ§Ù†ÙŒ âŒ'
    }
  ],
  
  // ============================================================
  // EXAMPLE SENTENCES
  // ============================================================
  
  // ============================================================
  // READING COMPREHENSION
  // ============================================================
  comprehension: {
    title: 'The Hardworking Student',
    arabic: 'Ù‡ÙŽØ°ÙŽØ§ Ø­ÙŽØ§Ù…ÙØ¯ÙŒ. Ù‡ÙÙˆÙŽ Ø·ÙŽØ§Ù„ÙØ¨ÙŒ Ø¬ÙŽØ¯ÙÙŠØ¯ÙŒ ÙÙÙŠ Ø§Ù„Ù’Ù…ÙŽØ¯Ù’Ø±ÙŽØ³ÙŽØ©Ù. Ø­ÙŽØ§Ù…ÙØ¯ÙŒ Ø·ÙŽØ§Ù„ÙØ¨ÙŒ Ù…ÙØ¬Ù’ØªÙŽÙ‡ÙØ¯ÙŒ ÙˆÙŽØ°ÙŽÙƒÙÙŠÙŒÙ‘. Ø§Ù„Ù’Ø¹ÙŽØ±ÙŽØ¨ÙÙŠÙŽÙ‘Ø©Ù Ù„ÙØºÙŽØ©ÙŒ Ø¬ÙŽÙ…ÙÙŠÙ„ÙŽØ©ÙŒ ÙˆÙŽØ³ÙŽÙ‡Ù’Ù„ÙŽØ©ÙŒ. Ø­ÙŽØ§Ù…ÙØ¯ÙŒ Ø¬ÙŽÙˆÙ’Ø¹ÙŽØ§Ù†Ù Ø§Ù„Ø¢Ù†ÙŽ. Ù‡ÙÙˆÙŽ ÙŠÙŽØ°Ù’Ù‡ÙŽØ¨Ù Ø¥ÙÙ„ÙŽÙ‰ Ø§Ù„Ù’Ù…ÙŽØ·Ù’Ø¹ÙŽÙ…Ù. Ø§Ù„Ù’Ù…ÙŽØ·Ù’Ø¹ÙŽÙ…Ù Ø¨ÙŽØ¹ÙÙŠØ¯ÙŒ Ø¹ÙŽÙ†Ù Ø§Ù„Ù’Ù…ÙŽØ¯Ù’Ø±ÙŽØ³ÙŽØ©Ù. Ø­ÙŽØ§Ù…ÙØ¯ÙŒ ØºÙŽØ¶Ù’Ø¨ÙŽØ§Ù†Ù Ù„ÙÙ…ÙŽØ§Ø°ÙŽØ§ØŸ Ù„ÙØ£ÙŽÙ†ÙŽÙ‘ Ø§Ù„Ù’ÙƒÙÙˆØ¨ÙŽ ÙˆÙŽØ³ÙØ®ÙŒ.',
    english: 'This is Hamid. He is a new student in the school. Hamid is a hardworking and intelligent student. Arabic is a beautiful and easy language. Hamid is hungry now. He is going to the restaurant. The restaurant is far from the school. Why is Hamid angry? Because the cup is dirty.',
    questions: [
      {
        text: 'How is Hamid described as a student?',
        options: ['Lazy and small', 'Hardworking and intelligent', 'Famous and rich', 'Old and tall'],
        correct: 'Hardworking and intelligent'
      },
      {
        text: 'What is Hamid\'s opinion of the Arabic language?',
        options: ['Difficult and old', 'Beautiful and easy', 'Famous and large', 'New and clean'],
        correct: 'Beautiful and easy'
      },
      {
        text: 'Why is Hamid going to the restaurant?',
        options: ['Because he is thirsty', 'Because he is hungry', 'Because he is angry', 'Because he is a teacher'],
        correct: 'Because he is hungry'
      },
      {
        text: 'Why is Hamid angry (ØºÙŽØ¶Ù’Ø¨ÙŽØ§Ù†) at the end?',
        options: ['Because the school is far', 'Because the restaurant is closed', 'Because the cup is dirty', 'Because the teacher is new'],
        correct: 'Because the cup is dirty'
      }
    ]
  },
  
  // ============================================================
  // PRACTICE QUESTIONS
  // ============================================================
  
  // ============================================================
  // QUIZ QUESTIONS
  // ============================================================
  quizQuestions: {
    multipleChoice: [
      { prompt: 'Translate: "A hardworking student"', options: ['Ø·ÙŽØ§Ù„ÙØ¨ÙŒ Ù…ÙØ¬Ù’ØªÙŽÙ‡ÙØ¯ÙŒ', 'Ø§Ù„Ø·ÙŽÙ‘Ø§Ù„ÙØ¨Ù Ø§Ù„Ù’Ù…ÙØ¬Ù’ØªÙŽÙ‡ÙØ¯Ù', 'Ø·ÙŽØ§Ù„ÙØ¨ÙŒ Ø¬ÙŽØ¯ÙÙŠØ¯ÙŒ', 'Ø·ÙŽØ§Ù„ÙØ¨ÙŒ ÙƒÙŽØ³Ù’Ù„ÙŽØ§Ù†Ù'], correct: 0 },
      { prompt: 'Which of these adjectives does NOT take tanwÄ«n?', options: ['Ø´ÙŽÙ‡ÙÙŠØ±ÙŒ', 'Ø³ÙŽÙ‡Ù’Ù„ÙŒ', 'ØºÙŽØ¶Ù’Ø¨ÙŽØ§Ù†Ù', 'Ø¬ÙŽÙ…ÙÙŠÙ„ÙŒ'], correct: 2 },
      { prompt: 'Translate: "The easy language"', options: ['Ù„ÙØºÙŽØ©ÙŒ Ø³ÙŽÙ‡Ù’Ù„ÙŽØ©ÙŒ', 'Ø§Ù„Ù„ÙÙ‘ØºÙŽØ©Ù Ø§Ù„Ø³ÙŽÙ‘Ù‡Ù’Ù„ÙŽØ©Ù', 'Ø§Ù„Ù„ÙÙ‘ØºÙŽØ©Ù Ø§Ù„ØµÙŽÙ‘Ø¹Ù’Ø¨ÙŽØ©Ù', 'Ù„ÙØºÙŽØ©ÙŒ Ø¬ÙŽÙ…ÙÙŠÙ„ÙŽØ©ÙŒ'], correct: 1 },
      { prompt: 'What does Ù…ÙŽÙ„Ù’Ø¢Ù†Ù mean?', options: ['Empty', 'Full', 'Broken', 'Open'], correct: 1 },
      { prompt: 'In Arabic, where does the adjective go?', options: ['Before the noun', 'After the noun', 'Inside the noun', 'Anywhere'], correct: 1 },
      { prompt: 'Translate: "I am thirsty."', options: ['Ø£ÙŽÙ†ÙŽØ§ Ø¬ÙŽÙˆÙ’Ø¹ÙŽØ§Ù†Ù', 'Ø£ÙŽÙ†ÙŽØ§ Ø¹ÙŽØ·Ù’Ø´ÙŽØ§Ù†Ù', 'Ø£ÙŽÙ†ÙŽØ§ ÙƒÙŽØ³Ù’Ù„ÙŽØ§Ù†Ù', 'Ø£ÙŽÙ†ÙŽØ§ ØºÙŽØ¶Ù’Ø¨ÙŽØ§Ù†Ù'], correct: 1 },
      { prompt: 'Which word is the Man\'ut in "Ø¨ÙŽÙŠÙ’ØªÙŒ ÙƒÙŽØ¨ÙÙŠØ±ÙŒ"?', options: ['Ø¨ÙŽÙŠÙ’ØªÙŒ', 'ÙƒÙŽØ¨ÙÙŠØ±ÙŒ'], correct: 0 },
      { prompt: 'Translate: "The large city"', options: ['Ù…ÙŽØ¯ÙÙŠÙ†ÙŽØ©ÙŒ ÙƒÙŽØ¨ÙÙŠØ±ÙŽØ©ÙŒ', 'Ø§Ù„Ù’Ù…ÙŽØ¯ÙÙŠÙ†ÙŽØ©Ù Ø§Ù„Ù’ÙƒÙŽØ¨ÙÙŠØ±ÙŽØ©Ù', 'Ø§Ù„Ù’Ù…ÙŽØ¯ÙÙŠÙ†ÙŽØ©Ù Ø§Ù„ØµÙŽÙ‘ØºÙÙŠØ±ÙŽØ©Ù', 'Ù…ÙŽØ¯ÙÙŠÙ†ÙŽØ©ÙŒ Ø¬ÙŽÙ…ÙÙŠÙ„ÙŽØ©ÙŒ'], correct: 1 },
      { prompt: 'What is the feminine form of Ø¬ÙŽØ¯ÙÙŠØ¯ÙŒ?', options: ['Ø¬ÙŽØ¯ÙÙŠØ¯ÙŽØ©ÙŒ', 'Ø¬ÙŽØ¯ÙÙŠØ¯Ù', 'Ø¬ÙŽØ¯ÙÙŠØ¯Ù', 'Ø¬ÙŽØ¯ÙÙŠØ¯ÙŽØ©Ù'], correct: 0 },
      { prompt: 'Translate: "Why?"', options: ['Ø£ÙŽÙŠÙ’Ù†ÙŽ', 'Ù…ÙŽÙ†Ù’', 'Ù…ÙŽØ§', 'Ù„ÙÙ…ÙŽØ§Ø°ÙŽØ§'], correct: 3 }
    ],
    typing: [
      { prompt: 'Type in Arabic: "Arabic is a beautiful language."', ideal: 'Ø§Ù„Ù’Ø¹ÙŽØ±ÙŽØ¨ÙÙŠÙŽÙ‘Ø©Ù Ù„ÙØºÙŽØ©ÙŒ Ø¬ÙŽÙ…ÙÙŠÙ„ÙŽØ©ÙŒ', accepts: ['Ø§Ù„Ø¹Ø±Ø¨ÙŠØ© Ù„ØºØ© Ø¬Ù…ÙŠÙ„Ø©', 'Ø§Ù„Ù’Ø¹ÙŽØ±ÙŽØ¨ÙÙŠÙŽÙ‘Ø©Ù Ù„ÙØºÙŽØ©ÙŒ Ø¬ÙŽÙ…ÙÙŠÙ„ÙŽØ©ÙŒ', 'Ø§Ù„Ø¹Ø±Ø¨ÙŠØ© Ù„ØºØ© Ø¬Ù…ÙŠÙ„Ø©ÙŒ', 'Ø§Ù„Ù’Ø¹ÙŽØ±ÙŽØ¨ÙÙŠÙŽÙ‘Ø© Ù„ÙØºÙŽØ© Ø¬ÙŽÙ…ÙÙŠÙ„ÙŽØ©'] },
      { prompt: 'Type in Arabic: "I am hungry."', ideal: 'Ø£ÙŽÙ†ÙŽØ§ Ø¬ÙŽÙˆÙ’Ø¹ÙŽØ§Ù†Ù', accepts: ['Ø£Ù†Ø§ Ø¬ÙˆØ¹Ø§Ù†', 'Ø£ÙŽÙ†ÙŽØ§ Ø¬ÙŽÙˆÙ’Ø¹ÙŽØ§Ù†Ù', 'Ø£Ù†Ø§ Ø¬ÙˆØ¹Ø§Ù†Ù', 'Ø£ÙŽÙ†ÙŽØ§ Ø¬ÙˆØ¹Ø§Ù†'] }
    ]
  }
};

