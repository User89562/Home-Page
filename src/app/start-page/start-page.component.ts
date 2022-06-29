import { RendererUtil } from './../utils/renderer-util';
import { TabBackground } from './../entities/tab-ground';
import { Router } from '@angular/router';
import { ModuleSettingsComponent } from './../custom-components/module-settings/module-settings.component';
import {Component, HostListener, OnInit } from '@angular/core';
import { STARTPAGE, StartPageLinks } from '../start-page-json';
import json_images_data from '../json/images.json'
import { SettingsUtil } from '../utils/settings-util';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss'],
})

export class StartPageComponent implements OnInit {
  startPageLinks!: StartPageLinks[];
  visibility = '';
  chosenBackgrounds: string[] = [];
  selectedTabIndex = 0;
  tabBackgrounds: TabBackground[] = [];
  jsonImages: any = json_images_data;
  jsonKeys = Object.keys(json_images_data);
  settingsUtil = new SettingsUtil();
  rendererUtil = new RendererUtil();

  constructor(private dialog: MatDialog, private router:Router) {

   }

  ngOnInit() {
    // retrieve user settings
    this.settingsUtil.getSettings();
    // set inital values based on settings
    this.visibility = this.settingsUtil.getBgVisibility();

    //retrieve tab backgrounds from settings
    this.tabBackgrounds = this.settingsUtil.getTabBackgroundStorage();
    if (this.tabBackgrounds.length === 0) { // if nothing was set in storage
      this.tabBackgrounds = this.rendererUtil.getAllBackgrounds(this.settingsUtil.getBgMediaType(), this.settingsUtil.getBgJsonSet());
      this.settingsUtil.setTabBackgroundStorage(this.tabBackgrounds);
    }

    //retrieve all linkgroups from settings
    this.startPageLinks = this.settingsUtil.getLinkGroupStorage();
    if (this.startPageLinks.length === 0) {// if nothing was set in storage
      this.startPageLinks = this.rendererUtil.getLinkGroups(this.settingsUtil.getLgMediaType(), this.settingsUtil.getLgJsonSet());
      this.settingsUtil.setLinkgroupStorage(this.startPageLinks);
    }
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
      data: '',
      autoFocus: false
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
