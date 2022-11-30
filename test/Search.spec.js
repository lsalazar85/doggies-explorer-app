import { mount } from '@vue/test-utils';
import Search from '../components/Search.vue';

describe('<Search />', () => {
    test('Should mount component and contain Title', () => {
        const wrapper = mount(Search);
        const title = wrapper.get('h2');

        expect(title.text()).toBe('Doggies Explorer');
    })

    test('Render successfully', () => {
        const wrapper = mount(Search)
        expect(wrapper).toBeTruthy()
    })
})
