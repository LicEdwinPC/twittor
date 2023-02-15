if (navigator.serviceWorker) {
    navigator.serviceWorker.register('../04-cache-offline/sw.js');
}

// if (window.caches) {
//     caches.open('prueba-1');
//     caches.open('prueba-2');

//     // has: Comando para ver si existe algun cache
//     // caches.has('prueba-2').then(existe => {
//     //     // console.log(existe);
//     // });

//     //Borrar cache-> delete
//     // caches.delete('prueba-1').then(console.log);

//     caches.open('cache-v1.1')
//         .then(cache => {
//             // cache.add('../04-cache-offline/index.html');

//             //Agregar varios archivos al cache.
//             cache.addAll([
//                 '../04-cache-offline/index.html',
//                 '../04-cache-offline/css/style.css',
//                 '../04-cache-offline/img/main.jpg'
//             ]).then(() => {
//                 //Borrar algo de un cache en especifico
//                 // cache.delete('../04-cache-offline/css/style.css');

//                 cache.put('../04-cache-offline/index.html', new Response('Hola mundo'));

//             });

//             //Leer un archivo del cache
//             // cache.match('../04-cache-offline/index.html')
//             //     .then(res => {
//             //         res.text().then(console.log);
//             //     });


//         });

//     caches.keys().then(keys => {
//         console.log(keys);
//     });

// }