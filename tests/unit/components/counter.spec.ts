import Counter from "@/components/Counter.vue";
import { shallowMount } from '@vue/test-utils';  // Probar componentes de vue

describe('Counter view', () => { 
    test('Debe de hacer match con el snapshot', () => { 
        // Al hacer esto por primera vez se crea un snapshot y se guarda
        const wrapper = shallowMount(Counter);
        expect(wrapper.html()).toMatchSnapshot();
     });
 })