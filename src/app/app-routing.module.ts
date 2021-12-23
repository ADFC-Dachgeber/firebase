import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PATH_LOGIN, PATH_MAP } from 'src/constants';
import { LoginComponent } from './login/login.component';
import { MapComponent } from './map/map.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
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
