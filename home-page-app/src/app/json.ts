import { Colors } from "./colors";

export interface StartPageLinks {
    tabName: string;
    linkGroups: LinkGroup[];
}

export interface LinkGroup {
    image?: string[];
    groupName?: string;
    urlGroups: UrlGroup[];
}

export interface UrlGroup {
    url: string;
    urlName: string;
    backgroundColor?: string;
}



export const STARTPAGE: StartPageLinks[] = [
    {
        tabName: 'Home',
        linkGroups: [
            {
                image: ['/assets/images/pbm3yulltvn51.jpg', '/assets/images/ofas72yn1kt01.jpg'],
                urlGroups: [
                    {
                        url: 'https://old.reddit.com/',
                        urlName: 'Reddit',
                      },
                      {
                        url: 'https://www.livechart.me/schedule/tv',
                        urlName: 'Anime Season',
                      },
                      {
                        url: 'https://twitter.com/',
                        urlName: 'Twitter',
                      },
                      {
                        url: 'https://www.google.com/gmail/',
                        urlName: 'Gmail',
                      },
                      {
                        url: 'https://discord.com/login',
                        urlName: 'Discord',
                      },
                      {
                        url: 'https://www.virustotal.com/gui/',
                        urlName: 'Virus Total',
                      },
                ]
            },
            {
              image: ['/assets/images/animelandscape.jpg', '/assets/images/animelandscape-2.jpg'],
                urlGroups: [
                    {
                        url: 'https://www.twitch.tv/directory/all',
                        urlName: 'Twitch',
                      },
                      {
                        url: 'https://www.youtube.com/',
                        urlName: 'Youtube',
                      },
                      {
                        url: 'https://open.spotify.com/',
                        urlName: 'Spotify',
                      },
                ]
            },
        ]
    }
    
]
