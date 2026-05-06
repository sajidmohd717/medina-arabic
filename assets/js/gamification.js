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

  if (streak.current >= 7 && streak.current % 7 === 0) {
    setTimeout(() => _showStreakMilestone(streak.current), 300);
  }

  return streak;
}

function _showStreakMilestone(days) {
  const el = document.getElementById('streak-widget');
  if (!el) return;
  el.style.animation = 'none';
  void el.offsetHeight;
  el.style.animation = 'wiggle 0.5s ease';
  setTimeout(() => { el.style.animation = ''; }, 600);

  const msg = document.createElement('div');
  msg.style.cssText = `
    position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);
    z-index:99999;text-align:center;animation:fadeUp 0.4s ease;
    pointer-events:none;
  `;
  msg.innerHTML = `
    <div style="font-size:3rem;margin-bottom:0.5rem;animation:bounceIn 0.5s ease;">🔥</div>
    <div style="font-family:'Nunito',sans-serif;font-size:1.8rem;font-weight:800;color:var(--accent-gold);">${days}-Day Streak!</div>
    <div style="font-family:'Lato',sans-serif;font-size:1rem;color:var(--text-mid);margin-top:0.3rem;">Incredible dedication! 🌟</div>
  `;
  document.body.appendChild(msg);
  setTimeout(() => { msg.style.opacity = '0'; msg.style.transition = 'opacity 0.4s'; }, 2500);
  setTimeout(() => msg.remove(), 3000);
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
  el.innerHTML = `<span style="animation:xpBounce 0.6s ease forwards;">+${amount}</span> <span style="font-weight:400;">XP</span>`;
  document.body.appendChild(el);
  requestAnimationFrame(() => el.classList.add('xp-float--go'));
  setTimeout(() => el.remove(), 2000);

  const prevXP = getXP() - amount;
  const prevLevel = xpLevel(prevXP);
  const newLevel = xpLevel(getXP());
  if (newLevel > prevLevel) {
    setTimeout(() => _showLevelUp(newLevel), 600);
  }
}

function _showLevelUp(level) {
  const celebration = document.createElement('div');
  celebration.style.cssText = `
    position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);
    z-index:99999;text-align:center;animation:fadeUp 0.4s ease;
    pointer-events:none;
  `;
  celebration.innerHTML = `
    <div style="font-size:3rem;margin-bottom:0.5rem;animation:bounceIn 0.5s ease;">🎉</div>
    <div style="font-family:'Nunito',sans-serif;font-size:1.8rem;font-weight:800;color:var(--brand);">Level ${level}!</div>
    <div style="font-family:'Lato',sans-serif;font-size:1rem;color:var(--text-mid);margin-top:0.3rem;">You're on fire! 🔥</div>
  `;
  document.body.appendChild(celebration);
  setTimeout(() => { celebration.style.opacity = '0'; celebration.style.transition = 'opacity 0.4s'; }, 2500);
  setTimeout(() => celebration.remove(), 3000);

  if (typeof celebrate === 'function') celebrate('pass');
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

/* ── Celebration helpers ── */

function celebrate(type = 'pass') {
  const container = document.createElement('div');
  container.className = 'confetti-container';
  container.setAttribute('aria-hidden', 'true');
  document.body.appendChild(container);

  const colors = type === 'pass'
    ? ['#b8a3f5', '#f9a8d4', '#93c5fd', '#fde047', '#fca5a5', '#a18ae8']
    : ['#fbbf24', '#93c5fd', '#f9a8d4'];

  for (let i = 0; i < 60; i++) {
    const piece = document.createElement('div');
    piece.className = 'confetti-piece';
    const color = colors[Math.floor(Math.random() * colors.length)];
    const size = 6 + Math.random() * 8;
    const left = Math.random() * 100;
    const delay = Math.random() * 0.8;
    const duration = 1.5 + Math.random() * 2;
    const isCircle = Math.random() > 0.5;

    piece.style.cssText = `
      left: ${left}%;
      width: ${size}px;
      height: ${size}px;
      background: ${color};
      border-radius: ${isCircle ? '50%' : '2px'};
      animation-delay: ${delay}s;
      animation-duration: ${duration}s;
    `;
    container.appendChild(piece);
  }

  setTimeout(() => container.remove(), 4000);
}

function animateNumber(el, target, suffix = '') {
  if (!el) return;
  const duration = 800;
  const start = performance.now();
  function update(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.round(eased * target);
    el.textContent = current + suffix;
    if (progress < 1) requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
}

/* ── Public API ── */

window.awardXP        = awardXP;
window.updateStreak   = updateStreak;
window.getXP          = getXP;
window.getStreak      = getStreak;
window.xpLevel        = xpLevel;
window.celebrate      = celebrate;
window.animateNumber  = animateNumber;
window.isDrillDoneToday  = isDrillDoneToday;
window.markDrillDoneToday = markDrillDoneToday;
