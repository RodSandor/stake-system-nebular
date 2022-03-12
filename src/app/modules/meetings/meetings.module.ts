import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AgendaTopicEditComponent } from './components/agenda-topic-edit/agenda-topic-edit.component';
import { AgendaEventEditComponent } from './components/agenda-event-edit/agenda-event-edit.component';
import { MeetingListPageComponent } from './pages/meeting-list-page/meeting-list-page.component';
import { AgendaEditComponent } from './components/agenda-edit/agenda-edit.component';
import { MeetingsRoutingModule } from './meetings-routing.module';
import { SharedModule } from './../../shared/shared.module';
import { CoreModule } from './../../core/core.module';

@NgModule({
  declarations: [
    AgendaEditComponent,
    MeetingListPageComponent,
    AgendaTopicEditComponent,
    AgendaEventEditComponent
  ],
  imports: [
    MeetingsRoutingModule,
    CommonModule,
    SharedModule,
    CoreModule,
  ]
})
export class MeetingsModule { }
