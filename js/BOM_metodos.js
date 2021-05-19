//window.alert("Alerta");
//window.confirm("Confirmacion");
//window.prompt("Aviso");

//* Todo lo que cuelga de Window, no es necesario utilizar la palabra Window.
//alert("oswaldo");

const $btnAbrir = document.getElementById("abrir-ventana"),
	$btnCerrar = document.getElementById("cerrar-ventana"),
	$btnImprimir = document.getElementById("imprimir-ventana");

let ventana;

$btnAbrir.addEventListener("click", (e) => {
	//se puede quitar el metodo window
	//window.open("https://jonmircha.com");
	ventana = window.open("https://jonmircha.com");
});
$btnCerrar.addEventListener("click", (e) => {
	//*Debido a el metodo close no es un estandard, no funciona en algunos navegadores (chrome, brave)
	ventana.close();
});
$btnImprimir.addEventListener("click", (e) => {
	window.print();
});
