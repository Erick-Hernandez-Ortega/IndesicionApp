import Counter from "@/components/Counter.vue";
import {DOMWrapper, shallowMount, VueWrapper} from '@vue/test-utils';  // Probar componentes de vue

describe('Counter view', () => {
    let wrapper: VueWrapper<any>;

    // es un hook que se ejecuta antes de cada prueba individual dentro de un bloque describe
    beforeEach(() => {
        wrapper = shallowMount(Counter);
    })

    test('Debe de hacer match con el snapshot', () => { 
        // Al hacer esto por primera vez se crea un snapshot y se guarda
        expect(wrapper.html()).toMatchSnapshot();
     });

    test('h2 debe mostar valor por defecto', async() => {
        expect(wrapper.find("h2").exists()).toBeTruthy();

        const h2: DOMWrapper<HTMLHeadingElement> = wrapper.find('h2');

        expect(h2.text()).toBe('Counter Counter');
     })

    test('debe de incrementar en uno el valor del contador y decrementarlo', async () => {
        const [increaseBTN, decreaseBTN] = wrapper.findAll('button');

        await increaseBTN.trigger('click');  // Esperamos a que el dom se actualice

        const value = wrapper.find('#counter-value');
        expect(value.text()).toBe('1');

        await decreaseBTN.trigger('click');
        expect(value.text()).toBe('0');
    })

    test('debe de establecer el valor por defecto que es Counter', async () => {
        const valueStart: string = wrapper.props('title')

        expect(valueStart).toBe('Counter');
    })

    test('debe de mostrar el prop title', () => {
        const title: string = 'Hola mundo'
        const wrapper = shallowMount(Counter, {
            props: {
                title: title
            }
        });

        expect(wrapper.find('h2').text()).toBe(`Counter ${title}`);
    })
 })