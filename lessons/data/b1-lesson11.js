/* ============================================================
   b1-lesson11.js â€” Lesson 11 Data
   ============================================================ */

const LESSON_DATA = {
  book: 'book1',
  lessonNum: 11,
  titleArabic: 'ÙÙÙŠÙ‡Ù â€” ÙÙÙŠÙ‡ÙŽØ§',
  titleEnglish: 'Pronouns with Prepositions',
  summary: 'In this lesson, you will learn how to attach pronoun suffixes to prepositions. Instead of repeating a noun, Arabic combines the preposition and pronoun into one word â€” ÙÙÙŠÙ‡Ù (in it), Ø¹ÙŽÙ„ÙŽÙŠÙ’Ù‡ÙŽØ§ (on it), Ù…ÙÙ†Ù’Ù‡Ù (from him), and more.',
  nextLesson: 'b1-lesson12.html',
  passMark: 6,
  totalQuestions: 12,

  // ============================================================
  // VOCABULARY
  // ============================================================
  vocab: [
    // Preposition + pronoun combined forms
    { ar: 'ÙÙÙŠÙ‡Ù', trans: 'fÄ«hi', meaning: 'In it (masc.) / In him', type: 'Prep+Pronoun' },
    { ar: 'ÙÙÙŠÙ‡ÙŽØ§', trans: 'fÄ«hÄ', meaning: 'In it (fem.) / In her', type: 'Prep+Pronoun' },
    { ar: 'ÙÙÙŠÙƒÙŽ', trans: 'fÄ«ka', meaning: 'In you (masc.)', type: 'Prep+Pronoun' },
    { ar: 'ÙÙÙŠÙŽÙ‘', trans: 'fiyya', meaning: 'In me', type: 'Prep+Pronoun' },
    { ar: 'Ø¹ÙŽÙ„ÙŽÙŠÙ’Ù‡Ù', trans: 'Ê¿alayhi', meaning: 'On it (masc.) / On him', type: 'Prep+Pronoun' },
    { ar: 'Ø¹ÙŽÙ„ÙŽÙŠÙ’Ù‡ÙŽØ§', trans: 'Ê¿alayhÄ', meaning: 'On it (fem.) / On her', type: 'Prep+Pronoun' },
    { ar: 'Ù…ÙÙ†Ù’Ù‡Ù', trans: 'minhu', meaning: 'From it / From him', type: 'Prep+Pronoun' },
    { ar: 'Ù…ÙÙ†Ù’Ù‡ÙŽØ§', trans: 'minhÄ', meaning: 'From it (fem.) / From her', type: 'Prep+Pronoun' },
    { ar: 'Ø¥ÙÙ„ÙŽÙŠÙ’Ù‡Ù', trans: 'ilayhi', meaning: 'To it / To him', type: 'Prep+Pronoun' },
    { ar: 'Ø¥ÙÙ„ÙŽÙŠÙ’Ù‡ÙŽØ§', trans: 'ilayhÄ', meaning: 'To it (fem.) / To her', type: 'Prep+Pronoun' },
    { ar: 'Ù„ÙŽÙ‡Ù', trans: 'lahu', meaning: 'For him / He has', type: 'Prep+Pronoun' },
    { ar: 'Ù„ÙŽÙ‡ÙŽØ§', trans: 'lahÄ', meaning: 'For her / She has', type: 'Prep+Pronoun' },
    { ar: 'Ø¨ÙÙ‡Ù', trans: 'bihi', meaning: 'With it / By it (masc.)', type: 'Prep+Pronoun' },
    // Nouns
    { ar: 'Ù…ÙÙÙ’ØªÙŽØ§Ø­ÙŒ', trans: 'miftÄá¸¥un', meaning: 'Key', type: 'Noun' },
    { ar: 'ØºÙØ±Ù’ÙÙŽØ©ÙŒ', trans: 'ghurfatun', meaning: 'Room', type: 'Noun' },
    { ar: 'Ø·ÙŽØ§ÙˆÙÙ„ÙŽØ©ÙŒ', trans: 'á¹­Äwilatun', meaning: 'Table', type: 'Noun' },
    { ar: 'ÙƒÙØ±Ù’Ø³ÙÙŠÙŒÙ‘', trans: 'kursiyyun', meaning: 'Chair', type: 'Noun' }
  ],

  // ============================================================
  // GRAMMAR BLOCKS
  // ============================================================
  grammarBlocks: [
    {
      title: 'Pronoun Suffixes Attach to Prepositions',
      content: '<p>In Lesson 10, you learned that pronoun suffixes attach to nouns: <strong>ÙƒÙØªÙŽØ§Ø¨ÙÙŠ</strong> (my book), <strong>ÙƒÙØªÙŽØ§Ø¨ÙÙƒÙŽ</strong> (your book). The same suffixes also attach to <em>prepositions</em>, creating a single combined word:</p><ul><li><strong>ÙÙÙŠ</strong> (in) + <strong>Ù‡Ù</strong> = <strong>ÙÙÙŠÙ‡Ù</strong> (in it â€” masc.)</li><li><strong>ÙÙÙŠ</strong> (in) + <strong>Ù‡ÙŽØ§</strong> = <strong>ÙÙÙŠÙ‡ÙŽØ§</strong> (in it â€” fem.)</li><li><strong>Ø¹ÙŽÙ„ÙŽÙ‰</strong> (on) + <strong>Ù‡Ù</strong> = <strong>Ø¹ÙŽÙ„ÙŽÙŠÙ’Ù‡Ù</strong> (on it â€” masc.)</li><li><strong>Ù…ÙÙ†Ù’</strong> (from) + <strong>Ù‡Ù</strong> = <strong>Ù…ÙÙ†Ù’Ù‡Ù</strong> (from it / from him)</li><li><strong>Ø¥ÙÙ„ÙŽÙ‰</strong> (to) + <strong>Ù‡ÙŽØ§</strong> = <strong>Ø¥ÙÙ„ÙŽÙŠÙ’Ù‡ÙŽØ§</strong> (to it / to her)</li></ul>',
      rule: 'Preposition + Pronoun Suffix = one combined word. The combined form replaces the noun so you do not have to repeat it.'
    },
    {
      title: 'ÙÙÙŠØŒ Ø¹ÙŽÙ„ÙŽÙ‰ØŒ and Ø¥ÙÙ„ÙŽÙ‰ Change Their Shape',
      content: '<p>Three common prepositions change their ending before pronoun suffixes:</p><ul><li><strong>ÙÙÙŠ</strong> stays as <strong>ÙÙÙŠ-</strong> before most suffixes: ÙÙÙŠÙ‡ÙØŒ ÙÙÙŠÙ‡ÙŽØ§ØŒ ÙÙÙŠÙƒÙŽ â€” but becomes <strong>ÙÙÙŠÙŽÙ‘</strong> (fiyya) before the "me" suffix.</li><li><strong>Ø¹ÙŽÙ„ÙŽÙ‰</strong> becomes <strong>Ø¹ÙŽÙ„ÙŽÙŠÙ’-</strong>: Ø¹ÙŽÙ„ÙŽÙŠÙ’Ù‡ÙØŒ Ø¹ÙŽÙ„ÙŽÙŠÙ’Ù‡ÙŽØ§ØŒ Ø¹ÙŽÙ„ÙŽÙŠÙ’ÙƒÙŽØŒ Ø¹ÙŽÙ„ÙŽÙŠÙŽÙ‘.</li><li><strong>Ø¥ÙÙ„ÙŽÙ‰</strong> becomes <strong>Ø¥ÙÙ„ÙŽÙŠÙ’-</strong>: Ø¥ÙÙ„ÙŽÙŠÙ’Ù‡ÙØŒ Ø¥ÙÙ„ÙŽÙŠÙ’Ù‡ÙŽØ§ØŒ Ø¥ÙÙ„ÙŽÙŠÙ’ÙƒÙŽØŒ Ø¥ÙÙ„ÙŽÙŠÙŽÙ‘.</li></ul>',
      rule: 'Ø¹ÙŽÙ„ÙŽÙ‰ â†’ Ø¹ÙŽÙ„ÙŽÙŠÙ’- and Ø¥ÙÙ„ÙŽÙ‰ â†’ Ø¥ÙÙ„ÙŽÙŠÙ’- before all suffixes. ÙÙÙŠ keeps its shape but becomes ÙÙÙŠÙŽÙ‘ for "in me".'
    },
    {
      title: 'Ù„ÙŽÙ‡Ù / Ù„ÙŽÙ‡ÙŽØ§ â€” "He Has / She Has"',
      content: '<p>In Lesson 10, we saw <strong>Ù„ÙÙŠ</strong> (I have, for relatives) and <strong>Ø¹ÙÙ†Ù’Ø¯ÙÙŠ</strong> (I have, for objects). This extends to third person:</p><ul><li><strong>Ù„ÙŽÙ‡Ù Ø£ÙŽØ®ÙŒ</strong> â€” He has a brother. (relative â†’ use Ù„ÙÙ€)</li><li><strong>Ø¹ÙÙ†Ù’Ø¯ÙŽÙ‡Ù Ù‚ÙŽÙ„ÙŽÙ…ÙŒ</strong> â€” He has a pen. (object â†’ use Ø¹ÙÙ†Ù’Ø¯ÙŽ)</li><li><strong>Ù„ÙŽÙ‡ÙŽØ§</strong> â€” She has (for a relative or close possession)</li></ul><p>In everyday use, <strong>Ù„ÙŽÙ‡Ù / Ù„ÙŽÙ‡ÙŽØ§</strong> is often used broadly for both people and objects.</p>',
      rule: 'Ù„ÙŽÙ‡Ù = "for him" or "he has". Ù„ÙŽÙ‡ÙŽØ§ = "for her" or "she has".'
    }
  ],

  // ============================================================
  // EXAMPLE SENTENCES
  // ============================================================
  examples: [
    { ar: 'Ø§Ù„Ù’ÙƒÙØªÙŽØ§Ø¨Ù ÙÙÙŠ Ø§Ù„Ù’Ø­ÙŽÙ‚ÙÙŠØ¨ÙŽØ©Ù. Ù‡ÙÙˆÙŽ ÙÙÙŠÙ‡ÙŽØ§', trans: 'al-kitÄbu fÄ« l-á¸¥aqÄ«bati. huwa fÄ«hÄ', meaning: 'The book is in the bag. It is in it.' },
    { ar: 'Ø§Ù„Ù’Ù‚ÙŽÙ„ÙŽÙ…Ù Ø¹ÙŽÙ„ÙŽÙ‰ Ø§Ù„Ø·ÙŽÙ‘Ø§ÙˆÙÙ„ÙŽØ©Ù. Ù‡ÙÙˆÙŽ Ø¹ÙŽÙ„ÙŽÙŠÙ’Ù‡ÙŽØ§', trans: 'al-qalamu Ê¿alÄ l-á¹­Äwilati. huwa Ê¿alayhÄ', meaning: 'The pen is on the table. It is on it.' },
    { ar: 'Ø§Ù„Ù’Ù…ÙÙÙ’ØªÙŽØ§Ø­Ù ÙÙÙŠ Ø§Ù„Ù’ØºÙØ±Ù’ÙÙŽØ©Ù. Ù‡ÙÙˆÙŽ ÙÙÙŠÙ‡ÙŽØ§', trans: 'al-miftÄá¸¥u fÄ« l-ghurfati. huwa fÄ«hÄ', meaning: 'The key is in the room. It is in it.' },
    { ar: 'Ø§Ù„Ù’ÙˆÙŽÙ„ÙŽØ¯Ù ÙÙÙŠ Ø§Ù„Ù’ÙÙŽØµÙ’Ù„Ù. Ù‡ÙÙˆÙŽ ÙÙÙŠÙ‡Ù', trans: 'al-waladu fÄ« l-faá¹£li. huwa fÄ«hi', meaning: 'The boy is in the classroom. He is in it.' },
    { ar: 'Ù„ÙŽÙ‡Ù ÙƒÙØªÙŽØ§Ø¨ÙŒ Ø¬ÙŽØ¯ÙÙŠØ¯ÙŒ ÙˆÙŽÙ‚ÙŽÙ„ÙŽÙ…ÙŒ Ø¬ÙŽÙ…ÙÙŠÙ„ÙŒ', trans: 'lahu kitÄbun jadÄ«dun wa-qalamun jamÄ«lun', meaning: 'He has a new book and a beautiful pen.' },
    { ar: 'Ù„ÙŽÙ‡ÙŽØ§ Ø­ÙŽÙ‚ÙÙŠØ¨ÙŽØ©ÙŒ Ø³ÙŽÙˆÙ’Ø¯ÙŽØ§Ø¡Ù', trans: 'lahÄ á¸¥aqÄ«batun sawdÄÊ¾u', meaning: 'She has a black bag.' },
    { ar: 'Ù‡ÙŽØ°ÙŽØ§ Ø§Ù„Ù’ÙƒÙØªÙŽØ§Ø¨Ù Ù…ÙÙ†ÙŽ Ø§Ù„Ø£ÙØ³Ù’ØªÙŽØ§Ø°Ù. Ù‡ÙÙˆÙŽ Ù…ÙÙ†Ù’Ù‡Ù', trans: 'hÄdhÄ l-kitÄbu mina l-ustÄdhi. huwa minhu', meaning: 'This book is from the teacher. It is from him.' },
    { ar: 'Ø§Ù„Ø·ÙŽÙ‘Ø§Ù„ÙØ¨Ù ÙÙÙŠ Ø§Ù„Ù’ÙÙŽØµÙ’Ù„Ù. Ø£ÙØ³Ù’ØªÙŽØ§Ø°ÙÙ‡Ù ÙÙÙŠÙ‡Ù Ø£ÙŽÙŠÙ’Ø¶Ù‹Ø§', trans: 'al-á¹­Älibu fÄ« l-faá¹£li. ustÄdhuhu fÄ«hi ayá¸an', meaning: 'The student is in the classroom. His teacher is in it too.' }
  ],

  // ============================================================
  // READING COMPREHENSION
  // ============================================================
  comprehension: {
    title: "Khalid's Room",
    arabic: 'Ù‡ÙŽØ°ÙÙ‡Ù ØºÙØ±Ù’ÙÙŽØ©Ù Ø®ÙŽØ§Ù„ÙØ¯Ù. Ø®ÙŽØ§Ù„ÙØ¯ÙŒ ÙÙÙŠÙ‡ÙŽØ§ Ø§Ù„Ø¢Ù†ÙŽ. Ø§Ù„Ù’ØºÙØ±Ù’ÙÙŽØ©Ù ÙƒÙŽØ¨ÙÙŠØ±ÙŽØ©ÙŒ ÙˆÙŽÙ†ÙŽØ¸ÙÙŠÙÙŽØ©ÙŒ. Ø¹ÙŽÙ„ÙŽÙ‰ Ø§Ù„Ø·ÙŽÙ‘Ø§ÙˆÙÙ„ÙŽØ©Ù ÙƒÙØªÙŽØ§Ø¨ÙŒ Ø¬ÙŽØ¯ÙÙŠØ¯ÙŒ ÙˆÙŽÙ‚ÙŽÙ„ÙŽÙ…ÙŒ Ø£ÙŽØ­Ù’Ù…ÙŽØ±Ù. Ø§Ù„Ù’ÙƒÙØªÙŽØ§Ø¨Ù Ù„ÙØ®ÙŽØ§Ù„ÙØ¯Ù ÙˆÙŽØ§Ù„Ù’Ù‚ÙŽÙ„ÙŽÙ…Ù Ù„ÙŽÙ‡Ù Ø£ÙŽÙŠÙ’Ø¶Ù‹Ø§. Ø­ÙŽÙ‚ÙÙŠØ¨ÙŽØ©Ù Ø®ÙŽØ§Ù„ÙØ¯Ù Ø¹ÙŽÙ„ÙŽÙ‰ Ø§Ù„Ù’ÙƒÙØ±Ù’Ø³ÙÙŠÙÙ‘. Ø§Ù„Ù’Ù…ÙÙÙ’ØªÙŽØ§Ø­Ù ÙÙÙŠÙ‡ÙŽØ§. Ø®ÙŽØ§Ù„ÙØ¯ÙŒ Ø·ÙŽØ§Ù„ÙØ¨ÙŒ Ù…ÙØ¬Ù’ØªÙŽÙ‡ÙØ¯ÙŒ.',
    english: "This is Khalid's room. Khalid is in it now. The room is large and clean. On the table is a new book and a red pen. The book belongs to Khalid, and the pen is his too. Khalid's bag is on the chair. The key is in it. Khalid is a hardworking student.",
    questions: [
      {
        text: 'Where is Khalid now?',
        options: ['In the classroom', 'In his room', 'In the mosque', 'In the school'],
        correct: 'In his room'
      },
      {
        text: 'What is on the table (Ø¹ÙŽÙ„ÙŽÙ‰ Ø§Ù„Ø·ÙŽÙ‘Ø§ÙˆÙÙ„ÙŽØ©Ù)?',
        options: ['A bag and a key', 'A new book and a red pen', 'A chair and a table', 'A book and a bag'],
        correct: 'A new book and a red pen'
      },
      {
        text: "Where is Khalid's bag?",
        options: ['On the table', 'In the room', 'On the chair', 'Under the table'],
        correct: 'On the chair'
      },
      {
        text: 'What is inside the bag (ÙÙÙŠÙ‡ÙŽØ§)?',
        options: ['A book', 'A pen', 'The key', 'A phone'],
        correct: 'The key'
      }
    ]
  },

  // ============================================================
  // PRACTICE QUESTIONS
  // ============================================================
  practiceQuestions: [
    { arabic: 'Ø§Ù„Ù’ÙƒÙØªÙŽØ§Ø¨Ù ÙÙÙŠÙ‡Ù', correct: 'The book is in it (masc.)', options: ['The book is on it', 'The book is in it (masc.)', 'The book is from it', 'The book is for him'] },
    { arabic: 'Ù„ÙŽÙ‡Ù Ø¨ÙŽÙŠÙ’ØªÙŒ ÙƒÙŽØ¨ÙÙŠØ±ÙŒ', correct: 'He has a large house', options: ['He has a large house', 'She has a large house', 'In a large house', 'A large house is on it'] },
    { text: 'What is the combined form of Ø¹ÙŽÙ„ÙŽÙ‰ + Ù‡ÙŽØ§?', correct: 'Ø¹ÙŽÙ„ÙŽÙŠÙ’Ù‡ÙŽØ§', options: ['Ø¹ÙŽÙ„ÙŽÙŠÙ’Ù‡Ù', 'Ø¹ÙŽÙ„ÙŽÙŠÙ’Ù‡ÙŽØ§', 'Ø¹ÙŽÙ„ÙŽÙŠÙ’ÙƒÙŽ', 'Ø¹ÙŽÙ„ÙŽÙŠÙŽÙ‘'] },
    { text: 'Which means "From her / From it (fem.)"?', correct: 'Ù…ÙÙ†Ù’Ù‡ÙŽØ§', options: ['Ù…ÙÙ†Ù’Ù‡Ù', 'Ù…ÙÙ†Ù’Ù‡ÙŽØ§', 'Ø¥ÙÙ„ÙŽÙŠÙ’Ù‡ÙŽØ§', 'Ø¨ÙÙ‡Ù'] },
    { text: 'Complete: Ø§Ù„Ù’Ù‚ÙŽÙ„ÙŽÙ…Ù ÙÙÙŠ Ø§Ù„Ù’Ø­ÙŽÙ‚ÙÙŠØ¨ÙŽØ©Ù. Ù‡ÙÙˆÙŽ ___.', correct: 'ÙÙÙŠÙ‡ÙŽØ§', options: ['ÙÙÙŠÙ‡Ù', 'ÙÙÙŠÙ‡ÙŽØ§', 'Ø¹ÙŽÙ„ÙŽÙŠÙ’Ù‡ÙŽØ§', 'Ù…ÙÙ†Ù’Ù‡ÙŽØ§'] },
    { arabic: 'Ø¥ÙÙ„ÙŽÙŠÙ’Ù‡Ù', correct: 'To it / To him', options: ['From it / From him', 'On him', 'To it / To him', 'In him'] }
  ],

  // ============================================================
  // QUIZ QUESTIONS
  // ============================================================
  quizQuestions: {
    multipleChoice: [
      { prompt: 'What does ÙÙÙŠÙ‡Ù mean?', options: ['In me', 'In you (masc.)', 'In it (masc.) / In him', 'In her'], correct: 2 },
      { prompt: 'What is the combined form of Ø¹ÙŽÙ„ÙŽÙ‰ + Ù‡ÙŽØ§?', options: ['Ø¹ÙŽÙ„ÙŽÙŠÙ’Ù‡Ù', 'Ø¹ÙŽÙ„ÙŽÙŠÙ’Ù‡ÙŽØ§', 'Ø¹ÙŽÙ„ÙŽÙŠÙ’ÙƒÙŽ', 'Ø¹ÙŽÙ„ÙŽÙŠÙŽÙ‘'], correct: 1 },
      { prompt: 'Translate: "He has a book."', options: ['ÙÙÙŠÙ‡Ù ÙƒÙØªÙŽØ§Ø¨ÙŒ', 'Ù„ÙŽÙ‡Ù ÙƒÙØªÙŽØ§Ø¨ÙŒ', 'Ù…ÙÙ†Ù’Ù‡Ù ÙƒÙØªÙŽØ§Ø¨ÙŒ', 'Ø¹ÙŽÙ„ÙŽÙŠÙ’Ù‡Ù ÙƒÙØªÙŽØ§Ø¨ÙŒ'], correct: 1 },
      { prompt: 'Complete: Ø§Ù„Ù’Ù…ÙÙÙ’ØªÙŽØ§Ø­Ù ÙÙÙŠ Ø§Ù„Ù’Ø­ÙŽÙ‚ÙÙŠØ¨ÙŽØ©Ù. Ù‡ÙÙˆÙŽ ___.', options: ['ÙÙÙŠÙ‡Ù', 'ÙÙÙŠÙ‡ÙŽØ§', 'Ø¹ÙŽÙ„ÙŽÙŠÙ’Ù‡ÙŽØ§', 'Ù…ÙÙ†Ù’Ù‡ÙŽØ§'], correct: 1 },
      { prompt: 'What does Ù…ÙÙ†Ù’Ù‡Ù mean?', options: ['To him', 'On him', 'From it / From him', 'In him'], correct: 2 },
      { prompt: 'What is the combined form of Ø¥ÙÙ„ÙŽÙ‰ + Ù‡ÙŽØ§?', options: ['Ø¥ÙÙ„ÙŽÙŠÙ’Ù‡Ù', 'Ø¥ÙÙ„ÙŽÙŠÙ’Ù‡ÙŽØ§', 'Ø¥ÙÙ„ÙŽÙŠÙ’ÙƒÙŽ', 'Ø¥ÙÙ„ÙŽÙŠÙŽÙ‘'], correct: 1 },
      { prompt: 'Which is correct for "In me"?', options: ['ÙÙÙŠÙ‡Ù', 'ÙÙÙŠÙƒÙŽ', 'ÙÙÙŠÙŽÙ‘', 'ÙÙÙŠÙ†ÙŽØ§'], correct: 2 },
      { prompt: 'Translate: "She has a red pen."', options: ['Ù„ÙŽÙ‡Ù Ù‚ÙŽÙ„ÙŽÙ…ÙŒ Ø£ÙŽØ­Ù’Ù…ÙŽØ±Ù', 'Ù„ÙŽÙ‡ÙŽØ§ Ù‚ÙŽÙ„ÙŽÙ…ÙŒ Ø£ÙŽØ­Ù’Ù…ÙŽØ±Ù', 'Ø¹ÙŽÙ„ÙŽÙŠÙ’Ù‡ÙŽØ§ Ù‚ÙŽÙ„ÙŽÙ…ÙŒ Ø£ÙŽØ­Ù’Ù…ÙŽØ±Ù', 'ÙÙÙŠÙ‡ÙŽØ§ Ù‚ÙŽÙ„ÙŽÙ…ÙŒ Ø£ÙŽØ­Ù’Ù…ÙŽØ±Ù'], correct: 1 },
      { prompt: 'What does Ø¨ÙÙ‡Ù mean?', options: ['In it', 'On it', 'From it', 'With it / By it'], correct: 3 },
      { prompt: 'Complete: Ø§Ù„Ø·ÙŽÙ‘Ø§Ù„ÙØ¨Ù ÙÙÙŠ Ø§Ù„Ù’ÙÙŽØµÙ’Ù„Ù. Ù‡ÙÙˆÙŽ ___.', options: ['ÙÙÙŠÙ‡Ù', 'ÙÙÙŠÙ‡ÙŽØ§', 'Ø¹ÙŽÙ„ÙŽÙŠÙ’Ù‡Ù', 'Ù…ÙÙ†Ù’Ù‡Ù'], correct: 0 }
    ],
    typing: [
      { prompt: 'Type in Arabic: "In it" â€” referring to a bag (Ø­ÙŽÙ‚ÙÙŠØ¨ÙŽØ©, feminine)', ideal: 'ÙÙÙŠÙ‡ÙŽØ§', accepts: ['ÙÙŠÙ‡Ø§', 'ÙÙÙŠÙ‡ÙŽØ§'] },
      { prompt: 'Type in Arabic: "He has a key."', ideal: 'Ù„ÙŽÙ‡Ù Ù…ÙÙÙ’ØªÙŽØ§Ø­ÙŒ', accepts: ['Ù„Ù‡ Ù…ÙØªØ§Ø­', 'Ù„ÙŽÙ‡Ù Ù…ÙÙÙ’ØªÙŽØ§Ø­ÙŒ', 'Ù„Ù‡ Ù…ÙØªØ§Ø­ÙŒ', 'Ù„ÙŽÙ‡Ù Ù…ÙØªØ§Ø­'] }
    ]
  }
};

