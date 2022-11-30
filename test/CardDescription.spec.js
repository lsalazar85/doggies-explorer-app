import { mount } from '@vue/test-utils';
import CardDescription from '../components/CardDescription.vue';

describe('<CardDescription />', () => {
    test('Render successfully', () => {
        const wrapper = mount(CardDescription);
        expect(wrapper).toBeTruthy();
    })
})
