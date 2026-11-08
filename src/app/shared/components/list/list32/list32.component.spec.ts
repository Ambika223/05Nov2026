import { ComponentFixture, TestBed } from '@angular/core/testing';

import { List32Component } from './list32.component';

describe('List32Component', () => {
  let component: List32Component;
  let fixture: ComponentFixture<List32Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ List32Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(List32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
