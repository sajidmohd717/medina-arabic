# Medina Arabic — Project Guidelines

> This file is for any contributor, collaborator, or AI assistant working on this project.
> Read this before making any changes.

---

## What This Project Is

A free, static, self-hostable web application for learning Classical Arabic through the **Medina Arabic Books** (also known as *Durus al-Lughah al-Arabiyyah*) by Shaykh Dr. V. Abdur-Raheem of the Islamic University of Madinah.

The site works like Duolingo — structured lessons with vocabulary, grammar content, practice exercises, and a quiz — but is built specifically around the Medina Book curriculum which is the most widely used Classical/Quranic Arabic course in the world.

**Target audience:** English-speaking adults learning Classical Arabic, including people who have studied the Medina Books before but need a structured way to review and test themselves without restarting from the beginning.

**Primary platform:** Desktop/PC browsers. Mobile is supported but desktop is the priority.

---

## Goals

- Cover all 3 Medina Books (Book 1: 23 lessons, Book 2: ~23 lessons, Book 3: ~23 lessons)
- Each lesson has 4 steps: Vocabulary → Lesson Content → Practice → Quiz
- A final quiz at the end of each book before moving to the next
- Progress is tracked locally via `localStorage` — no backend, no accounts (lesson completion, in-progress flags, optional vocabulary word ratings, and “reset all progress”)
- Arabic typing practice is built into every quiz
- Book list lessons unlock **in order**: lesson *N* opens only after the quiz for lesson *N−1* is passed (deep links redirect back to the book page if locked)
- Learners can open **Quiz only** (`?step=quiz`) from the book list to jump straight to the quiz on an unlocked lesson
- Vocabulary panel supports **word ratings** (know / practising / difficult) and collapses “know well” words into a **Words you know well** section
- Accessible and readable — designed with dyslexia-friendliness in mind (no thin fonts, no italics for body text, strong contrast)
- Hosted for free on GitHub Pages as a fully static site

---

## Tech Stack

| Layer | Choice | Reason |
|---|---|---|
| Hosting | GitHub Pages | Free, static, no backend needed |
| Languages | HTML, CSS, vanilla JS | No frameworks — keeps it simple and portable |
| Arabic font | Amiri (Google Fonts) | Best Arabic web font for readability |
| English font | Lato (Google Fonts) | Dyslexia-friendly, strong weights, clear at all sizes |
| Display font | Cinzel (Google Fonts) | Used for labels, eyebrows, uppercase headings |
| Progress tracking | localStorage | No server required |
| Build tools | None | Plain files, no npm, no bundler |

---

## Architecture (Refactored)

The project uses a **data-driven architecture** to avoid code duplication across 69+ lesson pages.

### Core Principle

- **Lesson pages are shells** — they contain only the HTML structure
- **Lesson content is pure JavaScript data** — stored in separate data files
- **Shared logic lives in core JS files** — navigation, keyboard, scoring, etc.

This means:
- Creating a new lesson takes a few minutes (data file + HTML shell + Book 1 catalog row when applicable)
- Fixing a bug once fixes it for all lessons that share the same JS/CSS
- Adding a feature to all lesson pages usually means editing `lesson-core.js` / `lesson.css` once

**Book 1 list page:** `book1.html` is a thin shell. Section headers, sidebar links, and all lesson cards are built at runtime from **`assets/js/book1-lesson-list.js`** (`BOOK1_SECTIONS`, `BOOK1_LESSONS`, `renderBook1LessonList()`). Editing copy or adding a Book 1 lesson row happens in that file—avoid duplicating dozens of lesson cards in HTML.

### File Structure

```
medina-arabic/
├── GUIDELINES.md               ← you are here
├── index.html                  ← landing page (book selector)
├── book1.html                  ← Book 1 shell; lesson rows built by book1-lesson-list.js
├── book2.html                  ← Book 2 lesson list (coming soon)
├── book3.html                  ← Book 3 lesson list (coming soon)
│
├── assets/
│   ├── css/
│   │   ├── shared.css          ← CSS variables, nav, geo background, chips
│   │   ├── book-list.css       ← styles for book lesson-list pages
│   │   └── lesson.css          ← styles for individual lesson pages
│   │
│   └── js/
│       ├── progress.js         ← localStorage progress tracking
│       ├── book1-lesson-list.js ← Book 1 section headers + lesson list (data + DOM)
│       ├── lesson-core.js      ← Shared functions (keyboard, scoring, navigation)
│       └── lesson-loader.js    ← Builds the page from data
│
├── lessons/
│   ├── b1-lesson1.html         ← Shell for Lesson 1 (tiny — ~180 lines)
│   ├── b1-lesson2.html         ← Shell for Lesson 2
│   ├── ...
│   ├── b1-lesson23.html
│   ├── b1-final-quiz.html      ← Final assessment (to be built)
│   │
│   └── data/
│       ├── b1-lesson1.js       ← All content for Lesson 1
│       ├── b1-lesson2.js       ← All content for Lesson 2
│       └── ...                 ← One data file per lesson
```

