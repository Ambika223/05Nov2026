import { ComponentFixture, TestBed } from '@angular/core/testing';

import { List13Component } from './list13.component';

describe('List13Component', () => {
  let component: List13Component;
  let fixture: ComponentFixture<List13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ List13Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(List13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
