
const btnAgregar = document.getElementById("btnAgregar");
const jugadoresN = document.getElementById("jugadores");
const nombreBase = "Jugador";

// Función para actualizar el estado de los botones
function actualizarEstadoBotones() {
  const cantidadJugadores = jugadoresN.childElementCount;
  btnAgregar.disabled = cantidadJugadores >= 4;
  for (let i = 0; i < cantidadJugadores; i++) {
    const jugador = jugadoresN.children[i];
    const btnEliminar = jugador.querySelector('.eliminar');
    btnEliminar.disabled = cantidadJugadores <= 1;
  }
}


// Función para agregar un jugador
function agregarJugador() {
  // Verificar si se ha alcanzado el límite máximo de jugadores
  if (jugadoresN.childElementCount >= 4) {
    return;
  }

  // Crear el nuevo elemento jugador
  const nuevoJugador = document.createElement('div');
  nuevoJugador.classList.add('jugador');

  // Crear el elemento input con el nombre del jugador
  const inputNombre = document.createElement('input');
  inputNombre.type = 'text';
  inputNombre.classList.add('nombre');

  // Obtener los nombres existentes de los jugadores
  const nombresExistentes = Array.from(jugadoresN.children).map(jugador => {
    return jugador.querySelector('.nombre').value;
  });

  // Encontrar el siguiente nombre disponible
  let nuevoNombre = "";
  for (let i = 1; i <= 4; i++) {
    const nombre = nombreBase + " " + i;
    if (!nombresExistentes.includes(nombre)) {
      nuevoNombre = nombre;
      break;
    }
  }

  inputNombre.value = nuevoNombre;
  inputNombre.readOnly = false; // Permitir edición del nombre

  // Crear el botón de eliminar
  const btnEliminar = document.createElement('button');
  btnEliminar.classList.add('eliminar');
  btnEliminar.textContent = 'Eliminar';

  // Agregar el evento de clic al botón de eliminar
  btnEliminar.addEventListener('click', function() {
    eliminarJugador(nuevoJugador);
  });

  // Agregar los elementos al nuevo jugador
  nuevoJugador.appendChild(inputNombre);
  nuevoJugador.appendChild(btnEliminar);

  // Agregar el nuevo jugador al contenedor
  jugadoresN.appendChild(nuevoJugador);

  // Actualizar el estado de los botones
  actualizarEstadoBotones();
}

// Función para eliminar un jugador
function eliminarJugador(jugador) {
  // Verificar si solo queda un jugador para deshabilitar el botón de eliminar
  if (jugadoresN.childElementCount === 1) {
    return;
  }

  // Eliminar el jugador del contenedor
  jugador.parentNode.removeChild(jugador);

  // Actualizar el estado de los botones
  actualizarEstadoBotones();
}

