import { Component, OnInit } from '@angular/core';
import { devTools, devToolsText } from 'src/app/shared/const/listdata';

@Component({
  selector: 'app-list34',
  templateUrl: './list34.component.html',
  styleUrls: ['./list34.component.scss']
})
export class List34Component implements OnInit {
  devToolsText: string = devToolsText;
  devTools1: string[] = devTools;
  constructor() { }

  ngOnInit(): void {
  }

}
