(() => {
  const $axiosAsync = document.getElementById("axios-async"),
    $fragment = document.createDocumentFragment();

  async function getData() {
    try {
      let respuesta = await axios.get("https://jsonplaceholder.typicode.com/Users"),
        json = await respuesta.data;
      console.log(respuesta, json);
    } catch (error) {
    } finally {
      console.log("Esto se ejecutará independientemente del try... catch...");
    }
  }
})();
