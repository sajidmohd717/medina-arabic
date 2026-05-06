/* ============================================================
   b1-lesson5.js â€” Lesson 5 Data
   ============================================================ */

const LESSON_DATA = {
  book: 'book1',
  lessonNum: 5,
  titleArabic: 'Ù…ÙØ¶ÙŽØ§ÙÙŒ ÙˆÙŽÙ…ÙØ¶ÙŽØ§ÙÙŒ Ø¥ÙÙ„ÙŽÙŠÙ’Ù‡Ù',
  titleEnglish: 'The Possessive Construction (Iá¸Äfa)',
  summary: 'In this lesson, you will learn how to express possession (like "Bilal\'s pen" or "the teacher\'s book") using the Iá¸Äfa construction. You will also learn about the vocative particle ÙŠÙŽØ§ (O...), adverbs of place like ØªÙŽØ­Ù’ØªÙŽ (under), and how to ask "Whose?" using Ù…ÙŽÙ†Ù’.',
  nextLesson: 'b1-lesson6.html',
  passMark: 6,
  totalQuestions: 12,
  
  // ============================================================
  // VOCABULARY
  // ============================================================
  vocab: [
    // Possessive concept words
    { ar: 'Ù…ÙØ¶ÙŽØ§ÙÙŒ', trans: 'muá¸Äfun', meaning: 'The possessed (first part)', type: 'Grammar' },
    { ar: 'Ù…ÙØ¶ÙŽØ§ÙÙŒ Ø¥ÙÙ„ÙŽÙŠÙ’Ù‡Ù', trans: 'muá¸Äfun ilayhi', meaning: 'The possessor (second part)', type: 'Grammar' },
    
    // Family & People
    { ar: 'Ø§Ù„ÙØ§Ø¨Ù’Ù†Ù', trans: 'al-ibnu', meaning: 'The son', type: 'Noun' },
    { ar: 'Ø§Ù„Ù’Ø¨ÙÙ†Ù’ØªÙ', trans: 'al-bintu', meaning: 'The daughter / girl', type: 'Noun' },
    { ar: 'Ø§Ù„Ù’Ø¹ÙŽÙ…ÙÙ‘', trans: 'al-Ê¿ammu', meaning: 'Paternal uncle (father\'s brother)', type: 'Noun' },
    { ar: 'Ø§Ù„Ù’Ø®ÙŽØ§Ù„Ù', trans: 'al-khÄlu', meaning: 'Maternal uncle (mother\'s brother)', type: 'Noun' },
    { ar: 'Ø§Ù„Ø±ÙŽÙ‘Ø³ÙÙˆÙ„Ù', trans: 'ar-rasÅ«lu', meaning: 'The messenger', type: 'Noun' },
    { ar: 'Ø§Ù„Ù’Ù…ÙÙ‡ÙŽÙ†Ù’Ø¯ÙØ³Ù', trans: 'al-muhandisu', meaning: 'The engineer', type: 'Noun' },
    { ar: 'Ø·ÙŽØ¨ÙÙŠØ¨ÙŒ', trans: 'á¹­abÄ«bun', meaning: 'A doctor', type: 'Noun' },
    
    // Objects & Places
    { ar: 'Ø§Ù„Ù’ÙƒÙŽØ¹Ù’Ø¨ÙŽØ©Ù', trans: 'al-kaÊ¿batu', meaning: 'The Ka\'bah', type: 'Noun' },
    { ar: 'Ø§Ù„ÙØ§Ø³Ù’Ù…Ù', trans: 'al-ismu', meaning: 'The name', type: 'Noun' },
    { ar: 'Ø§Ù„Ø³ÙŽÙ‘ÙŠÙŽÙ‘Ø§Ø±ÙŽØ©Ù', trans: 'as-sayyÄratu', meaning: 'The car', type: 'Noun' },
    { ar: 'Ø§Ù„Ù’Ø­ÙŽÙ‚ÙÙŠØ¨ÙŽØ©Ù', trans: 'al-á¸¥aqÄ«batu', meaning: 'The bag / suitcase', type: 'Noun' },
    { ar: 'Ø§Ù„Ø´ÙŽÙ‘Ø§Ø±ÙØ¹Ù', trans: 'ash-shÄriÊ¿u', meaning: 'The street / road', type: 'Noun' },
    { ar: 'Ø¯ÙŽÙÙ’ØªÙŽØ±ÙŒ', trans: 'daftarun', meaning: 'A notebook', type: 'Noun' },
    
    // Adverbs & Particles
    { ar: 'ØªÙŽØ­Ù’ØªÙŽ', trans: 'taá¸¥ta', meaning: 'Under / Below', type: 'Adverb' },
    { ar: 'Ù‡ÙÙ†ÙŽØ§ÙƒÙŽ', trans: 'hunÄka', meaning: 'There', type: 'Adverb' },
    { ar: 'ÙŠÙŽØ§', trans: 'yÄ', meaning: 'O... (Vocative particle)', type: 'Particle' },
    { ar: 'Ù…ÙØºÙ’Ù„ÙŽÙ‚ÙŒ', trans: 'mughlaqun', meaning: 'Closed', type: 'Adjective' }
  ],
  
  // ============================================================
  // GRAMMAR BLOCKS
  // ============================================================
  grammarBlocks: [
    {
      title: 'The Iá¸Äfa Construction',
      content: '<p>The <strong>Iá¸Äfa</strong> is a way to join two nouns to show possession or relationship (e.g., "The Teacher\'s Book"). It consists of two parts:</p><ul><li><strong>Muá¸Äf</strong> (The Possessed): The first noun. It <u>never</u> takes Ø§Ù„Ù€ and <u>never</u> takes tanwÄ«n.</li><li><strong>Muá¸Äf Ilayhi</strong> (The Possessor): The second noun. It is <u>always</u> in the Genitive case (MajrÅ«r), ending in a kasra (i).</li></ul>',
      rule: 'ÙƒÙØªÙŽØ§Ø¨Ù (Muá¸Äf) + Ø§Ù„Ù’Ù…ÙØ¯ÙŽØ±ÙÙ‘Ø³Ù (Muá¸Äf Ilayhi) = ÙƒÙØªÙŽØ§Ø¨Ù Ø§Ù„Ù’Ù…ÙØ¯ÙŽØ±ÙÙ‘Ø³Ù (The Teacher\'s Book).'
    },
    {
      title: 'Rules of the Muá¸Äf',
      content: '<p>The first word (the thing being owned) has strict rules:</p><ol><li>No <strong>Ø§Ù„Ù€</strong> (al-) prefix.</li><li>No <strong>TanwÄ«n</strong> (un/in/an) ending. It usually ends in a single damma.</li></ol>',
      rule: 'Wrong: Ø§Ù„Ù’ÙƒÙØªÙŽØ§Ø¨Ù Ù…ÙØ­ÙŽÙ…ÙŽÙ‘Ø¯Ù âŒ | Wrong: ÙƒÙØªÙŽØ§Ø¨ÙŒ Ù…ÙØ­ÙŽÙ…ÙŽÙ‘Ø¯Ù âŒ | Correct: ÙƒÙØªÙŽØ§Ø¨Ù Ù…ÙØ­ÙŽÙ…ÙŽÙ‘Ø¯Ù âœ…'
    },
    {
      title: 'Vocative Particle: ÙŠÙŽØ§',
      content: '<p>When you call someone using <strong>ÙŠÙŽØ§</strong> (O...), the noun that follows loses its tanwÄ«n and takes only a single damma.</p>',
      rule: 'Ù…ÙØ­ÙŽÙ…ÙŽÙ‘Ø¯ÙŒ â†’ ÙŠÙŽØ§ Ù…ÙØ­ÙŽÙ…ÙŽÙ‘Ø¯Ù (O Muhammad!) | Ø£ÙØ³Ù’ØªÙŽØ§Ø°ÙŒ â†’ ÙŠÙŽØ§ Ø£ÙØ³Ù’ØªÙŽØ§Ø°Ù (O Teacher!)'
    },
    {
      title: 'Adverbs of Place: ØªÙŽØ­Ù’ØªÙŽ',
      content: '<p>The word <strong>ØªÙŽØ­Ù’ØªÙŽ</strong> (under) acts like a Muá¸Äf. The noun following it will be MajrÅ«r (ending in kasra).</p>',
      rule: 'ØªÙŽØ­Ù’ØªÙŽ Ø§Ù„Ù’Ù…ÙŽÙƒÙ’ØªÙŽØ¨Ù = Under the desk.'
    }
  ],
  
  // ============================================================
  // EXAMPLE SENTENCES
  // ============================================================
  examples: [
    { ar: 'ÙƒÙØªÙŽØ§Ø¨Ù Ù…ÙØ­ÙŽÙ…ÙŽÙ‘Ø¯Ù Ø¹ÙŽÙ„ÙŽÙ‰ Ø§Ù„Ù’Ù…ÙŽÙƒÙ’ØªÙŽØ¨Ù', trans: 'kitÄbu muá¸¥ammadin Ê¿alÄ l-maktabi', meaning: 'Muhammad\'s book is on the desk.' },
    { ar: 'Ø£ÙŽÙŠÙ’Ù†ÙŽ Ø­ÙŽÙ‚ÙÙŠØ¨ÙŽØ©Ù Ø§Ù„Ù’Ù…ÙØ¯ÙŽØ±ÙÙ‘Ø³ÙØŸ', trans: 'ayna á¸¥aqÄ«batu l-mudarrisi?', meaning: 'Where is the teacher\'s bag?' },
    { ar: 'Ù‡ÙÙŠÙŽ ØªÙŽØ­Ù’ØªÙŽ Ø§Ù„Ù’Ù…ÙŽÙƒÙ’ØªÙŽØ¨Ù', trans: 'hiya taá¸¥ta l-maktabi', meaning: 'It is under the desk.' },
    { ar: 'Ø³ÙŽÙŠÙŽÙ‘Ø§Ø±ÙŽØ©Ù Ø§Ù„Ù’Ø¹ÙŽØ¨ÙŽÙ‘Ø§Ø³Ù ÙÙÙŠ Ø§Ù„Ø´ÙŽÙ‘Ø§Ø±ÙØ¹Ù', trans: 'sayyÄratu l-Ê¿abbÄsi fÄ« sh-shÄriÊ¿i', meaning: 'Abbas\'s car is in the street.' },
    { ar: 'Ø§Ø¨Ù’Ù†Ù Ù…ÙŽÙ†Ù’ Ø£ÙŽÙ†Ù’ØªÙŽØŸ Ø£ÙŽÙ†ÙŽØ§ Ø§Ø¨Ù’Ù†Ù Ø®ÙŽØ§Ù„ÙØ¯Ù', trans: 'ibnu man anta? ana bnu khÄlidin', meaning: 'Whose son are you? I am the son of Khalid.' },
    { ar: 'ÙŠÙŽØ§ Ø¨ÙÙ„ÙŽØ§Ù„ÙØŒ Ø£ÙŽÙ‡ÙŽØ°ÙŽØ§ ÙƒÙØªÙŽØ§Ø¨Ù Ø­ÙŽØ§Ù…ÙØ¯ÙØŸ', trans: 'yÄ bilÄlu, a-hÄdhÄ kitÄbu á¸¥Ämidin?', meaning: 'O Bilal, is this Hamid\'s book?' },
    { ar: 'Ø§Ø³Ù’Ù…Ù Ø§Ù„Ù’ÙˆÙŽÙ„ÙŽØ¯Ù Ø³ÙŽØ¹ÙÙŠØ¯ÙŒ ÙˆÙŽØ§Ø³Ù’Ù…Ù Ø§Ù„Ù’Ø¨ÙÙ†Ù’ØªÙ Ø¢Ù…ÙÙ†ÙŽØ©Ù', trans: 'ismu l-waladi saÊ¿Ä«dun wa-smu l-binti Äminatu', meaning: 'The boy\'s name is Saed and the girl\'s name is Aminah.' },
    { ar: 'Ø¨ÙŽÙŠÙ’ØªÙ Ø§Ù„Ø·ÙŽÙ‘Ø¨ÙÙŠØ¨Ù Ø¨ÙŽØ¹ÙÙŠØ¯ÙŒ', trans: 'baytu á¹­-á¹­abÄ«bi baÊ¿Ä«dun', meaning: 'The doctor\'s house is far.' }
  ],
  
  // ============================================================
  // READING COMPREHENSION
  // ============================================================
  comprehension: {
    title: 'A Visit to the Teacher',
    arabic: 'Ù‡ÙŽØ°ÙŽØ§ Ø¨ÙŽÙŠÙ’ØªÙ Ø§Ù„Ù’Ù…ÙØ¯ÙŽØ±ÙÙ‘Ø³Ù. Ø¨ÙŽÙŠÙ’ØªÙ Ø§Ù„Ù’Ù…ÙØ¯ÙŽØ±ÙÙ‘Ø³Ù ÙƒÙŽØ¨ÙÙŠØ±ÙŒ ÙˆÙŽØ¬ÙŽÙ…ÙÙŠÙ„ÙŒ. Ø³ÙŽÙŠÙŽÙ‘Ø§Ø±ÙŽØ©Ù Ø§Ù„Ù’Ù…ÙØ¯ÙŽØ±ÙÙ‘Ø³Ù Ø£ÙŽÙ…ÙŽØ§Ù…ÙŽ Ø§Ù„Ù’Ø¨ÙŽÙŠÙ’ØªÙ. Ø­ÙŽÙ‚ÙÙŠØ¨ÙŽØ©Ù Ø§Ù„Ù’Ù…ÙØ¯ÙŽØ±ÙÙ‘Ø³Ù ØªÙŽØ­Ù’ØªÙŽ Ø§Ù„Ù’Ù…ÙŽÙƒÙ’ØªÙŽØ¨Ù. Ø§Ø¨Ù’Ù†Ù Ø§Ù„Ù’Ù…ÙØ¯ÙŽØ±ÙÙ‘Ø³Ù ÙÙÙŠ Ø§Ù„Ø´ÙŽÙ‘Ø§Ø±ÙØ¹Ù. Ù‡ÙÙˆÙŽ Ø·ÙŽØ§Ù„ÙØ¨ÙŒ Ø¬ÙŽØ¯ÙÙŠØ¯ÙŒ ÙÙÙŠ Ø§Ù„Ù’Ø¬ÙŽØ§Ù…ÙØ¹ÙŽØ©Ù.',
    english: 'This is the teacher\'s house. The teacher\'s house is big and beautiful. The teacher\'s car is in front of the house. The teacher\'s bag is under the desk. The teacher\'s son is in the street. He is a new student in the university.',
    questions: [
      {
        text: 'Where is the teacher\'s car?',
        options: ['In the street', 'In front of the house', 'Under the desk', 'In the university'],
        correct: 'In front of the house'
      },
      {
        text: 'How is the teacher\'s house described?',
        options: ['Small and old', 'Big and beautiful', 'New and clean', 'Near the mosque'],
        correct: 'Big and beautiful'
      },
      {
        text: 'Where is the teacher\'s son?',
        options: ['In the room', 'In the kitchen', 'In the street', 'In the car'],
        correct: 'In the street'
      },
      {
        text: 'What is the teacher\'s son?',
        options: ['An engineer', 'A doctor', 'A new student', 'A merchant'],
        correct: 'A new student'
      }
    ]
  },
  
  // ============================================================
  // PRACTICE QUESTIONS
  // ============================================================
  practiceQuestions: [
    { arabic: 'ÙƒÙØªÙŽØ§Ø¨Ù Ø§Ù„Ù„Ù‡Ù', correct: 'The Book of Allah', options: ['The Book of Allah', 'A book and Allah', 'Allah is a book', 'The house of Allah'] },
    { arabic: 'ØªÙŽØ­Ù’ØªÙŽ Ø§Ù„Ø³ÙŽÙ‘ÙŠÙŽÙ‘Ø§Ø±ÙŽØ©Ù', correct: 'Under the car', options: ['In the car', 'On the car', 'Under the car', 'Behind the car'] },
    { text: 'Which is the correct way to say "Hamid\'s pen"?', correct: 'Ù‚ÙŽÙ„ÙŽÙ…Ù Ø­ÙŽØ§Ù…ÙØ¯Ù', options: ['Ø§Ù„Ù’Ù‚ÙŽÙ„ÙŽÙ…Ù Ø­ÙŽØ§Ù…ÙØ¯ÙŒ', 'Ù‚ÙŽÙ„ÙŽÙ…ÙŒ Ø­ÙŽØ§Ù…ÙØ¯Ù', 'Ù‚ÙŽÙ„ÙŽÙ…Ù Ø­ÙŽØ§Ù…ÙØ¯Ù', 'Ù‚ÙŽÙ„ÙŽÙ…Ù Ø­ÙŽØ§Ù…ÙØ¯ÙŒ'] },
    { text: 'What happens to the word Ù…ÙØ­ÙŽÙ…ÙŽÙ‘Ø¯ÙŒ after "ÙŠÙŽØ§"?', correct: 'It becomes ÙŠÙŽØ§ Ù…ÙØ­ÙŽÙ…ÙŽÙ‘Ø¯Ù (single damma)', options: ['It stays Ù…ÙØ­ÙŽÙ…ÙŽÙ‘Ø¯ÙŒ', 'It becomes ÙŠÙŽØ§ Ù…ÙØ­ÙŽÙ…ÙŽÙ‘Ø¯Ù (single damma)', 'It becomes ÙŠÙŽØ§ Ù…ÙØ­ÙŽÙ…ÙŽÙ‘Ø¯Ù (kasra)', 'It becomes ÙŠÙŽØ§ Ù…ÙØ­ÙŽÙ…ÙŽÙ‘Ø¯ÙŽ (fatha)'] },
    { text: 'In "ÙƒÙØªÙŽØ§Ø¨Ù Ø§Ù„Ù’Ù…ÙØ¯ÙŽØ±ÙÙ‘Ø³Ù", which word is the Muá¸Äf Ilayhi?', correct: 'Ø§Ù„Ù’Ù…ÙØ¯ÙŽØ±ÙÙ‘Ø³Ù', options: ['ÙƒÙØªÙŽØ§Ø¨Ù', 'Ø§Ù„Ù’Ù…ÙØ¯ÙŽØ±ÙÙ‘Ø³Ù'] },
    { text: 'Translate: "Whose son is this?"', correct: 'Ø§Ø¨Ù’Ù†Ù Ù…ÙŽÙ†Ù’ Ù‡ÙŽØ°ÙŽØ§ØŸ', options: ['Ø§Ø¨Ù’Ù†Ù Ù…ÙŽÙ†Ù’ Ù‡ÙŽØ°ÙŽØ§ØŸ', 'Ù…ÙŽÙ†Ù’ Ù‡ÙŽØ°ÙŽØ§ Ø§Ù„ÙØ§Ø¨Ù’Ù†ÙØŸ', 'Ø£ÙŽÙŠÙ’Ù†ÙŽ Ø§Ù„ÙØ§Ø¨Ù’Ù†ÙØŸ', 'Ù…ÙŽØ§ Ø§Ø³Ù’Ù…Ù Ø§Ù„ÙØ§Ø¨Ù’Ù†ÙØŸ'] }
  ],
  
  // ============================================================
  // QUIZ QUESTIONS
  // ============================================================
  quizQuestions: {
    multipleChoice: [
      { prompt: 'What are the two rules for the Muá¸Äf (the possessed noun)?', options: ['Takes Ø§Ù„Ù€ and tanwÄ«n', 'No Ø§Ù„Ù€ and no tanwÄ«n', 'Only takes Ø§Ù„Ù€', 'Only takes tanwÄ«n'], correct: 1 },
      { prompt: 'Translate: "The Teacher\'s Desk"', options: ['Ù…ÙŽÙƒÙ’ØªÙŽØ¨Ù Ø§Ù„Ù’Ù…ÙØ¯ÙŽØ±ÙÙ‘Ø³Ù', 'Ù…ÙŽÙƒÙ’ØªÙŽØ¨ÙŒ Ø§Ù„Ù’Ù…ÙØ¯ÙŽØ±ÙÙ‘Ø³Ù', 'Ø§Ù„Ù’Ù…ÙŽÙƒÙ’ØªÙŽØ¨Ù Ø§Ù„Ù’Ù…ÙØ¯ÙŽØ±ÙÙ‘Ø³Ù', 'Ù…ÙŽÙƒÙ’ØªÙŽØ¨Ù Ø§Ù„Ù’Ù…ÙØ¯ÙŽØ±ÙÙ‘Ø³Ù'], correct: 0 },
      { prompt: 'What is the case of the Muá¸Äf Ilayhi (the possessor)?', options: ['Nominative (Damma)', 'Accusative (Fatha)', 'Genitive (Kasra)', 'It doesn\'t change'], correct: 2 },
      { prompt: 'Translate: "O Bilal!"', options: ['ÙŠÙŽØ§ Ø¨ÙÙ„ÙŽØ§Ù„ÙŒ', 'ÙŠÙŽØ§ Ø¨ÙÙ„ÙŽØ§Ù„Ù', 'ÙŠÙŽØ§ Ø¨ÙÙ„ÙŽØ§Ù„Ù', 'ÙŠÙŽØ§ Ø¨ÙÙ„ÙŽØ§Ù„Ø§Ù‹'], correct: 2 },
      { prompt: 'Which word means "Paternal Uncle"?', options: ['Ø§Ù„Ù’Ø®ÙŽØ§Ù„Ù', 'Ø§Ù„Ù’Ø¹ÙŽÙ…ÙÙ‘', 'Ø§Ù„ÙØ§Ø¨Ù’Ù†Ù', 'Ø§Ù„Ù’Ù…ÙÙ‡ÙŽÙ†Ù’Ø¯ÙØ³Ù'], correct: 1 },
      { prompt: 'Translate: "The doctor\'s car is beautiful."', options: ['Ø³ÙŽÙŠÙŽÙ‘Ø§Ø±ÙŽØ©Ù Ø§Ù„Ø·ÙŽÙ‘Ø¨ÙÙŠØ¨Ù Ø¬ÙŽÙ…ÙÙŠÙ„ÙŽØ©ÙŒ', 'Ø³ÙŽÙŠÙŽÙ‘Ø§Ø±ÙŽØ©Ù Ø§Ù„Ø·ÙŽÙ‘Ø¨ÙÙŠØ¨Ù Ø¬ÙŽÙ…ÙÙŠÙ„ÙŒ', 'Ø§Ù„Ø·ÙŽÙ‘Ø¨ÙÙŠØ¨Ù Ø³ÙŽÙŠÙŽÙ‘Ø§Ø±ÙŽØ©ÙŒ Ø¬ÙŽÙ…ÙÙŠÙ„ÙŽØ©ÙŒ', 'Ø³ÙŽÙŠÙŽÙ‘Ø§Ø±ÙŽØ©ÙŒ Ø§Ù„Ø·ÙŽÙ‘Ø¨ÙÙŠØ¨Ù Ø¬ÙŽÙ…ÙÙŠÙ„ÙŽØ©ÙŒ'], correct: 0 },
      { prompt: 'What does ØªÙŽØ­Ù’ØªÙŽ mean?', options: ['Above', 'In front of', 'Behind', 'Under'], correct: 3 },
      { prompt: 'Translate: "The Messenger of Allah"', options: ['Ø±ÙŽØ³ÙÙˆÙ„Ù Ø§Ù„Ù„Ù‡Ù', 'Ø§Ù„Ø±ÙŽÙ‘Ø³ÙÙˆÙ„Ù Ø§Ù„Ù„Ù‡Ù', 'Ø±ÙŽØ³ÙÙˆÙ„ÙŒ Ø§Ù„Ù„Ù‡Ù', 'Ø±ÙŽØ³ÙÙˆÙ„Ù Ø§Ù„Ù„Ù‡Ù'], correct: 0 },
      { prompt: 'Whose bag is this? (Asking about a feminine object: Ø­ÙŽÙ‚ÙÙŠØ¨ÙŽØ©)', options: ['Ø­ÙŽÙ‚ÙÙŠØ¨ÙŽØ©Ù Ù…ÙŽÙ†Ù’ Ù‡ÙŽØ°ÙŽØ§ØŸ', 'Ø­ÙŽÙ‚ÙÙŠØ¨ÙŽØ©Ù Ù…ÙŽÙ†Ù’ Ù‡ÙŽØ°ÙÙ‡ÙØŸ', 'Ø£ÙŽÙŠÙ’Ù†ÙŽ Ø§Ù„Ù’Ø­ÙŽÙ‚ÙÙŠØ¨ÙŽØ©ÙØŸ', 'Ù…ÙŽØ§ Ù‡ÙŽØ°ÙÙ‡Ù Ø§Ù„Ù’Ø­ÙŽÙ‚ÙÙŠØ¨ÙŽØ©ÙØŸ'], correct: 1 },
      { prompt: 'What is the correct ending for "Ø®ÙŽØ§Ù„ÙØ¯" in "Ø¨ÙŽÙŠÙ’ØªÙ Ø®ÙŽØ§Ù„ÙØ¯..."?', options: ['Ø®ÙŽØ§Ù„ÙØ¯ÙŒ', 'Ø®ÙŽØ§Ù„ÙØ¯Ù', 'Ø®ÙŽØ§Ù„ÙØ¯Ù', 'Ø®ÙŽØ§Ù„ÙØ¯ÙŽ'], correct: 2 }
    ],
    typing: [
      { prompt: 'Type in Arabic: "The Book of Allah"', ideal: 'ÙƒÙØªÙŽØ§Ø¨Ù Ø§Ù„Ù„Ù‡Ù', accepts: ['ÙƒØªØ§Ø¨ Ø§Ù„Ù„Ù‡', 'ÙƒÙØªÙŽØ§Ø¨Ù Ø§Ù„Ù„Ù‡Ù', 'ÙƒØªØ§Ø¨Ù Ø§Ù„Ù„Ù‡Ù', 'ÙƒÙØªÙŽØ§Ø¨Ù Ø§Ù„Ù„Ù‡'] },
      { prompt: 'Type in Arabic: "The Teacher\'s Pen"', ideal: 'Ù‚ÙŽÙ„ÙŽÙ…Ù Ø§Ù„Ù’Ù…ÙØ¯ÙŽØ±ÙÙ‘Ø³Ù', accepts: ['Ù‚Ù„Ù… Ø§Ù„Ù…Ø¯Ø±Ø³', 'Ù‚ÙŽÙ„ÙŽÙ…Ù Ø§Ù„Ù’Ù…ÙØ¯ÙŽØ±ÙÙ‘Ø³Ù', 'Ù‚Ù„Ù…Ù Ø§Ù„Ù…Ø¯Ø±Ø³Ù', 'Ù‚ÙŽÙ„ÙŽÙ…Ù Ø§Ù„Ù…Ø¯Ø±Ø³'] }
    ]
  }
};

