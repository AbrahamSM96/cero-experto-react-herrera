import { render } from "@testing-library/react";
import '@testing-library/jest-dom'
import PrimeraApp from "../PrimeraApp";
import { shallow } from 'enzyme'

describe('Pruebas en <PrimeraApp></PrimeraApp>', () => {
    // test('Debe de mostrar el mensaje "I`m Abraham Serrano"', () => {
    //     const saludo = "I`m abraham serrano"
    //     const {getByText} = render(<PrimeraApp saludos={saludo} />)
        
    //     expect(getByText(saludo  )).toBeInTheDocument();

    // });
    test('debe de mostrar <PrimeraApp/> correctamente', () => {
        const saludo = "Hola, soy abrahaaaam"
        const wrapper = shallow(<PrimeraApp saludos={saludo} />)
        
        expect(wrapper).toMatchSnapshot();

    });
})