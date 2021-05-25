const d = document;
export function shortcuts(e) {
  console.log(e.type);
  console.log(e.key);
  console.log(e.keyCode);
  console.log(`ctrl: ${e.ctrlKey}`);
  console.log(`alt: ${e.altKey}`);
  console.log(`shift: ${e.shiftKey}`);
  console.log(e);

  if (e.key === "a" && e.altKey) {
    alert(`Haz lanzado una Alerta con el Teclado.`);
  }
  if (e.key === "c" && e.altKey) {
    confirm(`Haz lanzado una Confirmación con el Teclado`);
  }
  if (e.key === "p" && e.altKey) {
    prompt(`Haz lanzado un aviso con el teclado`);
  }
}
