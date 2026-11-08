import { Component, OnInit } from '@angular/core';
import { emotions, emotionsText } from 'src/app/shared/const/listdata';

@Component({
  selector: 'app-list35',
  templateUrl: './list35.component.html',
  styleUrls: ['./list35.component.scss']
})
export class List35Component implements OnInit {
  emotionsText: string = emotionsText;
  emotions1: string[] = emotions;
  constructor() { }

  ngOnInit(): void {
  }

}
