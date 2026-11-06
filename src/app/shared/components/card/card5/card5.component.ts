import { Component, OnInit } from '@angular/core';
import { geographyArr } from 'src/app/shared/const/carddata';
import { Igeography } from 'src/app/shared/models/card';

@Component({
  selector: 'app-card5',
  templateUrl: './card5.component.html',
  styleUrls: ['./card5.component.scss']
})
export class Card5Component implements OnInit {
  geography1: Array<Igeography> = geographyArr;
  constructor() { }

  ngOnInit(): void {
  }

}
