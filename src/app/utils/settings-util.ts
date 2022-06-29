import { StartPageLinks } from './../start-page-json';
import { TabBackground } from './../entities/tab-ground';
import { LocalStorageSettings } from "../entities/local-storage-settings";


export class SettingsUtil {
    bgStorageName: string = 'background-settings';
    lgStorageName: string = 'link-group-settings';
    tabBackgroundName: string = 'tab-backgrounds';
    linkGroupName: string = 'link-groups';
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

      if (!localStorage.getItem(this.lgStorageName)) {
        localStorage.setItem(this.lgStorageName, JSON.stringify(this.lgSettings));
      }

      //retrieve info from local storage
      this.bgSettings = JSON.parse(localStorage.getItem(this.bgStorageName) || '');
      this.lgSettings = JSON.parse(localStorage.getItem(this.lgStorageName) || '');
    }

    getTabBackgroundStorage(): TabBackground[] {
      if (localStorage.getItem(this.tabBackgroundName)){
        return JSON.parse(localStorage.getItem(this.tabBackgroundName) || '')
      }
      return [];
    }

    getLinkGroupStorage(): StartPageLinks[] {
      if (localStorage.getItem(this.linkGroupName)){
        return JSON.parse(localStorage.getItem(this.linkGroupName) || '')
      }
      return [];
    }

    setTabBackgroundSettings(backgroundSetting: LocalStorageSettings) {
      localStorage.setItem(this.bgStorageName, JSON.stringify(backgroundSetting));
    }

    setLinkgroupSettings(linkgroupSetting: LocalStorageSettings) {
      localStorage.setItem(this.lgStorageName, JSON.stringify(linkgroupSetting));
    }

    setTabBackgroundStorage(bg: TabBackground[]): void {
      localStorage.setItem(this.tabBackgroundName, JSON.stringify(bg));
    }

    setLinkgroupStorage(spl: StartPageLinks[]): void {
      localStorage.setItem(this.linkGroupName, JSON.stringify(spl));
    }

    removeTabBackgroundStorage(): void {
      localStorage.removeItem(this.tabBackgroundName);
    }

    removeLinkgroupStorage(): void {
      localStorage.removeItem(this.linkGroupName);
    }

    //Background gets
    getBgVisibility(): string {
        return this.bgSettings.visibility;
    }

    getBgJsonSet(): string {
        return this.bgSettings.jsonSet;
    }

    getBgMediaType(): string {
        return this.bgSettings.mediaType;
    }

    //Link group gets
    getLgVisibility(): string {
      return this.lgSettings.visibility;
    }

    getLgJsonSet(): string {
        return this.lgSettings.jsonSet;
    }

    getLgMediaType(): string {
        return this.lgSettings.mediaType;
    }
}