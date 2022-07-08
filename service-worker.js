let cacheData = 'appV1'
this.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(cacheData).then((cache) => {
            cache.addAll([
                '/static/css/main.eb6e7166.css',
                '/static/js/787.058b54b2.chunk.js',
                '/static/js/main.69c8bf33.js',
                '/index.html',
                '/',
            ])
        })
    )
})

// this.addEventListener("fetch", (event) => {
//     event.respondWith(
//         caches.match(event.request)
//             .then((resp) => {
//                 if (resp) {
//                     return resp
//                 }
//             })
//     )
// })
