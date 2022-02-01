import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {
  userForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.initForm();
  }

  onSubmit() {}

  onResetForm() {
    this.userForm.reset();
  }

  private initForm() {
    let initName = '';
    let initEmail = '';
    let initPassword = '';
    let initCalling = '';
    let initChurchUnitType = '';

    this.userForm = new FormGroup({
      name: new FormControl(initName, Validators.required),
      email: new FormControl(initEmail, Validators.required),
      password: new FormControl(initPassword, Validators.required),
      calling: new FormControl(initCalling, Validators.required),
      churchUnitType: new FormControl(initChurchUnitType, Validators.required),
    })

  }



}
