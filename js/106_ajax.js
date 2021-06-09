/** Función anonima autoejecutable */
/* Instancia */
(() => {
  const xhr = new XMLHttpRequest(),
    $xhr = document.getElementById("xhr"),
    $fragment = document.createDocumentFragment();

  /* Asignar evento, y logica de la programacion */
  xhr.addEventListener("readystatechange", (e) => {
    if (xhr.readyState !== 4) return; //validando solo se ejecute cuando el readyState sea 4
    //console.log(xhr);

    if (xhr.status >= 200 && xhr.status < 300) {
      console.log("Éxito");
      //console.log(xhr.responseText);
      //$xhr.innerHTML = xhr.responseText;
      let json = JSON.parse(xhr.responseText);
      // console.log(json);

      json.forEach((el) => {
        const $li = document.createElement("li");
        $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`; //estos datos son obtenidos del API
        $fragment.appendChild($li);
      });
      $xhr.appendChild($fragment);
    } else {
      console.log("error");
      let message = xhr.statusText || "Ocurrió un Error";
      $xhr.innerHTML = `Error: ${xhr.status}: ${message}`;
    }

    console.log("Este mensaje se cargará de cualquier manera.");
  });

  /* Instruccion que va abrir la peticion */
  xhr.open("GET", "https://jsonplaceholder.typicode.com/users");

  //archivo local
  xhr.open("GET", "js_exercices/assets/user.json");

  /* Enviar la Peticion */
  xhr.send();
})();
