import { ComponentFixture, TestBed } from '@angular/core/testing';

import { List34Component } from './list34.component';

describe('List34Component', () => {
  let component: List34Component;
  let fixture: ComponentFixture<List34Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ List34Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(List34Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
