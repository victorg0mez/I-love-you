const mensajes = [
    "Espero que te guste este detalle, es con mucho cariño.",
    "Eres esa combinación perfecta de belleza y encanto que no se ve todos los días.❤",
    "Feliz cumpleaños a la chica que además de cumplir años, cumple todos mis pensamientos jeje.",
    "Presiona una vez más el botón"
];

let mensajeIndex = 0;

function mostrarMensaje() {
    const mensajeElemento = document.querySelector(".parrafo");

    // Aplica la clase fade-out para la transición
    mensajeElemento.classList.add("fade-out");

    // Espera a que termine la transición antes de cambiar el texto
    setTimeout(() => {
        mensajeIndex = (mensajeIndex + 1) % mensajes.length;
        mensajeElemento.textContent = mensajes[mensajeIndex];

        // Si es el último mensaje, redirigimos después de mostrarlo
        if (mensajeIndex === 0) {  // Cuando regrese al primer mensaje, significa que hemos mostrado todos
            setTimeout(() => {
                window.location.href = "main.html"; // Redirige a otra página (aquí la ruta que tú necesites)
            },2); // Se hace después de la duración de la transición
        }

        // Quita la clase fade-out para mostrar el nuevo mensaje con la transición
        mensajeElemento.classList.remove("fade-out");

    }, 800); // El mismo tiempo que la duración de la transición
}
