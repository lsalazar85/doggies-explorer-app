import { computed } from 'vue';
import { store } from '~/store';

export const useMetadataStore = () => {
    return {
        isLoading: computed(() => store.state.nft.isLoading),
        thumbnail: computed(() => store.state.nft.data.thumbnail),
        name: computed(() => store.state.nft.data.name),
        description: computed(() => store.state.nft.data.description),
        listOfTraits: computed(() => store.state.nft.data.listOfTraits),
        owner: computed(() => store.state.nft.data.owner),
    }
}
