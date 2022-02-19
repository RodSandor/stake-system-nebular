import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CallingsRoutingModule } from './callings-routing.module';
import { CallingListPageComponent } from './pages/calling-list-page/calling-list-page.component';
import { CallingEditComponent } from './components/calling-edit/calling-edit.component';


@NgModule({
  declarations: [
    CallingListPageComponent,
    CallingEditComponent
  ],
  imports: [
    CommonModule,
    CallingsRoutingModule
  ]
})
export class CallingsModule { }
