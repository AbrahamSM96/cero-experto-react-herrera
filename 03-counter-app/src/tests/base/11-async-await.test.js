import { getImage } from "../../base/11-async-await"

describe('Pruebas con async await', () => {


    test('Debe de retornar el url de la imagen', async () => {
        const url = await getImage()
        expect(url.includes('https://')).toBe(true)
    })

})