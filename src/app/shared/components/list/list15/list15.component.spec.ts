import { ComponentFixture, TestBed } from '@angular/core/testing';

import { List15Component } from './list15.component';

describe('List15Component', () => {
  let component: List15Component;
  let fixture: ComponentFixture<List15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ List15Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(List15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
