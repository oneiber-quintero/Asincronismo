let xmlHttpRequest = require('xmlhttprequest').XMLHttpRequest;
let API = "https://rickandmortyapi.com/api/character/";

function fetchData(url_api,callback){

    let xhttp = new xmlHttpRequest();
    xhttp.open('GET', url_api, true);
    xhttp.onreadystatechange = function (event) {
        if(xhttp.readyState === 4 ){
            if( xhttp.status === 200 ){
                callback(null,JSON.parse(xhttp.responseText));
            }else{
                const error = new Error('Error' + url_api);
                return callback(error, null);
            }
        }
    }
    xhttp.send();

}

fetchData(API, function(error1, response1) {

    if(error1) return console.error(error1);

    fetchData(API + response1.results[0].id, function(error2, response2) {
        if(error2) return console.error(error2);

        fetchData(response2.origin.url, function(error3, response3) {
            if(error3) return console.error(error3);
            console.log(response1.info.count);
            console.log(response2.name);
            console.log(response3.dimension);

            // rutas de las peticiones en orden
            console.log(API);
            console.log(API + response1.results[0].id); 
            console.log(response2.origin.url);
        });
    });

});