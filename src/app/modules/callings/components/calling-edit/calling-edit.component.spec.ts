import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallingEditComponent } from './calling-edit.component';

describe('CallingEditComponent', () => {
  let component: CallingEditComponent;
  let fixture: ComponentFixture<CallingEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CallingEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CallingEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
