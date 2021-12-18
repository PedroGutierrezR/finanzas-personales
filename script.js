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

    const escribirSobrante = document.getElementById("escribir-sobrante");
    const escribirGasto = document.getElementById("escribir-gasto");

    
    if (ingreso === 0 && gasto > 0) {
        escribirSobrante.innerText = "Para una mejor experiencia rellena la tarjeta del ingreso";
        escribirGasto.innerText = "";

    } else if (ingreso > 0 && gasto === 0) {
        escribirSobrante.innerText = "Para una mejor experiencia rellena la tarjeta del gasto";
        escribirGasto.innerText = "";

    } else if (ingreso === 0 && gasto === 0) {
        escribirSobrante.innerText = "Para una mejor experiencia rellena al menos una casilla de ambas tarjetas";
        escribirGasto.innerText = "";

    } else {
        // Calculo del porcentaje
        const porcentajeLibre = Math.round((1 - (gasto / ingreso)) * 100);
        const porcentajeDelGasto = Math.round((gasto / ingreso) * 100);

        if (porcentajeLibre === 0) {
            escribirSobrante.innerText = "Has quedado sin ingresos.";
            escribirGasto.innerText = "Porcentaje del gasto: " + porcentajeDelGasto + "%";
        } else if (porcentajeLibre < 0) {
            escribirSobrante.innerText = "¡Cuidado! El gasto supera al ingreso."; 
            escribirGasto.innerText = "Porcentaje del gasto: " + porcentajeDelGasto + "%";
        } else {
            escribirSobrante.innerText = "Porcentaje sobrante: " + porcentajeLibre + "%";
            escribirGasto.innerText = "Porcentaje del gasto: " + porcentajeDelGasto + "%";
    
        }
    }
}

// Push

function push() {
    const inputIngresoOne = document.getElementById("1");
    const valueIngresoOne = Number(inputIngresoOne.value);

    const inputIngresoTwo = document.getElementById("2");
    const valueIngresoTwo = Number(inputIngresoTwo.value);

    const inputIngresoThree = document.getElementById("3");
    const valueIngresoThree = Number(inputIngresoThree.value);

    const inputIngresoFour = document.getElementById("4");
    const valueIngresoFour = Number(inputIngresoFour.value);

    const inputIngresoFive = document.getElementById("5");
    const valueIngresoFive = Number(inputIngresoFive.value);

    const inputIngresoSix = document.getElementById("6");
    const valueIngresoSix = Number(inputIngresoSix.value);

    const inputIngresoSeven = document.getElementById("7");
    const valueIngresoSeven = Number(inputIngresoSeven.value);

    console.log(listaIngreso.length);

    listaIngreso.length = 0;
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
    
    const inputGastoB = document.getElementById("b");
    const valueGastoB = Number(inputGastoB.value);

    const inputGastoC = document.getElementById("c");
    const valueGastoC = Number(inputGastoC.value);
    
    const inputGastoD = document.getElementById("d");
    const valueGastoD = Number(inputGastoD.value);
    
    const inputGastoE = document.getElementById("e");
    const valueGastoE = Number(inputGastoE.value);
    
    const inputGastoF = document.getElementById("f");
    const valueGastoF = Number(inputGastoF.value);
    
    const inputGastoG = document.getElementById("g");
    const valueGastoG = Number(inputGastoG.value);
    console.log(listaGasto.length);
   
    listaGasto.length = 0;
    listaGasto.push(
        valueGastoA,
        valueGastoB,
        valueGastoC,
        valueGastoD,
        valueGastoE,
        valueGastoF,
        valueGastoG);
    
    
    suma(listaIngreso, listaGasto);
    
}








