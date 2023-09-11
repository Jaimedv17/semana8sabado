


//....................................1.....................................

let numero1 = prompt("Por favor, ingrese un numero");

if (numero1 > 0){
  alert ("El numero es positivo");
}

else {
  alert ("El numero es negativo");
}

//...............................2........................................

// let numero2 = prompt ("Por favor, ingrese un numero");

// if (numero2 % 2 === 0){
//   alert (numero2 + "Si es divisible entre 2")
// }
// else {
//   alert (numero2 + "No es divisible entre 2")
// }

//............................3..............................


// let number01 = prompt ("Por favor, ingrese el primer numero")

// let number02 = prompt ("Por favor, ingrese el segundo numero")

// if (number01 < number02){
//   alert("El primer número (" + number01 + ") es menor que el segundo número (" + number02 + ").");
// }
// else if (number02 < number01){
//   alert("El segundo número (" + number02 + ") es menor que el primer número (" + number01 + ").");
// }

//.............................5..........................

// let añoActual = new Date().getFullYear();

// let añoNacimiento = parseInt(prompt("Por favor, ingrese el año en que nació:"));

// let edad = añoActual - añoNacimiento;

// alert("Tienes " + edad + " años de edad.");


//..............................6..........................

// let numero1 = parseFloat(prompt("Por favor, ingrese el primer número:"));

// let numero2 = parseFloat(prompt("Por favor, ingrese el segundo número:"));

// let numero3 = parseFloat(prompt("Por favor, ingrese el tercer número:"));

// let numeroMayor;

// if (numero1 >= numero2 && numero1 >= numero3) {
//   numeroMayor = numero1;
// } else if (numero2 >= numero1 && numero2 >= numero3) {
//   numeroMayor = numero2;
// } else if (numero3 >= numero1 && numero3 >= numero2) {
//   numeroMayor = numero3
// }
  
// // else {
// //   numeroMayor = numero3;
// // }

// alert("El número mayor es: " + numeroMayor);


//...........................7..................................

// let dia = prompt ("Por favor, ingrese un dia de la semana")

// if (dia === "lunes"){
//   alert ("Es lunes")
// }
// else if (dia === "viernes"){
//   alert ("Es viernes")
// }
// else if (dia === "sabado"){
//   alert ("Es sabado")
// }
// else {
//   alert ("Dicho dia no figura")
// }


//.............................9.............................

// let edadActual = parseInt(prompt("Por favor, ingrese su edad actual:"));

// let edadProximoAño = edadActual + 1;

// if (edadProximoAño >= 18) {
//   alert("Usted podrá votar en las próximas elecciones que se realizarán el próximo año.");
// } else {
//   alert("Lo siento, usted no cumplirá con la edad mínima de 18 años para votar en las próximas elecciones que se realizarán el próximo año.");
// }


//............................11.............................

// let antiguedad = parseInt (prompt("Ingrese la antiguedad del trabajador en años"));

// let bono;

// if (antiguedad >= 1 && antiguedad <= 5){
//   bono = antiguedad * 100;
// }
// else if (antiguedad > 5){
//   bono = 1000;
// }

// if (bono >= 1){
//   alert ("El trabajor recibira un bono de $" +bono)
// }


//...........................13......................................

// let toppingElegido  = (prompt ("Que tipo de helado desea"))
// let precioBase = 50;
// let precioTopping;

// if (toppingElegido === "oreo") {
//   precioTopping = 10;
// } else if (toppingElegido === "kitkat") {
//   precioTopping = 15;
// } else if (toppingElegido === "brownie") {
//   precioTopping = 20;
// } else {
//   alert ("No tenemos este topping, lo sentimos.");
//   precioTopping = 0; 
// }

// let costoTotal = precioBase + precioTopping;

// if (precioTopping > 0) {
//   alert ("El costo del helado con " + toppingElegido + " es de " + costoTotal + " MXN.");
// } else {
//   alert ("El costo del helado sin topping es de " + costoTotal + " MXN.");
// }

