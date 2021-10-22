let dni = prompt('Ingrese tu DNI');

if ((dni.length === 8 || dni.length === 7) && dni != 0 && !isNaN(Number(dni))) {
    alert('Tu DNI fue procesado correctamente');
} else {
    alert('Ingresa un DNI valido');
}
