import { BackgroundUtil, MediaLink } from './../utils/background-util';
import {Component, HostListener, OnInit } from '@angular/core';
import { STARTPAGE, StartPageLinks } from '../start-page-json';
import json_data from '../images.json'

class LocalStorageSettings {
  constructor(
    public visibility: string,
    public backgroundType: string,
  ){}
}

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss'],
})

export class StartPageComponent implements OnInit {
  startPageLinks!: StartPageLinks[];
  assetsPath = 'assets/images/';
  localStorageName: string = 'local-home-page'
  visibility = '';
  chosenBackground!: MediaLink;
  selectedTabIndex = 0;
  localSettings!: LocalStorageSettings;
  backgroundUtils = new BackgroundUtil();
  jsonImages: any = json_data;
  jsonKeys = Object.keys(json_data);

  constructor() { }

  ngOnInit() {
    //set stuff in localstorage if there isn't anything there
    if (!localStorage.getItem(this.localStorageName)) { 
      //set default options
      localStorage.setItem(this.localStorageName, JSON.stringify(new LocalStorageSettings('visible','d')));
    } 
    //retrieve info from local storage
    this.localSettings = JSON.parse(localStorage.getItem(this.localStorageName) || '');

 
    this.visibility = this.localSettings.visibility;

    this.chosenBackground = this.backgroundUtils.retrieveBackgroundImage(this.localSettings.backgroundType, 0, this.jsonImages, this.jsonKeys);
    this.startPageLinks = STARTPAGE;

    this.startPageLinks.forEach(startPageLink => {
      startPageLink.linkGroups.forEach(linkGroup => {
          if (this.jsonKeys.includes(linkGroup.jsonKey)){
            const linkGroupImages = this.jsonImages[linkGroup.jsonKey]
            if (linkGroup.jsonKey == 'root') {
              linkGroup.selectedMedia = linkGroupImages![this.randomNumber(linkGroupImages?.length!)];
            } else {
              linkGroup.selectedMedia = linkGroup.jsonKey + '/' +linkGroupImages![this.randomNumber(linkGroupImages?.length!)];
            }
            
          }        
      });
    });    
  }

  randomNumber(max: number): number {
    const min = 0;
    return Math.floor(Math.random() * (max - min) + min);
  }

  toggleVisibility(): void {
    if (this.visibility === 'visible') {
      this.visibility = 'hidden';
    } else {
      this.visibility = 'visible';
    }
  }

  toggleBackgroundType(): void {

  }

  

  tabChanged(event: number) {
    this.selectedTabIndex = event;
    this.chosenBackground = this.backgroundUtils.retrieveBackgroundImage(this.localSettings.backgroundType, this.selectedTabIndex, this.jsonImages, this.jsonKeys);
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    event.preventDefault();
    if (event.key === 'Pause') {
      this.toggleVisibility();
    }
    
  }
}
