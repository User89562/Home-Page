import { StartPageLinks, STARTPAGE } from "./../start-page-json";
import { BACKGROUND_MEDIA } from "../background-json";
import { BackgroundMedia } from "../entities/background-media";
import { EnumUtil } from "./enum-util";
import { JsonUtil } from "./json-util";

class TabBackground {
  constructor(public tabIndex: number, public background: string) {}
}

export class RendererUtil {
  backgrounds: BackgroundMedia[] = BACKGROUND_MEDIA;
  enumUtil = new EnumUtil();
  jsonUtil = new JsonUtil();
  dayOfMonth: number;
  rootNums: number[] = []; // help ensure that none of the 'root' images are duplicated

  constructor() {
    this.dayOfMonth = new Date().getDate();
  }

  //ie. media type = image, jsonSet = default
  // background url = assets/image/default/picturename.extension
  getAllBackgrounds(mediaType: string, jsonSet: string): TabBackground[] {
    let bgs: TabBackground[] = [];
    //retrieve the correct json file based on background type and json set selected
    const jsonData = this.jsonUtil.retrieveJson(mediaType, jsonSet);
    const jsonKeys = Object.keys(jsonData);

    this.backgrounds.forEach((element) => {
      let links: any;
      let path = "";

      if (jsonKeys.includes(element.jsonKey)) {
        
        links = jsonData[element.jsonKey];
        path = mediaType + "/" + jsonSet + "/";
      } else {
        // if key isn't found in the jsonSet go to the default image set
        const data = this.jsonUtil.getDefaultSet();
        links = data[element.jsonKey];
        path = "image/default/";
      }

      let ranNumber = this.randomNumber(
        links?.length!,
        element.jsonKey
      );

      bgs.push(
        new TabBackground(
          element.tabIndex,
          "assets/" +
            path +
            element.jsonKey +
            "/" +
            links[ranNumber]
        )
      );
    });
    return bgs;
  }

  //ie. media type = image, jsonSet = default
  // link group url = assets/image/default/picturename.extension
  getLinkGroups(mediaType: string, jsonSet: string): StartPageLinks[] {
    let spl: StartPageLinks[] = STARTPAGE;

    const jsonData = this.jsonUtil.retrieveJson(mediaType, jsonSet);
    const jsonKeys = Object.keys(jsonData);

    spl.forEach((startPageLink) => {
      startPageLink.linkGroups.forEach((linkGroup) => {
        let linkGroupImages: any;
        let path = "";
        if (jsonKeys.includes(linkGroup.jsonKey)) {
          linkGroupImages = jsonData[linkGroup.jsonKey];
          path = mediaType + "/" + jsonSet + "/";
        } else {
          // if key isn't found in the jsonSet go to the default image set
          const data = this.jsonUtil.getDefaultSet();
          linkGroupImages = data[linkGroup.jsonKey];
          path = "image/default/";
        }
    
        let ranNumber = this.randomNumber(
          linkGroupImages?.length!,
          linkGroup.jsonKey
        );

        // if jsonkey is root then set the random number to the array
        if (linkGroup.jsonKey === "root") {
          this.rootNums.push(ranNumber);
        }

        linkGroup.selectedMedia =
          "assets/" +
          path +
          linkGroup.jsonKey +
          "/" +
          linkGroupImages![ranNumber];
      });
    });
    return spl;
  }

  getBackground(index: number, backgrounds: TabBackground[]): string {
    const bg = backgrounds.find((t) => t.tabIndex === index);
    if (bg) {
      return bg.background;
    }
    return backgrounds.find((t) => t.tabIndex === 0)?.background || "";
  }

  //recurison to ensure 'root' jsonkey items don't contain the same number
  randomNumber(max: number, jsonKey: string): number {
    const min = 0;
    let rand = Math.floor(Math.random() * (max - min) + min);
    if (jsonKey === "root" && this.rootNums.includes(rand)) {
      this.randomNumber(max, jsonKey);
    }

    return Math.floor(Math.random() * (max - min) + min);
  }
}
