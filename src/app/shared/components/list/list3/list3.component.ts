import { Component, OnInit } from '@angular/core';
import { colors, colorsText } from 'src/app/shared/const/listdata';

@Component({
  selector: 'app-list3',
  templateUrl: './list3.component.html',
  styleUrls: ['./list3.component.scss']
})
export class List3Component implements OnInit {
  colorText = colorsText;
  colors = colors;
  constructor() { }

  ngOnInit(): void {
  }

}
