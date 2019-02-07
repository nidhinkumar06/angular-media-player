import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  items: Observable<any[]>;
  playAudio: boolean = false;

  constructor(db: AngularFireDatabase, private router: Router) { 
    this.items = db.list('/').valueChanges();
  }

  ngOnInit() {
  }

  goToPage(pageName:string, params: any) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
          "url": params.videoUrl,
          "title": params.Title,
          "plot": params.Plot,
          "poster": params.Poster,
          "subtitles_en": params && params.subtitles && params.subtitles.en || "../assets/subtitles_en.vtt",
          "subtitles_ta": params && params.subtitles && params.subtitles.ta || "../assets/subtitles_ta.vtt",
          "quality": JSON.stringify(params.quality) || '',
          "videoQuality": params.videoQuality || ''
      }
  };
    
    this.router.navigate([`${pageName}`], navigationExtras);
  }

  stopAudio(params: any) {
    params.playAudio = false;
  }

  audioClicked(params: any) {
    params.playAudio = true;
  }

}
