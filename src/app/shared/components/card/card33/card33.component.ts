import { Component, OnInit } from '@angular/core';
import { agricultureArr } from 'src/app/shared/const/carddata';
import { IagricultureArr } from 'src/app/shared/models/card';

@Component({
  selector: 'app-card33',
  templateUrl: './card33.component.html',
  styleUrls: ['./card33.component.scss']
})
export class Card33Component implements OnInit {
agriculture1:Array<IagricultureArr>=agricultureArr;
  constructor() { }

  ngOnInit(): void {
  }

}
