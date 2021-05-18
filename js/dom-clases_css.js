//* Seleccionando la primera Clase
const $card = document.querySelector(".card");
console.log($card);

//* Accediendo al valor del atributo class
console.log($card.className);
console.log($card.classList);

//* Verificando si existe una clase
console.log($card.classList.contains("rotate-45"));

//* Agregando una clase
$card.classList.add("rotate-45");
console.log($card.classList.contains("rotate-45"));

//* quitando una clase
$card.classList.remove("rotate-45");
console.log($card.classList.contains("rotate-45"));

//* Metodo toggle (agrega o quita la clase segun este o no.)
$card.classList.toggle("rotate-45");
console.log($card.classList.contains("rotate-45"));
$card.classList.toggle("rotate-45");
console.log($card.classList.contains("rotate-45"));
$card.classList.toggle("rotate-45");
console.log($card.classList.contains("rotate-45"));

//*Remplazar Clase de uno en uno
$card.classList.replace("rotate-45", "rotate-135");

//* agregar y quitar varias de clase de una sola vez
$card.classList.add("opacity-80", "sepia");
$card.classList.remove("opacity-80", "sepia");
$card.classList.toggle("opacity-80", "sepia");
