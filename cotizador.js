//cotizador de seguros
//funciones
const Calculador = (dias, riesgo) => dias * riesgo;
//objetos

//variables
let rMuyBajo = 1;
let rBajo = 1.5;
let rMedio = 2;
let rAlto = 2.5;
let dias = 0;
let nombre;
let continente = parseInt(
  prompt(
    "Ingresa el continente al que quieres viajar utilizando el numero indice o 0: \n[1] America \n[2] Europa \n[3] Asia \n[4] Oceania \n[5] Africa \n[0] Salir."
  )
);
//menu
while (continente != 0 && continente < 6) {
  nombre = prompt("Cual es tu nombre?");
  dias = parseInt(prompt("Por cuantos dias precisas el seguro?"));
  switch (continente) {
    case 1:
      console.log(
        `${nombre} Has elegido America, el costo de su seguro es $${Calculador(
          dias,
          rBajo
        )}`
      );
      break;
    case 2:
      console.log(
        `${nombre} Has elegido Europa, el costo de su seguro es $${Calculador(
          dias,
          rMuyBajo
        )}`
      );
      break;
    case 3:
      console.log(
        `${nombre} Has elegido Asia, el costo de su seguro es $${Calculador(
          dias,
          rMedio
        )}`
      );
      break;
    case 4:
      console.log(
        `${nombre} Has elegido Oceania, el costo de su seguro es $${Calculador(
          dias,
          rMuyBajo
        )}`
      );
      break;
    case 5:
      console.log(
        `${nombre} Has elegido Africa, el costo de su seguro es $${Calculador(
          dias,
          rAlto
        )}`
      );
      break;
    default:
      alert("No es una opcion");
      break;
  }
  continente = parseInt(
    prompt(
      "Ingresa el continente al que quieres viajar utilizando el numero indice o 0: \n[1] America \n[2] Europa \n[3] Asia \n[4] Oceania \n[5] Africa \n[0] Salir."
    )
  );
}
