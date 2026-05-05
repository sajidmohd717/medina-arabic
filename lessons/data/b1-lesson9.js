/* ============================================================
   b1-lesson9.js — Lesson 9 Data
   ============================================================ */

const LESSON_DATA = {
  book: 'book1',
  lessonNum: 9,
  titleArabic: 'النَّعْتُ وَالْمَنْعُوتُ',
  titleEnglish: 'Adjectives (Qualifying Nouns)',
  summary: 'In this lesson, you will learn how to use adjectives (Na\'t) to describe nouns (Man\'ut). You will discover the "Golden Rule" of Arabic adjectives: they must match the noun they describe in gender, definiteness, and grammatical case.',
  nextLesson: 'b1-lesson10.html',
  passMark: 8,
  totalQuestions: 12,
  
  // ============================================================
  // VOCABULARY
  // ============================================================
  vocab: [
    // Grammar terms
    { ar: 'نَعْتٌ', trans: 'na\'tun', meaning: 'Adjective / Qualifiers', type: 'Grammar' },
    { ar: 'مَنْعُوتٌ', trans: 'man\'ūtun', meaning: 'The noun being described', type: 'Grammar' },
    
    // Nouns
    { ar: 'عُصْفُورٌ', trans: 'ʿuṣfūrun', meaning: 'A sparrow', type: 'Noun' },
    { ar: 'طَيْرٌ', trans: 'ṭayrun', meaning: 'A bird', type: 'Noun' },
    { ar: 'لُغَةٌ', trans: 'lughatun', meaning: 'A language', type: 'Noun' },
    { ar: 'مَدِينَةٌ', trans: 'madīnatun', meaning: 'A city', type: 'Noun' },
    { ar: 'الْقَاهِرَةُ', trans: 'al-qāhiratu', meaning: 'Cairo', type: 'Noun' },
    { ar: 'الْيَوْمَ', trans: 'al-yawma', meaning: 'Today', type: 'Adverb' },
    { ar: 'لِمَاذَا', trans: 'limādhā', meaning: 'Why?', type: 'Interrogative' },
    { ar: 'الْكُوبُ', trans: 'al-kūbu', meaning: 'The cup / glass', type: 'Noun' },
    
    // Adjectives (Regular)
    { ar: 'شَهِيرٌ', trans: 'shahīrun', meaning: 'Famous', type: 'Adjective' },
    { ar: 'سَهْلٌ', trans: 'sahlun', meaning: 'Easy', type: 'Adjective' },
    { ar: 'صَعْبٌ', trans: 'ṣaʿbun', meaning: 'Difficult', type: 'Adjective' },
    { ar: 'مُجْتَهِدٌ', trans: 'mujtahidun', meaning: 'Hardworking', type: 'Adjective' },
    
    // Adjectives (Diptotes - pattern ending in -aanu, no tanwin)
    { ar: 'كَسْلَانُ', trans: 'kaslānu', meaning: 'Lazy', type: 'Adjective' },
    { ar: 'جَوْعَانُ', trans: 'jawʿānu', meaning: 'Hungry', type: 'Adjective' },
    { ar: 'عَطْشَانُ', trans: 'ʿaṭshānu', meaning: 'Thirsty', type: 'Adjective' },
    { ar: 'غَضْبَانُ', trans: 'ghaḍbānu', meaning: 'Angry', type: 'Adjective' },
    { ar: 'مَلْآنُ', trans: 'mal\'ānu', meaning: 'Full', type: 'Adjective' }
  ],
  
  // ============================================================
  // GRAMMAR BLOCKS
  // ============================================================
  grammarBlocks: [
    {
      title: 'The Noun-Adjective Phrase',
      content: '<p>In Arabic, the adjective (<strong>Na\'t</strong>) comes <u>after</u> the noun it describes (<strong>Man\'ut</strong>). For example, "A new book" is written as "Book new".</p>',
      rule: 'كِتَابٌ (Man\'ut) + جَدِيدٌ (Na\'t) = كِتَابٌ جَدِيدٌ (A new book).'
    },
    {
      title: 'The Matching Rule',
      content: '<p>The adjective is a "follower". It must match the noun in four things:</p><ul><li><strong>Gender</strong>: Masc/Masc or Fem/Fem.</li><li><strong>Definiteness</strong>: Both have الـ or both have tanwīn.</li><li><strong>Case</strong>: Both end in damma, kasra, or fatha.</li></ul>',
      rule: 'الْمُدَرِّسُ (Definite) + الْجَدِيدُ (Definite) = "The new teacher."'
    },
    {
      title: 'Diptote Adjectives (-aanu)',
      content: '<p>Some adjectives follow a special pattern ending in <strong>ـَانُ</strong> (aanu). These words <u>never</u> take tanwīn and only have one damma at the end.</p>',
      rule: 'أَنَا جَوْعَانُ (I am hungry) — never say جَوْعَانٌ ❌'
    }
  ],
  
  // ============================================================
  // EXAMPLE SENTENCES
  // ============================================================
  examples: [
    { ar: 'هَذَا طَالِبٌ جَدِيدٌ', trans: 'hādhā ṭālibun jadīdun', meaning: 'This is a new student.' },
    { ar: 'الْمُدَرِّسُ الْجَدِيدُ فِي الْفَصْلِ', trans: 'al-mudarrisu l-jadīdu fī l-faṣli', meaning: 'The new teacher is in the classroom.' },
    { ar: 'الْعَرَبِيَّةُ لُغَةٌ سَهْلَةٌ', trans: 'al-ʿarabiyyatu lughatun sahlatun', meaning: 'Arabic is an easy language.' },
    { ar: 'الْقَاهِرَةُ مَدِينَةٌ كَبِيرَةٌ', trans: 'al-qāhiratu madīnatun kabīratun', meaning: 'Cairo is a large city.' },
    { ar: 'أَنَا طَالِبٌ قَدِيمٌ', trans: 'ana ṭālibun qadīmun', meaning: 'I am an old student.' },
    { ar: 'لِمَاذَا الْمُدَرِّسُ غَضْبَانُ الْيَوْمَ؟', trans: 'limādhā l-mudarrisu ghaḍbānu l-yawma?', meaning: 'Why is the teacher angry today?' },
    { ar: 'الْكُوبُ مَلْآنُ', trans: 'al-kūbu mal\'ānu', meaning: 'The cup is full.' },
    { ar: 'الْعُصْفُورُ طَيْرٌ صَغِيرٌ', trans: 'al-ʿuṣfūru ṭayrun ṣaghīrun', meaning: 'The sparrow is a small bird.' }
  ],
  
  // ============================================================
  // READING COMPREHENSION
  // ============================================================
  comprehension: {
    title: 'The Hardworking Student',
    arabic: 'هَذَا حَامِدٌ. هُوَ طَالِبٌ جَدِيدٌ فِي الْمَدْرَسَةِ. حَامِدٌ طَالِبٌ مُجْتَهِدٌ وَذَكِيٌّ. الْعَرَبِيَّةُ لُغَةٌ جَمِيلَةٌ وَسَهْلَةٌ. حَامِدٌ جَوْعَانُ الآنَ. هُوَ يَذْهَبُ إِلَى الْمَطْعَمِ. الْمَطْعَمُ بَعِيدٌ عَنِ الْمَدْرَسَةِ. حَامِدٌ غَضْبَانُ لِمَاذَا؟ لِأَنَّ الْكُوبَ وَسِخٌ.',
    english: 'This is Hamid. He is a new student in the school. Hamid is a hardworking and intelligent student. Arabic is a beautiful and easy language. Hamid is hungry now. He is going to the restaurant. The restaurant is far from the school. Why is Hamid angry? Because the cup is dirty.',
    questions: [
      {
        text: 'How is Hamid described as a student?',
        options: ['Lazy and small', 'Hardworking and intelligent', 'Famous and rich', 'Old and tall'],
        correct: 'Hardworking and intelligent'
      },
      {
        text: 'What is Hamid\'s opinion of the Arabic language?',
        options: ['Difficult and old', 'Beautiful and easy', 'Famous and large', 'New and clean'],
        correct: 'Beautiful and easy'
      },
      {
        text: 'Why is Hamid going to the restaurant?',
        options: ['Because he is thirsty', 'Because he is hungry', 'Because he is angry', 'Because he is a teacher'],
        correct: 'Because he is hungry'
      },
      {
        text: 'Why is Hamid angry (غَضْبَان) at the end?',
        options: ['Because the school is far', 'Because the restaurant is closed', 'Because the cup is dirty', 'Because the teacher is new'],
        correct: 'Because the cup is dirty'
      }
    ]
  },
  
  // ============================================================
  // PRACTICE QUESTIONS
  // ============================================================
  practiceQuestions: [
    { arabic: 'لُغَةٌ سَهْلَةٌ', correct: 'An easy language', options: ['A difficult language', 'An easy language', 'A beautiful language', 'A new language'] },
    { arabic: 'أَنَا جَوْعَانُ', correct: 'I am hungry', options: ['I am thirsty', 'I am hungry', 'I am lazy', 'I am angry'] },
    { text: 'In "الْمُدَرِّسُ الْجَدِيدُ", why does the adjective have "الـ"?', correct: 'Because the noun it describes is definite', options: ['Because it is feminine', 'Because it is plural', 'Because the noun it describes is definite', 'It is a mistake'] },
    { text: 'Which word means "Famous"?', correct: 'شَهِيرٌ', options: ['شَهِيرٌ', 'مُجْتَهِدٌ', 'ذَكِيٌّ', 'سَهْلٌ'] },
    { text: 'What is the correct ending for "كَسْلَان" (lazy)?', correct: 'Single damma (no tanwīn)', options: ['Tanwīn damma', 'Single damma (no tanwīn)', 'Kasra', 'Fatha'] },
    { text: 'Translate: "The small bird."', correct: 'الطَّيْرُ الصَّغِيرُ', options: ['طَيْرٌ صَغِيرٌ', 'الطَّيْرُ الصَّغِيرُ', 'طَيْرٌ الْصَّغِيرُ', 'الطَّيْرُ صَغِيرٌ'] }
  ],
  
  // ============================================================
  // QUIZ QUESTIONS
  // ============================================================
  quizQuestions: {
    multipleChoice: [
      { prompt: 'Translate: "A hardworking student"', options: ['طَالِبٌ مُجْتَهِدٌ', 'الطَّالِبُ الْمُجْتَهِدُ', 'طَالِبٌ جَدِيدٌ', 'طَالِبٌ كَسْلَانُ'], correct: 0 },
      { prompt: 'Which of these adjectives does NOT take tanwīn?', options: ['شَهِيرٌ', 'سَهْلٌ', 'غَضْبَانُ', 'جَمِيلٌ'], correct: 2 },
      { prompt: 'Translate: "The easy language"', options: ['لُغَةٌ سَهْلَةٌ', 'اللُّغَةُ السَّهْلَةُ', 'اللُّغَةُ الصَّعْبَةُ', 'لُغَةٌ جَمِيلَةٌ'], correct: 1 },
      { prompt: 'What does مَلْآنُ mean?', options: ['Empty', 'Full', 'Broken', 'Open'], correct: 1 },
      { prompt: 'In Arabic, where does the adjective go?', options: ['Before the noun', 'After the noun', 'Inside the noun', 'Anywhere'], correct: 1 },
      { prompt: 'Translate: "I am thirsty."', options: ['أَنَا جَوْعَانُ', 'أَنَا عَطْشَانُ', 'أَنَا كَسْلَانُ', 'أَنَا غَضْبَانُ'], correct: 1 },
      { prompt: 'Which word is the Man\'ut in "بَيْتٌ كَبِيرٌ"?', options: ['بَيْتٌ', 'كَبِيرٌ'], correct: 0 },
      { prompt: 'Translate: "The large city"', options: ['مَدِينَةٌ كَبِيرَةٌ', 'الْمَدِينَةُ الْكَبِيرَةُ', 'الْمَدِينَةُ الصَّغِيرَةُ', 'مَدِينَةٌ جَمِيلَةٌ'], correct: 1 },
      { prompt: 'What is the feminine form of جَدِيدٌ?', options: ['جَدِيدَةٌ', 'جَدِيدُ', 'جَدِيدٍ', 'جَدِيدَةُ'], correct: 0 },
      { prompt: 'Translate: "Why?"', options: ['أَيْنَ', 'مَنْ', 'مَا', 'لِمَاذَا'], correct: 3 }
    ],
    typing: [
      { prompt: 'Type in Arabic: "Arabic is a beautiful language."', ideal: 'الْعَرَبِيَّةُ لُغَةٌ جَمِيلَةٌ', accepts: ['العربية لغة جميلة', 'الْعَرَبِيَّةُ لُغَةٌ جَمِيلَةٌ', 'العربية لغة جميلةٌ', 'الْعَرَبِيَّة لُغَة جَمِيلَة'] },
      { prompt: 'Type in Arabic: "I am hungry."', ideal: 'أَنَا جَوْعَانُ', accepts: ['أنا جوعان', 'أَنَا جَوْعَانُ', 'أنا جوعانُ', 'أَنَا جوعان'] }
    ]
  }
};
