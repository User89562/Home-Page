import {Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-background-renderer',
  templateUrl: './background-renderer.component.html',
  styleUrls: ['./background-renderer.component.scss']
})
export class BackgroundRendererComponent implements OnChanges {
  @Input() media: string = '';
  @Input() mediaType: string = '';
  assetsImagePath = 'assets/images/';
  assetsAnimatedPath ='assets/animated/';
  counter = 0;

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.media.currentValue) {
      this.media = changes.media.currentValue;
    } 
  }

  loopVideo(event: any) {
    if (this. counter < 3) {
      event.target.play();
      this.counter++;
    }
  }

  /* TODO: might not need
  determineType(): void {
    if (this.media != '') {
      const temp = this.media.split('.');
      const extension = temp[temp.length-1];
      if (extension === 'mp4') {
        this.mediaType = 'video';
      } else {
        this.mediaType = 'image';
      }  
    }
  }*/

}
