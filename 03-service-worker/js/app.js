// Detectar si podemos usar Service Workers
if (navigator.serviceWorker) {
    navigator.serviceWorker.register('../03-service-worker/sw.js')
        .then(reg => {

            Notification.requestPermission().then(result => {
                console.log(result);
                reg.showNotification('Hola mundo!');
            });

            // setTimeout(() => {
            //     reg.sync.register('posteo-gatitos');
            //     console.log('Se enviaron fotos de gatitos al server');
            // }, 3000);
        });



}

// fetch('https://reqres.in/api/users')
//     .then(resp => resp.text())
//     .then(console.log);