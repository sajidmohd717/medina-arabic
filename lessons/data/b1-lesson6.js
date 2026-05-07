/* ============================================================
   b1-lesson6.js - Lesson 6 Data
   ============================================================ */

const LESSON_DATA = {
  book: "book1",
  lessonNum: 6,
  titleArabic: "Ù‡ÙŽØ°ÙÙ‡Ù",
  titleEnglish: "This isâ€¦ (Feminine)",
  summary: "In this lesson, you will learn the feminine counterpart to Ù‡ÙŽØ°ÙŽØ§, which is Ù‡ÙŽØ°ÙÙ‡Ù. You will learn how to identify feminine nouns using the tÄ' marbÅ«á¹­a (Ø©), how adjectives change to match the gender of the noun, and how to use the preposition Ù„ÙÙ€ (for/belongs to).",
  nextLesson: "b1-lesson7.html",
  passMark: 8,
  totalQuestions: 11,
  vocab: [
    {
      ar: "Ù‡ÙŽØ°ÙÙ‡Ù",
      trans: "hÄdhihi",
      meaning: "This (fem.)",
      type: "Demonstrative"
    },
    {
      ar: "Ù…ÙÙ„Ù’Ø¹ÙŽÙ‚ÙŽØ©ÙŒ",
      trans: "milÊ¿aqatun",
      meaning: "A spoon",
      type: "Noun"
    },
    {
      ar: "Ù…ÙÙƒÙ’ÙˆÙŽØ§Ø©ÙŒ",
      trans: "mikwÄtun",
      meaning: "An iron",
      type: "Noun"
    },
    {
      ar: "Ø¯ÙŽØ±ÙŽÙ‘Ø§Ø¬ÙŽØ©ÙŒ",
      trans: "darrÄjatun",
      meaning: "A bicycle",
      type: "Noun"
    },
    {
      ar: "Ø³ÙŽØ§Ø¹ÙŽØ©ÙŒ",
      trans: "sÄÊ¿atun",
      meaning: "A watch / clock",
      type: "Noun"
    },
    {
      ar: "Ø«ÙŽÙ„ÙŽÙ‘Ø§Ø¬ÙŽØ©ÙŒ",
      trans: "thallÄjatun",
      meaning: "A fridge",
      type: "Noun"
    },
    {
      ar: "Ø³ÙŽÙŠÙŽÙ‘Ø§Ø±ÙŽØ©ÙŒ",
      trans: "sayyÄratun",
      meaning: "A car",
      type: "Noun"
    },
    {
      ar: "Ù†ÙŽØ§ÙÙØ°ÙŽØ©ÙŒ",
      trans: "nÄfidhatun",
      meaning: "A window",
      type: "Noun"
    },
    {
      ar: "Ù…ÙØ¯ÙŽØ±ÙÙ‘Ø³ÙŽØ©ÙŒ",
      trans: "mudarrisatun",
      meaning: "A teacher (fem.)",
      type: "Noun"
    },
    {
      ar: "Ø·ÙŽØ¨ÙÙŠØ¨ÙŽØ©ÙŒ",
      trans: "á¹­abÄ«batun",
      meaning: "A doctor (fem.)",
      type: "Noun"
    },
    {
      ar: "Ù‚ÙØ¯Ù’Ø±ÙŒ",
      trans: "qidrun",
      meaning: "A cooking pot",
      type: "Noun (Fem.)"
    },
    {
      ar: "ÙŠÙŽØ¯ÙŒ",
      trans: "yadun",
      meaning: "A hand",
      type: "Noun (Fem.)"
    },
    {
      ar: "Ø±ÙØ¬Ù’Ù„ÙŒ",
      trans: "rijlun",
      meaning: "A leg / foot",
      type: "Noun (Fem.)"
    },
    {
      ar: "Ø¹ÙŽÙŠÙ’Ù†ÙŒ",
      trans: "Ê¿aynun",
      meaning: "An eye",
      type: "Noun (Fem.)"
    },
    {
      ar: "Ø£ÙØ°ÙÙ†ÙŒ",
      trans: "udhunun",
      meaning: "An ear",
      type: "Noun (Fem.)"
    },
    {
      ar: "Ø±ÙŽØ£Ù’Ø³ÙŒ",
      trans: "ra'sun",
      meaning: "A head",
      type: "Noun"
    },
    {
      ar: "Ø£ÙŽÙ†Ù’ÙÙŒ",
      trans: "anfun",
      meaning: "A nose",
      type: "Noun"
    },
    {
      ar: "ÙÙŽÙ…ÙŒ",
      trans: "famun",
      meaning: "A mouth",
      type: "Noun"
    },
    {
      ar: "Ø¬ÙŽÙ…ÙÙŠÙ„ÙŽØ©ÙŒ",
      trans: "jamÄ«latun",
      meaning: "Beautiful (fem.)",
      type: "Adjective"
    },
    {
      ar: "Ø³ÙŽØ±ÙÙŠØ¹ÙŽØ©ÙŒ",
      trans: "sarÄ«Ê¿atun",
      meaning: "Fast (fem.)",
      type: "Adjective"
    },
    {
      ar: "ÙƒÙŽØ¨ÙÙŠØ±ÙŽØ©ÙŒ",
      trans: "kabÄ«ratun",
      meaning: "Big (fem.)",
      type: "Adjective"
    },
    {
      ar: "Ù„ÙÙ€",
      trans: "li-",
      meaning: "For / Belongs to",
      type: "Preposition"
    },
    {
      ar: "Ù„ÙÙ…ÙŽÙ†Ù’",
      trans: "li-man",
      meaning: "Whose? / To whom?",
      type: "Interrogative"
    },
    {
      ar: "Ø£ÙŽÙŠÙ’Ø¶Ù‹Ø§",
      trans: "ayá¸an",
      meaning: "Also / Too",
      type: "Particle"
    },
    {
      ar: "Ø¬ÙØ¯Ù‹Ù‘Ø§",
      trans: "jiddan",
      meaning: "Very",
      type: "Adverb"
    }
  ],
  grammarBlocks: [
    {
      title: "The Feminine \"This\": Ù‡ÙŽØ°ÙÙ‡Ù",
      content: "<p>In Arabic, every noun is either masculine or feminine. To point at a feminine noun that is near, we use <strong>Ù‡ÙŽØ°ÙÙ‡Ù</strong> (hÄdhihi).</p>",
      rule: "Ù‡ÙŽØ°ÙŽØ§ (Masculine) vs. Ù‡ÙŽØ°ÙÙ‡Ù (Feminine)."
    },
    {
      title: "Identifying Feminine Nouns",
      content: "<p>The most common sign of a feminine noun is the <strong>TÄ' MarbÅ«á¹­a (Ø©)</strong> at the end. For example: <strong>Ø³ÙŽÙŠÙŽÙ‘Ø§Ø±ÙŽØ©ÙŒ</strong> (car), <strong>Ø³ÙŽØ§Ø¹ÙŽØ©ÙŒ</strong> (watch).</p><p>However, some words are feminine by nature (like \"mother\" or \"sister\") or by convention (like <strong>Ù‚ÙØ¯Ù’Ø±ÙŒ</strong> - pot, or <strong>Ø´ÙŽÙ…Ù’Ø³ÙŒ</strong> - sun). Double body parts (eyes, ears, hands, legs) are also feminine.</p>",
      rule: "Look for Ø© at the end, but remember body parts and special exceptions!"
    },
    {
      title: "Noun-Adjective Agreement",
      content: "<p>Adjectives must match the gender of the noun they describe. To make a masculine adjective feminine, add a Ø© to the end.</p><ul><li><strong>Ø¨ÙŽÙŠÙ’ØªÙŒ Ø¬ÙŽÙ…ÙÙŠÙ„ÙŒ</strong> (A beautiful house - masc.)</li><li><strong>Ø³ÙŽÙŠÙŽÙ‘Ø§Ø±ÙŽØ©ÙŒ Ø¬ÙŽÙ…ÙÙŠÙ„ÙŽØ©ÙŒ</strong> (A beautiful car - fem.)</li></ul>",
      rule: "Noun gender = Adjective gender."
    },
    {
      title: "The Preposition Ù„ÙÙ€ (Belongs to)",
      content: "<p>The preposition <strong>Ù„ÙÙ€</strong> (li-) means \"for\" or \"belongs to\". It causes the following noun to take a kasra (genitive case).</p><p><strong>Ù„ÙÙ…ÙŽÙ†Ù’ Ù‡ÙŽØ°ÙÙ‡ÙØŸ</strong> means \"Whose is this?\" or \"To whom does this belong?\"</p>",
      rule: "Ù‡ÙŽØ°ÙÙ‡Ù Ù„ÙØ®ÙŽØ§Ù„ÙØ¯Ù = This belongs to Khalid."
    }
  ],
  comprehension: {
    title: "Aminah's Belongings",
    arabic: "Ù‡ÙŽØ°ÙÙ‡Ù Ø¢Ù…ÙÙ†ÙŽØ©Ù. Ù‡ÙÙŠÙŽ Ø·ÙŽØ¨ÙÙŠØ¨ÙŽØ©ÙŒ. Ù‡ÙŽØ°ÙÙ‡Ù Ø³ÙŽÙŠÙŽÙ‘Ø§Ø±ÙŽØ©Ù Ø§Ù„Ø·ÙŽÙ‘Ø¨ÙÙŠØ¨ÙŽØ©Ù. Ø§Ù„Ø³ÙŽÙ‘ÙŠÙŽÙ‘Ø§Ø±ÙŽØ©Ù Ø¬ÙŽÙ…ÙÙŠÙ„ÙŽØ©ÙŒ ÙˆÙŽØ³ÙŽØ±ÙÙŠØ¹ÙŽØ©ÙŒ Ø¬ÙØ¯Ù‹Ù‘Ø§. Ù‡ÙŽØ°ÙÙ‡Ù Ø³ÙŽØ§Ø¹ÙŽØ©Ù Ø¢Ù…ÙÙ†ÙŽØ©ÙŽ. Ù‡ÙÙŠÙŽ Ø¹ÙŽÙ„ÙŽÙ‰ Ø§Ù„Ù’Ù…ÙŽÙƒÙ’ØªÙŽØ¨Ù. Ø§Ù„Ù’Ù…ÙÙ„Ù’Ø¹ÙŽÙ‚ÙŽØ©Ù ÙÙÙŠ Ø§Ù„Ù’Ù‚ÙØ¯Ù’Ø±Ù. Ø§Ù„Ù’Ù‚ÙØ¯Ù’Ø±Ù Ø¹ÙŽÙ„ÙŽÙ‰ Ø§Ù„Ù†ÙŽÙ‘Ø§Ø±Ù. Ù‡ÙŽØ°ÙÙ‡Ù Ø£ÙØ°ÙÙ†ÙŒ ÙˆÙŽÙ‡ÙŽØ°ÙÙ‡Ù Ø¹ÙŽÙŠÙ’Ù†ÙŒ. Ø¢Ù…ÙÙ†ÙŽØ©Ù Ø£ÙŽÙŠÙ’Ø¶Ù‹Ø§ Ø·ÙŽØ§Ù„ÙØ¨ÙŽØ©ÙŒ ÙÙÙŠ Ø§Ù„Ù’Ø¬ÙŽØ§Ù…ÙØ¹ÙŽØ©Ù.",
    english: "This is Aminah. She is a doctor. This is the doctor's car. The car is beautiful and very fast. This is Aminah's watch. It is on the desk. The spoon is in the pot. The pot is on the fire. This is an ear and this is an eye. Aminah is also a student in the university.",
    questions: [
      {
        text: "What is Aminah's profession?",
        options: [
          "A teacher",
          "A doctor",
          "An engineer",
          "A merchant"
        ],
        correct: "A doctor"
      },
      {
        text: "How is the car described?",
        options: [
          "Old and slow",
          "Big and heavy",
          "Beautiful and very fast",
          "Small and clean"
        ],
        correct: "Beautiful and very fast"
      },
      {
        text: "Where is the spoon (Ø§Ù„Ù’Ù…ÙÙ„Ù’Ø¹ÙŽÙ‚ÙŽØ©)?",
        options: [
          "On the desk",
          "In the car",
          "In the pot",
          "In the room"
        ],
        correct: "In the pot"
      },
      {
        text: "Is Aminah only a doctor?",
        options: [
          "Yes, only a doctor",
          "No, she is also a student",
          "No, she is also a teacher",
          "Yes, she is an engineer"
        ],
        correct: "No, she is also a student"
      }
    ]
  },
  quizQuestions: {
    multipleChoice: [
      {
        prompt: "What is the feminine counterpart to Ù‡ÙŽØ°ÙŽØ§?",
        options: [
          "ØªÙÙ„Ù’ÙƒÙŽ",
          "Ù‡ÙŽØ°ÙÙ‡Ù",
          "Ø°ÙŽÙ„ÙÙƒÙŽ",
          "Ù‡ÙÙŠÙŽ"
        ],
        correct: 1
      },
      {
        prompt: "Translate: \"This is a teacher (fem.)\"",
        options: [
          "Ù‡ÙŽØ°ÙŽØ§ Ù…ÙØ¯ÙŽØ±ÙÙ‘Ø³ÙŒ",
          "Ù‡ÙŽØ°ÙÙ‡Ù Ù…ÙØ¯ÙŽØ±ÙÙ‘Ø³ÙŽØ©ÙŒ",
          "Ù‡ÙŽØ°ÙÙ‡Ù Ø·ÙŽØ¨ÙÙŠØ¨ÙŽØ©ÙŒ",
          "Ù‡ÙÙŠÙŽ Ù…ÙØ¯ÙŽØ±ÙÙ‘Ø³ÙŒ"
        ],
        correct: 1
      },
      {
        prompt: "Which of these is a sign of a feminine noun?",
        options: [
          "TanwÄ«n",
          "Al- prefix",
          "TÄ' MarbÅ«á¹­a (Ø©)",
          "Damma ending"
        ],
        correct: 2
      },
      {
        prompt: "Translate: \"Whose is this car?\"",
        options: [
          "Ù„ÙÙ…ÙŽÙ†Ù’ Ù‡ÙŽØ°ÙŽØ§ Ø§Ù„Ø³ÙŽÙ‘ÙŠÙŽÙ‘Ø§Ø±ÙŽØ©ÙØŸ",
          "Ù„ÙÙ…ÙŽÙ†Ù’ Ù‡ÙŽØ°ÙÙ‡Ù Ø§Ù„Ø³ÙŽÙ‘ÙŠÙŽÙ‘Ø§Ø±ÙŽØ©ÙØŸ",
          "Ù…ÙŽÙ†Ù’ Ù‡ÙŽØ°ÙÙ‡Ù Ø§Ù„Ø³ÙŽÙ‘ÙŠÙŽÙ‘Ø§Ø±ÙŽØ©ÙØŸ",
          "Ø£ÙŽÙŠÙ’Ù†ÙŽ Ù‡ÙŽØ°ÙÙ‡Ù Ø§Ù„Ø³ÙŽÙ‘ÙŠÙŽÙ‘Ø§Ø±ÙŽØ©ÙØŸ"
        ],
        correct: 1
      },
      {
        prompt: "Which of these body parts is masculine?",
        options: [
          "Ø¹ÙŽÙŠÙ’Ù†ÙŒ (Eye)",
          "Ø£ÙØ°ÙÙ†ÙŒ (Ear)",
          "ÙŠÙŽØ¯ÙŒ (Hand)",
          "Ø£ÙŽÙ†Ù’ÙÙŒ (Nose)"
        ],
        correct: 3
      },
      {
        prompt: "Translate: \"The bicycle is fast.\"",
        options: [
          "Ø§Ù„Ø¯ÙŽÙ‘Ø±ÙŽÙ‘Ø§Ø¬ÙŽØ©Ù Ø³ÙŽØ±ÙÙŠØ¹ÙŒ",
          "Ø§Ù„Ø¯ÙŽÙ‘Ø±ÙŽÙ‘Ø§Ø¬ÙŽØ©Ù Ø³ÙŽØ±ÙÙŠØ¹ÙŽØ©ÙŒ",
          "Ø§Ù„Ù’Ø­ÙØµÙŽØ§Ù†Ù Ø³ÙŽØ±ÙÙŠØ¹ÙŒ",
          "Ø§Ù„Ø¯ÙŽÙ‘Ø±ÙŽÙ‘Ø§Ø¬ÙŽØ©Ù Ø¬ÙŽÙ…ÙÙŠÙ„ÙŽØ©ÙŒ"
        ],
        correct: 1
      }
    ],
    typing: [
      {
        prompt: "Type in Arabic: \"This is a car.\"",
        ideal: "Ù‡ÙŽØ°ÙÙ‡Ù Ø³ÙŽÙŠÙŽÙ‘Ø§Ø±ÙŽØ©ÙŒ",
        accepts: [
          "Ù‡Ø°Ù‡ Ø³ÙŠØ§Ø±Ø©",
          "Ù‡ÙŽØ°ÙÙ‡Ù Ø³ÙŽÙŠÙŽÙ‘Ø§Ø±ÙŽØ©ÙŒ",
          "Ù‡Ø°Ù‡ Ø³ÙŠØ§Ø±Ø©ÙŒ",
          "Ù‡ÙŽØ°ÙÙ‡Ù Ø³ÙŠØ§Ø±Ø©"
        ]
      },
      {
        prompt: "Type in Arabic: \"Whose is this?\" (feminine)",
        ideal: "Ù„ÙÙ…ÙŽÙ†Ù’ Ù‡ÙŽØ°ÙÙ‡ÙØŸ",
        accepts: [
          "Ù„Ù…Ù† Ù‡Ø°Ù‡",
          "Ù„ÙÙ…ÙŽÙ†Ù’ Ù‡ÙŽØ°ÙÙ‡Ù",
          "Ù„Ù…Ù† Ù‡Ø°Ù‡ØŸ",
          "Ù„ÙÙ…ÙŽÙ†Ù’ Ù‡ÙŽØ°ÙÙ‡ÙØŸ"
        ]
      }
    ],
    conceptCheck: [
      {
        statement: "This lesson's main pattern is connected to: The Feminine \"This\": Ù‡ÙŽØ°ÙÙ‡Ù.",
        correct: true,
        explanation: "Ù‡ÙŽØ°ÙŽØ§ (Masculine) vs. Ù‡ÙŽØ°ÙÙ‡Ù (Feminine)."
      },
      {
        statement: "The Concepts step gives more detail for: Identifying Feminine Nouns.",
        correct: true,
        explanation: "Look for Ø© at the end, but remember body parts and special exceptions!"
      },
      {
        statement: "In This isâ€¦ (Feminine), you can ignore the lesson pattern and still build the Arabic correctly.",
        correct: false,
        explanation: "The pattern is the point of the lesson. Learn keeps it small first, then Concepts explains the rule more fully."
      }
    ]
  },
  guidedPattern: "Ù‡ÙŽØ°ÙÙ‡Ù",
  guidedIntro: "In this lesson, you will learn the feminine counterpart to Ù‡ÙŽØ°ÙŽØ§, which is Ù‡ÙŽØ°ÙÙ‡Ù. You will learn how to identify feminine nouns using the tÄ' marbÅ«á¹­a (Ø©), how adjectives change to match the gender of the noun, and how to use the preposition Ù„ÙÙ€ (for/belongs to).",
  reviewVocabAtEnd: true,
  guidedPages: [
    {
      titleArabic: "Ù‡ÙŽØ°ÙÙ‡Ù",
      title: "Lesson 6",
      pattern: "Ù‡ÙŽØ°ÙÙ‡Ù",
      intro: "In this lesson, you will learn the feminine counterpart to Ù‡ÙŽØ°ÙŽØ§, which is Ù‡ÙŽØ°ÙÙ‡Ù. You will learn how to identify feminine nouns using the tÄ' marbÅ«á¹­a (Ø©), how adjectives change to match the gender of the noun, and how to use the preposition Ù„ÙÙ€ (for/belongs to).",
      cards: [
        {
          icon: "📍",
          ar: "Ù‡ÙŽØ°ÙÙ‡Ù"
        },
        {
          icon: "📍",
          ar: "Ù…ÙÙ„Ù’Ø¹ÙŽÙ‚ÙŽØ©ÙŒ"
        },
        {
          icon: "📍",
          ar: "Ù…ÙÙƒÙ’ÙˆÙŽØ§Ø©ÙŒ"
        },
        {
          icon: "🚗",
          ar: "Ø¯ÙŽØ±ÙŽÙ‘Ø§Ø¬ÙŽØ©ÙŒ"
        },
        {
          icon: "⏱️",
          ar: "Ø³ÙŽØ§Ø¹ÙŽØ©ÙŒ"
        },
        {
          icon: "🔹",
          ar: "Ø«ÙŽÙ„ÙŽÙ‘Ø§Ø¬ÙŽØ©ÙŒ"
        },
        {
          icon: "🚗",
          ar: "Ø³ÙŽÙŠÙŽÙ‘Ø§Ø±ÙŽØ©ÙŒ"
        },
        {
          icon: "🚪",
          ar: "Ù†ÙŽØ§ÙÙØ°ÙŽØ©ÙŒ"
        }
      ],
      keyPoints: [
        "Ù‡ÙŽØ°ÙÙ‡Ù",
        "The Feminine \"This\": Ù‡ÙŽØ°ÙÙ‡Ù"
      ]
    },
    {
      title: "Read the pattern",
      pattern: "Ù‡ÙŽØ°ÙÙ‡Ù",
      intro: "Read these short lines before the Reading step. They reuse the same lesson pattern in context.",
      groups: [
        {
          icon: "📘",
          lines: [
            {
              ar: "Ù‡ÙŽØ°ÙÙ‡Ù Ø¢Ù…ÙÙ†ÙŽØ©Ù."
            }
          ]
        },
        {
          icon: "📍",
          lines: [
            {
              ar: "Ù‡ÙÙŠÙŽ Ø·ÙŽØ¨ÙÙŠØ¨ÙŽØ©ÙŒ."
            }
          ]
        },
        {
          icon: "⭐",
          lines: [
            {
              ar: "Ù‡ÙŽØ°ÙÙ‡Ù Ø³ÙŽÙŠÙŽÙ‘Ø§Ø±ÙŽØ©Ù Ø§Ù„Ø·ÙŽÙ‘Ø¨ÙÙŠØ¨ÙŽØ©Ù."
            }
          ]
        },
        {
          icon: "🟢",
          lines: [
            {
              ar: "Ø§Ù„Ø³ÙŽÙ‘ÙŠÙŽÙ‘Ø§Ø±ÙŽØ©Ù Ø¬ÙŽÙ…ÙÙŠÙ„ÙŽØ©ÙŒ ÙˆÙŽØ³ÙŽØ±ÙÙŠØ¹ÙŽØ©ÙŒ Ø¬ÙØ¯Ù‹Ù‘Ø§."
            }
          ]
        },
        {
          icon: "✨",
          lines: [
            {
              ar: "Ù‡ÙŽØ°ÙÙ‡Ù Ø³ÙŽØ§Ø¹ÙŽØ©Ù Ø¢Ù…ÙÙ†ÙŽØ©ÙŽ."
            }
          ]
        }
      ],
      keyPoints: [
        "The Feminine \"This\": Ù‡ÙŽØ°ÙÙ‡Ù",
        "Identifying Feminine Nouns"
      ]
    },
    {
      title: "More lesson words",
      pattern: "Ù‡ÙŽØ°ÙÙ‡Ù",
      intro: "Add these words to the same pattern. Tap the Arabic words if you need a meaning reminder.",
      cards: [
        {
          icon: "👤",
          ar: "Ù…ÙØ¯ÙŽØ±ÙÙ‘Ø³ÙŽØ©ÙŒ"
        },
        {
          icon: "👤",
          ar: "Ø·ÙŽØ¨ÙÙŠØ¨ÙŽØ©ÙŒ"
        },
        {
          icon: "📍",
          ar: "Ù‚ÙØ¯Ù’Ø±ÙŒ"
        },
        {
          icon: "🟢",
          ar: "ÙŠÙŽØ¯ÙŒ"
        },
        {
          icon: "✨",
          ar: "Ø±ÙØ¬Ù’Ù„ÙŒ"
        },
        {
          icon: "🔹",
          ar: "Ø¹ÙŽÙŠÙ’Ù†ÙŒ"
        },
        {
          icon: "⭐",
          ar: "Ø£ÙØ°ÙÙ†ÙŒ"
        },
        {
          icon: "🟢",
          ar: "Ø±ÙŽØ£Ù’Ø³ÙŒ"
        }
      ],
      keyPoints: [
        "The Feminine \"This\": Ù‡ÙŽØ°ÙÙ‡Ù",
        "Identifying Feminine Nouns"
      ]
    },
    {
      titleArabic: "????????",
      title: "Quick practice",
      pattern: "Ù‡ÙŽØ°ÙÙ‡Ù",
      intro: "Type the Arabic answer. You can type without vowels; the full answer appears after checking.",
      tip: "Tip: focus on the structure first. Harakat can come later.",
      exercise: [
        {
          icon: "✍️",
          prompt: "Type in Arabic: \"This is a car.\"",
          ideal: "Ù‡ÙŽØ°ÙÙ‡Ù Ø³ÙŽÙŠÙŽÙ‘Ø§Ø±ÙŽØ©ÙŒ",
          accepts: [
            "Ù‡Ø°Ù‡ Ø³ÙŠØ§Ø±Ø©",
            "Ù‡ÙŽØ°ÙÙ‡Ù Ø³ÙŽÙŠÙŽÙ‘Ø§Ø±ÙŽØ©ÙŒ",
            "Ù‡Ø°Ù‡ Ø³ÙŠØ§Ø±Ø©ÙŒ",
            "Ù‡ÙŽØ°ÙÙ‡Ù Ø³ÙŠØ§Ø±Ø©"
          ]
        },
        {
          icon: "📘",
          prompt: "Type in Arabic: \"Whose is this?\" (feminine)",
          ideal: "Ù„ÙÙ…ÙŽÙ†Ù’ Ù‡ÙŽØ°ÙÙ‡ÙØŸ",
          accepts: [
            "Ù„Ù…Ù† Ù‡Ø°Ù‡",
            "Ù„ÙÙ…ÙŽÙ†Ù’ Ù‡ÙŽØ°ÙÙ‡Ù",
            "Ù„Ù…Ù† Ù‡Ø°Ù‡ØŸ",
            "Ù„ÙÙ…ÙŽÙ†Ù’ Ù‡ÙŽØ°ÙÙ‡ÙØŸ"
          ]
        }
      ]
    }
  ],
  practiceQuestions: []
};
