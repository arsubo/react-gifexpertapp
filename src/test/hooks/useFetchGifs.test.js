
import '@testing-library/jest-dom';
import { renderHook } from '@testing-library/react-hooks';
import { useFetchGifs } from '../../hooks/useFetchGifs';

describe('validación del custom hooks useFetchGifs', () => {
    test('Debe de retornar el estado inicial', async () => {

        //este componente rederHook, permite simular la llamada al hook desde 
        //un componente virtual
        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('One Punch'));
        const { data, loading } = result.current;
        // para evitar que desmonte el componente
        await waitForNextUpdate()

        expect(data).toEqual([]);
        expect(loading).toBe(true);
    })
    test('Debe retornar un arreglo de imgs y el loading en false', async () => {
        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('One Punch'));
        await waitForNextUpdate();
        const { data, loading } = result.current;

        expect(data.length).toBe(10);
        expect(loading).toBe(false);
    })



})