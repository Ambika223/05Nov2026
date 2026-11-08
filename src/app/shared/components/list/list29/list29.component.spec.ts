import { ComponentFixture, TestBed } from '@angular/core/testing';

import { List29Component } from './list29.component';

describe('List29Component', () => {
  let component: List29Component;
  let fixture: ComponentFixture<List29Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ List29Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(List29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
