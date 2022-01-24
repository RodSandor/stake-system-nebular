import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-agenda-edit',
  templateUrl: './agenda-edit.component.html',
  styleUrls: ['./agenda-edit.component.scss']
})
export class AgendaEditComponent implements OnInit {
  agendaForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {}
}
