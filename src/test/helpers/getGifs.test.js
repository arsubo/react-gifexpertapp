
import '@testing-library/jest-dom'
import { getGifs } from '../../helpers/getGifs'

describe('pruebas con getGifs fetch', () => {
    test('debe traer 10 elementos', async () => {
        const gifs = await getGifs('One Punch');

        expect(gifs.length).toBe(10);

    })

    test('Si no se mandan categoria debe traer 0 elementos', async () => {
        const gifs = await getGifs('');

        expect(gifs.length).toBe(0);

    })
})