import { getGifs } from "../../helpers/getGifs";

describe('test with getGifs Fetch', () => {
    test('should have 10 elements', async () => {
        const gifs = await getGifs('panda')

        expect(gifs.length).toBe(10);
    });
    test('Dont send the category', async () => {
        const gifs = await getGifs('')

        expect(gifs.length).toBe(0);
    });
});