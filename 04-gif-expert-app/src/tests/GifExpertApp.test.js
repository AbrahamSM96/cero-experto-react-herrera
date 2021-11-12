import { shallow } from "enzyme";
import { GifExpertApp } from "../GifExpertApp";

describe('test in componente GifExpertApp', () => {
    let wrapper = shallow(<GifExpertApp />)

    test('should show the componente correctly', () => {
        expect(wrapper).toMatchSnapshot()
    });
});