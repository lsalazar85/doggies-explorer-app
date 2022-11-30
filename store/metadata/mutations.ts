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
    },
    setError(state:IMetadata, { error }: IMetadata){
        state.error = error
    },
    setLoading(state:IMetadata, { isLoading }: IMetadata){
        state.isLoading = isLoading
    }
}

export default mutation;
