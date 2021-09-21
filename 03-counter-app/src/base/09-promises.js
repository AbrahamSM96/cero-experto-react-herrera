import { getHeroeById } from "./08-import-export-arrayFunctions";

export const getHeroeByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const heroe = getHeroeById(id);
            console.log(heroe);
            if (heroe) {
                resolve(heroe);
            } else {
                reject("No se pudo encontrar el heroe");
            }
        }, 1500);
    });
};

