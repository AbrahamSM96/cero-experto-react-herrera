//Destructuracion de elementos
const person = {
    name: "tony",
    age: "30",
    clave: "Ironman",
};

const { name: NAMEEE, edad, clave } = person;
// console.log(NAMEEE);
// console.log(edad);
// console.log(clave);

//Podemos destructurar desde la funcion
// Si rango no existe, la podemos definir desde el principio
const useContext = ({ name, age, rango = "Capitan", clave }) => {
    return {
        keyName: clave,
        age: age,
        latlng: {
            lat: 12.3403,
            lng: -10.2302,
        },
    };
};

// Dos puntos y llaves extraeran lo que tiene el objeto latlng
const {
    keyName,
    age,
    latlng: { lat, lng },
} = useContext(person);
//const {lat, lng} = latlng

console.log(keyName, age);
console.log(lat, lng);
