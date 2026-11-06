import { Component, OnInit } from '@angular/core';
import { cyberSecurityArr } from 'src/app/shared/const/carddata';
import { IcyberSecurityArr } from 'src/app/shared/models/card';

@Component({
  selector: 'app-card13',
  templateUrl: './card13.component.html',
  styleUrls: ['./card13.component.scss']
})
export class Card13Component implements OnInit {
  cyber: Array<IcyberSecurityArr> = cyberSecurityArr;
  constructor() { }

  ngOnInit(): void {
  }

}
