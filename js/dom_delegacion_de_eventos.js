function flujoEventos(e) {
	console.log(`Hola te Saluda ${this}, el clik lo originó ${e.target.className}`);
}
//* Asignando el elemento (Click) al document
document.addEventListener("click", (e) => {
	console.log("click en ", e.target);

	if (e.target.matches(".eventos-flujo div")) {
		flujoEventos(e);
	}
	if (e.target.matches(".eventos-flujo a")) {
		alert("Hola soy tu amigo y docente digital");
		e.preventDefault();
	}
});
