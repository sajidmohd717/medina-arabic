/* ============================================================
   b1-lesson9.js - Lesson 9 Data
   ============================================================ */

const LESSON_DATA = {
  book: "book1",
  lessonNum: 9,
  titleArabic: "Ø§Ù„Ù†ÙŽÙ‘Ø¹Ù’ØªÙ ÙˆÙŽØ§Ù„Ù’Ù…ÙŽÙ†Ù’Ø¹ÙÙˆØªÙ",
  titleEnglish: "Adjectives (Qualifying Nouns)",
  summary: "In this lesson, you will learn how to use adjectives (Na't) to describe nouns (Man'ut). You will discover the \"Golden Rule\" of Arabic adjectives: they must match the noun they describe in gender, definiteness, and grammatical case.",
  nextLesson: "b1-lesson10.html",
  passMark: 8,
  totalQuestions: 11,
  vocab: [
    {
      ar: "Ù†ÙŽØ¹Ù’ØªÙŒ",
      trans: "na'tun",
      meaning: "Adjective / Qualifiers",
      type: "Grammar"
    },
    {
      ar: "Ù…ÙŽÙ†Ù’Ø¹ÙÙˆØªÙŒ",
      trans: "man'Å«tun",
      meaning: "The noun being described",
      type: "Grammar"
    },
    {
      ar: "Ø¹ÙØµÙ’ÙÙÙˆØ±ÙŒ",
      trans: "Ê¿uá¹£fÅ«run",
      meaning: "A sparrow",
      type: "Noun"
    },
    {
      ar: "Ø·ÙŽÙŠÙ’Ø±ÙŒ",
      trans: "á¹­ayrun",
      meaning: "A bird",
      type: "Noun"
    },
    {
      ar: "Ù„ÙØºÙŽØ©ÙŒ",
      trans: "lughatun",
      meaning: "A language",
      type: "Noun"
    },
    {
      ar: "Ù…ÙŽØ¯ÙÙŠÙ†ÙŽØ©ÙŒ",
      trans: "madÄ«natun",
      meaning: "A city",
      type: "Noun"
    },
    {
      ar: "Ø§Ù„Ù’Ù‚ÙŽØ§Ù‡ÙØ±ÙŽØ©Ù",
      trans: "al-qÄhiratu",
      meaning: "Cairo",
      type: "Noun"
    },
    {
      ar: "Ø§Ù„Ù’ÙŠÙŽÙˆÙ’Ù…ÙŽ",
      trans: "al-yawma",
      meaning: "Today",
      type: "Adverb"
    },
    {
      ar: "Ù„ÙÙ…ÙŽØ§Ø°ÙŽØ§",
      trans: "limÄdhÄ",
      meaning: "Why?",
      type: "Interrogative"
    },
    {
      ar: "Ø§Ù„Ù’ÙƒÙÙˆØ¨Ù",
      trans: "al-kÅ«bu",
      meaning: "The cup / glass",
      type: "Noun"
    },
    {
      ar: "Ø´ÙŽÙ‡ÙÙŠØ±ÙŒ",
      trans: "shahÄ«run",
      meaning: "Famous",
      type: "Adjective"
    },
    {
      ar: "Ø³ÙŽÙ‡Ù’Ù„ÙŒ",
      trans: "sahlun",
      meaning: "Easy",
      type: "Adjective"
    },
    {
      ar: "ØµÙŽØ¹Ù’Ø¨ÙŒ",
      trans: "á¹£aÊ¿bun",
      meaning: "Difficult",
      type: "Adjective"
    },
    {
      ar: "Ù…ÙØ¬Ù’ØªÙŽÙ‡ÙØ¯ÙŒ",
      trans: "mujtahidun",
      meaning: "Hardworking",
      type: "Adjective"
    },
    {
      ar: "ÙƒÙŽØ³Ù’Ù„ÙŽØ§Ù†Ù",
      trans: "kaslÄnu",
      meaning: "Lazy",
      type: "Adjective"
    },
    {
      ar: "Ø¬ÙŽÙˆÙ’Ø¹ÙŽØ§Ù†Ù",
      trans: "jawÊ¿Änu",
      meaning: "Hungry",
      type: "Adjective"
    },
    {
      ar: "Ø¹ÙŽØ·Ù’Ø´ÙŽØ§Ù†Ù",
      trans: "Ê¿aá¹­shÄnu",
      meaning: "Thirsty",
      type: "Adjective"
    },
    {
      ar: "ØºÙŽØ¶Ù’Ø¨ÙŽØ§Ù†Ù",
      trans: "ghaá¸bÄnu",
      meaning: "Angry",
      type: "Adjective"
    },
    {
      ar: "Ù…ÙŽÙ„Ù’Ø¢Ù†Ù",
      trans: "mal'Änu",
      meaning: "Full",
      type: "Adjective"
    }
  ],
  grammarBlocks: [
    {
      title: "The Noun-Adjective Phrase",
      content: "<p>In Arabic, the adjective (<strong>Na't</strong>) comes <u>after</u> the noun it describes (<strong>Man'ut</strong>). For example, \"A new book\" is written as \"Book new\".</p>",
      rule: "ÙƒÙØªÙŽØ§Ø¨ÙŒ (Man'ut) + Ø¬ÙŽØ¯ÙÙŠØ¯ÙŒ (Na't) = ÙƒÙØªÙŽØ§Ø¨ÙŒ Ø¬ÙŽØ¯ÙÙŠØ¯ÙŒ (A new book)."
    },
    {
      title: "The Matching Rule",
      content: "<p>The adjective is a \"follower\". It must match the noun in four things:</p><ul><li><strong>Gender</strong>: Masc/Masc or Fem/Fem.</li><li><strong>Definiteness</strong>: Both have Ø§Ù„Ù€ or both have tanwÄ«n.</li><li><strong>Case</strong>: Both end in damma, kasra, or fatha.</li></ul>",
      rule: "Ø§Ù„Ù’Ù…ÙØ¯ÙŽØ±ÙÙ‘Ø³Ù (Definite) + Ø§Ù„Ù’Ø¬ÙŽØ¯ÙÙŠØ¯Ù (Definite) = \"The new teacher.\""
    },
    {
      title: "Diptote Adjectives (-aanu)",
      content: "<p>Some adjectives follow a special pattern ending in <strong>Ù€ÙŽØ§Ù†Ù</strong> (aanu). These words <u>never</u> take tanwÄ«n and only have one damma at the end.</p>",
      rule: "Ø£ÙŽÙ†ÙŽØ§ Ø¬ÙŽÙˆÙ’Ø¹ÙŽØ§Ù†Ù (I am hungry) â€” never say Ø¬ÙŽÙˆÙ’Ø¹ÙŽØ§Ù†ÙŒ âŒ"
    }
  ],
  comprehension: {
    title: "The Hardworking Student",
    arabic: "Ù‡ÙŽØ°ÙŽØ§ Ø­ÙŽØ§Ù…ÙØ¯ÙŒ. Ù‡ÙÙˆÙŽ Ø·ÙŽØ§Ù„ÙØ¨ÙŒ Ø¬ÙŽØ¯ÙÙŠØ¯ÙŒ ÙÙÙŠ Ø§Ù„Ù’Ù…ÙŽØ¯Ù’Ø±ÙŽØ³ÙŽØ©Ù. Ø­ÙŽØ§Ù…ÙØ¯ÙŒ Ø·ÙŽØ§Ù„ÙØ¨ÙŒ Ù…ÙØ¬Ù’ØªÙŽÙ‡ÙØ¯ÙŒ ÙˆÙŽØ°ÙŽÙƒÙÙŠÙŒÙ‘. Ø§Ù„Ù’Ø¹ÙŽØ±ÙŽØ¨ÙÙŠÙŽÙ‘Ø©Ù Ù„ÙØºÙŽØ©ÙŒ Ø¬ÙŽÙ…ÙÙŠÙ„ÙŽØ©ÙŒ ÙˆÙŽØ³ÙŽÙ‡Ù’Ù„ÙŽØ©ÙŒ. Ø­ÙŽØ§Ù…ÙØ¯ÙŒ Ø¬ÙŽÙˆÙ’Ø¹ÙŽØ§Ù†Ù Ø§Ù„Ø¢Ù†ÙŽ. Ù‡ÙÙˆÙŽ ÙŠÙŽØ°Ù’Ù‡ÙŽØ¨Ù Ø¥ÙÙ„ÙŽÙ‰ Ø§Ù„Ù’Ù…ÙŽØ·Ù’Ø¹ÙŽÙ…Ù. Ø§Ù„Ù’Ù…ÙŽØ·Ù’Ø¹ÙŽÙ…Ù Ø¨ÙŽØ¹ÙÙŠØ¯ÙŒ Ø¹ÙŽÙ†Ù Ø§Ù„Ù’Ù…ÙŽØ¯Ù’Ø±ÙŽØ³ÙŽØ©Ù. Ø­ÙŽØ§Ù…ÙØ¯ÙŒ ØºÙŽØ¶Ù’Ø¨ÙŽØ§Ù†Ù Ù„ÙÙ…ÙŽØ§Ø°ÙŽØ§ØŸ Ù„ÙØ£ÙŽÙ†ÙŽÙ‘ Ø§Ù„Ù’ÙƒÙÙˆØ¨ÙŽ ÙˆÙŽØ³ÙØ®ÙŒ.",
    english: "This is Hamid. He is a new student in the school. Hamid is a hardworking and intelligent student. Arabic is a beautiful and easy language. Hamid is hungry now. He is going to the restaurant. The restaurant is far from the school. Why is Hamid angry? Because the cup is dirty.",
    questions: [
      {
        text: "How is Hamid described as a student?",
        options: [
          "Lazy and small",
          "Hardworking and intelligent",
          "Famous and rich",
          "Old and tall"
        ],
        correct: "Hardworking and intelligent"
      },
      {
        text: "What is Hamid's opinion of the Arabic language?",
        options: [
          "Difficult and old",
          "Beautiful and easy",
          "Famous and large",
          "New and clean"
        ],
        correct: "Beautiful and easy"
      },
      {
        text: "Why is Hamid going to the restaurant?",
        options: [
          "Because he is thirsty",
          "Because he is hungry",
          "Because he is angry",
          "Because he is a teacher"
        ],
        correct: "Because he is hungry"
      },
      {
        text: "Why is Hamid angry (ØºÙŽØ¶Ù’Ø¨ÙŽØ§Ù†) at the end?",
        options: [
          "Because the school is far",
          "Because the restaurant is closed",
          "Because the cup is dirty",
          "Because the teacher is new"
        ],
        correct: "Because the cup is dirty"
      }
    ]
  },
  quizQuestions: {
    multipleChoice: [
      {
        prompt: "Translate: \"A hardworking student\"",
        options: [
          "Ø·ÙŽØ§Ù„ÙØ¨ÙŒ Ù…ÙØ¬Ù’ØªÙŽÙ‡ÙØ¯ÙŒ",
          "Ø§Ù„Ø·ÙŽÙ‘Ø§Ù„ÙØ¨Ù Ø§Ù„Ù’Ù…ÙØ¬Ù’ØªÙŽÙ‡ÙØ¯Ù",
          "Ø·ÙŽØ§Ù„ÙØ¨ÙŒ Ø¬ÙŽØ¯ÙÙŠØ¯ÙŒ",
          "Ø·ÙŽØ§Ù„ÙØ¨ÙŒ ÙƒÙŽØ³Ù’Ù„ÙŽØ§Ù†Ù"
        ],
        correct: 0
      },
      {
        prompt: "Which of these adjectives does NOT take tanwÄ«n?",
        options: [
          "Ø´ÙŽÙ‡ÙÙŠØ±ÙŒ",
          "Ø³ÙŽÙ‡Ù’Ù„ÙŒ",
          "ØºÙŽØ¶Ù’Ø¨ÙŽØ§Ù†Ù",
          "Ø¬ÙŽÙ…ÙÙŠÙ„ÙŒ"
        ],
        correct: 2
      },
      {
        prompt: "Translate: \"The easy language\"",
        options: [
          "Ù„ÙØºÙŽØ©ÙŒ Ø³ÙŽÙ‡Ù’Ù„ÙŽØ©ÙŒ",
          "Ø§Ù„Ù„ÙÙ‘ØºÙŽØ©Ù Ø§Ù„Ø³ÙŽÙ‘Ù‡Ù’Ù„ÙŽØ©Ù",
          "Ø§Ù„Ù„ÙÙ‘ØºÙŽØ©Ù Ø§Ù„ØµÙŽÙ‘Ø¹Ù’Ø¨ÙŽØ©Ù",
          "Ù„ÙØºÙŽØ©ÙŒ Ø¬ÙŽÙ…ÙÙŠÙ„ÙŽØ©ÙŒ"
        ],
        correct: 1
      },
      {
        prompt: "What does Ù…ÙŽÙ„Ù’Ø¢Ù†Ù mean?",
        options: [
          "Empty",
          "Full",
          "Broken",
          "Open"
        ],
        correct: 1
      },
      {
        prompt: "In Arabic, where does the adjective go?",
        options: [
          "Before the noun",
          "After the noun",
          "Inside the noun",
          "Anywhere"
        ],
        correct: 1
      },
      {
        prompt: "Translate: \"I am thirsty.\"",
        options: [
          "Ø£ÙŽÙ†ÙŽØ§ Ø¬ÙŽÙˆÙ’Ø¹ÙŽØ§Ù†Ù",
          "Ø£ÙŽÙ†ÙŽØ§ Ø¹ÙŽØ·Ù’Ø´ÙŽØ§Ù†Ù",
          "Ø£ÙŽÙ†ÙŽØ§ ÙƒÙŽØ³Ù’Ù„ÙŽØ§Ù†Ù",
          "Ø£ÙŽÙ†ÙŽØ§ ØºÙŽØ¶Ù’Ø¨ÙŽØ§Ù†Ù"
        ],
        correct: 1
      }
    ],
    typing: [
      {
        prompt: "Type in Arabic: \"Arabic is a beautiful language.\"",
        ideal: "Ø§Ù„Ù’Ø¹ÙŽØ±ÙŽØ¨ÙÙŠÙŽÙ‘Ø©Ù Ù„ÙØºÙŽØ©ÙŒ Ø¬ÙŽÙ…ÙÙŠÙ„ÙŽØ©ÙŒ",
        accepts: [
          "Ø§Ù„Ø¹Ø±Ø¨ÙŠØ© Ù„ØºØ© Ø¬Ù…ÙŠÙ„Ø©",
          "Ø§Ù„Ù’Ø¹ÙŽØ±ÙŽØ¨ÙÙŠÙŽÙ‘Ø©Ù Ù„ÙØºÙŽØ©ÙŒ Ø¬ÙŽÙ…ÙÙŠÙ„ÙŽØ©ÙŒ",
          "Ø§Ù„Ø¹Ø±Ø¨ÙŠØ© Ù„ØºØ© Ø¬Ù…ÙŠÙ„Ø©ÙŒ",
          "Ø§Ù„Ù’Ø¹ÙŽØ±ÙŽØ¨ÙÙŠÙŽÙ‘Ø© Ù„ÙØºÙŽØ© Ø¬ÙŽÙ…ÙÙŠÙ„ÙŽØ©"
        ]
      },
      {
        prompt: "Type in Arabic: \"I am hungry.\"",
        ideal: "Ø£ÙŽÙ†ÙŽØ§ Ø¬ÙŽÙˆÙ’Ø¹ÙŽØ§Ù†Ù",
        accepts: [
          "Ø£Ù†Ø§ Ø¬ÙˆØ¹Ø§Ù†",
          "Ø£ÙŽÙ†ÙŽØ§ Ø¬ÙŽÙˆÙ’Ø¹ÙŽØ§Ù†Ù",
          "Ø£Ù†Ø§ Ø¬ÙˆØ¹Ø§Ù†Ù",
          "Ø£ÙŽÙ†ÙŽØ§ Ø¬ÙˆØ¹Ø§Ù†"
        ]
      }
    ],
    conceptCheck: [
      {
        statement: "This lesson's main pattern is connected to: The Noun-Adjective Phrase.",
        correct: true,
        explanation: "ÙƒÙØªÙŽØ§Ø¨ÙŒ (Man'ut) + Ø¬ÙŽØ¯ÙÙŠØ¯ÙŒ (Na't) = ÙƒÙØªÙŽØ§Ø¨ÙŒ Ø¬ÙŽØ¯ÙÙŠØ¯ÙŒ (A new book)."
      },
      {
        statement: "The Concepts step gives more detail for: The Matching Rule.",
        correct: true,
        explanation: "Ø§Ù„Ù’Ù…ÙØ¯ÙŽØ±ÙÙ‘Ø³Ù (Definite) + Ø§Ù„Ù’Ø¬ÙŽØ¯ÙÙŠØ¯Ù (Definite) = \"The new teacher.\""
      },
      {
        statement: "In Adjectives (Qualifying Nouns), you can ignore the lesson pattern and still build the Arabic correctly.",
        correct: false,
        explanation: "The pattern is the point of the lesson. Learn keeps it small first, then Concepts explains the rule more fully."
      }
    ]
  },
  guidedPattern: "Ø§Ù„Ù†ÙŽÙ‘Ø¹Ù’ØªÙ ÙˆÙŽØ§Ù„Ù’Ù…ÙŽÙ†Ù’Ø¹ÙÙˆØªÙ",
  guidedIntro: "In this lesson, you will learn how to use adjectives (Na't) to describe nouns (Man'ut). You will discover the \"Golden Rule\" of Arabic adjectives: they must match the noun they describe in gender, definiteness, and grammatical case.",
  reviewVocabAtEnd: true,
  guidedPages: [
    {
      titleArabic: "Ø§Ù„Ù†ÙŽÙ‘Ø¹Ù’ØªÙ ÙˆÙŽØ§Ù„Ù’Ù…ÙŽÙ†Ù’Ø¹ÙÙˆØªÙ",
      title: "Lesson 9",
      pattern: "Ø§Ù„Ù†ÙŽÙ‘Ø¹Ù’ØªÙ ÙˆÙŽØ§Ù„Ù’Ù…ÙŽÙ†Ù’Ø¹ÙÙˆØªÙ",
      intro: "In this lesson, you will learn how to use adjectives (Na't) to describe nouns (Man'ut). You will discover the \"Golden Rule\" of Arabic adjectives: they must match the noun they describe in gender, definiteness, and grammatical case.",
      cards: [
        {
          icon: "✨",
          ar: "Ù†ÙŽØ¹Ù’ØªÙŒ"
        },
        {
          icon: "📍",
          ar: "Ù…ÙŽÙ†Ù’Ø¹ÙÙˆØªÙŒ"
        },
        {
          icon: "🐦",
          ar: "Ø¹ÙØµÙ’ÙÙÙˆØ±ÙŒ"
        },
        {
          icon: "🐦",
          ar: "Ø·ÙŽÙŠÙ’Ø±ÙŒ"
        },
        {
          icon: "📘",
          ar: "Ù„ÙØºÙŽØ©ÙŒ"
        },
        {
          icon: "🏠",
          ar: "Ù…ÙŽØ¯ÙÙŠÙ†ÙŽØ©ÙŒ"
        },
        {
          icon: "☀️",
          ar: "Ø§Ù„Ù’Ù‚ÙŽØ§Ù‡ÙØ±ÙŽØ©Ù"
        },
        {
          icon: "📍",
          ar: "Ø§Ù„Ù’ÙŠÙŽÙˆÙ’Ù…ÙŽ"
        }
      ],
      keyPoints: [
        "Ø§Ù„Ù†ÙŽÙ‘Ø¹Ù’ØªÙ ÙˆÙŽØ§Ù„Ù’Ù…ÙŽÙ†Ù’Ø¹ÙÙˆØªÙ",
        "The Noun-Adjective Phrase"
      ]
    },
    {
      title: "Read the pattern",
      pattern: "Ø§Ù„Ù†ÙŽÙ‘Ø¹Ù’ØªÙ ÙˆÙŽØ§Ù„Ù’Ù…ÙŽÙ†Ù’Ø¹ÙÙˆØªÙ",
      intro: "Read these short lines before the Reading step. They reuse the same lesson pattern in context.",
      groups: [
        {
          icon: "📘",
          lines: [
            {
              ar: "Ù‡ÙŽØ°ÙŽØ§ Ø­ÙŽØ§Ù…ÙØ¯ÙŒ."
            }
          ]
        },
        {
          icon: "📍",
          lines: [
            {
              ar: "Ù‡ÙÙˆÙŽ Ø·ÙŽØ§Ù„ÙØ¨ÙŒ Ø¬ÙŽØ¯ÙÙŠØ¯ÙŒ ÙÙÙŠ Ø§Ù„Ù’Ù…ÙŽØ¯Ù’Ø±ÙŽØ³ÙŽØ©Ù."
            }
          ]
        },
        {
          icon: "⭐",
          lines: [
            {
              ar: "Ø­ÙŽØ§Ù…ÙØ¯ÙŒ Ø·ÙŽØ§Ù„ÙØ¨ÙŒ Ù…ÙØ¬Ù’ØªÙŽÙ‡ÙØ¯ÙŒ ÙˆÙŽØ°ÙŽÙƒÙÙŠÙŒÙ‘."
            }
          ]
        },
        {
          icon: "🟢",
          lines: [
            {
              ar: "Ø§Ù„Ù’Ø¹ÙŽØ±ÙŽØ¨ÙÙŠÙŽÙ‘Ø©Ù Ù„ÙØºÙŽØ©ÙŒ Ø¬ÙŽÙ…ÙÙŠÙ„ÙŽØ©ÙŒ ÙˆÙŽØ³ÙŽÙ‡Ù’Ù„ÙŽØ©ÙŒ."
            }
          ]
        },
        {
          icon: "✨",
          lines: [
            {
              ar: "Ø­ÙŽØ§Ù…ÙØ¯ÙŒ Ø¬ÙŽÙˆÙ’Ø¹ÙŽØ§Ù†Ù Ø§Ù„Ø¢Ù†ÙŽ."
            }
          ]
        }
      ],
      keyPoints: [
        "The Noun-Adjective Phrase",
        "The Matching Rule"
      ]
    },
    {
      title: "More lesson words",
      pattern: "Ø§Ù„Ù†ÙŽÙ‘Ø¹Ù’ØªÙ ÙˆÙŽØ§Ù„Ù’Ù…ÙŽÙ†Ù’Ø¹ÙÙˆØªÙ",
      intro: "Add these words to the same pattern. Tap the Arabic words if you need a meaning reminder.",
      cards: [
        {
          icon: "📍",
          ar: "Ù„ÙÙ…ÙŽØ§Ø°ÙŽØ§"
        },
        {
          icon: "🔹",
          ar: "Ø§Ù„Ù’ÙƒÙÙˆØ¨Ù"
        },
        {
          icon: "⭐",
          ar: "Ø´ÙŽÙ‡ÙÙŠØ±ÙŒ"
        },
        {
          icon: "🟢",
          ar: "Ø³ÙŽÙ‡Ù’Ù„ÙŒ"
        },
        {
          icon: "✨",
          ar: "ØµÙŽØ¹Ù’Ø¨ÙŒ"
        },
        {
          icon: "📍",
          ar: "Ù…ÙØ¬Ù’ØªÙŽÙ‡ÙØ¯ÙŒ"
        },
        {
          icon: "⭐",
          ar: "ÙƒÙŽØ³Ù’Ù„ÙŽØ§Ù†Ù"
        },
        {
          icon: "🟢",
          ar: "Ø¬ÙŽÙˆÙ’Ø¹ÙŽØ§Ù†Ù"
        }
      ],
      keyPoints: [
        "The Noun-Adjective Phrase",
        "The Matching Rule"
      ]
    },
    {
      titleArabic: "????????",
      title: "Quick practice",
      pattern: "Ø§Ù„Ù†ÙŽÙ‘Ø¹Ù’ØªÙ ÙˆÙŽØ§Ù„Ù’Ù…ÙŽÙ†Ù’Ø¹ÙÙˆØªÙ",
      intro: "Type the Arabic answer. You can type without vowels; the full answer appears after checking.",
      tip: "Tip: focus on the structure first. Harakat can come later.",
      exercise: [
        {
          icon: "✍️",
          prompt: "Type in Arabic: \"Arabic is a beautiful language.\"",
          ideal: "Ø§Ù„Ù’Ø¹ÙŽØ±ÙŽØ¨ÙÙŠÙŽÙ‘Ø©Ù Ù„ÙØºÙŽØ©ÙŒ Ø¬ÙŽÙ…ÙÙŠÙ„ÙŽØ©ÙŒ",
          accepts: [
            "Ø§Ù„Ø¹Ø±Ø¨ÙŠØ© Ù„ØºØ© Ø¬Ù…ÙŠÙ„Ø©",
            "Ø§Ù„Ù’Ø¹ÙŽØ±ÙŽØ¨ÙÙŠÙŽÙ‘Ø©Ù Ù„ÙØºÙŽØ©ÙŒ Ø¬ÙŽÙ…ÙÙŠÙ„ÙŽØ©ÙŒ",
            "Ø§Ù„Ø¹Ø±Ø¨ÙŠØ© Ù„ØºØ© Ø¬Ù…ÙŠÙ„Ø©ÙŒ",
            "Ø§Ù„Ù’Ø¹ÙŽØ±ÙŽØ¨ÙÙŠÙŽÙ‘Ø© Ù„ÙØºÙŽØ© Ø¬ÙŽÙ…ÙÙŠÙ„ÙŽØ©"
          ]
        },
        {
          icon: "📘",
          prompt: "Type in Arabic: \"I am hungry.\"",
          ideal: "Ø£ÙŽÙ†ÙŽØ§ Ø¬ÙŽÙˆÙ’Ø¹ÙŽØ§Ù†Ù",
          accepts: [
            "Ø£Ù†Ø§ Ø¬ÙˆØ¹Ø§Ù†",
            "Ø£ÙŽÙ†ÙŽØ§ Ø¬ÙŽÙˆÙ’Ø¹ÙŽØ§Ù†Ù",
            "Ø£Ù†Ø§ Ø¬ÙˆØ¹Ø§Ù†Ù",
            "Ø£ÙŽÙ†ÙŽØ§ Ø¬ÙˆØ¹Ø§Ù†"
          ]
        }
      ]
    }
  ],
  practiceQuestions: []
};
