import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MeetingsRoutingModule { }
