import { Component, OnInit } from '@angular/core';
import { musicArr } from 'src/app/shared/const/carddata';
import { ImusicArr } from 'src/app/shared/models/card';

@Component({
  selector: 'app-card30',
  templateUrl: './card30.component.html',
  styleUrls: ['./card30.component.scss']
})
export class Card30Component implements OnInit {
  musicArr1: Array<ImusicArr> = musicArr;
  constructor() { }

  ngOnInit(): void {
  }

}
