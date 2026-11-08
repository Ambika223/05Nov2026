import { ComponentFixture, TestBed } from '@angular/core/testing';

import { List27Component } from './list27.component';

describe('List27Component', () => {
  let component: List27Component;
  let fixture: ComponentFixture<List27Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ List27Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(List27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
