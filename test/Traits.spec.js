import { mount } from '@vue/test-utils';
import Traits from '../components/Traits.vue';

describe('<Traits />', () => {
    test('Render successfully', () => {
        const wrapper = mount(Traits)
        expect(wrapper).toBeTruthy()
    })
})
