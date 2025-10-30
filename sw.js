const CACHE_NAME = 'quran-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/CSSs/quran.css',
  '/JSs/general.js',
  '/JSs/inf.js',
  '/manifest.json',
  '/images/end.jpg',
  '/images/end2.jpg',
  '/images/end3.jpg',
  '/images/end4.jpg',
  '/images/first.jpg',
  '/images/first2.jpg',
  '/images/first3.jpg',
  '/images/general.jpg',
  '/images/general2.jpg',
  '/images/icon.ico',
  '/images/jozIcon.png',
  '/images/logoCopy.png',
  '/images/nameGod.jpg',
  '/images/nameGod2.jpg',
  '/images/page.png',
  '/images/pages.png',
  '/images/patern-background.png',
  '/images/sorehicon.png',
  '/images/tarjomeh.jpg',
  '/images/tarjomeh2.jpg',
  '/images/titrSoreh.jpg',
  '/images/titrSoreh2.jpg',
  '/fonts/BBadr.ttf',
  '/fonts/IRZar.ttf',
  '/fonts/KFGQPCHAFSUthmanicScript-Regular.ttf',
  '/icon/icon.png',
  // آدرس فایل‌های استاتیک دیگر
];

// نصب Service Worker
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// Fetch events
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // بازگرداندن فایل از کش اگر موجود باشد
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});

// فعال‌سازی Service Worker
self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});