import {DOMWrapper, shallowMount, VueWrapper} from "@vue/test-utils";
import Indesicion from "@/components/Indesicion.vue";

describe('Indesicion component', () => {
    let wrapper: VueWrapper<any>;
    // es una utilidad utilizada en pruebas unitarias para rastrear y controlar las llamadas a funciones específicas
    let clgSpy: any;

    beforeEach(() => {
        wrapper = shallowMount(Indesicion);
        clgSpy = jest.spyOn(console, 'log');
    })

    // Despues de cada iteracion limpiar mocks
    afterEach(() => {
        jest.clearAllMocks();
    })

    test('Debe de hacer match con el snapshot', () => {
        expect(wrapper.html()).toMatchSnapshot();
    })

    test('Escribir en el input no debe de disparar nada', async() => {
        // vm por que apunta a la instancia de vue
        const getAnswerSpy = jest.spyOn(wrapper.vm, 'getAnswer');

        const input: DOMWrapper<HTMLInputElement> = wrapper.find("input");
        await input.setValue("Hola Mundo")

        expect(clgSpy).toHaveBeenCalled()
        expect(getAnswerSpy).not.toHaveBeenCalled();
    })

    test('escribir el simbolo ? debe disparar getAnswer', async() => {
        const getAnswerSpy = jest.spyOn(wrapper.vm, 'getAnswer');

        const input: DOMWrapper<HTMLInputElement> = wrapper.find("input");
        await input.setValue("Sere millinario?")

        expect(getAnswerSpy).toHaveBeenCalled()
    })
})