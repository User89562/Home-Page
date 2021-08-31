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

    retrieveBackgroundImage(type:String, index: number): MediaLink {
        let bgLink = '';
        let bgType = 'image';

        let bgTabIndex = this.backgrounds.findIndex(b => b.tabIndex === index);

        if (bgTabIndex === -1) {
            bgTabIndex = 0;
        }

        this.backgrounds[bgTabIndex].bgImages.forEach(backgroundType => {
            switch(type) {
                case 'l':
                    bgLink = backgroundType.l![this.randomNumber(backgroundType.l?.length!)];
                    break;
                case 'h':
                    bgLink= backgroundType.h![this.randomNumber(backgroundType.h?.length!)];
                    break;
                default:
                    const dayOfWeek = new Date().getDay();
                    bgLink=backgroundType.d![dayOfWeek];//same for each day of the week (0-6)
                    break;
            }
        });

        return new MediaLink(bgLink, bgType);
    }

    randomNumber(max: number): number {
        const min = 0;
        return Math.floor(Math.random() * (max - min) + min);
    }
}