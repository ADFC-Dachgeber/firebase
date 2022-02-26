import { Feature } from "ol";
import { Coordinate } from "ol/coordinate";
import { GeoJSONFeature } from "ol/format/GeoJSON";
import Point from "ol/geom/Point";
import { fromLonLat } from "ol/proj";
import { Accommodation } from "../accommodation";

export interface Dachgeber {
    uids: ReadonlyArray<string>;
    acoommodationId: string;
    coordinate: Coordinate;
}

// export function fromFeature(feature: Feature<Point>): Dachgeber {
//     return {
//         uids: feature.get('uids'),
//         names: feature.get('names'),
//         emails: feature.get('emails'),
//         coordinate: feature.getGeometry()!.getCoordinates(),
//         description: feature.get('description'),
//         telephones: feature.get('telephones'),
//     } as Dachgeber;
// }

// export function toGeoJSONFeature(dachgeber: Dachgeber): GeoJSONFeature {
//     return {
//         type: 'Feature',
//         properties: {
//             uids: dachgeber.uids,
//             names: dachgeber.names,
//             emails: dachgeber.emails,
//             description: dachgeber.description,
//             telephones: dachgeber.telephones,
//         },
//         geometry: {
//             type: 'Point',
//             coordinates: fromLonLat(dachgeber.coordinate),
//         }
//     };
// }