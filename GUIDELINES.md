# Kalamo — The Clear Path to Arabic

A modern, interactive platform for learning the Arabic language, built on the foundation of the world-renowned Madinah Arabic Course. Fully static — no backend, no build tools, no accounts required.

**Live site:** https://sajidmohd717.github.io/medina-arabic/

---

## Brand Identity

- **Name**: Kalamo (Speech in Arabic)
- **Tagline**: The Clear Path to Arabic
- **Domain**: kalamo.app (target)
- **Vision**: A premium, free digital home for students of the Arabic language — clarity, speed, and structural mastery above all.

---

## Current State (as of May 2026)

### What's built
- Full single-template lesson architecture — one HTML shell for all 69+ lessons
- Today-first app dashboard for returning/onboarded users
- App-wide navigation: Today, Course, Reading, Review. Desktop uses a top pill nav; mobile uses bottom tabs.
- Book 1 lesson list page with progress tracking, section nav, and lesson cards
- Lessons 1–13 complete with full content; Lesson 1 is the pilot for the newer pattern-first Madinah-style lesson flow
- Hover/tap-translate tooltips on reading comprehension Arabic text
- Focused reading comprehension track: one unlocked story, then questions directly below it
- Collapsible reading progress overview for stories passed, current level, words unlocked, and next-level progress
- Word Review flow positioned as Anki-style flashcards for vocabulary the learner is still acquiring
- On-screen Arabic keyboard for typed quiz answers
- Vocabulary rating system (know / still practising / difficult) with localStorage persistence
- Progress tracking — sequential lesson locks, completed/in-progress/not-started states
- SEO: meta descriptions, Open Graph tags, canonical URLs on all pages
- favicon.svg, robots.txt, sitemap.xml, 404.html
- Book 1 final quiz placeholder route
- `scripts/validate-lessons.js` local lesson data validator

### What's next (priority order)
1. Complete Book 1 lessons 14–23 (one data file per lesson)
2. Book 1 final quiz content
3. Book 2 lessons
4. Book 3 lessons
5. Upgrade Review into true spaced repetition (due dates, ease, review intervals)

### Product direction
Kalamo is now an app-like learning product, not just a course library. The intended learner loop is:

1. **Today** — the default home after onboarding. Shows the next lesson, daily quests, progress, and quick links.
2. **Course** — structured Madinah Arabic lesson path. New and revised lessons should teach through simple sentence patterns first, then reading, word review, and quiz.
3. **Reading** — the main practice surface. A short Arabic passage appears first, with comprehension questions directly underneath.
4. **Review** — Anki-like vocabulary flashcards. This should become the memory system for words learned in lessons and reading.

The old standalone Daily Practice/Drill route is not part of the visible product navigation. Keep `drill.html` only as archived/experimental code unless a future decision explicitly revives it.

The UX target is Duolingo-like return momentum with a calmer Arabic-learning identity: cheerful, sticky, clear next action, but not cluttered. Avoid adding new top-level features unless they reinforce the loop above.

### Lesson content direction
Kalamo should follow the Madinah Arabic Books more closely in pacing. Do not start beginner lessons with a large vocabulary dump. The preferred flow for new or revised lessons is:

1. **Learn** — introduce one sentence pattern with a small set of concrete examples, ideally with simple visual cues.
2. **Questions** — show how the pattern becomes basic questions and answers.
3. **Reading** — use a short controlled passage made only from known or newly introduced material.
4. **Review Words** — only after context, let learners rate words as easy, still practising, or difficult.
5. **Quiz** — test the pattern and the most important new words.

Lesson 1 now models this direction with `guidedPages` and `reviewVocabAtEnd`. Use that shape when gradually revising later lessons. Keep beginner cards visually light: picture cue + Arabic sentence, with meaning available through tap/hover tooltips instead of always-visible translations.

### Development workflow
Work in sessions, batch related changes, and push to `main` once a meaningful chunk is done. Do not commit every small tweak — keep the git history clean and meaningful.

For meaningful changes, use the lightweight agent briefs in `.agents/`: Content Lead for lesson quality, Experience Lead for UI/UX, and QA Lead for validation and pre-push checks. Do not use the agent workflow for tiny fixes unless requested.

