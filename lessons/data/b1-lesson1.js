/* ============================================================
   b1-lesson1.js — Lesson 1 Data
   ============================================================ */

const LESSON_DATA = {
  book: 'book1',
  lessonNum: 1,
  titleArabic: 'هَذَا',
  titleEnglish: 'This is… (Masculine)',
  summary: 'Learn how to point at things and name them using هَذَا. This lesson teaches the fundamental pattern: "This is a [noun]" — the foundation of Arabic sentence structure. Master these 40 essential words and you will be able to form hundreds of sentences.',
  nextLesson: 'b1-lesson2.html',
  passMark: 5,
  totalQuestions: 8,
  
  // ============================================================
  // VOCABULARY
  // ============================================================
  // Lesson 1 focuses on: هَذَا + masculine noun pattern
  // Core vocabulary only - prepositions, adjectives, and verbs
  // are introduced in later lessons (Lesson 4 for prepositions,
  // Lessons 6-9 for adjectives, Lesson 10+ for verbs)
  vocab: [
    // Core demonstrative (the main focus of this lesson)
    { ar: 'هَذَا', trans: 'hādhā', meaning: 'This (masc.)', type: 'Demonstrative' },
    { ar: 'هٰذَا', trans: 'hādhā', meaning: 'This (masc., Quranic)', type: 'Demonstrative' },
    
    // Question words (essential for practice)
    { ar: 'مَا', trans: 'mā', meaning: 'What?', type: 'Interrogative' },
    { ar: 'مَنْ', trans: 'man', meaning: 'Who?', type: 'Interrogative' },
    { ar: 'أَ', trans: 'a', meaning: 'Question prefix (is/are?)', type: 'Particle' },
    { ar: 'هَلْ', trans: 'hal', meaning: 'Question particle', type: 'Particle' },
    
    // Basic responses
    { ar: 'نَعَمْ', trans: 'naʿam', meaning: 'Yes', type: 'Particle' },
    { ar: 'لا', trans: 'lā', meaning: 'No', type: 'Particle' },
    
    // Core masculine nouns (the building blocks for sentences with هَذَا)
    { ar: 'بَيْتٌ', trans: 'baytun', meaning: 'A house', type: 'Noun' },
    { ar: 'كِتَابٌ', trans: 'kitābun', meaning: 'A book', type: 'Noun' },
    { ar: 'قَلَمٌ', trans: 'qalamun', meaning: 'A pen', type: 'Noun' },
    { ar: 'مِفْتَاحٌ', trans: 'miftāḥun', meaning: 'A key', type: 'Noun' },
    { ar: 'بَابٌ', trans: 'bābun', meaning: 'A door', type: 'Noun' },
    { ar: 'مَكْتَبٌ', trans: 'maktabun', meaning: 'A desk / office', type: 'Noun' },
    { ar: 'مَسْجِدٌ', trans: 'masjidun', meaning: 'A mosque', type: 'Noun' },
    { ar: 'كُرْسِيٌّ', trans: 'kursiyyun', meaning: 'A chair', type: 'Noun' },
    { ar: 'سَرِيرٌ', trans: 'sarīrun', meaning: 'A bed', type: 'Noun' },
    { ar: 'طَالِبٌ', trans: 'ṭālibun', meaning: 'A student (masc.)', type: 'Noun' },
    { ar: 'مُدَرِّسٌ', trans: 'mudarrisun', meaning: 'A teacher (masc.)', type: 'Noun' },
    { ar: 'رَجُلٌ', trans: 'rajulun', meaning: 'A man', type: 'Noun' },
    { ar: 'وَلَدٌ', trans: 'waladun', meaning: 'A boy', type: 'Noun' },
    { ar: 'تَاجِرٌ', trans: 'tājirun', meaning: 'A merchant', type: 'Noun' },
    { ar: 'قَمِيصٌ', trans: 'qamīṣun', meaning: 'A shirt', type: 'Noun' },
    
    // Animals (common examples)
    { ar: 'كَلْبٌ', trans: 'kalbun', meaning: 'A dog', type: 'Noun' },
    { ar: 'قِطٌّ', trans: 'qiṭṭun', meaning: 'A cat', type: 'Noun' },
    { ar: 'حِمَارٌ', trans: 'ḥimārun', meaning: 'A donkey', type: 'Noun' },
    { ar: 'فَرَسٌ', trans: 'farasun', meaning: 'A horse', type: 'Noun' },
    { ar: 'جَمَلٌ', trans: 'jamalun', meaning: 'A camel', type: 'Noun' },
    { ar: 'بَقَرَةٌ', trans: 'baqaratun', meaning: 'A cow', type: 'Noun' },
    { ar: 'غَنَمٌ', trans: 'ghanamun', meaning: 'Sheep / goat', type: 'Noun' },
    
    // Common names (for "Who is this?" practice)
    { ar: 'مُحَمَّدٌ', trans: 'Muḥammadun', meaning: 'Muhammad', type: 'Name' },
    { ar: 'أَحْمَدُ', trans: 'Aḥmadu', meaning: 'Ahmed', type: 'Name' },
    { ar: 'عَلِيٌّ', trans: 'ʿAliyyun', meaning: 'Ali', type: 'Name' },
    { ar: 'حَمْزَةُ', trans: 'Ḥamzatu', meaning: 'Hamzah', type: 'Name' },
    { ar: 'بِلَالٌ', trans: 'Bilālun', meaning: 'Bilal', type: 'Name' }
  ],
  
  // ============================================================
  // GRAMMAR BLOCKS
  // ============================================================
  grammarBlocks: [
    {
      title: 'What is هَذَا?',
      content: '<p>هَذَا (hādhā) means <strong>"this"</strong> in English. It is called a <strong>demonstrative pronoun</strong> — a word you use to point at something near you.</p><p>In Arabic, هَذَا is used exclusively with <strong>masculine nouns</strong>. The feminine version is هَذِهِ (hādhihi). For distant objects, you use ذٰلِكَ (dhālika) for masculine and تِلْكَ (tilka) for feminine.</p>',
      rule: 'هَذَا is always used for masculine nouns that are near. It never changes its form.'
    },
    {
      title: 'Arabic has no word for "is"',
      content: '<p>In English we say: <em>"This <u>is</u> a house."</em></p><p>In Arabic, there is no word for "is". You simply place هَذَا next to the noun:</p>',
      rule: 'هَذَا + noun = "This is a [noun]"'
    },
    {
      title: 'The -un sound (Tanwīn)',
      content: '<p>You will notice all the nouns end in the sound <strong>-un</strong> (written as ٌ — two small damma marks). This is called <strong>tanwīn</strong> and it means the noun is indefinite — like "a house" rather than "the house". You will learn about definite nouns (the house) in Lesson 3.</p>',
      rule: 'Noun + ٌ (tanwīn) = indefinite noun → "a [noun]"'
    },
    {
      title: 'Asking questions',
      content: '<p>To ask a question in Arabic, you can use the prefix <strong>أَ</strong> (a) at the beginning of a sentence, or the particle <strong>هَلْ</strong> (hal). Both turn a statement into a yes/no question.</p><p>For open-ended questions, use <strong>مَا</strong> (mā) meaning "what?" or <strong>مَنْ</strong> (man) meaning "who?"</p>',
      rule: 'أَهَذَا بَيْتٌ؟ = "Is this a house?"<br>هَلْ هَذَا كِتَابٌ؟ = "Is this a book?"<br>مَا هَذَا؟ = "What is this?"<br>مَنْ هَذَا؟ = "Who is this?"<br>نَعَمْ = "Yes" · لا = "No"'
    }
  ],
  
  // ============================================================
  // EXAMPLE SENTENCES
  // ============================================================
  examples: [
    { ar: 'هَذَا بَيْتٌ', trans: 'hādhā baytun', meaning: 'This is a house.' },
    { ar: 'هَذَا كِتَابٌ', trans: 'hādhā kitābun', meaning: 'This is a book.' },
    { ar: 'هَذَا قَلَمٌ', trans: 'hādhā qalamun', meaning: 'This is a pen.' },
    { ar: 'هَذَا مَسْجِدٌ', trans: 'hādhā masjidun', meaning: 'This is a mosque.' },
    { ar: 'هَذَا بَابٌ', trans: 'hādhā bābun', meaning: 'This is a door.' },
    { ar: 'هَذَا طَالِبٌ', trans: 'hādhā ṭālibun', meaning: 'This is a student.' },
    { ar: 'هَذَا وَلَدٌ', trans: 'hādhā waladun', meaning: 'This is a boy.' },
    { ar: 'مَا هَذَا؟', trans: 'mā hādhā?', meaning: 'What is this?' },
    { ar: 'مَنْ هَذَا؟', trans: 'man hādhā?', meaning: 'Who is this?' },
    { ar: 'أَهَذَا كِتَابٌ؟', trans: 'a-hādhā kitābun?', meaning: 'Is this a book?' }
  ],
  
  // ============================================================
  // PRACTICE QUESTIONS
  // ============================================================
  practiceQuestions: [
    { arabic: 'هَذَا كِتَابٌ', correct: 'This is a book.', options: ['This is a pen.', 'This is a book.', 'This is a house.', 'This is a door.'] },
    { arabic: 'هَذَا مَسْجِدٌ', correct: 'This is a mosque.', options: ['This is a chair.', 'This is a book.', 'This is a mosque.', 'This is a bed.'] },
    { text: 'Which word means "a pen"?', correct: 'قَلَمٌ', options: ['كِتَابٌ', 'بَيْتٌ', 'قَلَمٌ', 'بَابٌ'] },
    { text: 'What does مَا mean?', correct: 'What?', options: ['Who?', 'What?', 'Where?', 'Yes'] },
    { text: 'In Arabic, you need a word for "is" to form a sentence like "This is a house."', correct: 'False — Arabic has no word for "is"', options: ['True', 'False — Arabic has no word for "is"'] },
    { text: 'How do you say "Yes" in Arabic?', correct: 'نَعَمْ', options: ['نَعَمْ', 'لا', 'مَا', 'مَنْ'] }
  ],
  
  // ============================================================
  // QUIZ QUESTIONS
  // ============================================================
  quizQuestions: {
    multipleChoice: [
      { prompt: 'What does هَذَا mean?', options: ['That (masc.)', 'This (masc.)', 'This (fem.)', 'The'], correct: 1 },
      { prompt: 'Translate into English:', arabic: 'هَذَا بَابٌ', options: ['This is a book.', 'That is a door.', 'This is a door.', 'This is a pen.'], correct: 2 },
      { prompt: 'What does مَا mean?', options: ['Who?', 'What?', 'Where?', 'Yes'], correct: 1 },
      { prompt: 'Which of these is the correct Arabic for "a mosque"?', options: ['بَيْتٌ', 'كُرْسِيٌّ', 'مَسْجِدٌ', 'سَرِيرٌ'], correct: 2 },
      { prompt: 'How do you say "Yes" in Arabic?', options: ['لا', 'نَعَمْ', 'مَنْ', 'هَذَا'], correct: 1 },
      { prompt: 'هَذَا can be used with which type of noun?', options: ['Feminine nouns only', 'Masculine nouns only', 'Both masculine and feminine', 'Only definite nouns'], correct: 1 }
    ],
    typing: [
      { prompt: 'Type in Arabic: "This is a house."', ideal: 'هَذَا بَيْتٌ', accepts: ['هذا بيت', 'هَذَا بَيْتٌ', 'هذا بيتٌ', 'هَذَا بيت'] },
      { prompt: 'Type in Arabic: "This is a pen."', ideal: 'هَذَا قَلَمٌ', accepts: ['هذا قلم', 'هَذَا قَلَمٌ', 'هذا قلمٌ', 'هَذَا قلم'] }
    ]
  }
};