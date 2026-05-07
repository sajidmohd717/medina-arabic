/* ============================================================
   b1-lesson14.js - Lesson 14 Data
   ============================================================ */

const LESSON_DATA = {
  book: 'book1',
  lessonNum: 14,
  titleArabic: 'الأَعْدَادُ ١–١٠',
  titleEnglish: 'Numbers 1–10',
  summary: 'Learn Arabic numbers 1 through 10. Master the tricky rule: a masculine noun takes a feminine number form, and a feminine noun takes a masculine number form. Count books, cars, students, and more.',
  nextLesson: 'b1-lesson15.html',
  passMark: 8,
  totalQuestions: 11,

  guidedPattern: 'كِتَابٌ وَاحِدٌ',
  guidedIntro: 'Numbers in Arabic have a special gender rule — the number takes the OPPOSITE gender of the noun it counts.',
  reviewVocabAtEnd: true,
  milestoneAfterPage: 4,

  guidedPages: [
    {
      titleArabic: 'الأَعْدَادُ',
      title: 'Lesson Fourteen',
      pattern: 'وَاحِد — عَشَرَة',
      intro: 'Start with a dialogue about counting things. Listen for the numbers and notice their endings.',
      groups: [
        { type: 'scene', text: 'The teacher is asking students to count things in the classroom.' },
        {
          icon: '📖',
          role: 'teacher',
          lines: [
            { label: 'المدرس', ar: 'كَمْ كِتَابًا عِنْدَكَ يَا حَامِدُ؟', isPrompt: true },
            { label: 'حامد', ar: 'عِنْدِي كِتَابٌ وَاحِدٌ.' }
          ]
        },
        {
          icon: '✏️',
          role: 'student',
          lines: [
            { label: 'المدرس', ar: 'وَكَمْ قَلَمًا عِنْدَكَ؟', isPrompt: true },
            { label: 'حامد', ar: 'عِنْدِي ثَلَاثَةُ أَقْلَامٍ.' }
          ]
        },
        {
          icon: '🚗',
          role: 'teacher',
          lines: [
            { label: 'المدرس', ar: 'كَمْ سَيَّارَةً فِي الشَّارِعِ؟', isPrompt: true },
            { label: 'حامد', ar: 'فِي الشَّارِعِ أَرْبَعُ سَيَّارَاتٍ.' }
          ]
        },
        {
          icon: '👨‍🎓',
          role: 'student',
          lines: [
            { label: 'المدرس', ar: 'كَمْ طَالِبًا فِي الفَصْلِ؟', isPrompt: true },
            { label: 'حامد', ar: 'فِي الفَصْلِ عَشَرَةُ طُلَّابٍ.' }
          ]
        }
      ],
      exerciseIntro: 'Answer from the dialogue',
      exercise: [
        {
          icon: '📖',
          prompt: 'كَمْ كِتَابًا عِنْدَ حَامِدٍ؟',
          placeholder: 'عِنْدَهُ ...',
          ideal: 'عِنْدَهُ كِتَابٌ وَاحِدٌ.',
          accepts: ['عنده كتاب واحد', 'عِنْدَهُ كِتَابٌ وَاحِدٌ', 'عنده كتاب واحد.', 'عِنْدَهُ كِتَابٌ وَاحِدٌ.']
        },
        {
          icon: '🚗',
          prompt: 'كَمْ سَيَّارَةً فِي الشَّارِعِ؟',
          placeholder: 'فِيهِ ...',
          ideal: 'فِيهِ أَرْبَعُ سَيَّارَاتٍ.',
          accepts: ['فيه أربع سيارات', 'فِيهِ أَرْبَعُ سَيَّارَاتٍ', 'فيه أربع سيارات.', 'فِيهِ أَرْبَعُ سَيَّارَاتٍ.']
        }
      ],
      keyPoints: [
        'كَمْ = how many?',
        'وَاحِد = 1 · ثَلَاثَة = 3 · أَرْبَع = 4 · عَشَرَة = 10'
      ]
    },
    {
      title: 'Numbers 1–10',
      pattern: 'Masculine and Feminine Forms',
      intro: 'Each number has two forms. The feminine form is used with masculine nouns, and the masculine form with feminine nouns.',
      cards: [
        { icon: '1️⃣', ar: 'وَاحِدٌ / وَاحِدَةٌ — 1' },
        { icon: '2️⃣', ar: 'اِثْنَانِ / اِثْنَتَانِ — 2' },
        { icon: '3️⃣', ar: 'ثَلَاثَةٌ / ثَلَاثٌ — 3' },
        { icon: '4️⃣', ar: 'أَرْبَعَةٌ / أَرْبَعٌ — 4' },
        { icon: '5️⃣', ar: 'خَمْسَةٌ / خَمْسٌ — 5' },
        { icon: '6️⃣', ar: 'سِتَّةٌ / سِتٌّ — 6' },
        { icon: '7️⃣', ar: 'سَبْعَةٌ / سَبْعٌ — 7' },
        { icon: '8️⃣', ar: 'ثَمَانِيَةٌ / ثَمَانٍ — 8' }
      ],
      keyPoints: [
        'Feminine form (with ة): used for MASCULINE nouns',
        'Masculine form (without ة): used for FEMININE nouns'
      ]
    },
    {
      title: 'The Gender Rule',
      pattern: 'Number takes OPPOSITE gender',
      intro: 'The number and the noun take opposite genders. This is the most important rule of Arabic numbers.',
      groups: [
        {
          icon: '📖',
          lines: [
            { ar: 'كِتَابٌ وَاحِدٌ — one book (كِتَاب masc. → وَاحِد masc.)' },
            { ar: 'ثَلَاثَةُ كُتُبٍ — three books (كُتُب fem. → ثَلَاثَة fem.)' }
          ]
        },
        {
          icon: '🚗',
          lines: [
            { ar: 'سَيَّارَةٌ وَاحِدَةٌ — one car (سَيَّارَة fem. → وَاحِدَة fem.)' },
            { ar: 'أَرْبَعُ سَيَّارَاتٍ — four cars (سَيَّارَات fem. → أَرْبَع masc.)' }
          ]
        },
        {
          icon: '💡',
          lines: [
            { ar: 'For 1 and 2: number FOLLOWS noun, matches gender' },
            { ar: 'For 3–10: number COMES FIRST, opposite gender' }
          ]
        }
      ],
      keyPoints: [
        '1 & 2: number after noun, same gender',
        '3–10: number before noun, opposite gender, noun is plural & majrūr'
      ]
    },
    {
      title: 'Counting 3–10 Items',
      pattern: 'Number (opposite gender) + plural noun (majrūr)',
      intro: 'For 3 through 10, the number comes first, takes opposite gender, and the noun is a plural in majrūr (ــٍ).',
      wordBank: ['ثَلَاثَةُ', 'ثَلَاثُ', 'أَرْبَعَةُ', 'أَرْبَعُ', 'خَمْسَةُ', 'خَمْسُ'],
      tapFill: [
        { parts: [null, ' كُتُبٍ (masc. noun → fem. number)'], answer: 'ثَلَاثَةُ' },
        { parts: [null, ' سَيَّارَاتٍ (fem. noun → masc. number)'], answer: 'أَرْبَعُ' },
        { parts: [null, ' أَقْلَامٍ (masc. noun → fem. number)'], answer: 'خَمْسَةُ' },
        { parts: [null, ' طَالِبَاتٍ (fem. noun → masc. number)'], answer: 'سِتُّ' },
        { parts: [null, ' بُيُوتٍ (masc. noun → fem. number)'], answer: 'سَبْعَةُ' },
        { parts: [null, ' مَدَارِسَ (fem. noun → masc. number)'], answer: 'ثَمَانٍ' }
      ],
      keyPoints: [
        'Number + plural noun (majrūr/genitive)',
        'كِتَاب (masc.) → ثَلَاثَةُ كُتُبٍ (fem. number)',
        'سَيَّارَة (fem.) → أَرْبَعُ سَيَّارَاتٍ (masc. number)'
      ]
    },
    {
      title: 'Read the Pattern',
      pattern: 'Numbers in sentences',
      intro: 'Read these sentences. Watch the number-noun gender pattern.',
      groups: [
        {
          icon: '📖',
          lines: [
            { ar: 'عِنْدِي ثَلَاثَةُ كُتُبٍ.' }
          ]
        },
        {
          icon: '✏️',
          lines: [
            { ar: 'فِي الحَقِيبَةِ أَرْبَعَةُ أَقْلَامٍ.' }
          ]
        },
        {
          icon: '🚗',
          lines: [
            { ar: 'فِي الشَّارِعِ خَمْسُ سَيَّارَاتٍ.' }
          ]
        },
        {
          icon: '👨‍🎓',
          lines: [
            { ar: 'فِي الفَصْلِ عَشَرَةُ طُلَّابٍ.' }
          ]
        },
        {
          icon: '👩‍🎓',
          lines: [
            { ar: 'فِي المَدْرَسَةِ سَبْعُ مُدَرِّسَاتٍ.' }
          ]
        }
      ],
      keyPoints: [
        'ثَلَاثَةُ كُتُبٍ = three books (masc. noun)',
        'خَمْسُ سَيَّارَاتٍ = five cars (fem. noun)'
      ]
    },
    {
      title: 'Numbers 9 and 10',
      pattern: 'تِسْعَة / تِسْع · عَشَرَة / عَشْر',
      intro: 'The last two numbers complete the set. Same gender rule applies.',
      cards: [
        { icon: '9️⃣', ar: 'تِسْعَةٌ / تِسْعٌ — 9' },
        { icon: '🔟', ar: 'عَشَرَةٌ / عَشْرٌ — 10' },
        { icon: '📖', ar: 'تِسْعَةُ كُتُبٍ — 9 books' },
        { icon: '🚗', ar: 'عَشْرُ سَيَّارَاتٍ — 10 cars' },
        { icon: '👨‍🎓', ar: 'عَشَرَةُ طُلَّابٍ — 10 students' },
        { icon: '👩‍🎓', ar: 'عَشْرُ طَالِبَاتٍ — 10 students (f.)' }
      ],
      keyPoints: [
        'تِسْعَة / عَشَرَة = feminine form (with masc. noun)',
        'تِسْع / عَشْر = masculine form (with fem. noun)'
      ]
    },
    {
      titleArabic: 'تَمْرِين',
      title: 'Practice',
      pattern: 'Numbers 1–10',
      intro: 'Type the Arabic. Remember: 3–10 = opposite gender, noun is plural majrūr.',
      tip: 'Tip: masculine noun → feminine number (with ة). Feminine noun → masculine number (no ة).',
      exercise: [
        {
          icon: '📖',
          prompt: 'Type: "three books"',
          ideal: 'ثَلَاثَةُ كُتُبٍ',
          accepts: ['ثلاثة كتب', 'ثَلَاثَةُ كُتُبٍ', 'ثلاثةُ كتبٍ']
        },
        {
          icon: '🚗',
          prompt: 'Type: "four cars"',
          ideal: 'أَرْبَعُ سَيَّارَاتٍ',
          accepts: ['أربع سيارات', 'أَرْبَعُ سَيَّارَاتٍ', 'أربعُ سياراتٍ']
        },
        {
          icon: '👨‍🎓',
          prompt: 'Type: "ten students" (masc.)',
          ideal: 'عَشَرَةُ طُلَّابٍ',
          accepts: ['عشرة طلاب', 'عَشَرَةُ طُلَّابٍ', 'عشرةُ طلابٍ']
        },
        {
          icon: '✏️',
          prompt: 'Type: "five pens"',
          ideal: 'خَمْسَةُ أَقْلَامٍ',
          accepts: ['خمسة أقلام', 'خَمْسَةُ أَقْلَامٍ', 'خمسةُ أقلامٍ']
        }
      ]
    }
  ],

  vocab: [
    { ar: 'وَاحِدٌ', trans: 'wāḥidun', meaning: 'One (masc.)', type: 'Number' },
    { ar: 'وَاحِدَةٌ', trans: 'wāḥidatun', meaning: 'One (fem.)', type: 'Number' },
    { ar: 'اِثْنَانِ', trans: 'ithnāni', meaning: 'Two (masc.)', type: 'Number' },
    { ar: 'اِثْنَتَانِ', trans: 'ithnatāni', meaning: 'Two (fem.)', type: 'Number' },
    { ar: 'ثَلَاثَةٌ', trans: 'thalāthatun', meaning: 'Three (fem. form)', type: 'Number' },
    { ar: 'ثَلَاثٌ', trans: 'thalāthun', meaning: 'Three (masc. form)', type: 'Number' },
    { ar: 'أَرْبَعَةٌ', trans: 'arbaʿatun', meaning: 'Four (fem. form)', type: 'Number' },
    { ar: 'أَرْبَعٌ', trans: 'arbaʿun', meaning: 'Four (masc. form)', type: 'Number' },
    { ar: 'خَمْسَةٌ', trans: 'khamsatun', meaning: 'Five (fem. form)', type: 'Number' },
    { ar: 'سِتَّةٌ', trans: 'sittatun', meaning: 'Six (fem. form)', type: 'Number' },
    { ar: 'سَبْعَةٌ', trans: 'sabʿatun', meaning: 'Seven (fem. form)', type: 'Number' },
    { ar: 'ثَمَانِيَةٌ', trans: 'thamāniyatun', meaning: 'Eight (fem. form)', type: 'Number' },
    { ar: 'تِسْعَةٌ', trans: 'tisʿatun', meaning: 'Nine (fem. form)', type: 'Number' },
    { ar: 'عَشَرَةٌ', trans: 'ʿasharatun', meaning: 'Ten (fem. form)', type: 'Number' },
    { ar: 'كَمْ', trans: 'kam', meaning: 'How many?', type: 'Interrogative' }
  ],

  grammarBlocks: [
    {
      title: 'The Gender Rule of Numbers',
      content: '<p>Arabic numbers from <strong>3 to 10</strong> take the <strong>opposite gender</strong> of the noun they count. This is one of the most distinctive features of Arabic grammar.</p><ul><li>Masculine noun (كتاب) → feminine number (ثَلَاثَة)</li><li>Feminine noun (سَيَّارَة) → masculine number (أَرْبَع)</li></ul>',
      rule: 'Number 3–10: opposite gender of the noun.'
    },
    {
      title: 'Numbers 1 and 2 Follow the Noun',
      content: '<p>For <strong>1 and 2</strong>, the number comes <em>after</em> the noun and <strong>matches</strong> its gender — just like an adjective.</p><ul><li><strong>كِتَابٌ وَاحِدٌ</strong> — one book (masc. + masc.)</li><li><strong>كِتَابَانِ اِثْنَانِ</strong> — two books</li></ul>',
      rule: '1 & 2: number after noun, matches gender (like an adjective).'
    },
    {
      title: 'The Noun After 3–10 Is Plural and Majrūr',
      content: '<p>When you use a number from 3 to 10, the noun that follows must be:</p><ol><li><strong>Plural</strong> (جمع)</li><li><strong>Majrūr</strong> (genitive case — kasra or kasratayn)</li></ol><p><strong>ثَلَاثَةُ كُتُبٍ</strong> (three books) — كُتُب is plural and majrūr.</p>',
      rule: '3–10 + plural noun (majrūr).'
    }
  ],

  comprehension: {
    title: 'The Classroom Inventory',
    arabic: 'هٰذَا فَصْلٌ كَبِيرٌ. فِيهِ عَشَرَةُ طُلَّابٍ وَسَبْعُ طَالِبَاتٍ. عَلَى كُلِّ مَكْتَبٍ كِتَابٌ وَاحِدٌ وَثَلَاثَةُ أَقْلَامٍ. المُدَرِّسُ عِنْدَهُ أَرْبَعَةُ كُتُبٍ وَخَمْسَةُ دَفَاتِرَ. فِي الغُرْفَةِ سِتُّ نَوَافِذَ. عَلَى الطَّاوِلَةِ تِسْعَةُ أَقْلَامٍ وَقَلَمٌ وَاحِدٌ أَحْمَرُ. الطُّلَّابُ عِنْدَهُمْ ثَمَانِيَةُ أَسْئِلَةٍ. فِي الشَّارِعِ عَشْرُ سَيَّارَاتٍ.',
    english: 'This is a large classroom. In it are ten (male) students and seven (female) students. On every desk is one book and three pens. The teacher has four books and five notebooks. In the room are six windows. On the table are nine pens and one red pen. The students have eight questions. On the street are ten cars.',
    questions: [
      {
        text: 'How many male students are in the class?',
        options: ['Seven', 'Ten', 'Five', 'Three'],
        correct: 'Ten'
      },
      {
        text: 'How many pens on each desk?',
        options: ['One', 'Three', 'Five', 'Four'],
        correct: 'Three'
      },
      {
        text: 'How many windows in the room?',
        options: ['Four', 'Five', 'Six', 'Eight'],
        correct: 'Six'
      },
      {
        text: 'How many cars on the street?',
        options: ['Nine', 'Eight', 'Ten', 'Seven'],
        correct: 'Ten'
      }
    ]
  },

  quizQuestions: {
    multipleChoice: [
      {
        prompt: 'What gender number do you use with a masculine noun (3–10)?',
        options: ['Masculine number', 'Feminine number', 'Either', 'Plural number'],
        correct: 1
      },
      {
        prompt: 'Choose: "three books"',
        options: ['ثَلَاثُ كُتُبٍ', 'ثَلَاثَةُ كُتُبٍ', 'ثَلَاثَةُ كِتَابٍ', 'ثَلَاثُ كِتَابٍ'],
        correct: 1
      },
      {
        prompt: 'Choose: "five cars"',
        options: ['خَمْسَةُ سَيَّارَاتٍ', 'خَمْسُ سَيَّارَاتٍ', 'خَمْسَةُ سَيَّارَةٍ', 'خَمْسُ سَيَّارَةٍ'],
        correct: 1
      },
      {
        prompt: 'What case is the noun after numbers 3–10?',
        options: ['Nominative (marfūʿ)', 'Accusative (manṣūb)', 'Genitive (majrūr)', 'Jussive (majzūm)'],
        correct: 2
      },
      {
        prompt: 'How do you say "one book"?',
        options: ['وَاحِدٌ كِتَابٌ', 'كِتَابٌ وَاحِدٌ', 'كِتَابٌ وَاحِدَةٌ', 'كِتَابٍ وَاحِدٍ'],
        correct: 1
      },
      {
        prompt: 'What is the feminine form of "ten"?',
        options: ['عَشْرٌ', 'عَشَرَةٌ', 'عَشَرَاتٌ', 'عُشْرٌ'],
        correct: 1
      }
    ],
    typing: [
      {
        prompt: 'Type: "three books"',
        ideal: 'ثَلَاثَةُ كُتُبٍ',
        accepts: ['ثلاثة كتب', 'ثَلَاثَةُ كُتُبٍ', 'ثلاثةُ كتبٍ']
      },
      {
        prompt: 'Type: "ten students" (masc.)',
        ideal: 'عَشَرَةُ طُلَّابٍ',
        accepts: ['عشرة طلاب', 'عَشَرَةُ طُلَّابٍ', 'عشرةُ طلابٍ']
      }
    ],
    conceptCheck: [
      {
        statement: 'For numbers 3–10, the number takes the opposite gender of the noun it counts.',
        correct: true,
        explanation: 'Masculine noun → feminine number (ثَلَاثَةُ كُتُبٍ). Feminine noun → masculine number (أَرْبَعُ سَيَّارَاتٍ).'
      },
      {
        statement: 'The noun after numbers 3–10 is singular.',
        correct: false,
        explanation: 'The noun after 3–10 must be plural and majrūr (genitive): ثَلَاثَةُ كُتُبٍ (three books), not ثَلَاثَةُ كِتَابٍ.'
      },
      {
        statement: 'For "one" and "two," the number comes after the noun and matches its gender.',
        correct: true,
        explanation: 'كِتَابٌ وَاحِدٌ (one book — both masculine). سَيَّارَةٌ وَاحِدَةٌ (one car — both feminine).'
      }
    ]
  },

  practiceQuestions: []
};
