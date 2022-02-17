import { SettingsGeneralPageComponent } from './pages/settings-general-page/settings-general-page.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { ChurchUnitEditComponent } from './components/church-unit-edit/church-unit-edit.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';

const routes: Routes = [
  { path: 'church-unit/create', component: ChurchUnitEditComponent },
  { path: 'general', component: SettingsGeneralPageComponent },
  { path: 'user/create', component: UserEditComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
