console.log(document.documentElement.lang);
console.log(document.documentElement.getAttribute("lang"));
console.log(document.querySelector(".link-dom").href);
console.log(document.querySelector(".link-dom").getAttribute("href"));

/* Nuevo valor a los atributos */
document.documentElement.lang = "es";
console.log(document.documentElement.lang);
document.documentElement.setAttribute("lang", "es-MX");
console.log(document.documentElement.lang);

const $linkDOM = document.querySelector(".link-dom");

$linkDOM.setAttribute("target", "_blank");
/* Cualquier enlace que tenga el atributo target="_blank" para evitar que sea insegura se le agrega el siguiente atributo.*/
$linkDOM.setAttribute("rel", "noopener");
$linkDOM.setAttribute("href", "http://youtube.com/oramproductions");

/*Quitar Elementos*/
console.log($linkDOM.hasAttribute("rel"));
$linkDOM.removeAttribute("rel");
console.log($linkDOM.hasAttribute("rel"));

/* Data-Attributes HTML 5 */
console.log($linkDOM.getAttribute("data-description"));
console.log($linkDOM.dataset);

/* modificar el data-attribute */
console.log($linkDOM.dataset.description);
$linkDOM.setAttribute("data-description", "Modelo de Objeto del Documento");
console.log($linkDOM.dataset.description);

$linkDOM.dataset.description = "Suscríbete a mi Canal y Comparte";
console.log($linkDOM.dataset.description);
console.log($linkDOM.hasAttribute("data-id"));
console.log($linkDOM.removeAttribute("data-id"));
console.log($linkDOM.hasAttribute("data-id"));
