/* ============================================================
   b1-lesson13.js â€” Lesson 13 Data
   ============================================================ */

const LESSON_DATA = {
  book: 'book1',
  lessonNum: 13,
  titleArabic: 'Ø°ÙŽÙ‡ÙŽØ¨ÙŽ â€” Ø°ÙŽÙ‡ÙŽØ¨ÙŽØªÙ’',
  titleEnglish: 'Past Tense Verbs',
  summary: 'In this lesson, you will learn your first clear past-tense pattern: he did and she did. Arabic marks a feminine past-tense verb with a quiet ØªÙ’ ending, as in Ø°ÙŽÙ‡ÙŽØ¨ÙŽØªÙ’.',
  nextLesson: 'b1-lesson14.html',
  passMark: 6,
  totalQuestions: 12,

  // ============================================================
  // VOCABULARY
  // ============================================================
  vocab: [
    { ar: 'Ø°ÙŽÙ‡ÙŽØ¨ÙŽØªÙ’', trans: 'dhahabat', meaning: 'She went', type: 'Verb' },
    { ar: 'Ø®ÙŽØ±ÙŽØ¬ÙŽØªÙ’', trans: 'kharajat', meaning: 'She left / went out', type: 'Verb' },
    { ar: 'Ø¯ÙŽØ®ÙŽÙ„ÙŽ', trans: 'dakhala', meaning: 'He entered', type: 'Verb' },
    { ar: 'Ø¯ÙŽØ®ÙŽÙ„ÙŽØªÙ’', trans: 'dakhalat', meaning: 'She entered', type: 'Verb' },
    { ar: 'Ø¬ÙŽÙ„ÙŽØ³ÙŽ', trans: 'jalasa', meaning: 'He sat', type: 'Verb' },
    { ar: 'Ø¬ÙŽÙ„ÙŽØ³ÙŽØªÙ’', trans: 'jalasat', meaning: 'She sat', type: 'Verb' },
    { ar: 'ÙƒÙŽØªÙŽØ¨ÙŽ', trans: 'kataba', meaning: 'He wrote', type: 'Verb' },
    { ar: 'ÙƒÙŽØªÙŽØ¨ÙŽØªÙ’', trans: 'katabat', meaning: 'She wrote', type: 'Verb' },
    { ar: 'Ù‚ÙŽØ±ÙŽØ£ÙŽ', trans: 'qaraÊ¾a', meaning: 'He read', type: 'Verb' },
    { ar: 'Ù‚ÙŽØ±ÙŽØ£ÙŽØªÙ’', trans: 'qaraÊ¾at', meaning: 'She read', type: 'Verb' },
    { ar: 'Ø±ÙŽØ¬ÙŽØ¹ÙŽ', trans: 'rajaÊ¿a', meaning: 'He returned', type: 'Verb' },
    { ar: 'Ø±ÙŽØ¬ÙŽØ¹ÙŽØªÙ’', trans: 'rajaÊ¿at', meaning: 'She returned', type: 'Verb' }
  ],

  // ============================================================
  // GRAMMAR BLOCKS
  // ============================================================
  grammarBlocks: [
    {
      title: 'The Past Tense for "He"',
      content: '<p>The basic past-tense verb form often means <strong>he did</strong>. You already met <strong>Ø°ÙŽÙ‡ÙŽØ¨ÙŽ</strong> (he went) and <strong>Ø®ÙŽØ±ÙŽØ¬ÙŽ</strong> (he left). This lesson makes that pattern clear.</p><ul><li><strong>Ø°ÙŽÙ‡ÙŽØ¨ÙŽ</strong> â€” he went</li><li><strong>Ø¯ÙŽØ®ÙŽÙ„ÙŽ</strong> â€” he entered</li><li><strong>Ø¬ÙŽÙ„ÙŽØ³ÙŽ</strong> â€” he sat</li><li><strong>ÙƒÙŽØªÙŽØ¨ÙŽ</strong> â€” he wrote</li></ul>',
      rule: 'The plain past-tense form normally means "he did".'
    },
    {
      title: 'The Past Tense for "She"',
      content: '<p>To say <strong>she did</strong>, Arabic adds a quiet <strong>ØªÙ’</strong> to the end of the past-tense verb.</p><ul><li><strong>Ø°ÙŽÙ‡ÙŽØ¨ÙŽ</strong> (he went) â†’ <strong>Ø°ÙŽÙ‡ÙŽØ¨ÙŽØªÙ’</strong> (she went)</li><li><strong>Ø¯ÙŽØ®ÙŽÙ„ÙŽ</strong> (he entered) â†’ <strong>Ø¯ÙŽØ®ÙŽÙ„ÙŽØªÙ’</strong> (she entered)</li><li><strong>Ø¬ÙŽÙ„ÙŽØ³ÙŽ</strong> (he sat) â†’ <strong>Ø¬ÙŽÙ„ÙŽØ³ÙŽØªÙ’</strong> (she sat)</li><li><strong>ÙƒÙŽØªÙŽØ¨ÙŽ</strong> (he wrote) â†’ <strong>ÙƒÙŽØªÙŽØ¨ÙŽØªÙ’</strong> (she wrote)</li></ul>',
      rule: 'He did: ÙÙŽØ¹ÙŽÙ„ÙŽ pattern. She did: add ØªÙ’ at the end.'
    },
    {
      title: 'Verb First or Noun First',
      content: '<p>Arabic can place the verb before the doer, especially in simple past-tense sentences.</p><ul><li><strong>Ø°ÙŽÙ‡ÙŽØ¨ÙŽ Ø§Ù„Ø·Ù‘ÙŽØ§Ù„ÙØ¨Ù</strong> â€” The student went.</li><li><strong>Ø°ÙŽÙ‡ÙŽØ¨ÙŽØªÙ Ø§Ù„Ø·Ù‘ÙŽØ¨ÙÙŠØ¨ÙŽØ©Ù</strong> â€” The doctor went.</li></ul><p>If the doer comes first, the verb still matches the doer in gender in these simple sentences:</p><ul><li><strong>Ø§Ù„Ø·Ù‘ÙŽØ§Ù„ÙØ¨Ù Ø°ÙŽÙ‡ÙŽØ¨ÙŽ</strong> â€” The student went.</li><li><strong>Ø§Ù„Ø·Ù‘ÙŽØ¨ÙÙŠØ¨ÙŽØ©Ù Ø°ÙŽÙ‡ÙŽØ¨ÙŽØªÙ’</strong> â€” The doctor went.</li></ul>',
      rule: 'Use the masculine verb with a masculine doer and the feminine verb with a feminine doer.'
    }
  ],

  // ============================================================
  // EXAMPLE SENTENCES
  // ============================================================
  examples: [
    { ar: 'Ø°ÙŽÙ‡ÙŽØ¨ÙŽ Ø§Ù„Ø·Ù‘ÙŽØ§Ù„ÙØ¨Ù Ø¥ÙÙ„ÙŽÙ‰ Ø§Ù„Ù’Ù…ÙŽØ³Ù’Ø¬ÙØ¯Ù', trans: 'dhahaba á¹­-á¹­Älibu ilÄ l-masjidi', meaning: 'The student went to the mosque.' },
    { ar: 'Ø°ÙŽÙ‡ÙŽØ¨ÙŽØªÙ Ø§Ù„Ø·Ù‘ÙŽØ¨ÙÙŠØ¨ÙŽØ©Ù Ø¥ÙÙ„ÙŽÙ‰ Ø§Ù„Ù’Ù…ÙØ³Ù’ØªÙŽØ´Ù’ÙÙŽÙ‰', trans: 'dhahabati á¹­-á¹­abÄ«batu ilÄ l-mustashfÄ', meaning: 'The doctor went to the hospital.' },
    { ar: 'Ø¯ÙŽØ®ÙŽÙ„ÙŽ Ø§Ù„Ù’Ù…ÙØ¯ÙŽØ±Ù‘ÙØ³Ù Ø§Ù„Ù’ÙÙŽØµÙ’Ù„ÙŽ', trans: 'dakhala l-mudarrisu l-faá¹£la', meaning: 'The teacher entered the classroom.' },
    { ar: 'Ø¯ÙŽØ®ÙŽÙ„ÙŽØªÙ’ Ø¢Ù…ÙÙ†ÙŽØ©Ù Ø§Ù„Ù’ØºÙØ±Ù’ÙÙŽØ©ÙŽ', trans: 'dakhalat Äminatu l-ghurfata', meaning: 'Aminah entered the room.' },
    { ar: 'Ø¬ÙŽÙ„ÙŽØ³ÙŽ Ø®ÙŽØ§Ù„ÙØ¯ÙŒ Ø¹ÙŽÙ„ÙŽÙ‰ Ø§Ù„Ù’ÙƒÙØ±Ù’Ø³ÙÙŠÙ‘Ù', trans: 'jalasa khÄlidun Ê¿alÄ l-kursiyyi', meaning: 'Khalid sat on the chair.' },
    { ar: 'Ø¬ÙŽÙ„ÙŽØ³ÙŽØªÙ Ø§Ù„Ù’Ø¨ÙÙ†Ù’ØªÙ ÙÙÙŠ Ø§Ù„Ù’ØºÙØ±Ù’ÙÙŽØ©Ù', trans: 'jalasati l-bintu fÄ« l-ghurfati', meaning: 'The girl sat in the room.' },
    { ar: 'ÙƒÙŽØªÙŽØ¨ÙŽ Ø§Ù„Ù’ÙˆÙŽÙ„ÙŽØ¯Ù Ø§Ù„Ø¯Ù‘ÙŽØ±Ù’Ø³ÙŽ', trans: 'kataba l-waladu d-darsa', meaning: 'The boy wrote the lesson.' },
    { ar: 'Ù‚ÙŽØ±ÙŽØ£ÙŽØªÙ Ø§Ù„Ø·Ù‘ÙŽØ§Ù„ÙØ¨ÙŽØ©Ù Ø§Ù„Ù’ÙƒÙØªÙŽØ§Ø¨ÙŽ', trans: 'qaraÊ¾ati á¹­-á¹­Älibatu l-kitÄba', meaning: 'The female student read the book.' }
  ],

  // ============================================================
  // READING COMPREHENSION
  // ============================================================
  comprehension: {
    title: 'Morning at School',
    arabic: 'Ø°ÙŽÙ‡ÙŽØ¨ÙŽ Ø®ÙŽØ§Ù„ÙØ¯ÙŒ Ø¥ÙÙ„ÙŽÙ‰ Ø§Ù„Ù’Ù…ÙŽØ¯Ù’Ø±ÙŽØ³ÙŽØ©Ù ØµÙŽØ¨ÙŽØ§Ø­Ù‹Ø§. Ø¯ÙŽØ®ÙŽÙ„ÙŽ Ø§Ù„Ù’ÙÙŽØµÙ’Ù„ÙŽ ÙˆÙŽØ¬ÙŽÙ„ÙŽØ³ÙŽ Ø¹ÙŽÙ„ÙŽÙ‰ Ø§Ù„Ù’ÙƒÙØ±Ù’Ø³ÙÙŠÙ‘Ù. Ø¹ÙÙ†Ù’Ø¯ÙŽÙ‡Ù ÙƒÙØªÙŽØ§Ø¨ÙŒ Ø¬ÙŽØ¯ÙÙŠØ¯ÙŒ ÙˆÙŽÙ‚ÙŽÙ„ÙŽÙ…ÙŒ Ø£ÙŽØ­Ù’Ù…ÙŽØ±Ù. Ù‚ÙŽØ±ÙŽØ£ÙŽ Ø®ÙŽØ§Ù„ÙØ¯ÙŒ Ø§Ù„Ø¯Ù‘ÙŽØ±Ù’Ø³ÙŽ ÙˆÙŽÙƒÙŽØªÙŽØ¨ÙŽ ÙƒÙŽÙ„ÙÙ…ÙŽØ©Ù‹ ÙÙÙŠ Ø§Ù„Ø¯Ù‘ÙŽÙÙ’ØªÙŽØ±Ù. Ø¯ÙŽØ®ÙŽÙ„ÙŽØªÙ’ Ø¢Ù…ÙÙ†ÙŽØ©Ù Ø§Ù„Ù’ÙÙŽØµÙ’Ù„ÙŽ Ø£ÙŽÙŠÙ’Ø¶Ù‹Ø§. Ø¬ÙŽÙ„ÙŽØ³ÙŽØªÙ’ Ù‚ÙŽØ±ÙÙŠØ¨ÙŽØ©Ù‹ Ù…ÙÙ†ÙŽ Ø§Ù„Ù†Ù‘ÙŽØ§ÙÙØ°ÙŽØ©Ù. Ù‚ÙŽØ±ÙŽØ£ÙŽØªÙ’ Ø¢Ù…ÙÙ†ÙŽØ©Ù Ø§Ù„Ù’ÙƒÙØªÙŽØ§Ø¨ÙŽ Ø«ÙÙ…Ù‘ÙŽ ÙƒÙŽØªÙŽØ¨ÙŽØªÙ’ ÙÙÙŠ Ø§Ù„Ø¯Ù‘ÙŽÙÙ’ØªÙŽØ±Ù. Ø¨ÙŽØ¹Ù’Ø¯ÙŽ Ø§Ù„Ø¯Ù‘ÙŽØ±Ù’Ø³Ù Ø±ÙŽØ¬ÙŽØ¹ÙŽ Ø®ÙŽØ§Ù„ÙØ¯ÙŒ Ø¥ÙÙ„ÙŽÙ‰ Ø§Ù„Ù’Ø¨ÙŽÙŠÙ’ØªÙ ÙˆÙŽØ±ÙŽØ¬ÙŽØ¹ÙŽØªÙ’ Ø¢Ù…ÙÙ†ÙŽØ©Ù Ø¥ÙÙ„ÙŽÙ‰ Ø¨ÙŽÙŠÙ’ØªÙÙ‡ÙŽØ§.',
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

  // ============================================================
  // PRACTICE QUESTIONS
  // ============================================================
  practiceQuestions: [
    { arabic: 'Ø°ÙŽÙ‡ÙŽØ¨ÙŽ Ø§Ù„Ø·Ù‘ÙŽØ§Ù„ÙØ¨Ù', correct: 'The student went', options: ['The student went', 'The student sat', 'The teacher entered', 'The girl returned'] },
    { arabic: 'Ø°ÙŽÙ‡ÙŽØ¨ÙŽØªÙ Ø§Ù„Ø·Ù‘ÙŽØ¨ÙÙŠØ¨ÙŽØ©Ù', correct: 'The doctor went', options: ['The doctor went', 'The doctor wrote', 'The student read', 'The teacher sat'] },
    { text: 'What ending marks "she did" in these past-tense verbs?', correct: 'ØªÙ’', options: ['ØªÙ’', 'Ù‡Ù', 'Ø§Ù„Ù’', 'ÙˆÙ†'] },
    { text: 'Choose the feminine form of Ø¯ÙŽØ®ÙŽÙ„ÙŽ.', correct: 'Ø¯ÙŽØ®ÙŽÙ„ÙŽØªÙ’', options: ['Ø¯ÙŽØ®ÙŽÙ„ÙŽ', 'Ø¯ÙŽØ®ÙŽÙ„ÙŽØªÙ’', 'Ø¯ÙŽØ®ÙŽÙ„Ù’ØªÙŽ', 'ÙŠÙŽØ¯Ù’Ø®ÙÙ„Ù'] },
    { text: 'Which means "he read"?', correct: 'Ù‚ÙŽØ±ÙŽØ£ÙŽ', options: ['Ù‚ÙŽØ±ÙŽØ£ÙŽ', 'Ù‚ÙŽØ±ÙŽØ£ÙŽØªÙ’', 'ÙƒÙŽØªÙŽØ¨ÙŽØªÙ’', 'Ø¬ÙŽÙ„ÙŽØ³ÙŽØªÙ’'] },
    { text: 'Complete: Ø¢Ù…ÙÙ†ÙŽØ©Ù ___ ÙÙÙŠ Ø§Ù„Ø¯Ù‘ÙŽÙÙ’ØªÙŽØ±Ù.', correct: 'ÙƒÙŽØªÙŽØ¨ÙŽØªÙ’', options: ['ÙƒÙŽØªÙŽØ¨ÙŽ', 'ÙƒÙŽØªÙŽØ¨ÙŽØªÙ’', 'Ù‚ÙŽØ±ÙŽØ£ÙŽ', 'Ø¬ÙŽÙ„ÙŽØ³ÙŽ'] }
  ],

  // ============================================================
  // QUIZ QUESTIONS
  // ============================================================
  quizQuestions: {
    multipleChoice: [
      { prompt: 'What does Ø¯ÙŽØ®ÙŽÙ„ÙŽ mean?', options: ['He entered', 'She entered', 'He sat', 'She wrote'], correct: 0 },
      { prompt: 'What does Ø¯ÙŽØ®ÙŽÙ„ÙŽØªÙ’ mean?', options: ['He entered', 'She entered', 'He returned', 'She read'], correct: 1 },
      { prompt: 'Choose the correct translation: "She sat."', options: ['Ø¬ÙŽÙ„ÙŽØ³ÙŽ', 'Ø¬ÙŽÙ„ÙŽØ³ÙŽØªÙ’', 'Ø¯ÙŽØ®ÙŽÙ„ÙŽØªÙ’', 'Ø±ÙŽØ¬ÙŽØ¹ÙŽ'], correct: 1 },
      { prompt: 'Choose the correct translation: "He wrote."', options: ['ÙƒÙŽØªÙŽØ¨ÙŽ', 'ÙƒÙŽØªÙŽØ¨ÙŽØªÙ’', 'Ù‚ÙŽØ±ÙŽØ£ÙŽØªÙ’', 'Ø¬ÙŽÙ„ÙŽØ³ÙŽ'], correct: 0 },
      { prompt: 'Complete: Ø®ÙŽØ§Ù„ÙØ¯ÙŒ ___ Ø¥ÙÙ„ÙŽÙ‰ Ø§Ù„Ù’Ù…ÙŽØ¯Ù’Ø±ÙŽØ³ÙŽØ©Ù.', options: ['Ø°ÙŽÙ‡ÙŽØ¨ÙŽØªÙ’', 'Ø°ÙŽÙ‡ÙŽØ¨ÙŽ', 'Ø¬ÙŽÙ„ÙŽØ³ÙŽØªÙ’', 'Ø¯ÙŽØ®ÙŽÙ„ÙŽØªÙ’'], correct: 1 },
      { prompt: 'Complete: Ø¢Ù…ÙÙ†ÙŽØ©Ù ___ Ø¥ÙÙ„ÙŽÙ‰ Ø§Ù„Ù’Ø¨ÙŽÙŠÙ’ØªÙ.', options: ['Ø±ÙŽØ¬ÙŽØ¹ÙŽ', 'Ø±ÙŽØ¬ÙŽØ¹ÙŽØªÙ’', 'Ù‚ÙŽØ±ÙŽØ£ÙŽ', 'ÙƒÙŽØªÙŽØ¨ÙŽ'], correct: 1 },
      { prompt: 'What is the feminine form of Ù‚ÙŽØ±ÙŽØ£ÙŽ?', options: ['Ù‚ÙŽØ±ÙŽØ£Ù’ØªÙŽ', 'Ù‚ÙŽØ±ÙŽØ£ÙŽØªÙ’', 'Ù‚ÙŽØ±ÙŽØ£ÙŽ', 'ÙŠÙŽÙ‚Ù’Ø±ÙŽØ£Ù'], correct: 1 },
      { prompt: 'What is the masculine form of ÙƒÙŽØªÙŽØ¨ÙŽØªÙ’?', options: ['ÙƒÙŽØªÙŽØ¨ÙŽ', 'ÙƒÙŽØªÙŽØ¨Ù’ØªÙŽ', 'ÙƒÙŽØªÙŽØ¨ÙŽØªÙ’', 'ÙŠÙŽÙƒÙ’ØªÙØ¨Ù'], correct: 0 },
      { prompt: 'Translate: "The teacher entered the classroom."', options: ['Ø¯ÙŽØ®ÙŽÙ„ÙŽ Ø§Ù„Ù’Ù…ÙØ¯ÙŽØ±Ù‘ÙØ³Ù Ø§Ù„Ù’ÙÙŽØµÙ’Ù„ÙŽ', 'Ø¯ÙŽØ®ÙŽÙ„ÙŽØªÙ Ø§Ù„Ù’Ù…ÙØ¯ÙŽØ±Ù‘ÙØ³Ù Ø§Ù„Ù’ÙÙŽØµÙ’Ù„ÙŽ', 'Ø¬ÙŽÙ„ÙŽØ³ÙŽ Ø§Ù„Ù’Ù…ÙØ¯ÙŽØ±Ù‘ÙØ³Ù Ø§Ù„Ù’ÙÙŽØµÙ’Ù„ÙŽ', 'Ø±ÙŽØ¬ÙŽØ¹ÙŽØªÙ Ø§Ù„Ù’Ù…ÙØ¯ÙŽØ±Ù‘ÙØ³Ù Ø§Ù„Ù’ÙÙŽØµÙ’Ù„ÙŽ'], correct: 0 },
      { prompt: 'Which pair means "he returned / she returned"?', options: ['Ø¬ÙŽÙ„ÙŽØ³ÙŽ / Ø¬ÙŽÙ„ÙŽØ³ÙŽØªÙ’', 'Ø±ÙŽØ¬ÙŽØ¹ÙŽ / Ø±ÙŽØ¬ÙŽØ¹ÙŽØªÙ’', 'ÙƒÙŽØªÙŽØ¨ÙŽ / ÙƒÙŽØªÙŽØ¨ÙŽØªÙ’', 'Ù‚ÙŽØ±ÙŽØ£ÙŽ / Ù‚ÙŽØ±ÙŽØ£ÙŽØªÙ’'], correct: 1 }
    ],
    typing: [
      { prompt: 'Type in Arabic: "She went"', ideal: 'Ø°ÙŽÙ‡ÙŽØ¨ÙŽØªÙ’', accepts: ['Ø°Ù‡Ø¨Øª', 'Ø°ÙŽÙ‡ÙŽØ¨ÙŽØªÙ’', 'Ø°ÙŽÙ‡ÙŽØ¨ÙŽØª'] },
      { prompt: 'Type in Arabic: "He entered"', ideal: 'Ø¯ÙŽØ®ÙŽÙ„ÙŽ', accepts: ['Ø¯Ø®Ù„', 'Ø¯ÙŽØ®ÙŽÙ„ÙŽ'] }
    ]
  }
};

