import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Card35Component } from './card35.component';

describe('Card35Component', () => {
  let component: Card35Component;
  let fixture: ComponentFixture<Card35Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Card35Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Card35Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
