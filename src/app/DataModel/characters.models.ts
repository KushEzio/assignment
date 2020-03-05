import { ObjectUrl } from "./ObjectUrl.models";
export class CharactersModel {
    id: number;
    name: string;
    species: string;
    gender: string;
    origin?: ObjectUrl;
    location?: ObjectUrl;
    image: string;
    created: string;
    status: string;
}