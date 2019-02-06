import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatVideoModule } from 'mat-video';
import { PlyrModule } from 'ngx-plyr';
import { VideoComponent } from './video/video.component';
import { ListComponent } from './list/list.component';
import { MenuComponent } from './menu/menu.component';
import { WatchComponent } from './watch/watch.component';
import { AudioComponent } from './audio/audio.component';

@NgModule({
  declarations: [
    AppComponent,
    VideoComponent,
    ListComponent,
    MenuComponent,
    WatchComponent,
    AudioComponent,
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatVideoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
