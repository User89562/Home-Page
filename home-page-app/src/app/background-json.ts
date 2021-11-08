

export interface BackgroundMedia {
    bgImages: MediaType;
    bgAnimations?: MediaType[];
}

export interface MediaType {
    d: string; //default
    l?: string;
    h?: string;
}

/** TODO: add more backgrounds for other tabs
 * Each obj = index for each page (0 = default, 1 = developer..etc)
 */
export const BACKGROUND_MEDIA: BackgroundMedia[] = [
    {
        bgImages: 
            {
                d: 'default-bgs'
            }
    },
];
