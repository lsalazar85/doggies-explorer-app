import { INft } from '~/interfaces';

export interface IMetadata {
    isLoading: boolean;
    data: INft;
    error?: boolean
}

const  state = (): IMetadata => {
    return {
        isLoading: true,
        data: {
            name: '',
            owner: '',
            thumbnail: '',
            description: '',
            listOfTraits: [],
        },
    }
}

export default state;
