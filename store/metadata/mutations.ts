import { MutationTree } from 'vuex';
import { IMetadata } from './state';
import { INft } from '~/interfaces';

const mutation: MutationTree<IMetadata> = {
    setMetadata( state:IMetadata, {
        owner,
        name,
        description,
        thumbnail,
        listOfTraits
    }: INft) {
        state.data = {
            owner,
            name,
            description,
            thumbnail,
            listOfTraits: [...listOfTraits]
        }
        state.isLoading = false
    },
}

export default mutation;
