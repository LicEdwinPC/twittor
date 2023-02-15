//Comfirmar si podemos usar el SW
if (navigator.serviceWorker) {

    navigator.serviceWorker.register('../02-service-worker/sw.js');
}