### How `book1.html` Works

1. Loads `progress.js` then `book1-lesson-list.js`
2. Calls `renderBook1LessonList()` to fill `#book1-sidebar-nav` and `#book1-lessons-mount`
3. Calls `refreshBookListUI('book1')` to apply progress colours, sequential locks, final quiz state

### How a Lesson Page Works

1. `b1-lesson1.html` loads CSS and creates empty containers
2. `progress.js` loads (storage helpers + book list UI; vocabulary rating helpers)
3. `lesson-core.js` loads (all shared functions)
4. `data/b1-lesson1.js` loads (the unique content for this lesson)
5. `lesson-loader.js` runs: checks sequential unlock, optionally marks lesson in-progress, reads `LESSON_DATA`, populates all panels; if URL has `?step=quiz`, unlocks all steps and opens the quiz panel

### Lesson Data Structure (`b1-lessonX.js`)

Each data file exports a `LESSON_DATA` object with this shape:

```javascript
const LESSON_DATA = {
  book: 'book1',                    // 'book1', 'book2', or 'book3'
  lessonNum: 2,                     // Lesson number (1-23)
  titleArabic: 'ذَلِكَ',            // Arabic title
  titleEnglish: 'That is…',         // English title
  summary: 'Lesson description...', // Shown at top of page
  nextLesson: 'b1-lesson3.html',    // Link to next lesson
  passMark: 5,                      // Number of correct answers needed to pass
  totalQuestions: 8,                // Total number of quiz questions

  vocab: [                          // Array of vocabulary items
    { ar: 'ذَلِكَ', trans: 'dhālika', meaning: 'That (masc., far)', type: 'Demonstrative' },
    // ...
  ],

  grammarBlocks: [                  // Array of grammar explanations
    {
      title: 'What is ذَلِكَ?',
      content: '<p>HTML content here...</p>',
      rule: 'The grammar rule in a highlighted box.'
    },
    // ...
  ],

  examples: [                       // Array of example sentences
    { ar: 'ذَلِكَ بَيْتٌ', trans: 'dhālika baytun', meaning: 'That is a house.' },
    // ...
  ],

  practiceQuestions: [              // Array of practice questions (4-8)
    { arabic: 'ذَلِكَ مَسْجِدٌ', correct: 'That is a mosque.', options: ['Option A', 'Option B', 'Option C', 'Option D'] },
    // or with text instead of arabic:
    { text: 'What does ذَلِكَ mean?', correct: 'That (masc., far)', options: [...] },
    // ...
  ],

  quizQuestions: {
    multipleChoice: [               // Multiple choice questions (6-8 recommended)
      { prompt: 'What does ذَلِكَ mean?', options: ['This', 'That', 'These', 'Those'], correct: 1 },
      // correct is the index (0-based) of the right answer
      // can also include arabic: 'هَذَا بَيْتٌ' for questions that show Arabic
    ],
    typing: [                       // Typing questions (2-3 recommended)
      { prompt: 'Type in Arabic: "That is a house."', ideal: 'ذَلِكَ بَيْتٌ', accepts: ['ذلك بيت', 'ذَلِكَ بَيْتٌ', 'ذلك بيتٌ', 'ذَلِكَ بيت'] },
      // accepts is an array of acceptable normalised answers
    ]
  }
};
```

---

## File Naming Rules

| File Type | Pattern | Example |
|-----------|---------|---------|
| Book list page | `bookX.html` | `book1.html` |
| Lesson HTML | `bX-lessonY.html` | `b1-lesson1.html` |
| Lesson data | `bX-lessonY.js` | `b1-lesson1.js` (in `lessons/data/`) |
| Final quiz HTML | `bX-final-quiz.html` | `b1-final-quiz.html` |
| Final quiz data | `bX-final-quiz.js` | `b1-final-quiz.js` (in `lessons/data/`) |

