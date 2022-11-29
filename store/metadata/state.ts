import { INft } from '../../interfaces';

export interface IMetadata {
    isLoading: boolean;
    data: INft;
}

const  state = (): IMetadata => {
    return {
        isLoading: true,
        data: {
            name: '',
            description: '',
            image: '',
            attributes: [],
        },
    }
}

export default state;
