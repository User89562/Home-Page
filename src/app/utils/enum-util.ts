import { BACKGROUND_TYPE, JSON_DATA_TYPE } from "../entities/enums";

export class EnumUtil {
    constructor(){}

    get backgroundType(): typeof BACKGROUND_TYPE {
        return BACKGROUND_TYPE;
    }    

    get jsonDataType(): typeof JSON_DATA_TYPE {
        return JSON_DATA_TYPE;
    }  
}
