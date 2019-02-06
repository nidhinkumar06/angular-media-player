import { Component, OnInit, SimpleChanges, ElementRef, ViewChild } from '@angular/core';
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {
  public videoPath: string;
  public title: string;
  public plot: string;
  public englishTitle: string;
  public tamilTitle: string;
  public posterImage: string;
  public videoURLOne: string;
  public videoURLTwo: string;

  constructor(private route: ActivatedRoute, private elRef: ElementRef) {
    this.route.queryParams.subscribe(params => {
      this.videoPath = params["url"];
      this.title = params["title"];
      this.plot = params["plot"];
      this.englishTitle = params["subtitles_en"];
      this.tamilTitle = params["subtitles_ta"];
      this.posterImage = params["poster"];      
    });
  }

  ngOnInit() {
  }

}
