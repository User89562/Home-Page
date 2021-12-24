import { Colors } from "./colors";

export interface StartPageLinks {
  tabName: string;
  linkGroups: LinkGroup[];
}

export interface LinkGroup {
  jsonKey: string;
  selectedMedia?: string;
  groupName?: string;
  urlGroups: UrlGroup[];
}
//todo: add type + make url+urlName into an obj and an array
export interface UrlGroup {
  urls: Url[];
  type: string;
  menuName?: string;
  backgroundColor?: string;
}

export interface Url {
  url: string;
  name: string;
}
//TODO: restructure 'media' to be similar to background media
export const STARTPAGE: StartPageLinks[] = [
  {
    tabName: "Home",
    linkGroups: [
      {
        jsonKey: "root",
        urlGroups: [
          {
            urls: [{ url: "https://old.reddit.com/", name: "Reddit" }],
            type: "link",
            backgroundColor: Colors.red(1),
          },
          {
            urls: [
              {
                url: "https://www.livechart.me/schedule/tv",
                name: "Anime Season",
              },
            ],
            type: "link",
          },
          {
            urls: [{ url: "https://twitter.com/", name: "Twitter" }],
            type: "link",
          },
          {
            urls: [{ url: "https://www.google.com/gmail/", name: "Gmail" }],
            type: "link",
          },
          {
            urls: [{ url: "https://discord.com/login", name: "Discord" }],
            type: "link",
            backgroundColor: Colors.teal(1),
          },
          {
            urls: [
              { url: "https://www.virustotal.com/gui/", name: "Virus Total" },
            ],
            type: "link",
          },
        ],
      },
      {
        jsonKey: "root",
        urlGroups: [
          {
            urls: [
              { url: "https://www.twitch.tv/directory/all", name: "Twitch" },
            ],
            type: "link",
            backgroundColor: Colors.purple(1),
          },
          {
            urls: [{ url: "https://www.youtube.com/", name: "Youtube" }],
            type: "link",
          },
          {
            urls: [{ url: "https://open.spotify.com/", name: "Spotify" }],
            type: "link",
            backgroundColor: Colors.green(2),
          },
        ],
      },
      {
        jsonKey: "root",
        urlGroups: [
          {
            urls: [{ url: "https://www.amazon.ca/", name: "Amazon" }],
            type: "link",
          },
          {
            urls: [
              { url: "https://www.humblebundle.com/", name: "Humble Bundle" },
            ],
            type: "link",
          },
          {
            urls: [{ url: "https://www.rtings.com/", name: "Reviews" }],
            type: "link",
          },
        ],
      },
      {
        jsonKey: "root",
        urlGroups: [
          {
            urls: [{ url: "http://192.168.1.15:8090", name: "Downloader" }],
            type: "link",
            backgroundColor: Colors.indigo(1),
          },
          {
            urls: [{ url: "https://github.com/login", name: "Github" }],
            type: "link",
          },
          {
            urls: [{ url: "http://192.168.1.15:8081", name: "Git Lab" }],
            type: "link",
          },
        ],
      },
    ],
  },
  {
    tabName: "Developer",
    linkGroups: [
      {
        jsonKey: "root",
        groupName: "Angular",
        urlGroups: [
          {
            urls: [{ url: "https://angular.io/start", name: "Angular Wiki" }],
            type: "link",
          },
          {
            urls: [
              {
                url: "https://material.angular.io/components/categories",
                name: "Material",
              },
            ],
            type: "link",
          },
          {
            urls: [
              {
                url: "https://material.io/resources/icons/?style=baseline",
                name: "Angular Icons",
              },
            ],
            type: "link",
          },
        ],
      },
      {
        jsonKey: "root",
        urlGroups: [
          {
            urls: [
              {
                url: "https://material.io/resources/color/#!/?view.left=0&view.right=0",
                name: "Color Picker",
              },
            ],
            type: "link",
          },
          {
            urls: [{ url: "https://regexr.com/", name: "Regex Tester" }],
            type: "link",
          },
        ],
      },
      {
        jsonKey: "root",
        urlGroups: [
          {
            urls: [{ url: "https://kenney.nl/assets", name: "2-D Assets" }],
            type: "link",
          },
        ],
      },
    ],
  },
  {
    tabName: "PC",
    linkGroups: [
      {
        jsonKey: "lostark",
        groupName: "Lost Ark",
        urlGroups: [
          {
            urls: [
              { url: "https://old.reddit.com/r/lostarkgame/", name: "Reddit" },
            ],
            type: "link",
          },
          {
            urls: [
              {
                url: "https://lostarkdatabase.com/wiki/index.php?title=Main_Page",
                name: "Wiki",
              },
            ],
            type: "link",
          },
          {
            urls: [{ url: "https://lostarkhub.com/", name: "News" }],
            type: "link",
          },
        ],
      },
      {
        jsonKey: "genshin",
        groupName: "Genshin Impact",
        urlGroups: [
          {
            urls: [
              {
                url: "https://old.reddit.com/r/genshin_impact/",
                name: "Reddit",
              },
            ],
            type: "link",
            backgroundColor: Colors.red(1),
          },
          {
            urls: [
              {
                url: "https://old.reddit.com/r/genshin_impact_leaks/",
                name: "Leaks Reddit",
              },
            ],
            type: "link",
          },
          {
            urls: [
              {
                url: "https://webstatic-sea.mihoyo.com/app/ys-map-sea/?lang=en-us#/map/2?shown_types=2,3,154&center=2747.00,786.00&zoom=-3.00",
                name: "Map",
              },
            ],
            type: "link",
            backgroundColor: Colors.teal(2),
          },
          {
            urls: [
              {
                url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vRq-sQxkvdbvaJtQAGG6iVz2q2UN9FCKZ8Mkyis87QHFptcOU3ViLh0_PJyMxFSgwJZrd10kbYpQFl1/pubhtml#",
                name: "Builds",
              },
            ],
            type: "link",
            backgroundColor: Colors.indigo(1),
          },
          {
            urls: [
              {
                url: "https://docs.google.com/spreadsheets/d/1a--WPcWT7BOtw5J9TwJoRHEg_BAeT1mhAR0Fvdn_SZI/edit?usp=sharing",
                name: "Google Doc",
              },
            ],
            type: "link",
            backgroundColor: Colors.light_blue(2),
          },
          {
            urls: [
              {
                url: "https://genshin.honeyhunterworld.com/",
                name: "Database",
              },
            ],
            type: "link",
          },
          {
            urls: [
              {
                url: "https://spiral-abyss.appsample.com/",
                name: "Spiral Abyss",
              },
            ],
            type: "link",
          },
          {
            urls: [
              {
                url: "https://genshin-impact.fandom.com/wiki/Genshin_Impact_Wiki",
                name: "Wiki",
              },
            ],
            type: "link",
          },
        ],
      },
      {
        jsonKey: "leagueoflegends",
        groupName: "League of Legends",
        urlGroups: [
          {
            urls: [
              {
                url: "https://old.reddit.com/r/leagueoflegends/",
                name: "Reddit",
              },
            ],
            type: "link",
          },
          {
            urls: [
              {
                url: "https://leagueoflegends.fandom.com/wiki/League_of_Legends_Wiki",
                name: "Wiki",
              },
            ],
            type: "link",
          },
          {
            urls: [{ url: "https://u.gg/", name: "u.gg Builds" }],
            type: "link",
          },
          {
            urls: [{ url: "https://na.op.gg/", name: "OP.gg" }],
            type: "link",
          },
        ],
      },
    ],
  },
  {
    tabName: "Mobile",
    linkGroups: [
      {
        jsonKey: "gfl",
        groupName: "Girls' Frontline",
        urlGroups: [
          {
            urls: [
              {
                url: "https://old.reddit.com/r/girlsfrontline/",
                name: "Reddit",
              },
            ],
            type: "link",
            backgroundColor: Colors.red(1),
          },
          {
            urls: [
              {
                url: "https://iopwiki.com/wiki/Girls'_Frontline_Wiki",
                name: "Wiki",
              },
            ],
            type: "link",
          },
          {
            urls: [
              {
                url: "https://docs.google.com/spreadsheets/d/1by5rcLdKXdhLClfVQ-FLvK_OM4Xko0CT9peKQwQCfXw/edit?usp=sharing",
                name: "Main",
              },
              {
                url: "https://docs.google.com/spreadsheets/d/1MKEvSx9zcgvWnRhv9IoL_-XUuHOq5ESFCSlJkxuE6OU/edit#gid=0",
                name: "Armory",
              },
              {
                url: "https://docs.google.com/spreadsheets/d/1iA07L2CvAgJkbRFvUGQToyO9RrZjJnNyAAtpKDD-Dvc/edit?usp=sharing",
                name: "Ranking Diary",
              },
            ],
            type: "menu",
            menuName: "Docs",
            backgroundColor: Colors.light_blue(2),
          },
          {
            urls: [
              { url: "https://gfl.matsuda.tips/blog/", name: "Matsuda" },
              {
                url: "https://gamepress.gg/girlsfrontline/",
                name: "Gamerpress",
              },
              { url: "http://dmesse.egloos.com/3568507", name: "DMesse" },
            ],
            type: "menu",
            menuName: "Blogs",
          },
          {
            urls: [
              {
                url: "https://aaeeschylus.github.io/main.html",
                name: "Recipe Calculator",
              },
              {
                url: "https://gfgfork.github.io/gf/main.html",
                name: "Logistics Calculator",
              },
            ],
            type: "menu",
            menuName: "Cals",
          },
          {
            urls: [
              {
                url: "https://docs.google.com/spreadsheets/d/10LJdksnM3zipOb72IneJD7WVp3765JYJEGg0LnodzDI/edit#gid=516072763",
                name: "T-doll Analysis",
              },
            ],
            type: "link",
          },
          {
            urls: [
              {
                url: "https://pengupengupengu.github.io/gflmaps/",
                name: "Maps",
              },
            ],
            type: "link",
            backgroundColor: Colors.teal(1),
          },
          {
            urls: [
              {
                url: "https://docs.google.com/spreadsheets/d/1TjHC4Vaed8dFqSkagM6teNlmBjFGPiUbTRnTnvxnnu4/edit#gid=296924292",
                name: "Boss Strategies",
              },
            ],
            type: "link",
          },
          {
            urls: [
              {
                url: "https://docs.google.com/document/d/1-ETBAG_AfsIrEURvd5fXnmxHD02urvUuVcOQVCIqa6c/edit#heading=h.9bln0wx8twyq",
                name: "Next Ranking",
              },
            ],
            type: "link",
            backgroundColor: Colors.indigo(2),
          },
        ],
      },
      /*{
        jsonKey: "fgo",
        groupName: "Fate Grand Order",
        urlGroups: [
          {
            urls: [
              { url: "https://old.reddit.com/r/grandorder/", name: "Reddit" },
            ],
            type: "link",
          },
          {
            urls: [{ url: "https://grandorder.wiki/Main_Page", name: "Wiki" }],
            type: "link",
            backgroundColor: Colors.green(1),
          },
          {
            urls: [
              { url: "https://gamepress.gg/grandorder/", name: "Gamepress" },
            ],
            type: "link",
            backgroundColor: Colors.teal(1),
          },
          {
            urls: [
              {
                url: "https://gamepress.gg/grandorder/event-guides",
                name: "Events",
              },
            ],
            type: "link",
            backgroundColor: Colors.indigo(1),
          },
          {
            urls: [{ url: "https://shipfu.moe/fgo/", name: "Pull Calculator" }],
            type: "link",
          },
        ],
      },*/
      {
        jsonKey: "priconne",
        groupName: "Princess Connect",
        urlGroups: [
          {
            urls: [
              { url: "https://old.reddit.com/r/Priconne/", name: "Reddit" },
            ],
            type: "link",
          },
          {
            urls: [
              { url: "https://docs.qq.com/sheet/DWlhOaWJXYnZwVklT?tab=1ztn7s",
                name: "CB Records", 
              },
              {
                url: "https://docs.google.com/spreadsheets/d/1JXbzIF4dWqzmmBwAxuNp74_v8eSM0tuDehWZtN9-lxY/edit#gid=504351475",
                name: "Unique Equip",
              },
              { url: "https://docs.google.com/spreadsheets/d/1b3Vjcc-wfrVfoqI93OMGLZPrJaxpclnBAerPXZdAfc0/edit#gid=57366839", name: "Guides" },
            ],
            type: "menu",
            menuName: "Docs",
          },
          {
            urls: [{ url: "https://pcrdfans.com/en/battle", name: "PvP" }],
            type: "link",
            backgroundColor: Colors.indigo(2),
          },
          {
            urls: [
              {
                url: "https://docs.google.com/spreadsheets/d/18VjvDwBrTinuWtqbxUxo0BNOvFpmztFO2p2D03tUxdA/edit#gid=1114939808",
                name: "Ranking Recommendation",
              },
            ],
            type: "link",
            backgroundColor: Colors.light_blue(2),
          },
          {
            urls: [
              {
                url: "https://fansubbing.com/priconne-tower-of-luna-guide/",
                name: "Luna Tower",
              },
            ],
            type: "link",
          },
        ],
      },
      {
        jsonKey: "e7",
        groupName: "Epic Seven",
        urlGroups: [
          {
            urls: [
              { url: "https://old.reddit.com/r/EpicSeven/", name: "Reddit" },
            ],
            type: "link",
            backgroundColor: Colors.red(1),
          },
          {
            urls: [
              {
                url: "https://docs.google.com/document/d/1ZQFAPU5y5BVbLgWdkegOnkcil4bZOUINdjCmTHaNuH0/edit",
                name: "New Player",
              },
            ],
            type: "link",
          },
          {
            urls: [
              {
                url: "https://docs.google.com/presentation/d/1hFz8lTVCNdv8wUE1qbUYKd42iQMCesLpeFgNxmJ3zfc/preview#slide=id.g4e4c6ec9ea_0_145",
                name: "Raid",
              },
            ],
            type: "link",
          },
          {
            urls: [{ url: "https://www.epic7stats.com", name: "Pvp DB" }],
            type: "link",
          },
          {
            urls: [{ url: "https://yufine.co/", name: "Progression Guides" }],
            type: "link",
            backgroundColor: Colors.light_blue(2),
          },
          {
            urls: [{ url: "https://epic7x.com/tier-list/", name: "Tier" }],
            type: "link",
            backgroundColor: Colors.red(2),
          },
          {
            urls: [
              {
                url: "https://e7herder.com/tools/model-viewer",
                name: "Model Viewer",
              },
            ],
            type: "link",
          },
          {
            urls: [{ url: "https://epicsevendb.com/", name: "Database" }],
            type: "link",
          },
        ],
      },
      {
        jsonKey: "bluearchive",
        groupName: "Blue Archive",
        urlGroups: [
          {
            urls: [
              {
                url: "https://old.reddit.com/r/BlueArchive/",
                name: "Reddit",
              },
            ],
            type: "link",
            backgroundColor: Colors.red(1),
          },
          {
            urls: [
              {
                url: "https://bluearchive.wiki/wiki/Main_Page",
                name: "Wiki",
              },
            ],
            type: "link",
          },
          {
            urls: [
              {
                url: "https://dolicon-bluearchive.netlify.app/",
                name: "Database",
              },
            ],
            type: "link",
          },
          {
            urls: [
              {
                url: "https://docs.google.com/document/d/1IrJ1z9Lsn7QY59xKhF9blcqSxIevKfuB/preview?rtpof=true&sd=true&pru=AAABfSWyFw0*NVv6Q-hnr9RVBoX5GH2fZg",
                name: "General",
              },
            ],
            type: "link",
          },
          {
            urls: [
              {
                url: "https://docs.google.com/document/d/1lbXudYH5w3dLdKWxDM4HODZPeuKDRJqOPiU5FkhjvwE/edit",
                name: "PvP",
              },
            ],
            type: "link",
          },
          {
            urls: [
              {
                url: "https://docs.google.com/document/d/1bvYGwIh-9o-2JQ4Q2MQXtsL0peiCPrRuw0l3HQmTrZ0/edit",
                name: "Raid",
              },
            ],
            type: "link",
          },
        ],
      },
      {
        jsonKey: "root",
        groupName: "Misc",
        urlGroups: [
          {
            urls: [
              {
                url: "https://old.reddit.com/r/gachagaming/",
                name: "Gacha Gaming",
              },
            ],
            type: "link",
            backgroundColor: Colors.red(1),
          },
          {
            urls: [
              {
                url: "https://docs.google.com/spreadsheets/d/1sIz4LP3j-BPCmR3MMeu9Ic5Uqi3NckflybfxRvWMk2U/edit?usp=sharing",
                name: "Gachas Doc",
              },
            ],
            type: "link",
          },
        ],
      },
    ],
  },
  {
    tabName: "",
    linkGroups: [
      /*{
        jsonKey: "root",
        groupName: "Magicami",
        urlGroups: [
          {
            urls: [
              { url: "https://old.reddit.com/r/magicami/", name: "Reddit" },
            ],
            type: "link",
            backgroundColor: Colors.red(1),
          },
          {
            urls: [
              {
                url: "https://docs.google.com/document/d/11-Bml0nbBUMw9sCQDAAwfyb_ve3kCvqvKmJEuP5N2-Q/edit#heading=h.8k3xvzzgexj1",
                name: "Beginner's Guide",
              },
            ],
            type: "link",
            backgroundColor: Colors.light_blue(2),
          },
          {
            urls: [
              { url: "https://appmedia.jp/magicami/3948385", name: "JP wiki" },
            ],
            type: "link",
          },
          {
            urls: [
              {
                url: "https://eight04.github.io/mgcm-skill-data/",
                name: "Damage Simulation",
              },
            ],
            type: "link",
          },
          {
            urls: [
              {
                url: "https://docs.google.com/document/d/e/2PACX-1vTosG4UlrZ_2zsunGSb8tIpfYDH3bcuUO-fPq00GSZfftPI825k-jX500gOWP4084nECChjd9uOqFda/pub",
                name: "Strat Guide",
              },
            ],
            type: "link",
          },
        ],
      },*/
      {
        jsonKey: "al",
        groupName: "Azur Lane",
        urlGroups: [
          {
            urls: [
              { url: "https://old.reddit.com/r/AzureLane/", name: "Reddit" },
            ],
            type: "link",
            backgroundColor: Colors.red(1),
          },
          {
            urls: [
              {
                url: "https://azurlane.koumakan.jp/Azur_Lane_Wiki",
                name: "Wiki",
              },
            ],
            type: "link",
            backgroundColor: Colors.purple(0),
          },
          {
            urls: [
              {
                url: "https://slaimuda.github.io/ectl/#/home",
                name: "Tier List",
              },
            ],
            type: "link",
            backgroundColor: Colors.light_blue(1),
          },
        ],
      },
    ],
  },
];
