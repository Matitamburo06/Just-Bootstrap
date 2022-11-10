// let num1 = prompt("Ingrese un numero");

// if (num1 < 10) {
//   console.log("El numero ingresado es menor a 10");
// } else if (num1 == 10) {
//   console.log("El numero es igual a 10");
// } else {
//   console.log("El numero ingresado es mayor a 10");
// }

// // Arrays de Strings / numerales y booleans

// let personas = ["Matias, Juan, Marcelo"];

// console.log(personas);

//console.log(colorMascotas.length)

let talles = prompt("ingrese un alguno de estos talles: S , M, L, XL, XXL");
switch (talles) {
  case "S":
  case "s":
  case "m":
  case "M":
  case "L":
  case "l":
  case "xl":
  case "XL":
    talle = "Tenemos Stock";
    alert(talle);
    break;
  case "XXL":
  case "xxl":
    talle = "No tenemos Stock";
    alert(talle);
    break;
  default:
    error = "No ingreso un talle. Por favor, siga las indicaciones";
    alert(error);
}
