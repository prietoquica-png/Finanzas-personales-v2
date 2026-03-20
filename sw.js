self.addEventListener('fetch', (event) => {
  // Este código permite que la app funcione como PWA
  event.respondWith(fetch(event.request));
});
