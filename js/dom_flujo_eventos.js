const $divsEventos = document.querySelectorAll(".eventos-flujo div");

function flujoEventos(e) {
	console.log(
		`Hola te saluda ${this.className}, el click lo originó ${e.target.className}`
	);
}

console.log($divsEventos);

$divsEventos.forEach((div) => {
	//*Fase de Burbuja interno externo,
	//div.addEventListener("click", flujoEventos, false);

	//* Fase de burbuja externo interno
	//div.addEventListener("click", flujoEventos, true);

	//* Fase de Captura
	div.addEventListener("click", flujoEventos, {
		capture: false, //! se puede utilizar  la burbujas.
		once: true, //! esto permiete que solo se ejecute una vez.
	});
});
