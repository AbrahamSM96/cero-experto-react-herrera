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

    test('debe de mostrar el subtitulo enviado por props', () => {
        
        const saludo = "Hola, soy abrahaaaam"
        const subtitulo = "Hola soy un subtitulo"
        const wrapper = shallow(<PrimeraApp saludos={saludo} subtitulos={subtitulo} />);
        // find actuara como un queryselector
        const textoParrafo = wrapper.find('p').text()
        // probamos que el subtitulo sea igual al del componente
        expect( textoParrafo).toBe(subtitulo);
    });
})