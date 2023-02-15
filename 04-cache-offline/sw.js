// const CACHE_NAME = 'cache-1';
const CACHE_STATIC_NAME = 'static-v1';
const CACHE_DINAMIC_NAME = 'dinamic-v1';
const CACHE_INMUTABLE_NAME = 'inmutable-v1';

const CACHE_DINAMIC_LIMIT = 50;

self.addEventListener('install', e => {

    const cacheProm = caches.open(CACHE_STATIC_NAME)
        .then(cache => {
            return cache.addAll([
                '/',
                '../04-cache-offline/index.html',
                '../04-cache-offline/css/style.css',
                '../04-cache-offline/img/main.jpg',
                'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css',
                '../04-cache-offline/js/app.js',
                '../04-cache-offline/img/no-img.jpg'
            ]);
        });

    const cacheInmutable = caches.open(CACHE_INMUTABLE_NAME)
        .then(cache => cache.add('https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css'));


    e.waitUntil(Promise.all([cacheProm, cacheInmutable]));

});




self.addEventListener('fetch', e => {

    //5.- Cache and Network Race.


    const respuesta = new Promise((resolve, reject) => {
        const rechazada = false;
        const falloUnaVez = () => {
            if (rechazada) {
                if (/\.(png|jpg)$/i.test(e.request.url)) {
                    resolve(caches.match('/img/no-image.jpg'))
                } else {
                    reject('No se encontro respuesta');
                }

            } else {
                rechazada = true;
            }
        }

        fetch(e.request).then(res => {
            if (res.ok) {
                resolve(res);
            } else {
                falloUnaVez();
            }

        }).catch(falloUnaVez);

        caches.match(e.request).then(res => {
            res ? resolve(res) : falloUnaVez();
        }).cache(falloUnaVez);
    });

    e.respondWith(respuesta);



    // 4- Cache with network update
    // Rendimiento es crítico
    // Siempre estarán un paso atrás

    // if (e.request.url.includes('bootstrap')) {
    //     return e.respondWith(caches.match(e.request));
    // }

    // const respuesta = caches.open(CACHE_STATIC_NAME).then(cache => {

    //     fetch(e.request).then(newRes =>
    //         cache.put(e.request, newRes));

    //     return cache.match(e.request);

    // });

    // e.respondWith(respuesta);


});

function LimpiarCache(cacheName, numeroItems) {
    caches.open(cacheName)
        .then(cache => {

            return cache.keys()
                .then(keys => {

                    if (keys.length > numeroItems) {
                        cache.delete(keys[0])
                            .then(limpiarCache(cacheName, numeroItems));
                    }
                });


        });

}

// 3.- Network with cache fallback.
// const respuesta = fetch(e.request).then(res => {

//     console.log('Fetch', res);

//     caches.open(CACHE_DINAMIC_NAME).then(cache => {
//         cache.put(e.request, res);
//         LimpiarCache(CACHE_DINAMIC_NAME, CACHE_DINAMIC_LIMIT);
//     });

//     return res.clone();
// }).catch(err => {
//     return caches.match(e.request);
// });

// e.responseWith(respuesta);

// 2- Cache with network fallback
// const respuesta = caches.match(e.request)
//     .then(res => {
//         if (res) return res;

//         console.log('No existe', e.request.url);

//         return fetch(e.request).then(newResp => {
//             caches.open(CACHE_DINAMIC_NAME).then(cache => {
//                 cache.put(e.request.newResp);
//             });

//             return newResp.clone();
//         })
//     });



// self.addEventListener('fetch', e => {
//     //1.- Cache Only
//     // e.respondWith(caches.match(e.request));

//     const respuesta = caches.match(e.request)
//         .then(res => {
//             if (res) {
//                 return res;
//             } else {
//                 //No existe en el cache y tengo que ir a la web
//                 console.log('No existe', e.request.url);

//                 return fetch(e.request).then(newRespose => {
//                     return newRespose;
//                 });
//             }
//         });

//     e.respondWith(respuesta);
// });