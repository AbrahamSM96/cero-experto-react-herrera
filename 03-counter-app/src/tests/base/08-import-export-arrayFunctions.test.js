import { getHeroeById, getHeroesByOwner } from "../../base/08-import-export-arrayFunctions";
import heroes from "../../data/heroes";

describe('Pruebas en funciones de heroes', () => {
    test('Debe de retornar un heroe', () => {
        const id = 1;
        const heroe = getHeroeById(id)
        const heroeData = heroes.find(heroeee => heroeee.id === id)

        expect(heroe).toEqual(heroeData)
    })

        test('Debe de retornar undefined si heroe no existe', () => {
        const id = 10;
        const heroe = getHeroeById(id)
    

        expect(heroe).toBe(undefined)
        })
     
    test('Debe de retornar un arreglo con los héroes de DC', () => {
        const owners = "DC"
        const heroesDc = getHeroesByOwner(owners)
        const ownersData = heroes.filter(h => h.owner === owners)
        expect(ownersData).toEqual(heroesDc)
    })
    
    test('Debe de retornar un arreglo con los héroes de Marvel', () => {
        const heroesMarvel = getHeroesByOwner("Marvel")
        console.log(heroesMarvel.length)
        expect(heroesMarvel.length).toBe(2)
    })

})