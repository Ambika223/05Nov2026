import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Card32Component } from './card32.component';

describe('Card32Component', () => {
  let component: Card32Component;
  let fixture: ComponentFixture<Card32Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Card32Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Card32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
