// Ciclo de vida del SW
//Install se dispara cada que hay un cambio en el SW.
self.addEventListener('install', event => {

    //Descargar los assets, crear cache, etc.
    console.log('SW: ¡Instalando Service Worker!');

    //Codigo para activar automaticamente el SW
    // self.skipWaiting();

    const intalacion = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('SW: Instalaciones terminadas');
            self.skipWaiting();
            resolve();
        }, 1);


    });

    event.waitUntil(intalacion);
});

// Cuando el SW toma el control de la activacion

self.addEventListener('activate', event => {
    console.log('SW: Activo y listo para controlar la app');
});


//FETCH: Manejo de peticiones http

self.addEventListener('fetch', event => {

    //Aplicar estrategias del cache
    console.log('SW:', event.request.url);

    if (event.request.url.includes('https://reqres.in/')) {
        const respuesta = new Response(`{ ok: false, mensaje: 'jajajaja'}`);

        event.respondWith(respuesta);
    }
});


//SYNC: recuperamos conexion a internet

self.addEventListener('sync', event => {
    console.log('Tenemos conexion');
    console.log(event);
    console.log(event.tag);
});


//PUSH :  manejar las push notifications.

self.addEventListener('push', event => {
    console.log('Notificacion recibida');
});