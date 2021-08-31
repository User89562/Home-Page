import { StartPageComponent } from './start-page/start-page.component';
import { AngularComponentsModule } from './angular-components/angular-components.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BackgroundRendererComponent } from './background-renderer/background-renderer.component';

@NgModule({
  declarations: [	
    AppComponent,
    StartPageComponent,
    BackgroundRendererComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularComponentsModule,
    FlexLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
