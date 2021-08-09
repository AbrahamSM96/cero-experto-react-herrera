const persona = {
    nombre: "Tony",
    apellido: "Montana",
    edad: 23,
    direccion: {
        ciudad: "Pachuca",
        zip: 40392,
        lat: 12.3049,
        lng: 34.3022,
    },
};

console.log(persona);

const persona2 = { ...persona };

persona2.nombre = "Abraham";

console.log(persona2);
