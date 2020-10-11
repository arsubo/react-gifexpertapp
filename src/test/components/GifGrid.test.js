import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs'); //finge el llamado a este componente

describe('Evaluación del componente <GifGrid />', () => {
    const category = 'One Punch';


    test('Evaluar que el componente carga correctamente', () => {
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });

        const wrapper = shallow(<GifGrid category={category} />);
        expect(wrapper).toMatchSnapshot();
    })
    test('Debe de mostrar items cuando se cargan imágenes con useFetchGifs', () => {
        const gifs = [{
            id: 'ABC',
            url: 'https://localhost/cualquier/cosa.jpg',
            title: 'Cualquier cosa'
        }]

        //enviamos data falsa
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });

        const wrapper = shallow(<GifGrid category={category} />);

        //evaluamos si cargó correctamente
        expect(wrapper).toMatchSnapshot();
        //Si cargó los componentes no debería existir un parrafo
        expect(wrapper.find('p').exists()).toBe(false);
        //evaluamos si creó el objeto GifGridItem
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);


    })

})
