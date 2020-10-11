import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme';
import GifExpertApp from '../GifExpertApp';

describe('Validaciones para el componente <GifExpertApp />', () => {
    test('Prueba que el componente <GifExpertApp/> carga bien con el snapshot', () => {
        const wrapper = shallow(<GifExpertApp />);

        expect(wrapper).toMatchSnapshot();
    })

    test('Debe de mostrar una lista de categorias', () => {
        const categories = ['One Punch', 'Shakira'];
        const wrapper = shallow(<GifExpertApp defaultCatagories={categories} />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length);
    })

})