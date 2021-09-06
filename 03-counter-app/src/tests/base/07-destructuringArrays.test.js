import { returArray } from "../../base/07-destructuringArrays"

describe('Pruebas en destructuring', () => {
    test('Debe de retornar un string o numero', () => {
        const [letras, numeros] = returArray() //["ABC", 124]

        console.log(typeof letras)
        
        expect(letras).toBe("ABC");
        expect(typeof letras).toBe("string");

        expect(numeros).toBe(124);
        expect(typeof numeros).toBe("number");


    })
})