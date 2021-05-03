
// Programa de cálculo de números primos

let numero = parseInt (prompt("Introduce el número escogido"));
let divisor, res;
let array=[];
do {
    divisor=numero;
    while ((res!=0)&&(divisor>2)){
        divisor--;
        res = numero % divisor;
    }
    (res!=0) ? array.push(numero) : res++;
    numero--;
}while (numero>1); 
console.log(array);