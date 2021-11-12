import { shallow } from "enzyme";
import GifGridItem from "../../components/GifGridItem";

describe('test in GifGridItem component', () => {
    const title = 'soy titulo de prueba';
    const url = 'https://google.com '
    let wrapper = shallow(<GifGridItem title={title} url={url} />)
    test('should render the component correctly', () => {

        expect(wrapper).toMatchSnapshot()
    });
    test('should have a <h2> </h2> with the title', () => {
        const h2 = wrapper.find('h2');
        expect(h2.text().trim()).toBe(title)
    });

    test('should have an image equal to url', () => {
        const img = wrapper.find('img')
        // console.log(img.prop('src'), 'img')
        expect(img.prop('src')).toBe(url)
        expect(img.prop('alt')).toBe(title)
    });

    test('should animate__fadeInUp', () => {
        const div = wrapper.find('div');
        const className = div.prop('className');

        expect(className.includes('animate__fadeInUp')).toBe(true)
    });
});