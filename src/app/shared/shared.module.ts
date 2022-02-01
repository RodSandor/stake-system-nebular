import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NbEvaIconsModule } from '@nebular/eva-icons';
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
  NbButtonModule,
} from '@nebular/theme';

import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ListComponent } from './components/list/list.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';

@NgModule({
  declarations: [SidebarComponent, ListComponent],
  imports: [
    NbDatepickerModule.forRoot(),
    NbTimepickerModule.forRoot(),
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    ReactiveFormsModule,
    Ng2SmartTableModule,
    NbEvaIconsModule,
    NbActionsModule,
    NbLayoutModule,
    NbButtonModule,
    NbSelectModule,
    NbInputModule,
    NbCardModule,
    CommonModule,
    NbIconModule,
    RouterModule,
    FormsModule,
  ],
  exports: [
    Ng2SmartTableModule,
    ReactiveFormsModule,
    NbTimepickerModule,
    NbDatepickerModule,
    SidebarComponent,
    NbEvaIconsModule,
    NbActionsModule,
    NbSidebarModule,
    NbButtonModule,
    NbLayoutModule,
    NbSelectModule,
    NbInputModule,
    ListComponent,
    NbCardModule,
    NbMenuModule,
    NbIconModule,
    FormsModule,
  ],
})
export class SharedModule {}
