self.addEventListener('fetch', event => {
    // const offlineResp = new Response(`
    // Bienvenido a mi página Web
    // Disculpa, pero para usarla necesitas internet
    // `);

    //     const offlineResp = new Response(`
    //     <!DOCTYPE html>
    // <html lang="en">
    // <head>
    //     <meta charset="UTF-8">
    //     <meta name="viewport" content="width=device-width, initial-scale=1.0">
    //     <meta http-equiv="X-UA-Compatible" content="ie=edge">
    //     <title>Mi PWA</title>

    // </head>
    // <body class="container p-3">
    // <h1>Offline Mode</h1>
    // </body>
    // </html>
    //     `, {
    //         headers: {
    //             'Content-type': 'text/html'
    //         }
    //     });

    const offlineResp = fetch('pages/offline.html');


    const respuesta = fetch(event.request)
        .catch(() => {
            return offlineResp;
        });

    event.respondWith(respuesta);
})