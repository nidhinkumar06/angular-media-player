import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { WatchComponent } from './watch/watch.component';
import { VideoComponent } from './video/video.component';

const routes: Routes = [
  {path: '', component: MenuComponent},
  {path: 'watch', component: WatchComponent},
  {path: 'video', component: VideoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
