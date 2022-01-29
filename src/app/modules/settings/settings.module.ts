import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ChurchUnitEditComponent } from './components/church-unit-edit/church-unit-edit.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { SettingsRoutingModule } from './settings-routing.module';
import { SharedModule } from './../../shared/shared.module';
import { CoreModule } from './../../core/core.module';


@NgModule({
  declarations: [
    ChurchUnitEditComponent,
    UserEditComponent,
  ],
  imports: [
    SettingsRoutingModule,
    SharedModule,
    CommonModule,
    CoreModule,
  ]
})
export class SettingsModule { }