---

## Architecture

The project uses a **single-template architecture** — one HTML shell for all lessons.

### Core principle

- **One shell**: `lessons/lesson.html` is the only HTML file for all lessons across all books.
- **Dynamic loading**: `lesson-loader.js` reads URL params (`?book=1&lesson=7`) and injects the right data script.
- **Pure data**: All lesson content lives in plain JS objects in `lessons/data/`.

This means:
- Zero HTML duplication — change the lesson UI by editing one file.
- Add a lesson by creating one data file and registering it in the lesson list.
- Fully static and portable — no server, no build step.

### File structure

```
medina-arabic/
├── GUIDELINES.md
├── README.md
├── index.html                     ← Today dashboard for returning users + first-time onboarding/book selector
├── book1.html                     ← Book 1 lesson list
├── reading.html                   ← Reading comprehension track
├── book2.html                     ← Book 2 (coming soon placeholder)
├── book3.html                     ← Book 3 (coming soon placeholder)
├── 404.html                       ← Custom error page
├── favicon.svg                    ← SVG favicon (Arabic ع, emerald/gold)
├── robots.txt                     ← Allows all crawlers, links sitemap
├── sitemap.xml                    ← Main pages for Google indexing
│
├── assets/
│   ├── css/
│   │   ├── shared.css             ← Variables, base reset, nav, chips, animations
│   │   ├── book-list.css          ← Book lesson-list page styles
│   │   ├── lesson.css             ← Lesson page styles (panels, quiz, keyboard, tooltips)
│   │   └── reading.css            ← Reading comprehension styles
│   │
│   └── js/
│       ├── progress.js            ← localStorage progress + vocab rating tracking
│       ├── book1-lesson-list.js   ← Book 1 section/lesson data + card rendering
│       ├── lesson-core.js         ← All lesson UI logic (panels, quiz, keyboard, tooltips)
│       ├── lesson-loader.js       ← Reads URL params, injects data file, calls initLesson()
│       └── reading.js             ← Reading challenges, comprehension checks, and progress overview
│
├── lessons/
│   ├── lesson.html                ← THE ONLY HTML SHELL for all lessons
│   ├── b1-final-quiz.html         ← Final quiz placeholder
│   └── data/
│       ├── b1-lesson1.js
│       ├── b1-lesson2.js
│       └── ...                    ← One file per lesson
│
└── scripts/
    └── validate-lessons.js        ← Local lesson data validator
```

### How a lesson loads

1. User clicks a lesson link: `lessons/lesson.html?book=1&lesson=5`
2. `lesson.html` loads `lesson-core.js` then `lesson-loader.js`
3. `lesson-loader.js` parses the URL → `b1-lesson5.js`
4. It creates a `<script>` tag to load the data file
5. Once loaded, calls `initLesson()` in `lesson-core.js` to populate all panels

---

## Lesson Data Structure

Each file in `lessons/data/` exports a single `LESSON_DATA` object:

