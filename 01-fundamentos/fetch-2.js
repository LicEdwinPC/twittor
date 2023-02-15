// https://reqres.in/api/users

fetch('https://reqres.in/api/users')
    .then(resp => resp.json())
    .then(respObj => {
        console.log(respObj);
    });