/* ============================================================
   b1-lesson4.js — Lesson 4 Data
   ============================================================ */

const LESSON_DATA = {
  book: 'book1',
  lessonNum: 4,
  titleArabic: 'حُرُوفُ الجَرّ',
  titleEnglish: 'Prepositions',
  summary: 'Learn the four key prepositions — فِي (in), عَلَى (on), مِنْ (from), إِلَى (to) — and how they change the ending of the noun that follows. Then use them to say where things are and where people go.',
  nextLesson: 'b1-lesson5.html',
  passMark: 8,
  totalQuestions: 11,

  guidedPattern: 'فِي | عَلَى | مِنْ | إِلَى',
  guidedIntro: 'These four words are called حُرُوفُ الجَرّ (prepositions). They attach to the noun after them and change its ending from ُ to ِ.',
  reviewVocabAtEnd: true,

  guidedPages: [
    // ── Page 21a: pairs ────────────────────────────────────────
    {
      titleArabic: 'الدَّرْسُ الرَّابِعُ',
      title: 'Lesson Four',
      pattern: 'فِي / عَلَى',
      intro: 'Compare each noun before and after the preposition. Notice the ending changes from ُ to ِ.',
      cards: [
        { icon: '🏠', ar: 'البَيْتُ | فِي البَيْتِ' },
        { icon: '<img src="../assets/icons/table.svg" alt="desk" style="width:2.2rem;height:2.2rem;">', ar: 'المَكْتَبُ | عَلَى المَكْتَبِ' },
        { icon: '🕌', ar: 'المَسْجِدُ | فِي المَسْجِدِ' },
        { icon: '🛏️', ar: 'السَّرِيرُ | عَلَى السَّرِيرِ' }
      ],
      keyPoints: [
        'فِي = in · عَلَى = on',
        'Noun ending changes from ُ to ِ after a preposition'
      ]
    },

    // ── Page 21b: أَيْنَ questions ─────────────────────────────
    {
      title: 'Where is...?',
      pattern: 'أَيْنَ ...؟',
      intro: 'Use أَيْنَ to ask where. Answer with هُوَ (he/it) for masculine and هِيَ (she/it) for feminine.',
      groups: [
        {
          icon: '🛋️',
          lines: [
            { ar: 'أَيْنَ مُحَمَّدٌ؟', isPrompt: true },
            { ar: 'هُوَ فِي الغُرْفَةِ.' }
          ]
        },
        {
          icon: '🚿',
          lines: [
            { ar: 'وَأَيْنَ يَاسِرٌ؟', isPrompt: true },
            { ar: 'هُوَ فِي الحَمَّامِ.' }
          ]
        },
        {
          icon: '🍳',
          lines: [
            { ar: 'وَأَيْنَ آمِنَةُ؟', isPrompt: true },
            { ar: 'هِيَ فِي المَطْبَخِ.' }
          ]
        },
        {
          icon: '<img src="../assets/icons/table.svg" alt="desk" style="width:2.2rem;height:2.2rem;">',
          lines: [
            { ar: 'أَيْنَ الكِتَابُ؟', isPrompt: true },
            { ar: 'هُوَ عَلَى المَكْتَبِ.' }
          ]
        },
        {
          icon: '🛏️',
          lines: [
            { ar: 'وَأَيْنَ السَّاعَةُ؟', isPrompt: true },
            { ar: 'هِيَ عَلَى السَّرِيرِ.' }
          ]
        }
      ],
      keyPoints: [
        'أَيْنَ = where?',
        'هُوَ = he / it (masc.) · هِيَ = she / it (fem.)'
      ],
      exercise: [
        {
          icon: '📘',
          prompt: 'أَيْنَ الكِتَابُ؟',
          placeholder: 'هُوَ ...',
          ideal: 'هُوَ عَلَى المَكْتَبِ',
          accepts: ['هو على المكتب', 'هُوَ عَلَى المَكْتَبِ', 'هو على المكتبِ']
        },
        {
          icon: '👦',
          prompt: 'أَيْنَ مُحَمَّدٌ؟',
          placeholder: 'هُوَ ...',
          ideal: 'هُوَ فِي الغُرْفَةِ',
          accepts: ['هو في الغرفة', 'هُوَ فِي الغُرْفَةِ', 'هو في الغرفةِ']
        },
        {
          icon: '⌚',
          prompt: 'أَيْنَ السَّاعَةُ؟',
          placeholder: 'هِيَ ...',
          ideal: 'هِيَ عَلَى السَّرِيرِ',
          accepts: ['هي على السرير', 'هِيَ عَلَى السَّرِيرِ', 'هي على السريرِ']
        },
        {
          icon: '👦',
          prompt: 'أَيْنَ يَاسِرٌ؟',
          placeholder: 'هُوَ ...',
          ideal: 'هُوَ فِي الحَمَّامِ',
          accepts: ['هو في الحمام', 'هُوَ فِي الحَمَّامِ', 'هو في الحمامِ']
        },
        {
          icon: '🛋️',
          prompt: 'أَآمِنَةُ فِي الغُرْفَةِ؟',
          placeholder: 'لا، هِيَ ...',
          ideal: 'لا، هِيَ فِي المَطْبَخِ',
          accepts: ['لا هي في المطبخ', 'لا، هي في المطبخ', 'لا، هِيَ فِي المَطْبَخِ']
        },
        {
          icon: '🍳',
          prompt: 'أَيَاسِرٌ فِي المَطْبَخِ؟',
          placeholder: 'لا، هُوَ ...',
          ideal: 'لا، هُوَ فِي الحَمَّامِ',
          accepts: ['لا هو في الحمام', 'لا، هو في الحمام', 'لا، هُوَ فِي الحَمَّامِ']
        },
        {
          icon: '🛋️',
          prompt: 'مَنْ فِي الغُرْفَةِ؟',
          placeholder: '... فِي الغُرْفَةِ',
          ideal: 'مُحَمَّدٌ فِي الغُرْفَةِ',
          accepts: ['محمد في الغرفة', 'مُحَمَّدٌ فِي الغُرْفَةِ', 'محمد في الغرفةِ']
        },
        {
          icon: '🚿',
          prompt: 'وَمَنْ فِي الحَمَّامِ؟',
          placeholder: '... فِي الحَمَّامِ',
          ideal: 'يَاسِرٌ فِي الحَمَّامِ',
          accepts: ['ياسر في الحمام', 'يَاسِرٌ فِي الحَمَّامِ', 'ياسر في الحمامِ']
        },
        {
          icon: '<img src="../assets/icons/table.svg" alt="desk" style="width:2.2rem;height:2.2rem;">',
          prompt: 'مَاذَا عَلَى المَكْتَبِ؟',
          placeholder: '... عَلَى المَكْتَبِ',
          ideal: 'الكِتَابُ عَلَى المَكْتَبِ',
          accepts: ['الكتاب على المكتب', 'الكِتَابُ عَلَى المَكْتَبِ', 'الكتاب على المكتبِ']
        },
        {
          icon: '🛏️',
          prompt: 'مَاذَا عَلَى السَّرِيرِ؟',
          placeholder: '... عَلَى السَّرِيرِ',
          ideal: 'السَّاعَةُ عَلَى السَّرِيرِ',
          accepts: ['الساعة على السرير', 'السَّاعَةُ عَلَى السَّرِيرِ', 'الساعة على السريرِ']
        }
      ]
    },

    // ── Page 22: more sentences ────────────────────────────────
    {
      title: 'More sentences',
      pattern: 'فِي | عَلَى',
      intro: 'Read each sentence. Tap any word for its meaning.',
      groups: [
        {
          icon: '👨‍🎓',
          lines: [
            { ar: 'الطَّالِبُ فِي الجَامِعَةِ.' }
          ]
        },
        {
          icon: '👨🕌',
          lines: [
            { ar: 'الرَّجُلُ فِي المَسْجِدِ.' }
          ]
        },
        {
          icon: '🧑‍💼',
          lines: [
            { ar: 'أَيْنَ التَّاجِرُ؟', isPrompt: true },
            { ar: 'هُوَ فِي الدُّكَّانِ.' }
          ]
        },
        {
          icon: '✏️',
          lines: [
            { ar: 'القَلَمُ عَلَى المَكْتَبِ.' }
          ]
        },
        {
          icon: '👧',
          lines: [
            { ar: 'أَيْنَ زَيْنَبُ؟', isPrompt: true },
            { ar: 'هِيَ فِي الغُرْفَةِ.' }
          ]
        },
        {
          icon: '📄',
          lines: [
            { ar: 'أَيْنَ الوَرَقُ؟', isPrompt: true },
            { ar: 'هُوَ عَلَى المَكْتَبِ.' }
          ]
        },
        {
          icon: '👨‍🏫',
          lines: [
            { ar: 'أَيْنَ المُدَرِّسُ؟', isPrompt: true },
            { ar: 'هُوَ فِي الفَصْلِ.' }
          ]
        },
        {
          icon: '🚽',
          lines: [
            { ar: 'أَيْنَ يَاسِرٌ؟', isPrompt: true },
            { ar: 'هُوَ فِي المِرْحَاضِ.' }
          ]
        },
        {
          icon: '🌞🌙',
          lines: [
            { ar: 'الشَّمْسُ وَالقَمَرُ فِي السَّمَاءِ.' }
          ]
        },
        {
          icon: '🏫',
          lines: [
            { ar: 'مَنْ فِي الفَصْلِ؟', isPrompt: true }
          ]
        }
      ],
      keyPoints: [
        'Objects use هُوَ or هِيَ depending on their gender',
        'الدُّكَّانُ → فِي الدُّكَّانِ = in the shop'
      ]
    },

    // ── Page 24b: مِنْ and إِلَى pairs ─────────────────────────
    {
      title: 'From and To',
      pattern: 'مِنْ / إِلَى',
      intro: 'The same rule applies — the noun ending changes from ُ to ِ after مِنْ (from) and إِلَى (to).',
      cards: [
        { icon: '🏠', ar: 'البَيْتُ | مِنَ البَيْتِ' },
        { icon: '🕌', ar: 'المَسْجِدُ | إِلَى المَسْجِدِ' },
        { icon: '⛩️', ar: 'اليَابَانُ | مِنَ اليَابَانِ' },
        { icon: '🪔', ar: 'الهِنْدُ | مِنَ الهِنْدِ' }
      ],
      keyPoints: [
        'مِنْ = from · إِلَى = to',
        'Same rule: ending changes to ِ'
      ]
    },

    // ── Page 24–25: classroom story + recall FITB ─────────────
    {
      title: 'A Day in the Classroom',
      pattern: 'مِنْ أَيْنَ أَنْتَ؟',
      intro: 'Read this classroom conversation. Then answer questions from memory.',
      groups: [
        {
          type: 'scene',
          text: '🏫 <strong>The classroom.</strong> The teacher asks Muhammad about his classmates — where they are from, and where the missing ones went.'
        },
        {
          icon: '👨‍🏫',
          role: 'teacher',
          lines: [
            { ar: 'مِنْ أَيْنَ أَنْتَ؟', label: 'Teacher', isPrompt: true }
          ]
        },
        {
          icon: '⛩️',
          role: 'student',
          lines: [
            { ar: 'أَنَا مِنَ اليَابَانِ.', label: 'Muhammad' }
          ]
        },
        {
          icon: '👨‍🏫',
          role: 'teacher',
          lines: [
            { ar: 'وَمِنْ أَيْنَ عَمَّارٌ؟', label: 'Teacher', isPrompt: true }
          ]
        },
        {
          icon: '🏮',
          role: 'student',
          lines: [
            { ar: 'هُوَ مِنَ الصِّينِ.', label: 'Muhammad' }
          ]
        },
        {
          icon: '👨‍🏫',
          role: 'teacher',
          lines: [
            { ar: 'وَمِنْ أَيْنَ حَامِدٌ؟', label: 'Teacher', isPrompt: true }
          ]
        },
        {
          icon: '🪔',
          role: 'student',
          lines: [
            { ar: 'هُوَ مِنَ الهِنْدِ.', label: 'Muhammad' }
          ]
        },
        {
          icon: '👨‍🏫',
          role: 'teacher',
          lines: [
            { ar: 'أَيْنَ عَبَّاسٌ؟', label: 'Teacher', isPrompt: true }
          ]
        },
        {
          icon: '🚶',
          role: 'student',
          lines: [
            { ar: 'خَرَجَ.', label: 'Muhammad' }
          ]
        },
        {
          type: 'callout',
          icon: '🎉',
          title: 'Your first Arabic verb!',
          body: '<strong>خَرَجَ</strong> means "he left / went out." In Arabic, a single verb tells you both the action <em>and</em> who did it — no subject pronoun needed!'
        },
        {
          icon: '👨‍🏫',
          role: 'teacher',
          lines: [
            { ar: 'أَيْنَ ذَهَبَ؟', label: 'Teacher', isPrompt: true }
          ]
        },
        {
          icon: '🏫',
          role: 'student',
          lines: [
            { ar: 'ذَهَبَ إِلَى المُدِيرِ.', label: 'Muhammad' }
          ]
        },
        {
          icon: '👨‍🏫',
          role: 'teacher',
          lines: [
            { ar: 'وَأَيْنَ ذَهَبَ عَلِيٌّ؟', label: 'Teacher', isPrompt: true }
          ]
        },
        {
          icon: '🚽',
          role: 'student',
          lines: [
            { ar: 'ذَهَبَ إِلَى المِرْحَاضِ.', label: 'Muhammad' }
          ]
        }
      ],
      keyPoints: [
        'مِنْ أَيْنَ أَنْتَ؟ = Where are you from?',
        'خَرَجَ = he left · ذَهَبَ = he went'
      ],
      exerciseIntro: '📝 Now recall the dialogue — fill in the blanks from memory',
      exercise: [
        {
          icon: '👦',
          prompt: 'مِنْ أَيْنَ أَنْتَ؟',
          placeholder: 'أَنَا مِنَ ...',
          ideal: 'أَنَا مِنَ اليَابَانِ',
          accepts: ['انا من اليابان', 'أنا من اليابان', 'أَنَا مِنَ اليَابَانِ']
        },
        {
          icon: '⛩️',
          prompt: 'أَأَنْتَ مِنَ الفِلِبِّينِ؟',
          placeholder: 'لا، أَنَا مِنَ ...',
          ideal: 'لا، أَنَا مِنَ اليَابَانِ',
          accepts: ['لا انا من اليابان', 'لا، أنا من اليابان', 'لا، أَنَا مِنَ اليَابَانِ']
        },
        {
          icon: '🏮',
          prompt: 'مَنْ مِنَ الصِّينِ؟',
          placeholder: '... مِنَ الصِّينِ',
          ideal: 'عَمَّارٌ مِنَ الصِّينِ',
          accepts: ['عمار من الصين', 'عَمَّارٌ مِنَ الصِّينِ']
        },
        {
          icon: '👦',
          prompt: 'مِنْ أَيْنَ حَامِدٌ؟',
          placeholder: 'هُوَ مِنَ ...',
          ideal: 'هُوَ مِنَ الهِنْدِ',
          accepts: ['هو من الهند', 'هُوَ مِنَ الهِنْدِ']
        },
        {
          icon: '🚶',
          prompt: 'أَيْنَ ذَهَبَ عَبَّاسٌ؟',
          placeholder: 'ذَهَبَ إِلَى ...',
          ideal: 'ذَهَبَ إِلَى المُدِيرِ',
          accepts: ['ذهب إلى المدير', 'ذهب الى المدير', 'ذَهَبَ إِلَى المُدِيرِ']
        },
        {
          icon: '🚽',
          prompt: 'أَذَهَبَ عَلِيٌّ إِلَى المُدِيرِ؟',
          placeholder: 'لا، ذَهَبَ إِلَى ...',
          ideal: 'لا، ذَهَبَ إِلَى المِرْحَاضِ',
          accepts: ['لا ذهب إلى المرحاض', 'لا، ذهب إلى المرحاض', 'لا، ذَهَبَ إِلَى المِرْحَاضِ']
        }
      ]
    },

    // ── Page 25: reading sentences ────────────────────────────
    {
      title: 'Read and understand',
      pattern: 'مِنْ | إِلَى | خَرَجَ | ذَهَبَ',
      intro: 'Read each sentence. Tap any word for its meaning.',
      groups: [
        {
          icon: '👧',
          lines: [
            { ar: 'مِنْ أَيْنَ فَاطِمَةُ؟', isPrompt: true },
            { ar: 'هِيَ مِنَ الهِنْدِ.' }
          ]
        },
        {
          icon: '👨‍🏫',
          lines: [
            { ar: 'خَرَجَ المُدَرِّسُ مِنَ الفَصْلِ وَذَهَبَ إِلَى المُدِيرِ.' }
          ]
        },
        {
          icon: '🧑‍💼',
          lines: [
            { ar: 'ذَهَبَ التَّاجِرُ إِلَى الدُّكَّانِ.' }
          ]
        },
        {
          icon: '🚶',
          lines: [
            { ar: 'خَرَجَ حَامِدٌ مِنَ الغُرْفَةِ وَذَهَبَ إِلَى الحَمَّامِ.' }
          ]
        },
        {
          icon: '❓',
          lines: [
            { ar: 'مَنْ خَرَجَ مِنَ الفَصْلِ؟', isPrompt: true }
          ]
        },
        {
          icon: '👨‍🎓',
          lines: [
            { ar: 'خَرَجَ الطَّالِبُ مِنَ المَدْرَسَةِ وَذَهَبَ إِلَى السُّوقِ.' }
          ]
        },
        {
          icon: '👫',
          lines: [
            { ar: 'خَدِيجَةُ مِنَ الصِّينِ وَخَالِدٌ مِنَ اليَابَانِ.' }
          ]
        }
      ],
      keyPoints: [
        'خَرَجَ مِنَ ... وَذَهَبَ إِلَى ... = he left ... and went to ...',
        'وَ = and (joins two sentences)'
      ]
    },

    // ── Page 26: tap-fill preposition game ────────────────────
    {
      titleArabic: 'ضَعْ حَرْفَ جَرٍّ',
      title: 'Pick the preposition',
      pattern: 'فِي | عَلَى | مِنْ | إِلَى',
      intro: 'Tap the right preposition to complete each sentence.',
      wordBank: ['فِي', 'عَلَى', 'مِنْ', 'إِلَى'],
      tapFill: [
        {
          parts: ['الكِتَابُ', null, 'المَكْتَبِ.'],
          answer: 'عَلَى'
        },
        {
          parts: ['الطَّالِبُ', null, 'الفَصْلِ.'],
          answer: 'فِي'
        },
        {
          parts: ['ذَهَبَ حَامِدٌ', null, 'الجَامِعَةِ.'],
          answer: 'إِلَى'
        },
        {
          parts: ['خَرَجَ المُدِيرُ', null, 'المَدْرَسَةِ.'],
          answer: 'مِنْ'
        },
        {
          parts: ['ذَهَبَ مُحَمَّدٌ', null, 'الصِّينِ', null, 'اليَابَانِ.'],
          answers: ['مِنْ', 'إِلَى']
        }
      ]
    },

  ],

  // ============================================================
  // VOCABULARY
  // ============================================================
  vocab: [
    // Prepositions
    { ar: 'فِي', trans: 'fī', meaning: 'In', type: 'Preposition' },
    { ar: 'عَلَى', trans: 'ʿalā', meaning: 'On / Upon', type: 'Preposition' },
    { ar: 'مِنْ', trans: 'min', meaning: 'From', type: 'Preposition' },
    { ar: 'إِلَى', trans: 'ilā', meaning: 'To / Towards', type: 'Preposition' },
    // Question words
    { ar: 'أَيْنَ', trans: 'ayna', meaning: 'Where?', type: 'Question word' },
    { ar: 'مِنْ أَيْنَ', trans: 'min ayna', meaning: 'Where from?', type: 'Question phrase' },
    { ar: 'مَاذَا', trans: 'mādhā', meaning: 'What? (about things)', type: 'Question word' },
    // Pronouns
    { ar: 'هُوَ', trans: 'huwa', meaning: 'He / It (masc.)', type: 'Pronoun' },
    { ar: 'هِيَ', trans: 'hiya', meaning: 'She / It (fem.)', type: 'Pronoun' },
    { ar: 'أَنَا', trans: 'anā', meaning: 'I', type: 'Pronoun' },
    { ar: 'أَنْتَ', trans: 'anta', meaning: 'You (masc.)', type: 'Pronoun' },
    // Places & objects
    { ar: 'البَيْتُ', trans: 'al-baytu', meaning: 'The house', type: 'Noun' },
    { ar: 'المَكْتَبُ', trans: 'al-maktabu', meaning: 'The desk', type: 'Noun' },
    { ar: 'المَسْجِدُ', trans: 'al-masjidu', meaning: 'The mosque', type: 'Noun' },
    { ar: 'السَّرِيرُ', trans: 'al-sarīru', meaning: 'The bed', type: 'Noun' },
    { ar: 'الكِتَابُ', trans: 'al-kitābu', meaning: 'The book', type: 'Noun' },
    { ar: 'الدُّكَّانُ', trans: 'al-dukkānu', meaning: 'The shop', type: 'Noun' },
    { ar: 'الغُرْفَةُ', trans: 'al-ghurfatu', meaning: 'The room', type: 'Noun' },
    { ar: 'الحَمَّامُ', trans: 'al-ḥammāmu', meaning: 'The bathroom', type: 'Noun' },
    { ar: 'المَطْبَخُ', trans: 'al-maṭbakhu', meaning: 'The kitchen', type: 'Noun' },
    { ar: 'المِرْحَاضُ', trans: 'al-mirḥāḍu', meaning: 'The toilet', type: 'Noun' },
    { ar: 'الفَصْلُ', trans: 'al-faṣlu', meaning: 'The classroom', type: 'Noun' },
    { ar: 'المَدْرَسَةُ', trans: 'al-madrasatu', meaning: 'The school', type: 'Noun' },
    { ar: 'الجَامِعَةُ', trans: 'al-jāmiʿatu', meaning: 'The university', type: 'Noun' },
    { ar: 'السُّوقُ', trans: 'al-sūqu', meaning: 'The market', type: 'Noun' },
    { ar: 'السَّمَاءُ', trans: 'al-samāʾu', meaning: 'The sky', type: 'Noun' },
    { ar: 'الشَّمْسُ', trans: 'al-shamsu', meaning: 'The sun', type: 'Noun' },
    { ar: 'القَمَرُ', trans: 'al-qamaru', meaning: 'The moon', type: 'Noun' },
    { ar: 'الفَصْلُ', trans: 'al-faṣlu', meaning: 'The classroom', type: 'Noun' },
    { ar: 'المُدَرِّسُ', trans: 'al-mudarrisu', meaning: 'The teacher', type: 'Noun' },
    { ar: 'السَّاعَةُ', trans: 'al-sāʿatu', meaning: 'The watch / clock', type: 'Noun' },
    // Countries
    { ar: 'اليَابَانُ', trans: 'al-yābānu', meaning: 'Japan', type: 'Place' },
    { ar: 'الصِّينُ', trans: 'aṣ-ṣīnu', meaning: 'China', type: 'Place' },
    { ar: 'الهِنْدُ', trans: 'al-hindu', meaning: 'India', type: 'Place' },
    { ar: 'الفِلِبِّينُ', trans: 'al-filibbīnu', meaning: 'The Philippines', type: 'Place' },
    // Verbs
    { ar: 'خَرَجَ', trans: 'kharaja', meaning: 'He left / went out', type: 'Verb' },
    { ar: 'ذَهَبَ', trans: 'dhahaba', meaning: 'He went', type: 'Verb' },
    // Names
    { ar: 'مُحَمَّدٌ', trans: 'Muḥammad', meaning: 'Muhammad', type: 'Name' },
    { ar: 'يَاسِرٌ', trans: 'Yāsir', meaning: 'Yasir', type: 'Name' },
    { ar: 'آمِنَةُ', trans: 'Āmina', meaning: 'Aminah', type: 'Name' },
    { ar: 'عَمَّارٌ', trans: 'ʿAmmār', meaning: 'Ammar', type: 'Name' },
    { ar: 'حَامِدٌ', trans: 'Ḥāmid', meaning: 'Hamid', type: 'Name' },
    { ar: 'عَبَّاسٌ', trans: 'ʿAbbās', meaning: 'Abbas', type: 'Name' },
    { ar: 'زَيْنَبُ', trans: 'Zaynab', meaning: 'Zaynab', type: 'Name' },
    { ar: 'عَلِيٌّ', trans: 'ʿAlī', meaning: 'Ali', type: 'Name' },
    { ar: 'خَالِدٌ', trans: 'Khālid', meaning: 'Khalid', type: 'Name' },
    { ar: 'خَدِيجَةُ', trans: 'Khadīja', meaning: 'Khadijah', type: 'Name' },
    { ar: 'التَّاجِرُ', trans: 'al-tājiru', meaning: 'The merchant', type: 'Noun' },
    { ar: 'الطَّالِبُ', trans: 'al-ṭālibu', meaning: 'The student', type: 'Noun' },
    { ar: 'الرَّجُلُ', trans: 'al-rajulu', meaning: 'The man', type: 'Noun' },
    { ar: 'وَ', trans: 'wa', meaning: 'And', type: 'Particle' }
  ],

  // ============================================================
  // GRAMMAR BLOCKS
  // ============================================================
  grammarBlocks: [
    {
      title: 'حُرُوفُ الجَرّ — Prepositions',
      content: '<p>Arabic has four core prepositions introduced in this lesson. They are short words that attach to the noun after them.</p>',
      rule: 'فِي = in · عَلَى = on · مِنْ = from · إِلَى = to'
    },
    {
      title: 'The ending changes after a preposition',
      content: '<p>When a noun follows a preposition, its ending changes from ُ (damma) to ِ (kasra). This is called the <strong>majrūr</strong> (genitive) case.</p>',
      rule: 'البَيْتُ = the house · فِي البَيْتِ = in the house'
    },
    {
      title: 'هُوَ and هِيَ',
      content: '<p>Use <strong>هُوَ</strong> for masculine nouns and people, <strong>هِيَ</strong> for feminine nouns and people — even when referring to objects.</p>',
      rule: 'الكِتَابُ → هُوَ عَلَى المَكْتَبِ. السَّاعَةُ → هِيَ عَلَى السَّرِيرِ.'
    },
    {
      title: 'مِنْ أَيْنَ أَنْتَ؟',
      content: '<p>Combine مِنْ + أَيْنَ to ask "where from?" Answer with أَنَا مِنَ ... (I am from ...).</p>',
      rule: 'مِنْ أَيْنَ أَنْتَ؟ = Where are you from? · أَنَا مِنَ اليَابَانِ. = I am from Japan.'
    }
  ],

  // ============================================================
  // READING COMPREHENSION
  // ============================================================
  comprehension: {
    title: 'Where is Everyone?',
    arabic: 'مُحَمَّدٌ فِي الغُرْفَةِ. يَاسِرٌ فِي الحَمَّامِ. آمِنَةُ فِي المَطْبَخِ. الكِتَابُ عَلَى المَكْتَبِ. السَّاعَةُ عَلَى السَّرِيرِ. أَيْنَ عَبَّاسٌ؟ خَرَجَ مِنَ الفَصْلِ وَذَهَبَ إِلَى المُدِيرِ. وَذَهَبَ عَلِيٌّ إِلَى المِرْحَاضِ.',
    english: 'Muhammad is in the room. Yasir is in the bathroom. Aminah is in the kitchen. The book is on the desk. The watch is on the bed. Where is Abbas? He left the classroom and went to the headmaster. And Ali went to the toilet.',
    questions: [
      {
        text: 'Where is Aminah?',
        options: ['In the room', 'In the bathroom', 'In the kitchen', 'In the classroom'],
        correct: 'In the kitchen'
      },
      {
        text: 'What is on the desk?',
        options: ['The watch', 'The book', 'The pen', 'The key'],
        correct: 'The book'
      },
      {
        text: 'Where did Abbas go?',
        options: ['To the market', 'To the toilet', 'To the headmaster', 'To the mosque'],
        correct: 'To the headmaster'
      }
    ]
  },

  // ============================================================
  // QUIZ QUESTIONS
  // ============================================================
  quizQuestions: {
    multipleChoice: [
      {
        prompt: 'What does فِي mean?',
        options: ['On', 'From', 'In', 'To'],
        correct: 2
      },
      {
        prompt: 'Which is correct for "in the house"?',
        options: ['فِي البَيْتُ', 'فِي البَيْتِ', 'عَلَى البَيْتِ', 'مِنَ البَيْتُ'],
        correct: 1
      },
      {
        prompt: 'What pronoun do you use for a feminine noun like السَّاعَةُ?',
        options: ['هُوَ', 'أَنَا', 'هِيَ', 'أَنْتَ'],
        correct: 2
      },
      {
        prompt: 'Translate: أَيْنَ يَاسِرٌ؟',
        options: ['Who is Yasir?', 'Where is Yasir?', 'Where is Yasir from?', 'What is Yasir?'],
        correct: 1
      },
      {
        prompt: 'What does ذَهَبَ mean?',
        options: ['He left', 'He sat', 'He went', 'He stood'],
        correct: 2
      },
      {
        prompt: 'Translate: هُوَ مِنَ الهِنْدِ.',
        options: ['He is in India.', 'He went to India.', 'He is from India.', 'He left India.'],
        correct: 2
      }
    ],
    typing: [
      {
        prompt: 'Type in Arabic: "In the house"',
        ideal: 'فِي البَيْتِ',
        accepts: ['في البيت', 'فِي البَيْتِ', 'في البيتِ', 'فِي البيت']
      },
      {
        prompt: 'Type in Arabic: "On the desk"',
        ideal: 'عَلَى المَكْتَبِ',
        accepts: ['على المكتب', 'عَلَى المَكْتَبِ', 'على المكتبِ', 'عَلَى المكتب']
      }
    ],
    conceptCheck: [
      {
        statement: 'After a preposition, the noun ending changes from ُ to ِ.',
        correct: true,
        explanation: 'بَيْتُ → فِي البَيْتِ. This is called the majrūr (genitive) case — the preposition "pulls" the noun into it.'
      },
      {
        statement: 'هُوَ is used for both masculine and feminine nouns.',
        correct: false,
        explanation: 'هُوَ is only for masculine nouns and people. Use هِيَ for feminine nouns — even for objects like السَّاعَةُ (the watch).'
      },
      {
        statement: 'مِنْ أَيْنَ أَنْتَ؟ means "Where are you from?"',
        correct: true,
        explanation: 'مِنْ (from) + أَيْنَ (where) + أَنْتَ (you) = Where are you from? Answer: أَنَا مِنَ ... (I am from ...).'
      }
    ]
  }
};
