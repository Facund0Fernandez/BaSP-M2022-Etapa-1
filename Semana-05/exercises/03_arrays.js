console.log('Exercise 3: Arrays.');

/* a) Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto",
"Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log). */

console.log('Excercise 3.a:');
var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
'Julio','Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
console.log('El mes 5 es: ' + meses[4] + '. El mes 10 es: ' + meses[10]);

/* b) Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort). */

console.log('Excercise 3.b:');
var meses2 = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
'Julio','Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
console.log('Meses por orden alfabético: ' + meses2.sort());

/* c) Agregar un elemento al principio y al final del array (utilizar unshift y push). */

console.log('Excercise 3.c:');
var meses3 = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
'Julio','Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
meses3.unshift('Inicio');
meses3.push('Final');
console.log(meses3);

/* d) Quitar un elemento del principio y del final del array (utilizar shift y pop). */

console.log('Excercise 3.d:');
var meses4 = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
'Julio','Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
meses4.shift();
meses4.pop();
console.log(meses4);

/* e) Invertir el orden del array (utilizar reverse). */

console.log('Excercise 3.e:');
var meses5 = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
'Julio','Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
console.log('Meses ordenados inversamente: ' + meses5.reverse());

/* f) Unir todos los elementos del array en un único string donde cada
mes este separado por un guión - (utilizar join). */

console.log('Excercise 3.f:');
var meses6 = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
'Julio','Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
console.log(meses6.join(' - '));

/* g) Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice). */

console.log('Excercise 3.g:');
var meses7 = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
'Julio','Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
console.log(meses7.slice(4,11));
