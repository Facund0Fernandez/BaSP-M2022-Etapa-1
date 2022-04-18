console.log('Exercise 6: Functions.');

/* a) Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función
y guardar el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador. */

console.log('Excercise 6.a:');
var resultadoSuma;
function suma(numero1, numero2) {
    resultadoSuma = numero1 + numero2;
    return console.log(resultadoSuma);
}
suma(2,4);


/* b) A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número,
mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado. */

console.log('Excercise 6.b:');
function suma(numero1, numero2) {
    if (typeof numero1 !== 'number' || typeof numero2 !== 'number') {
        alert('Error: uno de los parámetros no es un número.');
        return console.log(NaN);
    } else {
        resultadoSuma = numero1 + numero2;
        return console.log(resultadoSuma);
    }
}
suma(3,2);
suma(3,'Hulk');

/* c) Crear una función validate integer que reciba un número como parámetro
y devuelva verdadero si es un número entero. */

console.log('Excercise 6.c:');
function validateInteger(numeroEntero) {
    var resultadoEntero = Number.isInteger(numeroEntero);
    console.log(resultadoEntero);
}
validateInteger(24.324);
validateInteger(14);

/* d) A la función suma del ejercicio 6b) agregarle una llamada que valide que los números sean enteros.
En caso que haya decimales mostrar un alerta con el error y retorna el número convertido a entero (redondeado). */

console.log('Excercise 6.d:');
function suma(numero1, numero2) {
    if (typeof numero1 !== 'number' || typeof numero2 !== 'number') {
        alert('Error: uno de los parámetros no es un número.');
        return console.log(NaN);
    } else {
        if (Number.isInteger(numero1) && Number.isInteger(numero2)) {
            resultadoSuma = numero1 + numero2;
            return console.log(resultadoSuma);
        } else {
            alert('Error: uno de los parámetros no es un número entero.');
            resultadoSuma = Math.round(numero1) + Math.round(numero2);
            console.log(resultadoSuma);
        }
    }
}
suma(2,4.3);
suma(2,4.5);
suma(2,'Hulk');
suma(4,4);

/* e) Convertir la validación del ejercicio 6d) en una función separada y llamarla
dentro de la función suma probando que todo siga funcionando igual. */

console.log('Excercise 6.e:');
function newValidateInteger(numeroEntero2) {
    if (Number.isInteger(numeroEntero2)) {
        return numeroEntero2;
    } else {
        alert('Error: el número ingresado no es entero.');
        return Math.round(numeroEntero2);
    }
}

function suma(numero1, numero2) {
    if (typeof numero1 !== 'number' || typeof numero2 !== 'number') {
        alert('Error: uno de los parámetros no es un número.');
        return console.log(NaN);
    } else {
        numero1 = newValidateInteger(numero1);
        numero2 = newValidateInteger(numero2);
        resultadoSuma = numero1 + numero2;
        return console.log(resultadoSuma);
    }
}
suma(2,4.3);
suma(2,4.5);
suma(2,'Hulk');
suma(4,4);






