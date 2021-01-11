function sum(a,b) {
    return a + b;
}

function respuesta(a,b,callback) {
    return callback(a, b);
}

console.log(respuesta(1,2,sum));

function nueva(callback) {
    console.log(new Date);
    setTimeout(function(){
        let date = new Date;
        callback(date);
    },3000);
}

function print(date){
    console.log(date);
}

nueva(print);
