(() => {
  const $axiosAsync = document.getElementById("axios-async"),
    $fragment = document.createDocumentFragment();

  async function getData() {
    try {
      let respuesta = await axios.get("https://jsonplaceholder.typicode.com/Users"),
        json = await respuesta.data;

      //console.log(respuesta, json);

      json.forEach((el) => {
        const $li = document.createElement("li");
        $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`; //estos datos son obtenidos del API
        $fragment.appendChild($li);
      });
      $axiosAsync.appendChild($fragment);
    } catch (error) {
      // console.log(error.response);
      let message = error.response.statusText || "Ocurrió un error";
      $axiosAsync.innerHTML = `Error: ${error.response.status}: ${message}`;
    } finally {
      console.log("Esto se ejecutará independientemente del try... catch...");
    }
  }
  getData();
})();
