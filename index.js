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

// Comprobaciones ES6 y ES7 para babel webpack
// Arrow functions
// Original
/*((win, doc) => {
    console.log(doc);
    console.log(win);
})(window, document);*/
((win, doc) => {
    console.log("ARROW FUNCTION");
    console.log(doc);
    console.log(win);
})(window, document);

// Original
/*let a = [2,4,6,8,10];
console.log(a);
let r = a.map(n => n*n);
console.log(r);*/
console.log("ARROW FUNCTION Y MAP");
let a = [2,4,6,8,10];
console.log(a);
let r = a.map(n => n*n);
console.log(r);

// Clases
// Original
/*class Humano {
    constructor(_sexo, _edad) {
        this.sexo = _sexo;
        this.edad = _edad;
    }
    getEdad() {
        return this.edad;
    }
    getSexo() {
        return this.sexo;
    }
}
let Maria = new Humano("Hembra", 20);
let David = new Humano("Varon", 30);*/
console.log("CLASES JAVASCRIPT");
class Humano {
    constructor(_sexo, _edad) {
        this.sexo = _sexo;
        this.edad = _edad;
    }
    getEdad() {
        return this.edad;
    }
    getSexo() {
        return this.sexo;
    }
}
let Maria = new Humano("Hembra", 20);
let David = new Humano("Varon", 30);
console.log(Maria.getEdad(), Maria.getSexo());
console.log(David.getEdad(), David.getSexo());