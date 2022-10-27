//Calculadora

function Proceder(){
    let numero1 = parseInt(document.getElementById("Val1").value);

    let numero2 = parseInt(document.getElementById("Val2").value);

    let Tipo = document.getElementById("OperacionTipo").value; 

    let valorfinal = document.getElementById("Resultado");

    valorfinal.value = estructura(Tipo, numero1, numero2);
}

function estructura(operacion, Num1, Num2){
    let valor = 0;
    switch (operacion){
        case "+":
            valor = Num1 + Num2;
            break;

        case "-":
            valor = Num1 - Num2;
            break;

        case "*":
            valor = Num1 * Num2;
            break;

        case "/":
            valor = Num1 / Num2;
            break;
    
        default:
            break;
    }
    return valor
}
