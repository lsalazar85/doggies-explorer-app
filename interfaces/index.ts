interface IAttributes {
    value: string;
    trait_type: string;
}

export interface INft {
    name: string;
    owner: string;
    thumbnail: string;
    description: string;
    listOfTraits: IAttributes[];
}
