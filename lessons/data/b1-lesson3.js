/* ============================================================
   b1-lesson3.js — Lesson 3 Data
   ============================================================ */

const LESSON_DATA = {
  book: 'book1',
  lessonNum: 3,
  titleArabic: 'بَيْتٌ — الْبَيْتُ',
  titleEnglish: 'Indefinite & Definite Nouns',
  summary: 'In this lesson, you will learn the difference between "a house" and "the house". We introduce the definite article ال (al-) and how it changes the ending of a noun. You will also learn your first adjectives to describe things.',
  nextLesson: 'b1-lesson4.html',
  passMark: 6,
  totalQuestions: 10,
  
  // ============================================================
  // VOCABULARY
  // ============================================================
  vocab: [
    // The main concept: Definite article
    { ar: 'الـ', trans: 'al-', meaning: 'The (definite article)', type: 'Particle' },
    
    // Nouns (revisited with definite forms)
    { ar: 'الْبَيْتُ', trans: 'al-baytu', meaning: 'The house', type: 'Noun' },
    { ar: 'الْقَلَمُ', trans: 'al-qalamu', meaning: 'The pen', type: 'Noun' },
    { ar: 'الْكِتَابُ', trans: 'al-kitābu', meaning: 'The book', type: 'Noun' },
    { ar: 'الْمَسْجِدُ', trans: 'al-masjidu', meaning: 'The mosque', type: 'Noun' },
    { ar: 'الْبَابُ', trans: 'al-bābu', meaning: 'The door', type: 'Noun' },
    { ar: 'الْوَلَدُ', trans: 'al-waladu', meaning: 'The boy', type: 'Noun' },
    { ar: 'الرَّجُلُ', trans: 'ar-rajulu', meaning: 'The man', type: 'Noun' },
    { ar: 'الطَّالِبُ', trans: 'aṭ-ṭālibu', meaning: 'The student', type: 'Noun' },
    { ar: 'التُّفَّاحُ', trans: 'at-tuffāḥu', meaning: 'The apple', type: 'Noun' },
    { ar: 'الْمَاءُ', trans: 'al-mā\'u', meaning: 'The water', type: 'Noun' },
    
    // Adjectives (The new focus)
    { ar: 'مَكْسُورٌ', trans: 'maksūrun', meaning: 'Broken', type: 'Adjective' },
    { ar: 'مَفْتُوحٌ', trans: 'maftūḥun', meaning: 'Open', type: 'Adjective' },
    { ar: 'جَالِسٌ', trans: 'jālisun', meaning: 'Sitting', type: 'Adjective' },
    { ar: 'وَاقِفٌ', trans: 'wāqifun', meaning: 'Standing', type: 'Adjective' },
    { ar: 'جَدِيدٌ', trans: 'jadīdun', meaning: 'New', type: 'Adjective' },
    { ar: 'قَدِيمٌ', trans: 'qadīmun', meaning: 'Old', type: 'Adjective' },
    { ar: 'صَغِيرٌ', trans: 'ṣaghīrun', meaning: 'Small', type: 'Adjective' },
    { ar: 'كَبِيرٌ', trans: 'kabīrun', meaning: 'Large / Big', type: 'Adjective' },
    { ar: 'وَسِخٌ', trans: 'wasikhun', meaning: 'Dirty', type: 'Adjective' },
    { ar: 'نَظِيفٌ', trans: 'naẓīfun', meaning: 'Clean', type: 'Adjective' },
    { ar: 'بَارِدٌ', trans: 'bāridun', meaning: 'Cold', type: 'Adjective' },
    { ar: 'حَارٌّ', trans: 'ḥārrun', meaning: 'Hot', type: 'Adjective' },
    { ar: 'قَرِيبٌ', trans: 'qarībun', meaning: 'Near / Close', type: 'Adjective' },
    { ar: 'بَعِيدٌ', trans: 'baʿīdun', meaning: 'Far', type: 'Adjective' },
    { ar: 'ثَقِيلٌ', trans: 'thaqīlun', meaning: 'Heavy', type: 'Adjective' },
    { ar: 'خَفِيفٌ', trans: 'khafīfun', meaning: 'Light (weight)', type: 'Adjective' },
    { ar: 'جَمِيلٌ', trans: 'jamīlun', meaning: 'Beautiful', type: 'Adjective' },
    { ar: 'حُلْوٌ', trans: 'ḥulwun', meaning: 'Sweet', type: 'Adjective' },
    { ar: 'غَنِيٌّ', trans: 'ghaniyyun', meaning: 'Rich', type: 'Adjective' },
    { ar: 'فَقِيرٌ', trans: 'faqīrun', meaning: 'Poor', type: 'Adjective' }
  ],
  
  // ============================================================
  // GRAMMAR BLOCKS
  // ============================================================
  grammarBlocks: [
    {
      title: 'Indefinite vs. Definite',
      content: '<p>In Lesson 1, we saw nouns like <strong>بَيْتٌ</strong> (baytun). The <em>tanwīn</em> (double damma) at the end indicates that the noun is <strong>indefinite</strong> ("a house").</p><p>To make a noun <strong>definite</strong> ("the house"), we add <strong>الـ</strong> (al-) to the beginning. When we do this, the tanwīn is removed and replaced with a single damma.</p>',
      rule: 'بَيْتٌ (a house) + الـ = الْبَيْتُ (the house). Never use الـ and tanwīn on the same word!'
    },
    {
      title: 'Nominal Sentences',
      content: '<p>A <strong>nominal sentence</strong> (Al-Jumlah al-Ismiyyah) is a sentence that starts with a noun. It usually has two parts:</p><ul><li><strong>Mubtada\'</strong> (Subject): What you are talking about (usually definite).</li><li><strong>Khabar</strong> (Predicate): What you are saying about the subject (usually indefinite).</li></ul>',
      rule: 'الْقَلَمُ (Subject) + مَكْسُورٌ (Predicate) = "The pen is broken."'
    },
    {
      title: 'Adjectives in Sentences',
      content: '<p>Adjectives follow the subject to describe it. In a simple sentence, the subject is definite (with الـ) and the adjective is indefinite (with tanwīn).</p>',
      rule: 'الْمَاءُ بَارِدٌ = "The water is cold."'
    }
  ],
  
  // ============================================================
  // EXAMPLE SENTENCES
  // ============================================================
  examples: [
    { ar: 'الْقَلَمُ مَكْسُورٌ', trans: 'al-qalamu maksūrun', meaning: 'The pen is broken.' },
    { ar: 'الْبَابُ مَفْتُوحٌ', trans: 'al-bābu maftūḥun', meaning: 'The door is open.' },
    { ar: 'الْوَلَدُ جَالِسٌ', trans: 'al-waladu jālisun', meaning: 'The boy is sitting.' },
    { ar: 'الْمُدَرِّسُ وَاقِفٌ', trans: 'al-mudarrisu wāqifun', meaning: 'The teacher is standing.' },
    { ar: 'الْكِتَابُ جَدِيدٌ وَالْقَلَمُ قَدِيمٌ', trans: 'al-kitābu jadīdun wal-qalamu qadīmun', meaning: 'The book is new and the pen is old.' },
    { ar: 'الْحِمَارُ صَغِيرٌ وَالْحِصَانُ كَبِيرٌ', trans: 'al-ḥimāru ṣaghīrun wal-ḥiṣānu kabīrun', meaning: 'The donkey is small and the horse is large.' },
    { ar: 'الْمَاءُ بَارِدٌ', trans: 'al-mā\'u bāridun', meaning: 'The water is cold.' },
    { ar: 'الْقَمَرُ جَمِيلٌ', trans: 'al-qamaru jamīlun', meaning: 'The moon is beautiful.' },
    { ar: 'الْبَيْتُ قَرِيبٌ وَالْمَسْجِدُ بَعِيدٌ', trans: 'al-baytu qarībun wal-masjidu baʿīdun', meaning: 'The house is near and the mosque is far.' },
    { ar: 'التُّفَّاحُ حُلْوٌ', trans: 'at-tuffāḥu ḥulwun', meaning: 'The apple is sweet.' }
  ],
  
  // ============================================================
  // READING COMPREHENSION
  // ============================================================
  comprehension: {
    title: 'The New Classroom',
    arabic: 'الْفَصْلُ جَدِيدٌ وَنَظِيفٌ. الْبَابُ مَفْتُوحٌ وَالْمَكْتَبُ مَكْسُورٌ. الْمُدَرِّسُ وَاقِفٌ وَالطَّالِبُ جَالِسٌ. الْكِتَابُ جَدِيدٌ وَالْقَلَمُ قَدِيمٌ. الْمَاءُ بَارِدٌ وَالتُّفَّاحُ حُلْوٌ. الْقَمَرُ جَمِيلٌ.',
    english: 'The classroom is new and clean. The door is open and the desk is broken. The teacher is standing and the student is sitting. The book is new and the pen is old. The water is cold and the apple is sweet. The moon is beautiful.',
    questions: [
      {
        text: 'What is the condition of the classroom?',
        options: ['Old and dirty', 'New and clean', 'Large and beautiful', 'Small and cold'],
        correct: 'New and clean'
      },
      {
        text: 'Is the student standing or sitting?',
        options: ['Standing', 'Sitting', 'Walking', 'Running'],
        correct: 'Sitting'
      },
      {
        text: 'Which of these is described as "old" (قَدِيم)?',
        options: ['The book', 'The desk', 'The pen', 'The classroom'],
        correct: 'The pen'
      },
      {
        text: 'How is the apple described?',
        options: ['Cold', 'Sweet', 'Large', 'Beautiful'],
        correct: 'Sweet'
      }
    ]
  },
  
  // ============================================================
  // PRACTICE QUESTIONS
  // ============================================================
  practiceQuestions: [
    { arabic: 'الْقَلَمُ مَكْسُورٌ', correct: 'The pen is broken.', options: ['The pen is new.', 'The pen is broken.', 'The pen is old.', 'The pen is long.'] },
    { arabic: 'الْبَابُ مَفْتُوحٌ', correct: 'The door is open.', options: ['The door is closed.', 'The door is open.', 'The door is large.', 'The door is small.'] },
    { text: 'How do you say "The house" in Arabic?', correct: 'الْبَيْتُ', options: ['بَيْتٌ', 'الْبَيْتُ', 'بَيْتُ', 'الْبَيْتٌ'] },
    { text: 'Which word means "Broken"?', correct: 'مَكْسُورٌ', options: ['مَفْتُوحٌ', 'مَكْسُورٌ', 'جَدِيدٌ', 'قَدِيمٌ'] },
    { text: 'What happens to the tanwīn when الـ is added?', correct: 'It is removed and replaced with a single damma.', options: ['Nothing changes.', 'It is removed and replaced with a single damma.', 'It becomes a fatha.', 'It becomes a kasra.'] },
    { text: 'Translate: "The water is cold."', correct: 'الْمَاءُ بَارِدٌ', options: ['الْمَاءُ بَارِدٌ', 'الْمَاءُ حَارٌّ', 'الْمَاءُ نَظِيفٌ', 'الْمَاءُ جَمِيلٌ'] }
  ],
  
  // ============================================================
  // QUIZ QUESTIONS
  // ============================================================
  quizQuestions: {
    multipleChoice: [
      { prompt: 'What is the definite form of بَيْتٌ?', options: ['الْبَيْتٌ', 'بَيْتُ', 'الْبَيْتُ', 'الْبَيْتَ'], correct: 2 },
      { prompt: 'Translate: "The teacher is standing."', options: ['الْمُدَرِّسُ جَالِسٌ', 'الْمُدَرِّسُ وَاقِفٌ', 'الطَّالِبُ وَاقِفٌ', 'الرَّجُلُ جَالِسٌ'], correct: 1 },
      { prompt: 'What does مَكْسُورٌ mean?', options: ['Open', 'Broken', 'New', 'Old'], correct: 1 },
      { prompt: 'Which of these means "The apple is sweet"?', options: ['التُّفَّاحُ حَارٌّ', 'التُّفَّاحُ بَارِدٌ', 'التُّفَّاحُ حُلْوٌ', 'الْمَاءُ حُلْوٌ'], correct: 2 },
      { prompt: 'Translate: "The book is new."', options: ['الْكِتَابُ قَدِيمٌ', 'الْكِتَابُ جَدِيدٌ', 'الْقَلَمُ جَدِيدٌ', 'الْبَيْتُ جَدِيدٌ'], correct: 1 },
      { prompt: 'What is the opposite of قَرِيبٌ (near)?', options: ['بَعِيدٌ', 'كَبِيرٌ', 'صَغِيرٌ', 'جَدِيدٌ'], correct: 0 },
      { prompt: 'Translate: "The shirt is dirty."', options: ['الْقَمِيصُ نَظِيفٌ', 'الْقَمِيصُ وَسِخٌ', 'الْمِنْدِيلُ وَسِخٌ', 'الْبَيْتُ وَسِخٌ'], correct: 1 },
      { prompt: 'Which word means "Heavy"?', options: ['خَفِيفٌ', 'ثَقِيلٌ', 'كَبِيرٌ', 'صَغِيرٌ'], correct: 1 }
    ],
    typing: [
      { prompt: 'Type in Arabic: "The pen is broken."', ideal: 'الْقَلَمُ مَكْسُورٌ', accepts: ['القلم مكسور', 'الْقَلَمُ مَكْسُورٌ', 'القلم مكسورٌ', 'الْقَلَمُ مكسور'] },
      { prompt: 'Type in Arabic: "The water is cold."', ideal: 'الْمَاءُ بَارِدٌ', accepts: ['الماء بارد', 'الْمَاءُ بَارِدٌ', 'الماء باردٌ', 'الْمَاءُ بارد'] }
    ]
  }
};
