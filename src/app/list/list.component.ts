import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  items: Observable<any[]>;

  constructor(db: AngularFireDatabase, private router: Router) {
    this.items = db.list('/').valueChanges();
   }

  ngOnInit() {
  }

  goToPage(pageName:string, params: any) {
    console.log('pageName is', pageName);
    console.log('url is', params);
    let navigationExtras: NavigationExtras = {
      queryParams: {
          "url": params.videoUrl,
          "title": params.Title,
          "plot": params.Plot,
          "poster": params.Poster,
          "subtitles_en": params && params.subtitles && params.subtitles.en || "../assets/subtitles_en.vtt",
          "subtitles_ta": params && params.subtitles && params.subtitles.ta || "../assets/subtitles_ta.vtt"
      }
    };
    this.router.navigateByUrl('/video', {skipLocationChange: true}).then(()=>
    this.router.navigate([`${pageName}`], navigationExtras));
  }

}