**Rules:**
- Never use spaces in filenames
- Always use lowercase
- Book number: 1, 2, or 3
- Lesson number: 1-23 (with no leading zeros)

---

## CSS Architecture

All pages load `shared.css` first, then the page-specific stylesheet.

### shared.css
Contains everything that is used on more than one page:
- CSS custom properties (design tokens)
- Body and base reset
- Geometric SVG background (`.geo-bg`)
- Sticky nav bar (`nav`, `.nav-back`, `.nav-title`, `.nav-progress`)
- Vocab/Grammar/Quiz chips (`.chip`, `.chip-vocab`, `.chip-grammar`, `.chip-quiz`)
- Global keyframe animations (`fadeDown`, `fadeUp`, `fadeIn`)

### book-list.css
Only loaded by `book1.html`, `book2.html`, `book3.html`. Contains:
- Page header, stats, eyebrow
- Two-column layout with sticky sidebar
- Section headers and section nav
- Lesson cards (`.lesson-card`, `.lesson-card-main`, `.lesson-card-quiz`, status modifiers, locked state with ✕ badge)
- Final quiz card and reset-progress button (`.btn-reset-progress`)

### lesson.css
Only loaded by lesson pages. Contains:
- Step indicator bar
- Lesson panels
- Vocabulary layout (`vocab-layout`, active grid, **Words you know well** `<details>`, compact cards for rated “know”)
- Grammar blocks, example tables
- Practice questions and options
- Quiz questions, Arabic typing input, on-screen keyboard
- Score card
- Navigation buttons

### CSS Variables (defined in shared.css)

```css
--gold           #8a6420   /* primary accent — all gold UI elements */
--gold-light     #c4a050   /* lighter gold for borders and dividers */
--gold-border    #c4a05060 /* semi-transparent gold for card borders */
--gold-faint     #8a642015 /* very faint gold for hover backgrounds */
--bg             #fdf6ec   /* warm parchment page background */
--bg-card        #fff9f2   /* slightly lighter card background */
--text-dark      #1a1208   /* near-black — main body text */
--text-mid       #4a3820   /* dark brown — secondary text */
--text-muted     #8a7254   /* muted brown — hints, labels */
--green          #1e5c38   /* success / completed state */
--green-bg       #d4edda   /* light green background */
--green-border   #8ac4a0   /* green border */
--amber          #b45309   /* “in progress” / practising highlights */
--amber-bg       #fff7ed
--amber-border   #fdba7460 /* semi-transparent amber */
--red            #9b2c2c   /* vocab “difficult” / emphasis */
--red-bg         #fdecec
--red-border     #e8a8a8
```

**Do not hardcode hex values in page-specific CSS.** Always use these variables (define new tokens in `shared.css` first).

**Note:** `index.html` still uses inline `<style>` for the landing hero; prefer aligning with `shared.css` variables when touching that page.

---

## JavaScript Architecture

### `progress.js`
Loaded by lesson pages and book list pages. Handles **lesson progress**, **sequential locks on the book list**, **vocabulary word ratings**, and **global reset**.

**Lesson progress (`localStorage` keys `medina_book1_progress`, etc.):**
- Value `true` → lesson **completed** (quiz passed)
- Value `'in_progress'` → learner opened the lesson but has not passed the quiz yet
- Key absent → **not started**

| Function | Purpose |
|---|---|
| `getProgress(book)` | Raw progress object from localStorage |
| `getLessonStatus(lessonNum, book)` | `'not_started'` \| `'in_progress'` \| `'complete'` |
| `markLessonInProgress(lessonNum, book)` | Sets `'in_progress'` if not already complete |
| `markComplete` / `markIncomplete` | Quiz pass / clear completion |
| `countCompleted(book)` | Counts completed lessons only |
| `isLessonUnlocked(lessonNum, book)` | Lesson 1 always; else requires all previous lessons **complete** |
| `lessonHtmlRelPath(book, n)` | Builds `lessons/b1-lessonN.html` style path |
| `updateLessonSequentialLocks(book)` | Applies locked UI (✕, disabled links) on book list |
| `updateProgressBar`, `updateCompletedCount`, `updateLessonCards`, `updateFinalQuiz` | Book list nav + stats + card colours + final quiz lock |
| `refreshBookListUI(book)` | Full refresh after DOM for lesson cards exists |
| `initSidebarScroll()` | Sidebar section highlighting |
| `toArabicNumeral(n)` | Western → Arabic-Indic digits |

