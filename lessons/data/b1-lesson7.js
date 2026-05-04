/* ============================================================
   b1-lesson7.js — Lesson 7 Data
   ============================================================ */

const LESSON_DATA = {
  book: 'book1',
  lessonNum: 7,
  titleArabic: 'تِلْكَ',
  titleEnglish: 'That is… (Feminine)',
  summary: 'In this lesson, you will learn the feminine counterpart to ذَلِكَ, which is تِلْكَ. This word is used to point to feminine objects or people that are far away. You will also learn new vocabulary for animals and occupations.',
  nextLesson: 'b1-lesson8.html',
  passMark: 8,
  totalQuestions: 12,
  
  // ============================================================
  // VOCABULARY
  // ============================================================
  vocab: [
    // Demonstrative
    { ar: 'تِلْكَ', trans: 'tilka', meaning: 'That (fem.)', type: 'Demonstrative' },
    
    // People & Occupations
    { ar: 'مُمَرِّضَةٌ', trans: 'mumarriḍatun', meaning: 'A nurse (fem.)', type: 'Noun' },
    { ar: 'طَبِيْبَةٌ', trans: 'ṭabībatun', meaning: 'A doctor (fem.)', type: 'Noun' },
    { ar: 'طَالِبَةٌ', trans: 'ṭālibatun', meaning: 'A student (fem.)', type: 'Noun' },
    
    // Animals
    { ar: 'دَجَاجَةٌ', trans: 'dajājatun', meaning: 'A hen', type: 'Noun' },
    { ar: 'بَطَّةٌ', trans: 'baṭṭatun', meaning: 'A duck', type: 'Noun' },
    { ar: 'دِيْكٌ', trans: 'dīkun', meaning: 'A rooster', type: 'Noun (Masc.)' },
    
    // Objects
    { ar: 'بَيْضَةٌ', trans: 'bayḍatun', meaning: 'An egg', type: 'Noun' },
    { ar: 'مُؤَذِّنٌ', trans: 'mu\'adhdhinun', meaning: 'A caller to prayer', type: 'Noun (Masc.)' },
    
    // Adjectives
    { ar: 'طَوِيْلَةٌ', trans: 'ṭawīlatun', meaning: 'Tall (fem.)', type: 'Adjective' },
    { ar: 'قَصِيْرَةٌ', trans: 'qaṣīratun', meaning: 'Short (fem.)', type: 'Adjective' }
  ],
  
  // ============================================================
  // GRAMMAR BLOCKS
  // ============================================================
  grammarBlocks: [
    {
      title: 'The Feminine "That": تِلْكَ',
      content: '<p>Just as <strong>ذَلِكَ</strong> (dhālika) is used to point to masculine nouns that are far away, <strong>تِلْكَ</strong> (tilka) is used for feminine nouns.</p>',
      rule: 'ذَلِكَ (That - Masc.) vs. تِلْكَ (That - Fem.).'
    },
    {
      title: 'Demonstrative Summary',
      content: '<p>We now have a complete set of pointing words for singular nouns:</p><ul><li><strong>هَذَا</strong>: This (Masc., Near)</li><li><strong>هَذِهِ</strong>: This (Fem., Near)</li><li><strong>ذَلِكَ</strong>: That (Masc., Far)</li><li><strong>تِلْكَ</strong>: That (Fem., Far)</li></ul>',
      rule: 'Always match the gender and the distance!'
    },
    {
      title: 'Feminine Occupations',
      content: '<p>Many occupations are made feminine by adding the <strong>Tā\' Marbūṭa (ة)</strong>.</p><ul><li><strong>طَبِيْبٌ</strong> (Doctor, masc.) → <strong>طَبِيْبَةٌ</strong> (Doctor, fem.)</li><li><strong>مُمَرِّضٌ</strong> (Nurse, masc.) → <strong>مُمَرِّضَةٌ</strong> (Nurse, fem.)</li></ul>',
      rule: 'Masc + ة = Fem.'
    }
  ],
  
  // ============================================================
  // EXAMPLE SENTENCES
  // ============================================================
  examples: [
    { ar: 'هَذِهِ آمِنَةُ وَتِلْكَ فَاطِمَةُ', trans: 'hādhihi āminatu wa-tilka fāṭimatu', meaning: 'This is Aminah and that is Fatimah.' },
    { ar: 'هَذِهِ طَبِيْبَةٌ وَتِلْكَ مُمَرِّضَةٌ', trans: 'hādhihi ṭabībatun wa-tilka mumarriḍatun', meaning: 'This is a doctor and that is a nurse.' },
    { ar: 'هَذَا مِنَ الْهِنْدِ وَتِلْكَ مِنَ الْيَابَانِ', trans: 'hādhā mina l-hindi wa-tilka mina l-yābāni', meaning: 'This is from India and that is from Japan.' },
    { ar: 'أَتِلْكَ دَجَاجَةٌ؟ لاَ، تِلْكَ بَطَّةٌ', trans: 'a-tilka dajājatun? lā, tilka baṭṭatun', meaning: 'Is that a hen? No, that is a duck.' },
    { ar: 'مَا تِلْكَ؟ تِلْكَ بَيْضَةٌ', trans: 'mā tilka? tilka bayḍatun', meaning: 'What is that? That is an egg.' },
    { ar: 'هَذِهِ طَوِيْلَةٌ وَتِلْكَ قَصِيْرَةٌ', trans: 'hādhihi ṭawīlatun wa-tilka qaṣīratun', meaning: 'This is tall and that is short.' },
    { ar: 'ذَلِكَ دِيْكٌ وَتِلْكَ دَجَاجَةٌ', trans: 'dhālika dīkun wa-tilka dajājatun', meaning: 'That is a rooster and that is a hen.' }
  ],
  
  // ============================================================
  // READING COMPREHENSION
  // ============================================================
  comprehension: {
    title: 'The Farm and the Hospital',
    arabic: 'هَذِهِ طَبِيْبَةٌ وَتِلْكَ مُمَرِّضَةٌ. الطَّبِيْبَةُ مِنَ الْهِنْدِ وَالْمُمَرِّضَةُ مِنَ الْيَابَانِ. هَذِهِ طَوِيْلَةٌ وَتِلْكَ قَصِيْرَةٌ. مَنْ هَذَا؟ هَذَا حَامِدٌ. وَمَنْ ذَلِكَ؟ ذَلِكَ عَلِيٌّ. أَتِلْكَ دَجَاجَةٌ؟ لاَ، تِلْكَ بَطَّةٌ. مَا تِلْكَ؟ تِلْكَ بَيْضَةٌ. تِلْكَ سَيَّارَةُ الْمُدِيْرِ.',
    english: 'This is a doctor and that is a nurse. The doctor is from India and the nurse is from Japan. This one (the doctor) is tall and that one (the nurse) is short. Who is this? This is Hamid. And who is that? That is Ali. Is that a hen? No, that is a duck. What is that? That is an egg. That is the principal\'s car.',
    questions: [
      {
        text: 'Where is the nurse from?',
        options: ['India', 'Japan', 'China', 'The Philippines'],
        correct: 'Japan'
      },
      {
        text: 'Who is described as "short" (قَصِيْرَة)?',
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
    { arabic: 'تِلْكَ مُمَرِّضَةٌ', correct: 'That is a nurse.', options: ['This is a nurse.', 'That is a nurse.', 'That is a doctor.', 'This is a doctor.'] },
    { arabic: 'أَتِلْكَ بَطَّةٌ؟', correct: 'Is that a duck?', options: ['Is that a hen?', 'Is that a duck?', 'Is this a duck?', 'What is that?'] },
    { text: 'Which word is the feminine form of "That"?', correct: 'تِلْكَ', options: ['ذَلِكَ', 'تِلْكَ', 'هَذِهِ', 'هَذَا'] },
    { text: 'Translate: "That is an egg."', correct: 'تِلْكَ بَيْضَةٌ', options: ['تِلْكَ بَيْضَةٌ', 'هَذِهِ بَيْضَةٌ', 'ذَلِكَ بَيْضَةٌ', 'تِلْكَ بَطَّةٌ'] },
    { text: 'Which occupation means "Nurse"?', correct: 'مُمَرِّضَةٌ', options: ['طَبِيْبَةٌ', 'مُمَرِّضَةٌ', 'مُدَرِّسَةٌ', 'طَالِبَةٌ'] },
    { text: 'Translate: "This is tall and that is short."', correct: 'هَذِهِ طَوِيْلَةٌ وَتِلْكَ قَصِيْرَةٌ', options: ['هَذِهِ طَوِيْلَةٌ وَتِلْكَ قَصِيْرَةٌ', 'هَذَا طَوِيْلٌ وَذَلِكَ قَصِيْرٌ', 'هَذِهِ قَصِيْرَةٌ وَتِلْكَ طَوِيْلَةٌ', 'هَذَا قَصِيْرٌ وَذَلِكَ طَوِيْلٌ'] }
  ],
  
  // ============================================================
  // QUIZ QUESTIONS
  // ============================================================
  quizQuestions: {
    multipleChoice: [
      { prompt: 'What is the feminine counterpart to ذَلِكَ?', options: ['هَذِهِ', 'تِلْكَ', 'هِيَ', 'تِلْكَ'], correct: 1 },
      { prompt: 'Translate: "That is a hen."', options: ['تِلْكَ بَطَّةٌ', 'تِلْكَ دَجَاجَةٌ', 'ذَلِكَ دِيْكٌ', 'هَذِهِ دَجَاجَةٌ'], correct: 1 },
      { prompt: 'Which word means "Nurse" (fem.)?', options: ['طَبِيْبَةٌ', 'مُدَرِّسَةٌ', 'مُمَرِّضَةٌ', 'طَالِبَةٌ'], correct: 2 },
      { prompt: 'Translate: "That is a duck."', options: ['تِلْكَ بَطَّةٌ', 'تِلْكَ دَجَاجَةٌ', 'تِلْكَ بَيْضَةٌ', 'هَذِهِ بَطَّةٌ'], correct: 0 },
      { prompt: 'What is the opposite of طَوِيْلَةٌ (tall)?', options: ['جَمِيْلَةٌ', 'قَصِيْرَةٌ', 'سَرِيْعَةٌ', 'كَبِيْرَةٌ'], correct: 1 },
      { prompt: 'Translate: "That is the principal\'s car."', options: ['تِلْكَ سَيَّارَةُ الْمُدِيْرِ', 'هَذِهِ سَيَّارَةُ الْمُدِيْرِ', 'ذَلِكَ سَيَّارَةُ الْمُدِيْرِ', 'تِلْكَ سَيَّارَةُ الْمُدَرِّسِ'], correct: 0 },
      { prompt: 'What does مَا تِلْكَ؟ mean?', options: ['Who is that?', 'What is that?', 'Where is that?', 'Is that...?'], correct: 1 },
      { prompt: 'Which of these is masculine?', options: ['دَجَاجَةٌ', 'بَطَّةٌ', 'دِيْكٌ', 'بَيْضَةٌ'], correct: 2 },
      { prompt: 'Translate: "That is an egg."', options: ['تِلْكَ بَطَّةٌ', 'تِلْكَ بَيْضَةٌ', 'هَذِهِ بَيْضَةٌ', 'ذَلِكَ بَيْضَةٌ'], correct: 1 },
      { prompt: 'Which of these means "India"?', options: ['الْيَابَانُ', 'الصِّيْنُ', 'الْهِنْدُ', 'الْفِلِبِّيْنُ'], correct: 2 }
    ],
    typing: [
      { prompt: 'Type in Arabic: "That is a nurse."', ideal: 'تِلْكَ مُمَرِّضَةٌ', accepts: ['تلك ممرضة', 'تِلْكَ مُمَرِّضَةٌ', 'تلك ممرضةٌ', 'تِلْكَ ممرضة'] },
      { prompt: 'Type in Arabic: "That is a hen."', ideal: 'تِلْكَ دَجَاجَةٌ', accepts: ['تلك دجاجة', 'تِلْكَ دَجَاجَةٌ', 'تلك دجاجةٌ', 'تِلْكَ دجاجة'] }
    ]
  }
};
