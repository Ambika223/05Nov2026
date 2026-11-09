import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Card25Component } from './card25.component';

describe('Card25Component', () => {
  let component: Card25Component;
  let fixture: ComponentFixture<Card25Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Card25Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Card25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
