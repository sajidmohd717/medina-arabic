/* ============================================================
   b1-lesson11.js — Lesson 11 Data
   ============================================================ */

const LESSON_DATA = {
  book: 'book1',
  lessonNum: 11,
  titleArabic: 'فِيهِ — فِيهَا',
  titleEnglish: 'Pronouns with Prepositions',
  summary: 'In this lesson, you will learn how to attach pronoun suffixes to prepositions. Instead of repeating a noun, Arabic combines the preposition and pronoun into one word — فِيهِ (in it), عَلَيْهَا (on it), مِنْهُ (from him), and more.',
  nextLesson: 'b1-lesson12.html',
  passMark: 8,
  totalQuestions: 12,

  // ============================================================
  // VOCABULARY
  // ============================================================
  vocab: [
    // Preposition + pronoun combined forms
    { ar: 'فِيهِ', trans: 'fīhi', meaning: 'In it (masc.) / In him', type: 'Prep+Pronoun' },
    { ar: 'فِيهَا', trans: 'fīhā', meaning: 'In it (fem.) / In her', type: 'Prep+Pronoun' },
    { ar: 'فِيكَ', trans: 'fīka', meaning: 'In you (masc.)', type: 'Prep+Pronoun' },
    { ar: 'فِيَّ', trans: 'fiyya', meaning: 'In me', type: 'Prep+Pronoun' },
    { ar: 'عَلَيْهِ', trans: 'ʿalayhi', meaning: 'On it (masc.) / On him', type: 'Prep+Pronoun' },
    { ar: 'عَلَيْهَا', trans: 'ʿalayhā', meaning: 'On it (fem.) / On her', type: 'Prep+Pronoun' },
    { ar: 'مِنْهُ', trans: 'minhu', meaning: 'From it / From him', type: 'Prep+Pronoun' },
    { ar: 'مِنْهَا', trans: 'minhā', meaning: 'From it (fem.) / From her', type: 'Prep+Pronoun' },
    { ar: 'إِلَيْهِ', trans: 'ilayhi', meaning: 'To it / To him', type: 'Prep+Pronoun' },
    { ar: 'إِلَيْهَا', trans: 'ilayhā', meaning: 'To it (fem.) / To her', type: 'Prep+Pronoun' },
    { ar: 'لَهُ', trans: 'lahu', meaning: 'For him / He has', type: 'Prep+Pronoun' },
    { ar: 'لَهَا', trans: 'lahā', meaning: 'For her / She has', type: 'Prep+Pronoun' },
    { ar: 'بِهِ', trans: 'bihi', meaning: 'With it / By it (masc.)', type: 'Prep+Pronoun' },
    // Nouns
    { ar: 'مِفْتَاحٌ', trans: 'miftāḥun', meaning: 'Key', type: 'Noun' },
    { ar: 'غُرْفَةٌ', trans: 'ghurfatun', meaning: 'Room', type: 'Noun' },
    { ar: 'طَاوِلَةٌ', trans: 'ṭāwilatun', meaning: 'Table', type: 'Noun' },
    { ar: 'كُرْسِيٌّ', trans: 'kursiyyun', meaning: 'Chair', type: 'Noun' }
  ],

  // ============================================================
  // GRAMMAR BLOCKS
  // ============================================================
  grammarBlocks: [
    {
      title: 'Pronoun Suffixes Attach to Prepositions',
      content: '<p>In Lesson 10, you learned that pronoun suffixes attach to nouns: <strong>كِتَابِي</strong> (my book), <strong>كِتَابُكَ</strong> (your book). The same suffixes also attach to <em>prepositions</em>, creating a single combined word:</p><ul><li><strong>فِي</strong> (in) + <strong>هُ</strong> = <strong>فِيهِ</strong> (in it — masc.)</li><li><strong>فِي</strong> (in) + <strong>هَا</strong> = <strong>فِيهَا</strong> (in it — fem.)</li><li><strong>عَلَى</strong> (on) + <strong>هُ</strong> = <strong>عَلَيْهِ</strong> (on it — masc.)</li><li><strong>مِنْ</strong> (from) + <strong>هُ</strong> = <strong>مِنْهُ</strong> (from it / from him)</li><li><strong>إِلَى</strong> (to) + <strong>هَا</strong> = <strong>إِلَيْهَا</strong> (to it / to her)</li></ul>',
      rule: 'Preposition + Pronoun Suffix = one combined word. The combined form replaces the noun so you do not have to repeat it.'
    },
    {
      title: 'فِي، عَلَى، and إِلَى Change Their Shape',
      content: '<p>Three common prepositions change their ending before pronoun suffixes:</p><ul><li><strong>فِي</strong> stays as <strong>فِي-</strong> before most suffixes: فِيهِ، فِيهَا، فِيكَ — but becomes <strong>فِيَّ</strong> (fiyya) before the "me" suffix.</li><li><strong>عَلَى</strong> becomes <strong>عَلَيْ-</strong>: عَلَيْهِ، عَلَيْهَا، عَلَيْكَ، عَلَيَّ.</li><li><strong>إِلَى</strong> becomes <strong>إِلَيْ-</strong>: إِلَيْهِ، إِلَيْهَا، إِلَيْكَ، إِلَيَّ.</li></ul>',
      rule: 'عَلَى → عَلَيْ- and إِلَى → إِلَيْ- before all suffixes. فِي keeps its shape but becomes فِيَّ for "in me".'
    },
    {
      title: 'لَهُ / لَهَا — "He Has / She Has"',
      content: '<p>In Lesson 10, we saw <strong>لِي</strong> (I have, for relatives) and <strong>عِنْدِي</strong> (I have, for objects). This extends to third person:</p><ul><li><strong>لَهُ أَخٌ</strong> — He has a brother. (relative → use لِـ)</li><li><strong>عِنْدَهُ قَلَمٌ</strong> — He has a pen. (object → use عِنْدَ)</li><li><strong>لَهَا</strong> — She has (for a relative or close possession)</li></ul><p>In everyday use, <strong>لَهُ / لَهَا</strong> is often used broadly for both people and objects.</p>',
      rule: 'لَهُ = "for him" or "he has". لَهَا = "for her" or "she has".'
    }
  ],

  // ============================================================
  // EXAMPLE SENTENCES
  // ============================================================
  examples: [
    { ar: 'الْكِتَابُ فِي الْحَقِيبَةِ. هُوَ فِيهَا', trans: 'al-kitābu fī l-ḥaqībati. huwa fīhā', meaning: 'The book is in the bag. It is in it.' },
    { ar: 'الْقَلَمُ عَلَى الطَّاوِلَةِ. هُوَ عَلَيْهَا', trans: 'al-qalamu ʿalā l-ṭāwilati. huwa ʿalayhā', meaning: 'The pen is on the table. It is on it.' },
    { ar: 'الْمِفْتَاحُ فِي الْغُرْفَةِ. هُوَ فِيهَا', trans: 'al-miftāḥu fī l-ghurfati. huwa fīhā', meaning: 'The key is in the room. It is in it.' },
    { ar: 'الْوَلَدُ فِي الْفَصْلِ. هُوَ فِيهِ', trans: 'al-waladu fī l-faṣli. huwa fīhi', meaning: 'The boy is in the classroom. He is in it.' },
    { ar: 'لَهُ كِتَابٌ جَدِيدٌ وَقَلَمٌ جَمِيلٌ', trans: 'lahu kitābun jadīdun wa-qalamun jamīlun', meaning: 'He has a new book and a beautiful pen.' },
    { ar: 'لَهَا حَقِيبَةٌ سَوْدَاءُ', trans: 'lahā ḥaqībatun sawdāʾu', meaning: 'She has a black bag.' },
    { ar: 'هَذَا الْكِتَابُ مِنَ الأُسْتَاذِ. هُوَ مِنْهُ', trans: 'hādhā l-kitābu mina l-ustādhi. huwa minhu', meaning: 'This book is from the teacher. It is from him.' },
    { ar: 'الطَّالِبُ فِي الْفَصْلِ. أُسْتَاذُهُ فِيهِ أَيْضًا', trans: 'al-ṭālibu fī l-faṣli. ustādhuhu fīhi ayḍan', meaning: 'The student is in the classroom. His teacher is in it too.' }
  ],

  // ============================================================
  // READING COMPREHENSION
  // ============================================================
  comprehension: {
    title: "Khalid's Room",
    arabic: 'هَذِهِ غُرْفَةُ خَالِدٍ. خَالِدٌ فِيهَا الآنَ. الْغُرْفَةُ كَبِيرَةٌ وَنَظِيفَةٌ. عَلَى الطَّاوِلَةِ كِتَابٌ جَدِيدٌ وَقَلَمٌ أَحْمَرُ. الْكِتَابُ لِخَالِدٍ وَالْقَلَمُ لَهُ أَيْضًا. حَقِيبَةُ خَالِدٍ عَلَى الْكُرْسِيِّ. الْمِفْتَاحُ فِيهَا. خَالِدٌ طَالِبٌ مُجْتَهِدٌ.',
    english: "This is Khalid's room. Khalid is in it now. The room is large and clean. On the table is a new book and a red pen. The book belongs to Khalid, and the pen is his too. Khalid's bag is on the chair. The key is in it. Khalid is a hardworking student.",
    questions: [
      {
        text: 'Where is Khalid now?',
        options: ['In the classroom', 'In his room', 'In the mosque', 'In the school'],
        correct: 'In his room'
      },
      {
        text: 'What is on the table (عَلَى الطَّاوِلَةِ)?',
        options: ['A bag and a key', 'A new book and a red pen', 'A chair and a table', 'A book and a bag'],
        correct: 'A new book and a red pen'
      },
      {
        text: "Where is Khalid's bag?",
        options: ['On the table', 'In the room', 'On the chair', 'Under the table'],
        correct: 'On the chair'
      },
      {
        text: 'What is inside the bag (فِيهَا)?',
        options: ['A book', 'A pen', 'The key', 'A phone'],
        correct: 'The key'
      }
    ]
  },

  // ============================================================
  // PRACTICE QUESTIONS
  // ============================================================
  practiceQuestions: [
    { arabic: 'الْكِتَابُ فِيهِ', correct: 'The book is in it (masc.)', options: ['The book is on it', 'The book is in it (masc.)', 'The book is from it', 'The book is for him'] },
    { arabic: 'لَهُ بَيْتٌ كَبِيرٌ', correct: 'He has a large house', options: ['He has a large house', 'She has a large house', 'In a large house', 'A large house is on it'] },
    { text: 'What is the combined form of عَلَى + هَا?', correct: 'عَلَيْهَا', options: ['عَلَيْهِ', 'عَلَيْهَا', 'عَلَيْكَ', 'عَلَيَّ'] },
    { text: 'Which means "From her / From it (fem.)"?', correct: 'مِنْهَا', options: ['مِنْهُ', 'مِنْهَا', 'إِلَيْهَا', 'بِهِ'] },
    { text: 'Complete: الْقَلَمُ فِي الْحَقِيبَةِ. هُوَ ___.', correct: 'فِيهَا', options: ['فِيهِ', 'فِيهَا', 'عَلَيْهَا', 'مِنْهَا'] },
    { arabic: 'إِلَيْهِ', correct: 'To it / To him', options: ['From it / From him', 'On him', 'To it / To him', 'In him'] }
  ],

  // ============================================================
  // QUIZ QUESTIONS
  // ============================================================
  quizQuestions: {
    multipleChoice: [
      { prompt: 'What does فِيهِ mean?', options: ['In me', 'In you (masc.)', 'In it (masc.) / In him', 'In her'], correct: 2 },
      { prompt: 'What is the combined form of عَلَى + هَا?', options: ['عَلَيْهِ', 'عَلَيْهَا', 'عَلَيْكَ', 'عَلَيَّ'], correct: 1 },
      { prompt: 'Translate: "He has a book."', options: ['فِيهِ كِتَابٌ', 'لَهُ كِتَابٌ', 'مِنْهُ كِتَابٌ', 'عَلَيْهِ كِتَابٌ'], correct: 1 },
      { prompt: 'Complete: الْمِفْتَاحُ فِي الْحَقِيبَةِ. هُوَ ___.', options: ['فِيهِ', 'فِيهَا', 'عَلَيْهَا', 'مِنْهَا'], correct: 1 },
      { prompt: 'What does مِنْهُ mean?', options: ['To him', 'On him', 'From it / From him', 'In him'], correct: 2 },
      { prompt: 'What is the combined form of إِلَى + هَا?', options: ['إِلَيْهِ', 'إِلَيْهَا', 'إِلَيْكَ', 'إِلَيَّ'], correct: 1 },
      { prompt: 'Which is correct for "In me"?', options: ['فِيهِ', 'فِيكَ', 'فِيَّ', 'فِينَا'], correct: 2 },
      { prompt: 'Translate: "She has a red pen."', options: ['لَهُ قَلَمٌ أَحْمَرُ', 'لَهَا قَلَمٌ أَحْمَرُ', 'عَلَيْهَا قَلَمٌ أَحْمَرُ', 'فِيهَا قَلَمٌ أَحْمَرُ'], correct: 1 },
      { prompt: 'What does بِهِ mean?', options: ['In it', 'On it', 'From it', 'With it / By it'], correct: 3 },
      { prompt: 'Complete: الطَّالِبُ فِي الْفَصْلِ. هُوَ ___.', options: ['فِيهِ', 'فِيهَا', 'عَلَيْهِ', 'مِنْهُ'], correct: 0 }
    ],
    typing: [
      { prompt: 'Type in Arabic: "In it" — referring to a bag (حَقِيبَة, feminine)', ideal: 'فِيهَا', accepts: ['فيها', 'فِيهَا'] },
      { prompt: 'Type in Arabic: "He has a key."', ideal: 'لَهُ مِفْتَاحٌ', accepts: ['له مفتاح', 'لَهُ مِفْتَاحٌ', 'له مفتاحٌ', 'لَهُ مفتاح'] }
    ]
  }
};
