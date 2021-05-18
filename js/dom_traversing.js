//* Enfocado hacia los nodos html
const $cards = document.querySelector(".cards");
console.log($cards);
console.log($cards.children[2]); //hijos
console.log($cards.parentElement); //padres
console.log($cards.parentNode); //nodos
console.log($cards.firstChild); // primer hijo
console.log($cards.lastChild); // Ultimo Hijo
console.log($cards.firstElementChild); //Primer elemento hijo
console.log($cards.lastElementChild); // ultimo elemento hijo
console.log($cards.previousSibling); // anterior hermano
console.log($cards.previousElementSibling); // anterior elemento hermano
console.log($cards.nextSibling); // siguiente hermano
console.log($cards.nextElementSibling); // siguiente elemento hermano
console.log($cards.closest("div"));
console.log($cards.closest("body"));
console.log($cards.children[3].closest("section"));
