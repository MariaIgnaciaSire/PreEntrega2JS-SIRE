// Array de objetos para representar cada tipo de cabaña
let cabañas = [
    { tipo: 'pequeña', precioPorDia: 40000 },
    { tipo: 'mediana', precioPorDia: 60000 },
    { tipo: 'grande', precioPorDia: 80000 }
];

// Función para obtener el objeto de cabaña según el tipo seleccionado
function obtenerCabañaPorTipo(tipo) {
    return cabañas.find(cabaña => cabaña.tipo === tipo);
}

// Función para calcular el precio total de la reserva
function calcularPrecioTotal(cabaña, duracionEstadia) {
    let precioTotal = cabaña.precioPorDia * duracionEstadia;
    return precioTotal;
}

// Al hacer clic en el botón
document.getElementById('iniciarCotizacion').addEventListener('click', function() {
    let tipoCabaña = prompt("Ingrese el tipo de cabaña (pequeña, mediana, grande):");
    let duracionEstadia = parseInt(prompt("Ingrese la duración de la estadía en días:"));
    let tipoCambio = prompt("Ingrese el tipo de cambio (pesos, dolares, euros):");

    if (tipoCabaña && duracionEstadia && tipoCambio) {
        let cabañaSeleccionada = obtenerCabañaPorTipo(tipoCabaña);

        if (cabañaSeleccionada) {
            let precioTotal = calcularPrecioTotal(cabañaSeleccionada, duracionEstadia);
            mostrarReserva(precioTotal, tipoCambio);
        } else {
            alert("Por favor ingrese un tipo de cabaña válido.");
        }
    } else {
        alert("Por favor ingrese información válida para continuar.");
    }
});

// Función para mostrar el precio total de la reserva
function mostrarReserva(precioTotal, tipoCambio) {
    let mensaje = 'El precio total de la reserva es: ' + precioTotal.toLocaleString('es-CL') + ' ' + tipoCambio.toUpperCase();
    alert(mensaje);
}

















