/* ============================================================
   b1-lesson12.js — Lesson 12 Data
   ============================================================ */

const LESSON_DATA = {
  book: 'book1',
  lessonNum: 12,
  titleArabic: 'الَّذِي — الَّتِي',
  titleEnglish: 'Relative Pronouns',
  summary: 'In this lesson, you will learn how Arabic links a definite noun to a describing sentence using الَّذِي and الَّتِي. This lets you say "the student who...", "the room which...", and build longer, clearer sentences.',
  nextLesson: 'b1-lesson13.html',
  passMark: 8,
  totalQuestions: 12,

  // ============================================================
  // VOCABULARY
  // ============================================================
  vocab: [
    { ar: 'الَّذِي', trans: 'alladhī', meaning: 'Who / which / that (masculine)', type: 'Relative pronoun' },
    { ar: 'الَّتِي', trans: 'allatī', meaning: 'Who / which / that (feminine)', type: 'Relative pronoun' },
    { ar: 'مَرِيضٌ', trans: 'marīḍun', meaning: 'Sick / ill', type: 'Adjective' },
    { ar: 'مَرِيضَةٌ', trans: 'marīḍatun', meaning: 'Sick / ill (feminine)', type: 'Adjective' },
    { ar: 'غَائِبٌ', trans: 'ghāʾibun', meaning: 'Absent', type: 'Adjective' },
    { ar: 'غَائِبَةٌ', trans: 'ghāʾibatun', meaning: 'Absent (feminine)', type: 'Adjective' },
    { ar: 'طَوِيلٌ', trans: 'ṭawīlun', meaning: 'Tall / long', type: 'Adjective' },
    { ar: 'طَوِيلَةٌ', trans: 'ṭawīlatun', meaning: 'Tall / long (feminine)', type: 'Adjective' },
    { ar: 'قَصِيرٌ', trans: 'qaṣīrun', meaning: 'Short', type: 'Adjective' },
    { ar: 'قَصِيرَةٌ', trans: 'qaṣīratun', meaning: 'Short (feminine)', type: 'Adjective' },
    { ar: 'مَشْغُولٌ', trans: 'mashghūlun', meaning: 'Busy / occupied', type: 'Adjective' },
    { ar: 'مَشْغُولَةٌ', trans: 'mashghūlatun', meaning: 'Busy / occupied (feminine)', type: 'Adjective' }
  ],

  // ============================================================
  // GRAMMAR BLOCKS
  // ============================================================
  grammarBlocks: [
    {
      title: 'What Is a Relative Pronoun?',
      content: '<p>A relative pronoun connects a noun to extra information about it. In English, we use words like "who", "which", or "that". Arabic uses <strong>الَّذِي</strong> for a masculine noun and <strong>الَّتِي</strong> for a feminine noun.</p><ul><li><strong>الطَّالِبُ الَّذِي فِي الْفَصْلِ</strong> — the student who is in the classroom</li><li><strong>الْغُرْفَةُ الَّتِي فِيهَا خَالِدٌ</strong> — the room which Khalid is in</li></ul>',
      rule: 'Definite noun + الَّذِي / الَّتِي + describing sentence = one longer noun phrase.'
    },
    {
      title: 'Match the Gender',
      content: '<p>The relative pronoun must match the noun it describes:</p><ul><li><strong>الْكِتَابُ</strong> is masculine, so use <strong>الَّذِي</strong>: <strong>الْكِتَابُ الَّذِي عَلَى الْمَكْتَبِ</strong></li><li><strong>الْحَقِيبَةُ</strong> is feminine, so use <strong>الَّتِي</strong>: <strong>الْحَقِيبَةُ الَّتِي عَلَى الْكُرْسِيِّ</strong></li></ul><p>The relative pronoun does not mean "he" or "she" by itself. It points back to the noun before it.</p>',
      rule: 'Use الَّذِي after a masculine noun and الَّتِي after a feminine noun.'
    },
    {
      title: 'Use It Only After a Definite Noun',
      content: '<p>In this lesson, use <strong>الَّذِي</strong> and <strong>الَّتِي</strong> after definite nouns, usually nouns with <strong>الْـ</strong> or a proper name/idafa phrase. If the noun is indefinite, Arabic often attaches the description directly without a relative pronoun.</p><ul><li><strong>الطَّالِبُ الَّذِي مَرِيضٌ</strong> — the student who is sick</li><li><strong>طَالِبٌ مَرِيضٌ</strong> — a sick student</li></ul>',
      rule: 'Definite noun: use الَّذِي / الَّتِي. Indefinite noun: usually describe it directly.'
    }
  ],

  // ============================================================
  // EXAMPLE SENTENCES
  // ============================================================
  examples: [
    { ar: 'أَيْنَ الطَّالِبُ الَّذِي فِي الْفَصْلِ؟', trans: 'ayna ṭ-ṭālibu alladhī fī l-faṣli?', meaning: 'Where is the student who is in the classroom?' },
    { ar: 'الْكِتَابُ الَّذِي عَلَى الْمَكْتَبِ لِلْمُدَرِّسِ', trans: 'al-kitābu alladhī ʿalā l-maktabi li-l-mudarrisi', meaning: 'The book which is on the desk belongs to the teacher.' },
    { ar: 'الْقَلَمُ الَّذِي فِي الْحَقِيبَةِ جَدِيدٌ', trans: 'al-qalamu alladhī fī l-ḥaqībati jadīdun', meaning: 'The pen which is in the bag is new.' },
    { ar: 'الْغُرْفَةُ الَّتِي فِيهَا خَالِدٌ كَبِيرَةٌ', trans: 'al-ghurfatu allatī fīhā khālidun kabīratun', meaning: 'The room which Khalid is in is large.' },
    { ar: 'الطَّبِيبَةُ الَّتِي فِي الْمُسْتَشْفَى مَشْغُولَةٌ', trans: 'aṭ-ṭabībatu allatī fī l-mustashfā mashghūlatun', meaning: 'The doctor who is in the hospital is busy.' },
    { ar: 'الطَّالِبُ الَّذِي غَائِبٌ مَرِيضٌ', trans: 'aṭ-ṭālibu alladhī ghāʾibun marīḍun', meaning: 'The student who is absent is sick.' },
    { ar: 'الْحَقِيبَةُ الَّتِي عَلَى الْكُرْسِيِّ سَوْدَاءُ', trans: 'al-ḥaqībatu allatī ʿalā l-kursiyyi sawdāʾu', meaning: 'The bag which is on the chair is black.' },
    { ar: 'هَذَا هُوَ الْوَلَدُ الَّذِي لَهُ أَخٌ وَاحِدٌ', trans: 'hādhā huwa l-waladu alladhī lahu akhun wāḥidun', meaning: 'This is the boy who has one brother.' }
  ],

  // ============================================================
  // READING COMPREHENSION
  // ============================================================
  comprehension: {
    title: 'The Busy School',
    arabic: 'هَذِهِ مَدْرَسَةٌ كَبِيرَةٌ. الْمُدَرِّسُ الَّذِي فِي الْفَصْلِ مَشْغُولٌ. عِنْدَهُ كِتَابٌ طَوِيلٌ وَقَلَمٌ أَحْمَرُ. الطَّالِبُ الَّذِي عَلَى الْكُرْسِيِّ مَرِيضٌ. لَهُ أَخٌ وَاحِدٌ فِي الْبَيْتِ. الطَّبِيبَةُ الَّتِي فِي الْمُسْتَشْفَى مَشْغُولَةٌ أَيْضًا. الْحَقِيبَةُ الَّتِي عَلَى الْمَكْتَبِ لِلطَّالِبِ. الْمِفْتَاحُ فِيهَا. أَيْنَ الْغُرْفَةُ الَّتِي فِيهَا خَالِدٌ؟ هِيَ قَرِيبَةٌ مِنَ الْمَسْجِدِ.',
    english: 'This is a large school. The teacher who is in the classroom is busy. He has a long book and a red pen. The student who is on the chair is sick. He has one brother at home. The doctor who is in the hospital is busy too. The bag which is on the desk belongs to the student. The key is in it. Where is the room which Khalid is in? It is near the mosque.',
    questions: [
      {
        text: 'Who is busy in the classroom?',
        options: ['The doctor', 'The teacher', 'The merchant', 'The boy'],
        correct: 'The teacher'
      },
      {
        text: 'What is the student who is on the chair like?',
        options: ['He is sick', 'He is absent', 'He is famous', 'He is short'],
        correct: 'He is sick'
      },
      {
        text: 'Where is the key?',
        options: ['In the room', 'On the chair', 'In the bag', 'Under the desk'],
        correct: 'In the bag'
      },
      {
        text: 'Where is the room which Khalid is in?',
        options: ['Near the mosque', 'In Kuwait', 'In the hospital', 'On the desk'],
        correct: 'Near the mosque'
      }
    ]
  },

  // ============================================================
  // PRACTICE QUESTIONS
  // ============================================================
  practiceQuestions: [
    { arabic: 'الطَّالِبُ الَّذِي فِي الْفَصْلِ', correct: 'The student who is in the classroom', options: ['The student who is in the classroom', 'The student who is absent', 'The teacher who is in the classroom', 'The classroom which is large'] },
    { arabic: 'الْحَقِيبَةُ الَّتِي عَلَى الْكُرْسِيِّ', correct: 'The bag which is on the chair', options: ['The chair which is in the bag', 'The bag which is on the chair', 'The book which is on the chair', 'The bag which is in the room'] },
    { text: 'Which relative pronoun follows a masculine noun?', correct: 'الَّذِي', options: ['الَّتِي', 'الَّذِي', 'هَذِهِ', 'تِلْكَ'] },
    { text: 'Which relative pronoun follows a feminine noun?', correct: 'الَّتِي', options: ['الَّذِي', 'هُوَ', 'الَّتِي', 'ذَلِكَ'] },
    { text: 'Complete: الْغُرْفَةُ ___ فِيهَا خَالِدٌ كَبِيرَةٌ.', correct: 'الَّتِي', options: ['الَّذِي', 'الَّتِي', 'هُوَ', 'لَهُ'] },
    { text: 'Why is الَّتِي used in الْحَقِيبَةُ الَّتِي عَلَى الْمَكْتَبِ?', correct: 'Because الْحَقِيبَةُ is feminine', options: ['Because الْحَقِيبَةُ is feminine', 'Because the desk is masculine', 'Because the sentence is a question', 'Because it means "he"'] }
  ],

  // ============================================================
  // QUIZ QUESTIONS
  // ============================================================
  quizQuestions: {
    multipleChoice: [
      { prompt: 'What does الَّذِي mean in this lesson?', options: ['Who / which / that (masculine)', 'This feminine', 'In him', 'His book'], correct: 0 },
      { prompt: 'What does الَّتِي mean in this lesson?', options: ['That masculine', 'Who / which / that (feminine)', 'From her', 'The teacher'], correct: 1 },
      { prompt: 'Choose the correct sentence: "The book which is on the desk is new."', options: ['الْكِتَابُ الَّتِي عَلَى الْمَكْتَبِ جَدِيدٌ', 'الْكِتَابُ الَّذِي عَلَى الْمَكْتَبِ جَدِيدٌ', 'الْكِتَابُ هَذِهِ عَلَى الْمَكْتَبِ جَدِيدٌ', 'الْكِتَابُ الَّذِي عَلَى الْمَكْتَبِ جَدِيدَةٌ'], correct: 1 },
      { prompt: 'Choose the correct sentence: "The room which Khalid is in is large."', options: ['الْغُرْفَةُ الَّذِي فِيهَا خَالِدٌ كَبِيرَةٌ', 'الْغُرْفَةُ الَّتِي فِيهَا خَالِدٌ كَبِيرَةٌ', 'الْغُرْفَةُ الَّتِي فِيهِ خَالِدٌ كَبِيرٌ', 'الْغُرْفَةُ الَّذِي فِيهِ خَالِدٌ كَبِيرٌ'], correct: 1 },
      { prompt: 'Complete: الطَّالِبُ ___ مَرِيضٌ غَائِبٌ.', options: ['الَّتِي', 'فِيهَا', 'الَّذِي', 'عَلَيْهَا'], correct: 2 },
      { prompt: 'Complete: الطَّبِيبَةُ ___ فِي الْمُسْتَشْفَى مَشْغُولَةٌ.', options: ['الَّذِي', 'الَّتِي', 'هُوَ', 'لَهُ'], correct: 1 },
      { prompt: 'Translate: "The bag which is on the chair is black."', options: ['الْحَقِيبَةُ الَّتِي عَلَى الْكُرْسِيِّ سَوْدَاءُ', 'الْحَقِيبَةُ الَّذِي عَلَى الْكُرْسِيِّ سَوْدَاءُ', 'الْكُرْسِيُّ الَّذِي عَلَى الْحَقِيبَةِ أَسْوَدُ', 'الْحَقِيبَةُ عَلَى الْكُرْسِيِّ الَّتِي سَوْدَاءُ'], correct: 0 },
      { prompt: 'Which noun phrase is definite and ready for الَّذِي / الَّتِي?', options: ['طَالِبٌ', 'حَقِيبَةٌ', 'الْمُدَرِّسُ', 'كِتَابٌ جَدِيدٌ'], correct: 2 },
      { prompt: 'Translate: "The student who is absent is sick."', options: ['الطَّالِبُ الَّذِي غَائِبٌ مَرِيضٌ', 'الطَّالِبَةُ الَّذِي غَائِبٌ مَرِيضٌ', 'الطَّالِبُ الَّتِي غَائِبٌ مَرِيضٌ', 'الطَّالِبُ فِيهِ غَائِبٌ مَرِيضٌ'], correct: 0 },
      { prompt: 'What must الَّذِي / الَّتِي match?', options: ['The English translation only', 'The first letter of the next word', 'The gender of the noun before it', 'The colour of the noun'], correct: 2 }
    ],
    typing: [
      { prompt: 'Type in Arabic: "who / which" for a masculine noun', ideal: 'الَّذِي', accepts: ['الذي', 'الَّذِي'] },
      { prompt: 'Type in Arabic: "who / which" for a feminine noun', ideal: 'الَّتِي', accepts: ['التي', 'الَّتِي'] }
    ]
  }
};
