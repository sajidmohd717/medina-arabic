/* ============================================================
   b1-lesson10.js - Lesson 10 Data
   ============================================================ */

const LESSON_DATA = {
  book: "book1",
  lessonNum: 10,
  titleArabic: "Ø§Ù„Ø¶ÙŽÙ‘Ù…ÙŽØ§Ø¦ÙØ±Ù Ø§Ù„Ù’Ù…ÙØªÙŽÙ‘ØµÙÙ„ÙŽØ©Ù",
  titleEnglish: "Attached Pronouns",
  summary: "In this lesson, you will learn how to show possession and relationships using attached pronouns (suffixes). You will also learn the difference between \"having\" an object and \"having\" a relative, and introduce the word Ù…ÙŽØ¹ÙŽ (with).",
  nextLesson: "b1-lesson11.html",
  passMark: 8,
  totalQuestions: 11,
  vocab: [
    {
      ar: "Ù€ÙÙŠ",
      trans: "-Ä«",
      meaning: "My / Mine",
      type: "Pronoun suffix"
    },
    {
      ar: "Ù€ÙƒÙŽ",
      trans: "-ka",
      meaning: "Your / Yours (masc.)",
      type: "Pronoun suffix"
    },
    {
      ar: "Ù€ÙƒÙ",
      trans: "-ki",
      meaning: "Your / Yours (fem.)",
      type: "Pronoun suffix"
    },
    {
      ar: "Ù€Ù‡Ù",
      trans: "-hu",
      meaning: "His / Its (masc.)",
      type: "Pronoun suffix"
    },
    {
      ar: "Ù€Ù‡ÙŽØ§",
      trans: "-hÄ",
      meaning: "Her / Its (fem.)",
      type: "Pronoun suffix"
    },
    {
      ar: "Ø£ÙŽØ¨ÙŒ",
      trans: "abun",
      meaning: "Father",
      type: "Noun"
    },
    {
      ar: "Ø£ÙŽØ®ÙŒ",
      trans: "akhun",
      meaning: "Brother",
      type: "Noun"
    },
    {
      ar: "Ø²ÙŽÙ…ÙÙŠÙ„ÙŒ",
      trans: "zamÄ«lun",
      meaning: "Colleague / Classmate",
      type: "Noun"
    },
    {
      ar: "Ø²ÙŽÙˆÙ’Ø¬ÙŒ",
      trans: "zawjun",
      meaning: "Husband",
      type: "Noun"
    },
    {
      ar: "Ø·ÙÙÙ’Ù„ÙŒ",
      trans: "á¹­iflun",
      meaning: "Child / Infant",
      type: "Noun"
    },
    {
      ar: "ÙÙŽØªÙ‹Ù‰",
      trans: "fatan",
      meaning: "Young man",
      type: "Noun"
    },
    {
      ar: "Ø¹ÙÙ†Ù’Ø¯ÙŽ",
      trans: "Ê¿inda",
      meaning: "With / At / Has (possession)",
      type: "Preposition/Adverb"
    },
    {
      ar: "Ù…ÙŽØ¹ÙŽ",
      trans: "maÊ¿a",
      meaning: "With (physical company)",
      type: "Preposition"
    },
    {
      ar: "Ù„ÙÙŠ",
      trans: "lÄ«",
      meaning: "I have (for relatives)",
      type: "Phrase"
    },
    {
      ar: "Ø£ÙØ­ÙØ¨ÙÙ‘",
      trans: "uá¸¥ibbu",
      meaning: "I love / I like",
      type: "Verb"
    },
    {
      ar: "Ø§Ù„Ù’ÙƒÙÙˆÙŽÙŠÙ’ØªÙ",
      trans: "al-kuwaytu",
      meaning: "Kuwait",
      type: "Noun"
    }
  ],
  grammarBlocks: [
    {
      title: "Attached Pronouns (Possessive)",
      content: "<p>Instead of using separate words for \"my\" or \"your\", Arabic attaches short suffixes to the end of nouns.</p><ul><li><strong>ÙƒÙØªÙŽØ§Ø¨ÙŒ</strong> (Book) + <strong>Ù€ÙÙŠ</strong> = <strong>ÙƒÙØªÙŽØ§Ø¨ÙÙŠ</strong> (My book)</li><li><strong>ÙƒÙØªÙŽØ§Ø¨ÙŒ</strong> + <strong>Ù€ÙƒÙŽ</strong> = <strong>ÙƒÙØªÙŽØ§Ø¨ÙÙƒÙŽ</strong> (Your book - masc.)</li><li><strong>ÙƒÙØªÙŽØ§Ø¨ÙŒ</strong> + <strong>Ù€Ù‡Ù</strong> = <strong>ÙƒÙØªÙŽØ§Ø¨ÙÙ‡Ù</strong> (His book)</li></ul>",
      rule: "Noun + Suffix = Possession. Note: The tanwÄ«n is removed when a suffix is attached."
    },
    {
      title: "Expressing \"To Have\"",
      content: "<p>Arabic uses different words for \"have\" depending on what you possess:</p><ul><li><strong>Ø¹ÙÙ†Ù’Ø¯ÙÙŠ</strong> (Ê¿indÄ«): For objects (e.g., \"I have a pen\").</li><li><strong>Ù„ÙÙŠ</strong> (lÄ«): For people/relatives (e.g., \"I have a brother\").</li></ul>",
      rule: "Use Ø¹ÙÙ†Ù’Ø¯ÙŽ for things, and Ù„ÙÙ€ for people."
    },
    {
      title: "Ù…ÙŽØ¹ÙŽ vs. Ø¹ÙÙ†Ù’Ø¯ÙŽ",
      content: "<p>Both can be translated as \"with\", but they are used differently:</p><ul><li><strong>Ø¹ÙÙ†Ù’Ø¯ÙÙŠ</strong> means you \"own\" it or it is \"at\" your place.</li><li><strong>Ù…ÙŽØ¹ÙÙŠ</strong> means it is physically \"with\" you right now.</li></ul>",
      rule: "Ù…ÙŽØ¹ÙÙŠ means \"in my company\" or \"in my pocket/hand\"."
    }
  ],
  comprehension: {
    title: "My New Colleague",
    arabic: "Ù‡ÙŽØ°ÙŽØ§ Ø²ÙŽÙ…ÙÙŠÙ„ÙÙŠ. Ø§Ø³Ù’Ù…ÙÙ‡Ù Ø®ÙŽØ§Ù„ÙØ¯ÙŒ. Ù‡ÙÙˆÙŽ Ù…ÙÙ†ÙŽ Ø§Ù„Ù’ÙƒÙÙˆÙŽÙŠÙ’ØªÙ. Ø®ÙŽØ§Ù„ÙØ¯ÙŒ Ø·ÙŽØ§Ù„ÙØ¨ÙŒ Ø¬ÙŽØ¯ÙÙŠØ¯ÙŒ ÙÙÙŠ Ù…ÙŽØ¯Ù’Ø±ÙŽØ³ÙŽØªÙÙŠ. Ø¹ÙÙ†Ù’Ø¯ÙŽÙ‡Ù Ù‚ÙŽÙ„ÙŽÙ…ÙŒ Ø¬ÙŽÙ…ÙÙŠÙ„ÙŒ ÙˆÙŽÙƒÙØªÙŽØ§Ø¨ÙŒ Ù‚ÙŽØ¯ÙÙŠÙ…ÙŒ. Ù…ÙŽØ¹ÙŽÙ‡Ù Ø­ÙŽÙ‚ÙÙŠØ¨ÙŽØªÙÙ‡Ù Ø§Ù„Ø³ÙŽÙ‘ÙˆÙ’Ø¯ÙŽØ§Ø¡Ù. Ù„ÙŽÙ‡Ù Ø£ÙŽØ®ÙŒ ÙˆÙŽØ§Ø­ÙØ¯ÙŒ ÙˆÙŽØ£ÙØ®Ù’ØªÙŒ ÙˆÙŽØ§Ø­ÙØ¯ÙŽØ©ÙŒ. Ø£ÙŽØ¨ÙÙˆÙ‡Ù Ù…ÙÙ‡ÙŽÙ†Ù’Ø¯ÙØ³ÙŒ Ø´ÙŽÙ‡ÙÙŠØ±ÙŒ ÙˆÙŽØ£ÙÙ…ÙÙ‘Ù‡Ù Ø·ÙŽØ¨ÙÙŠØ¨ÙŽØ©ÙŒ. Ø£ÙŽÙ†ÙŽØ§ Ø£ÙØ­ÙØ¨ÙÙ‘ Ø²ÙŽÙ…ÙÙŠÙ„ÙÙŠ Ø®ÙŽØ§Ù„ÙØ¯Ù‹Ø§.",
    english: "This is my colleague. His name is Khalid. He is from Kuwait. Khalid is a new student in my school. He has a beautiful pen and an old book. With him is his black bag. He has one brother and one sister. His father is a famous engineer and his mother is a doctor. I love my colleague Khalid.",
    questions: [
      {
        text: "Where is Khalid from?",
        options: [
          "India",
          "Japan",
          "Kuwait",
          "Egypt"
        ],
        correct: "Kuwait"
      },
      {
        text: "What does Khalid have (Ø¹ÙÙ†Ù’Ø¯ÙŽÙ‡Ù)?",
        options: [
          "A new car",
          "A beautiful pen and old book",
          "A small cat",
          "A large house"
        ],
        correct: "A beautiful pen and old book"
      },
      {
        text: "How many siblings does Khalid have?",
        options: [
          "Two brothers",
          "One brother and one sister",
          "No siblings",
          "Three sisters"
        ],
        correct: "One brother and one sister"
      },
      {
        text: "What is the profession of Khalid's father?",
        options: [
          "A doctor",
          "A teacher",
          "A famous engineer",
          "A merchant"
        ],
        correct: "A famous engineer"
      }
    ]
  },
  quizQuestions: {
    multipleChoice: [
      {
        prompt: "Translate: \"His house\"",
        options: [
          "Ø¨ÙŽÙŠÙ’ØªÙÙƒÙŽ",
          "Ø¨ÙŽÙŠÙ’ØªÙÙ‡ÙŽØ§",
          "Ø¨ÙŽÙŠÙ’ØªÙÙ‡Ù",
          "Ø¨ÙŽÙŠÙ’ØªÙÙŠ"
        ],
        correct: 2
      },
      {
        prompt: "Translate: \"Your (fem.) pen\"",
        options: [
          "Ù‚ÙŽÙ„ÙŽÙ…ÙÙƒÙŽ",
          "Ù‚ÙŽÙ„ÙŽÙ…ÙÙƒÙ",
          "Ù‚ÙŽÙ„ÙŽÙ…ÙÙ‡Ù",
          "Ù‚ÙŽÙ„ÙŽÙ…ÙÙŠ"
        ],
        correct: 1
      },
      {
        prompt: "Which word is used for \"having\" a relative?",
        options: [
          "Ø¹ÙÙ†Ù’Ø¯ÙŽ",
          "Ù…ÙŽØ¹ÙŽ",
          "Ù„ÙÙ€",
          "ÙÙÙŠ"
        ],
        correct: 2
      },
      {
        prompt: "Translate: \"My father is in the mosque.\"",
        options: [
          "Ø£ÙŽØ¨ÙÙˆÙ‡Ù ÙÙÙŠ Ø§Ù„Ù’Ù…ÙŽØ³Ù’Ø¬ÙØ¯Ù",
          "Ø£ÙŽØ¨ÙÙŠ ÙÙÙŠ Ø§Ù„Ù’Ù…ÙŽØ³Ù’Ø¬ÙØ¯Ù",
          "Ø£ÙŽØ¨ÙÙˆÙƒÙŽ ÙÙÙŠ Ø§Ù„Ù’Ù…ÙŽØ³Ù’Ø¬ÙØ¯Ù",
          "Ø£ÙŽØ¨ÙÙŠ ÙÙÙŠ Ø§Ù„Ù’Ø¨ÙŽÙŠÙ’ØªÙ"
        ],
        correct: 1
      },
      {
        prompt: "What does Ø²ÙŽÙ…ÙÙŠÙ„ÙÙŠ mean?",
        options: [
          "My friend",
          "My brother",
          "My colleague",
          "My teacher"
        ],
        correct: 2
      },
      {
        prompt: "Translate: \"What is your (masc.) name?\"",
        options: [
          "Ù…ÙŽØ§ Ø§Ø³Ù’Ù…ÙÙƒÙØŸ",
          "Ù…ÙŽØ§ Ø§Ø³Ù’Ù…ÙÙƒÙŽØŸ",
          "Ù…ÙŽØ§ Ø§Ø³Ù’Ù…ÙÙ‡ÙØŸ",
          "Ù…ÙŽØ§ Ø§Ø³Ù’Ù…ÙÙŠØŸ"
        ],
        correct: 1
      }
    ],
    typing: [
      {
        prompt: "Type in Arabic: \"My book\"",
        ideal: "ÙƒÙØªÙŽØ§Ø¨ÙÙŠ",
        accepts: [
          "ÙƒØªØ§Ø¨ÙŠ",
          "ÙƒÙØªÙŽØ§Ø¨ÙÙŠ",
          "ÙƒØªØ§Ø¨ÙŠÙŽ"
        ]
      },
      {
        prompt: "Type in Arabic: \"I have a pen\"",
        ideal: "Ø¹ÙÙ†Ù’Ø¯ÙÙŠ Ù‚ÙŽÙ„ÙŽÙ…ÙŒ",
        accepts: [
          "Ø¹Ù†Ø¯ÙŠ Ù‚Ù„Ù…",
          "Ø¹ÙÙ†Ù’Ø¯ÙÙŠ Ù‚ÙŽÙ„ÙŽÙ…ÙŒ",
          "Ø¹Ù†Ø¯ÙŠ Ù‚Ù„Ù…ÙŒ",
          "Ø¹ÙÙ†Ù’Ø¯ÙÙŠ Ù‚Ù„Ù…"
        ]
      }
    ],
    conceptCheck: [
      {
        statement: "This lesson's main pattern is connected to: Attached Pronouns (Possessive).",
        correct: true,
        explanation: "Noun + Suffix = Possession. Note: The tanwÄ«n is removed when a suffix is attached."
      },
      {
        statement: "The Concepts step gives more detail for: Expressing \"To Have\".",
        correct: true,
        explanation: "Use Ø¹ÙÙ†Ù’Ø¯ÙŽ for things, and Ù„ÙÙ€ for people."
      },
      {
        statement: "In Attached Pronouns, you can ignore the lesson pattern and still build the Arabic correctly.",
        correct: false,
        explanation: "The pattern is the point of the lesson. Learn keeps it small first, then Concepts explains the rule more fully."
      }
    ]
  },
  guidedPattern: "Ø§Ù„Ø¶ÙŽÙ‘Ù…ÙŽØ§Ø¦ÙØ±Ù Ø§Ù„Ù’Ù…ÙØªÙŽÙ‘ØµÙÙ„ÙŽØ©Ù",
  guidedIntro: "In this lesson, you will learn how to show possession and relationships using attached pronouns (suffixes). You will also learn the difference between \"having\" an object and \"having\" a relative, and introduce the word Ù…ÙŽØ¹ÙŽ (with).",
  reviewVocabAtEnd: true,
  guidedPages: [
    {
      titleArabic: "Ø§Ù„Ø¶ÙŽÙ‘Ù…ÙŽØ§Ø¦ÙØ±Ù Ø§Ù„Ù’Ù…ÙØªÙŽÙ‘ØµÙÙ„ÙŽØ©Ù",
      title: "Lesson 10",
      pattern: "Ø§Ù„Ø¶ÙŽÙ‘Ù…ÙŽØ§Ø¦ÙØ±Ù Ø§Ù„Ù’Ù…ÙØªÙŽÙ‘ØµÙÙ„ÙŽØ©Ù",
      intro: "In this lesson, you will learn how to show possession and relationships using attached pronouns (suffixes). You will also learn the difference between \"having\" an object and \"having\" a relative, and introduce the word Ù…ÙŽØ¹ÙŽ (with).",
      cards: [
        {
          icon: "📍",
          ar: "Ù€ÙÙŠ"
        },
        {
          icon: "📍",
          ar: "Ù€ÙƒÙŽ"
        },
        {
          icon: "📍",
          ar: "Ù€ÙƒÙ"
        },
        {
          icon: "📍",
          ar: "Ù€Ù‡Ù"
        },
        {
          icon: "📍",
          ar: "Ù€Ù‡ÙŽØ§"
        },
        {
          icon: "👤",
          ar: "Ø£ÙŽØ¨ÙŒ"
        },
        {
          icon: "👤",
          ar: "Ø£ÙŽØ®ÙŒ"
        },
        {
          icon: "👤",
          ar: "Ø²ÙŽÙ…ÙÙŠÙ„ÙŒ"
        }
      ],
      keyPoints: [
        "Ø§Ù„Ø¶ÙŽÙ‘Ù…ÙŽØ§Ø¦ÙØ±Ù Ø§Ù„Ù’Ù…ÙØªÙŽÙ‘ØµÙÙ„ÙŽØ©Ù",
        "Attached Pronouns (Possessive)"
      ]
    },
    {
      title: "Read the pattern",
      pattern: "Ø§Ù„Ø¶ÙŽÙ‘Ù…ÙŽØ§Ø¦ÙØ±Ù Ø§Ù„Ù’Ù…ÙØªÙŽÙ‘ØµÙÙ„ÙŽØ©Ù",
      intro: "Read these short lines before the Reading step. They reuse the same lesson pattern in context.",
      groups: [
        {
          icon: "📘",
          lines: [
            {
              ar: "Ù‡ÙŽØ°ÙŽØ§ Ø²ÙŽÙ…ÙÙŠÙ„ÙÙŠ."
            }
          ]
        },
        {
          icon: "📍",
          lines: [
            {
              ar: "Ø§Ø³Ù’Ù…ÙÙ‡Ù Ø®ÙŽØ§Ù„ÙØ¯ÙŒ."
            }
          ]
        },
        {
          icon: "⭐",
          lines: [
            {
              ar: "Ù‡ÙÙˆÙŽ Ù…ÙÙ†ÙŽ Ø§Ù„Ù’ÙƒÙÙˆÙŽÙŠÙ’ØªÙ."
            }
          ]
        },
        {
          icon: "🟢",
          lines: [
            {
              ar: "Ø®ÙŽØ§Ù„ÙØ¯ÙŒ Ø·ÙŽØ§Ù„ÙØ¨ÙŒ Ø¬ÙŽØ¯ÙÙŠØ¯ÙŒ ÙÙÙŠ Ù…ÙŽØ¯Ù’Ø±ÙŽØ³ÙŽØªÙÙŠ."
            }
          ]
        },
        {
          icon: "✨",
          lines: [
            {
              ar: "Ø¹ÙÙ†Ù’Ø¯ÙŽÙ‡Ù Ù‚ÙŽÙ„ÙŽÙ…ÙŒ Ø¬ÙŽÙ…ÙÙŠÙ„ÙŒ ÙˆÙŽÙƒÙØªÙŽØ§Ø¨ÙŒ Ù‚ÙŽØ¯ÙÙŠÙ…ÙŒ."
            }
          ]
        }
      ],
      keyPoints: [
        "Attached Pronouns (Possessive)",
        "Expressing \"To Have\""
      ]
    },
    {
      title: "More lesson words",
      pattern: "Ø§Ù„Ø¶ÙŽÙ‘Ù…ÙŽØ§Ø¦ÙØ±Ù Ø§Ù„Ù’Ù…ÙØªÙŽÙ‘ØµÙÙ„ÙŽØ©Ù",
      intro: "Add these words to the same pattern. Tap the Arabic words if you need a meaning reminder.",
      cards: [
        {
          icon: "👤",
          ar: "Ø²ÙŽÙˆÙ’Ø¬ÙŒ"
        },
        {
          icon: "👤",
          ar: "Ø·ÙÙÙ’Ù„ÙŒ"
        },
        {
          icon: "👤",
          ar: "ÙÙŽØªÙ‹Ù‰"
        },
        {
          icon: "📍",
          ar: "Ø¹ÙÙ†Ù’Ø¯ÙŽ"
        },
        {
          icon: "📍",
          ar: "Ù…ÙŽØ¹ÙŽ"
        },
        {
          icon: "📍",
          ar: "Ù„ÙÙŠ"
        },
        {
          icon: "⭐",
          ar: "Ø£ÙØ­ÙØ¨ÙÙ‘"
        },
        {
          icon: "🟢",
          ar: "Ø§Ù„Ù’ÙƒÙÙˆÙŽÙŠÙ’ØªÙ"
        }
      ],
      keyPoints: [
        "Attached Pronouns (Possessive)",
        "Expressing \"To Have\""
      ]
    },
    {
      titleArabic: "????????",
      title: "Quick practice",
      pattern: "Ø§Ù„Ø¶ÙŽÙ‘Ù…ÙŽØ§Ø¦ÙØ±Ù Ø§Ù„Ù’Ù…ÙØªÙŽÙ‘ØµÙÙ„ÙŽØ©Ù",
      intro: "Type the Arabic answer. You can type without vowels; the full answer appears after checking.",
      tip: "Tip: focus on the structure first. Harakat can come later.",
      exercise: [
        {
          icon: "✍️",
          prompt: "Type in Arabic: \"My book\"",
          ideal: "ÙƒÙØªÙŽØ§Ø¨ÙÙŠ",
          accepts: [
            "ÙƒØªØ§Ø¨ÙŠ",
            "ÙƒÙØªÙŽØ§Ø¨ÙÙŠ",
            "ÙƒØªØ§Ø¨ÙŠÙŽ"
          ]
        },
        {
          icon: "📘",
          prompt: "Type in Arabic: \"I have a pen\"",
          ideal: "Ø¹ÙÙ†Ù’Ø¯ÙÙŠ Ù‚ÙŽÙ„ÙŽÙ…ÙŒ",
          accepts: [
            "Ø¹Ù†Ø¯ÙŠ Ù‚Ù„Ù…",
            "Ø¹ÙÙ†Ù’Ø¯ÙÙŠ Ù‚ÙŽÙ„ÙŽÙ…ÙŒ",
            "Ø¹Ù†Ø¯ÙŠ Ù‚Ù„Ù…ÙŒ",
            "Ø¹ÙÙ†Ù’Ø¯ÙÙŠ Ù‚Ù„Ù…"
          ]
        }
      ]
    }
  ],
  practiceQuestions: []
};
