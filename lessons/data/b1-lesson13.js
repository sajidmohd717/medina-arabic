/* ============================================================
   b1-lesson13.js - Lesson 13 Data
   ============================================================ */

const LESSON_DATA = {
  book: "book1",
  lessonNum: 13,
  titleArabic: "Ø°ÙŽÙ‡ÙŽØ¨ÙŽ â€” Ø°ÙŽÙ‡ÙŽØ¨ÙŽØªÙ’",
  titleEnglish: "Past Tense Verbs",
  summary: "In this lesson, you will learn your first clear past-tense pattern: he did and she did. Arabic marks a feminine past-tense verb with a quiet ØªÙ’ ending, as in Ø°ÙŽÙ‡ÙŽØ¨ÙŽØªÙ’.",
  nextLesson: "b1-lesson14.html",
  passMark: 8,
  totalQuestions: 11,
  vocab: [
    {
      ar: "Ø°ÙŽÙ‡ÙŽØ¨ÙŽØªÙ’",
      trans: "dhahabat",
      meaning: "She went",
      type: "Verb"
    },
    {
      ar: "Ø®ÙŽØ±ÙŽØ¬ÙŽØªÙ’",
      trans: "kharajat",
      meaning: "She left / went out",
      type: "Verb"
    },
    {
      ar: "Ø¯ÙŽØ®ÙŽÙ„ÙŽ",
      trans: "dakhala",
      meaning: "He entered",
      type: "Verb"
    },
    {
      ar: "Ø¯ÙŽØ®ÙŽÙ„ÙŽØªÙ’",
      trans: "dakhalat",
      meaning: "She entered",
      type: "Verb"
    },
    {
      ar: "Ø¬ÙŽÙ„ÙŽØ³ÙŽ",
      trans: "jalasa",
      meaning: "He sat",
      type: "Verb"
    },
    {
      ar: "Ø¬ÙŽÙ„ÙŽØ³ÙŽØªÙ’",
      trans: "jalasat",
      meaning: "She sat",
      type: "Verb"
    },
    {
      ar: "ÙƒÙŽØªÙŽØ¨ÙŽ",
      trans: "kataba",
      meaning: "He wrote",
      type: "Verb"
    },
    {
      ar: "ÙƒÙŽØªÙŽØ¨ÙŽØªÙ’",
      trans: "katabat",
      meaning: "She wrote",
      type: "Verb"
    },
    {
      ar: "Ù‚ÙŽØ±ÙŽØ£ÙŽ",
      trans: "qaraÊ¾a",
      meaning: "He read",
      type: "Verb"
    },
    {
      ar: "Ù‚ÙŽØ±ÙŽØ£ÙŽØªÙ’",
      trans: "qaraÊ¾at",
      meaning: "She read",
      type: "Verb"
    },
    {
      ar: "Ø±ÙŽØ¬ÙŽØ¹ÙŽ",
      trans: "rajaÊ¿a",
      meaning: "He returned",
      type: "Verb"
    },
    {
      ar: "Ø±ÙŽØ¬ÙŽØ¹ÙŽØªÙ’",
      trans: "rajaÊ¿at",
      meaning: "She returned",
      type: "Verb"
    }
  ],
  grammarBlocks: [
    {
      title: "The Past Tense for \"He\"",
      content: "<p>The basic past-tense verb form often means <strong>he did</strong>. You already met <strong>Ø°ÙŽÙ‡ÙŽØ¨ÙŽ</strong> (he went) and <strong>Ø®ÙŽØ±ÙŽØ¬ÙŽ</strong> (he left). This lesson makes that pattern clear.</p><ul><li><strong>Ø°ÙŽÙ‡ÙŽØ¨ÙŽ</strong> â€” he went</li><li><strong>Ø¯ÙŽØ®ÙŽÙ„ÙŽ</strong> â€” he entered</li><li><strong>Ø¬ÙŽÙ„ÙŽØ³ÙŽ</strong> â€” he sat</li><li><strong>ÙƒÙŽØªÙŽØ¨ÙŽ</strong> â€” he wrote</li></ul>",
      rule: "The plain past-tense form normally means \"he did\"."
    },
    {
      title: "The Past Tense for \"She\"",
      content: "<p>To say <strong>she did</strong>, Arabic adds a quiet <strong>ØªÙ’</strong> to the end of the past-tense verb.</p><ul><li><strong>Ø°ÙŽÙ‡ÙŽØ¨ÙŽ</strong> (he went) â†’ <strong>Ø°ÙŽÙ‡ÙŽØ¨ÙŽØªÙ’</strong> (she went)</li><li><strong>Ø¯ÙŽØ®ÙŽÙ„ÙŽ</strong> (he entered) â†’ <strong>Ø¯ÙŽØ®ÙŽÙ„ÙŽØªÙ’</strong> (she entered)</li><li><strong>Ø¬ÙŽÙ„ÙŽØ³ÙŽ</strong> (he sat) â†’ <strong>Ø¬ÙŽÙ„ÙŽØ³ÙŽØªÙ’</strong> (she sat)</li><li><strong>ÙƒÙŽØªÙŽØ¨ÙŽ</strong> (he wrote) â†’ <strong>ÙƒÙŽØªÙŽØ¨ÙŽØªÙ’</strong> (she wrote)</li></ul>",
      rule: "He did: ÙÙŽØ¹ÙŽÙ„ÙŽ pattern. She did: add ØªÙ’ at the end."
    },
    {
      title: "Verb First or Noun First",
      content: "<p>Arabic can place the verb before the doer, especially in simple past-tense sentences.</p><ul><li><strong>Ø°ÙŽÙ‡ÙŽØ¨ÙŽ Ø§Ù„Ø·Ù‘ÙŽØ§Ù„ÙØ¨Ù</strong> â€” The student went.</li><li><strong>Ø°ÙŽÙ‡ÙŽØ¨ÙŽØªÙ Ø§Ù„Ø·Ù‘ÙŽØ¨ÙÙŠØ¨ÙŽØ©Ù</strong> â€” The doctor went.</li></ul><p>If the doer comes first, the verb still matches the doer in gender in these simple sentences:</p><ul><li><strong>Ø§Ù„Ø·Ù‘ÙŽØ§Ù„ÙØ¨Ù Ø°ÙŽÙ‡ÙŽØ¨ÙŽ</strong> â€” The student went.</li><li><strong>Ø§Ù„Ø·Ù‘ÙŽØ¨ÙÙŠØ¨ÙŽØ©Ù Ø°ÙŽÙ‡ÙŽØ¨ÙŽØªÙ’</strong> â€” The doctor went.</li></ul>",
      rule: "Use the masculine verb with a masculine doer and the feminine verb with a feminine doer."
    }
  ],
  comprehension: {
    title: "Morning at School",
    arabic: "Ø°ÙŽÙ‡ÙŽØ¨ÙŽ Ø®ÙŽØ§Ù„ÙØ¯ÙŒ Ø¥ÙÙ„ÙŽÙ‰ Ø§Ù„Ù’Ù…ÙŽØ¯Ù’Ø±ÙŽØ³ÙŽØ©Ù ØµÙŽØ¨ÙŽØ§Ø­Ù‹Ø§. Ø¯ÙŽØ®ÙŽÙ„ÙŽ Ø§Ù„Ù’ÙÙŽØµÙ’Ù„ÙŽ ÙˆÙŽØ¬ÙŽÙ„ÙŽØ³ÙŽ Ø¹ÙŽÙ„ÙŽÙ‰ Ø§Ù„Ù’ÙƒÙØ±Ù’Ø³ÙÙŠÙ‘Ù. Ø¹ÙÙ†Ù’Ø¯ÙŽÙ‡Ù ÙƒÙØªÙŽØ§Ø¨ÙŒ Ø¬ÙŽØ¯ÙÙŠØ¯ÙŒ ÙˆÙŽÙ‚ÙŽÙ„ÙŽÙ…ÙŒ Ø£ÙŽØ­Ù’Ù…ÙŽØ±Ù. Ù‚ÙŽØ±ÙŽØ£ÙŽ Ø®ÙŽØ§Ù„ÙØ¯ÙŒ Ø§Ù„Ø¯Ù‘ÙŽØ±Ù’Ø³ÙŽ ÙˆÙŽÙƒÙŽØªÙŽØ¨ÙŽ ÙƒÙŽÙ„ÙÙ…ÙŽØ©Ù‹ ÙÙÙŠ Ø§Ù„Ø¯Ù‘ÙŽÙÙ’ØªÙŽØ±Ù. Ø¯ÙŽØ®ÙŽÙ„ÙŽØªÙ’ Ø¢Ù…ÙÙ†ÙŽØ©Ù Ø§Ù„Ù’ÙÙŽØµÙ’Ù„ÙŽ Ø£ÙŽÙŠÙ’Ø¶Ù‹Ø§. Ø¬ÙŽÙ„ÙŽØ³ÙŽØªÙ’ Ù‚ÙŽØ±ÙÙŠØ¨ÙŽØ©Ù‹ Ù…ÙÙ†ÙŽ Ø§Ù„Ù†Ù‘ÙŽØ§ÙÙØ°ÙŽØ©Ù. Ù‚ÙŽØ±ÙŽØ£ÙŽØªÙ’ Ø¢Ù…ÙÙ†ÙŽØ©Ù Ø§Ù„Ù’ÙƒÙØªÙŽØ§Ø¨ÙŽ Ø«ÙÙ…Ù‘ÙŽ ÙƒÙŽØªÙŽØ¨ÙŽØªÙ’ ÙÙÙŠ Ø§Ù„Ø¯Ù‘ÙŽÙÙ’ØªÙŽØ±Ù. Ø¨ÙŽØ¹Ù’Ø¯ÙŽ Ø§Ù„Ø¯Ù‘ÙŽØ±Ù’Ø³Ù Ø±ÙŽØ¬ÙŽØ¹ÙŽ Ø®ÙŽØ§Ù„ÙØ¯ÙŒ Ø¥ÙÙ„ÙŽÙ‰ Ø§Ù„Ù’Ø¨ÙŽÙŠÙ’ØªÙ ÙˆÙŽØ±ÙŽØ¬ÙŽØ¹ÙŽØªÙ’ Ø¢Ù…ÙÙ†ÙŽØ©Ù Ø¥ÙÙ„ÙŽÙ‰ Ø¨ÙŽÙŠÙ’ØªÙÙ‡ÙŽØ§.",
    english: "Khalid went to the school in the morning. He entered the classroom and sat on the chair. He had a new book and a red pen. Khalid read the lesson and wrote a word in the notebook. Aminah entered the classroom too. She sat near the window. Aminah read the book, then wrote in the notebook. After the lesson, Khalid returned home and Aminah returned to her house.",
    questions: [
      {
        text: "Where did Khalid go in the morning?",
        options: [
          "To the mosque",
          "To the school",
          "To the hospital",
          "To Kuwait"
        ],
        correct: "To the school"
      },
      {
        text: "What did Khalid do after entering the classroom?",
        options: [
          "He sat on the chair",
          "He left the school",
          "He opened the door",
          "He went to the market"
        ],
        correct: "He sat on the chair"
      },
      {
        text: "Where did Aminah sit?",
        options: [
          "Near the window",
          "Under the desk",
          "In the hospital",
          "On the table"
        ],
        correct: "Near the window"
      },
      {
        text: "What did both Khalid and Aminah do?",
        options: [
          "They read and wrote",
          "They slept",
          "They opened the house",
          "They went to Kuwait"
        ],
        correct: "They read and wrote"
      }
    ]
  },
  quizQuestions: {
    multipleChoice: [
      {
        prompt: "What does Ø¯ÙŽØ®ÙŽÙ„ÙŽ mean?",
        options: [
          "He entered",
          "She entered",
          "He sat",
          "She wrote"
        ],
        correct: 0
      },
      {
        prompt: "What does Ø¯ÙŽØ®ÙŽÙ„ÙŽØªÙ’ mean?",
        options: [
          "He entered",
          "She entered",
          "He returned",
          "She read"
        ],
        correct: 1
      },
      {
        prompt: "Choose the correct translation: \"She sat.\"",
        options: [
          "Ø¬ÙŽÙ„ÙŽØ³ÙŽ",
          "Ø¬ÙŽÙ„ÙŽØ³ÙŽØªÙ’",
          "Ø¯ÙŽØ®ÙŽÙ„ÙŽØªÙ’",
          "Ø±ÙŽØ¬ÙŽØ¹ÙŽ"
        ],
        correct: 1
      },
      {
        prompt: "Choose the correct translation: \"He wrote.\"",
        options: [
          "ÙƒÙŽØªÙŽØ¨ÙŽ",
          "ÙƒÙŽØªÙŽØ¨ÙŽØªÙ’",
          "Ù‚ÙŽØ±ÙŽØ£ÙŽØªÙ’",
          "Ø¬ÙŽÙ„ÙŽØ³ÙŽ"
        ],
        correct: 0
      },
      {
        prompt: "Complete: Ø®ÙŽØ§Ù„ÙØ¯ÙŒ ___ Ø¥ÙÙ„ÙŽÙ‰ Ø§Ù„Ù’Ù…ÙŽØ¯Ù’Ø±ÙŽØ³ÙŽØ©Ù.",
        options: [
          "Ø°ÙŽÙ‡ÙŽØ¨ÙŽØªÙ’",
          "Ø°ÙŽÙ‡ÙŽØ¨ÙŽ",
          "Ø¬ÙŽÙ„ÙŽØ³ÙŽØªÙ’",
          "Ø¯ÙŽØ®ÙŽÙ„ÙŽØªÙ’"
        ],
        correct: 1
      },
      {
        prompt: "Complete: Ø¢Ù…ÙÙ†ÙŽØ©Ù ___ Ø¥ÙÙ„ÙŽÙ‰ Ø§Ù„Ù’Ø¨ÙŽÙŠÙ’ØªÙ.",
        options: [
          "Ø±ÙŽØ¬ÙŽØ¹ÙŽ",
          "Ø±ÙŽØ¬ÙŽØ¹ÙŽØªÙ’",
          "Ù‚ÙŽØ±ÙŽØ£ÙŽ",
          "ÙƒÙŽØªÙŽØ¨ÙŽ"
        ],
        correct: 1
      }
    ],
    typing: [
      {
        prompt: "Type in Arabic: \"She went\"",
        ideal: "Ø°ÙŽÙ‡ÙŽØ¨ÙŽØªÙ’",
        accepts: [
          "Ø°Ù‡Ø¨Øª",
          "Ø°ÙŽÙ‡ÙŽØ¨ÙŽØªÙ’",
          "Ø°ÙŽÙ‡ÙŽØ¨ÙŽØª"
        ]
      },
      {
        prompt: "Type in Arabic: \"He entered\"",
        ideal: "Ø¯ÙŽØ®ÙŽÙ„ÙŽ",
        accepts: [
          "Ø¯Ø®Ù„",
          "Ø¯ÙŽØ®ÙŽÙ„ÙŽ"
        ]
      }
    ],
    conceptCheck: [
      {
        statement: "This lesson's main pattern is connected to: The Past Tense for \"He\".",
        correct: true,
        explanation: "The plain past-tense form normally means \"he did\"."
      },
      {
        statement: "The Concepts step gives more detail for: The Past Tense for \"She\".",
        correct: true,
        explanation: "He did: ÙÙŽØ¹ÙŽÙ„ÙŽ pattern. She did: add ØªÙ’ at the end."
      },
      {
        statement: "In Past Tense Verbs, you can ignore the lesson pattern and still build the Arabic correctly.",
        correct: false,
        explanation: "The pattern is the point of the lesson. Learn keeps it small first, then Concepts explains the rule more fully."
      }
    ]
  },
  guidedPattern: "Ø°ÙŽÙ‡ÙŽØ¨ÙŽ â€” Ø°ÙŽÙ‡ÙŽØ¨ÙŽØªÙ’",
  guidedIntro: "In this lesson, you will learn your first clear past-tense pattern: he did and she did. Arabic marks a feminine past-tense verb with a quiet ØªÙ’ ending, as in Ø°ÙŽÙ‡ÙŽØ¨ÙŽØªÙ’.",
  reviewVocabAtEnd: true,
  guidedPages: [
    {
      titleArabic: "Ø°ÙŽÙ‡ÙŽØ¨ÙŽ â€” Ø°ÙŽÙ‡ÙŽØ¨ÙŽØªÙ’",
      title: "Lesson 13",
      pattern: "Ø°ÙŽÙ‡ÙŽØ¨ÙŽ â€” Ø°ÙŽÙ‡ÙŽØ¨ÙŽØªÙ’",
      intro: "In this lesson, you will learn your first clear past-tense pattern: he did and she did. Arabic marks a feminine past-tense verb with a quiet ØªÙ’ ending, as in Ø°ÙŽÙ‡ÙŽØ¨ÙŽØªÙ’.",
      cards: [
        {
          icon: "✨",
          ar: "Ø°ÙŽÙ‡ÙŽØ¨ÙŽØªÙ’"
        },
        {
          icon: "🔹",
          ar: "Ø®ÙŽØ±ÙŽØ¬ÙŽØªÙ’"
        },
        {
          icon: "⭐",
          ar: "Ø¯ÙŽØ®ÙŽÙ„ÙŽ"
        },
        {
          icon: "🟢",
          ar: "Ø¯ÙŽØ®ÙŽÙ„ÙŽØªÙ’"
        },
        {
          icon: "✨",
          ar: "Ø¬ÙŽÙ„ÙŽØ³ÙŽ"
        },
        {
          icon: "🔹",
          ar: "Ø¬ÙŽÙ„ÙŽØ³ÙŽØªÙ’"
        },
        {
          icon: "📘",
          ar: "ÙƒÙŽØªÙŽØ¨ÙŽ"
        },
        {
          icon: "📘",
          ar: "ÙƒÙŽØªÙŽØ¨ÙŽØªÙ’"
        }
      ],
      keyPoints: [
        "Ø°ÙŽÙ‡ÙŽØ¨ÙŽ â€” Ø°ÙŽÙ‡ÙŽØ¨ÙŽØªÙ’",
        "The Past Tense for \"He\""
      ]
    },
    {
      title: "Read the pattern",
      pattern: "Ø°ÙŽÙ‡ÙŽØ¨ÙŽ â€” Ø°ÙŽÙ‡ÙŽØ¨ÙŽØªÙ’",
      intro: "Read these short lines before the Reading step. They reuse the same lesson pattern in context.",
      groups: [
        {
          icon: "📘",
          lines: [
            {
              ar: "Ø°ÙŽÙ‡ÙŽØ¨ÙŽ Ø®ÙŽØ§Ù„ÙØ¯ÙŒ Ø¥ÙÙ„ÙŽÙ‰ Ø§Ù„Ù’Ù…ÙŽØ¯Ù’Ø±ÙŽØ³ÙŽØ©Ù ØµÙŽØ¨ÙŽØ§Ø­Ù‹Ø§."
            }
          ]
        },
        {
          icon: "📍",
          lines: [
            {
              ar: "Ø¯ÙŽØ®ÙŽÙ„ÙŽ Ø§Ù„Ù’ÙÙŽØµÙ’Ù„ÙŽ ÙˆÙŽØ¬ÙŽÙ„ÙŽØ³ÙŽ Ø¹ÙŽÙ„ÙŽÙ‰ Ø§Ù„Ù’ÙƒÙØ±Ù’Ø³ÙÙŠÙ‘Ù."
            }
          ]
        },
        {
          icon: "⭐",
          lines: [
            {
              ar: "Ø¹ÙÙ†Ù’Ø¯ÙŽÙ‡Ù ÙƒÙØªÙŽØ§Ø¨ÙŒ Ø¬ÙŽØ¯ÙÙŠØ¯ÙŒ ÙˆÙŽÙ‚ÙŽÙ„ÙŽÙ…ÙŒ Ø£ÙŽØ­Ù’Ù…ÙŽØ±Ù."
            }
          ]
        },
        {
          icon: "🟢",
          lines: [
            {
              ar: "Ù‚ÙŽØ±ÙŽØ£ÙŽ Ø®ÙŽØ§Ù„ÙØ¯ÙŒ Ø§Ù„Ø¯Ù‘ÙŽØ±Ù’Ø³ÙŽ ÙˆÙŽÙƒÙŽØªÙŽØ¨ÙŽ ÙƒÙŽÙ„ÙÙ…ÙŽØ©Ù‹ ÙÙÙŠ Ø§Ù„Ø¯Ù‘ÙŽÙÙ’ØªÙŽØ±Ù."
            }
          ]
        },
        {
          icon: "✨",
          lines: [
            {
              ar: "Ø¯ÙŽØ®ÙŽÙ„ÙŽØªÙ’ Ø¢Ù…ÙÙ†ÙŽØ©Ù Ø§Ù„Ù’ÙÙŽØµÙ’Ù„ÙŽ Ø£ÙŽÙŠÙ’Ø¶Ù‹Ø§."
            }
          ]
        }
      ],
      keyPoints: [
        "The Past Tense for \"He\"",
        "The Past Tense for \"She\""
      ]
    },
    {
      title: "More lesson words",
      pattern: "Ø°ÙŽÙ‡ÙŽØ¨ÙŽ â€” Ø°ÙŽÙ‡ÙŽØ¨ÙŽØªÙ’",
      intro: "Add these words to the same pattern. Tap the Arabic words if you need a meaning reminder.",
      cards: [
        {
          icon: "📘",
          ar: "Ù‚ÙŽØ±ÙŽØ£ÙŽ"
        },
        {
          icon: "📘",
          ar: "Ù‚ÙŽØ±ÙŽØ£ÙŽØªÙ’"
        },
        {
          icon: "⭐",
          ar: "Ø±ÙŽØ¬ÙŽØ¹ÙŽ"
        },
        {
          icon: "🟢",
          ar: "Ø±ÙŽØ¬ÙŽØ¹ÙŽØªÙ’"
        }
      ],
      keyPoints: [
        "The Past Tense for \"He\"",
        "The Past Tense for \"She\""
      ]
    },
    {
      titleArabic: "????????",
      title: "Quick practice",
      pattern: "Ø°ÙŽÙ‡ÙŽØ¨ÙŽ â€” Ø°ÙŽÙ‡ÙŽØ¨ÙŽØªÙ’",
      intro: "Type the Arabic answer. You can type without vowels; the full answer appears after checking.",
      tip: "Tip: focus on the structure first. Harakat can come later.",
      exercise: [
        {
          icon: "✍️",
          prompt: "Type in Arabic: \"She went\"",
          ideal: "Ø°ÙŽÙ‡ÙŽØ¨ÙŽØªÙ’",
          accepts: [
            "Ø°Ù‡Ø¨Øª",
            "Ø°ÙŽÙ‡ÙŽØ¨ÙŽØªÙ’",
            "Ø°ÙŽÙ‡ÙŽØ¨ÙŽØª"
          ]
        },
        {
          icon: "📘",
          prompt: "Type in Arabic: \"He entered\"",
          ideal: "Ø¯ÙŽØ®ÙŽÙ„ÙŽ",
          accepts: [
            "Ø¯Ø®Ù„",
            "Ø¯ÙŽØ®ÙŽÙ„ÙŽ"
          ]
        }
      ]
    }
  ],
  practiceQuestions: []
};
