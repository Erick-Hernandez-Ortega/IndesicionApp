import Counter from "@/components/Counter.vue";
import { DOMWrapper, shallowMount } from '@vue/test-utils';  // Probar componentes de vue

describe('Counter view', () => { 
    test('Debe de hacer match con el snapshot', () => { 
        // Al hacer esto por primera vez se crea un snapshot y se guarda
        const wrapper = shallowMount(Counter);
        expect(wrapper.html()).toMatchSnapshot();
     });

    test('h2 debe mostar valor por defecto', () => { 
        const wrapper = shallowMount(Counter);
        expect(wrapper.find("h2").exists()).toBeTruthy();

        const h2: DOMWrapper<HTMLHeadingElement> = wrapper.find('h2');

        expect(h2.text()).toBe('Counter Counter');
     })
 })