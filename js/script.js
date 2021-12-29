class Material{
    constructor(tipo, cantidad, estado) {
        this.tipo = tipo;
        this.cantidad = cantidad;
        this.estado = estado;
    }
}
alert("crearemos una lista del material adquirido ")
alert("para ello agregaremos el tipo de material, cantidad y el estado del mismo")
//saludo es hasta aca

const materialAdquirido = []; // DECLARO EL ARRAY PARA GUARDAR DATOS

//Funcion para solicitar el agregado de datos
function continuar() {
    const seguir = confirm("continuar agregando material?")
    return seguir;
}

// FUNCION PARA EL INGRESO DE LOS DATOS
function agregarMaterial() {
    const tipo = prompt("ingrese el tipo de material, \n EJ: mosqueton  ")
    const cantidad = prompt("ingrese la cantidad que posee del mismo, \n EJ: 5")
    const estado = prompt("ingrese el estado del mismo, \n EJ: bueno/malo")
    const ingresoUsuario = new Material(tipo, cantidad, estado);
    materialAdquirido.push(ingresoUsuario)
    console.log(materialAdquirido)
}
// INICIO

function init() {
    do {
        agregarMaterial()
        
    } while (continuar() == true);
    
}
init()


