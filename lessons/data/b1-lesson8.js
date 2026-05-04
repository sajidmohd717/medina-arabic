/* ============================================================
   b1-lesson8.js — Lesson 8 Data
   ============================================================ */

const LESSON_DATA = {
  book: 'book1',
  lessonNum: 8,
  titleArabic: 'الْحُرُوفُ الشَّمْسِيَّةُ وَالْقَمَرِيَّةُ',
  titleEnglish: 'Sun and Moon Letters',
  summary: 'In this lesson, you will learn the rules of pronunciation for the definite article ال (al-). Some letters cause the "L" to become silent and double the following letter (Sun Letters), while others keep the "L" sound clear (Moon Letters).',
  nextLesson: 'b1-lesson9.html',
  passMark: 8,
  totalQuestions: 12,
  
  // ============================================================
  // VOCABULARY
  // ============================================================
  vocab: [
    // Sun Letter Examples
    { ar: 'الشَّمْسُ', trans: 'ash-shamsu', meaning: 'The sun', type: 'Noun' },
    { ar: 'الرَّجُلُ', trans: 'ar-rajulu', meaning: 'The man', type: 'Noun' },
    { ar: 'الدَّارُ', trans: 'ad-dāru', meaning: 'The house / abode', type: 'Noun' },
    { ar: 'الثَّوْبُ', trans: 'ath-thawbu', meaning: 'The garment', type: 'Noun' },
    { ar: 'الزَّهْرَةُ', trans: 'az-zahratu', meaning: 'The flower', type: 'Noun' },
    { ar: 'السَّمَكُ', trans: 'as-samaku', meaning: 'The fish', type: 'Noun' },
    { ar: 'الظُّهْرُ', trans: 'aẓ-ẓuhru', meaning: 'Noon / Midday', type: 'Noun' },
    { ar: 'اللَّحْمُ', trans: 'al-laḥmu', meaning: 'The meat', type: 'Noun' },
    
    // Moon Letter Examples
    { ar: 'الْقَمَرُ', trans: 'al-qamaru', meaning: 'The moon', type: 'Noun' },
    { ar: 'الْهَوَاءُ', trans: 'al-hawā\'u', meaning: 'The air', type: 'Noun' },
    { ar: 'الْيَدُ', trans: 'al-yadu', meaning: 'The hand', type: 'Noun' },
    { ar: 'الْغَدَاءُ', trans: 'al-ghadā\'u', meaning: 'The lunch', type: 'Noun' },
    { ar: 'الْفَمُ', trans: 'al-famu', meaning: 'The mouth', type: 'Noun' },
    { ar: 'الْمَاءُ', trans: 'al-mā\'u', meaning: 'The water', type: 'Noun' },
    { ar: 'الْعَيْنُ', trans: 'al-ʿaynu', meaning: 'The eye', type: 'Noun' },
    { ar: 'الْجَنَّةُ', trans: 'al-jannatu', meaning: 'The garden / Paradise', type: 'Noun' }
  ],
  
  // ============================================================
  // GRAMMAR BLOCKS
  // ============================================================
  grammarBlocks: [
    {
      title: 'The Definite Article: الـ',
      content: '<p>The Arabic alphabet is divided into two groups of 14 letters each: <strong>Sun Letters</strong> and <strong>Moon Letters</strong>. This division only matters when a word starts with the definite article <strong>الـ</strong> (al-).</p>',
      rule: 'Written the same (الـ), pronounced differently!'
    },
    {
      title: 'Moon Letters (Al-Huruf al-Qamariyyah)',
      content: '<p>When a word starts with a <strong>Moon Letter</strong>, the "L" in <strong>الـ</strong> is pronounced clearly. You will see a <em>sukun</em> ( ْ ) on the <strong>ل</strong>.</p><p>Examples: <strong>الْقَمَرُ</strong> (al-qamaru), <strong>الْكِتَابُ</strong> (al-kitābu).</p>',
      rule: 'L is pronounced clear and separate.'
    },
    {
      title: 'Sun Letters (Al-Huruf ash-Shamsiyyah)',
      content: '<p>When a word starts with a <strong>Sun Letter</strong>, the "L" in <strong>الـ</strong> is silent. Instead, the first letter of the word is doubled with a <em>shadda</em> ( ّ ).</p><p>Examples: <strong>الشَّمْسُ</strong> (ash-shamsu), <strong>الرَّجُلُ</strong> (ar-rajulu).</p>',
      rule: 'L is silent; following letter takes a shadda.'
    },
    {
      title: 'The 14 Sun Letters',
      content: '<p>ت ث د ذ ر ز س ش ص ض ط ظ ل ن</p><p>A helpful tip: Sun letters are mostly "coronal" sounds—they are made with the tip of the tongue near the front teeth.</p>',
      rule: 'Memorize these to know when to skip the "L" sound!'
    }
  ],
  
  // ============================================================
  // EXAMPLE SENTENCES
  // ============================================================
  examples: [
    { ar: 'الشَّمْسُ بَعِيدَةٌ', trans: 'ash-shamsu baʿīdatun', meaning: 'The sun is far.' },
    { ar: 'الْقَمَرُ جَمِيلٌ', trans: 'al-qamaru jamīlun', meaning: 'The moon is beautiful.' },
    { ar: 'الرَّجُلُ فِي الدَّارِ', trans: 'ar-rajulu fī d-dāri', meaning: 'The man is in the house.' },
    { ar: 'السَّمَكُ فِي الْمَاءِ', trans: 'as-samaku fī l-mā\'i', meaning: 'The fish is in the water.' },
    { ar: 'الزَّهْرَةُ جَمِيلَةٌ', trans: 'az-zahratu jamīlatun', meaning: 'The flower is beautiful.' },
    { ar: 'اللَّحْمُ لَذِيذٌ', trans: 'al-laḥmu ladhīdhun', meaning: 'The meat is delicious.' },
    { ar: 'الْهَوَاءُ بَارِدٌ', trans: 'al-hawā\'u bāridun', meaning: 'The air is cold.' },
    { ar: 'الطَّالِبُ جَالِسٌ', trans: 'aṭ-ṭālibu jālisun', meaning: 'The student is sitting.' }
  ],
  
  // ============================================================
  // READING COMPREHENSION
  // ============================================================
  comprehension: {
    title: 'A Sunny Day in the Garden',
    arabic: 'الشَّمْسُ حَارَّةٌ. الرَّجُلُ فِي الْجَنَّةِ. الْجَنَّةُ جَمِيلَةٌ وَالزَّهْرَةُ فِيهَا. السَّمَكُ فِي الْمَاءِ. الْهَوَاءُ بَارِدٌ وَجَمِيلٌ. الرَّجُلُ يَأْكُلُ اللَّحْمَ وَالْخُبْزَ. الْقَمَرُ بَعِيدٌ وَالشَّمْسُ بَعِيدَةٌ أَيْضًا.',
    english: 'The sun is hot. The man is in the garden. The garden is beautiful and the flower is in it. The fish is in the water. The air is cold and beautiful. The man is eating the meat and the bread. The moon is far and the sun is also far.',
    questions: [
      {
        text: 'How is the sun described?',
        options: ['Cold', 'Hot', 'Near', 'Small'],
        correct: 'Hot'
      },
      {
        text: 'Where is the fish?',
        options: ['In the air', 'In the garden', 'In the water', 'On the desk'],
        correct: 'In the water'
      },
      {
        text: 'What is the man eating?',
        options: ['Fish and water', 'Meat and bread', 'Apple and sugar', 'Milk and honey'],
        correct: 'Meat and bread'
      },
      {
        text: 'Is the moon near or far?',
        options: ['Near', 'Far', 'Beautiful but near', 'Hot'],
        correct: 'Far'
      }
    ]
  },
  
  // ============================================================
  // PRACTICE QUESTIONS
  // ============================================================
  practiceQuestions: [
    { arabic: 'الشَّمْسُ', correct: 'The sun (L is silent)', options: ['The sun (L is pronounced)', 'The sun (L is silent)', 'The moon (L is pronounced)', 'The moon (L is silent)'] },
    { arabic: 'الْقَمَرُ', correct: 'The moon (L is pronounced)', options: ['The moon (L is pronounced)', 'The moon (L is silent)', 'The sun (L is pronounced)', 'The sun (L is silent)'] },
    { text: 'Which letter is a Sun Letter?', correct: 'ر', options: ['ب', 'ج', 'ر', 'ق'] },
    { text: 'What happens to the "L" sound before a Sun Letter?', correct: 'It becomes silent', options: ['It is pronounced clearly', 'It becomes silent', 'It becomes a shadda', 'It becomes a fatha'] },
    { text: 'Translate: "The meat is delicious."', correct: 'اللَّحْمُ لَذِيذٌ', options: ['اللَّحْمُ لَذِيذٌ', 'اللَّحْمُ جَمِيلٌ', 'اللَّحْمُ بَارِدٌ', 'اللَّحْمُ حَارٌّ'] },
    { text: 'Which of these is a Moon Letter?', correct: 'ق', options: ['ت', 'ث', 'س', 'ق'] }
  ],
  
  // ============================================================
  // QUIZ QUESTIONS
  // ============================================================
  quizQuestions: {
    multipleChoice: [
      { prompt: 'In the word الشَّمْسُ, is the "L" pronounced?', options: ['Yes', 'No'], correct: 1 },
      { prompt: 'In the word الْقَمَرُ, is the "L" pronounced?', options: ['Yes', 'No'], correct: 0 },
      { prompt: 'Which mark indicates a Sun Letter in writing?', options: ['Sukun on the Lam', 'Shadda on the Sun Letter', 'Fatha on the Alif', 'Kasra on the Lam'], correct: 1 },
      { prompt: 'Which of these is a Sun Letter?', options: ['أ', 'ب', 'ت', 'ج'], correct: 2 },
      { prompt: 'Which of these is a Moon Letter?', options: ['د', 'ذ', 'ر', 'ف'], correct: 3 },
      { prompt: 'Translate: "The man is in the house."', options: ['الرَّجُلُ فِي الدَّارِ', 'الرَّجُلُ عَلَى الدَّارِ', 'الرَّجُلُ مِنْ الدَّارِ', 'الرَّجُلُ إِلَى الدَّارِ'], correct: 0 },
      { prompt: 'How many Sun Letters are there in the Arabic alphabet?', options: ['10', '12', '14', '28'], correct: 2 },
      { prompt: 'Translate: "The air is cold."', options: ['الْهَوَاءُ حَارٌّ', 'الْهَوَاءُ بَارِدٌ', 'الْمَاءُ بَارِدٌ', 'الزَّهْرَةُ بَارِدَةٌ'], correct: 1 },
      { prompt: 'Which word uses a Moon Letter?', options: ['الدَّارُ', 'الثَّوْبُ', 'الْجَنَّةُ', 'السَّمَكُ'], correct: 2 },
      { prompt: 'What is the opposite of الشَّمْسُ?', options: ['الْهَوَاءُ', 'الْقَمَرُ', 'الْمَاءُ', 'الزَّهْرَةُ'], correct: 1 }
    ],
    typing: [
      { prompt: 'Type in Arabic: "The sun" (include the shadda)', ideal: 'الشَّمْسُ', accepts: ['الشمس', 'الشَّمْسُ', 'الشمسُ', 'الشَّمْس'] },
      { prompt: 'Type in Arabic: "The moon" (include the sukun)', ideal: 'الْقَمَرُ', accepts: ['القمر', 'الْقَمَرُ', 'القمرُ', 'الْقَمَر'] }
    ]
  }
};
