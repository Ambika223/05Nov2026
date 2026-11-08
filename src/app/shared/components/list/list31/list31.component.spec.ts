import { ComponentFixture, TestBed } from '@angular/core/testing';

import { List31Component } from './list31.component';

describe('List31Component', () => {
  let component: List31Component;
  let fixture: ComponentFixture<List31Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ List31Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(List31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
