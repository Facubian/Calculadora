
var datosIngresados = [];
var operadores = ["%","1/x","**","√","÷","×","-","+","+/-"];
var botonesEspeciales = ["(",")","M-","MS","CE","C","del",".","="];
var numero1 = [];
var numero2 = [];
var esOperador = false;
var operacion = "";

function clicked(valor){
    let datoIngresado = valor;
    datosIngresados.push(datoIngresado);

    for(const datoIngresado of datosIngresados) {

        console.log(datosIngresados + " -> array ingresados");

        if(datoIngresado === "="){
            datosIngresados.pop();
            const operancion = datosIngresados;
            console.log(operancion);
        }  

    }
}