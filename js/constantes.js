export const PI = Math.PI;

export let usuario = 'oswaldo';
const password = 'qwerty';
/* OJO con const y con let no es posible realizar la exportacion por default se debera de realizar de la siguiente manera: 

export default password;
*/

/* en el caso de password, al no colocarle la expresion export, esta variable no podra ser utilizada o importada por otro archivo. */

// no se puede exportar default mas de una vez.
const hello = () => console.log('Hola');

export default function saludar() {
  console.log('Hola Módulos +ES6');
}
export class Saludar {
  constructor() {
    console.log('Hola Clases +ES6');
  }
}
