import { Component, OnInit } from '@angular/core';
import { physicsArr } from 'src/app/shared/const/carddata';
import { IphysicsArr } from 'src/app/shared/models/card';

@Component({
  selector: 'app-card23',
  templateUrl: './card23.component.html',
  styleUrls: ['./card23.component.scss']
})
export class Card23Component implements OnInit {
  physics1: Array<IphysicsArr> = physicsArr;
  constructor() { }

  ngOnInit(): void {
  }

}
