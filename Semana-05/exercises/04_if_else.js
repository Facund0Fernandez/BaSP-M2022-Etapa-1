console.log('Exercise 4: If else.');

/* a) Crear un número aleatorio entre 0 y 1 utilizando la función Math.random(), si el valor es
mayor o igual que 0,5 mostrar una alerta con el mensaje “Greater than 0,5” y
sino un alerta con el mensaje “Lower than 0,5”. */

console.log('Excercise 4.a:');
var numeroAleatorio = Math.random();
if (numeroAleatorio >= 0,5) {
alert('Greater than 0,5');
} else {
alert('Lower than 0,5');
}

/* b) Crear una variable “Age” que contenga un número entero entre 0 y 100
y muestre los siguientes mensajes de alerta:
i. “Bebe” si la edad es menor a 2 años;
ii. “Niño” si la edad es entre 2 y 12 años;
iii. “Adolescente” entre 13 y 19 años;
iv. “Joven” entre 20 y 30 años;
v. “Adulto” entre 31 y 60 años;
vi. “Adulto mayor” entre 61 y 75 años;
vii. “Anciano” si es mayor a 75 años. */

console.log('Excercise 4.b:');
var numeroAleatorio2 = Math.round(Math.random() * 100);
console.log(numeroAleatorio2);
if (numeroAleatorio2 < 2) {
    alert('Bebé');
} else if (numeroAleatorio2 >= 2 && numeroAleatorio2 <= 12 ) {
    alert('Niño');
} else if (numeroAleatorio2 > 12 && numeroAleatorio2 <= 19) {
    alert('Adolescente');
} else if (numeroAleatorio2 > 19 && numeroAleatorio2 <= 30) {
    alert('Joven');
} else if (numeroAleatorio2 > 30 && numeroAleatorio2 <= 60) {
    alert('Adulto');
} else if (numeroAleatorio2 > 60 && numeroAleatorio2 <= 75) {
    alert('Adulto mayor');
} else {
    alert('Anciano');
}