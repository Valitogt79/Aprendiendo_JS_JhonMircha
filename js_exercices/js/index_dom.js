import hamburgerMenu from "./menu_hamburguesa.js";
import { digitalClock, alarm } from "./reloj.js";
import { shortcuts } from "./teclado.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu(".panel-btn", ".panel", ".menu a");
  digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
  alarm("assets/alarma.mp3", "#activar-alarma", "#desactivar-alarma");
});

/* keydown - cuando se presiona la tecla
	 keyup  - cuando se suelta la tecla
	 keypress - mientras esta presionada la tecla*/
d.addEventListener("keypress", (e) => {
  shortcuts(e);
});
