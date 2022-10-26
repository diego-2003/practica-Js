document.write("Informacion de las tomas de medicamento del paciente (n)")
let horainicial = prompt("Hora en la que ingirio su primera medicina del dia (1-23 hrs):")
let tomafrecuencia = prompt("Con que frecuencia al dia toma su medicamento? (hasta 12 veces al dia):")
let n = 1;

for(let i=horainicial; i<=23; i++){
    document.write("<p><mark><strong>La toma " + n + " es a las " + i + " horas</strong></mark></p>");
    n = n + 1;
}
