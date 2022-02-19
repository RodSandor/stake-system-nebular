import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallingListPageComponent } from './calling-list-page.component';

describe('CallingListPageComponent', () => {
  let component: CallingListPageComponent;
  let fixture: ComponentFixture<CallingListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CallingListPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CallingListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
