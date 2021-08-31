import { BackgroundRendererComponent } from './background-renderer/background-renderer.component';
import { StartPageComponent } from './start-page/start-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component:StartPageComponent},
  {path: 'background', component:BackgroundRendererComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