```javascript
const LESSON_DATA = {
  book: 'book1',                    // 'book1', 'book2', or 'book3'
  lessonNum: 5,                     // integer, matches filename
  titleArabic: 'مُضَافٌ وَمُضَافٌ إِلَيْهِ',
  titleEnglish: 'The Possessive Construction',
  summary: 'One or two sentences shown at the top of the lesson page.',
  nextLesson: 'b1-lesson6.html',    // used to build the Next Lesson button
  passMark: 8,                      // correct answers needed to pass
  totalQuestions: 12,               // must equal MC + typing question counts

  guidedPages: [                         // optional: enables bite-sized Madinah-style lesson pages
    {
      titleArabic: 'الدَّرْسُ الأَوَّلُ',
      title: 'Lesson One',
      pattern: 'هٰذَا',
      intro: 'Short learner-facing intro.',
      cards: [
        { icon: '📘', ar: 'هٰذَا كِتَابٌ' }
      ],
      keyPoints: ['هٰذَا + nounٌ']
    }
  ],
  reviewVocabAtEnd: true,              // optional: moves vocab rating to the Review Words step

  vocab: [
    // NEW words only — do not repeat vocab from previous lessons
    { ar: 'كِتَابٌ', trans: 'kitābun', meaning: 'Book', type: 'Noun' },
  ],

  grammarBlocks: [
    {
      title: 'Block title',
      content: '<p>HTML content — use <strong>, <ul>, <li> etc.</strong></p>',
      rule: 'The key rule, shown in a highlighted box.'
    },
  ],

  examples: [
    { ar: 'هَذَا كِتَابُ الطَّالِبِ', trans: 'hādhā kitābu l-ṭālibi', meaning: 'This is the student\'s book.' },
  ],

  comprehension: {
    title: 'Story title in English',
    arabic: 'Full Arabic story text with diacritics...',
    english: 'English translation shown on demand...',
    questions: [
      {
        text: 'Question about the story?',
        options: ['A', 'B', 'C', 'D'],
        correct: 'B'           // exact string matching one of the options
      },
    ]
  },

  practiceQuestions: [
    // Show Arabic word → pick meaning
    { arabic: 'هَذَا بَيْتٌ', correct: 'This is a house.', options: ['...', '...', '...', '...'] },
    // Or show a text question → pick answer
    { text: 'What does هَذَا mean?', correct: 'This (masc.)', options: ['...', '...', '...', '...'] },
  ],

  quizQuestions: {
    multipleChoice: [
      // correct is the 0-based index of the right option
      { prompt: 'Translate: "His book"', options: ['كِتَابِي', 'كِتَابُكَ', 'كِتَابُهُ', 'كِتَابُهَا'], correct: 2 },
      // optionally include an Arabic display above the options
      { prompt: 'What does this mean?', arabic: 'هَذَا بَيْتٌ', options: ['...'], correct: 0 },
    ],
    typing: [
      {
        prompt: 'Type in Arabic: "His book"',
        ideal: 'كِتَابُهُ',
        accepts: ['كتابه', 'كِتَابُهُ', 'كتابهُ']   // all accepted without diacritics
      },
    ]
  }
};
```

**Key rules for lesson data:**
- `totalQuestions` must equal `multipleChoice.length + typing.length`
- `passMark` should be roughly 65–70% of `totalQuestions`
- Comprehension question `correct` is the **exact string** of the right option (not an index)
- Quiz `correct` is a **0-based index** into the options array
- Vocab is **new words only** — words from earlier lessons may appear in examples and practice for reinforcement but must not be listed as new vocab
- Beginner lessons should avoid front-loading vocabulary. Introduce words inside patterns and examples first, then ask for vocab ratings near the end.
- All Arabic text must carry full diacritics (harakat)
- Transliterations follow academic convention: macrons for long vowels (ā, ī, ū), ʿ for ʿayn

---

## File Naming Rules

| File | Pattern | Example |
|------|---------|---------|
| Book list page | `bookX.html` | `book1.html` |
| Lesson data | `bX-lessonY.js` | `b1-lesson5.js` |
| Final quiz data | `bX-final-quiz.js` | `b1-final-quiz.js` |

- Lowercase only, no spaces
- Book number: 1, 2, or 3
- Lesson number: no leading zeros (1, not 01)
- There is only one lesson HTML file: `lessons/lesson.html` — do not create per-lesson HTML files

---

## How to Add a New Lesson

1. Create `lessons/data/bX-lessonY.js` — use an existing lesson file as a template
2. Fill in the `LESSON_DATA` object (see structure above)
3. Register it in `assets/js/book1-lesson-list.js` — add one entry to `BOOK1_LESSONS`:
   ```js
   { lessonNum: 12, section: 'section-3', slug: 'b1-lesson12', available: true, ar: 'الَّذِي — الَّتِي', title: 'Relative Pronouns', desc: 'Short description for the card.' }
   ```
4. Run `node scripts/validate-lessons.js`
5. Open the lesson in the browser via `lessons/lesson.html?book=1&lesson=12` and test all five steps
6. Update the **Progress** table in this file

---

## CSS Architecture

All pages load `shared.css` first, then a page-specific stylesheet.

### shared.css
- CSS custom properties (design tokens)
- Body and base reset
- Geometric SVG background (`.geo-bg`)
- Sticky nav bar
- Vocab/Grammar/Quiz chips (`.chip`, `.chip-vocab`, etc.)
- Global keyframe animations (`fadeDown`, `fadeUp`, `fadeIn`)

