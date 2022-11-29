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
            description: '',
            image: '',
            attributes: [],
        },
    }
}

export default state;
