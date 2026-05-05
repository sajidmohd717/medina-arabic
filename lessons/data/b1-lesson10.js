/* ============================================================
   b1-lesson10.js — Lesson 10 Data
   ============================================================ */

const LESSON_DATA = {
  book: 'book1',
  lessonNum: 10,
  titleArabic: 'الضَّمَائِرُ الْمُتَّصِلَةُ',
  titleEnglish: 'Attached Pronouns',
  summary: 'In this lesson, you will learn how to show possession and relationships using attached pronouns (suffixes). You will also learn the difference between "having" an object and "having" a relative, and introduce the word مَعَ (with).',
  nextLesson: 'b1-lesson11.html',
  passMark: 8,
  totalQuestions: 12,
  
  // ============================================================
  // VOCABULARY
  // ============================================================
  vocab: [
    // Pronoun suffixes
    { ar: 'ـِي', trans: '-ī', meaning: 'My / Mine', type: 'Pronoun suffix' },
    { ar: 'ـكَ', trans: '-ka', meaning: 'Your / Yours (masc.)', type: 'Pronoun suffix' },
    { ar: 'ـكِ', trans: '-ki', meaning: 'Your / Yours (fem.)', type: 'Pronoun suffix' },
    { ar: 'ـهُ', trans: '-hu', meaning: 'His / Its (masc.)', type: 'Pronoun suffix' },
    { ar: 'ـهَا', trans: '-hā', meaning: 'Her / Its (fem.)', type: 'Pronoun suffix' },
    
    // Family & People
    { ar: 'أَبٌ', trans: 'abun', meaning: 'Father', type: 'Noun' },
    { ar: 'أَخٌ', trans: 'akhun', meaning: 'Brother', type: 'Noun' },
    { ar: 'زَمِيلٌ', trans: 'zamīlun', meaning: 'Colleague / Classmate', type: 'Noun' },
    { ar: 'زَوْجٌ', trans: 'zawjun', meaning: 'Husband', type: 'Noun' },
    { ar: 'طِفْلٌ', trans: 'ṭiflun', meaning: 'Child / Infant', type: 'Noun' },
    { ar: 'فَتًى', trans: 'fatan', meaning: 'Young man', type: 'Noun' },
    
    // Prepositions & Particles
    { ar: 'عِنْدَ', trans: 'ʿinda', meaning: 'With / At / Has (possession)', type: 'Preposition/Adverb' },
    { ar: 'مَعَ', trans: 'maʿa', meaning: 'With (physical company)', type: 'Preposition' },
    { ar: 'لِي', trans: 'lī', meaning: 'I have (for relatives)', type: 'Phrase' },
    { ar: 'أُحِبُّ', trans: 'uḥibbu', meaning: 'I love / I like', type: 'Verb' },
    
    // Places
    { ar: 'الْكُوَيْتُ', trans: 'al-kuwaytu', meaning: 'Kuwait', type: 'Noun' }
  ],
  
  // ============================================================
  // GRAMMAR BLOCKS
  // ============================================================
  grammarBlocks: [
    {
      title: 'Attached Pronouns (Possessive)',
      content: '<p>Instead of using separate words for "my" or "your", Arabic attaches short suffixes to the end of nouns.</p><ul><li><strong>كِتَابٌ</strong> (Book) + <strong>ـِي</strong> = <strong>كِتَابِي</strong> (My book)</li><li><strong>كِتَابٌ</strong> + <strong>ـكَ</strong> = <strong>كِتَابُكَ</strong> (Your book - masc.)</li><li><strong>كِتَابٌ</strong> + <strong>ـهُ</strong> = <strong>كِتَابُهُ</strong> (His book)</li></ul>',
      rule: 'Noun + Suffix = Possession. Note: The tanwīn is removed when a suffix is attached.'
    },
    {
      title: 'Expressing "To Have"',
      content: '<p>Arabic uses different words for "have" depending on what you possess:</p><ul><li><strong>عِنْدِي</strong> (ʿindī): For objects (e.g., "I have a pen").</li><li><strong>لِي</strong> (lī): For people/relatives (e.g., "I have a brother").</li></ul>',
      rule: 'Use عِنْدَ for things, and لِـ for people.'
    },
    {
      title: 'مَعَ vs. عِنْدَ',
      content: '<p>Both can be translated as "with", but they are used differently:</p><ul><li><strong>عِنْدِي</strong> means you "own" it or it is "at" your place.</li><li><strong>مَعِي</strong> means it is physically "with" you right now.</li></ul>',
      rule: 'مَعِي means "in my company" or "in my pocket/hand".'
    }
  ],
  
  // ============================================================
  // EXAMPLE SENTENCES
  // ============================================================
  examples: [
    { ar: 'مَا اسْمُكَ؟ اسْمِي مُحَمَّدٌ', trans: 'mā smuka? ismī muḥammadun', meaning: 'What is your name? My name is Muhammad.' },
    { ar: 'أَيْنَ أَبُوكَ؟ أَبِي فِي الْكُوَيْتِ', trans: 'ayna abūka? abī fī l-kuwayti', meaning: 'Where is your father? My father is in Kuwait.' },
    { ar: 'لِي أَخٌ وَاحِدٌ', trans: 'lī akhun wāḥidun', meaning: 'I have one brother.' },
    { ar: 'عِنْدِي سَيَّارَةٌ جَمِيلَةٌ', trans: 'ʿindī sayyāratun jamīlatun', meaning: 'I have a beautiful car.' },
    { ar: 'مَنْ مَعَكَ؟ مَعِي زَمِيلِي', trans: 'man maʿaka? maʿī zamīlī', meaning: 'Who is with you? With me is my colleague.' },
    { ar: 'أَحَقِيبَتُكَ هَذِهِ؟ لا، هِيَ حَقِيبَةُ زَمِيلِي', trans: 'a-ḥaqībatuka hādhidi? lā, hiya ḥaqībatu zamīlī', meaning: 'Is this your bag? No, it is my colleague\'s bag.' },
    { ar: 'أُحِبُّ أَبِي وَأُمِّي', trans: 'uḥibbu abī wa-ummī', meaning: 'I love my father and my mother.' },
    { ar: 'زَوْجُهَا فِي الْمُسْتَشْفَى', trans: 'zawjuhā fī l-mustashfā', meaning: 'Her husband is in the hospital.' }
  ],
  
  // ============================================================
  // READING COMPREHENSION
  // ============================================================
  comprehension: {
    title: 'My New Colleague',
    arabic: 'هَذَا زَمِيلِي. اسْمُهُ خَالِدٌ. هُوَ مِنَ الْكُوَيْتِ. خَالِدٌ طَالِبٌ جَدِيدٌ فِي مَدْرَسَتِي. عِنْدَهُ قَلَمٌ جَمِيلٌ وَكِتَابٌ قَدِيمٌ. مَعَهُ حَقِيبَتُهُ السَّوْدَاءُ. لَهُ أَخٌ وَاحِدٌ وَأُخْتٌ وَاحِدَةٌ. أَبُوهُ مُهَنْدِسٌ شَهِيرٌ وَأُمُّهُ طَبِيبَةٌ. أَنَا أُحِبُّ زَمِيلِي خَالِدًا.',
    english: 'This is my colleague. His name is Khalid. He is from Kuwait. Khalid is a new student in my school. He has a beautiful pen and an old book. With him is his black bag. He has one brother and one sister. His father is a famous engineer and his mother is a doctor. I love my colleague Khalid.',
    questions: [
      {
        text: 'Where is Khalid from?',
        options: ['India', 'Japan', 'Kuwait', 'Egypt'],
        correct: 'Kuwait'
      },
      {
        text: 'What does Khalid have (عِنْدَهُ)?',
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
    { arabic: 'كِتَابِي', correct: 'My book', options: ['Your book', 'My book', 'His book', 'Her book'] },
    { arabic: 'عِنْدِي قَلَمٌ', correct: 'I have a pen', options: ['I have a brother', 'I have a pen', 'With me is a pen', 'This is a pen'] },
    { text: 'Which suffix means "His"?', correct: 'ـهُ', options: ['ـكَ', 'ـكِ', 'ـهُ', 'ـهَا'] },
    { text: 'How do you say "I have a brother"?', correct: 'لِي أَخٌ', options: ['عِنْدِي أَخٌ', 'لِي أَخٌ', 'مَعِي أَخٌ', 'أَنَا أَخٌ'] },
    { text: 'What is the feminine form of "Your name"?', correct: 'اسْمُكِ', options: ['اسْمُكَ', 'اسْمُكِ', 'اسْمُهُ', 'اسْمِي'] },
    { text: 'Translate: "With me is my colleague."', correct: 'مَعِي زَمِيلِي', options: ['عِنْدِي زَمِيلِي', 'مَعِي زَمِيلِي', 'لِي زَمِيلِي', 'أَنَا زَمِيلِي'] }
  ],
  
  // ============================================================
  // QUIZ QUESTIONS
  // ============================================================
  quizQuestions: {
    multipleChoice: [
      { prompt: 'Translate: "His house"', options: ['بَيْتُكَ', 'بَيْتُهَا', 'بَيْتُهُ', 'بَيْتِي'], correct: 2 },
      { prompt: 'Translate: "Your (fem.) pen"', options: ['قَلَمُكَ', 'قَلَمُكِ', 'قَلَمُهُ', 'قَلَمِي'], correct: 1 },
      { prompt: 'Which word is used for "having" a relative?', options: ['عِنْدَ', 'مَعَ', 'لِـ', 'فِي'], correct: 2 },
      { prompt: 'Translate: "My father is in the mosque."', options: ['أَبُوهُ فِي الْمَسْجِدِ', 'أَبِي فِي الْمَسْجِدِ', 'أَبُوكَ فِي الْمَسْجِدِ', 'أَبِي فِي الْبَيْتِ'], correct: 1 },
      { prompt: 'What does زَمِيلِي mean?', options: ['My friend', 'My brother', 'My colleague', 'My teacher'], correct: 2 },
      { prompt: 'Translate: "What is your (masc.) name?"', options: ['مَا اسْمُكِ؟', 'مَا اسْمُكَ؟', 'مَا اسْمُهُ؟', 'مَا اسْمِي؟'], correct: 1 },
      { prompt: 'Translate: "I have a car."', options: ['لِي سَيَّارَةٌ', 'عِنْدِي سَيَّارَةٌ', 'مَعِي سَيَّارَةٌ', 'أَنَا سَيَّارَةٌ'], correct: 1 },
      { prompt: 'Which suffix means "Her"?', options: ['ـهُ', 'ـهَا', 'ـكَ', 'ـكِ'], correct: 1 },
      { prompt: 'Translate: "Who is with you (masc.)?"', options: ['مَنْ مَعَكَ؟', 'مَنْ مَعَكِ؟', 'مَنْ عِنْدَكَ؟', 'مَنْ لَكَ؟'], correct: 0 },
      { prompt: 'What does أُحِبُّ mean?', options: ['I go', 'I sit', 'I love / like', 'I have'], correct: 2 }
    ],
    typing: [
      { prompt: 'Type in Arabic: "My book"', ideal: 'كِتَابِي', accepts: ['كتابي', 'كِتَابِي', 'كتابيَ'] },
      { prompt: 'Type in Arabic: "I have a pen"', ideal: 'عِنْدِي قَلَمٌ', accepts: ['عندي قلم', 'عِنْدِي قَلَمٌ', 'عندي قلمٌ', 'عِنْدِي قلم'] }
    ]
  }
};
