import { ComponentFixture, TestBed } from '@angular/core/testing';

import { List23Component } from './list23.component';

describe('List23Component', () => {
  let component: List23Component;
  let fixture: ComponentFixture<List23Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ List23Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(List23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
