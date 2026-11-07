import { Component, OnInit } from '@angular/core';
import { socialMedia, socialMediaText } from 'src/app/shared/const/listdata';

@Component({
  selector: 'app-list17',
  templateUrl: './list17.component.html',
  styleUrls: ['./list17.component.scss']
})
export class List17Component implements OnInit {
  socialMediaText: string = socialMediaText;
  socialMedia1: string[] = socialMedia;
  constructor() { }

  ngOnInit(): void {
  }

}
