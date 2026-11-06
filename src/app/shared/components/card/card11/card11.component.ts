import { Component, OnInit } from '@angular/core';
import { webDevArr } from 'src/app/shared/const/carddata';
import { IwebDevArr } from 'src/app/shared/models/card';

@Component({
  selector: 'app-card11',
  templateUrl: './card11.component.html',
  styleUrls: ['./card11.component.scss']
})
export class Card11Component implements OnInit {
  web: Array<IwebDevArr> = webDevArr;
  constructor() { }

  ngOnInit(): void {
  }

}
