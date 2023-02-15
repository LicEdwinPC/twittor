fetch('https://reqres.in/api/users/10000')
    .then(resp => {

        console.log(resp);

        if (resp.ok) {
            resp.json().then(console.log);
        } else {
            // console.log('No existe el usuario 10000');
            throw new Error('No existe el usuario 10000');
        }
        // resp.json().then(console.log);
    })
    .then(console.log)
    .catch(error => {
        console.log('Error en la petición');
        console.log(error);
    });