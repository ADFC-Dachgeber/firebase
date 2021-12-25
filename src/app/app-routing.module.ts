import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireAuthGuard } from '@angular/fire/compat/auth-guard';

import { PATH_LOGIN, PATH_MAP } from '../constants';
import { LoginComponent } from './login/login.component';
import { MapComponent } from './map/map.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
  { path: PATH_MAP, component: MapComponent },
  { path: PATH_LOGIN, component: LoginComponent },
  { path: '', redirectTo: PATH_MAP, pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
