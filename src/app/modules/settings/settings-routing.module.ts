import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { ChurchUnitEditComponent } from './components/church-unit-edit/church-unit-edit.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';

const routes: Routes = [
  { path: 'user/create', component: UserEditComponent },
  { path: 'church-unit/create', component: ChurchUnitEditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
