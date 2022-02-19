import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: 'callings',
    loadChildren: () => import('./modules/callings/callings.module').then(m => m.CallingsModule)
  },
  {
    path: 'meetings',
    loadChildren: () => import('./modules/meetings/meetings.module').then(m => m.MeetingsModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./modules/settings/settings.module').then(m => m.SettingsModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
