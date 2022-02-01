import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-church-unit-edit',
  templateUrl: './church-unit-edit.component.html',
  styleUrls: ['./church-unit-edit.component.scss']
})
export class ChurchUnitEditComponent implements OnInit {
  churchUnitForm: FormGroup

  constructor() { }

  ngOnInit(): void {
    this.initForm();
  }

  onSubmit() {}

  onResetForm() {
    this.churchUnitForm.reset();
  }

  private initForm() {
    let initName = '';
    let initUnit = '';
    let initUnitType = '';

    this.churchUnitForm = new FormGroup({
      name: new FormControl(initName, Validators.required),
      unitId: new FormControl(initUnit, Validators.required),
      unitType: new FormControl(initUnitType, Validators.required)
    })
  }
}
