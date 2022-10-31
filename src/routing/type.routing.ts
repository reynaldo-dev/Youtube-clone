import { ItemR } from "../hooks/useRecomendations";
import { Item } from "../redux/slices/videos.slice";

export type RootStackParamList = {
    Home: undefined;
    Video: Item | ItemR;
    Channel: string;
};