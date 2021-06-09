/** Función anonima autoejecutable */
/* Instancia */
(() => {
  const $fetch = document.getElementById("fetch"),
    $fragment = document.createDocumentFragment();

  fetch("https://jsonplaceholder.typicode.com/Users")
    .then((respuesta) => {
      //console.log(respuesta);
      return respuesta.ok ? respuesta.json() : Promise.reject(respuesta);
    })

    .then((json) => {
      //console.log(json);
      json.forEach((el) => {
        const $li = document.createElement("li");
        $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`; //estos datos son obtenidos del API
        $fragment.appendChild($li);
      });
      $fetch.appendChild($fragment);
    })

    .catch((error) => {
      //console.log(error);
      let message = error.statusText || "Ocurrió un Error";
      $fetch.innerHTML = `Error: ${error.status}: ${message}`;
    })

    /* Esto es opcional */
    .finally(() => {
      console.log(
        "Esto se ejecutará independientemente del resultado de la Promesa Fetch"
      );
    });
})();
