/* ============================================================
   b1-lesson13.js — Lesson 13 Data
   ============================================================ */

const LESSON_DATA = {
  book: 'book1',
  lessonNum: 13,
  titleArabic: 'ذَهَبَ — ذَهَبَتْ',
  titleEnglish: 'Past Tense Verbs',
  summary: 'In this lesson, you will learn your first clear past-tense pattern: he did and she did. Arabic marks a feminine past-tense verb with a quiet تْ ending, as in ذَهَبَتْ.',
  nextLesson: 'b1-lesson14.html',
  passMark: 8,
  totalQuestions: 12,

  // ============================================================
  // VOCABULARY
  // ============================================================
  vocab: [
    { ar: 'ذَهَبَتْ', trans: 'dhahabat', meaning: 'She went', type: 'Verb' },
    { ar: 'خَرَجَتْ', trans: 'kharajat', meaning: 'She left / went out', type: 'Verb' },
    { ar: 'دَخَلَ', trans: 'dakhala', meaning: 'He entered', type: 'Verb' },
    { ar: 'دَخَلَتْ', trans: 'dakhalat', meaning: 'She entered', type: 'Verb' },
    { ar: 'جَلَسَ', trans: 'jalasa', meaning: 'He sat', type: 'Verb' },
    { ar: 'جَلَسَتْ', trans: 'jalasat', meaning: 'She sat', type: 'Verb' },
    { ar: 'كَتَبَ', trans: 'kataba', meaning: 'He wrote', type: 'Verb' },
    { ar: 'كَتَبَتْ', trans: 'katabat', meaning: 'She wrote', type: 'Verb' },
    { ar: 'قَرَأَ', trans: 'qaraʾa', meaning: 'He read', type: 'Verb' },
    { ar: 'قَرَأَتْ', trans: 'qaraʾat', meaning: 'She read', type: 'Verb' },
    { ar: 'رَجَعَ', trans: 'rajaʿa', meaning: 'He returned', type: 'Verb' },
    { ar: 'رَجَعَتْ', trans: 'rajaʿat', meaning: 'She returned', type: 'Verb' }
  ],

  // ============================================================
  // GRAMMAR BLOCKS
  // ============================================================
  grammarBlocks: [
    {
      title: 'The Past Tense for "He"',
      content: '<p>The basic past-tense verb form often means <strong>he did</strong>. You already met <strong>ذَهَبَ</strong> (he went) and <strong>خَرَجَ</strong> (he left). This lesson makes that pattern clear.</p><ul><li><strong>ذَهَبَ</strong> — he went</li><li><strong>دَخَلَ</strong> — he entered</li><li><strong>جَلَسَ</strong> — he sat</li><li><strong>كَتَبَ</strong> — he wrote</li></ul>',
      rule: 'The plain past-tense form normally means "he did".'
    },
    {
      title: 'The Past Tense for "She"',
      content: '<p>To say <strong>she did</strong>, Arabic adds a quiet <strong>تْ</strong> to the end of the past-tense verb.</p><ul><li><strong>ذَهَبَ</strong> (he went) → <strong>ذَهَبَتْ</strong> (she went)</li><li><strong>دَخَلَ</strong> (he entered) → <strong>دَخَلَتْ</strong> (she entered)</li><li><strong>جَلَسَ</strong> (he sat) → <strong>جَلَسَتْ</strong> (she sat)</li><li><strong>كَتَبَ</strong> (he wrote) → <strong>كَتَبَتْ</strong> (she wrote)</li></ul>',
      rule: 'He did: فَعَلَ pattern. She did: add تْ at the end.'
    },
    {
      title: 'Verb First or Noun First',
      content: '<p>Arabic can place the verb before the doer, especially in simple past-tense sentences.</p><ul><li><strong>ذَهَبَ الطَّالِبُ</strong> — The student went.</li><li><strong>ذَهَبَتِ الطَّبِيبَةُ</strong> — The doctor went.</li></ul><p>If the doer comes first, the verb still matches the doer in gender in these simple sentences:</p><ul><li><strong>الطَّالِبُ ذَهَبَ</strong> — The student went.</li><li><strong>الطَّبِيبَةُ ذَهَبَتْ</strong> — The doctor went.</li></ul>',
      rule: 'Use the masculine verb with a masculine doer and the feminine verb with a feminine doer.'
    }
  ],

  // ============================================================
  // EXAMPLE SENTENCES
  // ============================================================
  examples: [
    { ar: 'ذَهَبَ الطَّالِبُ إِلَى الْمَسْجِدِ', trans: 'dhahaba ṭ-ṭālibu ilā l-masjidi', meaning: 'The student went to the mosque.' },
    { ar: 'ذَهَبَتِ الطَّبِيبَةُ إِلَى الْمُسْتَشْفَى', trans: 'dhahabati ṭ-ṭabībatu ilā l-mustashfā', meaning: 'The doctor went to the hospital.' },
    { ar: 'دَخَلَ الْمُدَرِّسُ الْفَصْلَ', trans: 'dakhala l-mudarrisu l-faṣla', meaning: 'The teacher entered the classroom.' },
    { ar: 'دَخَلَتْ آمِنَةُ الْغُرْفَةَ', trans: 'dakhalat āminatu l-ghurfata', meaning: 'Aminah entered the room.' },
    { ar: 'جَلَسَ خَالِدٌ عَلَى الْكُرْسِيِّ', trans: 'jalasa khālidun ʿalā l-kursiyyi', meaning: 'Khalid sat on the chair.' },
    { ar: 'جَلَسَتِ الْبِنْتُ فِي الْغُرْفَةِ', trans: 'jalasati l-bintu fī l-ghurfati', meaning: 'The girl sat in the room.' },
    { ar: 'كَتَبَ الْوَلَدُ الدَّرْسَ', trans: 'kataba l-waladu d-darsa', meaning: 'The boy wrote the lesson.' },
    { ar: 'قَرَأَتِ الطَّالِبَةُ الْكِتَابَ', trans: 'qaraʾati ṭ-ṭālibatu l-kitāba', meaning: 'The female student read the book.' }
  ],

  // ============================================================
  // READING COMPREHENSION
  // ============================================================
  comprehension: {
    title: 'Morning at School',
    arabic: 'ذَهَبَ خَالِدٌ إِلَى الْمَدْرَسَةِ صَبَاحًا. دَخَلَ الْفَصْلَ وَجَلَسَ عَلَى الْكُرْسِيِّ. عِنْدَهُ كِتَابٌ جَدِيدٌ وَقَلَمٌ أَحْمَرُ. قَرَأَ خَالِدٌ الدَّرْسَ وَكَتَبَ كَلِمَةً فِي الدَّفْتَرِ. دَخَلَتْ آمِنَةُ الْفَصْلَ أَيْضًا. جَلَسَتْ قَرِيبَةً مِنَ النَّافِذَةِ. قَرَأَتْ آمِنَةُ الْكِتَابَ ثُمَّ كَتَبَتْ فِي الدَّفْتَرِ. بَعْدَ الدَّرْسِ رَجَعَ خَالِدٌ إِلَى الْبَيْتِ وَرَجَعَتْ آمِنَةُ إِلَى بَيْتِهَا.',
    english: 'Khalid went to the school in the morning. He entered the classroom and sat on the chair. He had a new book and a red pen. Khalid read the lesson and wrote a word in the notebook. Aminah entered the classroom too. She sat near the window. Aminah read the book, then wrote in the notebook. After the lesson, Khalid returned home and Aminah returned to her house.',
    questions: [
      {
        text: 'Where did Khalid go in the morning?',
        options: ['To the mosque', 'To the school', 'To the hospital', 'To Kuwait'],
        correct: 'To the school'
      },
      {
        text: 'What did Khalid do after entering the classroom?',
        options: ['He sat on the chair', 'He left the school', 'He opened the door', 'He went to the market'],
        correct: 'He sat on the chair'
      },
      {
        text: 'Where did Aminah sit?',
        options: ['Near the window', 'Under the desk', 'In the hospital', 'On the table'],
        correct: 'Near the window'
      },
      {
        text: 'What did both Khalid and Aminah do?',
        options: ['They read and wrote', 'They slept', 'They opened the house', 'They went to Kuwait'],
        correct: 'They read and wrote'
      }
    ]
  },

  // ============================================================
  // PRACTICE QUESTIONS
  // ============================================================
  practiceQuestions: [
    { arabic: 'ذَهَبَ الطَّالِبُ', correct: 'The student went', options: ['The student went', 'The student sat', 'The teacher entered', 'The girl returned'] },
    { arabic: 'ذَهَبَتِ الطَّبِيبَةُ', correct: 'The doctor went', options: ['The doctor went', 'The doctor wrote', 'The student read', 'The teacher sat'] },
    { text: 'What ending marks "she did" in these past-tense verbs?', correct: 'تْ', options: ['تْ', 'هُ', 'الْ', 'ون'] },
    { text: 'Choose the feminine form of دَخَلَ.', correct: 'دَخَلَتْ', options: ['دَخَلَ', 'دَخَلَتْ', 'دَخَلْتَ', 'يَدْخُلُ'] },
    { text: 'Which means "he read"?', correct: 'قَرَأَ', options: ['قَرَأَ', 'قَرَأَتْ', 'كَتَبَتْ', 'جَلَسَتْ'] },
    { text: 'Complete: آمِنَةُ ___ فِي الدَّفْتَرِ.', correct: 'كَتَبَتْ', options: ['كَتَبَ', 'كَتَبَتْ', 'قَرَأَ', 'جَلَسَ'] }
  ],

  // ============================================================
  // QUIZ QUESTIONS
  // ============================================================
  quizQuestions: {
    multipleChoice: [
      { prompt: 'What does دَخَلَ mean?', options: ['He entered', 'She entered', 'He sat', 'She wrote'], correct: 0 },
      { prompt: 'What does دَخَلَتْ mean?', options: ['He entered', 'She entered', 'He returned', 'She read'], correct: 1 },
      { prompt: 'Choose the correct translation: "She sat."', options: ['جَلَسَ', 'جَلَسَتْ', 'دَخَلَتْ', 'رَجَعَ'], correct: 1 },
      { prompt: 'Choose the correct translation: "He wrote."', options: ['كَتَبَ', 'كَتَبَتْ', 'قَرَأَتْ', 'جَلَسَ'], correct: 0 },
      { prompt: 'Complete: خَالِدٌ ___ إِلَى الْمَدْرَسَةِ.', options: ['ذَهَبَتْ', 'ذَهَبَ', 'جَلَسَتْ', 'دَخَلَتْ'], correct: 1 },
      { prompt: 'Complete: آمِنَةُ ___ إِلَى الْبَيْتِ.', options: ['رَجَعَ', 'رَجَعَتْ', 'قَرَأَ', 'كَتَبَ'], correct: 1 },
      { prompt: 'What is the feminine form of قَرَأَ?', options: ['قَرَأْتَ', 'قَرَأَتْ', 'قَرَأَ', 'يَقْرَأُ'], correct: 1 },
      { prompt: 'What is the masculine form of كَتَبَتْ?', options: ['كَتَبَ', 'كَتَبْتَ', 'كَتَبَتْ', 'يَكْتُبُ'], correct: 0 },
      { prompt: 'Translate: "The teacher entered the classroom."', options: ['دَخَلَ الْمُدَرِّسُ الْفَصْلَ', 'دَخَلَتِ الْمُدَرِّسُ الْفَصْلَ', 'جَلَسَ الْمُدَرِّسُ الْفَصْلَ', 'رَجَعَتِ الْمُدَرِّسُ الْفَصْلَ'], correct: 0 },
      { prompt: 'Which pair means "he returned / she returned"?', options: ['جَلَسَ / جَلَسَتْ', 'رَجَعَ / رَجَعَتْ', 'كَتَبَ / كَتَبَتْ', 'قَرَأَ / قَرَأَتْ'], correct: 1 }
    ],
    typing: [
      { prompt: 'Type in Arabic: "She went"', ideal: 'ذَهَبَتْ', accepts: ['ذهبت', 'ذَهَبَتْ', 'ذَهَبَت'] },
      { prompt: 'Type in Arabic: "He entered"', ideal: 'دَخَلَ', accepts: ['دخل', 'دَخَلَ'] }
    ]
  }
};