### mobile.css
Loaded globally via `shared.css`. Despite the filename, this owns the app navigation across viewports:
- Desktop: fixed top pill navigation with Today, Course, Reading, Review
- Mobile: fixed bottom tab navigation with the same destinations
- Safe-area padding and touch affordances

Use this file for app-nav behavior and mobile-specific interaction details.

### book-list.css
Loaded by book list pages only. Contains:
- Page header, stats, eyebrow
- Two-column layout with sticky sidebar
- Section headers and sidebar nav
- Lesson cards — layout, status colours (not-started / in-progress / complete / locked), skip button, quiz-only button
- Chips are rendered **inline inside the card text area**, not in a separate column

### lesson.css
Loaded by lesson pages only. Contains:
- Step indicator bar
- All five lesson panels (vocab, lesson, comprehension, practice, quiz)
- Vocabulary layout: active grid + "Words you know well" collapsible bucket
- Grammar blocks and example tables
- Practice and quiz question styles
- Arabic typing input and on-screen keyboard
- Score card
- **Hover/tap-translate tooltip** styles (`.ar-word[data-meaning]`) — dashed underline + dark tooltip for hover, focus, and tap

### reading.css
Loaded by `reading.html` only. Reading should stay deliberately uncluttered:
- Short purpose line
- Optional progress overview opened by a button
- Story card
- Comprehension questions directly below the story
- Result panel and next-story action

Do not reintroduce a large hero, rank ladder, visible satchel, or other always-visible furniture unless the product direction changes.

### CSS variables (defined in shared.css)

```
--brand           #58cc02    Duolingo-style green — primary buttons, links, active states
--brand-dark      #46a302    darker green — hover/pressed states, 3D button shadow
--accent-blue     #1cb0f6    sky blue — secondary gradients
--accent-purple   #ce82ff    purple accent
--accent-coral    #ff4b4b    coral — eyebrows, highlights
--accent-pink     #ff69b4    pink accent
--accent-gold     #ffc800    gold accent
--accent-lemon    #ffd84d    lemon yellow
--accent-sky      #5cc8ff    sky blue
--gold            #ff9600    warm orange — streaks, in-progress states
--gold-border     #ff960060  semi-transparent orange for card borders
--gold-faint      #fff3e0    very light orange for hover backgrounds
--surface-bg      #fffcde    warm cream page background
--surface-card    #ffffff    white card background
--surface-tint    #f0fdf4    very light green tint for hover/active surfaces
--text-dark       #2b2b2b    near-black — main body text
--text-mid        #777777    grey — secondary text
--text-muted      #afafaf    light grey — hints, labels
--green           #58cc02    success / completed state
--green-bg        #ddf4c8
--green-border    #a4e065
--amber           #ff9600    in-progress / practising
--amber-bg        #fff0d4
--amber-border    #ffc66d
--red             #ff4b4b    wrong answers / difficult vocab
--red-bg          #ffd5d5
--red-border      #ff9a9a
```

**Never hardcode hex values in page CSS — always use these variables.**

---

## JavaScript Architecture

### progress.js
Manages all localStorage state.

**Lesson progress** (`kalamo_book1_progress` etc.):
- `true` → complete
- `'in_progress'` → opened but not passed
- absent → not started

**Vocab ratings** (`kalamo_vocab_ratings`):
- Nested: `book1_5` → `{ 0: 'know', 1: 'struggle', 2: 'unknown' }`

Legacy `medina_*` keys are migrated automatically on first load so existing learner progress is preserved.

Key functions: `getLessonStatus`, `markComplete`, `isLessonUnlocked`, `refreshBookListUI`, `getVocabRatingsForLesson`, `setVocabWordRating`, `confirmAndResetAllKalamoProgress`

### book1-lesson-list.js
Defines `BOOK1_SECTIONS` (5 sections) and `BOOK1_LESSONS` (23 lessons). Builds the lesson list DOM on `book1.html` — section headers, lesson cards with inline chips, skip button on the current lesson, quiz-only button. Lessons with data files should set `available: true`; future lessons omit it or set `available: false` so they render as coming soon.

