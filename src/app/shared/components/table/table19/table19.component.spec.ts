import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Table19Component } from './table19.component';

describe('Table19Component', () => {
  let component: Table19Component;
  let fixture: ComponentFixture<Table19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Table19Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Table19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
