console.log('Exercise 1: Variables and operators.');

/* a) Crear dos variables numéricas y utilizar el operador suma para guardar el valor
de la suma de ambos números en una 3er variable. */

console.log('Excercise 1.a:');
var primerSumando = 10;
var segundoSumando = 20;
var total = primerSumando + segundoSumando;
console.log(total);


/* b) Crear dos variables de tipo String y concatenarlas guardando  el resultado en una 3er variable. */

console.log('Excercise 1.b:');
var primerString = 'Nombre';
var segundoString = 'Apellido';
var concatenacion = primerString + ' ' + segundoString;
console.log(concatenacion);

/* c) Crear dos variables de tipo String y sumar el largo de cada variable (cantidad de letras del string)
guardando el resultado de la suma en una 3er variable (utilizar length). */

console.log('Excercise 1.c:');
var tercerString = 'Mariposa';
var cuartoString = 'Cucaracha';
var largoSuma = tercerString.length + cuartoString.length;
console.log(largoSuma);