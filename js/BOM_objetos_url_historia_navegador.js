console.log("***** Objeto URL (location) *****");
console.log(location);

//* Ruta de origen
console.log(location.origin);

//* Protocolo de archivo
console.log(location.protocol);

//* Nombre del dominio
console.log(location.host);

//* Puerto que utiliza el servidor
console.log(location.port);

//* Ruta completa incluyendo el nombre del archivo
console.log(location.href);
-1;
//* Detecta el valor de la URL que esta despues de un #
console.log(location.hash);

//* almacena los parametros de la URL
console.log(location.search);

//* nombre del archivo al cual se esta consultado.
console.log(location.pathname);

//location.reload(); //* Recarga la pagína Web

console.log("***** Objeto History *****");
console.log(history);

//* Regresar en el historial
console.log(history.back(1));

//* abanzar en el historial
console.log(history.forward(2));

console.log(history.go(-1));

console.log("***** Objeto navigator *****");
console.log(navigator);
console.log(navigator.connection);
console.log(navigator.geolocation);
console.log(navigator.mediaDevices);
console.log(navigator.mimeTypes);
console.log(navigator.onLine);
console.log(navigator.serviceWorker);
console.log(navigator.storage);
console.log(navigator.usb);
console.log(navigator.userAgent);
