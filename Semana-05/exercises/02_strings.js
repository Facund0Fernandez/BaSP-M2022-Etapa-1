console.log('Exercise 2: Strings.');

/* a) Crear una variable de tipo string con al menos 10 caracteres y
convertir todo el texto en mayúscula (utilizar toUpperCase). */

console.log('Excercise 2.a:');
var diezCaracteres = 'adolescentes';
console.log(diezCaracteres.toUpperCase());

/* b) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string
con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring). */

console.log('Excercise 2.b:');
var diezCaracteres2 = 'Alienígena';
var nuevoDiezCaracteres2 = diezCaracteres2.substring(0,5);
console.log(nuevoDiezCaracteres2);

/* c) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con
los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring). */

console.log('Excercise 2.c:');
var diezCaracteres3 = 'El fin de semana habrá mucho sol';
var nuevoDiezCaracteres3 = diezCaracteres3.substring(29);
console.log(nuevoDiezCaracteres3);

/* d) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en
mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable 
(utilizar substring, toUpperCase, toLowerCase y el operador +). */

console.log('Excercise 2.d:');
var diezCaracteres4 = 'eL FIN DE SEMANA ESTARÁ NUBLADO.';
var nuevoDiezCaracteres4 = diezCaracteres4.substring(0,1).toUpperCase() + diezCaracteres4.substring(1).toLowerCase();
console.log(nuevoDiezCaracteres4);

/* e) Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco.
Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf). */

console.log('Excercise 2.e:');
var diezCaracteres5 = 'El alumno no aprobó.';
var nuevoDiezCaracteres5 = diezCaracteres5.indexOf(' ', 0);
console.log(nuevoDiezCaracteres5);

/* f) Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio).
Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas
palabras en mayúscula y las demás letras en minúscula 
(utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +). */

console.log('Excercise 2.f:');
var diezCaracteres6 = 'eXTRATERRESTRES iNVASORES';
var nuevoDiezCaracteres6 = diezCaracteres6.substring(0,1).toUpperCase() + diezCaracteres6.substring(1,16).toLowerCase()
+ diezCaracteres6.substring(16,17).toUpperCase() + diezCaracteres6.substring(17).toLowerCase();
console.log(nuevoDiezCaracteres6);


