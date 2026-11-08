import { Component, OnInit } from '@angular/core';
import { clothing, clothingText } from 'src/app/shared/const/listdata';

@Component({
  selector: 'app-list29',
  templateUrl: './list29.component.html',
  styleUrls: ['./list29.component.scss']
})
export class List29Component implements OnInit {
  clothingText: string = clothingText;
  clothings: string[] = clothing;
  constructor() { }

  ngOnInit(): void {
  }

}
