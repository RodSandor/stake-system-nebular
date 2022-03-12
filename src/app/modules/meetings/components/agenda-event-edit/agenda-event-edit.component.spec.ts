import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendaEventEditComponent } from './agenda-event-edit.component';

describe('AgendaEventEditComponent', () => {
  let component: AgendaEventEditComponent;
  let fixture: ComponentFixture<AgendaEventEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgendaEventEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendaEventEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
