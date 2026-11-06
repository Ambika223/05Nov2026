import { Component, OnInit } from '@angular/core';
import { animals, animalsText } from 'src/app/shared/const/listdata';

@Component({
  selector: 'app-list7',
  templateUrl: './list7.component.html',
  styleUrls: ['./list7.component.scss']
})
export class List7Component implements OnInit {
  animalsText = animalsText;
  animals = animals;
  constructor() { }

  ngOnInit(): void {
  }

}
