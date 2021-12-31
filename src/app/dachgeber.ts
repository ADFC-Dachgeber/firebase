import { Coordinate } from "ol/coordinate";

export interface Dachgeber {
    uids: ReadonlyArray<string>;
    names: ReadonlyArray<string>;
    coordinate: Coordinate;
    description: string;
    emails: ReadonlyArray<string>;
}