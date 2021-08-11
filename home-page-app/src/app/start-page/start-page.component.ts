import { AfterContentInit, ChangeDetectorRef } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { STARTPAGE, StartPageLinks } from '../json';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StartPageComponent implements OnInit, AfterContentInit {
  startPageLinks!: StartPageLinks[];
  opacity= '1';

  constructor(private changeDetector : ChangeDetectorRef) { }

  ngOnInit() {
    this.startPageLinks = STARTPAGE;
  }

  ngAfterContentInit(){ this.changeDetector.detectChanges(); }

  randomUrl(images: string[]): string {
    const max = images?.length-1;
    const min = 0;
    return images[Math.floor(Math.random() * (max - min + 1) + min)];
  }
}
