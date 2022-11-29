interface IAttributes {
    value: string | undefined;
    trail_type: string;
}

export interface INft {
    name: string,
    description: string,
    image: string,
    attributes: IAttributes[]
}
