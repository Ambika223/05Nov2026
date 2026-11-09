import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Card30Component } from './card30.component';

describe('Card30Component', () => {
  let component: Card30Component;
  let fixture: ComponentFixture<Card30Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Card30Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Card30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
