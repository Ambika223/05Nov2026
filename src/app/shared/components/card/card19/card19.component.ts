import { Component, OnInit } from '@angular/core';
import { languageArr } from 'src/app/shared/const/carddata';
import { IlanguageArr } from 'src/app/shared/models/card';

@Component({
  selector: 'app-card19',
  templateUrl: './card19.component.html',
  styleUrls: ['./card19.component.scss']
})
export class Card19Component implements OnInit {
  languages: Array<IlanguageArr> = languageArr;
  constructor() { }

  ngOnInit(): void {
  }

}
