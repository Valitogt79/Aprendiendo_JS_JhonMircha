const $divsEventos = document.querySelectorAll(".eventos-flujo div");

function flujoEventos(e) {
	console.log(
		`Hola te saluda ${this.className}, el click lo originó ${e.target.className}`
	);
}

console.log($divsEventos);

$divsEventos.forEach((div) => {
	//*Fase de Burbuja,
	//div.addEventListener("click", flujoEventos, false);

	//* Fase de Captura
	//div.addEventListener("click", flujoEventos, true);

	//*
	div.addEventListener("click", flujoEventos, true);
});
