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
- Progress is tracked locally via `localStorage` — no backend, no accounts
- Arabic typing practice is built into every quiz
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

## File Structure

```
medina-arabic/
├── GUIDELINES.md               ← you are here
├── index.html                  ← landing page (book selector)
├── book1.html                  ← Book 1 lesson list
├── book2.html                  ← Book 2 lesson list (or coming soon placeholder)
├── book3.html                  ← Book 3 lesson list (or coming soon placeholder)
├── assets/
│   ├── css/
│   │   ├── shared.css          ← CSS variables, fonts, nav, geo background, chips, animations
│   │   ├── book-list.css       ← styles for book lesson-list pages only
│   │   └── lesson.css          ← styles for individual lesson pages only
│   └── js/
│       └── progress.js         ← all localStorage progress logic, shared across all pages
└── lessons/
    ├── b1-lesson1.html         ← Book 1, Lesson 1
    ├── b1-lesson2.html         ← Book 1, Lesson 2
    ├── ...
    ├── b1-lesson23.html        ← Book 1, Lesson 23
    ├── b1-final-quiz.html      ← Book 1 final assessment
    ├── b2-lesson1.html         ← Book 2, Lesson 1
    ├── ...
    └── b3-final-quiz.html      ← Book 3 final assessment
```

### File naming rules
- Book list pages: `book1.html`, `book2.html`, `book3.html` — flat in root
- Lesson pages: `b{book number}-lesson{lesson number}.html` — e.g. `b1-lesson1.html`
- Final quizzes: `b{book number}-final-quiz.html`
- All lessons live in the `/lessons/` folder
- Never use `index.html` for anything other than the root landing page

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
- Ornamental divider (`.ornament-divider`)
- Global keyframe animations (`fadeDown`, `fadeUp`, `fadeIn`)

### book-list.css
Only loaded by `book1.html`, `book2.html`, `book3.html`. Contains:
- Page header, stats, eyebrow
- Two-column layout with sticky sidebar
- Section headers and section nav
- Lesson cards (`.lesson-card`, `.lesson-num-badge`, etc.)
- Final quiz card

### lesson.css
Only loaded by lesson pages (`b1-lesson1.html` etc.). Contains:
- Step indicator bar
- Lesson panels (vocab, lesson content, practice, quiz)
- Vocab grid and vocab cards
- Grammar blocks, example tables
- Practice questions and options
- Quiz questions, Arabic typing input, on-screen keyboard
- Score card
- Navigation buttons (`.btn`, `.btn-primary`, `.btn-secondary`, `.btn-success`)

### CSS variables (defined in shared.css)
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
```

**Do not hardcode hex values in page-specific CSS.** Always use these variables.

---

## JavaScript Architecture

### progress.js (shared)
Loaded by every page. Provides:

| Function | Purpose |
|---|---|
| `getProgress(book)` | Returns progress object from localStorage |
| `markComplete(lessonNum, book)` | Marks a lesson as done and saves |
| `markIncomplete(lessonNum, book)` | Removes a lesson completion |
| `countCompleted(book)` | Returns number of completed lessons |
| `updateProgressBar(book)` | Updates `#progressFill` and `#progressLabel` in nav |
| `updateCompletedCount(book)` | Updates `#completedCount` Arabic numeral stat |
| `updateLessonCards(book)` | Marks completed cards green with ✓ on book list page |
| `updateFinalQuiz(book)` | Unlocks final quiz button when all lessons done |
| `refreshBookListUI(book)` | Calls all of the above — use this on book list pages |
| `initSidebarScroll()` | Activates sidebar section highlighting on scroll |
| `toArabicNumeral(n)` | Converts Western digits to Arabic-Indic numerals |

**localStorage keys:**
- `medina_book1_progress` — object like `{ "1": true, "2": true, ... }`
- `medina_book2_progress`
- `medina_book3_progress`

### Lesson page JS (inline per lesson)
Each lesson page has its own inline `<script>` for:
- Step navigation (`goToStep`, `unlockAndGo`)
- Practice question checking (`checkPractice`)
- Quiz multiple choice checking (`checkQuiz`)
- Typing question checking (`checkTyping`) with lenient normalisation
- Quiz submission and scoring (`submitQuiz`, `retryQuiz`)
- On-screen Arabic keyboard (`typeKey`, `deleteKey`, `clearInput`)

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
- Gold (`--gold: #8a6420`) is the only accent colour across the whole site
- Green is reserved strictly for correct answers and completed states
- Red/pink is reserved strictly for wrong answers

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

