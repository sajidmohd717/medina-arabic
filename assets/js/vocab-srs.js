/* ============================================================
   vocab-srs.js — Kalamo Spaced Repetition Engine
   ============================================================
   Public API (window.SRS):
     discoverWords(book, lessonNum, vocabArray)
     getDueWords(maxCount?)
     gradeWord(wordKey, correct)
     getSatchel()
     getWordsByLesson()
     getSatchelStats()
     getLevelInfo(level)
   ============================================================ */

(function () {
  'use strict';

  /* ── Storage keys ── */
  const KEY_SATCHEL = 'kalamo_satchel'; // discovered word objects
  const KEY_SRS     = 'kalamo_srs';     // per-word review state

  /* ── SRS config ── */
  const LEVELS = [
    { label: 'Very New',        emoji: '🌱', color: '#6B7280', bg: '#F3F4F6', border: '#D1D5DB', days: 0  },
    { label: 'New',             emoji: '📖', color: '#3B82F6', bg: '#EFF6FF', border: '#93C5FD', days: 1  },
    { label: 'Getting There',   emoji: '⚡', color: '#F59E0B', bg: '#FFFBEB', border: '#FCD34D', days: 3  },
    { label: 'Familiar',        emoji: '✨', color: '#8B5CF6', bg: '#F5F3FF', border: '#C4B5FD', days: 7  },
    { label: 'Know It Well',    emoji: '🌟', color: '#10B981', bg: '#ECFDF5', border: '#6EE7B7', days: 21 },
  ];

  const MS_PER_DAY = 86400000;

  /* ── Helpers ── */
  function load(key, fallback) {
    try { return JSON.parse(localStorage.getItem(key)) || fallback; }
    catch { return fallback; }
  }
  function save(key, data) {
    try { localStorage.setItem(key, JSON.stringify(data)); } catch {}
  }
  function wordKey(book, lessonNum, idx) {
    return `${book}_L${lessonNum}_${idx}`;
  }
  function nowMs() { return Date.now(); }

  /* ── discoverWords ───────────────────────────────────────────
     Call after a lesson milestone. Adds any words not yet in the
     satchel. Idempotent — safe to call multiple times.
  ── */
  function discoverWords(book, lessonNum, vocabArray) {
    if (!vocabArray || !vocabArray.length) return;
    const satchel = load(KEY_SATCHEL, []);
    const existing = new Set(satchel.map(w => w.key));

    let added = false;
    vocabArray.forEach((word, idx) => {
      const key = wordKey(book, lessonNum, idx);
      if (existing.has(key)) return;
      satchel.push({
        key,
        ar:           word.ar,
        trans:        word.trans || '',
        meaning:      word.meaning || '',
        type:         word.type || '',
        book,
        lessonNum,
        wordIndex:    idx,
        discoveredAt: nowMs()
      });
      added = true;
    });

    if (added) save(KEY_SATCHEL, satchel);
  }

  /* ── getDueWords ─────────────────────────────────────────────
     Returns words whose nextReview <= now, sorted by urgency
     (lowest level first, then oldest review). Falls back to
     least-recently-seen words if nothing is due.
  ── */
  function getDueWords(maxCount) {
    maxCount = maxCount || 20;
    const satchel = load(KEY_SATCHEL, []);
    const srs     = load(KEY_SRS, {});
    const now     = nowMs();

    const due = [], notDue = [];

    satchel.forEach(word => {
      const state = srs[word.key] || { level: 0, nextReview: 0, lastSeen: 0, reviews: 0 };
      const entry = { ...word, ...state };
      if (entry.nextReview <= now) {
        due.push(entry);
      } else {
        notDue.push(entry);
      }
    });

    // Sort due: lowest level first (most urgent), then oldest nextReview
    due.sort((a, b) => a.level - b.level || a.nextReview - b.nextReview);

    if (due.length >= maxCount) return due.slice(0, maxCount);

    // Fill remaining slots with least-recently-seen words
    notDue.sort((a, b) => a.lastSeen - b.lastSeen);
    const fill = notDue.slice(0, maxCount - due.length);
    return [...due, ...fill];
  }

  /* ── gradeWord ───────────────────────────────────────────────
     correct = true  → advance level (cap at 4)
     correct = false → drop level (floor at 0), schedule for now
  ── */
  function gradeWord(key, correct) {
    const srs   = load(KEY_SRS, {});
    const state = srs[key] || { level: 0, nextReview: 0, lastSeen: 0, reviews: 0 };

    const oldLevel = state.level;
    let newLevel;
    if (correct) {
      newLevel = Math.min(4, oldLevel + 1);
    } else {
      newLevel = Math.max(0, oldLevel - 1);
    }

    const interval = LEVELS[newLevel].days * MS_PER_DAY;
    const nextReview = correct ? nowMs() + interval : nowMs(); // wrong = review again now

    srs[key] = {
      level:      newLevel,
      nextReview: nextReview,
      lastSeen:   nowMs(),
      reviews:    (state.reviews || 0) + 1
    };

    save(KEY_SRS, srs);
    return { oldLevel, newLevel, nextReview };
  }

  /* ── getSatchel ── */
  function getSatchel() {
    return load(KEY_SATCHEL, []);
  }

  /* ── getWordsByLesson ────────────────────────────────────────
     Returns { lessonNum: [ {word + srsState}, … ], … }
     sorted ascending by lessonNum.
  ── */
  function getWordsByLesson() {
    const satchel = load(KEY_SATCHEL, []);
    const srs     = load(KEY_SRS, {});
    const map     = {};

    satchel.forEach(word => {
      const state = srs[word.key] || { level: 0, nextReview: 0, lastSeen: 0, reviews: 0 };
      const key   = `${word.book}_L${word.lessonNum}`;
      if (!map[key]) map[key] = { book: word.book, lessonNum: word.lessonNum, words: [] };
      map[key].words.push({ ...word, ...state });
    });

    return Object.values(map).sort((a, b) => a.lessonNum - b.lessonNum);
  }

  /* ── getSatchelStats ── */
  function getSatchelStats() {
    const satchel = load(KEY_SATCHEL, []);
    const srs     = load(KEY_SRS, {});
    const counts  = [0, 0, 0, 0, 0]; // per level
    const now     = nowMs();
    let dueCount  = 0;

    satchel.forEach(word => {
      const state = srs[word.key] || { level: 0, nextReview: 0 };
      counts[state.level]++;
      if (state.nextReview <= now) dueCount++;
    });

    return { total: satchel.length, counts, dueCount };
  }

  /* ── getLevelInfo ── */
  function getLevelInfo(level) {
    return LEVELS[Math.max(0, Math.min(4, level))];
  }

  /* ── getAllLevels ── */
  function getAllLevels() { return LEVELS; }

  /* ── Export ── */
  window.SRS = {
    discoverWords,
    getDueWords,
    gradeWord,
    getSatchel,
    getWordsByLesson,
    getSatchelStats,
    getLevelInfo,
    getAllLevels
  };

})();
