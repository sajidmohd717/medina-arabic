# Kalamo — The Clear Path to Arabic

A modern, interactive platform for learning the Arabic language, built on the Madinah Arabic Course curriculum.

**Live site:** [sajidmohd717.github.io/medina-arabic](https://sajidmohd717.github.io/medina-arabic/)

---

## What is this?

Kalamo is a fully static web app that guides students through the Madinah Arabic Course — one of the most widely used Arabic curricula in the world. Each lesson walks you through vocabulary, grammar, reading comprehension, practice exercises, and a graded quiz before unlocking the next lesson.

### Features

- **Structured lessons** — vocabulary, grammar explanation, reading comprehension with hover/tap-translate tooltips, practice, and a scored quiz
- **Progress tracking** — lesson completion and vocab ratings saved in your browser (localStorage)
- **On-screen Arabic keyboard** — for typing Arabic answers without switching your system keyboard
- **Vocab rating system** — mark words as "know", "still practising", or "new/difficult" to track your retention
- **Fully static** — no backend, no build tools, no accounts required

---

## How to access it

**Online:** [sajidmohd717.github.io/medina-arabic](https://sajidmohd717.github.io/medina-arabic/)

**Locally:** Clone the repo and open `index.html` directly in your browser — no server needed.

```bash
git clone https://github.com/sajidmohd717/medina-arabic.git
cd medina-arabic
# open index.html in your browser
```

---

## Course structure

The app covers the Madinah Arabic Book 1 curriculum, divided into 5 sections:

| Section | Topic | Lessons |
|---------|-------|---------|
| 1 | Nouns & Pointing | 1–5 |
| 2 | Gender & Definiteness | 6–9 |
| 3 | Pronouns & Verbs | 10–14 |
| 4 | Verbs, Adverbs & Key Particles | 15–19 |
| 5 | Plurals, Duals & Numbers | 20–23 |

Books 2 and 3 are planned.

---

## Project structure

```
medina-arabic/
├── index.html                  ← Landing page
├── book1.html                  ← Book 1 lesson list
├── assets/
│   ├── css/
│   │   ├── shared.css          ← Global variables and base styles
│   │   ├── book-list.css       ← Book lesson-list page styles
│   │   └── lesson.css          ← Individual lesson page styles
│   └── js/
│       ├── progress.js         ← localStorage progress tracking
│       ├── book1-lesson-list.js ← Book 1 lesson data and card rendering
│       ├── lesson-core.js      ← Lesson UI logic (panels, quiz, keyboard)
│       └── lesson-loader.js    ← Dynamically loads lesson data by URL param
├── lessons/
│   ├── lesson.html             ← Single HTML shell for all lessons
│   ├── b1-final-quiz.html      ← Final quiz placeholder
│   └── data/
│       ├── b1-lesson1.js       ← Lesson data files
│       └── ...
└── scripts/
    └── validate-lessons.js     ← Local lesson data checks
```

All lesson pages share one HTML shell (`lessons/lesson.html`). Content is loaded dynamically from `lessons/data/` based on URL parameters — e.g. `lessons/lesson.html?book=1&lesson=5`.

---

## Adding a lesson

1. Create `lessons/data/bX-lessonY.js` following the structure of an existing file
2. Register the lesson in `assets/js/book1-lesson-list.js`
3. Run `node scripts/validate-lessons.js`

See `GUIDELINES.md` for the full data structure reference.
