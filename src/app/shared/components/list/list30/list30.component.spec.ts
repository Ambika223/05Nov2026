import { ComponentFixture, TestBed } from '@angular/core/testing';

import { List30Component } from './list30.component';

describe('List30Component', () => {
  let component: List30Component;
  let fixture: ComponentFixture<List30Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ List30Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(List30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
