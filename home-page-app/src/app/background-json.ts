

export interface BackgroundMedia {
    tabIndex: number;
    bgImages: MediaType[];
    bgAnimations?: MediaType[];
}

export interface MediaType {
    d: string[]; //default
    l?: string[];
    h?: string[];
}

/** TODO: add more backgrounds for other tabs
 * 0 = default
 * # = tab index to have different background
 */
export const BACKGROUND_MEDIA: BackgroundMedia[] = [
    {
        tabIndex: 0,
        bgImages: [
            {
                d: [
                    "background-1.jpg",
                    "background-2.jpg",
                    "background-3.jpg",
                    "background-4.jpg",
                    "background-5.jpg", 
                    "background-6.jpg",
                    "background-7.jpg",
                ]
            }
        ]
    },
];
