import "./css/style.css"
//alert("Hola mundo");
var MATEMATICAS = MATEMATICAS || {};
MATEMATICAS = {
    suma: (a, b) => a + b,
    resta: (a, b) => a - b,
    multiplicacion: (a, b) => a * b,
    division: (a, b) => a / b
};
console.log(MATEMATICAS.suma(1,2));
console.log(MATEMATICAS.resta(1,2));
console.log(MATEMATICAS.multiplicacion(1,2));
console.log(MATEMATICAS.division(1,2));