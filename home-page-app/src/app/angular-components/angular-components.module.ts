import { NgModule } from '@angular/core';
// material
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon'; 
import {MatMenuModule} from '@angular/material/menu';


@NgModule({
  declarations: [],
  exports: [
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    MatTabsModule,
    MatDividerModule,
    MatIconModule,
    MatMenuModule,
  ]
})
export class AngularComponentsModule { }
