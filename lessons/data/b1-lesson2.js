/* ============================================================
   b1-lesson2.js — Lesson 2 Data
   Book 1, Lesson 2: ذَلِكَ (That)
   ============================================================ */

const LESSON_DATA = {
  book: 'book1',
  lessonNum: 2,
  titleArabic: 'ذَلِكَ',
  titleEnglish: 'That is… (Masculine)',
  summary: 'Learn how to point at things that are far away using ذَلِكَ. This lesson introduces the concept of "that" versus "this", new vocabulary, and continues building your sentence-forming skills.',
  nextLesson: 'b1-lesson3.html',
  passMark: 5,
  totalQuestions: 8,
  
  // ============================================================
  // NEW VOCABULARY FOR LESSON 2
  // ============================================================
  // Note: Lesson 2 builds on Lesson 1 vocabulary. Words from Lesson 1
  // are NOT repeated here - they appear in examples and practice
  // but are not shown as new vocabulary to learn.
  vocab: [
    // Core demonstratives for this lesson
    { ar: 'ذَلِكَ', trans: 'dhālika', meaning: 'That (masc., far)', type: 'Demonstrative' },
    { ar: 'تِلْكَ', trans: 'tilka', meaning: 'That (fem., far)', type: 'Demonstrative' },
    
    // Conjunction (new for Lesson 2)
    { ar: 'وَ', trans: 'wa', meaning: 'And', type: 'Conjunction' },
    
    // New nouns for Lesson 2 (not in Lesson 1)
    { ar: 'لَبَنٌ', trans: 'labanun', meaning: 'Milk', type: 'Noun' },
    { ar: 'سُكَّرٌ', trans: 'sukkarun', meaning: 'Sugar', type: 'Noun' },
    { ar: 'حَجَرٌ', trans: 'hajarun', meaning: 'A stone / rock', type: 'Noun' },
    { ar: 'إِمَامٌ', trans: 'imāmun', meaning: 'An imam / leader', type: 'Noun' },
    { ar: 'دِيكٌ', trans: 'dīkun', meaning: 'A rooster', type: 'Noun' },
    { ar: 'حِصَانٌ', trans: 'hiṣānun', meaning: 'A horse (stallion)', type: 'Noun' },
    { ar: 'مِنْدِيلٌ', trans: 'mindīlun', meaning: 'A handkerchief', type: 'Noun' },
    { ar: 'طَبِيبٌ', trans: 'ṭabībun', meaning: 'A doctor', type: 'Noun' }
  ],
  
  // ============================================================
  // GRAMMAR BLOCKS
  // ============================================================
  grammarBlocks: [
    {
      title: 'What is ذَلِكَ?',
      content: '<p>ذَلِكَ (dhālika) means <strong>"that"</strong> in English. Like هَذَا, it is a <strong>demonstrative pronoun</strong> (اِسْمُ الإِشَارَةِ) — a word used to point at something.</p><p>The key difference is that ذَلِكَ is used for <strong>distant objects</strong>, while هَذَا is used for close objects.</p>',
      rule: 'ذَلِكَ is used for singular, masculine nouns that are far away.'
    },
    {
      title: 'Conditions for Using ذَلِكَ',
      content: '<p>For you to use ذَلِكَ correctly, the noun you are pointing to must meet three conditions:</p><ul><li>It must be <strong>singular</strong> (مُفْرَدٌ)</li><li>It must be <strong>masculine</strong> (مُذَكَّرٌ)</li><li>It must be <strong>far away</strong> (بَعِيدٌ)</li></ul><p>If these conditions are met, you can say: ذَلِكَ + noun = "That is a [noun]"</p>',
      rule: 'ذَلِكَ is the distant counterpart to هَذَا.'
    },
    {
      title: 'Comparison: هَذَا vs. ذَلِكَ',
      content: '<table class="example-table" style="width:100%"><thead><tr><th>Demonstrative</th><th>Meaning</th><th>Distance</th><th>Example</th></tr></thead><tbody><tr><td>هَذَا</td><td>This</td><td>Close (قَرِيب)</td><td>هَذَا بَيْتٌ (This is a house)</td></tr><tr><td>ذَلِكَ</td><td>That</td><td>Far (بَعِيد)</td><td>ذَلِكَ مَسْجِدٌ (That is a mosque)</td></tr></tbody></table>',
      rule: 'Use هَذَا for close objects, ذَلِكَ for far objects.'
    },
    {
      title: 'Special Spelling Rule',
      content: '<p>Just like هَذَا, the word ذَلِكَ has a special spelling rule. You pronounce it "dhālika" (with a long "aa" sound), but it is written without the alif — ذَلِكَ.</p><p>This means the alif is <strong>pronounced but not written</strong>. This is a common feature in Arabic demonstratives.</p>',
      rule: 'ذَلِكَ is pronounced with a long ā but written without the alif.'
    },
    {
      title: 'The Feminine Counterpart: تِلْكَ',
      content: '<p>Just as هَذَا has a feminine form (هَذِهِ), ذَلِكَ has a feminine form: <strong>تِلْكَ</strong> (tilka).</p><p>Use تِلْكَ for singular, <strong>feminine</strong> nouns that are far away. You will learn more about feminine nouns in Lesson 6.</p>',
      rule: 'تِلْكَ = "That" for feminine nouns (far).'
    },
    {
      title: 'Asking Questions with Demonstratives',
      content: '<p>You can form questions using the particles you learned in Lesson 1:</p><ul><li>أَذَلِكَ بَيْتٌ؟ = "Is that a house?"</li><li>هَلْ ذَلِكَ مَسْجِدٌ؟ = "Is that a mosque?"</li><li>مَا ذَلِكَ؟ = "What is that?"</li><li>مَنْ ذَلِكَ؟ = "Who is that?"</li></ul>',
      rule: 'Question particles work the same way with ذَلِكَ as they do with هَذَا.'
    },
    {
      title: 'The Conjunction وَ (And)',
      content: '<p>The Arabic word <strong>وَ</strong> (wa) means "and". It is used to join words and sentences together. It is written as a single letter attached to the following word.</p><p>Example: هَذَا بَيْتٌ وَذَلِكَ مَسْجِدٌ = "This is a house and that is a mosque."</p>',
      rule: 'وَ = "and" — it attaches directly to the next word.'
    }
  ],
  
  // ============================================================
  // EXAMPLE SENTENCES
  // ============================================================
  examples: [
    { ar: 'ذَلِكَ بَيْتٌ', trans: 'dhālika baytun', meaning: 'That is a house.' },
    { ar: 'ذَلِكَ مَسْجِدٌ', trans: 'dhālika masjidun', meaning: 'That is a mosque.' },
    { ar: 'ذَلِكَ كِتَابٌ', trans: 'dhālika kitābun', meaning: 'That is a book.' },
    { ar: 'ذَلِكَ رَجُلٌ', trans: 'dhālika rajulun', meaning: 'That is a man.' },
    { ar: 'ذَلِكَ جَمَلٌ', trans: 'dhālika jamalun', meaning: 'That is a camel.' },
    { ar: 'مَا ذَلِكَ؟', trans: 'mā dhālika?', meaning: 'What is that?' },
    { ar: 'مَنْ ذَلِكَ؟', trans: 'man dhālika?', meaning: 'Who is that?' },
    { ar: 'أَذَلِكَ بَيْتٌ؟', trans: 'a-dhālika baytun?', meaning: 'Is that a house?' },
    { ar: 'لا، ذَلِكَ مَسْجِدٌ', trans: 'lā, dhālika masjidun', meaning: 'No, that is a mosque.' },
    { ar: 'هَذَا بَيْتٌ وَذَلِكَ مَسْجِدٌ', trans: 'hādhā baytun wa-dhālika masjidun', meaning: 'This is a house and that is a mosque.' },
    { ar: 'هَذَا قَلَمٌ وَذَلِكَ مِفْتَاحٌ', trans: 'hādhā qalamun wa-dhālika miftāḥun', meaning: 'This is a pen and that is a key.' }
  ],
  
  // ============================================================
  // PRACTICE QUESTIONS
  // ============================================================
  practiceQuestions: [
    { text: 'What does ذَلِكَ mean?', correct: 'That (masc., far)', options: ['This (masc., close)', 'That (masc., far)', 'This (fem., close)', 'That (fem., far)'] },
    { arabic: 'ذَلِكَ مَسْجِدٌ', correct: 'That is a mosque.', options: ['This is a mosque.', 'That is a house.', 'That is a mosque.', 'This is a book.'] },
    { text: 'Which word means "That" for feminine nouns (far)?', correct: 'تِلْكَ', options: ['هَذَا', 'هَذِهِ', 'ذَلِكَ', 'تِلْكَ'] },
    { arabic: 'مَا ذَلِكَ؟', correct: 'What is that?', options: ['What is this?', 'Who is that?', 'What is that?', 'Is that a house?'] },
    { text: 'How do you say "and" in Arabic?', correct: 'وَ', options: ['فِي', 'عَلَى', 'وَ', 'مِنْ'] },
    { arabic: 'هَذَا بَيْتٌ وَذَلِكَ مَسْجِدٌ', correct: 'This is a house and that is a mosque.', options: ['That is a house and this is a mosque.', 'This is a house and that is a mosque.', 'This is a house or that is a mosque.', 'That is a house or this is a mosque.'] },
    { text: 'For ذَلِكَ to be used correctly, the noun must be:', correct: 'Masculine, singular, and far', options: ['Feminine, singular, and close', 'Masculine, plural, and far', 'Masculine, singular, and close', 'Masculine, singular, and far'] },
    { text: 'Translate into English: ذَلِكَ جَمَلٌ', correct: 'That is a camel.', options: ['This is a camel.', 'That is a donkey.', 'This is a horse.', 'That is a camel.'] }
  ],
  
  // ============================================================
  // QUIZ QUESTIONS
  // ============================================================
  quizQuestions: {
    multipleChoice: [
      { prompt: 'What does ذَلِكَ mean?', options: ['This (close)', 'That (far)', 'These', 'Those'], correct: 1 },
      { prompt: 'Which demonstrative is used for FAR masculine objects?', options: ['هَذَا', 'هَذِهِ', 'ذَلِكَ', 'تِلْكَ'], correct: 2 },
      { prompt: 'Translate: ذَلِكَ كِتَابٌ', options: ['This is a book.', 'That is a pen.', 'That is a book.', 'This is a pen.'], correct: 2 },
      { prompt: 'What is the feminine form of ذَلِكَ?', options: ['هَذِهِ', 'تِلْكَ', 'ذَلِكَ', 'هَذَا'], correct: 1 },
      { prompt: 'How do you say "What is that?" in Arabic?', options: ['مَا هَذَا؟', 'مَنْ هَذَا؟', 'مَا ذَلِكَ؟', 'مَنْ ذَلِكَ؟'], correct: 2 },
      { prompt: 'The Arabic word وَ means:', options: ['Or', 'But', 'And', 'So'], correct: 2 },
      { prompt: 'Which sentence means "That is a mosque"?', options: ['هَذَا مَسْجِدٌ', 'ذَلِكَ مَسْجِدٌ', 'هَذَا بَيْتٌ', 'ذَلِكَ بَيْتٌ'], correct: 1 },
      { prompt: 'For ذَلِكَ to be used correctly, the noun must be:', options: ['Feminine and close', 'Masculine and far', 'Feminine and far', 'Masculine and close'], correct: 1 }
    ],
    typing: [
      { prompt: 'Type in Arabic: "That is a house."', ideal: 'ذَلِكَ بَيْتٌ', accepts: ['ذلك بيت', 'ذَلِكَ بَيْتٌ', 'ذلك بيتٌ', 'ذَلِكَ بيت'] },
      { prompt: 'Type in Arabic: "That is a camel."', ideal: 'ذَلِكَ جَمَلٌ', accepts: ['ذلك جمل', 'ذَلِكَ جَمَلٌ', 'ذلك جملٌ', 'ذَلِكَ جمل'] },
      { prompt: 'Type in Arabic: "What is that?"', ideal: 'مَا ذَلِكَ؟', accepts: ['ما ذلك', 'مَا ذَلِكَ', 'ما ذلك؟', 'مَا ذَلِكَ؟'] }
    ]
  }
};