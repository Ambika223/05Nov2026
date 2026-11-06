import { Component, OnInit } from '@angular/core';
import { subjects, subjectsText } from 'src/app/shared/const/listdata';

@Component({
  selector: 'app-list5',
  templateUrl: './list5.component.html',
  styleUrls: ['./list5.component.scss']
})
export class List5Component implements OnInit {
  subjectsText = subjectsText;
  subjects = subjects;
  constructor() { }

  ngOnInit(): void {
  }

}
