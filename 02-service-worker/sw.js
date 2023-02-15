self.addEventListener('fetch', event => {

    const resp = fetch(event.request)
        .then(resp => {
            return resp.ok ? resp : fetch('img/main.jpg');
        });

    event.respondWith(resp);

    // event.respondWith(
    //     fetch(event.request)
    //     .then(resp => {
    //         if (resp.ok) {
    //             return resp;
    //         } else {
    //             return fetch('img/main.jpg');
    //         }
    //     })
    // );

});