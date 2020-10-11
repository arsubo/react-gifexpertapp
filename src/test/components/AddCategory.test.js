import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';

describe('Pruebas en <AddCategory />', () => {

    // const setCategories = () => { }; Jest ofrece algo mejor
    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories} />)

    beforeEach(() => {
        //si tenemos algún mock limpia
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories} />)

    })

    test('debe mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();

    })
    test('Debe de cambiar la caja de texto', () => {
        //buscamos la referencia al input
        const input = wrapper.find('input');
        const value = 'Hola mundo'

        //simulamos el cambio en a caja de texto
        input.simulate('change', { target: { value } });

        //para evaluar revisamos que se obtiene el valor enviado en el parrafo       
        expect(wrapper.find('p').text().trim()).toBe(value);

    })
    test('NO debe de postear la información OnSubmit', () => {
        wrapper.find('form').simulate('submit', { preventDefault() { } });

        //evaluamos que haya sido llamada la funcion
        expect(setCategories).not.toHaveBeenCalled();
    })

    test('Debe llamar a setCategories y limpiar a caja de texto', () => {
        const input = wrapper.find('input');
        const value = 'Hola mundo'

        //simulamos el cambio en a caja de texto
        input.simulate('change', { target: { value } });
        //simulamos el submit
        wrapper.find('form').simulate('submit', { preventDefault() { } });

        //evaluar que se haya llamado setCategories
        expect(setCategories).toHaveBeenCalled();
        //evaluar que se haya llamado una vez setCategories
        expect(setCategories).toHaveBeenCalledTimes(1);
        //evaluar que se haya llamado setCategories con una función
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function));

        //evaluar que el input esta vacío
        expect(input.prop('value')).toBe("");

    })



})
