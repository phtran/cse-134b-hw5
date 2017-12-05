// Cache ID Version
const cacheID = 'v1';
// Files to precache
const cacheFiles = [
  // HTML Files
  '/../',
  '/../addGame.html',
  '/../addPlayer.html',
  '/../editGame.html',
  '/../editGameStats.html',
  '/../editPlayer.html',
  '/../editStatsPlayers.html',
  '/../homeScreen.html',
  '/../index.html',
  '/../manage.html',
  '/../signup.html',
  '/../statsPlayers.html',
  '/../viewGameSchedule.html',
  '/../viewGameStats.html',
  '/../viewPlayer.html',
  '/../offline.html',
  // CSS Files
  // Image Files
  '/../img/calendar.png',
  '/../img/edit.png',
  '/../img/logo2.png',
  '/../img/profile.png',
  // JS Files
  'initializeThings.js',
  '/pageRedirection.js',
  '/sw.js',
  '/util.js',
  // Misc. Files
  '/../manifest.json'
];

// Service Worker Install Event
self.addEventListener('install', function(event) {
  console.log('Attempting to install service worker and cache static assets');
  event.waitUntil(
    caches.open(cacheID)
    .then(function(cache) {
      return cache.addAll(cacheFiles);
    })
    .catch(function(error) {
      console.log(`Unable to add cached assets: ${error}`);
    })
  );
});

// Service Worker Activate Event
self.addEventListener('activate', function(e) {
  e.waitUntil(
    // Load up all items from cache, and check if cache items are not outdated
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if (key !== cacheID) {
          console.log('[ServiceWorker] Removing old cache', key);
          return caches.delete(key);
        }
      }));
    })
  );
  return self.clients.claim();
});

// Service Worker Fetch Event
self.addEventListener('fetch', function(e) {
  e.respondWith(
    // If request matches with something in cache, then return reponse
    // from cache, otherwise fetch it
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    }).catch(() => {
        if(e.request.mode == "navigate") {
            return caches.match('/../offline.html');
        }
    })
  );
});