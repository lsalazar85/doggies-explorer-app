import { MutationTree } from 'vuex';
import { IMetadata } from './state';
import { INft } from '~/interfaces';

const mutation: MutationTree<IMetadata> = {
    setMetadata( state:IMetadata, payload: INft) {
        state.data = payload
        state.isLoading = false
    }
}

export default mutation;
