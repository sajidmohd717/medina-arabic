(function () {
  var path = location.pathname;
  var currentBook = (function() {
    try {
      return localStorage.getItem('kalamo_current_book') || 'book1';
    } catch { return 'book1'; }
  })();

  var page =
    path.includes('drill')   ? 'drill'   :
    path.includes('review')  ? 'review'  :
    path.includes('reading') ? 'reading' :
    path.includes('book')    ? 'lessons' :
    path.includes('lesson')  ? 'lessons' :
    'lessons';

  var tabs = [
    { id: 'lessons', href: currentBook + '.html', icon: '📖', label: 'Course' },
    { id: 'drill',   href: 'drill.html',   icon: '⚡', label: 'Practice' },
    { id: 'review',  href: 'review.html',  icon: '🔁', label: 'Review'  },
  ];

  if (path.includes('reading')) {
    tabs.push({ id: 'reading', href: 'reading.html', icon: '📖', label: 'Reading' });
  }

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
  document.body.classList.add('has-bottom-nav');
})();