### lesson-core.js
All lesson UI logic. Key functions:

| Function | Purpose |
|---|---|
| `initLesson()` | Entry point — populates header, builds all panels |
| `goToStep(step)` / `unlockAndGo(step)` | Panel navigation |
| `applyQuizJumpMode()` | Unlocks all steps, jumps to quiz (`?step=quiz`) |
| `buildVocabularyPanel(data)` | Renders guided sentence cards when present; otherwise renders vocab cards with rating buttons and the known-words bucket |
| `buildLessonPanel(data)` | Renders grammar blocks and example table |
| `buildComprehensionPanel(data)` | Renders story with hover/tap-translate, MCQ questions |
| `buildPracticePanel(data)` | Renders practice questions, or the end-of-lesson word rating step when `reviewVocabAtEnd` is true |
| `buildQuizPanel(data)` | Renders MC + typing quiz questions |
| `annotateArabicText(text, vocab)` | Splits Arabic text into words, matches against vocab, wraps matched words in `<span class="ar-word" data-meaning="...">` for hover/tap tooltips |
| `checkComprehension` / `checkPractice` / `checkQuiz` / `checkTyping` | Answer checking |
| `submitQuiz()` / `retryQuiz()` | Quiz scoring and reset |
| `attachKeyboard()` | On-screen Arabic keyboard |
| `stripDiacritics(str)` / `normalise(str)` | Lenient answer matching |

### lesson-loader.js
Reads URL params → builds data file path → injects `<script>` → calls `initLesson()`. Also checks lesson lock state (redirects if locked) and marks lesson in-progress.

### reading.js
Runs the Reading tab on `reading.html`.

- Reading is now the main practice surface of the app.
- Shows one unlocked story at a time, chosen from the learner's completed Book 1 lessons and unread reading challenges.
- The default screen must remain simple: short purpose line, story, questions.
- Progress belongs behind the `View Progress` button, not in a large always-visible ladder.
- After checking answers, shows pass/retry feedback and a next-story action when another story is available.
- Current rank threshold is 5 passed stories per level; update `RANKS` and the overview copy together if this methodology changes.
- Builds internal progress from course words already unlocked plus reading-only reward words, but does not show a full satchel by default.
- Stores reading challenge passes in `kalamo_reading_progress`.
- Stores reading-only satchel words in `kalamo_reading_satchel`.
- Keeps levels learner-facing (`Pre-Level One`, `Level One`, `Level Two`) while internally following novice-reader principles: familiar vocabulary, short controlled sentences, clear literal comprehension questions, and gradual grammar expansion.

### bottom-nav.js
Creates the app-wide navigation.

- Rendered on every app page that imports it.
- Desktop: top pill nav.
- Mobile: bottom tab nav.
- Destinations are fixed: Today (`index.html`), Course (`bookX.html`), Reading (`reading.html`), Review (`review.html`).
- Do not add Drill/Practice back into this navigation unless the product direction changes.

---

## Hover/Tap-Translate Feature

Reading comprehension Arabic text is annotated automatically. When `buildComprehensionPanel` renders the Arabic story, it calls `annotateArabicText(text, vocab)` which:

1. Builds a lookup map from the lesson's `vocab` array (stripping diacritics for matching)
2. Splits the Arabic text on spaces
3. Wraps each word that matches a vocab entry in `<span class="ar-word" data-meaning="English meaning">`
4. Non-matching words are rendered as plain text

Words get a dashed gold underline. Hovering, keyboard focus, or tapping shows a dark tooltip with the English meaning. `attachArabicWordMeaningToggles()` handles mobile tap state and closes any open meaning when the learner taps elsewhere.

**Limitation:** Inflected forms (e.g. كِتَابُهُ vs vocab كِتَابٌ) may not match due to case endings and attached pronouns. This is acceptable for now — core vocabulary still matches reliably.

---

## Validation

Run the local validator before and after adding lesson content:

```bash
node scripts/validate-lessons.js
```

It checks required lesson fields, vocab shape, grammar blocks, practice/comprehension answer strings, quiz indices, `passMark`, and `totalQuestions`. Missing future `nextLesson` data files are warnings, not errors, so the latest completed lesson can point to the next planned lesson.

