function sumarUno(numero, callback) {

    if (numero >= 7) {
        callback("Número muy alto");
        return;
    }
    setTimeout(function() {
        // return numero + 1;
        callback(numero + 1);
    }, 800);

}


sumarUno(5, function(error, nuevoValor) {
    if (error) {
        console.log(error);
        return;
    }
    sumarUno(nuevoValor, function(nuevoValor2) {
        console.log(nuevoValor2);
    });
});