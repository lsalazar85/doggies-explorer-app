import { Module } from 'vuex';
import { RootState } from '~/store';

import state, { IMetadata } from './state';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const metadataModule: Module<IMetadata, RootState> = {
    namespaced: true,
    actions,
    getters,
    mutations,
    state
}


export default metadataModule;
