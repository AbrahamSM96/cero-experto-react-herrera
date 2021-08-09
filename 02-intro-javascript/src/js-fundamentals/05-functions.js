//Funciones en js
//Tratar de no usar funciones como la de abajo y tratar de usar con constantes
// function say(name) {
//     return `Hola, ${name}`
// }

// say = 30

const say = (name) => {
    return `Hola, ${name}`;
};
const say2 = (name) => `Hola, ${name}`;
const say3 = () => `Hola mundoooo`;

const getUser = () => {
    return {
        uid: "ABC123",
        username: "Juan_perez203",
    };
};
const getUser2 = () => ({
    uid: "ABC123",
    username: "Juan_perez203",
});

const getUsuarioActivo = (name) => ({
    uid: "ACB304",
    username: name,
});

const userActive = getUsuarioActivo("Ana");
console.log(userActive);
console.log(say("Abrahaaam"));
console.log(say2("Mazda 3"));
console.log(getUser());
console.log(getUser2());
