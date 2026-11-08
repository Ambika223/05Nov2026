import { Component, OnInit } from '@angular/core';
import { professions, professionsText } from 'src/app/shared/const/listdata';

@Component({
  selector: 'app-list23',
  templateUrl: './list23.component.html',
  styleUrls: ['./list23.component.scss']
})
export class List23Component implements OnInit {
  professionsText: string = professionsText;
  professions: string[] = professions;
  constructor() { }

  ngOnInit(): void {
  }

}