**Vocabulary ratings (`localStorage` key `medina_vocab_ratings`):**
- Nested object: `${book}_${lessonNum}` → `{ wordIndex: 'know' \| 'struggle' \| 'unknown' }`

| Function | Purpose |
|---|---|
| `getVocabRatingsForLesson(book, lessonNum)` | Read ratings for one lesson |
| `setVocabWordRating(book, lessonNum, wordIndex, rating)` | Save or clear (`null`) |

**Reset**

| Function | Purpose |
|---|---|
| `clearAllMedinaProgress()` | Removes all progress + vocab rating keys |
| `confirmAndResetAllMedinaProgress()` | `confirm()` dialog, clear, `location.reload()` |

### `book1-lesson-list.js`
Loaded only by `book1.html`. Defines **`BOOK1_SECTIONS`**, **`BOOK1_LESSONS`**, and **`renderBook1LessonList()`** (builds sidebar + section blocks + lesson cards). Exposes **`BOOK1_LIST_META`** for optional tooling.

### `lesson-core.js`
Shared functions used by all lesson pages:

| Function | Purpose |
|---|---|
| `goToStep(step)` | Navigates between vocab/lesson/practice/quiz panels |
| `unlockAndGo(step)` | Unlocks a step and navigates to it |
| `applyQuizJumpMode()` | Unlocks every step and switches to quiz (`?step=quiz`) |
| `buildVocabularyPanel` / vocab helpers | Renders vocab cards, ratings, **Words you know well** bucket |
| `checkPractice(btn, isCorrect)` | Handles practice question answers |
| `checkQuiz(btn, qNum, isCorrect)` | Handles multiple choice quiz answers |
| `checkTyping(qNum, questionData)` | Handles typed quiz answers with lenient matching |
| `submitQuiz()` | Calculates score and marks lesson complete if passed |
| `retryQuiz()` | Resets all quiz questions |
| `attachKeyboard()` | Initialises the on-screen Arabic keyboard |
| `normalise(str)` | Strips diacritics for lenient answer matching |
| `stripDiacritics(str)` | Removes Arabic vowel marks |

### `lesson-loader.js`
After `LESSON_DATA` is available: checks **`isLessonUnlocked`** (redirects to the book page if locked), **`markLessonInProgress`**, resets step state, **`initLesson()`**, then applies **`?step=quiz`** via **`applyQuizJumpMode`** when requested.

---

## Design Rules

### Typography
- **Arabic text** → always `font-family: 'Amiri', serif; font-weight: 700`
- **Body/UI text** → always `font-family: 'Lato', sans-serif`
- **Labels/eyebrows** → `font-family: 'Cinzel', serif` — uppercase only
- **No italics** on body text — this is intentional for readability and dyslexia accessibility
- **No thin font weights** — minimum `font-weight: 400`, prefer `700` for anything important
- Base font size: `html { font-size: 20px }` — do not reduce this

### Colour
- The palette is warm and classical — gold, parchment, dark brown
- Never use cool greys, blues, or white backgrounds — always use the warm CSS variables
- Gold (`--gold`) is the primary accent across the site
- Green — completed lessons / correct quiz feedback / “know well” vocabulary emphasis
- Amber — in-progress lessons / “still practising” vocabulary
- Red — wrong quiz answers and “difficult / new” vocabulary emphasis (not the only cue — icons/text too)

### Layout
- Max content width: `1220px` on book list pages, `900px` on lesson pages
- Desktop-first — the site is designed for 1280px+ screens at 100% zoom
- The geometric SVG tile pattern appears on every page as a fixed background at `opacity: 0.04`
- All pages share the same sticky nav bar structure

### Accessibility
- All Arabic numerals displayed to users should use Arabic-Indic numerals (٠١٢٣٤٥٦٧٨٩) via `toArabicNumeral()`
- Colour is never the only indicator — correct/wrong states also use ✓/✗ icons and text feedback
- All interactive elements have `:hover` and `:focus-visible` states

---

## Arabic Typing — Lenient Matching Rules

When checking typed Arabic answers, the following normalisation is applied before comparison:

