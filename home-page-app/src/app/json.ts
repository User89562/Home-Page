
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

//TODO: add images for fgo, princess connect, konosuba and misc
export const STARTPAGE: StartPageLinks[] = [
  {
    tabName: "Home",
    linkGroups: [
      {
        media: [
          "assets/images/pbm3yulltvn51.jpg",
          "assets/images/ofas72yn1kt01.jpg",
          "assets/images/wallhaven-3z369y.jpg",
          "assets/images/wallhaven-6omo76.jpg",
        ],
        urlGroups: [
          {
            url: "https://old.reddit.com/",
            urlName: "Reddit",
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
          },
          {
            url: "https://www.virustotal.com/gui/",
            urlName: "Virus Total",
          },
        ],
      },
      {
        media: [
          "assets/images/wallhaven-575r67.jpg",
          "assets/images/wallhaven-28dro6.jpg",
          "assets/images/wallhaven-28zr39.jpg",
          "assets/images/wallhaven-72j8jo.jpg",
        ],
        urlGroups: [
          {
            url: "https://www.twitch.tv/directory/all",
            urlName: "Twitch",
          },
          {
            url: "https://www.youtube.com/",
            urlName: "Youtube",
          },
          {
            url: "https://open.spotify.com/",
            urlName: "Spotify",
          },
        ],
      },
      {
        media: [
          "assets/images/wallhaven-g7532l.jpg",
          "assets/images/wallhaven-g75dq3.jpg",
          "assets/images/wallhaven-j3wq5p.jpg",
          "assets/images/wallhaven-j3wqd5.jpg",
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
          "assets/images/wallhaven-m91x28.jpg",
          "assets/images/wallhaven-m9zovy.jpg",
          "assets/images/wallhaven-l3z9rp.jpg",
          "assets/images/wallhaven-k71rzd.jpg",
        ],
        urlGroups: [
          {
            url: "http://192.168.1.15:8090",
            urlName: "Downloader",
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
          "assets/images/wallhaven-v9oejp.jpg",
          "assets/images/wallhaven-l3zxvl.jpg",
          "assets/images/wallhaven-x8z3qo.jpg",
          "assets/images/wallhaven-wq1wlr.jpg",
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
          "assets/images/wallhaven-o3gz57.jpg",
          "assets/images/wallhaven-o3ym1p.jpg",
          "assets/images/wallhaven-pkl5pm.jpg",
          "assets/images/wallhaven-pkwq73.jpg",
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
          "assets/images/wallhaven-e78kjw.jpg",
          "assets/images/wallhaven-e79j6o.jpg",
          "assets/images/wallhaven-e79om8.jpg",
          "assets/images/wallhaven-dpkyqj.jpg",
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
          "assets/images/920126.jpg",
          "assets/images/555246.jpg",
          "assets/images/920116.jpg",
          "assets/images/920117.jpg",
          "assets/images/920122.jpg",
          "assets/images/920131.jpg",
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
          "assets/images/genshin1.jpg",
          "assets/images/genshin2.jpg",
          "assets/images/genshin3.jpg",
          "assets/images/genshin4.jpg",
          "assets/images/genshin5.jpg",
          "assets/images/genshin6.jpg",
          "assets/images/genshin7.jpg",
          "assets/images/genshin8.jpg",
          "assets/images/genshin9.png",
          "assets/images/genshin10.jpg",
          "assets/images/genshin11.jpg",
          "assets/images/genshin12.jpg",
        ],
        groupName: 'Genshin Impact',
        urlGroups: [
          {
            url: 'https://old.reddit.com/r/genshin_impact/',
            urlName: 'Main Reddit',
          },
          {
            url: 'https://old.reddit.com/r/genshin_impact_leaks/',
            urlName: 'Leaks Reddit',
          },
          {
            url: 'https://webstatic-sea.mihoyo.com/app/ys-map-sea/?lang=en-us#/map/2?shown_types=2,3,154&center=2747.00,786.00&zoom=-3.00',
            urlName: 'Map',
          },
          {
            url: 'https://docs.google.com/spreadsheets/d/1a--WPcWT7BOtw5J9TwJoRHEg_BAeT1mhAR0Fvdn_SZI/edit?usp=sharing',
            urlName: 'Google Doc',
          },
          {
            url: 'https://genshin.honeyhunterworld.com/',
            urlName: 'Daily Mat',
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
          "assets/images/league_of_legends1.jpg",
          "assets/images/league_of_legends2.jpg",
          "assets/images/league_of_legends3.jpg",
          "assets/images/league_of_legends4.jpg",
          "assets/images/league_of_legends5.png",
          "assets/images/league_of_legends6.png",
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
          "assets/images/gfl1.png",
          "assets/images/gfl2.png",
          "assets/images/gfl3.png",
          "assets/images/gfl4.png",
          "assets/images/gfl6.png",
          "assets/images/gfl7.png",
          "assets/images/gfl8.png",
        ],
        groupName: 'Girls\' Frontline',
        urlGroups: [
          {
            url: 'https://old.reddit.com/r/girlsfrontline/',
            urlName: 'Reddit',
          },
          {
            url: 'https://iopwiki.com/wiki/Girls\'_Frontline_Wiki',
            urlName: 'Wiki',
          },
          {
            url: 'https://docs.google.com/spreadsheets/d/1by5rcLdKXdhLClfVQ-FLvK_OM4Xko0CT9peKQwQCfXw/edit?usp=sharing',
            urlName: 'Info Doc',
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
            url: 'https://docs.google.com/document/d/1nRRyH9IH7dg7BRow8Y_hh2bNAlLxtpRB6cr_kzl_5NE/edit#',
            urlName: 'Next Ranking',
          },
        ],
      },
      {
        media: [
          "assets/images/fgo1.png",
          "assets/images/fgo2.png",
          "assets/images/fgo3.jpg",
          "assets/images/fgo4.png",
          "assets/images/fgo5.png",
          "assets/images/fgo6.jpg",
          "assets/images/fgo7.jpg",
          "assets/images/fgo8.png",
          "assets/images/fgo9.png",
          "assets/images/fgo10.png",
          "assets/images/fgo11.png",
          "assets/images/fgo12.jpg",
          "assets/images/fgo13.jpg",
          "assets/images/fgo14.png",
          "assets/images/fgo15.jpg",
          "assets/images/fgo16.png",
          "assets/images/fgo17.jpg",
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
          },
          {
            url: "https://material.io/resources/icons/?style=baseline",
            urlName: "Angular Icons",
          },
          {
            url: 'https://gamepress.gg/grandorder/',
            urlName: 'Gamepress',
          },
          {
            url: 'https://gamepress.gg/grandorder/event-guides',
            urlName: 'Events',
          },
          {
            url: 'https://shipfu.moe/fgo/',
            urlName: 'Pull Calculator',
          }
        ],
      },
      {
        media: [
          "assets/images/pricone1.jpg",
          "assets/images/pricone2.jpg",
          "assets/images/pricone3.jpg",
          "assets/images/pricone4.jpg",
          "assets/images/pricone5.jpg",
          "assets/images/pricone6.jpg",
          "assets/images/pricone7.png",
          "assets/images/pricone8.png",
          "assets/images/pricone9.jpg",
          "assets/images/pricone10.jpg",
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
            url: "https://docs.google.com/spreadsheets/d/18VjvDwBrTinuWtqbxUxo0BNOvFpmztFO2p2D03tUxdA/edit#gid=1114939808",
            urlName: "Ranking Recommendation",
          },
          {
            url: 'https://docs.qq.com/sheet/DWlhOaWJXYnZwVklT?tab=1ztn7s',
            urlName: 'Clan Battle Records',
          },
        ],
      },
      {
        media: [
          "assets/images/konosuba1.jpg",
          "assets/images/konosuba2.png",
          "assets/images/konosuba3.jpg",
          "assets/images/konosuba4.jpg",
          "assets/images/konosuba5.jpg",
          "assets/images/konosuba6.png",
          "assets/images/konosuba7.jpg",
          "assets/images/konosuba8.png",
          "assets/images/konosuba9.jpg",
          "assets/images/konosuba10.png",
          "assets/images/konosuba11.jpg",
        ],
        groupName: 'Konosuba',
        urlGroups: [
          {
            url: 'https://old.reddit.com/r/FantasticDays/',
            urlName: 'Reddit',
          },
          {
            url: 'https://konosuba.fandom.com/wiki/Konosuba:_Fantastic_Days',
            urlName: 'Wiki',
          },
        ],
      },
      {
        media: [
          "assets/images/wallhaven-z8zjdo.jpg",
          "assets/images/wallhaven-z8qldy.jpg",
          "assets/images/wallhaven-z8q59j.jpg",
          "assets/images/wallhaven-z8p1jy.jpg",
        ],
        groupName: 'Misc',
        urlGroups: [
          {
            url: 'https://old.reddit.com/r/gachagaming/',
            urlName: 'Gacha Gaming',
          },
          {
            url: 'https://docs.google.com/spreadsheets/d/1sIz4LP3j-BPCmR3MMeu9Ic5Uqi3NckflybfxRvWMk2U/edit?usp=sharing',
            urlName: 'Gachas Doc',
          },
        ],
      },       
    ],
  },
];
