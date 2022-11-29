import { MutationTree } from 'vuex';
import { IMetadata } from './state';
import { INft } from '~/interfaces';

const mutation: MutationTree<IMetadata> = {
    setMetadata( state:IMetadata, {name, description, image, attributes}: INft) {
        state.data = {name, description, image, attributes}
        state.isLoading = false
    },
}

export default mutation;
