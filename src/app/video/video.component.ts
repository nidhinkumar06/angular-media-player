import { Component, OnInit, SimpleChanges, ElementRef, ViewChild } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { VideoName } from './model';
import { find } from 'lodash';



@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {

  @ViewChild('videoPlayer') videoplayer: ElementRef;

  videos: VideoName[] = [];

  public videoPath: string;
  public title: string;
  public plot: string;
  public englishTitle: string;
  public tamilTitle: string;
  public posterImage: string;
  public quality: string;

  constructor(private route: ActivatedRoute, private elRef: ElementRef) {
    this.route.queryParams.subscribe(params => {
      this.videoPath = params["url"];
      this.title = params["title"];
      this.plot = params["plot"];
      this.englishTitle = params["subtitles_en"];
      this.tamilTitle = params["subtitles_ta"];
      this.posterImage = params["poster"];
      this.quality = JSON.parse(params["quality"]);
      Object.keys(this.quality).map((key) => {
        this.videos.push({id: key, name: this.quality[key].name, videoUrl: this.quality[key].url});
      });
    });

  }

  changedata($event){
    let id = $event.target.value;
    let selectedData = find(this.videos, {id: id});
    this.videoPath = selectedData.videoUrl;
    this.videoplayer.nativeElement.load();
    this.videoplayer.nativeElement.play();
  }

  ngOnInit() {
  }

}
