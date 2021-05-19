window.addEventListener("resize", (e) => {
	console.clear();
	console.log("***** Evento resize ******");
	console.log(window.innerWidth); //* Representa el viewport
	console.log(window.innerHeight); //* Representa el viewport
	console.log(window.outerWidth); //* Resolucion del Monitor
	console.log(window.outerHeight); //* Resolucion del Monitor
	console.log(e);
});

window.addEventListener("scroll", (e) => {
	console.log("***** Evento Scroll *****");
	console.log(window.scrollX);
	console.log(window.scrollY);
	console.log(e);
});

window.addEventListener("load", (e) => {
	console.log("***** Evento Load *****");
	console.log(window.screenX);
	console.log(window.screenY);
	console.log(e);
});

//* es mucho mas eficiente en la carga dentro del navegador.
//* DomContentLoaded no espera a la carga de scripts
//* load, espera a que cargue toda la pagina
window.addEventListener("DOMContentLoaded", (e) => {
	console.log("***** Evento DOMContentLoaded *****");
	console.log(window.screenX);
	console.log(window.screenY);
	console.log(e);
});
