import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Card33Component } from './card33.component';

describe('Card33Component', () => {
  let component: Card33Component;
  let fixture: ComponentFixture<Card33Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Card33Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Card33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
