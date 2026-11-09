import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Card34Component } from './card34.component';

describe('Card34Component', () => {
  let component: Card34Component;
  let fixture: ComponentFixture<Card34Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Card34Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Card34Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
