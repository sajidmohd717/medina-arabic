/* ============================================================
   gamification.js — Kalamo
   XP points and daily streak tracking.
   ============================================================ */

const XP_KEY     = 'kalamo_xp';
const STREAK_KEY = 'kalamo_streak';
const DRILL_DATE_KEY = 'kalamo_drill_date';

function _todayStr() {
  return new Date().toISOString().slice(0, 10);
}

/* ── XP ── */

function getXP() {
  return parseInt(localStorage.getItem(XP_KEY) || '0', 10);
}

function awardXP(amount) {
  const next = getXP() + amount;
  localStorage.setItem(XP_KEY, String(next));
  _renderXPBar();
  _showXPFloat(amount);
  return next;
}

function xpLevel(xp) {
  return Math.floor(xp / 500) + 1;
}

/* ── Streak ── */

function getStreak() {
  try {
    return JSON.parse(localStorage.getItem(STREAK_KEY)) || { current: 0, best: 0, lastDate: null };
  } catch {
    return { current: 0, best: 0, lastDate: null };
  }
}

function updateStreak() {
  const today     = _todayStr();
  const streak    = getStreak();
  if (streak.lastDate === today) return streak;

  const prev = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
  streak.current = (streak.lastDate === prev) ? streak.current + 1 : 1;
  streak.best    = Math.max(streak.best, streak.current);
  streak.lastDate = today;
  localStorage.setItem(STREAK_KEY, JSON.stringify(streak));
  _renderStreakWidget();
  return streak;
}

/* ── Daily practice state ── */

function isDrillDoneToday() {
  return localStorage.getItem(DRILL_DATE_KEY) === _todayStr();
}

function markDrillDoneToday() {
  localStorage.setItem(DRILL_DATE_KEY, _todayStr());
}

/* ── Render helpers ── */

function _renderStreakWidget() {
  const el = document.getElementById('streak-widget');
  if (!el) return;
  const { current, best } = getStreak();
  el.innerHTML =
    `<span class="streak-flame">${current > 0 ? '🔥' : '○'}</span>` +
    `<span class="streak-count">${current}</span>`;
  el.title = `${current} day streak · best: ${best}`;
  el.classList.toggle('streak-widget--active', current > 0);
}

function _renderXPBar() {
  const xp      = getXP();
  const level   = xpLevel(xp);
  const inLevel = xp % 500;
  const pct     = (inLevel / 500) * 100;

  const fill  = document.getElementById('xp-bar-fill');
  const label = document.getElementById('xp-label');
  const lvlEl = document.getElementById('xp-level');
  if (fill)  fill.style.width   = pct + '%';
  if (label) label.textContent  = `${inLevel} / 500 XP`;
  if (lvlEl) lvlEl.textContent  = `Level ${level}`;
}

function _showXPFloat(amount) {
  const el = document.createElement('div');
  el.className = 'xp-float';
  el.textContent = `+${amount} XP`;
  document.body.appendChild(el);
  requestAnimationFrame(() => el.classList.add('xp-float--go'));
  setTimeout(() => el.remove(), 1400);
}

/* ── Reset hook — patch into existing clear function ── */

(function patchReset() {
  const orig = window.clearAllKalamoProgress;
  window.clearAllKalamoProgress = function () {
    if (orig) orig();
    localStorage.removeItem(XP_KEY);
    localStorage.removeItem(STREAK_KEY);
    localStorage.removeItem(DRILL_DATE_KEY);
  };
})();

/* ── Auto-render on load ── */

document.addEventListener('DOMContentLoaded', function () {
  _renderStreakWidget();
  _renderXPBar();
  _updateDrillButton();
});

function _updateDrillButton() {
  const btn = document.getElementById('drill-btn');
  if (!btn) return;
  if (isDrillDoneToday()) {
    btn.classList.add('drill-btn--done');
    btn.innerHTML = '<span>✓</span> Practice done';
  }
}

/* ── Public API ── */

window.awardXP        = awardXP;
window.updateStreak   = updateStreak;
window.getXP          = getXP;
window.getStreak      = getStreak;
window.xpLevel        = xpLevel;
window.isDrillDoneToday  = isDrillDoneToday;
window.markDrillDoneToday = markDrillDoneToday;
