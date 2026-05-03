/* ============================================================
   b1-lesson4.js — Lesson 4 Data
   ============================================================ */

const LESSON_DATA = {
  book: 'book1',
  lessonNum: 4,
  titleArabic: 'حُرُوفُ الْجَرّ',
  titleEnglish: 'Prepositions & Pronouns',
  summary: 'In this lesson, you will learn the first four major prepositions: فِي (in), عَلَى (on), مِنْ (from), and إِلَى (to). You will also learn how these words change the ending of the nouns they follow, and introduce basic pronouns like هُوَ (he/it) and هِيَ (she/it).',
  nextLesson: 'b1-lesson5.html',
  passMark: 7,
  totalQuestions: 12,
  
  // ============================================================
  // VOCABULARY
  // ============================================================
  vocab: [
    // Prepositions (The stars of the lesson)
    { ar: 'فِي', trans: 'fī', meaning: 'In', type: 'Preposition' },
    { ar: 'عَلَى', trans: 'ʿalā', meaning: 'On / Upon', type: 'Preposition' },
    { ar: 'مِنْ', trans: 'min', meaning: 'From', type: 'Preposition' },
    { ar: 'إِلَى', trans: 'ilā', meaning: 'To / Towards', type: 'Preposition' },
    
    // Question Words
    { ar: 'أَيْنَ', trans: 'ayna', meaning: 'Where?', type: 'Interrogative' },
    
    // Pronouns
    { ar: 'هُوَ', trans: 'huwa', meaning: 'He / It (masc.)', type: 'Pronoun' },
    { ar: 'هِيَ', trans: 'hiya', meaning: 'She / It (fem.)', type: 'Pronoun' },
    { ar: 'أَنَا', trans: 'ana', meaning: 'I', type: 'Pronoun' },
    { ar: 'أَنْتَ', trans: 'anta', meaning: 'You (masc. sing.)', type: 'Pronoun' },
    
    // Nouns - Locations/Rooms
    { ar: 'الْغُرْفَةُ', trans: 'al-ghurfatu', meaning: 'The room', type: 'Noun' },
    { ar: 'الْحَمَّامُ', trans: 'al-ḥammāmu', meaning: 'The bathroom', type: 'Noun' },
    { ar: 'الْمَطْبَخُ', trans: 'al-maṭbakhu', meaning: 'The kitchen', type: 'Noun' },
    { ar: 'الْمِرْحَاضُ', trans: 'al-mirḥāḍu', meaning: 'The toilet / washroom', type: 'Noun' },
    { ar: 'الْمَدْرَسَةُ', trans: 'al-madrasatu', meaning: 'The school', type: 'Noun' },
    { ar: 'الْجَامِعَةُ', trans: 'al-jāmiʿatu', meaning: 'The university', type: 'Noun' },
    { ar: 'السُّوقُ', trans: 'as-sūqu', meaning: 'The market', type: 'Noun' },
    { ar: 'الْيَابَانُ', trans: 'al-yābānu', meaning: 'Japan', type: 'Noun' },
    { ar: 'الصِّينُ', trans: 'aṣ-ṣīnu', meaning: 'China', type: 'Noun' },
    { ar: 'الْهِنْدُ', trans: 'al-hindu', meaning: 'India', type: 'Noun' },
    { ar: 'الْفِلِبِّينُ', trans: 'al-filibbīnu', meaning: 'The Philippines', type: 'Noun' },
    
    // People/Names
    { ar: 'آمِنَةُ', trans: 'Āminatu', meaning: 'Aminah', type: 'Name' },
    { ar: 'سَعِيدٌ', trans: 'Saʿīdun', meaning: 'Saed', type: 'Name' },
    { ar: 'فَاطِمَةُ', trans: 'Fāṭimatu', meaning: 'Fatimah', type: 'Name' },
    { ar: 'عَبَّاسٌ', trans: 'ʿAbbāsun', meaning: 'Abbas', type: 'Name' },
    
    // Verbs (First introduction)
    { ar: 'خَرَجَ', trans: 'kharaja', meaning: 'He left / went out', type: 'Verb' },
    { ar: 'ذَهَبَ', trans: 'dhahaba', meaning: 'He went', type: 'Verb' }
  ],
  
  // ============================================================
  // GRAMMAR BLOCKS
  // ============================================================
  grammarBlocks: [
    {
      title: 'The Prepositions (Harf Jar)',
      content: '<p>Prepositions in Arabic are called <strong>Harf Jar</strong>. They are short words that show the relationship between other words.</p><p>The four prepositions introduced here are: <strong>فِي</strong> (in), <strong>عَلَى</strong> (on), <strong>مِنْ</strong> (from), and <strong>إِلَى</strong> (to).</p>',
      rule: 'Prepositions change the ending of the following noun from a damma (u) to a kasra (i). This is called the Genitive case (Majrūr).'
    },
    {
      title: 'The Genitive Case (Majrūr)',
      content: '<p>When a noun is preceded by a preposition, its ending changes:</p><ul><li><strong>الْبَيْتُ</strong> (The house) → <strong>فِي الْبَيْتِ</strong> (In the house)</li><li><strong>الْمَكْتَبُ</strong> (The desk) → <strong>عَلَى الْمَكْتَبِ</strong> (On the desk)</li></ul>',
      rule: 'Noun + Preposition = Ending becomes -i (kasra).'
    },
    {
      title: 'Pronouns: هُوَ and هِيَ',
      content: '<p>Arabic nouns are either masculine or feminine. To refer to them, we use:</p><ul><li><strong>هُوَ</strong> (He/It): For masculine nouns (like <em>Kitāb</em> or <em>Muhammad</em>).</li><li><strong>هِيَ</strong> (She/It): For feminine nouns (like <em>Ghurfah</em> or <em>Aminah</em>).</li></ul>',
      rule: 'Use هُوَ for masculine and هِيَ for feminine, even for objects!'
    },
    {
      title: 'Asking "Where?"',
      content: '<p>Use <strong>أَيْنَ</strong> (ayna) to ask about location. It usually comes at the beginning of the sentence.</p>',
      rule: 'أَيْنَ مُحَمَّدٌ؟ = "Where is Muhammad?"'
    }
  ],
  
  // ============================================================
  // EXAMPLE SENTENCES
  // ============================================================
  examples: [
    { ar: 'مُحَمَّدٌ فِي الْغُرْفَةِ', trans: 'muḥammadun fī l-ghurfati', meaning: 'Muhammad is in the room.' },
    { ar: 'أَيْنَ الْكِتَابُ؟ هُوَ عَلَى الْمَكْتَبِ', trans: 'ayna l-kitābu? huwa ʿalā l-maktabi', meaning: 'Where is the book? It is on the desk.' },
    { ar: 'آمِنَةُ فِي الْمَطْبَخِ', trans: 'āminatu fī l-maṭbakhi', meaning: 'Aminah is in the kitchen.' },
    { ar: 'أَيْنَ السَّاعَةُ؟ هِيَ عَلَى السَّرِيرِ', trans: 'ayna s-sāʿatu? hiya ʿalā s-sarīri', meaning: 'Where is the watch? It is on the bed.' },
    { ar: 'مِنْ أَيْنَ أَنْتَ؟ أَنَا مِنَ الْيَابَانِ', trans: 'min ayna anta? ana mina l-yābāni', meaning: 'Where are you from? I am from Japan.' },
    { ar: 'عَبَّاسٌ خَرَجَ مِنَ الْمَدْرَسَةِ', trans: 'ʿabbāsun kharaja mina l-madrasati', meaning: 'Abbas left from the school.' },
    { ar: 'ذَهَبَ الْمُدِيرُ إِلَى الْفَصْلِ', trans: 'dhahaba l-mudīru ilā l-faṣli', meaning: 'The principal went to the classroom.' },
    { ar: 'أَيْنَ الْمِرْحَاضُ؟', trans: 'ayna l-mirḥāḍu?', meaning: 'Where is the washroom?' }
  ],
  
  // ============================================================
  // READING COMPREHENSION
  // ============================================================
  comprehension: {
    title: 'Where is Everyone?',
    arabic: 'مُحَمَّدٌ فِي الْغُرْفَةِ. هُوَ عَلَى السَّرِيرِ. آمِنَةُ فِي الْمَطْبَخِ. هِيَ أَمَامَ الْمَكْتَبِ. أَيْنَ الْكِتَابُ؟ هُوَ عَلَى الْمَكْتَبِ. أَيْنَ السَّاعَةُ؟ هِيَ فِي الْحَمَّامِ. عَبَّاسٌ خَرَجَ مِنَ الْمَدْرَسَةِ وَذَهَبَ إِلَى الْجَامِعَةِ.',
    english: 'Muhammad is in the room. He is on the bed. Aminah is in the kitchen. She is in front of the desk. Where is the book? It is on the desk. Where is the watch? It is in the bathroom. Abbas left the school and went to the university.',
    questions: [
      {
        text: 'Where exactly is Muhammad in the room?',
        options: ['In front of the desk', 'On the bed', 'In the bathroom', 'In the kitchen'],
        correct: 'On the bed'
      },
      {
        text: 'Who is in the kitchen?',
        options: ['Muhammad', 'Abbas', 'Aminah', 'The teacher'],
        correct: 'Aminah'
      },
      {
        text: 'Where is the watch (السَّاعَة)?',
        options: ['On the desk', 'In the room', 'In the bathroom', 'On the bed'],
        correct: 'In the bathroom'
      },
      {
        text: 'Where did Abbas go after leaving school?',
        options: ['To the market', 'To the university', 'To the house', 'To the mosque'],
        correct: 'To the university'
      }
    ]
  },
  
  // ============================================================
  // PRACTICE QUESTIONS
  // ============================================================
  practiceQuestions: [
    { arabic: 'فِي الْمَسْجِدِ', correct: 'In the mosque', options: ['On the mosque', 'In the mosque', 'From the mosque', 'To the mosque'] },
    { arabic: 'عَلَى السَّرِيرِ', correct: 'On the bed', options: ['In the bed', 'On the bed', 'Near the bed', 'Under the bed'] },
    { text: 'What is the correct ending for the noun in "فِي الْبَيْت..."?', correct: 'الْبَيْتِ (kasra)', options: ['الْبَيْتُ (damma)', 'الْبَيْتِ (kasra)', 'الْبَيْتَ (fatha)', 'الْبَيْتٌ (tanwin)'] },
    { text: 'Which pronoun would you use for "The Book" (الْكِتَابُ)?', correct: 'هُوَ', options: ['هُوَ', 'هِيَ', 'أَنَا', 'أَنْتَ'] },
    { text: 'Translate: "Where is Aminah?"', correct: 'أَيْنَ آمِنَةُ؟', options: ['أَيْنَ آمِنَةُ؟', 'مَنْ آمِنَةُ؟', 'مَا آمِنَةُ؟', 'أَآمِنَةُ هُنَا؟'] },
    { text: 'What does ذَهَبَ mean?', correct: 'He went', options: ['He left', 'He went', 'He sat', 'He stood'] }
  ],
  
  // ============================================================
  // QUIZ QUESTIONS
  // ============================================================
  quizQuestions: {
    multipleChoice: [
      { prompt: 'What does عَلَى mean?', options: ['In', 'On', 'From', 'To'], correct: 1 },
      { prompt: 'Translate: "In the room"', options: ['فِي الْغُرْفَةُ', 'فِي الْغُرْفَةِ', 'عَلَى الْغُرْفَةِ', 'مِنَ الْغُرْفَةِ'], correct: 1 },
      { prompt: 'Which pronoun is used for a female or feminine object?', options: ['هُوَ', 'أَنْتَ', 'هِيَ', 'أَنَا'], correct: 2 },
      { prompt: 'Translate: "Where are you from?"', options: ['مِنْ أَيْنَ أَنْتَ؟', 'أَيْنَ أَنْتَ؟', 'أَيْنَ هُوَ؟', 'مَنْ أَنْتَ؟'], correct: 0 },
      { prompt: 'What is the opposite of "To" (إِلَى) in a directional sense?', options: ['فِي', 'عَلَى', 'مِنْ', 'أَيْنَ'], correct: 2 },
      { prompt: 'Translate: "The watch is on the bed."', options: ['السَّاعَةُ فِي السَّرِيرِ', 'السَّاعَةُ عَلَى السَّرِيرِ', 'الْكِتَابُ عَلَى السَّرِيرِ', 'السَّاعَةُ عَلَى الْمَكْتَبِ'], correct: 1 },
      { prompt: 'What happens to a noun when a preposition comes before it?', options: ['It becomes plural', 'Its ending changes to kasra (-i)', 'It becomes definite', 'Nothing changes'], correct: 1 },
      { prompt: 'Translate: "He went to the university."', options: ['ذَهَبَ إِلَى الْجَامِعَةِ', 'خَرَجَ مِنَ الْجَامِعَةِ', 'هُوَ فِي الْجَامِعَةِ', 'ذَهَبَ إِلَى الْمَدْرَسَةِ'], correct: 0 },
      { prompt: 'What does أَيْنَ mean?', options: ['Who?', 'What?', 'Where?', 'When?'], correct: 2 },
      { prompt: 'Which of these is a name for a girl?', options: ['مُحَمَّدٌ', 'عَبَّاسٌ', 'آمِنَةُ', 'سَعِيدٌ'], correct: 2 }
    ],
    typing: [
      { prompt: 'Type in Arabic: "In the house"', ideal: 'فِي الْبَيْتِ', accepts: ['في البيت', 'فِي الْبَيْتِ', 'في البيتِ', 'فِي البيت'] },
      { prompt: 'Type in Arabic: "On the desk"', ideal: 'عَلَى الْمَكْتَبِ', accepts: ['على المكتب', 'عَلَى الْمَكْتَبِ', 'على المكتبِ', 'عَلَى المكتب'] }
    ]
  }
};
