(function () {
  var path = location.pathname;

  if (path.includes('lesson')) return;

  var currentBook = (function() {
    try {
      return localStorage.getItem('kalamo_current_book') || 'book1';
    } catch { return 'book1'; }
  })();

  var page =
    path.endsWith('/') || path.includes('index') ? 'home' :
    path.includes('review')  ? 'review'  :
    path.includes('reading') ? 'reading' :
    path.includes('book')    ? 'lessons' :
    '';

  var tabs = [
    { id: 'home',    href: 'index.html',       icon: '🏠', label: 'Today' },
    { id: 'lessons', href: currentBook + '.html', icon: '📖', label: 'Course' },
    { id: 'reading', href: 'reading.html', icon: 'ق', label: 'Reading' },
    { id: 'review',  href: 'review.html',  icon: '🔁', label: 'Review'  },
  ];

  var base = path.includes('/lessons/') ? '../' : '';

  var nav = document.createElement('nav');
  nav.className = 'app-nav';
  nav.setAttribute('aria-label', 'Main navigation');

  var inner = document.createElement('div');
  inner.className = 'app-nav-inner';

  tabs.forEach(function (tab) {
    var a = document.createElement('a');
    a.href = base + tab.href;
    a.className = 'app-nav-tab' + (tab.id === page ? ' app-nav-tab--active' : '');
    a.setAttribute('aria-current', tab.id === page ? 'page' : 'false');
    a.innerHTML =
      '<span class="app-nav-icon">' + tab.icon + '</span>' +
      '<span class="app-nav-label">' + tab.label + '</span>';
    inner.appendChild(a);
  });

  nav.appendChild(inner);
  document.body.appendChild(nav);
  document.body.classList.add('has-app-nav');
})();
