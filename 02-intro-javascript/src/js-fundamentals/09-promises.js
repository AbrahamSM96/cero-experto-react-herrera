import { getHeroeById } from "./08-import-export-arrayFunctions";

// const promesa = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const heroe = getHeroeById(2);
//         console.log(heroe);
//         resolve(heroe);
//     }, 2000);
// });

// promesa
//     .then((heroe) => {
//         console.log(heroe, "then de la promesa");
//     })
//     .catch((err) => console.log(err));

const getHeroeByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const heroe = getHeroeById(2);
            console.log(heroe);
            if (heroe) {
                resolve(heroe);
            } else {
                reject("No se pudo encontrar el heroe");
            }
        }, 2000);
    });
};

getHeroeByIdAsync(4)
    .then(console.log)
    .catch((err) => console.log(err, "Error"));
