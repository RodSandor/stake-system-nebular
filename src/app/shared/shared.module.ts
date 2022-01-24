import { RouterModule } from '@angular/router';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import {
  NbSidebarModule,
  NbLayoutModule,
  NbMenuModule,
  NbIconModule,
  NbActionsModule,
  NbCardModule,
  NbInputModule,
  NbSelectModule,
  NbDatepickerModule,
  NbTimepickerModule,
} from '@nebular/theme';

import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ListComponent } from './components/list/list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SidebarComponent, ListComponent],
  imports: [
    NbDatepickerModule.forRoot(),
    NbTimepickerModule.forRoot(),
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    ReactiveFormsModule,
    NbEvaIconsModule,
    NbActionsModule,
    NbLayoutModule,
    NbSelectModule,
    NbInputModule,
    NbCardModule,
    CommonModule,
    NbIconModule,
    RouterModule,
    FormsModule,
  ],
  exports: [
    ReactiveFormsModule,
    NbTimepickerModule,
    NbDatepickerModule,
    SidebarComponent,
    NbEvaIconsModule,
    NbActionsModule,
    NbSidebarModule,
    NbLayoutModule,
    NbSelectModule,
    NbInputModule,
    NbCardModule,
    NbMenuModule,
    NbIconModule,
    FormsModule,
  ],
})
export class SharedModule {}
