// Retire registrations from when the ocean page controlled the whole domain.
const oldOceanCaches = ['galok-v1', 'galok-v2', 'galok-v3'];

self.addEventListener('install', event => event.waitUntil(self.skipWaiting()));
self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const keys = (await caches.keys()).filter(key => oldOceanCaches.includes(key));
    await Promise.all(keys.map(key => caches.delete(key)));
    await self.registration.unregister();
    if (!keys.length) return;
    const windows = await self.clients.matchAll({type: 'window', includeUncontrolled: true});
    for (const client of windows) {
      if (!['/', '/index.html'].includes(new URL(client.url).pathname)) continue;
      if (keys.some(key => key === 'galok-v1' || key === 'galok-v2')) {
        // The oldest cached pages have no message listener.
        await client.navigate(client.url).catch(() => {});
      } else {
        client.postMessage({type: 'GALOK_SW_UPDATED'});
      }
    }
  })());
});
