import { ActionTree } from 'vuex';
import { IMetadata } from './state';
import { RootState } from '~/store';
import { INft } from '~/interfaces';

const actions: ActionTree<IMetadata, RootState> = {
    getMetadata( { commit }, {name, description, image, attributes}: INft ) {
        commit('setMetadata', {name, description, image, attributes});
    }
}

export default actions;
