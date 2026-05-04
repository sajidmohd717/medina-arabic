/* ============================================================
   b1-lesson6.js — Lesson 6 Data
   ============================================================ */

const LESSON_DATA = {
  book: 'book1',
  lessonNum: 6,
  titleArabic: 'هَذِهِ',
  titleEnglish: 'This is… (Feminine)',
  summary: 'In this lesson, you will learn the feminine counterpart to هَذَا, which is هَذِهِ. You will learn how to identify feminine nouns using the tā\' marbūṭa (ة), how adjectives change to match the gender of the noun, and how to use the preposition لِـ (for/belongs to).',
  nextLesson: 'b1-lesson7.html',
  passMark: 8,
  totalQuestions: 12,
  
  // ============================================================
  // VOCABULARY
  // ============================================================
  vocab: [
    // Demonstrative
    { ar: 'هَذِهِ', trans: 'hādhihi', meaning: 'This (fem.)', type: 'Demonstrative' },
    
    // Nouns - Feminine (with ة)
    { ar: 'مِلْعَقَةٌ', trans: 'milʿaqatun', meaning: 'A spoon', type: 'Noun' },
    { ar: 'مِكْوَاةٌ', trans: 'mikwātun', meaning: 'An iron', type: 'Noun' },
    { ar: 'دَرَّاجَةٌ', trans: 'darrājatun', meaning: 'A bicycle', type: 'Noun' },
    { ar: 'سَاعَةٌ', trans: 'sāʿatun', meaning: 'A watch / clock', type: 'Noun' },
    { ar: 'ثَلَّاجَةٌ', trans: 'thallājatun', meaning: 'A fridge', type: 'Noun' },
    { ar: 'سَيَّارَةٌ', trans: 'sayyāratun', meaning: 'A car', type: 'Noun' },
    { ar: 'نَافِذَةٌ', trans: 'nāfidhatun', meaning: 'A window', type: 'Noun' },
    { ar: 'مُدَرِّسَةٌ', trans: 'mudarrisatun', meaning: 'A teacher (fem.)', type: 'Noun' },
    { ar: 'طَبِيبَةٌ', trans: 'ṭabībatun', meaning: 'A doctor (fem.)', type: 'Noun' },
    
    // Feminine without ة (Exceptions & Body Parts)
    { ar: 'قِدْرٌ', trans: 'qidrun', meaning: 'A cooking pot', type: 'Noun (Fem.)' },
    { ar: 'يَدٌ', trans: 'yadun', meaning: 'A hand', type: 'Noun (Fem.)' },
    { ar: 'رِجْلٌ', trans: 'rijlun', meaning: 'A leg / foot', type: 'Noun (Fem.)' },
    { ar: 'عَيْنٌ', trans: 'ʿaynun', meaning: 'An eye', type: 'Noun (Fem.)' },
    { ar: 'أُذُنٌ', trans: 'udhunun', meaning: 'An ear', type: 'Noun (Fem.)' },
    
    // Masculine Body Parts (Singular)
    { ar: 'رَأْسٌ', trans: 'ra\'sun', meaning: 'A head', type: 'Noun' },
    { ar: 'أَنْفٌ', trans: 'anfun', meaning: 'A nose', type: 'Noun' },
    { ar: 'فَمٌ', trans: 'famun', meaning: 'A mouth', type: 'Noun' },
    
    // Adjectives (Feminine)
    { ar: 'جَمِيلَةٌ', trans: 'jamīlatun', meaning: 'Beautiful (fem.)', type: 'Adjective' },
    { ar: 'سَرِيعَةٌ', trans: 'sarīʿatun', meaning: 'Fast (fem.)', type: 'Adjective' },
    { ar: 'كَبِيرَةٌ', trans: 'kabīratun', meaning: 'Big (fem.)', type: 'Adjective' },
    
    // Prepositions & Particles
    { ar: 'لِـ', trans: 'li-', meaning: 'For / Belongs to', type: 'Preposition' },
    { ar: 'لِمَنْ', trans: 'li-man', meaning: 'Whose? / To whom?', type: 'Interrogative' },
    { ar: 'أَيْضًا', trans: 'ayḍan', meaning: 'Also / Too', type: 'Particle' },
    { ar: 'جِدًّا', trans: 'jiddan', meaning: 'Very', type: 'Adverb' }
  ],
  
  // ============================================================
  // GRAMMAR BLOCKS
  // ============================================================
  grammarBlocks: [
    {
      title: 'The Feminine "This": هَذِهِ',
      content: '<p>In Arabic, every noun is either masculine or feminine. To point at a feminine noun that is near, we use <strong>هَذِهِ</strong> (hādhihi).</p>',
      rule: 'هَذَا (Masculine) vs. هَذِهِ (Feminine).'
    },
    {
      title: 'Identifying Feminine Nouns',
      content: '<p>The most common sign of a feminine noun is the <strong>Tā\' Marbūṭa (ة)</strong> at the end. For example: <strong>سَيَّارَةٌ</strong> (car), <strong>سَاعَةٌ</strong> (watch).</p><p>However, some words are feminine by nature (like "mother" or "sister") or by convention (like <strong>قِدْرٌ</strong> - pot, or <strong>شَمْسٌ</strong> - sun). Double body parts (eyes, ears, hands, legs) are also feminine.</p>',
      rule: 'Look for ة at the end, but remember body parts and special exceptions!'
    },
    {
      title: 'Noun-Adjective Agreement',
      content: '<p>Adjectives must match the gender of the noun they describe. To make a masculine adjective feminine, add a ة to the end.</p><ul><li><strong>بَيْتٌ جَمِيلٌ</strong> (A beautiful house - masc.)</li><li><strong>سَيَّارَةٌ جَمِيلَةٌ</strong> (A beautiful car - fem.)</li></ul>',
      rule: 'Noun gender = Adjective gender.'
    },
    {
      title: 'The Preposition لِـ (Belongs to)',
      content: '<p>The preposition <strong>لِـ</strong> (li-) means "for" or "belongs to". It causes the following noun to take a kasra (genitive case).</p><p><strong>لِمَنْ هَذِهِ؟</strong> means "Whose is this?" or "To whom does this belong?"</p>',
      rule: 'هَذِهِ لِخَالِدٍ = This belongs to Khalid.'
    }
  ],
  
  // ============================================================
  // EXAMPLE SENTENCES
  // ============================================================
  examples: [
    { ar: 'هَذِهِ بِنْتُ يَاسِرٍ', trans: 'hādhihi bintu yāsirin', meaning: 'This is Yasir\'s daughter.' },
    { ar: 'هَذِهِ السَّيَّارَةُ لِلْمُدِيرِ', trans: 'hādhihi s-sayyāratu lil-mudīri', meaning: 'This car belongs to the principal.' },
    { ar: 'لِمَنْ هَذِهِ الْمِكْوَاةُ؟', trans: 'li-man hādhihi l-mikwātu?', meaning: 'Whose iron is this?' },
    { ar: 'الْمِلْعَقَةُ فِي الْقِدْرِ', trans: 'al-milʿaqatu fī l-qidri', meaning: 'The spoon is in the pot.' },
    { ar: 'هَذِهِ سَاعَةُ حَامِدٍ. هِيَ جَمِيلَةٌ جِدًّا', trans: 'hādhihi sāʿatu ḥāmidin. hiya jamīlatun jiddan', meaning: 'This is Hamid\'s watch. It is very beautiful.' },
    { ar: 'هَذَا أَنْفٌ وَهَذَا فَمٌ', trans: 'hādhā anfun wa-hādhā famun', meaning: 'This is a nose and this is a mouth.' },
    { ar: 'هَذِهِ عَيْنٌ وَهَذِهِ أُذُنٌ', trans: 'hādhihi ʿaynun wa-hādhihi udhunun', meaning: 'This is an eye and this is an ear.' },
    { ar: 'الدَّرَّاجَةُ سَرِيعَةٌ', trans: 'ad-darrājatu sarīʿatun', meaning: 'The bicycle is fast.' }
  ],
  
  // ============================================================
  // READING COMPREHENSION
  // ============================================================
  comprehension: {
    title: 'Aminah\'s Belongings',
    arabic: 'هَذِهِ آمِنَةُ. هِيَ طَبِيبَةٌ. هَذِهِ سَيَّارَةُ الطَّبِيبَةِ. السَّيَّارَةُ جَمِيلَةٌ وَسَرِيعَةٌ جِدًّا. هَذِهِ سَاعَةُ آمِنَةَ. هِيَ عَلَى الْمَكْتَبِ. الْمِلْعَقَةُ فِي الْقِدْرِ. الْقِدْرُ عَلَى النَّارِ. هَذِهِ أُذُنٌ وَهَذِهِ عَيْنٌ. آمِنَةُ أَيْضًا طَالِبَةٌ فِي الْجَامِعَةِ.',
    english: 'This is Aminah. She is a doctor. This is the doctor\'s car. The car is beautiful and very fast. This is Aminah\'s watch. It is on the desk. The spoon is in the pot. The pot is on the fire. This is an ear and this is an eye. Aminah is also a student in the university.',
    questions: [
      {
        text: 'What is Aminah\'s profession?',
        options: ['A teacher', 'A doctor', 'An engineer', 'A merchant'],
        correct: 'A doctor'
      },
      {
        text: 'How is the car described?',
        options: ['Old and slow', 'Big and heavy', 'Beautiful and very fast', 'Small and clean'],
        correct: 'Beautiful and very fast'
      },
      {
        text: 'Where is the spoon (الْمِلْعَقَة)?',
        options: ['On the desk', 'In the car', 'In the pot', 'In the room'],
        correct: 'In the pot'
      },
      {
        text: 'Is Aminah only a doctor?',
        options: ['Yes, only a doctor', 'No, she is also a student', 'No, she is also a teacher', 'Yes, she is an engineer'],
        correct: 'No, she is also a student'
      }
    ]
  },
  
  // ============================================================
  // PRACTICE QUESTIONS
  // ============================================================
  practiceQuestions: [
    { arabic: 'هَذِهِ مِلْعَقَةٌ', correct: 'This is a spoon.', options: ['This is a pen.', 'This is a spoon.', 'This is a pot.', 'This is an iron.'] },
    { arabic: 'السَّيَّارَةُ جَمِيلَةٌ', correct: 'The car is beautiful.', options: ['The house is beautiful.', 'The car is big.', 'The car is beautiful.', 'The car is fast.'] },
    { text: 'Which word is the feminine form of "This"?', correct: 'هَذِهِ', options: ['هَذَا', 'هَذِهِ', 'ذَلِكَ', 'تِلْكَ'] },
    { text: 'How do you say "Whose is this?" for a feminine object?', correct: 'لِمَنْ هَذِهِ؟', options: ['مَنْ هَذِهِ؟', 'لِمَنْ هَذَا؟', 'لِمَنْ هَذِهِ؟', 'مَا هَذِهِ؟'] },
    { text: 'Which body part is feminine in Arabic?', correct: 'عَيْنٌ (Eye)', options: ['رَأْسٌ (Head)', 'أَنْفٌ (Nose)', 'فَمٌ (Mouth)', 'عَيْنٌ (Eye)'] },
    { text: 'Translate: "This belongs to Khalid."', correct: 'هَذِهِ لِخَالِدٍ', options: ['هَذِهِ لِخَالِدٍ', 'هَذَا لِخَالِدٍ', 'هَذِهِ خَالِدٌ', 'هَذَا خَالِدٌ'] }
  ],
  
  // ============================================================
  // QUIZ QUESTIONS
  // ============================================================
  quizQuestions: {
    multipleChoice: [
      { prompt: 'What is the feminine counterpart to هَذَا?', options: ['تِلْكَ', 'هَذِهِ', 'ذَلِكَ', 'هِيَ'], correct: 1 },
      { prompt: 'Translate: "This is a teacher (fem.)"', options: ['هَذَا مُدَرِّسٌ', 'هَذِهِ مُدَرِّسَةٌ', 'هَذِهِ طَبِيبَةٌ', 'هِيَ مُدَرِّسٌ'], correct: 1 },
      { prompt: 'Which of these is a sign of a feminine noun?', options: ['Tanwīn', 'Al- prefix', 'Tā\' Marbūṭa (ة)', 'Damma ending'], correct: 2 },
      { prompt: 'Translate: "Whose is this car?"', options: ['لِمَنْ هَذَا السَّيَّارَةُ؟', 'لِمَنْ هَذِهِ السَّيَّارَةُ؟', 'مَنْ هَذِهِ السَّيَّارَةُ؟', 'أَيْنَ هَذِهِ السَّيَّارَةُ؟'], correct: 1 },
      { prompt: 'Which of these body parts is masculine?', options: ['عَيْنٌ (Eye)', 'أُذُنٌ (Ear)', 'يَدٌ (Hand)', 'أَنْفٌ (Nose)'], correct: 3 },
      { prompt: 'Translate: "The bicycle is fast."', options: ['الدَّرَّاجَةُ سَرِيعٌ', 'الدَّرَّاجَةُ سَرِيعَةٌ', 'الْحِصَانُ سَرِيعٌ', 'الدَّرَّاجَةُ جَمِيلَةٌ'], correct: 1 },
      { prompt: 'What does لِـ mean?', options: ['In', 'On', 'For / Belongs to', 'From'], correct: 2 },
      { prompt: 'Translate: "The spoon is in the pot."', options: ['الْمِلْعَقَةُ فِي الْقِدْرِ', 'الْمِلْعَقَةُ عَلَى الْقِدْرِ', 'الْقِدْرُ فِي الْمِلْعَقَةِ', 'الْمِلْعَقَةُ تَحْتَ الْقِدْرِ'], correct: 0 },
      { prompt: 'Which word means "Iron" (for clothes)?', options: ['مِلْعَقَةٌ', 'مِكْوَاةٌ', 'ثَلَّاجَةٌ', 'دَرَّاجَةٌ'], correct: 1 },
      { prompt: 'Translate: "This is an ear."', options: ['هَذَا أُذُنٌ', 'هَذِهِ أُذُنٌ', 'هَذَا عَيْنٌ', 'هَذِهِ يَدٌ'], correct: 1 }
    ],
    typing: [
      { prompt: 'Type in Arabic: "This is a car."', ideal: 'هَذِهِ سَيَّارَةٌ', accepts: ['هذه سيارة', 'هَذِهِ سَيَّارَةٌ', 'هذه سيارةٌ', 'هَذِهِ سيارة'] },
      { prompt: 'Type in Arabic: "Whose is this?" (feminine)', ideal: 'لِمَنْ هَذِهِ؟', accepts: ['لمن هذه', 'لِمَنْ هَذِهِ', 'لمن هذه؟', 'لِمَنْ هَذِهِ؟'] }
    ]
  }
};
