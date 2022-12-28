import React from 'react'
import '@testing-library/jest-dom'
import { shallow } from 'enzyme';
import GifGrid from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs')

describe('test in <GifGrid></GifGrid>', () => {

    const CATEGORY = 'perro'
    const wrapper = shallow(<GifGrid category={CATEGORY} />)
    test('should show the component GifGrid', () => {
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        })
        expect(wrapper).toMatchSnapshot()
    });

    test('should show items when load the images with useFetchGifs', () => {

        const gifs = [{
            id: 'ABC',
            url: 'https://localhost/cualquiercosa.jpg',
            title: 'HOLA PERRO'
        }]

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        })

        expect(wrapper.find('h1').exists()).toBe(false)




    });
});