---

## Arabic Typing — Lenient Matching

Typed answers are normalised before comparison:
1. Strip all diacritics (harakat) — Unicode range `ً–ٟ`
2. Strip punctuation (Arabic comma، full stop, question mark؟)
3. Collapse multiple spaces
4. Trim

So `هذا بيت` and `هَذَا بَيْتٌ` are treated as identical. After any check, the ideal answer with full vowels is always shown.

---

## Design Rules

### Typography
- Arabic text → `font-family: 'Amiri', serif; font-weight: 700`
- Body/UI text → `font-family: 'Lato', sans-serif`
- Labels/eyebrows → `font-family: 'Cinzel', serif` — uppercase only
- No italics on body text
- Minimum `font-weight: 400`, prefer `700` for anything important
- Desktop base font size: `html { font-size: 20px }`
- Mobile may use smaller component-level type and tighter spacing when needed for scanability; do not blindly preserve desktop scale on phones

### Colour
- Palette is a soft pastel dream: lavender purple (#b8a3f5), baby blue (#93c5fd), bubblegum pink (#f9a8d4), sunny yellow (#fde047)
- Background is a dreamy lavender-to-pink gradient (#faf8ff → #fff5f8 → #f0f9ff)
- Brand lavender → primary buttons, links, active states
- Mint green → completed / correct (subtle, not dominant)
- Gold/amber → in-progress, streaks, warm accents
- Soft rose → errors / wrong answers (never colour alone)
- All colours are defined as CSS custom properties in `shared.css` — never hardcode hex values

### Layout
- Max width: `1220px` on book list pages, `900px` on lesson pages
- Desktop remains the richest layout, designed for 1280px+ at 100% zoom
- Mobile gets purpose-built compact layouts, not just a squeezed desktop layout
- Onboarded users should land on the Today dashboard by default. Do not redirect returning users straight to Course.
- Keep top-level navigation consistent across desktop and mobile: Today, Course, Reading, Review.
- At phone widths, prefer short rows, tighter padding, fewer decorative chips, and smaller Arabic display sizes where the desktop treatment would create excessive scrolling
- Vocabulary cards should become compact study rows on mobile: Arabic + meaning remain visible, secondary metadata can be reduced or hidden
- Lesson/book cards can hide nonessential chips/descriptions on very narrow screens if the primary action and lesson identity remain clear
- Geometric SVG tile pattern fixed on every page at `opacity: 0.04`
- Sticky nav on all pages

### Product UX rules
- Today is the learner's home base and must always answer: "What should I do next?"
- Course teaches. Reading practices. Review memorizes. Keep those roles distinct.
- Reading should not feel like a dashboard. It is a comprehension surface.
- Review should move toward Anki-style spaced repetition, not generic mixed drills.
- Avoid adding new persistent panels, badges, ladders, or drawers unless they directly improve the learner loop.
- The app may be playful and colorful, but daily-use screens should stay quick to scan.

### Accessibility
- Arabic-Indic numerals (٠١٢٣٤٥٦٧٨٩) for all numbers shown to users — use `toArabicNumeral()`
- Colour is never the only indicator — correct/wrong always uses icons and text too
- All interactive elements have `:hover` and `:focus-visible` states

---

## SEO & Production Files

| File | Purpose |
|------|---------|
| `favicon.svg` | Browser tab icon — Arabic ع, emerald background, gold text |
| `robots.txt` | Allows all crawlers, points to sitemap |
| `sitemap.xml` | Lists main pages for Google indexing |
| `404.html` | Custom branded error page for GitHub Pages |

All HTML pages have: `<meta name="description">`, Open Graph tags (`og:title`, `og:description`, `og:url`, `og:type`, `og:site_name`), Twitter card tags, and `<link rel="canonical">`.

---

## Progress

### Infrastructure
| File | Status |
|------|--------|
| `index.html` | ✅ Complete |
| `book1.html` | ✅ Complete |
| `book2.html` | ✅ Placeholder |
| `book3.html` | ✅ Placeholder |
| `404.html` | ✅ Complete |
| `lessons/b1-final-quiz.html` | ✅ Placeholder |
| `favicon.svg` | ✅ Complete |
| `robots.txt` | ✅ Complete |
| `sitemap.xml` | ✅ Complete |
| `assets/css/shared.css` | ✅ Complete |
| `assets/css/book-list.css` | ✅ Complete |
| `assets/css/lesson.css` | ✅ Complete |
| `assets/css/reading.css` | ✅ Complete |
| `assets/js/progress.js` | ✅ Complete |
| `assets/js/book1-lesson-list.js` | ✅ Complete |
| `assets/js/lesson-core.js` | ✅ Complete |
| `assets/js/lesson-loader.js` | ✅ Complete |
| `assets/js/reading.js` | ✅ Complete |
| `lessons/lesson.html` | ✅ Complete |
| `reading.html` | ✅ Complete |

### Book 1 Lessons
| Lesson | Topic | Status |
|--------|-------|--------|
| 1 | This is… (Masculine) — هَذَا | ✅ Complete |
| 2 | That is… (Masculine) — ذَلِكَ | ✅ Complete |
| 3 | Indefinite & Definite Nouns | ✅ Complete |
| 4 | Prepositions | ✅ Complete |
| 5 | The Possessive Construction (Iḍāfa) | ✅ Complete |
| 6 | This is… (Feminine) — هَذِهِ | ✅ Complete |
| 7 | That is… (Feminine) — تِلْكَ | ✅ Complete |
| 8 | Sun and Moon Letters | ✅ Complete |
| 9 | Adjectives | ✅ Complete |
| 10 | Attached Pronouns | ✅ Complete |
| 11 | Pronouns with Prepositions — فِيهِ / فِيهَا | ✅ Complete |
| 12 | Relative Pronouns — الَّذِي / الَّتِي | ✅ Complete |
| 13 | Past Tense Verbs — ذَهَبَ / ذَهَبَتْ | ✅ Complete |
| 14 | Past Tense (You & I) | 🔲 Not started |
| 15 | Past Tense — Full Conjugation | 🔲 Not started |
| 16 | Adverbs of Place & Substitution | 🔲 Not started |
| 17 | The Particle of Calling — يَا | 🔲 Not started |
| 18 | Interrogatives — مَنْ / مَا | 🔲 Not started |
| 19 | Inna and Its Sisters — إِنَّ | 🔲 Not started |
| 20 | Sound Masculine Plural | 🔲 Not started |
| 21 | Sound Feminine Plural | 🔲 Not started |
| 22 | The Dual — الْمُثَنَّى | 🔲 Not started |
| 23 | How Many? — كَمْ | 🔲 Not started |
| Final Quiz | Book 1 comprehensive | ✅ Placeholder |

### Book 2 & 3
🔲 Not started — pending completion of Book 1

---

## What NOT To Do

- No backend, database, or server-side code — static only
- No npm, webpack, or build tools — plain HTML/CSS/JS
- No per-lesson HTML files — `lessons/lesson.html` is the only shell
- Do not hardcode hex colours — use CSS variables
- Do not add CSS variables outside `shared.css`
- Do not store anything in localStorage except lesson progress and vocab ratings (keys: `kalamo_book*_progress`, `kalamo_vocab_ratings`; legacy `medina_*` keys are migration-only)
- Also allowed localStorage keys: onboarding/current-book state, XP/streak state, and reading progress (`kalamo_onboarded`, `kalamo_current_book`, `kalamo_learning_mode`, `kalamo_xp`, `kalamo_streak`, `kalamo_reading_progress`, `kalamo_reading_satchel`)
- Do not reduce the desktop base font size (`20px`) or max content widths without good reason
- Do not treat mobile as an afterthought — every new page/component needs a phone-width pass for spacing, type size, and scrolling density
- Do not use italics on body text or font weights below 400
- Do not duplicate vocabulary across lessons
- Do not reference grammar concepts in a lesson's quiz that haven't been taught yet
- Do not make Daily Practice/Drill visible in the main navigation or dashboard unless the product direction changes
- Do not make Reading cluttered with a permanent rank ladder, satchel, or large hero
- Do not commit and push every small change — batch into meaningful commits
