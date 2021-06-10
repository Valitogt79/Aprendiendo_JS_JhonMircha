(() => {
  const $axios = document.getElementById("axios"),
    $fragment = document.createDocumentFragment();

  axios
    .get("https://jsonplaceholder.typicode.com/Users")
    .then((respuesta) => {
      //console.log(respuesta);
      let json = respuesta.data;
      json.forEach((el) => {
        const $li = document.createElement("li");
        $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`; //estos datos son obtenidos del API
        $fragment.appendChild($li);
      });
      $axios.appendChild($fragment);
    })

    .catch((error) => {
      //console.log("Estamos en el catch", error);
      let message = error.response.statusText || "Ocurrió un Error";
      $axios.innerHTML = `Error: ${error.response.status}: ${message}`;
    })

    .finally(() => {
      console.log("Esto se ejecutará independientemente del resultado de Axios");
    });
})();
