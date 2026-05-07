/* ============================================================
   b1-lesson8.js - Lesson 8 Data
   ============================================================ */

const LESSON_DATA = {
  book: "book1",
  lessonNum: 8,
  titleArabic: "Ø§Ù„Ù’Ø­ÙØ±ÙÙˆÙÙ Ø§Ù„Ø´ÙŽÙ‘Ù…Ù’Ø³ÙÙŠÙŽÙ‘Ø©Ù ÙˆÙŽØ§Ù„Ù’Ù‚ÙŽÙ…ÙŽØ±ÙÙŠÙŽÙ‘Ø©Ù",
  titleEnglish: "Sun and Moon Letters",
  summary: "In this lesson, you will learn the rules of pronunciation for the definite article Ø§Ù„ (al-). Some letters cause the \"L\" to become silent and double the following letter (Sun Letters), while others keep the \"L\" sound clear (Moon Letters).",
  nextLesson: "b1-lesson9.html",
  passMark: 8,
  totalQuestions: 11,
  vocab: [
    {
      ar: "Ø§Ù„Ø´ÙŽÙ‘Ù…Ù’Ø³Ù",
      trans: "ash-shamsu",
      meaning: "The sun",
      type: "Noun"
    },
    {
      ar: "Ø§Ù„Ø±ÙŽÙ‘Ø¬ÙÙ„Ù",
      trans: "ar-rajulu",
      meaning: "The man",
      type: "Noun"
    },
    {
      ar: "Ø§Ù„Ø¯ÙŽÙ‘Ø§Ø±Ù",
      trans: "ad-dÄru",
      meaning: "The house / abode",
      type: "Noun"
    },
    {
      ar: "Ø§Ù„Ø«ÙŽÙ‘ÙˆÙ’Ø¨Ù",
      trans: "ath-thawbu",
      meaning: "The garment",
      type: "Noun"
    },
    {
      ar: "Ø§Ù„Ø²ÙŽÙ‘Ù‡Ù’Ø±ÙŽØ©Ù",
      trans: "az-zahratu",
      meaning: "The flower",
      type: "Noun"
    },
    {
      ar: "Ø§Ù„Ø³ÙŽÙ‘Ù…ÙŽÙƒÙ",
      trans: "as-samaku",
      meaning: "The fish",
      type: "Noun"
    },
    {
      ar: "Ø§Ù„Ø¸ÙÙ‘Ù‡Ù’Ø±Ù",
      trans: "aáº“-áº“uhru",
      meaning: "Noon / Midday",
      type: "Noun"
    },
    {
      ar: "Ø§Ù„Ù„ÙŽÙ‘Ø­Ù’Ù…Ù",
      trans: "al-laá¸¥mu",
      meaning: "The meat",
      type: "Noun"
    },
    {
      ar: "Ø§Ù„Ù’Ù‚ÙŽÙ…ÙŽØ±Ù",
      trans: "al-qamaru",
      meaning: "The moon",
      type: "Noun"
    },
    {
      ar: "Ø§Ù„Ù’Ù‡ÙŽÙˆÙŽØ§Ø¡Ù",
      trans: "al-hawÄ'u",
      meaning: "The air",
      type: "Noun"
    },
    {
      ar: "Ø§Ù„Ù’ÙŠÙŽØ¯Ù",
      trans: "al-yadu",
      meaning: "The hand",
      type: "Noun"
    },
    {
      ar: "Ø§Ù„Ù’ØºÙŽØ¯ÙŽØ§Ø¡Ù",
      trans: "al-ghadÄ'u",
      meaning: "The lunch",
      type: "Noun"
    },
    {
      ar: "Ø§Ù„Ù’ÙÙŽÙ…Ù",
      trans: "al-famu",
      meaning: "The mouth",
      type: "Noun"
    },
    {
      ar: "Ø§Ù„Ù’Ù…ÙŽØ§Ø¡Ù",
      trans: "al-mÄ'u",
      meaning: "The water",
      type: "Noun"
    },
    {
      ar: "Ø§Ù„Ù’Ø¹ÙŽÙŠÙ’Ù†Ù",
      trans: "al-Ê¿aynu",
      meaning: "The eye",
      type: "Noun"
    },
    {
      ar: "Ø§Ù„Ù’Ø¬ÙŽÙ†ÙŽÙ‘Ø©Ù",
      trans: "al-jannatu",
      meaning: "The garden / Paradise",
      type: "Noun"
    }
  ],
  grammarBlocks: [
    {
      title: "The Definite Article: Ø§Ù„Ù€",
      content: "<p>The Arabic alphabet is divided into two groups of 14 letters each: <strong>Sun Letters</strong> and <strong>Moon Letters</strong>. This division only matters when a word starts with the definite article <strong>Ø§Ù„Ù€</strong> (al-).</p>",
      rule: "Written the same (Ø§Ù„Ù€), pronounced differently!"
    },
    {
      title: "Moon Letters (Al-Huruf al-Qamariyyah)",
      content: "<p>When a word starts with a <strong>Moon Letter</strong>, the \"L\" in <strong>Ø§Ù„Ù€</strong> is pronounced clearly. You will see a <em>sukun</em> ( Ù’ ) on the <strong>Ù„</strong>.</p><p>Examples: <strong>Ø§Ù„Ù’Ù‚ÙŽÙ…ÙŽØ±Ù</strong> (al-qamaru), <strong>Ø§Ù„Ù’ÙƒÙØªÙŽØ§Ø¨Ù</strong> (al-kitÄbu).</p>",
      rule: "L is pronounced clear and separate."
    },
    {
      title: "Sun Letters (Al-Huruf ash-Shamsiyyah)",
      content: "<p>When a word starts with a <strong>Sun Letter</strong>, the \"L\" in <strong>Ø§Ù„Ù€</strong> is silent. Instead, the first letter of the word is doubled with a <em>shadda</em> ( Ù‘ ).</p><p>Examples: <strong>Ø§Ù„Ø´ÙŽÙ‘Ù…Ù’Ø³Ù</strong> (ash-shamsu), <strong>Ø§Ù„Ø±ÙŽÙ‘Ø¬ÙÙ„Ù</strong> (ar-rajulu).</p>",
      rule: "L is silent; following letter takes a shadda."
    },
    {
      title: "The 14 Sun Letters",
      content: "<p>Øª Ø« Ø¯ Ø° Ø± Ø² Ø³ Ø´ Øµ Ø¶ Ø· Ø¸ Ù„ Ù†</p><p>A helpful tip: Sun letters are mostly \"coronal\" soundsâ€”they are made with the tip of the tongue near the front teeth.</p>",
      rule: "Memorize these to know when to skip the \"L\" sound!"
    }
  ],
  comprehension: {
    title: "A Sunny Day in the Garden",
    arabic: "Ø§Ù„Ø´ÙŽÙ‘Ù…Ù’Ø³Ù Ø­ÙŽØ§Ø±ÙŽÙ‘Ø©ÙŒ. Ø§Ù„Ø±ÙŽÙ‘Ø¬ÙÙ„Ù ÙÙÙŠ Ø§Ù„Ù’Ø¬ÙŽÙ†ÙŽÙ‘Ø©Ù. Ø§Ù„Ù’Ø¬ÙŽÙ†ÙŽÙ‘Ø©Ù Ø¬ÙŽÙ…ÙÙŠÙ„ÙŽØ©ÙŒ ÙˆÙŽØ§Ù„Ø²ÙŽÙ‘Ù‡Ù’Ø±ÙŽØ©Ù ÙÙÙŠÙ‡ÙŽØ§. Ø§Ù„Ø³ÙŽÙ‘Ù…ÙŽÙƒÙ ÙÙÙŠ Ø§Ù„Ù’Ù…ÙŽØ§Ø¡Ù. Ø§Ù„Ù’Ù‡ÙŽÙˆÙŽØ§Ø¡Ù Ø¨ÙŽØ§Ø±ÙØ¯ÙŒ ÙˆÙŽØ¬ÙŽÙ…ÙÙŠÙ„ÙŒ. Ø§Ù„Ø±ÙŽÙ‘Ø¬ÙÙ„Ù ÙŠÙŽØ£Ù’ÙƒÙÙ„Ù Ø§Ù„Ù„ÙŽÙ‘Ø­Ù’Ù…ÙŽ ÙˆÙŽØ§Ù„Ù’Ø®ÙØ¨Ù’Ø²ÙŽ. Ø§Ù„Ù’Ù‚ÙŽÙ…ÙŽØ±Ù Ø¨ÙŽØ¹ÙÙŠØ¯ÙŒ ÙˆÙŽØ§Ù„Ø´ÙŽÙ‘Ù…Ù’Ø³Ù Ø¨ÙŽØ¹ÙÙŠØ¯ÙŽØ©ÙŒ Ø£ÙŽÙŠÙ’Ø¶Ù‹Ø§.",
    english: "The sun is hot. The man is in the garden. The garden is beautiful and the flower is in it. The fish is in the water. The air is cold and beautiful. The man is eating the meat and the bread. The moon is far and the sun is also far.",
    questions: [
      {
        text: "How is the sun described?",
        options: [
          "Cold",
          "Hot",
          "Near",
          "Small"
        ],
        correct: "Hot"
      },
      {
        text: "Where is the fish?",
        options: [
          "In the air",
          "In the garden",
          "In the water",
          "On the desk"
        ],
        correct: "In the water"
      },
      {
        text: "What is the man eating?",
        options: [
          "Fish and water",
          "Meat and bread",
          "Apple and sugar",
          "Milk and honey"
        ],
        correct: "Meat and bread"
      },
      {
        text: "Is the moon near or far?",
        options: [
          "Near",
          "Far",
          "Beautiful but near",
          "Hot"
        ],
        correct: "Far"
      }
    ]
  },
  quizQuestions: {
    multipleChoice: [
      {
        prompt: "In the word Ø§Ù„Ø´ÙŽÙ‘Ù…Ù’Ø³Ù, is the \"L\" pronounced?",
        options: [
          "Yes",
          "No"
        ],
        correct: 1
      },
      {
        prompt: "In the word Ø§Ù„Ù’Ù‚ÙŽÙ…ÙŽØ±Ù, is the \"L\" pronounced?",
        options: [
          "Yes",
          "No"
        ],
        correct: 0
      },
      {
        prompt: "Which mark indicates a Sun Letter in writing?",
        options: [
          "Sukun on the Lam",
          "Shadda on the Sun Letter",
          "Fatha on the Alif",
          "Kasra on the Lam"
        ],
        correct: 1
      },
      {
        prompt: "Which of these is a Sun Letter?",
        options: [
          "Ø£",
          "Ø¨",
          "Øª",
          "Ø¬"
        ],
        correct: 2
      },
      {
        prompt: "Which of these is a Moon Letter?",
        options: [
          "Ø¯",
          "Ø°",
          "Ø±",
          "Ù"
        ],
        correct: 3
      },
      {
        prompt: "Translate: \"The man is in the house.\"",
        options: [
          "Ø§Ù„Ø±ÙŽÙ‘Ø¬ÙÙ„Ù ÙÙÙŠ Ø§Ù„Ø¯ÙŽÙ‘Ø§Ø±Ù",
          "Ø§Ù„Ø±ÙŽÙ‘Ø¬ÙÙ„Ù Ø¹ÙŽÙ„ÙŽÙ‰ Ø§Ù„Ø¯ÙŽÙ‘Ø§Ø±Ù",
          "Ø§Ù„Ø±ÙŽÙ‘Ø¬ÙÙ„Ù Ù…ÙÙ†Ù’ Ø§Ù„Ø¯ÙŽÙ‘Ø§Ø±Ù",
          "Ø§Ù„Ø±ÙŽÙ‘Ø¬ÙÙ„Ù Ø¥ÙÙ„ÙŽÙ‰ Ø§Ù„Ø¯ÙŽÙ‘Ø§Ø±Ù"
        ],
        correct: 0
      }
    ],
    typing: [
      {
        prompt: "Type in Arabic: \"The sun\" (include the shadda)",
        ideal: "Ø§Ù„Ø´ÙŽÙ‘Ù…Ù’Ø³Ù",
        accepts: [
          "Ø§Ù„Ø´Ù…Ø³",
          "Ø§Ù„Ø´ÙŽÙ‘Ù…Ù’Ø³Ù",
          "Ø§Ù„Ø´Ù…Ø³Ù",
          "Ø§Ù„Ø´ÙŽÙ‘Ù…Ù’Ø³"
        ]
      },
      {
        prompt: "Type in Arabic: \"The moon\" (include the sukun)",
        ideal: "Ø§Ù„Ù’Ù‚ÙŽÙ…ÙŽØ±Ù",
        accepts: [
          "Ø§Ù„Ù‚Ù…Ø±",
          "Ø§Ù„Ù’Ù‚ÙŽÙ…ÙŽØ±Ù",
          "Ø§Ù„Ù‚Ù…Ø±Ù",
          "Ø§Ù„Ù’Ù‚ÙŽÙ…ÙŽØ±"
        ]
      }
    ],
    conceptCheck: [
      {
        statement: "This lesson's main pattern is connected to: The Definite Article: Ø§Ù„Ù€.",
        correct: true,
        explanation: "Written the same (Ø§Ù„Ù€), pronounced differently!"
      },
      {
        statement: "The Concepts step gives more detail for: Moon Letters (Al-Huruf al-Qamariyyah).",
        correct: true,
        explanation: "L is pronounced clear and separate."
      },
      {
        statement: "In Sun and Moon Letters, you can ignore the lesson pattern and still build the Arabic correctly.",
        correct: false,
        explanation: "The pattern is the point of the lesson. Learn keeps it small first, then Concepts explains the rule more fully."
      }
    ]
  },
  guidedPattern: "Ø§Ù„Ù’Ø­ÙØ±ÙÙˆÙÙ Ø§Ù„Ø´ÙŽÙ‘Ù…Ù’Ø³ÙÙŠÙŽÙ‘Ø©Ù ÙˆÙŽØ§Ù„Ù’Ù‚ÙŽÙ…ÙŽØ±ÙÙŠÙŽÙ‘Ø©Ù",
  guidedIntro: "In this lesson, you will learn the rules of pronunciation for the definite article Ø§Ù„ (al-). Some letters cause the \"L\" to become silent and double the following letter (Sun Letters), while others keep the \"L\" sound clear (Moon Letters).",
  reviewVocabAtEnd: true,
  guidedPages: [
    {
      titleArabic: "Ø§Ù„Ù’Ø­ÙØ±ÙÙˆÙÙ Ø§Ù„Ø´ÙŽÙ‘Ù…Ù’Ø³ÙÙŠÙŽÙ‘Ø©Ù ÙˆÙŽØ§Ù„Ù’Ù‚ÙŽÙ…ÙŽØ±ÙÙŠÙŽÙ‘Ø©Ù",
      title: "Lesson 8",
      pattern: "Ø§Ù„Ù’Ø­ÙØ±ÙÙˆÙÙ Ø§Ù„Ø´ÙŽÙ‘Ù…Ù’Ø³ÙÙŠÙŽÙ‘Ø©Ù ÙˆÙŽØ§Ù„Ù’Ù‚ÙŽÙ…ÙŽØ±ÙÙŠÙŽÙ‘Ø©Ù",
      intro: "In this lesson, you will learn the rules of pronunciation for the definite article Ø§Ù„ (al-). Some letters cause the \"L\" to become silent and double the following letter (Sun Letters), while others keep the \"L\" sound clear (Moon Letters).",
      cards: [
        {
          icon: "☀️",
          ar: "Ø§Ù„Ø´ÙŽÙ‘Ù…Ù’Ø³Ù"
        },
        {
          icon: "👤",
          ar: "Ø§Ù„Ø±ÙŽÙ‘Ø¬ÙÙ„Ù"
        },
        {
          icon: "🏠",
          ar: "Ø§Ù„Ø¯ÙŽÙ‘Ø§Ø±Ù"
        },
        {
          icon: "🟢",
          ar: "Ø§Ù„Ø«ÙŽÙ‘ÙˆÙ’Ø¨Ù"
        },
        {
          icon: "✨",
          ar: "Ø§Ù„Ø²ÙŽÙ‘Ù‡Ù’Ø±ÙŽØ©Ù"
        },
        {
          icon: "🐦",
          ar: "Ø§Ù„Ø³ÙŽÙ‘Ù…ÙŽÙƒÙ"
        },
        {
          icon: "☀️",
          ar: "Ø§Ù„Ø¸ÙÙ‘Ù‡Ù’Ø±Ù"
        },
        {
          icon: "🥛",
          ar: "Ø§Ù„Ù„ÙŽÙ‘Ø­Ù’Ù…Ù"
        }
      ],
      keyPoints: [
        "Ø§Ù„Ù’Ø­ÙØ±ÙÙˆÙÙ Ø§Ù„Ø´ÙŽÙ‘Ù…Ù’Ø³ÙÙŠÙŽÙ‘Ø©Ù ÙˆÙŽØ§Ù„Ù’Ù‚ÙŽÙ…ÙŽØ±ÙÙŠÙŽÙ‘Ø©Ù",
        "The Definite Article: Ø§Ù„Ù€"
      ]
    },
    {
      title: "Read the pattern",
      pattern: "Ø§Ù„Ù’Ø­ÙØ±ÙÙˆÙÙ Ø§Ù„Ø´ÙŽÙ‘Ù…Ù’Ø³ÙÙŠÙŽÙ‘Ø©Ù ÙˆÙŽØ§Ù„Ù’Ù‚ÙŽÙ…ÙŽØ±ÙÙŠÙŽÙ‘Ø©Ù",
      intro: "Read these short lines before the Reading step. They reuse the same lesson pattern in context.",
      groups: [
        {
          icon: "📘",
          lines: [
            {
              ar: "Ø§Ù„Ø´ÙŽÙ‘Ù…Ù’Ø³Ù Ø­ÙŽØ§Ø±ÙŽÙ‘Ø©ÙŒ."
            }
          ]
        },
        {
          icon: "📍",
          lines: [
            {
              ar: "Ø§Ù„Ø±ÙŽÙ‘Ø¬ÙÙ„Ù ÙÙÙŠ Ø§Ù„Ù’Ø¬ÙŽÙ†ÙŽÙ‘Ø©Ù."
            }
          ]
        },
        {
          icon: "⭐",
          lines: [
            {
              ar: "Ø§Ù„Ù’Ø¬ÙŽÙ†ÙŽÙ‘Ø©Ù Ø¬ÙŽÙ…ÙÙŠÙ„ÙŽØ©ÙŒ ÙˆÙŽØ§Ù„Ø²ÙŽÙ‘Ù‡Ù’Ø±ÙŽØ©Ù ÙÙÙŠÙ‡ÙŽØ§."
            }
          ]
        },
        {
          icon: "🟢",
          lines: [
            {
              ar: "Ø§Ù„Ø³ÙŽÙ‘Ù…ÙŽÙƒÙ ÙÙÙŠ Ø§Ù„Ù’Ù…ÙŽØ§Ø¡Ù."
            }
          ]
        },
        {
          icon: "✨",
          lines: [
            {
              ar: "Ø§Ù„Ù’Ù‡ÙŽÙˆÙŽØ§Ø¡Ù Ø¨ÙŽØ§Ø±ÙØ¯ÙŒ ÙˆÙŽØ¬ÙŽÙ…ÙÙŠÙ„ÙŒ."
            }
          ]
        }
      ],
      keyPoints: [
        "The Definite Article: Ø§Ù„Ù€",
        "Moon Letters (Al-Huruf al-Qamariyyah)"
      ]
    },
    {
      title: "More lesson words",
      pattern: "Ø§Ù„Ù’Ø­ÙØ±ÙÙˆÙÙ Ø§Ù„Ø´ÙŽÙ‘Ù…Ù’Ø³ÙÙŠÙŽÙ‘Ø©Ù ÙˆÙŽØ§Ù„Ù’Ù‚ÙŽÙ…ÙŽØ±ÙÙŠÙŽÙ‘Ø©Ù",
      intro: "Add these words to the same pattern. Tap the Arabic words if you need a meaning reminder.",
      cards: [
        {
          icon: "☀️",
          ar: "Ø§Ù„Ù’Ù‚ÙŽÙ…ÙŽØ±Ù"
        },
        {
          icon: "☀️",
          ar: "Ø§Ù„Ù’Ù‡ÙŽÙˆÙŽØ§Ø¡Ù"
        },
        {
          icon: "⭐",
          ar: "Ø§Ù„Ù’ÙŠÙŽØ¯Ù"
        },
        {
          icon: "🥛",
          ar: "Ø§Ù„Ù’ØºÙŽØ¯ÙŽØ§Ø¡Ù"
        },
        {
          icon: "✨",
          ar: "Ø§Ù„Ù’ÙÙŽÙ…Ù"
        },
        {
          icon: "🥛",
          ar: "Ø§Ù„Ù’Ù…ÙŽØ§Ø¡Ù"
        },
        {
          icon: "⭐",
          ar: "Ø§Ù„Ù’Ø¹ÙŽÙŠÙ’Ù†Ù"
        },
        {
          icon: "🟢",
          ar: "Ø§Ù„Ù’Ø¬ÙŽÙ†ÙŽÙ‘Ø©Ù"
        }
      ],
      keyPoints: [
        "The Definite Article: Ø§Ù„Ù€",
        "Moon Letters (Al-Huruf al-Qamariyyah)"
      ]
    },
    {
      titleArabic: "????????",
      title: "Quick practice",
      pattern: "Ø§Ù„Ù’Ø­ÙØ±ÙÙˆÙÙ Ø§Ù„Ø´ÙŽÙ‘Ù…Ù’Ø³ÙÙŠÙŽÙ‘Ø©Ù ÙˆÙŽØ§Ù„Ù’Ù‚ÙŽÙ…ÙŽØ±ÙÙŠÙŽÙ‘Ø©Ù",
      intro: "Type the Arabic answer. You can type without vowels; the full answer appears after checking.",
      tip: "Tip: focus on the structure first. Harakat can come later.",
      exercise: [
        {
          icon: "✍️",
          prompt: "Type in Arabic: \"The sun\" (include the shadda)",
          ideal: "Ø§Ù„Ø´ÙŽÙ‘Ù…Ù’Ø³Ù",
          accepts: [
            "Ø§Ù„Ø´Ù…Ø³",
            "Ø§Ù„Ø´ÙŽÙ‘Ù…Ù’Ø³Ù",
            "Ø§Ù„Ø´Ù…Ø³Ù",
            "Ø§Ù„Ø´ÙŽÙ‘Ù…Ù’Ø³"
          ]
        },
        {
          icon: "📘",
          prompt: "Type in Arabic: \"The moon\" (include the sukun)",
          ideal: "Ø§Ù„Ù’Ù‚ÙŽÙ…ÙŽØ±Ù",
          accepts: [
            "Ø§Ù„Ù‚Ù…Ø±",
            "Ø§Ù„Ù’Ù‚ÙŽÙ…ÙŽØ±Ù",
            "Ø§Ù„Ù‚Ù…Ø±Ù",
            "Ø§Ù„Ù’Ù‚ÙŽÙ…ÙŽØ±"
          ]
        }
      ]
    }
  ],
  practiceQuestions: []
};
