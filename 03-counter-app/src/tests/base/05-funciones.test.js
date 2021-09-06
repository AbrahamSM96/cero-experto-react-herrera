
import { getUser, getUsuarioActivo } from "../../base/05-functions"

describe("Pruebas de funciones", () => {
    test("Debe de returnar un objeto", () => {
        const userTest = {
        uid: "ABC123",
        username: "Juan_perez203",
        }
        const user = getUser()

        expect(user).toEqual(userTest)
    })
    
    test("getUserActive debe de retornarn un objeto", () => {
        const name = "Abraham Serrano"
        const userActiveObject = {
                uid: "ACB304",
                username: name,
        }

        const getUserActive = getUsuarioActivo(name)
        console.log(getUserActive,'getUserActive')

        expect(getUserActive).toEqual(userActiveObject)

    })
})