1. Strip all diacritics (harakat): fatha, kasra, damma, tanwin, shadda, sukun (Unicode range `\u064B–\u065F`)
2. Strip punctuation: Arabic comma، full stop۔ question mark؟ and Latin equivalents
3. Collapse multiple spaces into one
4. Trim leading/trailing whitespace

This means `هذا بيت` and `هَذَا بَيْتٌ` are treated as the same answer.

After any typing check (right or wrong), the ideal answer with full vowels is always shown so the student can compare.

---

## Content Source

All lesson content is based on **Durus al-Lughah al-Arabiyyah (Lessons in Arabic Language)** by Shaykh Dr. V. Abdur-Raheem, published by the Islamic University of Madinah.

- Book 1: 23 lessons — foundational grammar, demonstratives, nouns, basic verbs
- Book 2: ~23 lessons — expanded grammar, more verb forms, Quranic vocabulary
- Book 3: ~23 lessons — advanced structures, classical text reading

When writing lesson content, vocabulary, and quiz questions:
- Be accurate to the book — do not invent grammar rules
- Transliterations should follow standard academic conventions (macrons for long vowels: ā, ī, ū)
- Always include diacritics (full harakat) on Arabic text shown to students
- Quiz questions should test what was actually taught in that lesson — do not reference concepts from later lessons

---

## Progress Status

| File | Status |
|---|---|
| `index.html` | ✅ Complete |
| `book1.html` | ✅ Complete |
| `book2.html` | ✅ Placeholder (coming soon) |
| `book3.html` | ✅ Placeholder (coming soon) |
| `assets/css/shared.css` | ✅ Complete |
| `assets/css/book-list.css` | ✅ Complete |
| `assets/css/lesson.css` | ✅ Complete |
| `assets/js/progress.js` | ✅ Complete |
| `assets/js/book1-lesson-list.js` | ✅ Complete |
| `assets/js/lesson-core.js` | ✅ Complete |
| `assets/js/lesson-loader.js` | ✅ Complete |
| `lessons/b1-lesson1.html` | ✅ Complete |
| `lessons/data/b1-lesson1.js` | ✅ Complete |
| `lessons/b1-lesson2.html` | ✅ Complete |
| `lessons/data/b1-lesson2.js` | ✅ Complete |
| `lessons/b1-lesson3.html` | 🔲 Not started |
| `lessons/data/b1-lesson3.js` | 🔲 Not started |
| ... | (Lessons 4-23) | 🔲 Not started |
| `lessons/b1-final-quiz.html` | 🔲 Not started |
| All Book 2 & 3 lessons | 🔲 Not started |

---

## When Adding a New Lesson

1. **Copy the previous data file** (e.g., `b1-lesson2.js` → `b1-lesson3.js`)
2. **Update the `LESSON_DATA` object** with the new lesson's content:
   - `lessonNum`
   - `titleArabic`, `titleEnglish`
   - `summary`
   - `nextLesson`
   - `vocab` array (keep review words, add new ones)
   - `grammarBlocks` array
   - `examples` array
   - `practiceQuestions` array
   - `quizQuestions.multipleChoice` array
   - `quizQuestions.typing` array
3. **Copy the previous HTML file** (e.g., `b1-lesson2.html` → `b1-lesson3.html`)
4. **Update the data file reference** in the HTML script tag
5. **Register the lesson on Book 1** — add one object to `BOOK1_LESSONS` in `assets/js/book1-lesson-list.js` (`lessonNum`, `section`, `slug`, `ar`, `title`, `desc`) so it appears on `book1.html`
6. **Test the lesson** in your browser
7. **Update the GUIDELINES.md progress table** to mark the lesson as complete

---

## What NOT To Do

- Do not add any backend, database, or server-side code — this is a static site
- Do not add npm, webpack, or any build tools — plain HTML/CSS/JS only
- Do not use `localStorage` for unrelated features — only **lesson progress**, **vocabulary word ratings**, and the **reset-all** action; use **documented keys only** (`medina_book*_progress`, `medina_vocab_ratings`)
- Do not change the base font size (`20px`) or the max content widths without good reason
- Do not use italics for body text
- Do not use font weights below 400
- Do not hardcode hex colour values — use CSS variables
- Do not add new CSS variables without adding them to `shared.css` first
- Do not create new JS files without documenting them in this file
- Do not change the lesson file naming convention
- Do not put lesson content directly in HTML files — always use the data-driven approach (`lessons/data/*.js`). Book 1 **list card copy** lives in `book1-lesson-list.js`, not in `book1.html`.

---

