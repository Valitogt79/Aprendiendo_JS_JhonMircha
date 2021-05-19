const $divsEventos = document.querySelectorAll(".eventos-flujo div"),
	$linkEventos = document.querySelector(".eventos-flujo a");

function flujoEventos(e) {
	console.log(
		`Hola te saluda ${this.className}, el click lo originó ${e.target.className}`
	);
	e.stopPropagation();
}

console.log($divsEventos);

$divsEventos.forEach((div) => {
	//*Fase de Burbuja interno externo,
	div.addEventListener("click", flujoEventos);
});

$linkEventos.addEventListener("click", (e) => {
	alert(`Hola, Soy tu amigo y docente digital`);
	e.preventDefault();
	e.stopPropagation();
});
