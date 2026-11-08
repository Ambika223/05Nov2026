import { ComponentFixture, TestBed } from '@angular/core/testing';

import { List35Component } from './list35.component';

describe('List35Component', () => {
  let component: List35Component;
  let fixture: ComponentFixture<List35Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ List35Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(List35Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
