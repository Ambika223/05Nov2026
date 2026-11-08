import { ComponentFixture, TestBed } from '@angular/core/testing';

import { List24Component } from './list24.component';

describe('List24Component', () => {
  let component: List24Component;
  let fixture: ComponentFixture<List24Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ List24Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(List24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
