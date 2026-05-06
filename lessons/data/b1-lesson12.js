/* ============================================================
   b1-lesson12.js â€” Lesson 12 Data
   ============================================================ */

const LESSON_DATA = {
  book: 'book1',
  lessonNum: 12,
  titleArabic: 'Ø§Ù„Ù‘ÙŽØ°ÙÙŠ â€” Ø§Ù„Ù‘ÙŽØªÙÙŠ',
  titleEnglish: 'Relative Pronouns',
  summary: 'In this lesson, you will learn how Arabic links a definite noun to a describing sentence using Ø§Ù„Ù‘ÙŽØ°ÙÙŠ and Ø§Ù„Ù‘ÙŽØªÙÙŠ. This lets you say "the student who...", "the room which...", and build longer, clearer sentences.',
  nextLesson: 'b1-lesson13.html',
  passMark: 6,
  totalQuestions: 12,

  // ============================================================
  // VOCABULARY
  // ============================================================
  vocab: [
    { ar: 'Ø§Ù„Ù‘ÙŽØ°ÙÙŠ', trans: 'alladhÄ«', meaning: 'Who / which / that (masculine)', type: 'Relative pronoun' },
    { ar: 'Ø§Ù„Ù‘ÙŽØªÙÙŠ', trans: 'allatÄ«', meaning: 'Who / which / that (feminine)', type: 'Relative pronoun' },
    { ar: 'Ù…ÙŽØ±ÙÙŠØ¶ÙŒ', trans: 'marÄ«á¸un', meaning: 'Sick / ill', type: 'Adjective' },
    { ar: 'Ù…ÙŽØ±ÙÙŠØ¶ÙŽØ©ÙŒ', trans: 'marÄ«á¸atun', meaning: 'Sick / ill (feminine)', type: 'Adjective' },
    { ar: 'ØºÙŽØ§Ø¦ÙØ¨ÙŒ', trans: 'ghÄÊ¾ibun', meaning: 'Absent', type: 'Adjective' },
    { ar: 'ØºÙŽØ§Ø¦ÙØ¨ÙŽØ©ÙŒ', trans: 'ghÄÊ¾ibatun', meaning: 'Absent (feminine)', type: 'Adjective' },
    { ar: 'Ø·ÙŽÙˆÙÙŠÙ„ÙŒ', trans: 'á¹­awÄ«lun', meaning: 'Tall / long', type: 'Adjective' },
    { ar: 'Ø·ÙŽÙˆÙÙŠÙ„ÙŽØ©ÙŒ', trans: 'á¹­awÄ«latun', meaning: 'Tall / long (feminine)', type: 'Adjective' },
    { ar: 'Ù‚ÙŽØµÙÙŠØ±ÙŒ', trans: 'qaá¹£Ä«run', meaning: 'Short', type: 'Adjective' },
    { ar: 'Ù‚ÙŽØµÙÙŠØ±ÙŽØ©ÙŒ', trans: 'qaá¹£Ä«ratun', meaning: 'Short (feminine)', type: 'Adjective' },
    { ar: 'Ù…ÙŽØ´Ù’ØºÙÙˆÙ„ÙŒ', trans: 'mashghÅ«lun', meaning: 'Busy / occupied', type: 'Adjective' },
    { ar: 'Ù…ÙŽØ´Ù’ØºÙÙˆÙ„ÙŽØ©ÙŒ', trans: 'mashghÅ«latun', meaning: 'Busy / occupied (feminine)', type: 'Adjective' }
  ],

  // ============================================================
  // GRAMMAR BLOCKS
  // ============================================================
  grammarBlocks: [
    {
      title: 'What Is a Relative Pronoun?',
      content: '<p>A relative pronoun connects a noun to extra information about it. In English, we use words like "who", "which", or "that". Arabic uses <strong>Ø§Ù„Ù‘ÙŽØ°ÙÙŠ</strong> for a masculine noun and <strong>Ø§Ù„Ù‘ÙŽØªÙÙŠ</strong> for a feminine noun.</p><ul><li><strong>Ø§Ù„Ø·Ù‘ÙŽØ§Ù„ÙØ¨Ù Ø§Ù„Ù‘ÙŽØ°ÙÙŠ ÙÙÙŠ Ø§Ù„Ù’ÙÙŽØµÙ’Ù„Ù</strong> â€” the student who is in the classroom</li><li><strong>Ø§Ù„Ù’ØºÙØ±Ù’ÙÙŽØ©Ù Ø§Ù„Ù‘ÙŽØªÙÙŠ ÙÙÙŠÙ‡ÙŽØ§ Ø®ÙŽØ§Ù„ÙØ¯ÙŒ</strong> â€” the room which Khalid is in</li></ul>',
      rule: 'Definite noun + Ø§Ù„Ù‘ÙŽØ°ÙÙŠ / Ø§Ù„Ù‘ÙŽØªÙÙŠ + describing sentence = one longer noun phrase.'
    },
    {
      title: 'Match the Gender',
      content: '<p>The relative pronoun must match the noun it describes:</p><ul><li><strong>Ø§Ù„Ù’ÙƒÙØªÙŽØ§Ø¨Ù</strong> is masculine, so use <strong>Ø§Ù„Ù‘ÙŽØ°ÙÙŠ</strong>: <strong>Ø§Ù„Ù’ÙƒÙØªÙŽØ§Ø¨Ù Ø§Ù„Ù‘ÙŽØ°ÙÙŠ Ø¹ÙŽÙ„ÙŽÙ‰ Ø§Ù„Ù’Ù…ÙŽÙƒÙ’ØªÙŽØ¨Ù</strong></li><li><strong>Ø§Ù„Ù’Ø­ÙŽÙ‚ÙÙŠØ¨ÙŽØ©Ù</strong> is feminine, so use <strong>Ø§Ù„Ù‘ÙŽØªÙÙŠ</strong>: <strong>Ø§Ù„Ù’Ø­ÙŽÙ‚ÙÙŠØ¨ÙŽØ©Ù Ø§Ù„Ù‘ÙŽØªÙÙŠ Ø¹ÙŽÙ„ÙŽÙ‰ Ø§Ù„Ù’ÙƒÙØ±Ù’Ø³ÙÙŠÙ‘Ù</strong></li></ul><p>The relative pronoun does not mean "he" or "she" by itself. It points back to the noun before it.</p>',
      rule: 'Use Ø§Ù„Ù‘ÙŽØ°ÙÙŠ after a masculine noun and Ø§Ù„Ù‘ÙŽØªÙÙŠ after a feminine noun.'
    },
    {
      title: 'Use It Only After a Definite Noun',
      content: '<p>In this lesson, use <strong>Ø§Ù„Ù‘ÙŽØ°ÙÙŠ</strong> and <strong>Ø§Ù„Ù‘ÙŽØªÙÙŠ</strong> after definite nouns, usually nouns with <strong>Ø§Ù„Ù’Ù€</strong> or a proper name/idafa phrase. If the noun is indefinite, Arabic often attaches the description directly without a relative pronoun.</p><ul><li><strong>Ø§Ù„Ø·Ù‘ÙŽØ§Ù„ÙØ¨Ù Ø§Ù„Ù‘ÙŽØ°ÙÙŠ Ù…ÙŽØ±ÙÙŠØ¶ÙŒ</strong> â€” the student who is sick</li><li><strong>Ø·ÙŽØ§Ù„ÙØ¨ÙŒ Ù…ÙŽØ±ÙÙŠØ¶ÙŒ</strong> â€” a sick student</li></ul>',
      rule: 'Definite noun: use Ø§Ù„Ù‘ÙŽØ°ÙÙŠ / Ø§Ù„Ù‘ÙŽØªÙÙŠ. Indefinite noun: usually describe it directly.'
    }
  ],

  // ============================================================
  // EXAMPLE SENTENCES
  // ============================================================

  // ============================================================
  // READING COMPREHENSION
  // ============================================================
  comprehension: {
    title: 'The Busy School',
    arabic: 'Ù‡ÙŽØ°ÙÙ‡Ù Ù…ÙŽØ¯Ù’Ø±ÙŽØ³ÙŽØ©ÙŒ ÙƒÙŽØ¨ÙÙŠØ±ÙŽØ©ÙŒ. Ø§Ù„Ù’Ù…ÙØ¯ÙŽØ±Ù‘ÙØ³Ù Ø§Ù„Ù‘ÙŽØ°ÙÙŠ ÙÙÙŠ Ø§Ù„Ù’ÙÙŽØµÙ’Ù„Ù Ù…ÙŽØ´Ù’ØºÙÙˆÙ„ÙŒ. Ø¹ÙÙ†Ù’Ø¯ÙŽÙ‡Ù ÙƒÙØªÙŽØ§Ø¨ÙŒ Ø·ÙŽÙˆÙÙŠÙ„ÙŒ ÙˆÙŽÙ‚ÙŽÙ„ÙŽÙ…ÙŒ Ø£ÙŽØ­Ù’Ù…ÙŽØ±Ù. Ø§Ù„Ø·Ù‘ÙŽØ§Ù„ÙØ¨Ù Ø§Ù„Ù‘ÙŽØ°ÙÙŠ Ø¹ÙŽÙ„ÙŽÙ‰ Ø§Ù„Ù’ÙƒÙØ±Ù’Ø³ÙÙŠÙ‘Ù Ù…ÙŽØ±ÙÙŠØ¶ÙŒ. Ù„ÙŽÙ‡Ù Ø£ÙŽØ®ÙŒ ÙˆÙŽØ§Ø­ÙØ¯ÙŒ ÙÙÙŠ Ø§Ù„Ù’Ø¨ÙŽÙŠÙ’ØªÙ. Ø§Ù„Ø·Ù‘ÙŽØ¨ÙÙŠØ¨ÙŽØ©Ù Ø§Ù„Ù‘ÙŽØªÙÙŠ ÙÙÙŠ Ø§Ù„Ù’Ù…ÙØ³Ù’ØªÙŽØ´Ù’ÙÙŽÙ‰ Ù…ÙŽØ´Ù’ØºÙÙˆÙ„ÙŽØ©ÙŒ Ø£ÙŽÙŠÙ’Ø¶Ù‹Ø§. Ø§Ù„Ù’Ø­ÙŽÙ‚ÙÙŠØ¨ÙŽØ©Ù Ø§Ù„Ù‘ÙŽØªÙÙŠ Ø¹ÙŽÙ„ÙŽÙ‰ Ø§Ù„Ù’Ù…ÙŽÙƒÙ’ØªÙŽØ¨Ù Ù„ÙÙ„Ø·Ù‘ÙŽØ§Ù„ÙØ¨Ù. Ø§Ù„Ù’Ù…ÙÙÙ’ØªÙŽØ§Ø­Ù ÙÙÙŠÙ‡ÙŽØ§. Ø£ÙŽÙŠÙ’Ù†ÙŽ Ø§Ù„Ù’ØºÙØ±Ù’ÙÙŽØ©Ù Ø§Ù„Ù‘ÙŽØªÙÙŠ ÙÙÙŠÙ‡ÙŽØ§ Ø®ÙŽØ§Ù„ÙØ¯ÙŒØŸ Ù‡ÙÙŠÙŽ Ù‚ÙŽØ±ÙÙŠØ¨ÙŽØ©ÙŒ Ù…ÙÙ†ÙŽ Ø§Ù„Ù’Ù…ÙŽØ³Ù’Ø¬ÙØ¯Ù.',
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

  // ============================================================
  // PRACTICE QUESTIONS
  // ============================================================

  // ============================================================
  // QUIZ QUESTIONS
  // ============================================================
  quizQuestions: {
    multipleChoice: [
      { prompt: 'What does Ø§Ù„Ù‘ÙŽØ°ÙÙŠ mean in this lesson?', options: ['Who / which / that (masculine)', 'This feminine', 'In him', 'His book'], correct: 0 },
      { prompt: 'What does Ø§Ù„Ù‘ÙŽØªÙÙŠ mean in this lesson?', options: ['That masculine', 'Who / which / that (feminine)', 'From her', 'The teacher'], correct: 1 },
      { prompt: 'Choose the correct sentence: "The book which is on the desk is new."', options: ['Ø§Ù„Ù’ÙƒÙØªÙŽØ§Ø¨Ù Ø§Ù„Ù‘ÙŽØªÙÙŠ Ø¹ÙŽÙ„ÙŽÙ‰ Ø§Ù„Ù’Ù…ÙŽÙƒÙ’ØªÙŽØ¨Ù Ø¬ÙŽØ¯ÙÙŠØ¯ÙŒ', 'Ø§Ù„Ù’ÙƒÙØªÙŽØ§Ø¨Ù Ø§Ù„Ù‘ÙŽØ°ÙÙŠ Ø¹ÙŽÙ„ÙŽÙ‰ Ø§Ù„Ù’Ù…ÙŽÙƒÙ’ØªÙŽØ¨Ù Ø¬ÙŽØ¯ÙÙŠØ¯ÙŒ', 'Ø§Ù„Ù’ÙƒÙØªÙŽØ§Ø¨Ù Ù‡ÙŽØ°ÙÙ‡Ù Ø¹ÙŽÙ„ÙŽÙ‰ Ø§Ù„Ù’Ù…ÙŽÙƒÙ’ØªÙŽØ¨Ù Ø¬ÙŽØ¯ÙÙŠØ¯ÙŒ', 'Ø§Ù„Ù’ÙƒÙØªÙŽØ§Ø¨Ù Ø§Ù„Ù‘ÙŽØ°ÙÙŠ Ø¹ÙŽÙ„ÙŽÙ‰ Ø§Ù„Ù’Ù…ÙŽÙƒÙ’ØªÙŽØ¨Ù Ø¬ÙŽØ¯ÙÙŠØ¯ÙŽØ©ÙŒ'], correct: 1 },
      { prompt: 'Choose the correct sentence: "The room which Khalid is in is large."', options: ['Ø§Ù„Ù’ØºÙØ±Ù’ÙÙŽØ©Ù Ø§Ù„Ù‘ÙŽØ°ÙÙŠ ÙÙÙŠÙ‡ÙŽØ§ Ø®ÙŽØ§Ù„ÙØ¯ÙŒ ÙƒÙŽØ¨ÙÙŠØ±ÙŽØ©ÙŒ', 'Ø§Ù„Ù’ØºÙØ±Ù’ÙÙŽØ©Ù Ø§Ù„Ù‘ÙŽØªÙÙŠ ÙÙÙŠÙ‡ÙŽØ§ Ø®ÙŽØ§Ù„ÙØ¯ÙŒ ÙƒÙŽØ¨ÙÙŠØ±ÙŽØ©ÙŒ', 'Ø§Ù„Ù’ØºÙØ±Ù’ÙÙŽØ©Ù Ø§Ù„Ù‘ÙŽØªÙÙŠ ÙÙÙŠÙ‡Ù Ø®ÙŽØ§Ù„ÙØ¯ÙŒ ÙƒÙŽØ¨ÙÙŠØ±ÙŒ', 'Ø§Ù„Ù’ØºÙØ±Ù’ÙÙŽØ©Ù Ø§Ù„Ù‘ÙŽØ°ÙÙŠ ÙÙÙŠÙ‡Ù Ø®ÙŽØ§Ù„ÙØ¯ÙŒ ÙƒÙŽØ¨ÙÙŠØ±ÙŒ'], correct: 1 },
      { prompt: 'Complete: Ø§Ù„Ø·Ù‘ÙŽØ§Ù„ÙØ¨Ù ___ Ù…ÙŽØ±ÙÙŠØ¶ÙŒ ØºÙŽØ§Ø¦ÙØ¨ÙŒ.', options: ['Ø§Ù„Ù‘ÙŽØªÙÙŠ', 'ÙÙÙŠÙ‡ÙŽØ§', 'Ø§Ù„Ù‘ÙŽØ°ÙÙŠ', 'Ø¹ÙŽÙ„ÙŽÙŠÙ’Ù‡ÙŽØ§'], correct: 2 },
      { prompt: 'Complete: Ø§Ù„Ø·Ù‘ÙŽØ¨ÙÙŠØ¨ÙŽØ©Ù ___ ÙÙÙŠ Ø§Ù„Ù’Ù…ÙØ³Ù’ØªÙŽØ´Ù’ÙÙŽÙ‰ Ù…ÙŽØ´Ù’ØºÙÙˆÙ„ÙŽØ©ÙŒ.', options: ['Ø§Ù„Ù‘ÙŽØ°ÙÙŠ', 'Ø§Ù„Ù‘ÙŽØªÙÙŠ', 'Ù‡ÙÙˆÙŽ', 'Ù„ÙŽÙ‡Ù'], correct: 1 },
      { prompt: 'Translate: "The bag which is on the chair is black."', options: ['Ø§Ù„Ù’Ø­ÙŽÙ‚ÙÙŠØ¨ÙŽØ©Ù Ø§Ù„Ù‘ÙŽØªÙÙŠ Ø¹ÙŽÙ„ÙŽÙ‰ Ø§Ù„Ù’ÙƒÙØ±Ù’Ø³ÙÙŠÙ‘Ù Ø³ÙŽÙˆÙ’Ø¯ÙŽØ§Ø¡Ù', 'Ø§Ù„Ù’Ø­ÙŽÙ‚ÙÙŠØ¨ÙŽØ©Ù Ø§Ù„Ù‘ÙŽØ°ÙÙŠ Ø¹ÙŽÙ„ÙŽÙ‰ Ø§Ù„Ù’ÙƒÙØ±Ù’Ø³ÙÙŠÙ‘Ù Ø³ÙŽÙˆÙ’Ø¯ÙŽØ§Ø¡Ù', 'Ø§Ù„Ù’ÙƒÙØ±Ù’Ø³ÙÙŠÙ‘Ù Ø§Ù„Ù‘ÙŽØ°ÙÙŠ Ø¹ÙŽÙ„ÙŽÙ‰ Ø§Ù„Ù’Ø­ÙŽÙ‚ÙÙŠØ¨ÙŽØ©Ù Ø£ÙŽØ³Ù’ÙˆÙŽØ¯Ù', 'Ø§Ù„Ù’Ø­ÙŽÙ‚ÙÙŠØ¨ÙŽØ©Ù Ø¹ÙŽÙ„ÙŽÙ‰ Ø§Ù„Ù’ÙƒÙØ±Ù’Ø³ÙÙŠÙ‘Ù Ø§Ù„Ù‘ÙŽØªÙÙŠ Ø³ÙŽÙˆÙ’Ø¯ÙŽØ§Ø¡Ù'], correct: 0 },
      { prompt: 'Which noun phrase is definite and ready for Ø§Ù„Ù‘ÙŽØ°ÙÙŠ / Ø§Ù„Ù‘ÙŽØªÙÙŠ?', options: ['Ø·ÙŽØ§Ù„ÙØ¨ÙŒ', 'Ø­ÙŽÙ‚ÙÙŠØ¨ÙŽØ©ÙŒ', 'Ø§Ù„Ù’Ù…ÙØ¯ÙŽØ±Ù‘ÙØ³Ù', 'ÙƒÙØªÙŽØ§Ø¨ÙŒ Ø¬ÙŽØ¯ÙÙŠØ¯ÙŒ'], correct: 2 },
      { prompt: 'Translate: "The student who is absent is sick."', options: ['Ø§Ù„Ø·Ù‘ÙŽØ§Ù„ÙØ¨Ù Ø§Ù„Ù‘ÙŽØ°ÙÙŠ ØºÙŽØ§Ø¦ÙØ¨ÙŒ Ù…ÙŽØ±ÙÙŠØ¶ÙŒ', 'Ø§Ù„Ø·Ù‘ÙŽØ§Ù„ÙØ¨ÙŽØ©Ù Ø§Ù„Ù‘ÙŽØ°ÙÙŠ ØºÙŽØ§Ø¦ÙØ¨ÙŒ Ù…ÙŽØ±ÙÙŠØ¶ÙŒ', 'Ø§Ù„Ø·Ù‘ÙŽØ§Ù„ÙØ¨Ù Ø§Ù„Ù‘ÙŽØªÙÙŠ ØºÙŽØ§Ø¦ÙØ¨ÙŒ Ù…ÙŽØ±ÙÙŠØ¶ÙŒ', 'Ø§Ù„Ø·Ù‘ÙŽØ§Ù„ÙØ¨Ù ÙÙÙŠÙ‡Ù ØºÙŽØ§Ø¦ÙØ¨ÙŒ Ù…ÙŽØ±ÙÙŠØ¶ÙŒ'], correct: 0 },
      { prompt: 'What must Ø§Ù„Ù‘ÙŽØ°ÙÙŠ / Ø§Ù„Ù‘ÙŽØªÙÙŠ match?', options: ['The English translation only', 'The first letter of the next word', 'The gender of the noun before it', 'The colour of the noun'], correct: 2 }
    ],
    typing: [
      { prompt: 'Type in Arabic: "who / which" for a masculine noun', ideal: 'Ø§Ù„Ù‘ÙŽØ°ÙÙŠ', accepts: ['Ø§Ù„Ø°ÙŠ', 'Ø§Ù„Ù‘ÙŽØ°ÙÙŠ'] },
      { prompt: 'Type in Arabic: "who / which" for a feminine noun', ideal: 'Ø§Ù„Ù‘ÙŽØªÙÙŠ', accepts: ['Ø§Ù„ØªÙŠ', 'Ø§Ù„Ù‘ÙŽØªÙÙŠ'] }
    ]
  }
};

