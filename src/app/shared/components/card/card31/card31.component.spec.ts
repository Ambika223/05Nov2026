import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Card31Component } from './card31.component';

describe('Card31Component', () => {
  let component: Card31Component;
  let fixture: ComponentFixture<Card31Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Card31Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Card31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
