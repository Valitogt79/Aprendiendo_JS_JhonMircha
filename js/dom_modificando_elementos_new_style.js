// Nuevos metodos para insertar elementos.
/*
insertAdjacent...
insertAdjacentElement(position, element)
insertAdjacentHTML(position, html)
insertAdjacentText(position, text)

Posiciones:
beforebegin (hermano anterior)
afterbegin (Primer Hijo)
beforebegin (ultimo hijo)
beforeend (hermano siguiente)
*/

const $cards = document.querySelector(".cards"),
	$newCard = document.createElement("figure");

/* $newCard.innerHTML = `
  <img src="https://placeimg.com/200/200/any" alt="Any">
  <figcaption>Any</figcaption>
  `; */

let $contenCard = `
  <img src="https://placeimg.com/200/200/any" alt="Any">
  <figcaption></figcaption>
`;

$newCard.classList.add("card");

//Insertando las tarjetas
//$cards.insertAdjacentElement("beforebegin", $newCard);
//$cards.insertAdjacentElement("afterbegin", $newCard);
//$cards.insertAdjacentElement("beforeend", $newCard);
//$cards.insertAdjacentElement("afterend", $newCard);

$newCard.insertAdjacentHTML("beforeend", $contenCard);
$newCard.querySelector("figcaption").insertAdjacentText("afterbegin", "Any");
$cards.insertAdjacentElement("afterbegin", $newCard);

//$cards.prepend($newCard);
//$cards.before($newCard);
//$cards.append($newCard);
//$cards.after($newCard);
