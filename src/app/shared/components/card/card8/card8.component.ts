import { Component, OnInit } from '@angular/core';
import { techToolsArr } from 'src/app/shared/const/carddata';
import { ItechToolsArr } from 'src/app/shared/models/card';

@Component({
  selector: 'app-card8',
  templateUrl: './card8.component.html',
  styleUrls: ['./card8.component.scss']
})
export class Card8Component implements OnInit {
  tech: Array<ItechToolsArr> = techToolsArr;
  constructor() { }

  ngOnInit(): void {
  }

}
