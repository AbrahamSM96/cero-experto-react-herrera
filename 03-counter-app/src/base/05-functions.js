//Funciones en js
//Tratar de no usar funciones como la de abajo y tratar de usar con constantes
// function say(name) {
//     return `Hola, ${name}`
// }

// say = 30


export const getUser = () => {
    return {
        uid: "ABC123",
        username: "Juan_perez203",
    };
};
export const getUser2 = () => ({
    uid: "ABC123",
    username: "Juan_perez203",
});

export const getUsuarioActivo = (name) => ({
    uid: "ACB304",
    username: name,
});

 const userActive = getUsuarioActivo("Ana");
