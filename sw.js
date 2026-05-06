/* ============================================================
   sw.js — Kalamo Service Worker
   Cache-first strategy for app shell + lesson data.
   ============================================================ */

const CACHE_NAME = 'kalamo-v10';

const APP_SHELL = [
  '/medina-arabic/',
  '/medina-arabic/index.html',
  '/medina-arabic/book1.html',
  '/medina-arabic/book2.html',
  '/medina-arabic/book3.html',
  '/medina-arabic/drill.html',
  '/medina-arabic/review.html',
  '/medina-arabic/reading.html',
  '/medina-arabic/404.html',
  '/medina-arabic/manifest.json',
  '/medina-arabic/favicon.svg',
  '/medina-arabic/assets/css/shared.css',
  '/medina-arabic/assets/css/book-list.css',
  '/medina-arabic/assets/css/lesson.css',
  '/medina-arabic/assets/css/reading.css',
  '/medina-arabic/assets/css/gamification.css',
  '/medina-arabic/assets/css/mobile.css',
  '/medina-arabic/assets/js/progress.js',
  '/medina-arabic/assets/js/gamification.js',
  '/medina-arabic/assets/js/lesson-core.js',
  '/medina-arabic/assets/js/lesson-loader.js',
  '/medina-arabic/assets/js/book1-lesson-list.js',
  '/medina-arabic/assets/js/reading.js',
  '/medina-arabic/assets/js/bottom-nav.js',
  '/medina-arabic/lessons/lesson.html',
];

/* Cache lesson data files individually on first fetch */
const LESSON_DATA_PREFIX = '/medina-arabic/lessons/data/';

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);

  /* Only handle same-origin GET requests */
  if (request.method !== 'GET' || url.origin !== location.origin) return;

  /* Google Fonts — network-first, fall back gracefully */
  if (url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com') {
    event.respondWith(
      fetch(request).catch(() => new Response('', { status: 408 }))
    );
    return;
  }

  /* Lesson data files — cache on first fetch */
  if (url.pathname.startsWith(LESSON_DATA_PREFIX)) {
    event.respondWith(
      caches.open(CACHE_NAME).then(async cache => {
        const cached = await cache.match(request);
        if (cached) return cached;
        const response = await fetch(request);
        if (response.ok) cache.put(request, response.clone());
        return response;
      })
    );
    return;
  }

  /* App shell — cache-first */
  event.respondWith(
    caches.match(request).then(cached => {
      if (cached) return cached;
      return fetch(request).then(response => {
        if (response.ok) {
          caches.open(CACHE_NAME).then(cache => cache.put(request, response.clone()));
        }
        return response;
      });
    })
  );
});
