import { ComponentFixture, TestBed } from '@angular/core/testing';

import { List33Component } from './list33.component';

describe('List33Component', () => {
  let component: List33Component;
  let fixture: ComponentFixture<List33Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ List33Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(List33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
