let resultado = 0;

function sumar(primerNumero, segundoNumero) {
    resultado = primerNumero + segundoNumero;
}

function mostrar(mensaje) {
    console.log(mensaje);
}
let uno =parseInt(prompt("ingrese un numero"))
let dos = parseInt(prompt("ingrese otro"))

sumar(uno ,dos);            
mostrar(resultado); 