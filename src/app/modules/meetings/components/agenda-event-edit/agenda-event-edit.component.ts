import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agenda-event-edit',
  templateUrl: './agenda-event-edit.component.html',
  styleUrls: ['./agenda-event-edit.component.scss']
})
export class AgendaEventEditComponent implements OnInit {
  eventForm: FormGroup;
  editMode: boolean = false;

  get speakerCtrls() {
    return (<FormArray>this.eventForm.get('speakers')).controls;
  }

  get otherCtrls() {
    return (<FormArray>this.eventForm.get('others')).controls;
  }

  constructor() {}


  ngOnInit(): void {
    this.initForm();
  }

  onAddSpeaker() {
    (<FormArray>this.eventForm.get('speakers')).push(
      new FormGroup({
        speaker: new FormControl(null, Validators.required),
        time: new FormControl(null)
      })
    )
  }

  onDeleteSpeaker(index: number) {
    (<FormArray>this.eventForm.get('speakers')).removeAt(index)
  }

  onAddOther() {
    (<FormArray>this.eventForm.get('others')).push(
      new FormGroup({
        designation: new FormControl(null, Validators.required),
        name: new FormControl(null, Validators.required)
      })
    )
  }

  onDeleteOther(index: number) {
    (<FormArray>this.eventForm.get('others')).removeAt(index)
  }

  private initForm() {
    let eventCondutor = '';
    let eventPianist = '';
    let eventSpeakers = new FormArray([
      new FormGroup({
        speaker: new FormControl(null, Validators.required),
        time: new FormControl(null)
      })
    ]);
    let eventOthers = new FormArray([
      new FormGroup({
        designation: new FormControl(null),
        name: new FormControl(null)
      })
    ]);

    if(this.editMode) {}

    this.eventForm = new FormGroup({
      conductor: new FormControl(eventCondutor),
      pianist: new FormControl(eventPianist),
      speakers: eventSpeakers,
      others: eventOthers
    })
  }

  onSubmit() {}

}