## Lesson Page Structure

Every lesson page (`b1-lesson1.html` etc.) follows this exact structure:

```
1. Vocabulary panel
   - Grid of vocab cards (Arabic word, transliteration, English meaning, word type badge)
   - "I know these words" button unlocks Step 2

2. Lesson Content panel
   - Grammar blocks explaining the concept
   - Grammar rules highlighted in a gold left-border callout box
   - Example sentences in a table (Arabic | Transliteration | Meaning)
   - "I understand" button unlocks Step 3

3. Practice panel
   - 4 low-stakes multiple choice questions (no score tracked)
   - Instant feedback per question — correct answer always revealed
   - "Ready — Take the Quiz" button unlocks Step 4

4. Quiz panel
   - 6 questions: mix of multiple choice and Arabic typing
   - Typing questions have a per-question "Check Answer" button
   - Lenient answer matching: strips diacritics and punctuation before comparing
   - Ideal answer always shown after checking a typing question
   - Pass mark: 4/6
   - On pass: `markComplete(lessonNum, 'book1')` is called
   - On-screen Arabic keyboard available for typing questions
```

---

## Arabic Typing — Lenient Matching Rules

When checking typed Arabic answers, the following normalisation is applied before comparison:

1. Strip all diacritics (harakat): fatha, kasra, damma, tanwin, shadda, sukun (Unicode range `\u064B–\u065F`)
2. Strip punctuation: Arabic comma، full stop، question mark؟ and Latin equivalents
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
| `lessons/b1-lesson1.html` | ✅ Complete |
| `lessons/b1-lesson2.html` | 🔲 Not started |
| `lessons/b1-lesson3.html` | 🔲 Not started |
| `lessons/b1-lesson4.html` | 🔲 Not started |
| `lessons/b1-lesson5.html` | 🔲 Not started |
| `lessons/b1-lesson6.html` | 🔲 Not started |
| `lessons/b1-lesson7.html` | 🔲 Not started |
| `lessons/b1-lesson8.html` | 🔲 Not started |
| `lessons/b1-lesson9.html` | 🔲 Not started |
| `lessons/b1-lesson10.html` | 🔲 Not started |
| `lessons/b1-lesson11.html` | 🔲 Not started |
| `lessons/b1-lesson12.html` | 🔲 Not started |
| `lessons/b1-lesson13.html` | 🔲 Not started |
| `lessons/b1-lesson14.html` | 🔲 Not started |
| `lessons/b1-lesson15.html` | 🔲 Not started |
| `lessons/b1-lesson16.html` | 🔲 Not started |
| `lessons/b1-lesson17.html` | 🔲 Not started |
| `lessons/b1-lesson18.html` | 🔲 Not started |
| `lessons/b1-lesson19.html` | 🔲 Not started |
| `lessons/b1-lesson20.html` | 🔲 Not started |
| `lessons/b1-lesson21.html` | 🔲 Not started |
| `lessons/b1-lesson22.html` | 🔲 Not started |
| `lessons/b1-lesson23.html` | 🔲 Not started |
| `lessons/b1-final-quiz.html` | 🔲 Not started |
| All Book 2 & 3 lessons | 🔲 Not started |

---

## When Adding a New Lesson

1. Copy `b1-lesson1.html` as a starting template
2. Update the `<title>` tag
3. Update the nav breadcrumb (`Book 1 · Lesson N`)
4. Update the `h1` Arabic text and English subtitle
5. Update the lesson summary paragraph
6. Replace all vocab cards with the correct vocabulary for that lesson
7. Replace all grammar blocks with the correct content
8. Replace all practice questions (4 questions minimum)
9. Replace all quiz questions (6 questions — aim for 2 typing, 4 multiple choice)
10. Update `TYPING_QUESTIONS` with correct answers and accepted variants
11. Update `markComplete(N, 'book1')` — change `N` to the correct lesson number
12. Update the "Next Lesson" button href to point to the next lesson file
13. Update `GUIDELINES.md` progress table — mark the lesson as ✅ Complete

---

## What NOT To Do

- Do not add any backend, database, or server-side code — this is a static site
- Do not add npm, webpack, or any build tools — plain HTML/CSS/JS only
- Do not use `localStorage` for anything other than lesson progress
- Do not change the base font size (`20px`) or the max content widths without good reason
- Do not use italics for body text
- Do not use font weights below 400
- Do not hardcode hex colour values — use CSS variables
- Do not add new CSS variables without adding them to `shared.css` first
- Do not create new JS files without documenting them in this file
- Do not change the lesson file naming convention