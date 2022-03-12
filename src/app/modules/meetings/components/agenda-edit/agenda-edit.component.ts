import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agenda-edit',
  templateUrl: './agenda-edit.component.html',
  styleUrls: ['./agenda-edit.component.scss']
})
export class AgendaEditComponent implements OnInit {
  hasTopics: boolean = true;
  agendaForm: FormGroup;
  editMode: boolean;

  constructor() { }

  ngOnInit(): void {
    this.initForm();
  }

  onSubmit() {}

  onRemoveTopic(i: number) {
    (<FormArray>this.agendaForm.get('topics')).removeAt(i);
   }

  onRemoveTasks(i: number) {
    (<FormArray>this.agendaForm.get('tasks')).removeAt(i);
  }

  private initForm() {
    let meetingType = '';
    let PresidedBy = '';
    let date = '';
    let meetingAttendance = '';
    let meetingConductedBy = '';
    let startedAt = '';
    let endedAt = '';
    let registeredBy = '';

    this.agendaForm = new FormGroup ({
      type: new FormControl(meetingType, Validators.required),
      presidedBy: new FormControl(PresidedBy, Validators.required),
      date: new FormControl(date, Validators.required),
      attendance: new FormControl(meetingAttendance, ),
      conductedBy: new FormControl(meetingConductedBy, ),
      startedAt: new FormControl(startedAt, Validators.required),
      endedAt: new FormControl(endedAt, Validators.required),
      registeredBy: new FormControl(registeredBy),
    });

  }


}
