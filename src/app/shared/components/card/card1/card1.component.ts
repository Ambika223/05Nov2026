import { Component, OnInit } from '@angular/core';

import { aiArr } from 'src/app/shared/const/carddata';
import { IAI } from 'src/app/shared/models/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card1',
  templateUrl: './card1.component.html',
  styleUrls: ['./card1.component.scss'],

})
export class Card1Component implements OnInit {
  aiArrs: Array<IAI> = aiArr;

  constructor() { }

  ngOnInit(): void {
  }

}
