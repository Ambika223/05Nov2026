import { Component, OnInit } from '@angular/core';
import { softSkillsArr } from 'src/app/shared/const/carddata';
import { IsoftSkillsArr } from 'src/app/shared/models/card';

@Component({
  selector: 'app-card35',
  templateUrl: './card35.component.html',
  styleUrls: ['./card35.component.scss']
})
export class Card35Component implements OnInit {
  softSkills: Array<IsoftSkillsArr> = softSkillsArr;
  constructor() { }

  ngOnInit(): void {
  }

}
