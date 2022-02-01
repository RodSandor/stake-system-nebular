import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendaTopicEditComponent } from './agenda-topic-edit.component';

describe('AgendaTopicEditComponent', () => {
  let component: AgendaTopicEditComponent;
  let fixture: ComponentFixture<AgendaTopicEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgendaTopicEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendaTopicEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
