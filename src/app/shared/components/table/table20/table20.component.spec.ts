import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Table20Component } from './table20.component';

describe('Table20Component', () => {
  let component: Table20Component;
  let fixture: ComponentFixture<Table20Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Table20Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Table20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
