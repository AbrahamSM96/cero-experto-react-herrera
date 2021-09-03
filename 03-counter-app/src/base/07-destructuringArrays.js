//Destructuracion de arreglos

const characters = ["Kaiu", "King Kong", "Godzilla"];
// Si solamente quiero el segundo elemento del array debo de poner una coma para indicarle al array que no
//me interesa la posicion uno
const [, , p3] = characters;

console.log(p3);

const returArray = () => {
    return ["ABC", 124];
};

const [letras, numeros] = returArray();

console.log(letras, numeros);

//Tarea
const useState = (value) => {
    return [
        value,
        () => {
            console.log("Hola mundoooo d");
        },
    ];
};

const [nombre, setNombre] = useState("King Kong");
console.log(nombre);
setNombre();
// console.log(arr, "ARR");
//retornamos la funcion y la ejecutamos
// arr[1]();
