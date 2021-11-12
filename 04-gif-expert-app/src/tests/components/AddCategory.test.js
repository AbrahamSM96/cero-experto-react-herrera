import React from 'react'
import '@testing-library/jest-dom'
import AddCategory from "../../components/AddCategory";
import { shallow } from 'enzyme'
describe('test in <AddCategory', () => {

    const setCategories = jest.fn;
    let wrapper = shallow(<AddCategory setCategories={setCategories} />)
    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories} />)

    })

    test('should show correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should change the box text', () => {
        const input = wrapper.find('input');
        // se manda un objeto que en la funcion Onchange equivaldria al "event", donde hay un target y dentro de target
        // hay un valor
        const value = 'Hola mundo'
        input.simulate('change', { target: { value } })

        expect(wrapper.find('p').text().trim()).toBe(value)
    });

    test('shouldnt post the info with submit', () => {
        // el preventDefault() { } equivale a un preventDefault: ()  => { }
        wrapper.find('form').simulate('submit', { preventDefault() { } });

        expect(setCategories).not.toHaveBeenCalled()
    });

    test('should call setCategories and clean the box text', () => {
        const value = 'Hola mundo'
        //1.- SIMULAR EL INPUTCHANGE
        wrapper.find('input').simulate('change', { target: { value } })
        //2.- SIMULAR EL SUBMIT
        // el preventDefault hacemos de modo minificado
        wrapper.find('form').simulate('change', { preventDefault() { } })
        //3.- setCategories se debe de haber llamado
        expect(setCategories).toHaveBeenCalled();
        //4.- el valor del input debe de estar ''
        expect(wrapper.find('input').prop('value')).toBe('')

    });
});