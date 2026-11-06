import { Component, OnInit } from '@angular/core';
import { languages, languagesText } from 'src/app/shared/const/listdata';

@Component({
  selector: 'app-list10',
  templateUrl: './list10.component.html',
  styleUrls: ['./list10.component.scss']
})
export class List10Component implements OnInit {

  constructor() { }
  languagesText: string = languagesText;
  languages: string[] = languages;
  ngOnInit(): void {
  }

}
