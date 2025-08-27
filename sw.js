const CACHE_NAME = 'citas-cache-v1';
const urlsToCache = [
    'index.html',
    'css/bootstrap.min.css',
    'css/fullcalendar.min.css',
    'css/all.min.css',
    'js/bootstrap.bundle.min.js',
    'js/xlsx.full.min.js',
    'js/chart.min.js',
    'js/fullcalendar.main.min.js',
    'js/es.js'
    // Agrega aquí la ruta a la carpeta 'webfonts' si es necesario
];

// Instala el Service Worker y guarda los archivos en caché
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Cache abierto');
                return cache.addAll(urlsToCache);
            })
    );
});

// Intercepta las peticiones y responde desde el caché si es posible
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                // Si la respuesta está en el caché, la retorna. Si no, la busca en la red.
                return response || fetch(event.request);
            })
    );
});