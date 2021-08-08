const firstName = "Abraham";
const lastName = "Serrano";

const nombreCompleto = `Me llamo ${firstName} ${lastName}`;

console.log(nombreCompleto);

function getSaludo(nombre) {
    return `hola ${nombre}`;
}

console.log(getSaludo(firstName));
