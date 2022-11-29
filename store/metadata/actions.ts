import { ActionTree } from 'vuex';
import { IMetadata } from './state';
import { RootState } from '~/store';

import { INft } from '~/interfaces';

const actions: ActionTree<IMetadata, RootState> = {
    getMetadata( { commit },  payload: INft ) {
        commit('setMetadata', payload)
    }
}

export default actions;
