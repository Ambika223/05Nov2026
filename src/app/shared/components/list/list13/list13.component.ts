import { Component, OnInit } from '@angular/core';
import { programming, programmingText } from 'src/app/shared/const/listdata';

@Component({
  selector: 'app-list13',
  templateUrl: './list13.component.html',
  styleUrls: ['./list13.component.scss']
})
export class List13Component implements OnInit {
  programmingText: string = programmingText;
  programmings: string[] = programming;
  constructor() { }

  ngOnInit(): void {
  }

}
