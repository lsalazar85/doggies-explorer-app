import Vuex from 'vuex';

// My custom modules
import metadataModule from './metadata';
import { IMetadata  } from './metadata/state';


export interface RootState {
    nft: IMetadata
}

export const store = new Vuex.Store<RootState>({
    modules: {
        nft: metadataModule
    }
})


