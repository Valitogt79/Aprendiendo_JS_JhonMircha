//* Creando Elementos y Fragmentos

const $figure = document.createElement("figure"),
	$img = document.createElement("img"),
	$figcaption = document.createElement("figcaption"),
	$figcaptionText = document.createTextNode("Animals"),
	$cards = document.querySelector(".cards"),
	$figure2 = document.createElement("figure");

//* Agregando una nueva tarjeta al documento HTML.

$img.setAttribute("src", "https://placeimg.com/200/200/animals");
$img.setAttribute("alt", "Animals");
$figure.classList.add("card");
$figcaption.appendChild($figcaptionText);
$figure.appendChild($img);
$figure.appendChild($figcaption);
$cards.appendChild($figure);

//* Agregando contenido Dinamicamente.

$figure2.innerHTML = `
<img src="https://placeimg.com/200/200/people" alt="people">
<figcaption>People</figcaption>
`;

$figure2.classList.add("card");
$cards.appendChild($figure2);

//* agregando varias etiquetas automaticamente

const estaciones = ["Primavera", "Verano", "Otoño", "Invierno"],
	$ul = document.createElement("ul");
document.write("<h3>Estaciones del Año</h3>"); //! No es buena practica utilizar document.write
document.body.appendChild($ul);
estaciones.forEach((el) => {
	const $li = document.createElement("li");
	$li.textContent = el;
	$ul.appendChild($li);
});

const continentes = ["África", "América", "Asia", "Europa", "Oceanía"],
	$ul2 = document.createElement("ul");
document.write("<h3>Continentes del Mundo</h3>");
document.body.appendChild($ul2);
$ul2.innerHTML = ""; //! Iniciar explicitamente la cadena vacia.
continentes.forEach((el) => ($ul2.innerHTML += `<li>${el}</li>`));

//* Fragmentos Dinamicos

const meses = [
		"Enero",
		"Febrero",
		"Marzo",
		"Abril",
		"Mayo",
		"Junio",
		"Julio",
		"Agosto",
		"Septiembre",
		"Octubre",
		"Noviembre",
		"Diciembre",
	],
	$ul3 = document.createElement("ul"),
	$fragment = document.createDocumentFragment();

meses.forEach((el) => {
	const $li = document.createElement("li");
	$li.textContent = el;
	$fragment.appendChild($li);
});

document.write("<h3>Meses del Año</h3>");
$ul3.appendChild($fragment);
document.body.appendChild($ul3);
