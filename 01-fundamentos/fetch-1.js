var request = new XMLHttpRequest();

request.open('GET', 'https://reqres.in/api/users', true);
request.send(null);


request.onreadystatechange = function(state) {
    console.log(request);
    if (request.readyState === 4) {
        var respuesta = request.response;
        var respObj = JSON.parse(respuesta);
        console.log(respObj.page);
    }
};