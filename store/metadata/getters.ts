import { GetterTree } from 'vuex';
import { IMetadata } from './state';
import { RootState } from '~/store';

const getters: GetterTree<IMetadata, RootState> = {
    isMetadataIsReady(state) {
        return state.data
    }
}


export default getters;
