/ ** Metodos que ya no suelen utilizarse */
/ * Nombre de Etiqueta */;
console.log(document.getElementsByTagName("li"));

/ * Nombre de Clase */;
console.log(document.getElementsByClassName("card"));

/ * Nombre de name */;
console.log(document.getElementsByName("nombre"));

/ * Nombre del ID */;
console.log(document.getElementById("menu"));

/ ** Nuevos Metodos */;
// * primer selector valido queryselector
//obtener todos los selectores validos querySelectorAll

console.log(document.querySelector("menu"));
console.log(document.querySelector("a"));
console.log(document.querySelectorAll("a").length);
document.querySelectorAll("a").forEach((el) => console.log(el));

console.log(document.querySelector(".card"));
console.log(document.querySelectorAll(".card"));
console.log(document.querySelectorAll(".card")[2]);
console.log(document.querySelector("#menu li"));
console.log(document.querySelectorAll("#menu li"));
