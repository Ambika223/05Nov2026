import { Component, OnInit } from '@angular/core';
import { weather, weatherText } from 'src/app/shared/const/listdata';

@Component({
  selector: 'app-list31',
  templateUrl: './list31.component.html',
  styleUrls: ['./list31.component.scss']
})
export class List31Component implements OnInit {
[x: string]: any;
  weatherText: string = weatherText;
  weathers: string[] = weather;
  constructor() { }

  ngOnInit(): void {
  }

}
