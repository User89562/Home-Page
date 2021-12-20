import json_default_images from '../json/images.json'
import json_set2_images from '../json/imageSet2.json'
import json_set3_images from '../json/imageSet3.json'
import { EnumUtil } from './enum-util';

export class JsonUtil {
    enumUtil = new EnumUtil();
    

    retrieveJson(backgroundType:String, jsonSet: string): any {
        if (backgroundType === this.enumUtil.backgroundType.image) {
            switch(jsonSet) {
                case this.enumUtil.jsonDataType.set2: {
                    return json_set2_images;
                }
                case this.enumUtil.jsonDataType.set3: {
                    return json_set3_images;
                }
                default: {
                    return json_default_images;
                }
                
            }

        } else if (backgroundType === this.enumUtil.backgroundType.animation) {

        }

        
    }

    getDefaultSet(): any {
        return json_default_images;
    }

}