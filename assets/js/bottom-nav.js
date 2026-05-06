/* ============================================================
   bottom-nav.js — Kalamo
   Injects a fixed bottom tab bar on mobile (<= 768px).
   ============================================================ */

(function () {
  /* Determine which tab is active based on current URL */
  var path = location.pathname;
  var page =
    path.includes('drill')   ? 'drill'   :
    path.includes('review')  ? 'review'  :
    path.includes('reading') ? 'reading' :
    path.includes('book')    ? 'lessons' :
    path.includes('lesson')  ? 'lessons' :
    'home';

  var tabs = [
    { id: 'home',    href: 'index.html',   icon: '🏠', label: 'Home'    },
    { id: 'lessons', href: 'book1.html',   icon: '📖', label: 'Lessons' },
    { id: 'drill',   href: 'drill.html',   icon: '⚡', label: 'Practice' },
    { id: 'review',  href: 'review.html',  icon: '🔁', label: 'Review'  },
  ];

  /* Resolve relative href for pages in subdirectories */
  var base = path.includes('/lessons/') ? '../' : '';

  var nav = document.createElement('nav');
  nav.className = 'bottom-nav';
  nav.setAttribute('aria-label', 'Main navigation');

  tabs.forEach(function (tab) {
    var a = document.createElement('a');
    a.href = base + tab.href;
    a.className = 'bottom-nav-tab' + (tab.id === page ? ' bottom-nav-tab--active' : '');
    a.setAttribute('aria-current', tab.id === page ? 'page' : 'false');
    a.innerHTML =
      '<span class="bottom-nav-icon">' + tab.icon + '</span>' +
      '<span class="bottom-nav-label">' + tab.label + '</span>';
    nav.appendChild(a);
  });

  document.body.appendChild(nav);

  /* Add bottom padding to body so content isn't hidden behind the bar */
  document.body.classList.add('has-bottom-nav');
})();
