import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { AgendaEventEditComponent } from './components/agenda-event-edit/agenda-event-edit.component';
import { MeetingListPageComponent } from './pages/meeting-list-page/meeting-list-page.component';
import { AgendaEditComponent } from './components/agenda-edit/agenda-edit.component';

const routes: Routes = [
  {
    path: 'list',
    component: MeetingListPageComponent
  },
  {
    path: 'agenda/create',
    component: AgendaEditComponent
  },
  {
    path: 'agenda/event/create',
    component: AgendaEventEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MeetingsRoutingModule { }
