import { ComponentFixture, TestBed } from '@angular/core/testing';

import { List12Component } from './list12.component';

describe('List12Component', () => {
  let component: List12Component;
  let fixture: ComponentFixture<List12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ List12Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(List12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
