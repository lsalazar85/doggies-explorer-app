import { INft } from "~/interfaces";

export interface IMetadata {
  isLoading: boolean;
  data: INft;
  error?: boolean;
}

const state = (): IMetadata => {
  return {
    isLoading: false,
    error: false,
    data: {
      name: "",
      owner: "",
      thumbnail: "",
      description: "",
      listOfTraits: [],
    },
  };
};

export default state;
