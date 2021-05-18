//* Creación de Variable para
const $whatIsDom = document.getElementById("que-es");
let text = `
<p>
El Modelo de Objetos del Documento (<b><i>DOM - Document Objet Model</i></b>) es un API para documentos HTML y XML.
</p>
<p>
Éste Proveé una representación estructurada del documento, permitiendo modificar su contenido y presentación visual mediante codígo JavaScript.
</p>
<p>
<mark>El DOM no es parte de la especificación de JavaScript, es un API para los navegadores.</mark>
</p>
`;

//* No es parte del estandard y no interpreta las etiquetas html
$whatIsDom.innerText = text;

//* Si forma parte del estandard, pero no interpreta las etiquetas HTML
$whatIsDom.textContent = text;

//* Si forma parte del estandard, y si interpreta las etiquetas HTML
$whatIsDom.innerHTML = text;
$whatIsDom.outerHTML = text;
