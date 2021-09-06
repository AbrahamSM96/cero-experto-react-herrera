import '@testing-library/jest-dom'
import { getSaludo } from "../../base/02-templateString"


describe("Pruebas en 02-templateString", () => {
    test("getSaludo debe de retornar hola fernando", () => {
        const nombre = "Fernando"

        const saludo = getSaludo(nombre);
        console.log(saludo)
        
        expect(saludo).toBe(`hola ${nombre}`)
    })

    //getSaludo debe de retornar Hola Carlos! si no hay argumento nombre
    test("getSaludo sin nombre asignado, solo por defecto, return hola Carlos", () => {
        const saludo = getSaludo()
        console.log(saludo, 'Por defecto')

        expect(saludo).toBe(`hola Carlos`)
    })  
})