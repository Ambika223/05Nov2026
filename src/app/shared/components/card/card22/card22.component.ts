import { Component, OnInit } from '@angular/core';
import { designArr } from 'src/app/shared/const/carddata';
import { IdesignArray } from 'src/app/shared/models/card';

@Component({
  selector: 'app-card22',
  templateUrl: './card22.component.html',
  styleUrls: ['./card22.component.scss']
})
export class Card22Component implements OnInit {
  designs: Array<IdesignArray> = designArr;


  constructor() { }

  ngOnInit(): void {
  }

}
