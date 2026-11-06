import { Component, OnInit } from '@angular/core';
import { movieArr } from 'src/app/shared/const/tabledata';
import { ImovieArr } from 'src/app/shared/models/table';

@Component({
  selector: 'app-table8',
  templateUrl: './table8.component.html',
  styleUrls: ['./table8.component.scss']
})
export class Table8Component implements OnInit {
  movieArr: Array<ImovieArr> = movieArr;

  constructor() { }

  ngOnInit(): void {
  }

}
