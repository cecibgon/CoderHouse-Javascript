// mis variables son
let cantidadDePersonas = 60;
let impuestos = 10000;
let comida = 7000;
// mis constantes fijas
const costo_por_persona = 15000;
// uso el array para servicios disponibles y su precio
const servicios_disponibles = [
  { nombre: "animacion", precio: 50000 },
  { nombre: "bebidas", precio: 15000 },
  { nombre: "maquillaje", precio: 30000 },
  { nombre: "fotos", precio: 10000 },
];

// indico los servicios seleccionados y son todos:
let serviciosSeleccionados = ["bebidas", "fotos", "animacion", "maquillaje"];

function calcularCostoTotal(cantidadDePersonas, costo_por_persona, impuestos, servicios_disponibles) {
  let costoBase = cantidadDePersonas * costo_por_persona + impuestos;
  let costoComida = comida * cantidadDePersonas;
  let costoServicios = 0;


//Entiendo que un  bucle for se compone de tres partes principales, separadas por punto y coma ;:
//la Inicialización: let i = 0, Aquí es donde se declara y 
// se le asigna un valor inicial a la variable que se usará como contador
// la Condición: i < serviciosSeleccionados.length, Aquí es donde se evalúa si la condición es verdadera o falsa
// o	 la Actualización: i++, Aquí es donde se actualiza el valor de la variable contador en cada iteración

// Calcular costo de servicios adicionales
  for (let i = 0; i < serviciosSeleccionados.length; i++) {
    let servicio = servicios_disponibles.find(s => s.nombre === serviciosSeleccionados[i]);
    if (servicio) {
      costoServicios += servicio.precio;
    }
  }

  return costoBase + costoComida + costoServicios;
}

let total = calcularCostoTotal(cantidadDePersonas, costo_por_persona, impuestos, servicios_disponibles);
console.log("El costo total es: " + total);

/*
if (acompanado === "si") {
  alert("Puedes entrar.");
} else {
  alert("No puedes entrar.");
}
*/

/*
let total = 60;
const precios = [250, 25000, 50000, 70000];
for (let i = 0; i < precios.length; i++) {
  total = total + precios[i];
}
console.log("El total es: " + total);
*/
