const firstName = "Abraham";
const lastName = "Serrano";

const nombreCompleto = `Me llamo ${firstName} ${lastName}`;

// console.log(nombreCompleto);

export function getSaludo(nombre = "Carlos") {
    return `hola ${nombre}`;
}

