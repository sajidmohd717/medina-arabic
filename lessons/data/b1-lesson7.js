/* ============================================================
   b1-lesson7.js â€” Lesson 7 Data
   ============================================================ */

const LESSON_DATA = {
  book: 'book1',
  lessonNum: 7,
  titleArabic: 'ØªÙÙ„Ù’ÙƒÙŽ',
  titleEnglish: 'That isâ€¦ (Feminine)',
  summary: 'In this lesson, you will learn the feminine counterpart to Ø°ÙŽÙ„ÙÙƒÙŽ, which is ØªÙÙ„Ù’ÙƒÙŽ. This word is used to point to feminine objects or people that are far away. You will also learn new vocabulary for animals and occupations.',
  nextLesson: 'b1-lesson8.html',
  passMark: 6,
  totalQuestions: 12,
  
  // ============================================================
  // VOCABULARY
  // ============================================================
  vocab: [
    // Demonstrative
    { ar: 'ØªÙÙ„Ù’ÙƒÙŽ', trans: 'tilka', meaning: 'That (fem.)', type: 'Demonstrative' },
    
    // People & Occupations
    { ar: 'Ù…ÙÙ…ÙŽØ±ÙÙ‘Ø¶ÙŽØ©ÙŒ', trans: 'mumarriá¸atun', meaning: 'A nurse (fem.)', type: 'Noun' },
    { ar: 'Ø·ÙŽØ¨ÙÙŠÙ’Ø¨ÙŽØ©ÙŒ', trans: 'á¹­abÄ«batun', meaning: 'A doctor (fem.)', type: 'Noun' },
    { ar: 'Ø·ÙŽØ§Ù„ÙØ¨ÙŽØ©ÙŒ', trans: 'á¹­Älibatun', meaning: 'A student (fem.)', type: 'Noun' },
    
    // Animals
    { ar: 'Ø¯ÙŽØ¬ÙŽØ§Ø¬ÙŽØ©ÙŒ', trans: 'dajÄjatun', meaning: 'A hen', type: 'Noun' },
    { ar: 'Ø¨ÙŽØ·ÙŽÙ‘Ø©ÙŒ', trans: 'baá¹­á¹­atun', meaning: 'A duck', type: 'Noun' },
    { ar: 'Ø¯ÙÙŠÙ’ÙƒÙŒ', trans: 'dÄ«kun', meaning: 'A rooster', type: 'Noun (Masc.)' },
    
    // Objects
    { ar: 'Ø¨ÙŽÙŠÙ’Ø¶ÙŽØ©ÙŒ', trans: 'bayá¸atun', meaning: 'An egg', type: 'Noun' },
    { ar: 'Ù…ÙØ¤ÙŽØ°ÙÙ‘Ù†ÙŒ', trans: 'mu\'adhdhinun', meaning: 'A caller to prayer', type: 'Noun (Masc.)' },
    
    // Adjectives
    { ar: 'Ø·ÙŽÙˆÙÙŠÙ’Ù„ÙŽØ©ÙŒ', trans: 'á¹­awÄ«latun', meaning: 'Tall (fem.)', type: 'Adjective' },
    { ar: 'Ù‚ÙŽØµÙÙŠÙ’Ø±ÙŽØ©ÙŒ', trans: 'qaá¹£Ä«ratun', meaning: 'Short (fem.)', type: 'Adjective' }
  ],
  
  // ============================================================
  // GRAMMAR BLOCKS
  // ============================================================
  grammarBlocks: [
    {
      title: 'The Feminine "That": ØªÙÙ„Ù’ÙƒÙŽ',
      content: '<p>Just as <strong>Ø°ÙŽÙ„ÙÙƒÙŽ</strong> (dhÄlika) is used to point to masculine nouns that are far away, <strong>ØªÙÙ„Ù’ÙƒÙŽ</strong> (tilka) is used for feminine nouns.</p>',
      rule: 'Ø°ÙŽÙ„ÙÙƒÙŽ (That - Masc.) vs. ØªÙÙ„Ù’ÙƒÙŽ (That - Fem.).'
    },
    {
      title: 'Demonstrative Summary',
      content: '<p>We now have a complete set of pointing words for singular nouns:</p><ul><li><strong>Ù‡ÙŽØ°ÙŽØ§</strong>: This (Masc., Near)</li><li><strong>Ù‡ÙŽØ°ÙÙ‡Ù</strong>: This (Fem., Near)</li><li><strong>Ø°ÙŽÙ„ÙÙƒÙŽ</strong>: That (Masc., Far)</li><li><strong>ØªÙÙ„Ù’ÙƒÙŽ</strong>: That (Fem., Far)</li></ul>',
      rule: 'Always match the gender and the distance!'
    },
    {
      title: 'Feminine Occupations',
      content: '<p>Many occupations are made feminine by adding the <strong>TÄ\' MarbÅ«á¹­a (Ø©)</strong>.</p><ul><li><strong>Ø·ÙŽØ¨ÙÙŠÙ’Ø¨ÙŒ</strong> (Doctor, masc.) â†’ <strong>Ø·ÙŽØ¨ÙÙŠÙ’Ø¨ÙŽØ©ÙŒ</strong> (Doctor, fem.)</li><li><strong>Ù…ÙÙ…ÙŽØ±ÙÙ‘Ø¶ÙŒ</strong> (Nurse, masc.) â†’ <strong>Ù…ÙÙ…ÙŽØ±ÙÙ‘Ø¶ÙŽØ©ÙŒ</strong> (Nurse, fem.)</li></ul>',
      rule: 'Masc + Ø© = Fem.'
    }
  ],
  
  // ============================================================
  // EXAMPLE SENTENCES
  // ============================================================
  examples: [
    { ar: 'Ù‡ÙŽØ°ÙÙ‡Ù Ø¢Ù…ÙÙ†ÙŽØ©Ù ÙˆÙŽØªÙÙ„Ù’ÙƒÙŽ ÙÙŽØ§Ø·ÙÙ…ÙŽØ©Ù', trans: 'hÄdhihi Äminatu wa-tilka fÄá¹­imatu', meaning: 'This is Aminah and that is Fatimah.' },
    { ar: 'Ù‡ÙŽØ°ÙÙ‡Ù Ø·ÙŽØ¨ÙÙŠÙ’Ø¨ÙŽØ©ÙŒ ÙˆÙŽØªÙÙ„Ù’ÙƒÙŽ Ù…ÙÙ…ÙŽØ±ÙÙ‘Ø¶ÙŽØ©ÙŒ', trans: 'hÄdhihi á¹­abÄ«batun wa-tilka mumarriá¸atun', meaning: 'This is a doctor and that is a nurse.' },
    { ar: 'Ù‡ÙŽØ°ÙŽØ§ Ù…ÙÙ†ÙŽ Ø§Ù„Ù’Ù‡ÙÙ†Ù’Ø¯Ù ÙˆÙŽØªÙÙ„Ù’ÙƒÙŽ Ù…ÙÙ†ÙŽ Ø§Ù„Ù’ÙŠÙŽØ§Ø¨ÙŽØ§Ù†Ù', trans: 'hÄdhÄ mina l-hindi wa-tilka mina l-yÄbÄni', meaning: 'This is from India and that is from Japan.' },
    { ar: 'Ø£ÙŽØªÙÙ„Ù’ÙƒÙŽ Ø¯ÙŽØ¬ÙŽØ§Ø¬ÙŽØ©ÙŒØŸ Ù„Ø§ÙŽØŒ ØªÙÙ„Ù’ÙƒÙŽ Ø¨ÙŽØ·ÙŽÙ‘Ø©ÙŒ', trans: 'a-tilka dajÄjatun? lÄ, tilka baá¹­á¹­atun', meaning: 'Is that a hen? No, that is a duck.' },
    { ar: 'Ù…ÙŽØ§ ØªÙÙ„Ù’ÙƒÙŽØŸ ØªÙÙ„Ù’ÙƒÙŽ Ø¨ÙŽÙŠÙ’Ø¶ÙŽØ©ÙŒ', trans: 'mÄ tilka? tilka bayá¸atun', meaning: 'What is that? That is an egg.' },
    { ar: 'Ù‡ÙŽØ°ÙÙ‡Ù Ø·ÙŽÙˆÙÙŠÙ’Ù„ÙŽØ©ÙŒ ÙˆÙŽØªÙÙ„Ù’ÙƒÙŽ Ù‚ÙŽØµÙÙŠÙ’Ø±ÙŽØ©ÙŒ', trans: 'hÄdhihi á¹­awÄ«latun wa-tilka qaá¹£Ä«ratun', meaning: 'This is tall and that is short.' },
    { ar: 'Ø°ÙŽÙ„ÙÙƒÙŽ Ø¯ÙÙŠÙ’ÙƒÙŒ ÙˆÙŽØªÙÙ„Ù’ÙƒÙŽ Ø¯ÙŽØ¬ÙŽØ§Ø¬ÙŽØ©ÙŒ', trans: 'dhÄlika dÄ«kun wa-tilka dajÄjatun', meaning: 'That is a rooster and that is a hen.' }
  ],
  
  // ============================================================
  // READING COMPREHENSION
  // ============================================================
  comprehension: {
    title: 'The Farm and the Hospital',
    arabic: 'Ù‡ÙŽØ°ÙÙ‡Ù Ø·ÙŽØ¨ÙÙŠÙ’Ø¨ÙŽØ©ÙŒ ÙˆÙŽØªÙÙ„Ù’ÙƒÙŽ Ù…ÙÙ…ÙŽØ±ÙÙ‘Ø¶ÙŽØ©ÙŒ. Ø§Ù„Ø·ÙŽÙ‘Ø¨ÙÙŠÙ’Ø¨ÙŽØ©Ù Ù…ÙÙ†ÙŽ Ø§Ù„Ù’Ù‡ÙÙ†Ù’Ø¯Ù ÙˆÙŽØ§Ù„Ù’Ù…ÙÙ…ÙŽØ±ÙÙ‘Ø¶ÙŽØ©Ù Ù…ÙÙ†ÙŽ Ø§Ù„Ù’ÙŠÙŽØ§Ø¨ÙŽØ§Ù†Ù. Ù‡ÙŽØ°ÙÙ‡Ù Ø·ÙŽÙˆÙÙŠÙ’Ù„ÙŽØ©ÙŒ ÙˆÙŽØªÙÙ„Ù’ÙƒÙŽ Ù‚ÙŽØµÙÙŠÙ’Ø±ÙŽØ©ÙŒ. Ù…ÙŽÙ†Ù’ Ù‡ÙŽØ°ÙŽØ§ØŸ Ù‡ÙŽØ°ÙŽØ§ Ø­ÙŽØ§Ù…ÙØ¯ÙŒ. ÙˆÙŽÙ…ÙŽÙ†Ù’ Ø°ÙŽÙ„ÙÙƒÙŽØŸ Ø°ÙŽÙ„ÙÙƒÙŽ Ø¹ÙŽÙ„ÙÙŠÙŒÙ‘. Ø£ÙŽØªÙÙ„Ù’ÙƒÙŽ Ø¯ÙŽØ¬ÙŽØ§Ø¬ÙŽØ©ÙŒØŸ Ù„Ø§ÙŽØŒ ØªÙÙ„Ù’ÙƒÙŽ Ø¨ÙŽØ·ÙŽÙ‘Ø©ÙŒ. Ù…ÙŽØ§ ØªÙÙ„Ù’ÙƒÙŽØŸ ØªÙÙ„Ù’ÙƒÙŽ Ø¨ÙŽÙŠÙ’Ø¶ÙŽØ©ÙŒ. ØªÙÙ„Ù’ÙƒÙŽ Ø³ÙŽÙŠÙŽÙ‘Ø§Ø±ÙŽØ©Ù Ø§Ù„Ù’Ù…ÙØ¯ÙÙŠÙ’Ø±Ù.',
    english: 'This is a doctor and that is a nurse. The doctor is from India and the nurse is from Japan. This one (the doctor) is tall and that one (the nurse) is short. Who is this? This is Hamid. And who is that? That is Ali. Is that a hen? No, that is a duck. What is that? That is an egg. That is the principal\'s car.',
    questions: [
      {
        text: 'Where is the nurse from?',
        options: ['India', 'Japan', 'China', 'The Philippines'],
        correct: 'Japan'
      },
      {
        text: 'Who is described as "short" (Ù‚ÙŽØµÙÙŠÙ’Ø±ÙŽØ©)?',
        options: ['The doctor', 'The nurse', 'Hamid', 'Ali'],
        correct: 'The nurse'
      },
      {
        text: 'What is the object that is not a hen?',
        options: ['A rooster', 'A duck', 'An egg', 'A car'],
        correct: 'A duck'
      },
      {
        text: 'Whose car is mentioned at the end?',
        options: ['The doctor\'s', 'The teacher\'s', 'The principal\'s', 'Hamid\'s'],
        correct: 'The principal\'s'
      }
    ]
  },
  
  // ============================================================
  // PRACTICE QUESTIONS
  // ============================================================
  practiceQuestions: [
    { arabic: 'ØªÙÙ„Ù’ÙƒÙŽ Ù…ÙÙ…ÙŽØ±ÙÙ‘Ø¶ÙŽØ©ÙŒ', correct: 'That is a nurse.', options: ['This is a nurse.', 'That is a nurse.', 'That is a doctor.', 'This is a doctor.'] },
    { arabic: 'Ø£ÙŽØªÙÙ„Ù’ÙƒÙŽ Ø¨ÙŽØ·ÙŽÙ‘Ø©ÙŒØŸ', correct: 'Is that a duck?', options: ['Is that a hen?', 'Is that a duck?', 'Is this a duck?', 'What is that?'] },
    { text: 'Which word is the feminine form of "That"?', correct: 'ØªÙÙ„Ù’ÙƒÙŽ', options: ['Ø°ÙŽÙ„ÙÙƒÙŽ', 'ØªÙÙ„Ù’ÙƒÙŽ', 'Ù‡ÙŽØ°ÙÙ‡Ù', 'Ù‡ÙŽØ°ÙŽØ§'] },
    { text: 'Translate: "That is an egg."', correct: 'ØªÙÙ„Ù’ÙƒÙŽ Ø¨ÙŽÙŠÙ’Ø¶ÙŽØ©ÙŒ', options: ['ØªÙÙ„Ù’ÙƒÙŽ Ø¨ÙŽÙŠÙ’Ø¶ÙŽØ©ÙŒ', 'Ù‡ÙŽØ°ÙÙ‡Ù Ø¨ÙŽÙŠÙ’Ø¶ÙŽØ©ÙŒ', 'Ø°ÙŽÙ„ÙÙƒÙŽ Ø¨ÙŽÙŠÙ’Ø¶ÙŽØ©ÙŒ', 'ØªÙÙ„Ù’ÙƒÙŽ Ø¨ÙŽØ·ÙŽÙ‘Ø©ÙŒ'] },
    { text: 'Which occupation means "Nurse"?', correct: 'Ù…ÙÙ…ÙŽØ±ÙÙ‘Ø¶ÙŽØ©ÙŒ', options: ['Ø·ÙŽØ¨ÙÙŠÙ’Ø¨ÙŽØ©ÙŒ', 'Ù…ÙÙ…ÙŽØ±ÙÙ‘Ø¶ÙŽØ©ÙŒ', 'Ù…ÙØ¯ÙŽØ±ÙÙ‘Ø³ÙŽØ©ÙŒ', 'Ø·ÙŽØ§Ù„ÙØ¨ÙŽØ©ÙŒ'] },
    { text: 'Translate: "This is tall and that is short." (feminine)', correct: 'Ù‡ÙŽØ°ÙÙ‡Ù Ø·ÙŽÙˆÙÙŠÙ’Ù„ÙŽØ©ÙŒ ÙˆÙŽØªÙÙ„Ù’ÙƒÙŽ Ù‚ÙŽØµÙÙŠÙ’Ø±ÙŽØ©ÙŒ', options: ['Ù‡ÙŽØ°ÙÙ‡Ù Ø·ÙŽÙˆÙÙŠÙ’Ù„ÙŽØ©ÙŒ ÙˆÙŽØªÙÙ„Ù’ÙƒÙŽ Ù‚ÙŽØµÙÙŠÙ’Ø±ÙŽØ©ÙŒ', 'Ù‡ÙŽØ°ÙŽØ§ Ø·ÙŽÙˆÙÙŠÙ’Ù„ÙŒ ÙˆÙŽØ°ÙŽÙ„ÙÙƒÙŽ Ù‚ÙŽØµÙÙŠÙ’Ø±ÙŒ', 'Ù‡ÙŽØ°ÙÙ‡Ù Ù‚ÙŽØµÙÙŠÙ’Ø±ÙŽØ©ÙŒ ÙˆÙŽØªÙÙ„Ù’ÙƒÙŽ Ø·ÙŽÙˆÙÙŠÙ’Ù„ÙŽØ©ÙŒ', 'Ù‡ÙŽØ°ÙŽØ§ Ù‚ÙŽØµÙÙŠÙ’Ø±ÙŒ ÙˆÙŽØ°ÙŽÙ„ÙÙƒÙŽ Ø·ÙŽÙˆÙÙŠÙ’Ù„ÙŒ'] }
  ],
  
  // ============================================================
  // QUIZ QUESTIONS
  // ============================================================
  quizQuestions: {
    multipleChoice: [
      { prompt: 'What is the feminine counterpart to Ø°ÙŽÙ„ÙÙƒÙŽ?', options: ['Ù‡ÙŽØ°ÙÙ‡Ù', 'ØªÙÙ„Ù’ÙƒÙŽ', 'Ù‡ÙÙŠÙŽ', 'Ø°ÙŽÙ„ÙÙƒÙŽ'], correct: 1 },
      { prompt: 'Translate: "That is a hen."', options: ['ØªÙÙ„Ù’ÙƒÙŽ Ø¨ÙŽØ·ÙŽÙ‘Ø©ÙŒ', 'ØªÙÙ„Ù’ÙƒÙŽ Ø¯ÙŽØ¬ÙŽØ§Ø¬ÙŽØ©ÙŒ', 'Ø°ÙŽÙ„ÙÙƒÙŽ Ø¯ÙÙŠÙ’ÙƒÙŒ', 'Ù‡ÙŽØ°ÙÙ‡Ù Ø¯ÙŽØ¬ÙŽØ§Ø¬ÙŽØ©ÙŒ'], correct: 1 },
      { prompt: 'Which word means "Nurse" (fem.)?', options: ['Ø·ÙŽØ¨ÙÙŠÙ’Ø¨ÙŽØ©ÙŒ', 'Ù…ÙØ¯ÙŽØ±ÙÙ‘Ø³ÙŽØ©ÙŒ', 'Ù…ÙÙ…ÙŽØ±ÙÙ‘Ø¶ÙŽØ©ÙŒ', 'Ø·ÙŽØ§Ù„ÙØ¨ÙŽØ©ÙŒ'], correct: 2 },
      { prompt: 'Translate: "That is a duck."', options: ['ØªÙÙ„Ù’ÙƒÙŽ Ø¨ÙŽØ·ÙŽÙ‘Ø©ÙŒ', 'ØªÙÙ„Ù’ÙƒÙŽ Ø¯ÙŽØ¬ÙŽØ§Ø¬ÙŽØ©ÙŒ', 'ØªÙÙ„Ù’ÙƒÙŽ Ø¨ÙŽÙŠÙ’Ø¶ÙŽØ©ÙŒ', 'Ù‡ÙŽØ°ÙÙ‡Ù Ø¨ÙŽØ·ÙŽÙ‘Ø©ÙŒ'], correct: 0 },
      { prompt: 'What is the opposite of Ø·ÙŽÙˆÙÙŠÙ’Ù„ÙŽØ©ÙŒ (tall)?', options: ['Ø¬ÙŽÙ…ÙÙŠÙ’Ù„ÙŽØ©ÙŒ', 'Ù‚ÙŽØµÙÙŠÙ’Ø±ÙŽØ©ÙŒ', 'Ø³ÙŽØ±ÙÙŠÙ’Ø¹ÙŽØ©ÙŒ', 'ÙƒÙŽØ¨ÙÙŠÙ’Ø±ÙŽØ©ÙŒ'], correct: 1 },
      { prompt: 'Translate: "That is the principal\'s car."', options: ['ØªÙÙ„Ù’ÙƒÙŽ Ø³ÙŽÙŠÙŽÙ‘Ø§Ø±ÙŽØ©Ù Ø§Ù„Ù’Ù…ÙØ¯ÙÙŠÙ’Ø±Ù', 'Ù‡ÙŽØ°ÙÙ‡Ù Ø³ÙŽÙŠÙŽÙ‘Ø§Ø±ÙŽØ©Ù Ø§Ù„Ù’Ù…ÙØ¯ÙÙŠÙ’Ø±Ù', 'Ø°ÙŽÙ„ÙÙƒÙŽ Ø³ÙŽÙŠÙŽÙ‘Ø§Ø±ÙŽØ©Ù Ø§Ù„Ù’Ù…ÙØ¯ÙÙŠÙ’Ø±Ù', 'ØªÙÙ„Ù’ÙƒÙŽ Ø³ÙŽÙŠÙŽÙ‘Ø§Ø±ÙŽØ©Ù Ø§Ù„Ù’Ù…ÙØ¯ÙŽØ±ÙÙ‘Ø³Ù'], correct: 0 },
      { prompt: 'What does Ù…ÙŽØ§ ØªÙÙ„Ù’ÙƒÙŽØŸ mean?', options: ['Who is that?', 'What is that?', 'Where is that?', 'Is that...?'], correct: 1 },
      { prompt: 'Which of these is masculine?', options: ['Ø¯ÙŽØ¬ÙŽØ§Ø¬ÙŽØ©ÙŒ', 'Ø¨ÙŽØ·ÙŽÙ‘Ø©ÙŒ', 'Ø¯ÙÙŠÙ’ÙƒÙŒ', 'Ø¨ÙŽÙŠÙ’Ø¶ÙŽØ©ÙŒ'], correct: 2 },
      { prompt: 'Translate: "That is an egg."', options: ['ØªÙÙ„Ù’ÙƒÙŽ Ø¨ÙŽØ·ÙŽÙ‘Ø©ÙŒ', 'ØªÙÙ„Ù’ÙƒÙŽ Ø¨ÙŽÙŠÙ’Ø¶ÙŽØ©ÙŒ', 'Ù‡ÙŽØ°ÙÙ‡Ù Ø¨ÙŽÙŠÙ’Ø¶ÙŽØ©ÙŒ', 'Ø°ÙŽÙ„ÙÙƒÙŽ Ø¨ÙŽÙŠÙ’Ø¶ÙŽØ©ÙŒ'], correct: 1 },
      { prompt: 'Which of these means "India"?', options: ['Ø§Ù„Ù’ÙŠÙŽØ§Ø¨ÙŽØ§Ù†Ù', 'Ø§Ù„ØµÙÙ‘ÙŠÙ’Ù†Ù', 'Ø§Ù„Ù’Ù‡ÙÙ†Ù’Ø¯Ù', 'Ø§Ù„Ù’ÙÙÙ„ÙØ¨ÙÙ‘ÙŠÙ’Ù†Ù'], correct: 2 }
    ],
    typing: [
      { prompt: 'Type in Arabic: "That is a nurse."', ideal: 'ØªÙÙ„Ù’ÙƒÙŽ Ù…ÙÙ…ÙŽØ±ÙÙ‘Ø¶ÙŽØ©ÙŒ', accepts: ['ØªÙ„Ùƒ Ù…Ù…Ø±Ø¶Ø©', 'ØªÙÙ„Ù’ÙƒÙŽ Ù…ÙÙ…ÙŽØ±ÙÙ‘Ø¶ÙŽØ©ÙŒ', 'ØªÙ„Ùƒ Ù…Ù…Ø±Ø¶Ø©ÙŒ', 'ØªÙÙ„Ù’ÙƒÙŽ Ù…Ù…Ø±Ø¶Ø©'] },
      { prompt: 'Type in Arabic: "That is a hen."', ideal: 'ØªÙÙ„Ù’ÙƒÙŽ Ø¯ÙŽØ¬ÙŽØ§Ø¬ÙŽØ©ÙŒ', accepts: ['ØªÙ„Ùƒ Ø¯Ø¬Ø§Ø¬Ø©', 'ØªÙÙ„Ù’ÙƒÙŽ Ø¯ÙŽØ¬ÙŽØ§Ø¬ÙŽØ©ÙŒ', 'ØªÙ„Ùƒ Ø¯Ø¬Ø§Ø¬Ø©ÙŒ', 'ØªÙÙ„Ù’ÙƒÙŽ Ø¯Ø¬Ø§Ø¬Ø©'] }
    ]
  }
};

