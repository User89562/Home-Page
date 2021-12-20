import { LinkGroup } from './../start-page-json';
import { LocalStorageSettings } from "./local-storage-settings";

export interface SettingsForm {
    background: LocalStorageSettings;
    linkGroup: LocalStorageSettings;
}