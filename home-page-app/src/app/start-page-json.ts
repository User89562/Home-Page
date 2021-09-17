import { Colors } from './colors';

export interface StartPageLinks {
  tabName: string;
  linkGroups: LinkGroup[];
}

export interface LinkGroup {
  media?: string[];
  selectedMedia?: string;
  groupName?: string;
  urlGroups: UrlGroup[];
}

export interface UrlGroup {
  url: string;
  urlName: string;
  backgroundColor?: string;
}
//TODO: restructure 'media' to be similar to background media
export const STARTPAGE: StartPageLinks[] = [
  {
    tabName: "Home",
    linkGroups: [
      {
        media: [
          "pbm3yulltvn51.jpg",
          "wallhaven-6omxxl.jpg",
          "wallhaven-3z369y.jpg",
          "wallhaven-6omo76.jpg",
        ],
        urlGroups: [
          {
            url: "https://old.reddit.com/",
            urlName: "Reddit",
            backgroundColor: Colors.red(1),
          },
          {
            url: "https://www.livechart.me/schedule/tv",
            urlName: "Anime Season",
          },
          {
            url: "https://twitter.com/",
            urlName: "Twitter",
          },
          {
            url: "https://www.google.com/gmail/",
            urlName: "Gmail",
          },
          {
            url: "https://discord.com/login",
            urlName: "Discord",
            backgroundColor: Colors.teal(1)
          },
          {
            url: "https://www.virustotal.com/gui/",
            urlName: "Virus Total",
          },
        ],
      },
      {
        media: [
          "wallhaven-575r67.jpg",
          "wallhaven-28dro6.jpg",
          "wallhaven-28zr39.jpg",
          "wallhaven-72j8jo.jpg",
        ],
        urlGroups: [
          {
            url: "https://www.twitch.tv/directory/all",
            urlName: "Twitch",
            backgroundColor: Colors.purple(1),
          },
          {
            url: "https://www.youtube.com/",
            urlName: "Youtube",
          },
          {
            url: "https://open.spotify.com/",
            urlName: "Spotify",
            backgroundColor: Colors.green(2),
          },
        ],
      },
      {
        media: [
          "wallhaven-l3zxvl.jpg",
          "wallhaven-g75dq3.jpg",
          "wallhaven-j3wq5p.jpg",
          "wallhaven-j3wqd5.jpg",
        ],
        urlGroups: [
          {
            url: "https://www.amazon.ca/",
            urlName: "Amazon",
          },
          {
            url: "https://www.humblebundle.com/",
            urlName: "Humble Bundle",
          },
          {
            url: "https://www.rtings.com/",
            urlName: "Reviews",
          },
        ],
      },
      {
        media: [
          "wallhaven-m91x28.jpg",
          "wallhaven-m9zovy.jpg",
          "wallhaven-l3z9rp.jpg",
          "wallhaven-k71rzd.jpg",
        ],
        urlGroups: [
          {
            url: "http://192.168.1.15:8090",
            urlName: "Downloader",
            backgroundColor: Colors.indigo(1)
          },
          {
            url: "https://github.com/login",
            urlName: "Github",
          },
          {
            url: "http://192.168.1.15:8081",
            urlName: "Git Lab",
          },
        ],
      },
    ],
  },
  {
    tabName: "Developer",
    linkGroups: [
      {
        media: [
          "wallhaven-g7532l.jpg",
          "wallhaven-v9oejp.jpg",
          "wallhaven-x8z3qo.jpg",
          "wallhaven-wq1wlr.jpg",
        ],
        groupName: 'Angular',
        urlGroups: [
          {
            url: "https://angular.io/start",
            urlName: "Angular Wiki",
          },
          {
            url: "https://material.angular.io/components/categories",
            urlName: "Material",
          },
          {
            url: "https://material.io/resources/icons/?style=baseline",
            urlName: "Angular Icons",
          },
        ],
      },
      {
        media: [
          "wallhaven-o3gz57.jpg",
          "wallhaven-o3ym1p.jpg",
          "wallhaven-pkl5pm.jpg",
          "wallhaven-pkwq73.jpg",
        ],
        urlGroups: [
          {
            url: "https://material.io/resources/color/#!/?view.left=0&view.right=0",
            urlName: "Color Picker",
          },
          {
            url: "https://regexr.com/",
            urlName: "Regex Tester",
          },
        ],
      },
      {
        media: [
          "wallhaven-e78kjw.jpg",
          "wallhaven-e79j6o.jpg",
          "wallhaven-e79om8.jpg",
          "wallhaven-dpkyqj.jpg",
        ],
        urlGroups: [
          {
            url: "https://kenney.nl/assets",
            urlName: "2-D Assets",
          },
        ],
      },
    ],
  },
  {
    tabName: "PC",
    linkGroups: [
      {
        media: [
          "920126.jpg",
          "555246.jpg",
          "920116.jpg",
          "920117.jpg",
          "920122.jpg",
          "920131.jpg",
        ],
        groupName: 'Lost Ark',
        urlGroups: [
          {
            url: 'https://old.reddit.com/r/lostarkgame/',
            urlName: 'Reddit',
          },
          {
            url: 'https://lostarkdatabase.com/wiki/index.php?title=Main_Page',
            urlName: 'Wiki',
          },
          {
            url: 'https://lostarkhub.com/',
            urlName: 'News',
          },
        ],
      },
      {
        media: [
          "genshin1.jpg",
          "genshin2.jpg",
          "genshin3.jpg",
          "genshin4.jpg",
          "genshin5.jpg",
          "genshin6.jpg",
          "genshin7.jpg",
          "genshin8.jpg",
          "genshin9.png",
          "genshin10.jpg",
          "genshin11.jpg",
          "genshin12.jpg",
          "genshin17.jpg",
          "genshin18.jpg",
          "genshin19.jpg",
          "genshin20.jpg",
          "genshin21.jpg",
          "genshin22.jpg",
        ],
        groupName: 'Genshin Impact',
        urlGroups: [
          {
            url: 'https://old.reddit.com/r/genshin_impact/',
            urlName: 'Reddit',
            backgroundColor: Colors.red(1),
          },
          {
            url: 'https://old.reddit.com/r/genshin_impact_leaks/',
            urlName: 'Leaks Reddit',
          },
          {
            url: 'https://webstatic-sea.mihoyo.com/app/ys-map-sea/?lang=en-us#/map/2?shown_types=2,3,154&center=2747.00,786.00&zoom=-3.00',
            urlName: 'Map',
            backgroundColor: Colors.teal(2),
          },
          {
            url: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRq-sQxkvdbvaJtQAGG6iVz2q2UN9FCKZ8Mkyis87QHFptcOU3ViLh0_PJyMxFSgwJZrd10kbYpQFl1/pubhtml#',
            urlName: 'Builds',
            backgroundColor: Colors.indigo(1)
          },
          {
            url: 'https://docs.google.com/spreadsheets/d/1a--WPcWT7BOtw5J9TwJoRHEg_BAeT1mhAR0Fvdn_SZI/edit?usp=sharing',
            urlName: 'Google Doc',
            backgroundColor: Colors.light_blue(2)
          },
          {
            url: 'https://genshin.honeyhunterworld.com/',
            urlName: 'Database',
          },
          {
            url: 'https://spiral-abyss.appsample.com/',
            urlName: 'Spiral Abyss',
          },
          {
            url: 'https://genshin-impact.fandom.com/wiki/Genshin_Impact_Wiki',
            urlName: 'Wiki',
          },
        ],
      },
      {
        media: [
          "league_of_legends1.jpg",
          "league_of_legends2.jpg",
          "league_of_legends3.jpg",
          "league_of_legends4.jpg",
          "league_of_legends5.png",
          "league_of_legends6.png",
        ],
        groupName: 'League of Legends',
        urlGroups: [
          {
            url: 'https://old.reddit.com/r/leagueoflegends/',
            urlName: 'Reddit',
          },
          {
            url: 'https://leagueoflegends.fandom.com/wiki/League_of_Legends_Wiki',
            urlName: 'Wiki',
          },
          {
            url: 'https://u.gg/',
            urlName: 'u.gg Builds',
          },
          {
            url: 'https://na.op.gg/',
            urlName: 'OP.gg',
          },
        ],
      },      
    ],
  },
  {
    tabName: "Mobile",
    linkGroups: [
      {
        media: [
          "gfl1.png",
          "gfl2.png",
          "gfl3.png",
          "gfl4.png",
          "gfl6.png",
          "gfl7.png",
          "gfl8.png",
        ],
        groupName: 'Girls\' Frontline',
        urlGroups: [
          {
            url: 'https://old.reddit.com/r/girlsfrontline/',
            urlName: 'Reddit',
            backgroundColor: Colors.red(1)
          },
          {
            url: 'https://iopwiki.com/wiki/Girls\'_Frontline_Wiki',
            urlName: 'Wiki',
          },
          {
            url: 'https://docs.google.com/spreadsheets/d/1by5rcLdKXdhLClfVQ-FLvK_OM4Xko0CT9peKQwQCfXw/edit?usp=sharing',
            urlName: 'Info Doc',
            backgroundColor: Colors.light_blue(2)
          },
          {
            url: 'https://www.gflcorner.com/',
            urlName: 'GFL Corner',
          },
          {
            url: 'https://gfl.matsuda.tips/blog/',
            urlName: 'Angry Midget',
          },
          {
            url: 'https://gamepress.gg/girlsfrontline/',
            urlName: 'Gamerpress',
          },
          {
            url: 'http://dmesse.egloos.com/3568507',
            urlName: 'DMesse',
          },
          {
            url: 'https://docs.google.com/spreadsheets/d/1MKEvSx9zcgvWnRhv9IoL_-XUuHOq5ESFCSlJkxuE6OU/edit#gid=0',
            urlName: 'Armory',
          },
          {
            url: 'https://docs.google.com/spreadsheets/d/1iA07L2CvAgJkbRFvUGQToyO9RrZjJnNyAAtpKDD-Dvc/edit?usp=sharing',
            urlName: 'Ranking Diary',
          },
          {
            url: 'https://aaeeschylus.github.io/main.html',
            urlName: 'Recipe Calculator',
          },
          {
            url: 'https://gfgfork.github.io/gf/main.html',
            urlName: 'Logistics Calculator',
          },
          {
            url: 'https://hycdes.com/pages/GFT_Echelon-EN.html',
            urlName: 'Damage Simulation',
          },
          {
            url: 'https://hycdes.com/pages/GFT_ChipCal-EN.html',
            urlName: 'Chip Calculator',
          },
          {
            url: 'https://docs.google.com/spreadsheets/d/10LJdksnM3zipOb72IneJD7WVp3765JYJEGg0LnodzDI/edit#gid=516072763',
            urlName: 'T-doll Analysis',
          },
          {
            url: 'https://pengupengupengu.github.io/gflmaps/',
            urlName: 'Maps',
            backgroundColor: Colors.teal(1)
          },
          {
            url: 'https://docs.google.com/spreadsheets/d/1TjHC4Vaed8dFqSkagM6teNlmBjFGPiUbTRnTnvxnnu4/edit#gid=296924292',
            urlName: 'Boss Strategies',
          },
          {
            url: 'https://sangvis.science/list/all',
            urlName: 'T-Doll Recipe DB',
          },
          {
            url: 'https://docs.google.com/document/d/1-ETBAG_AfsIrEURvd5fXnmxHD02urvUuVcOQVCIqa6c/edit#heading=h.9bln0wx8twyq',
            urlName: 'Next Ranking',
            backgroundColor: Colors.indigo(2),
          },
        ],
      },
      {
        media: [
          "fgo3.jpg",
          "fgo4.png",
          "fgo5.jpg",
          "fgo6.png",
          "fgo7.png",
          "fgo8.png",
          "fgo9.jpg",
          "fgo10.png",
          "fgo11.png",
          "fgo12.jpg",
          "fgo13.png",
          "fgo14.png",
          "fgo15.png",
          "fgo16.jpg",
          "fgo17.png",
        ],
        groupName: 'Fate Grand Order',
        urlGroups: [
          {
            url: 'https://old.reddit.com/r/grandorder/',
            urlName: 'Reddit',
          },
          {
            url: 'https://grandorder.wiki/Main_Page',
            urlName: 'Wiki',
            backgroundColor: Colors.green(1)
          },
          {
            url: 'https://gamepress.gg/grandorder/',
            urlName: 'Gamepress',
            backgroundColor: Colors.teal(1)
          },
          {
            url: 'https://gamepress.gg/grandorder/event-guides',
            urlName: 'Events',
            backgroundColor: Colors.indigo(1)
          },
          {
            url: 'https://shipfu.moe/fgo/',
            urlName: 'Pull Calculator',
          }
        ],
      },
      {
        media: [
          "pricone1.jpg",
          "pricone2.jpg",
          "pricone3.jpg",
          "pricone4.jpg",
          "pricone5.jpg",
          "pricone6.jpg",
          "pricone7.png",
          "pricone9.jpg",
          "pricone10.jpg",
        ],
        groupName: 'Princess Connect',
        urlGroups: [
          {
            url: 'https://old.reddit.com/r/Priconne/',
            urlName: 'Reddit',
          },
          {
            url: 'https://docs.google.com/spreadsheets/d/1b3Vjcc-wfrVfoqI93OMGLZPrJaxpclnBAerPXZdAfc0/edit#gid=57366839',
            urlName: 'Tier/Guides',
          },
          {
            url: 'https://pcrdfans.com/en/battle',
            urlName: 'PvP',
            backgroundColor: Colors.indigo(2)
          },
          {
            url: "https://docs.google.com/spreadsheets/d/18VjvDwBrTinuWtqbxUxo0BNOvFpmztFO2p2D03tUxdA/edit#gid=1114939808",
            urlName: "Ranking Recommendation",
            backgroundColor: Colors.light_blue(2)
          },
          {
            url: 'https://docs.qq.com/sheet/DWlhOaWJXYnZwVklT?tab=1ztn7s',
            urlName: 'Clan Battle Records',
            backgroundColor: Colors.purple(1)
          },
        ],
      },
      {
        media: [
          "e7-1.png",
          "e7-3.jpg",
          "e7-4.jpg",
          "e7-5.png",
          "e7-7.jpg",
          "e7-8.jpg",
        ],
        groupName: 'Epic Seven',
        urlGroups: [
          {
            url: 'https://old.reddit.com/r/EpicSeven/',
            urlName: 'Reddit',
            backgroundColor: Colors.red(1)
          },
          {
            url: 'https://docs.google.com/document/d/1ZQFAPU5y5BVbLgWdkegOnkcil4bZOUINdjCmTHaNuH0/edit',
            urlName: 'New Player',
          },
          {
            url: 'https://docs.google.com/presentation/d/1hFz8lTVCNdv8wUE1qbUYKd42iQMCesLpeFgNxmJ3zfc/preview#slide=id.g4e4c6ec9ea_0_145',
            urlName: 'Raid',
          },
          {
            url: 'https://yufine.co/',
            urlName: 'Progression Guides',
            backgroundColor: Colors.light_blue(2)
          },
          {
            url: "https://epic7x.com/tier-list/",
            urlName: "Tier",
            backgroundColor: Colors.red(2)
          },
          {
            url: "https://e7herder.com/tools/model-viewer",
            urlName: "Model Viewer",
          },
          {
            url: 'https://epicsevendb.com/',
            urlName: 'Database',
          },
        ],
      },
      {
        media: [
          "wallhaven-z8zjdo.jpg",
          "wallhaven-z8qldy.jpg",
          "wallhaven-z8q59j.jpg",
          "wallhaven-z8p1jy.jpg",
        ],
        groupName: 'Misc',
        urlGroups: [
          {
            url: 'https://old.reddit.com/r/gachagaming/',
            urlName: 'Gacha Gaming',
            backgroundColor: Colors.red(1)
          },
          {
            url: 'https://docs.google.com/spreadsheets/d/1sIz4LP3j-BPCmR3MMeu9Ic5Uqi3NckflybfxRvWMk2U/edit?usp=sharing',
            urlName: 'Gachas Doc',
          },
        ],
      },       
    ],
  },
  {
    tabName: "",
    linkGroups: [
      {
        media: [
          "wallhaven-v9oejp.jpg",
        ],
        groupName: 'Magicami',
        urlGroups: [
          {
            url: "https://old.reddit.com/r/magicami/",
            urlName: "Reddit",
            backgroundColor: Colors.red(1)
          },
          {
            url: "https://docs.google.com/document/d/11-Bml0nbBUMw9sCQDAAwfyb_ve3kCvqvKmJEuP5N2-Q/edit#heading=h.8k3xvzzgexj1",
            urlName: "Beginner's Guide",
            backgroundColor: Colors.light_blue(2)
          },
          {
            url: "https://appmedia.jp/magicami/3948385",
            urlName: "JP wiki",
          },
          {
            url: "https://eight04.github.io/mgcm-skill-data/",
            urlName: "Damage Simulation",
          },
          {
            url: "https://docs.google.com/document/d/e/2PACX-1vTosG4UlrZ_2zsunGSb8tIpfYDH3bcuUO-fPq00GSZfftPI825k-jX500gOWP4084nECChjd9uOqFda/pub",
            urlName: "Strat Guide",
          },
        ],
      },
      {
        media: [
          "al/al-2.png",
          "al/al-4.png",
          "al/al-6.png",
          "al/al-8.png",
          "al/al-9.png",
          "al/al-10.png",
          "al/al-11.png",
          "al/al-12.png",
          "al/al-13.png",
          "al/al-15.png",
          "al/al-16.png",
          "al/al-23.png",
          "al/al-24.png",
          "al/al-25.png",
          "al/al-26.png",
          "al/al-27.png",
          "al/al-28.png",
          "al/al-29.png",
          "al/al-30.png",
          "al/al-33.png",
          "al/al-36.png",
          "al/al-38.png",
          "al/al-41.png",
          "al/al-42.png",
          "al/al-43.png",
          "al/al-44.png",
        ],
        groupName: 'Azur Lane',
        urlGroups: [
          {
            url: 'https://old.reddit.com/r/AzureLane/',
            urlName: 'Reddit',
            backgroundColor: Colors.red(1)
          },
          {
            url: 'https://azurlane.koumakan.jp/Azur_Lane_Wiki',
            urlName: 'Wiki',
            backgroundColor: Colors.purple(0)
          },
          {
            url: 'https://slaimuda.github.io/ectl/#/home',
            urlName: 'Tier List',
            backgroundColor: Colors.light_blue(1)
          },
        ],
      },
    ]
  },    
];
