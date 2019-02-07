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

  // departments: VideoName[] = [
  //   { id: 144, name: '144p' },
  //   { id: 240, name: '240p' },
  //   { id: 360, name: '360p' },
  //   { id: 480, name: '480p' },
  //   { id: 720, name: '720p-HD' },
  //   { id: 1080, name: '1080p-HD' }
  // ];

  @ViewChild('videoPlayer') videoplayer: ElementRef;

  departments: VideoName[] = [];

  public videoPath: string;
  public title: string;
  public plot: string;
  public englishTitle: string;
  public tamilTitle: string;
  public posterImage: string;
  public quality: string;

  constructor(private route: ActivatedRoute, private elRef: ElementRef) {
    this.route.queryParams.subscribe(params => {
      console.log('params is', params);
      this.videoPath = params["url"];
      this.title = params["title"];
      this.plot = params["plot"];
      this.englishTitle = params["subtitles_en"];
      this.tamilTitle = params["subtitles_ta"];
      this.posterImage = params["poster"];
      this.quality = JSON.parse(params["quality"]);
      Object.keys(this.quality).map((key) => {
        this.departments.push({id: key, name: this.quality[key].name, url: this.quality[key].url});
      });
    });

  }

  changedata($event){
    let id = $event.target.value;
    let selectedData = find(this.departments, {id: id});
    this.videoPath = selectedData.url;
    this.videoplayer.nativeElement.load();
    this.videoplayer.nativeElement.play();
  }

  ngOnInit() {
  }

}
