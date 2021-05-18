// * seleccionando la clase .link-dom

const $linkDOM = document.querySelector(".link-dom");

console.log($linkDOM.style);
console.log($linkDOM.getAttribute("style"));
console.log($linkDOM.style.backgroundColor);
console.log($linkDOM.style.color);
console.log(window.getComputedStyle($linkDOM));
console.log(window.getComputedStyle($linkDOM).getPropertyValue("color"));

// *Establecer valores al enlace DOM
$linkDOM.style.setProperty("text-decoration", "none");
$linkDOM.style.setProperty("display", "block");

//* Los Atributos CSS se escirben en formato CamelCase
$linkDOM.style.width = "50%";
$linkDOM.style.textAlign = "center";
$linkDOM.style.marginLeft = "auto";
$linkDOM.style.marginRight = "auto";
$linkDOM.style.padding = "1rem";
$linkDOM.style.borderRadius = ".5rem";
console.log($linkDOM.style);
console.log($linkDOM.getAttribute("style"));
console.log(window.getComputedStyle($linkDOM));

// *Variables - CSS - Custom Properties CSS
const $html = document.documentElement,
	$body = document.body;

let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color"),
	varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color");

console.log(varDarkColor, varYellowColor);

// * Aplicar Variables
$body.style.backgroundColor = varDarkColor;
$body.style.color = varYellowColor;

// * Modificar Variables

$html.style.setProperty("--dark-color", "#000");
varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");
$body.style.setProperty("background-color", varDarkColor);
