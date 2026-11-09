import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Card23Component } from './card23.component';

describe('Card23Component', () => {
  let component: Card23Component;
  let fixture: ComponentFixture<Card23Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Card23Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Card23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
