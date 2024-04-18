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
            urls: [{ url: "http://192.168.1.139:8095", name: "Downloader" }],
            type: "link",
            backgroundColor: Colors.indigo(1),
          },
          {
            urls: [{ url: "https://github.com/login", name: "Github" }],
            type: "link",
          },
          {
            urls: [{ url: "http://192.168.1.139", name: "Git Lab" }],
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
        groupName: "Godot",
        urlGroups: [
          {
            urls: [{ url: "https://docs.godotengine.org/en/stable/index.html", name: "Documentation" }],
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
    tabName: "Games",
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
              { url: "https://www.lostarkmarket.online/north-america-east/crafting/special/fusion-material/superior-oreha-fusion-material-4-2", name: "Market" },
            ],
            type: "link",
          },

          {
            urls: [
              {
                url: "https://lostmerchants.com/",
                name: "Merchants",
              },
            ],
            type: "link",
          },
          {
            urls: [
              {
                url: "https://loa-todo.com/engrave",
                name: "Engraving Planner",
              },
              {
                url: "https://www.mococo.gg/alpha-stone",
                name: "Ability Stone Cal 2",
              },
              {
                url: "https://maxroll.gg/lost-ark/upgrade-calculator",
                name: "Honing Cal",
              },
            ],
            type: "menu",
            menuName: "Tools",
            backgroundColor: Colors.teal(2),
          },
          {
            urls: [{ url: "https://maxroll.gg/lost-ark", name: "Maxroll" }],
            type: "link",
            backgroundColor: Colors.light_blue(1),
          },
          {
            urls: [
              {
                url: "https://docs.google.com/spreadsheets/d/1N4Dpo-Z_BPiMNaaVgVx0EGtWB7AMKOUEK-RGDwCzJTE/edit?usp=sharing",
                name: "Currency Exchange",
              },
              {
                url: "https://docs.google.com/spreadsheets/d/11hAUi2OUd4aJR5IRvFwyUlq7VDPMS_brFFGWRLitxqU/edit?usp=sharing",
                name: "Boss Mechanics",
              },
              {
                url: "https://docs.google.com/spreadsheets/d/1zI7Wtggb2ZyFnN_S1Ht5Sv1giQBOk_tFQ1EbkZsXbPw/edit?usp=sharing",
                name: "Tracking",
              },
              {
                url: "https://docs.google.com/spreadsheets/d/1QcnJXKFzTNdyCOWA5CWzbLFiBlRGA_hJhxUvUXuAP6E/edit#gid=207129209",
                name: "Raid/Bus",
              },
              {
                url: "https://docs.google.com/spreadsheets/d/1YQpWt8iOK6yO5_7r3rvZZKkoRy8Z0aEAPHy11gYZZQ8/edit#gid=692731892",
                name: "Raid Loot",
              },
            ],
            type: "menu",
            menuName: "Docs",
            backgroundColor: Colors.light_blue(2),
          },
          {
            urls: [
              {
                
                url: "https://www.lostark.nexus/",
                name: "Community Guides",
              },
              {
                url: "https://docs.google.com/document/d/1AiPHCB1oa56fM-l0B8ao-11-JYAdiA3qFtS339Dg3dQ/edit",
                name: "Aeromancer",
              },
              {
                url: "https://docs.google.com/document/d/1MWWgdrTIJBj0WXmAqE4DspVobgMlDx4aaI7ZwCj1-AM/edit",
                name: "Arcana",
              },
              {
                url: "https://docs.google.com/document/d/1OlCBWkiQRt0odr6BoOotxTpzhDcoEAicv8vJdzJIViI/edit",
                name: "Artist",
              },
              {
                url: "https://docs.google.com/document/d/1hgR9_xMPaB95NUPgEx0hwgE9vjAQQCeVK6S74ZDnR58/edit#",
                name: "Bard",
              },
              {
                url: "https://docs.google.com/document/d/1ZLOhLB9bb9AN_Q7_eKukUnqI5E5w5Fb1oqryIA1ml8A/edit?usp=sharing",
                name: "Deathblade",
              },
              {
                url: "https://docs.google.com/document/d/1Dr4egW6_YR7JGkukK-pbPXg3ckbfE31iuMxOSSudD64/edit",
                name: "Gunslinger",
              },
              {
                url: "https://docs.google.com/document/d/1EsAOOw-QXbq5NiPxeAISsII3zE6ZSgyq1WIVgZ8-q7U/edit",
                name: "Reaper",
              },
              {
                url: "https://docs.google.com/document/d/1Da0MFsuencYbmcFMo6cUPBEGubavgsebeYtR7iCtaoQ/edit#heading=h.rkp1tcuxru48",
                name: "Souleater",
              }, 
              {
                url: "https://docs.google.com/document/d/1hZuP7TRwvaNDBnt7QKZJB-TdJLKvgtRdxhQr104l5Qg/edit",
                name: "Slayer",
              },              
              {
                url: "https://docs.google.com/document/d/12IcR8HrywQQhhThnGZxz-Gsq4KryrT5aKggGcgkX9bA/edit",
                name: "Soulfist",
              },
              
              
              
            ],
            type: "menu",
            menuName: "Class",
            backgroundColor: Colors.light_blue(1),
          },
          {
            urls: [{ url: "https://lostark-helper.com/checklist", name: "To-Do" }],
            type: "link",
            backgroundColor: Colors.indigo(1),
          },
          /*{
            urls: [{ url: "https://ark.bynn.kr/to-do", name: "To-Do" }],
            type: "link",
            backgroundColor: Colors.indigo(1),
          },*/
          
        ],
      },/*
      {
        jsonKey: "gfl",
        groupName: "Neural Cloud",
        urlGroups: [
          {
            urls: [
              {
                url: "https://old.reddit.com/r/GFLNeuralCloud/",
                name: "Reddit",
              },
            ],
            type: "link",
            backgroundColor: Colors.red(1),
          },
          {
            urls: [
              {
                url: "https://nalu.wiki/neuralcloud",
                name: "Wiki",
              },
            ],
            type: "link",
          },
          {
            urls: [
              {
                url: "https://docs.google.com/spreadsheets/d/1oNBX0zZdaNsGYwxA6cxvh58X6nvUSlcaKf9lTmjF6Yg/edit#gid=4312925",
                name: "Tier List",
              },
            ],
            type: "link",
            backgroundColor: Colors.light_blue(2),
          },
        ],
      },*/
      /*{
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
      },*/
      {
        jsonKey: "starrail",
        groupName: "Honkai: Star Rail",
        urlGroups: [
          {
            urls: [
              {
                url: "https://old.reddit.com/r/HonkaiStarRail/",
                name: "Reddit",
              },
            ],
            type: "link",
          },
          {
            urls: [
              {
                url: "https://old.reddit.com/r/HonkaiStarRail_leaks/",
                name: "Reddit Leaks",
              },
            ],
            type: "link",
          },
          {
            urls: [
              {
                url: "https://act.hoyolab.com/sr/app/interactive-map/index.html",
                name: "Map",
              },
            ],
            type: "link",
          },
          {
            urls: [
              {
                url: "https://act.hoyolab.com/bbs/event/signin/hkrpg/index.html?act_id=e202303301540311&hyl_auth_required=true&hyl_presentation_style=fullscreen&lang=en&plat_type=pc",
                name: "Checkin",
              },
            ],
            type: "link",
          },
          {
            urls: [
              {
                url: "https://www.prydwen.gg/star-rail/tier-list/",
                name: "Prydwen",
              },
            ],
            type: "menu",
            menuName: "Tier Lists",
            backgroundColor: Colors.light_blue(2),
          },
        ],
      },

      /*
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
      },*/
     /* {
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
      {
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
      },
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
      */
      
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
      /*
      {
        jsonKey: "counterside",
        groupName: "CounterSide",
        urlGroups: [
          {
            urls: [
              {
                url: "https://old.reddit.com/r/CounterSide/",
                name: "Reddit SEA",
              },
            ],
            type: "link",
            backgroundColor: Colors.red(1),
          },
          {
            urls: [
              {
                url: "https://old.reddit.com/r/CounterSideGlobal/",
                name: "Reddit Global",
              },
            ],
            type: "link",
            backgroundColor: Colors.red(1),
          },
          {
            urls: [
              {
                url: "https://www.prydwen.gg/counter-side/tier-list",
                name: "Tier",
              },
            ],
            type: "link",
          },
          {
            urls: [
              {
                url: "https://www.prydwen.gg/counter-side/guides/",
                name: "Guides",
              },
            ],
            type: "link",
          },
          {
            urls: [
              {
                url: "https://docs.google.com/document/d/1KkxbQhrvAlpqF3h15j_PCCxxBDONTWXU1um9ahGNJHA/edit",
                name: "Branch Building",
              },
              {
                url: "https://docs.google.com/spreadsheets/d/1oD-E1EB_ayD7ZCuZDJeNgrayQr770qQSn6DGqnCZJwk/edit#gid=1252905051",
                name: "Event Timeline",
              },
            ],
            type: "menu",
            menuName: "Docs",
          },
        ],
      },*/
      /*{
        jsonKey: "nikke",
        groupName: "Nikke",
        urlGroups: [
          {
            urls: [
              { url: "https://old.reddit.com/r/NikkeMobile/", name: "Reddit" },
            ],
            type: "link",
            backgroundColor: Colors.red(1),
          },
          {
            urls: [
              {
                url: "https://www.prydwen.gg/nikke/guides/",
                name: "Guides",
              },
              {
                url: "https://www.prydwen.gg/nikke/tier-list/",
                name: "Tier List",
              },
            ],
            type: "menu",
            menuName: "Prydwen",
            backgroundColor: Colors.teal(2),
          },
          {
            urls: [
              {
                url: "https://nikke.gg/guides/",
                name: "Guides",
              },
              {
                url: "https://nikke.gg/tier-list/",
                name: "Tier List",
              },
              {
                url: "https://nikke.gg/interception-overview/",
                name: "Interception",
              },
              {
                url: "https://nikke.gg/skill-priority-guide/",
                name: "Skill Prio",
              },
            ],
            type: "menu",
            menuName: "Nikke.gg",
            backgroundColor: Colors.purple(1),
          },
        ],
      },*/
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
                url: "https://azurlane.koumakan.jp/wiki/Azur_Lane_Wiki",
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

     
      {
        jsonKey: "root",
        groupName: "Misc",
        urlGroups: [
          {
            urls: [
              { url: "https://user89562.github.io/venus-arch/", name: "Hydrus Web Viewer" },
            ],
            type: "link",
            backgroundColor: Colors.red(1),
          },
          {
            urls: [
              { url: "https://github.com/AUTOMATIC1111/stable-diffusion-webui", name: "Automatic Main" },
              { url: "https://github.com/vladmandic/automatic", name: "Vlad Fork" },
            ],
            type: "menu",
            menuName: "Github Repos",
            backgroundColor: Colors.teal(1),
          },
          {
            urls: [
              { url: "http://127.0.0.1:7860/", name: "Stable Diffusion Web Ui" },
            ],
            type: "link",
            backgroundColor: Colors.teal(1),
          },
          {
            urls: [
              { url: "https://rentry.org/voldy", name: "AI Guides" },
              { url: "https://www.sdcompendium.com/doku.php?id=weekly_news_0093", name: "SD Compendium" },
            ],
            type: "menu",
            menuName: "Info",
            backgroundColor: Colors.light_blue(1),
          },
          {
            urls: [
              { url: "https://civitai.com/", name: "Civitai Models" },
            ],
            type: "link",
            backgroundColor: Colors.purple(1),
          },
        ],
      },
    ],
  },
];
