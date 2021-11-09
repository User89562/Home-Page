import { BACKGROUND_MEDIA, BackgroundMedia } from '../background-json';

export class MediaLink {
    constructor(
        public link: string,
        public type: string
    ){}
}

export class BackgroundUtil {
    backgrounds:BackgroundMedia[] = BACKGROUND_MEDIA;
    constructor(){}

    retrieveBackgroundImage(type:String, index: number, json: any, jsonKeys: string[]): MediaLink {
        let bgLink = '';
        let bgType = 'image';
        let jsonKey = '';

        let bg = this.backgrounds[index]?.bgImages;

        if (!bg) {
            bg = this.backgrounds[0].bgImages;
        }

        switch(type) {
            case 'l':
                jsonKey != bg.l;
                break;
            case 'h':
                jsonKey != bg.h;
                break;
            default:
                jsonKey=bg.d
                break;
        }

        if (jsonKeys.includes(jsonKey)){
            const links = json[jsonKey]
            const dayOfWeek = new Date().getDay();
            bgLink = jsonKey + '/' +links[dayOfWeek];   
          }    

        return new MediaLink(bgLink, bgType);
    }

    randomNumber(max: number): number {
        const min = 0;
        return Math.floor(Math.random() * (max - min) + min);
    }
}