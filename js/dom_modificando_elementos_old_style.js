// viejos metodos.
const $cards = document.querySelector(".cards"),
	$newCard = document.createElement("figure"),
	$cloneCards = $cards.cloneNode(true); // para la clonacion de los elementos.

$newCard.innerHTML = `
  <img src="https://placeimg.com/200/200/any" alt="Any">
  <figcaption>Any</figcaption>
`;

$newCard.classList.add("card");

//! Replazando un elemento (una de las tarjetas)
//$cards.replaceChild($newCard, $cards.children[2]);

//!insertar el elemenento al inicio.
//$cards.insertBefore($newCard, $cards.firstElementChild);

//!eliminar el ultimo elemento.
//$cards.removeChild($cards.lastElementChild);

//! Clonar un elemento.
document.body.appendChild($cloneCards);
