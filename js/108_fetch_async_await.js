(() => {
  const $fetchAsync = document.getElementById("fetch-async"),
    $fragment = document.createDocumentFragment();

  async function getData() {
    try {
      let respuesta = await fetch("https://jsonplaceholder.typicode.com/Users"),
        json = await respuesta.json();

      //console.log(respuesta, json);
      // if (!respusta.ok) throw new Error("Ocurrió un Error al solicitar los Datos");
      if (!respuesta.ok)
        throw { status: respuesta.status, statusText: respuesta.statusText };

      json.forEach((el) => {
        const $li = document.createElement("li");
        $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`; //estos datos son obtenidos del API
        $fragment.appendChild($li);
      });
      $fetchAsync.appendChild($fragment);
    } catch (error) {
      //console.log("estoy en el catch", error);
      let message = error.statusText || "Ocurrió un Error";
      $fetchAsync.innerHTML = `Error: ${error.status}: ${message}`;
    } finally {
      //console.log("Esto se ejecuta independientemente del try... catch...");
    }
  }
  getData();
})();
