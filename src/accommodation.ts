import { Coordinate } from "ol/coordinate";

export interface Accommodation {
    readonly id: string;

    readonly location: {
        address: {
            stret: string;
            city: string;
            state: string;
            zip: string;
        };
        readonly coordinate: Coordinate;
        readonly regionalStation: boolean;
        readonly centralStation: boolean;
        readonly northOf?: string;
        readonly eastOf?: string;
        readonly southOf?: string;
        readonly westOf?: string;
        readonly urbanDistrict?: string;
        readonly longBikePath: boolean;
        readonly regionalBikePath: boolean;
    }

    readonly communicationMethod: {
        readonly answeringMachine: boolean;
        readonly shortNoticeOk: boolean;
        readonly workPhone?: string;
        readonly languages?: string;
        readonly noNoticeRequired: boolean;
        readonly phone?: string;
        readonly campingWithoutNoticeUntil?: number;
    }

    readonly stayConditions: {
        readonly noBikeOk: boolean;
        readonly sleepingBagRequired: boolean;
        readonly hpv: boolean;
        readonly dogsWelcome: boolean;
        readonly campingMatRequired: boolean;
        readonly noDogs: boolean;
        readonly noElectricBikes: boolean;
        readonly noPets: boolean;
        readonly childrenWelcome: boolean;
        readonly womenOnly: boolean;
        readonly hostsOnly: boolean;
        readonly couplesOnly: boolean;
        readonly smokeFree: boolean;
        readonly nNights: number;
    }

    readonly facilities: {
        readonly handicappedAccessible: boolean;
        readonly show: boolean;
        readonly guestRoom: boolean;
        readonly capacityInGarden: number;
        readonly capacityInHouse: number;
        readonly catsInHouse: boolean;
        readonly kitchen: boolean;
        readonly nChildren: number;
        readonly smoker: boolean;
        readonly wheelchairAccessible: boolean;
        readonly sleepingOnBalcony: boolean;
        readonly accommodation: boolean;
        readonly vegetarian: boolean;
        readonly sharedResidence: boolean;
        readonly apartment: boolean;
        readonly livingRoom: boolean;
    };

    readonly miscelaneous: {
        readonly reapairTools: boolean;
        readonly garage: boolean;
        readonly bikeRent: boolean;
        readonly washingMachine: boolean;
        readonly dryer: boolean;
        readonly internet: boolean;
        readonly tentForNPersons: number;
        readonly additionalPerson?: string;
        readonly yearOfBirth?: number;
        readonly missingInfo?: string;
        readonly coodinateInDecimal?: string;
        readonly additionalInfo?: string;
    }
}