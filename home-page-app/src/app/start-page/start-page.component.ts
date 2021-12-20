import { Router } from '@angular/router';
import { ModuleSettingsComponent } from './../custom-components/module-settings/module-settings.component';
import {Component, HostListener, OnInit } from '@angular/core';
import { STARTPAGE, StartPageLinks } from '../start-page-json';
import json_images_data from '../json/images.json'
import { RendererUtil } from '../utils/renderer-util';
import { SettingsUtil } from '../utils/settings-util';
import { MediaLink } from '../entities/media-link';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss'],
})

export class StartPageComponent implements OnInit {
  startPageLinks!: StartPageLinks[];
  assetsPath = 'assets/images/';

  visibility = '';
  chosenBackgrounds: string[] = [];
  selectedTabIndex = 0;

  jsonImages: any = json_images_data;
  jsonKeys = Object.keys(json_images_data);
  rendererUtil = new RendererUtil();
  settingsUtil = new SettingsUtil();

  constructor(private dialog: MatDialog, private router:Router) {

   }

  ngOnInit() {
    // retrieve user settings
    this.settingsUtil.getSettings();
    // set inital values based on settings
    this.visibility = this.settingsUtil.getBgVisibility();

    //image set settings:
    // background type: image or animation
    // default = image.json or animation.json -> normal
    // set2 = imageSet2.json or animationSet2.json -> ecchi
    // set3 = imageSet3.json or animationSet3.json -> hentai

    // array with backgrounds(within rendererUtil) for all tabs based on chosen background type & set
    this.rendererUtil.getAllBackgrounds(this.settingsUtil.getBgMediaType(), this.settingsUtil.getBgImageSet());

    //TODO: put link-group stuff also in rendererUtil
    this.startPageLinks = STARTPAGE;
    this.startPageLinks.forEach(startPageLink => {
      startPageLink.linkGroups.forEach(linkGroup => {
          if (this.jsonKeys.includes(linkGroup.jsonKey)){
            const linkGroupImages = this.jsonImages[linkGroup.jsonKey]
            linkGroup.selectedMedia = linkGroup.jsonKey + '/' +linkGroupImages![this.randomNumber(linkGroupImages?.length!)];
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

  displaySettings(): void {
    const dialogRef =this.dialog.open(ModuleSettingsComponent, {
      data: ''
    });

    dialogRef.afterClosed().subscribe(r => {
      if (r) {
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate(['/']);
      }
    });
  }

  

  tabChanged(event: number) {
    this.selectedTabIndex = event;
    //this.chosenBackground = this.backgroundUtils.retrieveBackgroundImage('', this.selectedTabIndex, this.jsonImages, this.jsonKeys);
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    event.preventDefault();
    if (event.key === 'Pause') {
      this.toggleVisibility();
    }
    
  }
}
