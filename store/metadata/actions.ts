import { ActionTree } from 'vuex';
import { IMetadata } from './state';
import { RootState } from '~/store';
import { INft } from '~/interfaces';

const actions: ActionTree<IMetadata, RootState> = {
    getMetadata( { commit }, {
        owner,
        name,
        description,
        thumbnail,
        listOfTraits
    }: INft ) {
        commit('setMetadata', {
            owner,
            name,
            description,
            thumbnail,
            listOfTraits: [...listOfTraits]
        });
    }
}

export default actions;
