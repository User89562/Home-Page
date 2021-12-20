import { LocalStorageSettings } from "../entities/local-storage-settings";


export class SettingsUtil {
    bgStorageName: string = 'background-settings';
    lgStorageName: string = 'link-group-settings';
    bgSettings: LocalStorageSettings;
    lgSettings: LocalStorageSettings;

    constructor(){
        this.bgSettings = new LocalStorageSettings('visible','default', 'image');
        this.lgSettings = new LocalStorageSettings('visible','default', 'image');
    }

    getSettings(): void {

      //set stuff in localstorage for background
      if (!localStorage.getItem(this.bgStorageName)) { 
          //set default options
          localStorage.setItem(this.bgStorageName, JSON.stringify(this.bgSettings));
      }
      //retrieve info from local storage
      this.bgSettings = JSON.parse(localStorage.getItem(this.bgStorageName) || '');

      if (!localStorage.getItem(this.lgStorageName)) {
        localStorage.setItem(this.lgStorageName, JSON.stringify(this.lgSettings));
      }

      //retrieve info from local storage
      this.lgSettings = JSON.parse(localStorage.getItem(this.lgStorageName) || '');

    }

    setBackgroundStorage(backgroundSetting: LocalStorageSettings) {
      localStorage.setItem(this.bgStorageName, JSON.stringify(backgroundSetting));
    }

    setLinkgroupStorage(linkgroupSetting: LocalStorageSettings) {
      localStorage.setItem(this.lgStorageName, JSON.stringify(linkgroupSetting));
    }

    //Background gets
    getBgVisibility(): string {
        return this.bgSettings.visibility;
    }

    getBgImageSet(): string {
        return this.bgSettings.imageSet;
    }

    getBgMediaType(): string {
        return this.bgSettings.mediaType;
    }

    //Link group gets
    getLgVisibility(): string {
      return this.lgSettings.visibility;
    }

    getLgImageSet(): string {
        return this.lgSettings.imageSet;
    }

    getLgMediaType(): string {
        return this.lgSettings.mediaType;
    }
}