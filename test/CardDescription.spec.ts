import { mount } from '@vue/test-utils';
import CardDescription from '../components/CardDescription.vue';

describe('<CardDescription />', () => {
    test('Should mount component and contain first title', () => {
        const wrapper = mount(CardDescription);
        const title = wrapper.get('h2');

        expect(title.text()).toContain('Title and Owner');
    })

    test('Render successfully', () => {
        const wrapper = mount(CardDescription);
        expect(wrapper).toBeTruthy();
    })
})
