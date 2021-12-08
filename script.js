const listaIngreso = [];
const listaGasto = [];

// Suma
function suma(sumarListaIngreso,sumarListaGasto) {
    const ingreso = sumarListaIngreso.reduce(function (prev = 0, next) {
        return prev + next;    
    });
    const gasto = sumarListaGasto.reduce(function (prev = 0, next) {
        return prev + next;
   });
    porcentaje(ingreso,gasto);
}

//  Porcentaje
function porcentaje(ingreso, gasto) {
    const porcentajeLibre = Math.round((1 - (gasto / ingreso)) * 100);
    const porcentajeDelGasto = Math.round((gasto / ingreso) * 100);
    console.log("El porcentaje del sobrante es: " + porcentajeLibre + "%");
    console.log("El porcentaje de tu gasto es: " + porcentajeDelGasto + "%");

}

// Push

function push() {
    const inputIngresoOne = document.getElementById("1");
    const valueIngresoOne = Number(inputIngresoOne.value);
    const escribirIngresoOne = document.getElementById("escribirIngreso1");
    escribirIngresoOne.innerText = "Salario: $ " + valueIngresoOne;

    const inputIngresoTwo = document.getElementById("2");
    const valueIngresoTwo = Number(inputIngresoTwo.value);
    const escribirIngresoTwo = document.getElementById("escribirIngreso2");
    escribirIngresoTwo.innerText = "Ventas: $ " + valueIngresoTwo;

    const inputIngresoThree = document.getElementById("3");
    const valueIngresoThree = Number(inputIngresoThree.value);
    const escribirIngresoThree = document.getElementById("escribirIngreso3");
    escribirIngresoThree.innerText = "Otros 1: $ " + valueIngresoThree;

    const inputIngresoFour = document.getElementById("4");
    const valueIngresoFour = Number(inputIngresoFour.value);
    const escribirIngresoFour = document.getElementById("escribirIngreso4");
    escribirIngresoFour.innerText = "Otros 2: $ " + valueIngresoFour;

    const inputIngresoFive = document.getElementById("5");
    const valueIngresoFive = Number(inputIngresoFive.value);
    const escribirIngresoFive = document.getElementById("escribirIngreso5");
    escribirIngresoFive.innerText = "Otros 3: $ " + valueIngresoFive;

    const inputIngresoSix = document.getElementById("6");
    const valueIngresoSix = Number(inputIngresoSix.value);
    const escribirIngresoSix = document.getElementById("escribirIngreso6");
    escribirIngresoSix.innerText = "Otros 4: $ " + valueIngresoSix;

    const inputIngresoSeven = document.getElementById("7");
    const valueIngresoSeven = Number(inputIngresoSeven.value);
    const escribirIngresoSeven = document.getElementById("escribirIngreso7");
    escribirIngresoSeven.innerText = "Otros 5: $ " + valueIngresoSeven;

    listaIngreso.push(
        valueIngresoOne,
        valueIngresoTwo,
        valueIngresoThree,
        valueIngresoFour,
        valueIngresoFive,
        valueIngresoSix,
        valueIngresoSeven);
    
    const inputGastoA = document.getElementById("a");
    const valueGastoA = Number(inputGastoA.value);
    const escribirGastoA = document.getElementById("escribirGastoA");
    escribirGastoA.innerText = "Alimentación: $ " + valueGastoA;
    
    const inputGastoB = document.getElementById("b");
    const valueGastoB = Number(inputGastoB.value);
    const escribirGastoB = document.getElementById("escribirGastoB");
    escribirGastoB.innerText = "Vivienda: $ " + valueGastoB;

    const inputGastoC = document.getElementById("c");
    const valueGastoC = Number(inputGastoC.value);
    const escribirGastoC = document.getElementById("escribirGastoC");
    escribirGastoC.innerText = "Transporte: $ " + valueGastoC;
    
    const inputGastoD = document.getElementById("d");
    const valueGastoD = Number(inputGastoD.value);
    const escribirGastoD = document.getElementById("escribirGastoD");
    escribirGastoD.innerText = "Salud: $ " + valueGastoD;
    
    const inputGastoE = document.getElementById("e");
    const valueGastoE = Number(inputGastoE.value);
    const escribirGastoE = document.getElementById("escribirGastoE");
    escribirGastoE.innerText = "Entretenimiento: $ " + valueGastoE;
    
    const inputGastoF = document.getElementById("f");
    const valueGastoF = Number(inputGastoF.value);
    const escribirGastoF = document.getElementById("escribirGastoF");
    escribirGastoF.innerText = "Comunicaciones: $ " + valueGastoF;
    
    const inputGastoG = document.getElementById("g");
    const valueGastoG = Number(inputGastoG.value);
    const escribirGastoG = document.getElementById("escribirGastoG");
    escribirGastoG.innerText = "Otros: $ " + valueGastoG;
    
    listaGasto.push(
        valueGastoA,
        valueGastoB,
        valueGastoC,
        valueGastoD,
        valueGastoE,
        valueGastoF,
        valueGastoG);
    
    
    console.log(listaIngreso, listaGasto);
    suma(listaIngreso, listaGasto);
    
}








