/* ============================================================
   b1-lesson5.js - Lesson 5 Data
   ============================================================ */

const LESSON_DATA = {
  book: "book1",
  lessonNum: 5,
  titleArabic: "Ù…ÙØ¶ÙŽØ§ÙÙŒ ÙˆÙŽÙ…ÙØ¶ÙŽØ§ÙÙŒ Ø¥ÙÙ„ÙŽÙŠÙ’Ù‡Ù",
  titleEnglish: "The Possessive Construction (Iá¸Äfa)",
  summary: "In this lesson, you will learn how to express possession (like \"Bilal's pen\" or \"the teacher's book\") using the Iá¸Äfa construction. You will also learn about the vocative particle ÙŠÙŽØ§ (O...), adverbs of place like ØªÙŽØ­Ù’ØªÙŽ (under), and how to ask \"Whose?\" using Ù…ÙŽÙ†Ù’.",
  nextLesson: "b1-lesson6.html",
  passMark: 8,
  totalQuestions: 11,
  vocab: [
    {
      ar: "Ù…ÙØ¶ÙŽØ§ÙÙŒ",
      trans: "muá¸Äfun",
      meaning: "The possessed (first part)",
      type: "Grammar"
    },
    {
      ar: "Ù…ÙØ¶ÙŽØ§ÙÙŒ Ø¥ÙÙ„ÙŽÙŠÙ’Ù‡Ù",
      trans: "muá¸Äfun ilayhi",
      meaning: "The possessor (second part)",
      type: "Grammar"
    },
    {
      ar: "Ø§Ù„ÙØ§Ø¨Ù’Ù†Ù",
      trans: "al-ibnu",
      meaning: "The son",
      type: "Noun"
    },
    {
      ar: "Ø§Ù„Ù’Ø¨ÙÙ†Ù’ØªÙ",
      trans: "al-bintu",
      meaning: "The daughter / girl",
      type: "Noun"
    },
    {
      ar: "Ø§Ù„Ù’Ø¹ÙŽÙ…ÙÙ‘",
      trans: "al-Ê¿ammu",
      meaning: "Paternal uncle (father's brother)",
      type: "Noun"
    },
    {
      ar: "Ø§Ù„Ù’Ø®ÙŽØ§Ù„Ù",
      trans: "al-khÄlu",
      meaning: "Maternal uncle (mother's brother)",
      type: "Noun"
    },
    {
      ar: "Ø§Ù„Ø±ÙŽÙ‘Ø³ÙÙˆÙ„Ù",
      trans: "ar-rasÅ«lu",
      meaning: "The messenger",
      type: "Noun"
    },
    {
      ar: "Ø§Ù„Ù’Ù…ÙÙ‡ÙŽÙ†Ù’Ø¯ÙØ³Ù",
      trans: "al-muhandisu",
      meaning: "The engineer",
      type: "Noun"
    },
    {
      ar: "Ø·ÙŽØ¨ÙÙŠØ¨ÙŒ",
      trans: "á¹­abÄ«bun",
      meaning: "A doctor",
      type: "Noun"
    },
    {
      ar: "Ø§Ù„Ù’ÙƒÙŽØ¹Ù’Ø¨ÙŽØ©Ù",
      trans: "al-kaÊ¿batu",
      meaning: "The Ka'bah",
      type: "Noun"
    },
    {
      ar: "Ø§Ù„ÙØ§Ø³Ù’Ù…Ù",
      trans: "al-ismu",
      meaning: "The name",
      type: "Noun"
    },
    {
      ar: "Ø§Ù„Ø³ÙŽÙ‘ÙŠÙŽÙ‘Ø§Ø±ÙŽØ©Ù",
      trans: "as-sayyÄratu",
      meaning: "The car",
      type: "Noun"
    },
    {
      ar: "Ø§Ù„Ù’Ø­ÙŽÙ‚ÙÙŠØ¨ÙŽØ©Ù",
      trans: "al-á¸¥aqÄ«batu",
      meaning: "The bag / suitcase",
      type: "Noun"
    },
    {
      ar: "Ø§Ù„Ø´ÙŽÙ‘Ø§Ø±ÙØ¹Ù",
      trans: "ash-shÄriÊ¿u",
      meaning: "The street / road",
      type: "Noun"
    },
    {
      ar: "Ø¯ÙŽÙÙ’ØªÙŽØ±ÙŒ",
      trans: "daftarun",
      meaning: "A notebook",
      type: "Noun"
    },
    {
      ar: "ØªÙŽØ­Ù’ØªÙŽ",
      trans: "taá¸¥ta",
      meaning: "Under / Below",
      type: "Adverb"
    },
    {
      ar: "Ù‡ÙÙ†ÙŽØ§ÙƒÙŽ",
      trans: "hunÄka",
      meaning: "There",
      type: "Adverb"
    },
    {
      ar: "ÙŠÙŽØ§",
      trans: "yÄ",
      meaning: "O... (Vocative particle)",
      type: "Particle"
    },
    {
      ar: "Ù…ÙØºÙ’Ù„ÙŽÙ‚ÙŒ",
      trans: "mughlaqun",
      meaning: "Closed",
      type: "Adjective"
    }
  ],
  grammarBlocks: [
    {
      title: "The Iá¸Äfa Construction",
      content: "<p>The <strong>Iá¸Äfa</strong> is a way to join two nouns to show possession or relationship (e.g., \"The Teacher's Book\"). It consists of two parts:</p><ul><li><strong>Muá¸Äf</strong> (The Possessed): The first noun. It <u>never</u> takes Ø§Ù„Ù€ and <u>never</u> takes tanwÄ«n.</li><li><strong>Muá¸Äf Ilayhi</strong> (The Possessor): The second noun. It is <u>always</u> in the Genitive case (MajrÅ«r), ending in a kasra (i).</li></ul>",
      rule: "ÙƒÙØªÙŽØ§Ø¨Ù (Muá¸Äf) + Ø§Ù„Ù’Ù…ÙØ¯ÙŽØ±ÙÙ‘Ø³Ù (Muá¸Äf Ilayhi) = ÙƒÙØªÙŽØ§Ø¨Ù Ø§Ù„Ù’Ù…ÙØ¯ÙŽØ±ÙÙ‘Ø³Ù (The Teacher's Book)."
    },
    {
      title: "Rules of the Muá¸Äf",
      content: "<p>The first word (the thing being owned) has strict rules:</p><ol><li>No <strong>Ø§Ù„Ù€</strong> (al-) prefix.</li><li>No <strong>TanwÄ«n</strong> (un/in/an) ending. It usually ends in a single damma.</li></ol>",
      rule: "Wrong: Ø§Ù„Ù’ÙƒÙØªÙŽØ§Ø¨Ù Ù…ÙØ­ÙŽÙ…ÙŽÙ‘Ø¯Ù âŒ | Wrong: ÙƒÙØªÙŽØ§Ø¨ÙŒ Ù…ÙØ­ÙŽÙ…ÙŽÙ‘Ø¯Ù âŒ | Correct: ÙƒÙØªÙŽØ§Ø¨Ù Ù…ÙØ­ÙŽÙ…ÙŽÙ‘Ø¯Ù âœ…"
    },
    {
      title: "Vocative Particle: ÙŠÙŽØ§",
      content: "<p>When you call someone using <strong>ÙŠÙŽØ§</strong> (O...), the noun that follows loses its tanwÄ«n and takes only a single damma.</p>",
      rule: "Ù…ÙØ­ÙŽÙ…ÙŽÙ‘Ø¯ÙŒ â†’ ÙŠÙŽØ§ Ù…ÙØ­ÙŽÙ…ÙŽÙ‘Ø¯Ù (O Muhammad!) | Ø£ÙØ³Ù’ØªÙŽØ§Ø°ÙŒ â†’ ÙŠÙŽØ§ Ø£ÙØ³Ù’ØªÙŽØ§Ø°Ù (O Teacher!)"
    },
    {
      title: "Adverbs of Place: ØªÙŽØ­Ù’ØªÙŽ",
      content: "<p>The word <strong>ØªÙŽØ­Ù’ØªÙŽ</strong> (under) acts like a Muá¸Äf. The noun following it will be MajrÅ«r (ending in kasra).</p>",
      rule: "ØªÙŽØ­Ù’ØªÙŽ Ø§Ù„Ù’Ù…ÙŽÙƒÙ’ØªÙŽØ¨Ù = Under the desk."
    }
  ],
  comprehension: {
    title: "A Visit to the Teacher",
    arabic: "Ù‡ÙŽØ°ÙŽØ§ Ø¨ÙŽÙŠÙ’ØªÙ Ø§Ù„Ù’Ù…ÙØ¯ÙŽØ±ÙÙ‘Ø³Ù. Ø¨ÙŽÙŠÙ’ØªÙ Ø§Ù„Ù’Ù…ÙØ¯ÙŽØ±ÙÙ‘Ø³Ù ÙƒÙŽØ¨ÙÙŠØ±ÙŒ ÙˆÙŽØ¬ÙŽÙ…ÙÙŠÙ„ÙŒ. Ø³ÙŽÙŠÙŽÙ‘Ø§Ø±ÙŽØ©Ù Ø§Ù„Ù’Ù…ÙØ¯ÙŽØ±ÙÙ‘Ø³Ù Ø£ÙŽÙ…ÙŽØ§Ù…ÙŽ Ø§Ù„Ù’Ø¨ÙŽÙŠÙ’ØªÙ. Ø­ÙŽÙ‚ÙÙŠØ¨ÙŽØ©Ù Ø§Ù„Ù’Ù…ÙØ¯ÙŽØ±ÙÙ‘Ø³Ù ØªÙŽØ­Ù’ØªÙŽ Ø§Ù„Ù’Ù…ÙŽÙƒÙ’ØªÙŽØ¨Ù. Ø§Ø¨Ù’Ù†Ù Ø§Ù„Ù’Ù…ÙØ¯ÙŽØ±ÙÙ‘Ø³Ù ÙÙÙŠ Ø§Ù„Ø´ÙŽÙ‘Ø§Ø±ÙØ¹Ù. Ù‡ÙÙˆÙŽ Ø·ÙŽØ§Ù„ÙØ¨ÙŒ Ø¬ÙŽØ¯ÙÙŠØ¯ÙŒ ÙÙÙŠ Ø§Ù„Ù’Ø¬ÙŽØ§Ù…ÙØ¹ÙŽØ©Ù.",
    english: "This is the teacher's house. The teacher's house is big and beautiful. The teacher's car is in front of the house. The teacher's bag is under the desk. The teacher's son is in the street. He is a new student in the university.",
    questions: [
      {
        text: "Where is the teacher's car?",
        options: [
          "In the street",
          "In front of the house",
          "Under the desk",
          "In the university"
        ],
        correct: "In front of the house"
      },
      {
        text: "How is the teacher's house described?",
        options: [
          "Small and old",
          "Big and beautiful",
          "New and clean",
          "Near the mosque"
        ],
        correct: "Big and beautiful"
      },
      {
        text: "Where is the teacher's son?",
        options: [
          "In the room",
          "In the kitchen",
          "In the street",
          "In the car"
        ],
        correct: "In the street"
      },
      {
        text: "What is the teacher's son?",
        options: [
          "An engineer",
          "A doctor",
          "A new student",
          "A merchant"
        ],
        correct: "A new student"
      }
    ]
  },
  quizQuestions: {
    multipleChoice: [
      {
        prompt: "What are the two rules for the Muá¸Äf (the possessed noun)?",
        options: [
          "Takes Ø§Ù„Ù€ and tanwÄ«n",
          "No Ø§Ù„Ù€ and no tanwÄ«n",
          "Only takes Ø§Ù„Ù€",
          "Only takes tanwÄ«n"
        ],
        correct: 1
      },
      {
        prompt: "Translate: \"The Teacher's Desk\"",
        options: [
          "Ù…ÙŽÙƒÙ’ØªÙŽØ¨Ù Ø§Ù„Ù’Ù…ÙØ¯ÙŽØ±ÙÙ‘Ø³Ù",
          "Ù…ÙŽÙƒÙ’ØªÙŽØ¨ÙŒ Ø§Ù„Ù’Ù…ÙØ¯ÙŽØ±ÙÙ‘Ø³Ù",
          "Ø§Ù„Ù’Ù…ÙŽÙƒÙ’ØªÙŽØ¨Ù Ø§Ù„Ù’Ù…ÙØ¯ÙŽØ±ÙÙ‘Ø³Ù",
          "Ù…ÙŽÙƒÙ’ØªÙŽØ¨Ù Ø§Ù„Ù’Ù…ÙØ¯ÙŽØ±ÙÙ‘Ø³Ù"
        ],
        correct: 0
      },
      {
        prompt: "What is the case of the Muá¸Äf Ilayhi (the possessor)?",
        options: [
          "Nominative (Damma)",
          "Accusative (Fatha)",
          "Genitive (Kasra)",
          "It doesn't change"
        ],
        correct: 2
      },
      {
        prompt: "Translate: \"O Bilal!\"",
        options: [
          "ÙŠÙŽØ§ Ø¨ÙÙ„ÙŽØ§Ù„ÙŒ",
          "ÙŠÙŽØ§ Ø¨ÙÙ„ÙŽØ§Ù„Ù",
          "ÙŠÙŽØ§ Ø¨ÙÙ„ÙŽØ§Ù„Ù",
          "ÙŠÙŽØ§ Ø¨ÙÙ„ÙŽØ§Ù„Ø§Ù‹"
        ],
        correct: 2
      },
      {
        prompt: "Which word means \"Paternal Uncle\"?",
        options: [
          "Ø§Ù„Ù’Ø®ÙŽØ§Ù„Ù",
          "Ø§Ù„Ù’Ø¹ÙŽÙ…ÙÙ‘",
          "Ø§Ù„ÙØ§Ø¨Ù’Ù†Ù",
          "Ø§Ù„Ù’Ù…ÙÙ‡ÙŽÙ†Ù’Ø¯ÙØ³Ù"
        ],
        correct: 1
      },
      {
        prompt: "Translate: \"The doctor's car is beautiful.\"",
        options: [
          "Ø³ÙŽÙŠÙŽÙ‘Ø§Ø±ÙŽØ©Ù Ø§Ù„Ø·ÙŽÙ‘Ø¨ÙÙŠØ¨Ù Ø¬ÙŽÙ…ÙÙŠÙ„ÙŽØ©ÙŒ",
          "Ø³ÙŽÙŠÙŽÙ‘Ø§Ø±ÙŽØ©Ù Ø§Ù„Ø·ÙŽÙ‘Ø¨ÙÙŠØ¨Ù Ø¬ÙŽÙ…ÙÙŠÙ„ÙŒ",
          "Ø§Ù„Ø·ÙŽÙ‘Ø¨ÙÙŠØ¨Ù Ø³ÙŽÙŠÙŽÙ‘Ø§Ø±ÙŽØ©ÙŒ Ø¬ÙŽÙ…ÙÙŠÙ„ÙŽØ©ÙŒ",
          "Ø³ÙŽÙŠÙŽÙ‘Ø§Ø±ÙŽØ©ÙŒ Ø§Ù„Ø·ÙŽÙ‘Ø¨ÙÙŠØ¨Ù Ø¬ÙŽÙ…ÙÙŠÙ„ÙŽØ©ÙŒ"
        ],
        correct: 0
      }
    ],
    typing: [
      {
        prompt: "Type in Arabic: \"The Book of Allah\"",
        ideal: "ÙƒÙØªÙŽØ§Ø¨Ù Ø§Ù„Ù„Ù‡Ù",
        accepts: [
          "ÙƒØªØ§Ø¨ Ø§Ù„Ù„Ù‡",
          "ÙƒÙØªÙŽØ§Ø¨Ù Ø§Ù„Ù„Ù‡Ù",
          "ÙƒØªØ§Ø¨Ù Ø§Ù„Ù„Ù‡Ù",
          "ÙƒÙØªÙŽØ§Ø¨Ù Ø§Ù„Ù„Ù‡"
        ]
      },
      {
        prompt: "Type in Arabic: \"The Teacher's Pen\"",
        ideal: "Ù‚ÙŽÙ„ÙŽÙ…Ù Ø§Ù„Ù’Ù…ÙØ¯ÙŽØ±ÙÙ‘Ø³Ù",
        accepts: [
          "Ù‚Ù„Ù… Ø§Ù„Ù…Ø¯Ø±Ø³",
          "Ù‚ÙŽÙ„ÙŽÙ…Ù Ø§Ù„Ù’Ù…ÙØ¯ÙŽØ±ÙÙ‘Ø³Ù",
          "Ù‚Ù„Ù…Ù Ø§Ù„Ù…Ø¯Ø±Ø³Ù",
          "Ù‚ÙŽÙ„ÙŽÙ…Ù Ø§Ù„Ù…Ø¯Ø±Ø³"
        ]
      }
    ],
    conceptCheck: [
      {
        statement: "This lesson's main pattern is connected to: The Iá¸Äfa Construction.",
        correct: true,
        explanation: "ÙƒÙØªÙŽØ§Ø¨Ù (Muá¸Äf) + Ø§Ù„Ù’Ù…ÙØ¯ÙŽØ±ÙÙ‘Ø³Ù (Muá¸Äf Ilayhi) = ÙƒÙØªÙŽØ§Ø¨Ù Ø§Ù„Ù’Ù…ÙØ¯ÙŽØ±ÙÙ‘Ø³Ù (The Teacher's Book)."
      },
      {
        statement: "The Concepts step gives more detail for: Rules of the Muá¸Äf.",
        correct: true,
        explanation: "Wrong: Ø§Ù„Ù’ÙƒÙØªÙŽØ§Ø¨Ù Ù…ÙØ­ÙŽÙ…ÙŽÙ‘Ø¯Ù âŒ | Wrong: ÙƒÙØªÙŽØ§Ø¨ÙŒ Ù…ÙØ­ÙŽÙ…ÙŽÙ‘Ø¯Ù âŒ | Correct: ÙƒÙØªÙŽØ§Ø¨Ù Ù…ÙØ­ÙŽÙ…ÙŽÙ‘Ø¯Ù âœ…"
      },
      {
        statement: "In The Possessive Construction (Iá¸Äfa), you can ignore the lesson pattern and still build the Arabic correctly.",
        correct: false,
        explanation: "The pattern is the point of the lesson. Learn keeps it small first, then Concepts explains the rule more fully."
      }
    ]
  },
  guidedPattern: "Ù…ÙØ¶ÙŽØ§ÙÙŒ ÙˆÙŽÙ…ÙØ¶ÙŽØ§ÙÙŒ Ø¥ÙÙ„ÙŽÙŠÙ’Ù‡Ù",
  guidedIntro: "In this lesson, you will learn how to express possession (like \"Bilal's pen\" or \"the teacher's book\") using the Iá¸Äfa construction. You will also learn about the vocative particle ÙŠÙŽØ§ (O...), adverbs of place like ØªÙŽØ­Ù’ØªÙŽ (under), and how to ask \"Whose?\" using Ù…ÙŽÙ†Ù’.",
  reviewVocabAtEnd: true,
  guidedPages: [
    {
      titleArabic: "Ù…ÙØ¶ÙŽØ§ÙÙŒ ÙˆÙŽÙ…ÙØ¶ÙŽØ§ÙÙŒ Ø¥ÙÙ„ÙŽÙŠÙ’Ù‡Ù",
      title: "Lesson 5",
      pattern: "Ù…ÙØ¶ÙŽØ§ÙÙŒ ÙˆÙŽÙ…ÙØ¶ÙŽØ§ÙÙŒ Ø¥ÙÙ„ÙŽÙŠÙ’Ù‡Ù",
      intro: "In this lesson, you will learn how to express possession (like \"Bilal's pen\" or \"the teacher's book\") using the Iá¸Äfa construction. You will also learn about the vocative particle ÙŠÙŽØ§ (O...), adverbs of place like ØªÙŽØ­Ù’ØªÙŽ (under), and how to ask \"Whose?\" using Ù…ÙŽÙ†Ù’.",
      cards: [
        {
          icon: "✨",
          ar: "Ù…ÙØ¶ÙŽØ§ÙÙŒ"
        },
        {
          icon: "📍",
          ar: "Ù…ÙØ¶ÙŽØ§ÙÙŒ Ø¥ÙÙ„ÙŽÙŠÙ’Ù‡Ù"
        },
        {
          icon: "📍",
          ar: "Ø§Ù„ÙØ§Ø¨Ù’Ù†Ù"
        },
        {
          icon: "👤",
          ar: "Ø§Ù„Ù’Ø¨ÙÙ†Ù’ØªÙ"
        },
        {
          icon: "👤",
          ar: "Ø§Ù„Ù’Ø¹ÙŽÙ…ÙÙ‘"
        },
        {
          icon: "👤",
          ar: "Ø§Ù„Ù’Ø®ÙŽØ§Ù„Ù"
        },
        {
          icon: "👤",
          ar: "Ø§Ù„Ø±ÙŽÙ‘Ø³ÙÙˆÙ„Ù"
        },
        {
          icon: "👤",
          ar: "Ø§Ù„Ù’Ù…ÙÙ‡ÙŽÙ†Ù’Ø¯ÙØ³Ù"
        }
      ],
      keyPoints: [
        "Ù…ÙØ¶ÙŽØ§ÙÙŒ ÙˆÙŽÙ…ÙØ¶ÙŽØ§ÙÙŒ Ø¥ÙÙ„ÙŽÙŠÙ’Ù‡Ù",
        "The Iá¸Äfa Construction"
      ]
    },
    {
      title: "Read the pattern",
      pattern: "Ù…ÙØ¶ÙŽØ§ÙÙŒ ÙˆÙŽÙ…ÙØ¶ÙŽØ§ÙÙŒ Ø¥ÙÙ„ÙŽÙŠÙ’Ù‡Ù",
      intro: "Read these short lines before the Reading step. They reuse the same lesson pattern in context.",
      groups: [
        {
          icon: "📘",
          lines: [
            {
              ar: "Ù‡ÙŽØ°ÙŽØ§ Ø¨ÙŽÙŠÙ’ØªÙ Ø§Ù„Ù’Ù…ÙØ¯ÙŽØ±ÙÙ‘Ø³Ù."
            }
          ]
        },
        {
          icon: "📍",
          lines: [
            {
              ar: "Ø¨ÙŽÙŠÙ’ØªÙ Ø§Ù„Ù’Ù…ÙØ¯ÙŽØ±ÙÙ‘Ø³Ù ÙƒÙŽØ¨ÙÙŠØ±ÙŒ ÙˆÙŽØ¬ÙŽÙ…ÙÙŠÙ„ÙŒ."
            }
          ]
        },
        {
          icon: "⭐",
          lines: [
            {
              ar: "Ø³ÙŽÙŠÙŽÙ‘Ø§Ø±ÙŽØ©Ù Ø§Ù„Ù’Ù…ÙØ¯ÙŽØ±ÙÙ‘Ø³Ù Ø£ÙŽÙ…ÙŽØ§Ù…ÙŽ Ø§Ù„Ù’Ø¨ÙŽÙŠÙ’ØªÙ."
            }
          ]
        },
        {
          icon: "🟢",
          lines: [
            {
              ar: "Ø­ÙŽÙ‚ÙÙŠØ¨ÙŽØ©Ù Ø§Ù„Ù’Ù…ÙØ¯ÙŽØ±ÙÙ‘Ø³Ù ØªÙŽØ­Ù’ØªÙŽ Ø§Ù„Ù’Ù…ÙŽÙƒÙ’ØªÙŽØ¨Ù."
            }
          ]
        },
        {
          icon: "✨",
          lines: [
            {
              ar: "Ø§Ø¨Ù’Ù†Ù Ø§Ù„Ù’Ù…ÙØ¯ÙŽØ±ÙÙ‘Ø³Ù ÙÙÙŠ Ø§Ù„Ø´ÙŽÙ‘Ø§Ø±ÙØ¹Ù."
            }
          ]
        }
      ],
      keyPoints: [
        "The Iá¸Äfa Construction",
        "Rules of the Muá¸Äf"
      ]
    },
    {
      title: "More lesson words",
      pattern: "Ù…ÙØ¶ÙŽØ§ÙÙŒ ÙˆÙŽÙ…ÙØ¶ÙŽØ§ÙÙŒ Ø¥ÙÙ„ÙŽÙŠÙ’Ù‡Ù",
      intro: "Add these words to the same pattern. Tap the Arabic words if you need a meaning reminder.",
      cards: [
        {
          icon: "👤",
          ar: "Ø·ÙŽØ¨ÙÙŠØ¨ÙŒ"
        },
        {
          icon: "🏠",
          ar: "Ø§Ù„Ù’ÙƒÙŽØ¹Ù’Ø¨ÙŽØ©Ù"
        },
        {
          icon: "📘",
          ar: "Ø§Ù„ÙØ§Ø³Ù’Ù…Ù"
        },
        {
          icon: "🚗",
          ar: "Ø§Ù„Ø³ÙŽÙ‘ÙŠÙŽÙ‘Ø§Ø±ÙŽØ©Ù"
        },
        {
          icon: "✨",
          ar: "Ø§Ù„Ù’Ø­ÙŽÙ‚ÙÙŠØ¨ÙŽØ©Ù"
        },
        {
          icon: "🔹",
          ar: "Ø§Ù„Ø´ÙŽÙ‘Ø§Ø±ÙØ¹Ù"
        },
        {
          icon: "📘",
          ar: "Ø¯ÙŽÙÙ’ØªÙŽØ±ÙŒ"
        },
        {
          icon: "📍",
          ar: "ØªÙŽØ­Ù’ØªÙŽ"
        }
      ],
      keyPoints: [
        "The Iá¸Äfa Construction",
        "Rules of the Muá¸Äf"
      ]
    },
    {
      titleArabic: "????????",
      title: "Quick practice",
      pattern: "Ù…ÙØ¶ÙŽØ§ÙÙŒ ÙˆÙŽÙ…ÙØ¶ÙŽØ§ÙÙŒ Ø¥ÙÙ„ÙŽÙŠÙ’Ù‡Ù",
      intro: "Type the Arabic answer. You can type without vowels; the full answer appears after checking.",
      tip: "Tip: focus on the structure first. Harakat can come later.",
      exercise: [
        {
          icon: "✍️",
          prompt: "Type in Arabic: \"The Book of Allah\"",
          ideal: "ÙƒÙØªÙŽØ§Ø¨Ù Ø§Ù„Ù„Ù‡Ù",
          accepts: [
            "ÙƒØªØ§Ø¨ Ø§Ù„Ù„Ù‡",
            "ÙƒÙØªÙŽØ§Ø¨Ù Ø§Ù„Ù„Ù‡Ù",
            "ÙƒØªØ§Ø¨Ù Ø§Ù„Ù„Ù‡Ù",
            "ÙƒÙØªÙŽØ§Ø¨Ù Ø§Ù„Ù„Ù‡"
          ]
        },
        {
          icon: "📘",
          prompt: "Type in Arabic: \"The Teacher's Pen\"",
          ideal: "Ù‚ÙŽÙ„ÙŽÙ…Ù Ø§Ù„Ù’Ù…ÙØ¯ÙŽØ±ÙÙ‘Ø³Ù",
          accepts: [
            "Ù‚Ù„Ù… Ø§Ù„Ù…Ø¯Ø±Ø³",
            "Ù‚ÙŽÙ„ÙŽÙ…Ù Ø§Ù„Ù’Ù…ÙØ¯ÙŽØ±ÙÙ‘Ø³Ù",
            "Ù‚Ù„Ù…Ù Ø§Ù„Ù…Ø¯Ø±Ø³Ù",
            "Ù‚ÙŽÙ„ÙŽÙ…Ù Ø§Ù„Ù…Ø¯Ø±Ø³"
          ]
        }
      ]
    }
  ],
  practiceQuestions: []
};
