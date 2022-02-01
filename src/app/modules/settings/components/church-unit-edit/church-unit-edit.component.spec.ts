import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChurchUnitEditComponent } from './church-unit-edit.component';

describe('ChurchUnitEditComponent', () => {
  let component: ChurchUnitEditComponent;
  let fixture: ComponentFixture<ChurchUnitEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChurchUnitEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChurchUnitEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
