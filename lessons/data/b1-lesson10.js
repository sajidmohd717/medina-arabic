/* ============================================================
   b1-lesson10.js â€” Lesson 10 Data
   ============================================================ */

const LESSON_DATA = {
  book: 'book1',
  lessonNum: 10,
  titleArabic: 'Ø§Ù„Ø¶ÙŽÙ‘Ù…ÙŽØ§Ø¦ÙØ±Ù Ø§Ù„Ù’Ù…ÙØªÙŽÙ‘ØµÙÙ„ÙŽØ©Ù',
  titleEnglish: 'Attached Pronouns',
  summary: 'In this lesson, you will learn how to show possession and relationships using attached pronouns (suffixes). You will also learn the difference between "having" an object and "having" a relative, and introduce the word Ù…ÙŽØ¹ÙŽ (with).',
  nextLesson: 'b1-lesson11.html',
  passMark: 6,
  totalQuestions: 12,
  
  // ============================================================
  // VOCABULARY
  // ============================================================
  vocab: [
    // Pronoun suffixes
    { ar: 'Ù€ÙÙŠ', trans: '-Ä«', meaning: 'My / Mine', type: 'Pronoun suffix' },
    { ar: 'Ù€ÙƒÙŽ', trans: '-ka', meaning: 'Your / Yours (masc.)', type: 'Pronoun suffix' },
    { ar: 'Ù€ÙƒÙ', trans: '-ki', meaning: 'Your / Yours (fem.)', type: 'Pronoun suffix' },
    { ar: 'Ù€Ù‡Ù', trans: '-hu', meaning: 'His / Its (masc.)', type: 'Pronoun suffix' },
    { ar: 'Ù€Ù‡ÙŽØ§', trans: '-hÄ', meaning: 'Her / Its (fem.)', type: 'Pronoun suffix' },
    
    // Family & People
    { ar: 'Ø£ÙŽØ¨ÙŒ', trans: 'abun', meaning: 'Father', type: 'Noun' },
    { ar: 'Ø£ÙŽØ®ÙŒ', trans: 'akhun', meaning: 'Brother', type: 'Noun' },
    { ar: 'Ø²ÙŽÙ…ÙÙŠÙ„ÙŒ', trans: 'zamÄ«lun', meaning: 'Colleague / Classmate', type: 'Noun' },
    { ar: 'Ø²ÙŽÙˆÙ’Ø¬ÙŒ', trans: 'zawjun', meaning: 'Husband', type: 'Noun' },
    { ar: 'Ø·ÙÙÙ’Ù„ÙŒ', trans: 'á¹­iflun', meaning: 'Child / Infant', type: 'Noun' },
    { ar: 'ÙÙŽØªÙ‹Ù‰', trans: 'fatan', meaning: 'Young man', type: 'Noun' },
    
    // Prepositions & Particles
    { ar: 'Ø¹ÙÙ†Ù’Ø¯ÙŽ', trans: 'Ê¿inda', meaning: 'With / At / Has (possession)', type: 'Preposition/Adverb' },
    { ar: 'Ù…ÙŽØ¹ÙŽ', trans: 'maÊ¿a', meaning: 'With (physical company)', type: 'Preposition' },
    { ar: 'Ù„ÙÙŠ', trans: 'lÄ«', meaning: 'I have (for relatives)', type: 'Phrase' },
    { ar: 'Ø£ÙØ­ÙØ¨ÙÙ‘', trans: 'uá¸¥ibbu', meaning: 'I love / I like', type: 'Verb' },
    
    // Places
    { ar: 'Ø§Ù„Ù’ÙƒÙÙˆÙŽÙŠÙ’ØªÙ', trans: 'al-kuwaytu', meaning: 'Kuwait', type: 'Noun' }
  ],
  
  // ============================================================
  // GRAMMAR BLOCKS
  // ============================================================
  grammarBlocks: [
    {
      title: 'Attached Pronouns (Possessive)',
      content: '<p>Instead of using separate words for "my" or "your", Arabic attaches short suffixes to the end of nouns.</p><ul><li><strong>ÙƒÙØªÙŽØ§Ø¨ÙŒ</strong> (Book) + <strong>Ù€ÙÙŠ</strong> = <strong>ÙƒÙØªÙŽØ§Ø¨ÙÙŠ</strong> (My book)</li><li><strong>ÙƒÙØªÙŽØ§Ø¨ÙŒ</strong> + <strong>Ù€ÙƒÙŽ</strong> = <strong>ÙƒÙØªÙŽØ§Ø¨ÙÙƒÙŽ</strong> (Your book - masc.)</li><li><strong>ÙƒÙØªÙŽØ§Ø¨ÙŒ</strong> + <strong>Ù€Ù‡Ù</strong> = <strong>ÙƒÙØªÙŽØ§Ø¨ÙÙ‡Ù</strong> (His book)</li></ul>',
      rule: 'Noun + Suffix = Possession. Note: The tanwÄ«n is removed when a suffix is attached.'
    },
    {
      title: 'Expressing "To Have"',
      content: '<p>Arabic uses different words for "have" depending on what you possess:</p><ul><li><strong>Ø¹ÙÙ†Ù’Ø¯ÙÙŠ</strong> (Ê¿indÄ«): For objects (e.g., "I have a pen").</li><li><strong>Ù„ÙÙŠ</strong> (lÄ«): For people/relatives (e.g., "I have a brother").</li></ul>',
      rule: 'Use Ø¹ÙÙ†Ù’Ø¯ÙŽ for things, and Ù„ÙÙ€ for people.'
    },
    {
      title: 'Ù…ÙŽØ¹ÙŽ vs. Ø¹ÙÙ†Ù’Ø¯ÙŽ',
      content: '<p>Both can be translated as "with", but they are used differently:</p><ul><li><strong>Ø¹ÙÙ†Ù’Ø¯ÙÙŠ</strong> means you "own" it or it is "at" your place.</li><li><strong>Ù…ÙŽØ¹ÙÙŠ</strong> means it is physically "with" you right now.</li></ul>',
      rule: 'Ù…ÙŽØ¹ÙÙŠ means "in my company" or "in my pocket/hand".'
    }
  ],
  
  // ============================================================
  // EXAMPLE SENTENCES
  // ============================================================
  examples: [
    { ar: 'Ù…ÙŽØ§ Ø§Ø³Ù’Ù…ÙÙƒÙŽØŸ Ø§Ø³Ù’Ù…ÙÙŠ Ù…ÙØ­ÙŽÙ…ÙŽÙ‘Ø¯ÙŒ', trans: 'mÄ smuka? ismÄ« muá¸¥ammadun', meaning: 'What is your name? My name is Muhammad.' },
    { ar: 'Ø£ÙŽÙŠÙ’Ù†ÙŽ Ø£ÙŽØ¨ÙÙˆÙƒÙŽØŸ Ø£ÙŽØ¨ÙÙŠ ÙÙÙŠ Ø§Ù„Ù’ÙƒÙÙˆÙŽÙŠÙ’ØªÙ', trans: 'ayna abÅ«ka? abÄ« fÄ« l-kuwayti', meaning: 'Where is your father? My father is in Kuwait.' },
    { ar: 'Ù„ÙÙŠ Ø£ÙŽØ®ÙŒ ÙˆÙŽØ§Ø­ÙØ¯ÙŒ', trans: 'lÄ« akhun wÄá¸¥idun', meaning: 'I have one brother.' },
    { ar: 'Ø¹ÙÙ†Ù’Ø¯ÙÙŠ Ø³ÙŽÙŠÙŽÙ‘Ø§Ø±ÙŽØ©ÙŒ Ø¬ÙŽÙ…ÙÙŠÙ„ÙŽØ©ÙŒ', trans: 'Ê¿indÄ« sayyÄratun jamÄ«latun', meaning: 'I have a beautiful car.' },
    { ar: 'Ù…ÙŽÙ†Ù’ Ù…ÙŽØ¹ÙŽÙƒÙŽØŸ Ù…ÙŽØ¹ÙÙŠ Ø²ÙŽÙ…ÙÙŠÙ„ÙÙŠ', trans: 'man maÊ¿aka? maÊ¿Ä« zamÄ«lÄ«', meaning: 'Who is with you? With me is my colleague.' },
    { ar: 'Ø£ÙŽØ­ÙŽÙ‚ÙÙŠØ¨ÙŽØªÙÙƒÙŽ Ù‡ÙŽØ°ÙÙ‡ÙØŸ Ù„Ø§ØŒ Ù‡ÙÙŠÙŽ Ø­ÙŽÙ‚ÙÙŠØ¨ÙŽØ©Ù Ø²ÙŽÙ…ÙÙŠÙ„ÙÙŠ', trans: 'a-á¸¥aqÄ«batuka hÄdhidi? lÄ, hiya á¸¥aqÄ«batu zamÄ«lÄ«', meaning: 'Is this your bag? No, it is my colleague\'s bag.' },
    { ar: 'Ø£ÙØ­ÙØ¨ÙÙ‘ Ø£ÙŽØ¨ÙÙŠ ÙˆÙŽØ£ÙÙ…ÙÙ‘ÙŠ', trans: 'uá¸¥ibbu abÄ« wa-ummÄ«', meaning: 'I love my father and my mother.' },
    { ar: 'Ø²ÙŽÙˆÙ’Ø¬ÙÙ‡ÙŽØ§ ÙÙÙŠ Ø§Ù„Ù’Ù…ÙØ³Ù’ØªÙŽØ´Ù’ÙÙŽÙ‰', trans: 'zawjuhÄ fÄ« l-mustashfÄ', meaning: 'Her husband is in the hospital.' }
  ],
  
  // ============================================================
  // READING COMPREHENSION
  // ============================================================
  comprehension: {
    title: 'My New Colleague',
    arabic: 'Ù‡ÙŽØ°ÙŽØ§ Ø²ÙŽÙ…ÙÙŠÙ„ÙÙŠ. Ø§Ø³Ù’Ù…ÙÙ‡Ù Ø®ÙŽØ§Ù„ÙØ¯ÙŒ. Ù‡ÙÙˆÙŽ Ù…ÙÙ†ÙŽ Ø§Ù„Ù’ÙƒÙÙˆÙŽÙŠÙ’ØªÙ. Ø®ÙŽØ§Ù„ÙØ¯ÙŒ Ø·ÙŽØ§Ù„ÙØ¨ÙŒ Ø¬ÙŽØ¯ÙÙŠØ¯ÙŒ ÙÙÙŠ Ù…ÙŽØ¯Ù’Ø±ÙŽØ³ÙŽØªÙÙŠ. Ø¹ÙÙ†Ù’Ø¯ÙŽÙ‡Ù Ù‚ÙŽÙ„ÙŽÙ…ÙŒ Ø¬ÙŽÙ…ÙÙŠÙ„ÙŒ ÙˆÙŽÙƒÙØªÙŽØ§Ø¨ÙŒ Ù‚ÙŽØ¯ÙÙŠÙ…ÙŒ. Ù…ÙŽØ¹ÙŽÙ‡Ù Ø­ÙŽÙ‚ÙÙŠØ¨ÙŽØªÙÙ‡Ù Ø§Ù„Ø³ÙŽÙ‘ÙˆÙ’Ø¯ÙŽØ§Ø¡Ù. Ù„ÙŽÙ‡Ù Ø£ÙŽØ®ÙŒ ÙˆÙŽØ§Ø­ÙØ¯ÙŒ ÙˆÙŽØ£ÙØ®Ù’ØªÙŒ ÙˆÙŽØ§Ø­ÙØ¯ÙŽØ©ÙŒ. Ø£ÙŽØ¨ÙÙˆÙ‡Ù Ù…ÙÙ‡ÙŽÙ†Ù’Ø¯ÙØ³ÙŒ Ø´ÙŽÙ‡ÙÙŠØ±ÙŒ ÙˆÙŽØ£ÙÙ…ÙÙ‘Ù‡Ù Ø·ÙŽØ¨ÙÙŠØ¨ÙŽØ©ÙŒ. Ø£ÙŽÙ†ÙŽØ§ Ø£ÙØ­ÙØ¨ÙÙ‘ Ø²ÙŽÙ…ÙÙŠÙ„ÙÙŠ Ø®ÙŽØ§Ù„ÙØ¯Ù‹Ø§.',
    english: 'This is my colleague. His name is Khalid. He is from Kuwait. Khalid is a new student in my school. He has a beautiful pen and an old book. With him is his black bag. He has one brother and one sister. His father is a famous engineer and his mother is a doctor. I love my colleague Khalid.',
    questions: [
      {
        text: 'Where is Khalid from?',
        options: ['India', 'Japan', 'Kuwait', 'Egypt'],
        correct: 'Kuwait'
      },
      {
        text: 'What does Khalid have (Ø¹ÙÙ†Ù’Ø¯ÙŽÙ‡Ù)?',
        options: ['A new car', 'A beautiful pen and old book', 'A small cat', 'A large house'],
        correct: 'A beautiful pen and old book'
      },
      {
        text: 'How many siblings does Khalid have?',
        options: ['Two brothers', 'One brother and one sister', 'No siblings', 'Three sisters'],
        correct: 'One brother and one sister'
      },
      {
        text: 'What is the profession of Khalid\'s father?',
        options: ['A doctor', 'A teacher', 'A famous engineer', 'A merchant'],
        correct: 'A famous engineer'
      }
    ]
  },
  
  // ============================================================
  // PRACTICE QUESTIONS
  // ============================================================
  practiceQuestions: [
    { arabic: 'ÙƒÙØªÙŽØ§Ø¨ÙÙŠ', correct: 'My book', options: ['Your book', 'My book', 'His book', 'Her book'] },
    { arabic: 'Ø¹ÙÙ†Ù’Ø¯ÙÙŠ Ù‚ÙŽÙ„ÙŽÙ…ÙŒ', correct: 'I have a pen', options: ['I have a brother', 'I have a pen', 'With me is a pen', 'This is a pen'] },
    { text: 'Which suffix means "His"?', correct: 'Ù€Ù‡Ù', options: ['Ù€ÙƒÙŽ', 'Ù€ÙƒÙ', 'Ù€Ù‡Ù', 'Ù€Ù‡ÙŽØ§'] },
    { text: 'How do you say "I have a brother"?', correct: 'Ù„ÙÙŠ Ø£ÙŽØ®ÙŒ', options: ['Ø¹ÙÙ†Ù’Ø¯ÙÙŠ Ø£ÙŽØ®ÙŒ', 'Ù„ÙÙŠ Ø£ÙŽØ®ÙŒ', 'Ù…ÙŽØ¹ÙÙŠ Ø£ÙŽØ®ÙŒ', 'Ø£ÙŽÙ†ÙŽØ§ Ø£ÙŽØ®ÙŒ'] },
    { text: 'What is the feminine form of "Your name"?', correct: 'Ø§Ø³Ù’Ù…ÙÙƒÙ', options: ['Ø§Ø³Ù’Ù…ÙÙƒÙŽ', 'Ø§Ø³Ù’Ù…ÙÙƒÙ', 'Ø§Ø³Ù’Ù…ÙÙ‡Ù', 'Ø§Ø³Ù’Ù…ÙÙŠ'] },
    { text: 'Translate: "With me is my colleague."', correct: 'Ù…ÙŽØ¹ÙÙŠ Ø²ÙŽÙ…ÙÙŠÙ„ÙÙŠ', options: ['Ø¹ÙÙ†Ù’Ø¯ÙÙŠ Ø²ÙŽÙ…ÙÙŠÙ„ÙÙŠ', 'Ù…ÙŽØ¹ÙÙŠ Ø²ÙŽÙ…ÙÙŠÙ„ÙÙŠ', 'Ù„ÙÙŠ Ø²ÙŽÙ…ÙÙŠÙ„ÙÙŠ', 'Ø£ÙŽÙ†ÙŽØ§ Ø²ÙŽÙ…ÙÙŠÙ„ÙÙŠ'] }
  ],
  
  // ============================================================
  // QUIZ QUESTIONS
  // ============================================================
  quizQuestions: {
    multipleChoice: [
      { prompt: 'Translate: "His house"', options: ['Ø¨ÙŽÙŠÙ’ØªÙÙƒÙŽ', 'Ø¨ÙŽÙŠÙ’ØªÙÙ‡ÙŽØ§', 'Ø¨ÙŽÙŠÙ’ØªÙÙ‡Ù', 'Ø¨ÙŽÙŠÙ’ØªÙÙŠ'], correct: 2 },
      { prompt: 'Translate: "Your (fem.) pen"', options: ['Ù‚ÙŽÙ„ÙŽÙ…ÙÙƒÙŽ', 'Ù‚ÙŽÙ„ÙŽÙ…ÙÙƒÙ', 'Ù‚ÙŽÙ„ÙŽÙ…ÙÙ‡Ù', 'Ù‚ÙŽÙ„ÙŽÙ…ÙÙŠ'], correct: 1 },
      { prompt: 'Which word is used for "having" a relative?', options: ['Ø¹ÙÙ†Ù’Ø¯ÙŽ', 'Ù…ÙŽØ¹ÙŽ', 'Ù„ÙÙ€', 'ÙÙÙŠ'], correct: 2 },
      { prompt: 'Translate: "My father is in the mosque."', options: ['Ø£ÙŽØ¨ÙÙˆÙ‡Ù ÙÙÙŠ Ø§Ù„Ù’Ù…ÙŽØ³Ù’Ø¬ÙØ¯Ù', 'Ø£ÙŽØ¨ÙÙŠ ÙÙÙŠ Ø§Ù„Ù’Ù…ÙŽØ³Ù’Ø¬ÙØ¯Ù', 'Ø£ÙŽØ¨ÙÙˆÙƒÙŽ ÙÙÙŠ Ø§Ù„Ù’Ù…ÙŽØ³Ù’Ø¬ÙØ¯Ù', 'Ø£ÙŽØ¨ÙÙŠ ÙÙÙŠ Ø§Ù„Ù’Ø¨ÙŽÙŠÙ’ØªÙ'], correct: 1 },
      { prompt: 'What does Ø²ÙŽÙ…ÙÙŠÙ„ÙÙŠ mean?', options: ['My friend', 'My brother', 'My colleague', 'My teacher'], correct: 2 },
      { prompt: 'Translate: "What is your (masc.) name?"', options: ['Ù…ÙŽØ§ Ø§Ø³Ù’Ù…ÙÙƒÙØŸ', 'Ù…ÙŽØ§ Ø§Ø³Ù’Ù…ÙÙƒÙŽØŸ', 'Ù…ÙŽØ§ Ø§Ø³Ù’Ù…ÙÙ‡ÙØŸ', 'Ù…ÙŽØ§ Ø§Ø³Ù’Ù…ÙÙŠØŸ'], correct: 1 },
      { prompt: 'Translate: "I have a car."', options: ['Ù„ÙÙŠ Ø³ÙŽÙŠÙŽÙ‘Ø§Ø±ÙŽØ©ÙŒ', 'Ø¹ÙÙ†Ù’Ø¯ÙÙŠ Ø³ÙŽÙŠÙŽÙ‘Ø§Ø±ÙŽØ©ÙŒ', 'Ù…ÙŽØ¹ÙÙŠ Ø³ÙŽÙŠÙŽÙ‘Ø§Ø±ÙŽØ©ÙŒ', 'Ø£ÙŽÙ†ÙŽØ§ Ø³ÙŽÙŠÙŽÙ‘Ø§Ø±ÙŽØ©ÙŒ'], correct: 1 },
      { prompt: 'Which suffix means "Her"?', options: ['Ù€Ù‡Ù', 'Ù€Ù‡ÙŽØ§', 'Ù€ÙƒÙŽ', 'Ù€ÙƒÙ'], correct: 1 },
      { prompt: 'Translate: "Who is with you (masc.)?"', options: ['Ù…ÙŽÙ†Ù’ Ù…ÙŽØ¹ÙŽÙƒÙŽØŸ', 'Ù…ÙŽÙ†Ù’ Ù…ÙŽØ¹ÙŽÙƒÙØŸ', 'Ù…ÙŽÙ†Ù’ Ø¹ÙÙ†Ù’Ø¯ÙŽÙƒÙŽØŸ', 'Ù…ÙŽÙ†Ù’ Ù„ÙŽÙƒÙŽØŸ'], correct: 0 },
      { prompt: 'What does Ø£ÙØ­ÙØ¨ÙÙ‘ mean?', options: ['I go', 'I sit', 'I love / like', 'I have'], correct: 2 }
    ],
    typing: [
      { prompt: 'Type in Arabic: "My book"', ideal: 'ÙƒÙØªÙŽØ§Ø¨ÙÙŠ', accepts: ['ÙƒØªØ§Ø¨ÙŠ', 'ÙƒÙØªÙŽØ§Ø¨ÙÙŠ', 'ÙƒØªØ§Ø¨ÙŠÙŽ'] },
      { prompt: 'Type in Arabic: "I have a pen"', ideal: 'Ø¹ÙÙ†Ù’Ø¯ÙÙŠ Ù‚ÙŽÙ„ÙŽÙ…ÙŒ', accepts: ['Ø¹Ù†Ø¯ÙŠ Ù‚Ù„Ù…', 'Ø¹ÙÙ†Ù’Ø¯ÙÙŠ Ù‚ÙŽÙ„ÙŽÙ…ÙŒ', 'Ø¹Ù†Ø¯ÙŠ Ù‚Ù„Ù…ÙŒ', 'Ø¹ÙÙ†Ù’Ø¯ÙÙŠ Ù‚Ù„Ù…'] }
    ]
  }
};

