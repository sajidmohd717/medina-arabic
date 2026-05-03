/* ============================================================
   b1-lesson5.js — Lesson 5 Data
   ============================================================ */

const LESSON_DATA = {
  book: 'book1',
  lessonNum: 5,
  titleArabic: 'مُضَافٌ وَمُضَافٌ إِلَيْهِ',
  titleEnglish: 'The Possessive Construction (Iḍāfa)',
  summary: 'In this lesson, you will learn how to express possession (like "Bilal\'s pen" or "the teacher\'s book") using the Iḍāfa construction. You will also learn about the vocative particle يَا (O...), adverbs of place like تَحْتَ (under), and how to ask "Whose?" using مَنْ.',
  nextLesson: 'b1-lesson6.html',
  passMark: 8,
  totalQuestions: 12,
  
  // ============================================================
  // VOCABULARY
  // ============================================================
  vocab: [
    // Possessive concept words
    { ar: 'مُضَافٌ', trans: 'muḍāfun', meaning: 'The possessed (first part)', type: 'Grammar' },
    { ar: 'مُضَافٌ إِلَيْهِ', trans: 'muḍāfun ilayhi', meaning: 'The possessor (second part)', type: 'Grammar' },
    
    // Family & People
    { ar: 'الِابْنُ', trans: 'al-ibnu', meaning: 'The son', type: 'Noun' },
    { ar: 'الْبِنْتُ', trans: 'al-bintu', meaning: 'The daughter / girl', type: 'Noun' },
    { ar: 'الْعَمُّ', trans: 'al-ʿammu', meaning: 'Paternal uncle (father\'s brother)', type: 'Noun' },
    { ar: 'الْخَالُ', trans: 'al-khālu', meaning: 'Maternal uncle (mother\'s brother)', type: 'Noun' },
    { ar: 'الرَّسُولُ', trans: 'ar-rasūlu', meaning: 'The messenger', type: 'Noun' },
    { ar: 'الْمُهَنْدِسُ', trans: 'al-muhandisu', meaning: 'The engineer', type: 'Noun' },
    { ar: 'طَبِيبٌ', trans: 'ṭabībun', meaning: 'A doctor', type: 'Noun' },
    
    // Objects & Places
    { ar: 'الْكَعْبَةُ', trans: 'al-kaʿbatu', meaning: 'The Ka\'bah', type: 'Noun' },
    { ar: 'الِاسْمُ', trans: 'al-ismu', meaning: 'The name', type: 'Noun' },
    { ar: 'السَّيَّارَةُ', trans: 'as-sayyāratu', meaning: 'The car', type: 'Noun' },
    { ar: 'الْحَقِيبَةُ', trans: 'al-ḥaqībatu', meaning: 'The bag / suitcase', type: 'Noun' },
    { ar: 'الشَّارِعُ', trans: 'ash-shāriʿu', meaning: 'The street / road', type: 'Noun' },
    { ar: 'دَفْتَرٌ', trans: 'daftarun', meaning: 'A notebook', type: 'Noun' },
    
    // Adverbs & Particles
    { ar: 'تَحْتَ', trans: 'taḥta', meaning: 'Under / Below', type: 'Adverb' },
    { ar: 'هُنَاكَ', trans: 'hunāka', meaning: 'There', type: 'Adverb' },
    { ar: 'يَا', trans: 'yā', meaning: 'O... (Vocative particle)', type: 'Particle' },
    { ar: 'مُغْلَقٌ', trans: 'mughlaqun', meaning: 'Closed', type: 'Adjective' }
  ],
  
  // ============================================================
  // GRAMMAR BLOCKS
  // ============================================================
  grammarBlocks: [
    {
      title: 'The Iḍāfa Construction',
      content: '<p>The <strong>Iḍāfa</strong> is a way to join two nouns to show possession or relationship (e.g., "The Teacher\'s Book"). It consists of two parts:</p><ul><li><strong>Muḍāf</strong> (The Possessed): The first noun. It <u>never</u> takes الـ and <u>never</u> takes tanwīn.</li><li><strong>Muḍāf Ilayhi</strong> (The Possessor): The second noun. It is <u>always</u> in the Genitive case (Majrūr), ending in a kasra (i).</li></ul>',
      rule: 'كِتَابُ (Muḍāf) + الْمُدَرِّسِ (Muḍāf Ilayhi) = كِتَابُ الْمُدَرِّسِ (The Teacher\'s Book).'
    },
    {
      title: 'Rules of the Muḍāf',
      content: '<p>The first word (the thing being owned) has strict rules:</p><ol><li>No <strong>الـ</strong> (al-) prefix.</li><li>No <strong>Tanwīn</strong> (un/in/an) ending. It usually ends in a single damma.</li></ol>',
      rule: 'Wrong: الْكِتَابُ مُحَمَّدٍ ❌ | Wrong: كِتَابٌ مُحَمَّدٍ ❌ | Correct: كِتَابُ مُحَمَّدٍ ✅'
    },
    {
      title: 'Vocative Particle: يَا',
      content: '<p>When you call someone using <strong>يَا</strong> (O...), the noun that follows loses its tanwīn and takes only a single damma.</p>',
      rule: 'مُحَمَّدٌ → يَا مُحَمَّدُ (O Muhammad!) | أُسْتَاذٌ → يَا أُسْتَاذُ (O Teacher!)'
    },
    {
      title: 'Adverbs of Place: تَحْتَ',
      content: '<p>The word <strong>تَحْتَ</strong> (under) acts like a Muḍāf. The noun following it will be Majrūr (ending in kasra).</p>',
      rule: 'تَحْتَ الْمَكْتَبِ = Under the desk.'
    }
  ],
  
  // ============================================================
  // EXAMPLE SENTENCES
  // ============================================================
  examples: [
    { ar: 'كِتَابُ مُحَمَّدٍ عَلَى الْمَكْتَبِ', trans: 'kitābu muḥammadin ʿalā l-maktabi', meaning: 'Muhammad\'s book is on the desk.' },
    { ar: 'أَيْنَ حَقِيبَةُ الْمُدَرِّسِ؟', trans: 'ayna ḥaqībatu l-mudarrisi?', meaning: 'Where is the teacher\'s bag?' },
    { ar: 'هِيَ تَحْتَ الْمَكْتَبِ', trans: 'hiya taḥta l-maktabi', meaning: 'It is under the desk.' },
    { ar: 'سَيَّارَةُ الْعَبَّاسِ فِي الشَّارِعِ', trans: 'sayyāratu l-ʿabbāsi fī sh-shāriʿi', meaning: 'Abbas\'s car is in the street.' },
    { ar: 'ابْنُ مَنْ أَنْتَ؟ أَنَا ابْنُ خَالِدٍ', trans: 'ibnu man anta? ana bnu khālidin', meaning: 'Whose son are you? I am the son of Khalid.' },
    { ar: 'يَا بِلَالُ، أَهَذَا كِتَابُ حَامِدٍ؟', trans: 'yā bilālu, a-hādhā kitābu ḥāmidin?', meaning: 'O Bilal, is this Hamid\'s book?' },
    { ar: 'اسْمُ الْوَلَدِ سَعِيدٌ وَاسْمُ الْبِنْتِ آمِنَةُ', trans: 'ismu l-waladi saʿīdun wa-smu l-binti āminatu', meaning: 'The boy\'s name is Saed and the girl\'s name is Aminah.' },
    { ar: 'بَيْتُ الطَّبِيبِ بَعِيدٌ', trans: 'baytu ṭ-ṭabībi baʿīdun', meaning: 'The doctor\'s house is far.' }
  ],
  
  // ============================================================
  // READING COMPREHENSION
  // ============================================================
  comprehension: {
    title: 'A Visit to the Teacher',
    arabic: 'هَذَا بَيْتُ الْمُدَرِّسِ. بَيْتُ الْمُدَرِّسِ كَبِيرٌ وَجَمِيلٌ. سَيَّارَةُ الْمُدَرِّسِ أَمَامَ الْبَيْتِ. حَقِيبَةُ الْمُدَرِّسِ تَحْتَ الْمَكْتَبِ. ابْنُ الْمُدَرِّسِ فِي الشَّارِعِ. هُوَ طَالِبٌ جَدِيدٌ فِي الْجَامِعَةِ.',
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
    { arabic: 'كِتَابُ اللهِ', correct: 'The Book of Allah', options: ['The Book of Allah', 'A book and Allah', 'Allah is a book', 'The house of Allah'] },
    { arabic: 'تَحْتَ السَّيَّارَةِ', correct: 'Under the car', options: ['In the car', 'On the car', 'Under the car', 'Behind the car'] },
    { text: 'Which is the correct way to say "Hamid\'s pen"?', correct: 'قَلَمُ حَامِدٍ', options: ['الْقَلَمُ حَامِدٌ', 'قَلَمٌ حَامِدٍ', 'قَلَمُ حَامِدٍ', 'قَلَمُ حَامِدٌ'] },
    { text: 'What happens to the word مُحَمَّدٌ after "يَا"?', correct: 'It becomes يَا مُحَمَّدُ (single damma)', options: ['It stays مُحَمَّدٌ', 'It becomes يَا مُحَمَّدُ (single damma)', 'It becomes يَا مُحَمَّدِ (kasra)', 'It becomes يَا مُحَمَّدَ (fatha)'] },
    { text: 'In "كِتَابُ الْمُدَرِّسِ", which word is the Muḍāf Ilayhi?', correct: 'الْمُدَرِّسِ', options: ['كِتَابُ', 'الْمُدَرِّسِ'] },
    { text: 'Translate: "Whose son is this?"', correct: 'ابْنُ مَنْ هَذَا؟', options: ['ابْنُ مَنْ هَذَا؟', 'مَنْ هَذَا الِابْنُ؟', 'أَيْنَ الِابْنُ؟', 'مَا اسْمُ الِابْنِ؟'] }
  ],
  
  // ============================================================
  // QUIZ QUESTIONS
  // ============================================================
  quizQuestions: {
    multipleChoice: [
      { prompt: 'What are the two rules for the Muḍāf (the possessed noun)?', options: ['Takes الـ and tanwīn', 'No الـ and no tanwīn', 'Only takes الـ', 'Only takes tanwīn'], correct: 1 },
      { prompt: 'Translate: "The Teacher\'s Desk"', options: ['مَكْتَبُ الْمُدَرِّسِ', 'مَكْتَبٌ الْمُدَرِّسِ', 'الْمَكْتَبُ الْمُدَرِّسُ', 'مَكْتَبُ الْمُدَرِّسُ'], correct: 0 },
      { prompt: 'What is the case of the Muḍāf Ilayhi (the possessor)?', options: ['Nominative (Damma)', 'Accusative (Fatha)', 'Genitive (Kasra)', 'It doesn\'t change'], correct: 2 },
      { prompt: 'Translate: "O Bilal!"', options: ['يَا بِلَالٌ', 'يَا بِلَالِ', 'يَا بِلَالُ', 'يَا بِلَالاً'], correct: 2 },
      { prompt: 'Which word means "Paternal Uncle"?', options: ['الْخَالُ', 'الْعَمُّ', 'الِابْنُ', 'الْمُهَنْدِسُ'], correct: 1 },
      { prompt: 'Translate: "The doctor\'s car is beautiful."', options: ['سَيَّارَةُ الطَّبِيبِ جَمِيلَةٌ', 'سَيَّارَةُ الطَّبِيبِ جَمِيلٌ', 'الطَّبِيبُ سَيَّارَةٌ جَمِيلَةٌ', 'سَيَّارَةٌ الطَّبِيبِ جَمِيلَةٌ'], correct: 0 },
      { prompt: 'What does تَحْتَ mean?', options: ['Above', 'In front of', 'Behind', 'Under'], correct: 3 },
      { prompt: 'Translate: "The Messenger of Allah"', options: ['رَسُولُ اللهِ', 'الرَّسُولُ اللهِ', 'رَسُولٌ اللهِ', 'رَسُولُ اللهُ'], correct: 0 },
      { prompt: 'Whose bag is this? (Asking about a feminine object: حَقِيبَة)', options: ['حَقِيبَةُ مَنْ هَذَا؟', 'حَقِيبَةُ مَنْ هَذِهِ؟', 'أَيْنَ الْحَقِيبَةُ؟', 'مَا هَذِهِ الْحَقِيبَةُ؟'], correct: 1 },
      { prompt: 'What is the correct ending for "خَالِد" in "بَيْتُ خَالِد..."?', options: ['خَالِدٌ', 'خَالِدُ', 'خَالِدٍ', 'خَالِدَ'], correct: 2 }
    ],
    typing: [
      { prompt: 'Type in Arabic: "The Book of Allah"', ideal: 'كِتَابُ اللهِ', accepts: ['كتاب الله', 'كِتَابُ اللهِ', 'كتابُ اللهِ', 'كِتَابُ الله'] },
      { prompt: 'Type in Arabic: "The Teacher\'s Pen"', ideal: 'قَلَمُ الْمُدَرِّسِ', accepts: ['قلم المدرس', 'قَلَمُ الْمُدَرِّسِ', 'قلمُ المدرسِ', 'قَلَمُ المدرس'] }
    ]
  }
};
