import { Component, OnInit, SimpleChanges, ElementRef, ViewChild } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-audio',
  templateUrl: './audio.component.html',
  styleUrls: ['./audio.component.scss']
})
export class AudioComponent implements OnInit {
  public audioPath: string;
  public title: string;

  constructor(private route: ActivatedRoute, private elRef: ElementRef) {
    this.route.queryParams.subscribe(params => {
      this.audioPath = params["audiourl"];
      this.title = params["title"];      
    });
  }

  ngOnInit() {
  }

}
