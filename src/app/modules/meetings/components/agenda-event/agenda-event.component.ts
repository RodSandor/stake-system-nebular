import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agenda-event',
  templateUrl: './agenda-event.component.html',
  styleUrls: ['./agenda-event.component.scss']
})
export class AgendaEventComponent implements OnInit {
  eventForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {}

}
