import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CallingListPageComponent } from './pages/calling-list-page/calling-list-page.component';
import { CallingEditComponent } from './components/calling-edit/calling-edit.component';

const routes: Routes = [
  {
    path: 'list',
    component: CallingListPageComponent
  },
  {
    path: 'calling',
    component: CallingEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CallingsRoutingModule { }
