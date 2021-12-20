import { BACKGROUND_MEDIA } from "../background-json";
import { BackgroundMedia } from "../entities/background-media";
import { EnumUtil } from "./enum-util";
import { JsonUtil } from "./json-util";

class TabBackground {
    constructor(
        public tabIndex: number,
        public background: string,
    ) {}
}

export class RendererUtil {
    backgrounds:BackgroundMedia[] = BACKGROUND_MEDIA;
    enumUtil = new EnumUtil();
    jsonUtil = new JsonUtil();
    jsonData: any;
    jsonKeys: string[] = [];
    bgs: TabBackground[] = [];
    
    constructor(){}

    getAllBackgrounds(backgroundType:string, jsonSet: string): void {
        console.log('d');
        //retrieve the correct json file based on background type and json set selected
        this.jsonData = this.jsonUtil.retrieveJson(backgroundType, jsonSet);
        this.jsonKeys = Object.keys(this.jsonData);

        this.backgrounds.forEach(element => {
            const dayOfWeek = new Date().getDay();
            let links: any;
            if (this.jsonKeys.includes(element.jsonKey)) {
                links = this.jsonData[element.jsonKey];
            } else { // if key isn't found in the jsonSet go to the default image set
                const data =this.jsonUtil.getDefaultSet();
                links = data[element.jsonKey];
            }
            this.bgs.push(new TabBackground(element.tabIndex, element.jsonKey + '/' +links[dayOfWeek]));
        });
    }

    getBackground(index: number) : string {
        const bg = this.bgs.find(t => t.tabIndex === index);
        if (bg){
            return bg.background;
        }
        console.log(bg);
        return this.bgs[0].background;
    }

    randomNumber(max: number): number {
        const min = 0;
        return Math.floor(Math.random() * (max - min) + min);
    }
}