import { ComponentFixture, TestBed } from '@angular/core/testing';

import { List21Component } from './list21.component';

describe('List21Component', () => {
  let component: List21Component;
  let fixture: ComponentFixture<List21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ List21Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(List21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
