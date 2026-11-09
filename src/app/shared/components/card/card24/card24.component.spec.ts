import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Card24Component } from './card24.component';

describe('Card24Component', () => {
  let component: Card24Component;
  let fixture: ComponentFixture<Card24Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Card24Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Card24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
