import { shallow } from "enzyme";
import CounterApp from "../CounterApp";

describe('Pruebas en counterApp', () => {

    let wrapper = shallow(<CounterApp />)

    beforeEach(() => {
        console.log('Beforeee')
        wrapper = shallow(<CounterApp />)

    })

    
    test('Debe de mostrar <CounterApp/> correctamente (hcaer match con un snapshot)', () => {
        expect(wrapper).toMatchSnapshot()

    });

    test('Debe de mostrar el valor por defecto de 100', () => {
        const value = 101

        const wrapper = shallow(<CounterApp value={value} />)
        
        const valueComponent = wrapper.find('h2').text().trim()
        console.log(valueComponent, 'valueComponent')
        
        expect(parseInt(valueComponent, 10)).toBe(value)

    });

    test('Debe de incrementar con el boton de + 1', () => {
           
        wrapper.find('button').at(0).simulate('click');
        const valueComponent = wrapper.find('h2').text().trim()
        console.log(valueComponent)

        expect(valueComponent).toBe('11')
        

    });

        test('Debe de decrementar con el boton de - 1', () => {
        wrapper.find('button').at(2).simulate('click');
        const valueComponent = wrapper.find('h2').text().trim()
        console.log(valueComponent)

        expect(valueComponent).toBe('9')
        

        });
    
    test('Debe de colocar el valor por defecto btn reset', () => {
        const wrapper = shallow(<CounterApp value={105} />)
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(1).simulate('click');
        const valueComponent = wrapper.find('h2').text().trim()
        expect(valueComponent).toBe('105')
        console.log(valueComponent, 'counter')
    });
    

});