import { ComponentFixture, TestBed } from '@angular/core/testing';

import { List16Component } from './list16.component';

describe('List16Component', () => {
  let component: List16Component;
  let fixture: ComponentFixture<List16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ List16Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(List16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
