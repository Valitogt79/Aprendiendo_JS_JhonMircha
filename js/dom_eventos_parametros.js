function holaMundo() {
	alert("Hola Mundo");
	console.log(event);
}

function saludar(nombre = "Desconocid@") {
	alert(`Hola ${nombre}`);
	console.log(event);
}

const $eventoSemantico = document.getElementById("evento-semantico"),
	$eventoMultiple = document.getElementById("evento-multiple"),
	$eventoRemover = document.getElementById("evento-remover");

$eventoSemantico.onclick = holaMundo;
$eventoSemantico.onclick = function (e) {
	alert("Hola Mundo Manejado por evento semántico!");
	console.log(e);
	console.log(event);
};

$eventoMultiple.addEventListener("click", holaMundo);
$eventoMultiple.addEventListener("click", (e) => {
	alert("Hola Mundo manejado desde Eventos Multiple");
	console.log(e);
	console.log(e.type);
	console.log(e.target);
	console.log(event);
});

$eventoMultiple.addEventListener("click", () => {
	saludar();
	saludar(`Oswaldo`);
});

const removerDobleClick = (e) => {
	alert(`Removiendo el evento de tipo ${e.type}`);
	console.log(e);
	$eventoRemover.removeEventListener("dblclick", removerDobleClick);
	$eventoRemover.disabled = true;
};

$eventoRemover.addEventListener("dblclick", removerDobleClick);
