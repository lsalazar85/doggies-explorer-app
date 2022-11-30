import { mount } from '@vue/test-utils';
import Loader from '../components/Loader.vue';

describe('<Loader />', () => {
    test('Render successfully', () => {
        const wrapper = mount(Loader)
        expect(wrapper).toBeTruthy()
    })
})
