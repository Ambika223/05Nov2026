import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Card29Component } from './card29.component';

describe('Card29Component', () => {
  let component: Card29Component;
  let fixture: ComponentFixture<Card29Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Card29Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Card29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
