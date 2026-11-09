import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Card22Component } from './card22.component';

describe('Card22Component', () => {
  let component: Card22Component;
  let fixture: ComponentFixture<Card22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Card22Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Card22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
