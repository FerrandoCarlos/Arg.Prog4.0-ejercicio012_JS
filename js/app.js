/**
 * Dado un JSON en la constante libro, mostrar el título en un h1, el autor en un h2 y el resto de datos en párrafos dentro de un div contenedor.
 */
const libro = {
    "titulo" : "Apps HTML para móviles",
    "autor" : "Damián De Luca",
    "fecha" : 2014,
    "paginas" : 272 
}

document.querySelector("#contenedor").insertAdjacentHTML("beforeend",
   `<h1>${libro.titulo}</h1>
    <h2>${libro.autor}</h2>
    <p>${"Fecha: "+libro.fecha}</p>
    <p>${"Páginas: "+libro.paginas}</p>
   `   
);

