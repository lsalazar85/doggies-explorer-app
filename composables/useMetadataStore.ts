import { computed } from 'vue';
import { store } from '~/store';

export const useMetadataStore = () => {
    return {
        isLoading: computed(() => store.state.nft.isLoading),
        img: computed(() => store.state.nft.data.image),
        name: computed(() => store.state.nft.data.name),
        description: computed(() => store.state.nft.data.description),
        attributes: computed(() => store.state.nft.data.attributes),
        data: computed(() => store.state.nft.data),
    }
}
