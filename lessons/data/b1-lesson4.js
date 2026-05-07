/* ============================================================
   b1-lesson4.js - Lesson 4 Data
   ============================================================ */

const LESSON_DATA = {
  book: "book1",
  lessonNum: 4,
  titleArabic: "حُرُوفُ الْجَرّ",
  titleEnglish: "Prepositions & Pronouns",
  summary: "In this lesson, you will learn the first four major prepositions: فِي (in), عَلَى (on), مِنْ (from), and إِلَى (to). You will also learn how these words change the ending of the nouns they follow, and introduce basic pronouns like هُوَ (he/it) and هِيَ (she/it).",
  nextLesson: "b1-lesson5.html",
  passMark: 8,
  totalQuestions: 11,
  vocab: [
    {
      ar: "فِي",
      trans: "fī",
      meaning: "In",
      type: "Preposition"
    },
    {
      ar: "عَلَى",
      trans: "ʿalā",
      meaning: "On / Upon",
      type: "Preposition"
    },
    {
      ar: "مِنْ",
      trans: "min",
      meaning: "From",
      type: "Preposition"
    },
    {
      ar: "إِلَى",
      trans: "ilā",
      meaning: "To / Towards",
      type: "Preposition"
    },
    {
      ar: "أَيْنَ",
      trans: "ayna",
      meaning: "Where?",
      type: "Interrogative"
    },
    {
      ar: "هُوَ",
      trans: "huwa",
      meaning: "He / It (masc.)",
      type: "Pronoun"
    },
    {
      ar: "هِيَ",
      trans: "hiya",
      meaning: "She / It (fem.)",
      type: "Pronoun"
    },
    {
      ar: "أَنَا",
      trans: "ana",
      meaning: "I",
      type: "Pronoun"
    },
    {
      ar: "أَنْتَ",
      trans: "anta",
      meaning: "You (masc. sing.)",
      type: "Pronoun"
    },
    {
      ar: "الْغُرْفَةُ",
      trans: "al-ghurfatu",
      meaning: "The room",
      type: "Noun"
    },
    {
      ar: "الْحَمَّامُ",
      trans: "al-ḥammāmu",
      meaning: "The bathroom",
      type: "Noun"
    },
    {
      ar: "الْمَطْبَخُ",
      trans: "al-maṭbakhu",
      meaning: "The kitchen",
      type: "Noun"
    },
    {
      ar: "الْمِرْحَاضُ",
      trans: "al-mirḥāḍu",
      meaning: "The toilet / washroom",
      type: "Noun"
    },
    {
      ar: "الْمَدْرَسَةُ",
      trans: "al-madrasatu",
      meaning: "The school",
      type: "Noun"
    },
    {
      ar: "الْجَامِعَةُ",
      trans: "al-jāmiʿatu",
      meaning: "The university",
      type: "Noun"
    },
    {
      ar: "السُّوقُ",
      trans: "as-sūqu",
      meaning: "The market",
      type: "Noun"
    },
    {
      ar: "الْيَابَانُ",
      trans: "al-yābānu",
      meaning: "Japan",
      type: "Noun"
    },
    {
      ar: "الصِّينُ",
      trans: "aṣ-ṣīnu",
      meaning: "China",
      type: "Noun"
    },
    {
      ar: "الْهِنْدُ",
      trans: "al-hindu",
      meaning: "India",
      type: "Noun"
    },
    {
      ar: "الْفِلِبِّينُ",
      trans: "al-filibbīnu",
      meaning: "The Philippines",
      type: "Noun"
    },
    {
      ar: "آمِنَةُ",
      trans: "Āminatu",
      meaning: "Aminah",
      type: "Name"
    },
    {
      ar: "سَعِيدٌ",
      trans: "Saʿīdun",
      meaning: "Saed",
      type: "Name"
    },
    {
      ar: "فَاطِمَةُ",
      trans: "Fāṭimatu",
      meaning: "Fatimah",
      type: "Name"
    },
    {
      ar: "عَبَّاسٌ",
      trans: "ʿAbbāsun",
      meaning: "Abbas",
      type: "Name"
    },
    {
      ar: "خَرَجَ",
      trans: "kharaja",
      meaning: "He left / went out",
      type: "Verb"
    },
    {
      ar: "ذَهَبَ",
      trans: "dhahaba",
      meaning: "He went",
      type: "Verb"
    }
  ],
  grammarBlocks: [
    {
      title: "The Prepositions (Harf Jar)",
      content: "<p>Prepositions in Arabic are called <strong>Harf Jar</strong>. They are short words that show the relationship between other words.</p><p>The four prepositions introduced here are: <strong>فِي</strong> (in), <strong>عَلَى</strong> (on), <strong>مِنْ</strong> (from), and <strong>إِلَى</strong> (to).</p>",
      rule: "Prepositions change the ending of the following noun from a damma (u) to a kasra (i). This is called the Genitive case (Majrūr)."
    },
    {
      title: "The Genitive Case (Majrūr)",
      content: "<p>When a noun is preceded by a preposition, its ending changes:</p><ul><li><strong>الْبَيْتُ</strong> (The house) → <strong>فِي الْبَيْتِ</strong> (In the house)</li><li><strong>الْمَكْتَبُ</strong> (The desk) → <strong>عَلَى الْمَكْتَبِ</strong> (On the desk)</li></ul>",
      rule: "Noun + Preposition = Ending becomes -i (kasra)."
    },
    {
      title: "Pronouns: هُوَ and هِيَ",
      content: "<p>Arabic nouns are either masculine or feminine. To refer to them, we use:</p><ul><li><strong>هُوَ</strong> (He/It): For masculine nouns (like <em>Kitāb</em> or <em>Muhammad</em>).</li><li><strong>هِيَ</strong> (She/It): For feminine nouns (like <em>Ghurfah</em> or <em>Aminah</em>).</li></ul>",
      rule: "Use هُوَ for masculine and هِيَ for feminine, even for objects!"
    },
    {
      title: "Asking \"Where?\"",
      content: "<p>Use <strong>أَيْنَ</strong> (ayna) to ask about location. It usually comes at the beginning of the sentence.</p>",
      rule: "أَيْنَ مُحَمَّدٌ؟ = \"Where is Muhammad?\""
    }
  ],
  comprehension: {
    title: "Where is Everyone?",
    arabic: "مُحَمَّدٌ فِي الْغُرْفَةِ. هُوَ عَلَى السَّرِيرِ. آمِنَةُ فِي الْمَطْبَخِ. هِيَ أَمَامَ الْمَكْتَبِ. أَيْنَ الْكِتَابُ؟ هُوَ عَلَى الْمَكْتَبِ. أَيْنَ السَّاعَةُ؟ هِيَ فِي الْحَمَّامِ. عَبَّاسٌ خَرَجَ مِنَ الْمَدْرَسَةِ وَذَهَبَ إِلَى الْجَامِعَةِ.",
    english: "Muhammad is in the room. He is on the bed. Aminah is in the kitchen. She is in front of the desk. Where is the book? It is on the desk. Where is the watch? It is in the bathroom. Abbas left the school and went to the university.",
    questions: [
      {
        text: "Where exactly is Muhammad in the room?",
        options: [
          "In front of the desk",
          "On the bed",
          "In the bathroom",
          "In the kitchen"
        ],
        correct: "On the bed"
      },
      {
        text: "Who is in the kitchen?",
        options: [
          "Muhammad",
          "Abbas",
          "Aminah",
          "The teacher"
        ],
        correct: "Aminah"
      },
      {
        text: "Where is the watch (السَّاعَة)?",
        options: [
          "On the desk",
          "In the room",
          "In the bathroom",
          "On the bed"
        ],
        correct: "In the bathroom"
      },
      {
        text: "Where did Abbas go after leaving school?",
        options: [
          "To the market",
          "To the university",
          "To the house",
          "To the mosque"
        ],
        correct: "To the university"
      }
    ]
  },
  quizQuestions: {
    multipleChoice: [
      {
        prompt: "What does عَلَى mean?",
        options: [
          "In",
          "On",
          "From",
          "To"
        ],
        correct: 1
      },
      {
        prompt: "Translate: \"In the room\"",
        options: [
          "فِي الْغُرْفَةُ",
          "فِي الْغُرْفَةِ",
          "عَلَى الْغُرْفَةِ",
          "مِنَ الْغُرْفَةِ"
        ],
        correct: 1
      },
      {
        prompt: "Which pronoun is used for a female or feminine object?",
        options: [
          "هُوَ",
          "أَنْتَ",
          "هِيَ",
          "أَنَا"
        ],
        correct: 2
      },
      {
        prompt: "Translate: \"Where are you from?\"",
        options: [
          "مِنْ أَيْنَ أَنْتَ؟",
          "أَيْنَ أَنْتَ؟",
          "أَيْنَ هُوَ؟",
          "مَنْ أَنْتَ؟"
        ],
        correct: 0
      },
      {
        prompt: "What is the opposite of \"To\" (إِلَى) in a directional sense?",
        options: [
          "فِي",
          "عَلَى",
          "مِنْ",
          "أَيْنَ"
        ],
        correct: 2
      },
      {
        prompt: "Translate: \"The watch is on the bed.\"",
        options: [
          "السَّاعَةُ فِي السَّرِيرِ",
          "السَّاعَةُ عَلَى السَّرِيرِ",
          "الْكِتَابُ عَلَى السَّرِيرِ",
          "السَّاعَةُ عَلَى الْمَكْتَبِ"
        ],
        correct: 1
      }
    ],
    typing: [
      {
        prompt: "Type in Arabic: \"In the house\"",
        ideal: "فِي الْبَيْتِ",
        accepts: [
          "في البيت",
          "فِي الْبَيْتِ",
          "في البيتِ",
          "فِي البيت"
        ]
      },
      {
        prompt: "Type in Arabic: \"On the desk\"",
        ideal: "عَلَى الْمَكْتَبِ",
        accepts: [
          "على المكتب",
          "عَلَى الْمَكْتَبِ",
          "على المكتبِ",
          "عَلَى المكتب"
        ]
      }
    ],
    conceptCheck: [
      {
        statement: "This lesson's main pattern is connected to: The Prepositions (Harf Jar).",
        correct: true,
        explanation: "Prepositions change the ending of the following noun from a damma (u) to a kasra (i). This is called the Genitive case (Majrūr)."
      },
      {
        statement: "The Concepts step gives more detail for: The Genitive Case (Majrūr).",
        correct: true,
        explanation: "Noun + Preposition = Ending becomes -i (kasra)."
      },
      {
        statement: "In Prepositions & Pronouns, you can ignore the lesson pattern and still build the Arabic correctly.",
        correct: false,
        explanation: "The pattern is the point of the lesson. Learn keeps it small first, then Concepts explains the rule more fully."
      }
    ]
  },
  guidedPattern: "حُرُوفُ الْجَرّ",
  guidedIntro: "In this lesson, you will learn the first four major prepositions: فِي (in), عَلَى (on), مِنْ (from), and إِلَى (to). You will also learn how these words change the ending of the nouns they follow, and introduce basic pronouns like هُوَ (he/it) and هِيَ (she/it).",
  reviewVocabAtEnd: true,
  guidedPages: [
    {
      titleArabic: "حُرُوفُ الْجَرّ",
      title: "Lesson 4",
      pattern: "حُرُوفُ الْجَرّ",
      intro: "In this lesson, you will learn the first four major prepositions: فِي (in), عَلَى (on), مِنْ (from), and إِلَى (to). You will also learn how these words change the ending of the nouns they follow, and introduce basic pronouns like هُوَ (he/it) and هِيَ (she/it).",
      cards: [
        {
          icon: "📍",
          ar: "فِي"
        },
        {
          icon: "📍",
          ar: "عَلَى"
        },
        {
          icon: "📍",
          ar: "مِنْ"
        },
        {
          icon: "📍",
          ar: "إِلَى"
        },
        {
          icon: "📍",
          ar: "أَيْنَ"
        },
        {
          icon: "📍",
          ar: "هُوَ"
        },
        {
          icon: "📍",
          ar: "هِيَ"
        },
        {
          icon: "📍",
          ar: "أَنَا"
        }
      ],
      keyPoints: [
        "حُرُوفُ الْجَرّ",
        "The Prepositions (Harf Jar)"
      ]
    },
    {
      title: "Read the pattern",
      pattern: "حُرُوفُ الْجَرّ",
      intro: "Read these short lines before the Reading step. They reuse the same lesson pattern in context.",
      groups: [
        {
          icon: "📘",
          lines: [
            {
              ar: "مُحَمَّدٌ فِي الْغُرْفَةِ."
            }
          ]
        },
        {
          icon: "📍",
          lines: [
            {
              ar: "هُوَ عَلَى السَّرِيرِ."
            }
          ]
        },
        {
          icon: "⭐",
          lines: [
            {
              ar: "آمِنَةُ فِي الْمَطْبَخِ."
            }
          ]
        },
        {
          icon: "🟢",
          lines: [
            {
              ar: "هِيَ أَمَامَ الْمَكْتَبِ."
            }
          ]
        },
        {
          icon: "✨",
          lines: [
            {
              ar: "أَيْنَ الْكِتَابُ؟ هُوَ عَلَى الْمَكْتَبِ."
            }
          ]
        }
      ],
      keyPoints: [
        "The Prepositions (Harf Jar)",
        "The Genitive Case (Majrūr)"
      ]
    },
    {
      title: "More lesson words",
      pattern: "حُرُوفُ الْجَرّ",
      intro: "Add these words to the same pattern. Tap the Arabic words if you need a meaning reminder.",
      cards: [
        {
          icon: "📍",
          ar: "أَنْتَ"
        },
        {
          icon: "🏠",
          ar: "الْغُرْفَةُ"
        },
        {
          icon: "🏠",
          ar: "الْحَمَّامُ"
        },
        {
          icon: "🏠",
          ar: "الْمَطْبَخُ"
        },
        {
          icon: "🏠",
          ar: "الْمِرْحَاضُ"
        },
        {
          icon: "🏠",
          ar: "الْمَدْرَسَةُ"
        },
        {
          icon: "⭐",
          ar: "الْجَامِعَةُ"
        },
        {
          icon: "🟢",
          ar: "السُّوقُ"
        }
      ],
      keyPoints: [
        "The Prepositions (Harf Jar)",
        "The Genitive Case (Majrūr)"
      ]
    },
    {
      titleArabic: "????????",
      title: "Quick practice",
      pattern: "حُرُوفُ الْجَرّ",
      intro: "Type the Arabic answer. You can type without vowels; the full answer appears after checking.",
      tip: "Tip: focus on the structure first. Harakat can come later.",
      exercise: [
        {
          icon: "✍️",
          prompt: "Type in Arabic: \"In the house\"",
          ideal: "فِي الْبَيْتِ",
          accepts: [
            "في البيت",
            "فِي الْبَيْتِ",
            "في البيتِ",
            "فِي البيت"
          ]
        },
        {
          icon: "📘",
          prompt: "Type in Arabic: \"On the desk\"",
          ideal: "عَلَى الْمَكْتَبِ",
          accepts: [
            "على المكتب",
            "عَلَى الْمَكْتَبِ",
            "على المكتبِ",
            "عَلَى المكتب"
          ]
        }
      ]
    }
  ],
  practiceQuestions: []
};
