import { Component, OnInit } from '@angular/core';
import { STARTPAGE, StartPageLinks } from '../json';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss'],
})
export class StartPageComponent implements OnInit {
  startPageLinks!: StartPageLinks[];

  constructor() { }

  ngOnInit() {
    this.startPageLinks = STARTPAGE;
    this.startPageLinks.forEach(startPageLink => {
      startPageLink.linkGroups.forEach(linkGroup => {
        linkGroup.selectedMedia = this.randomUrl(linkGroup.media!);
      });
    });
  }

  randomUrl(media: string[]): string {
    const max = media?.length-1;
    const min = 0;
    return media[Math.floor(Math.random() * (max - min + 1) + min)];
  }
}
