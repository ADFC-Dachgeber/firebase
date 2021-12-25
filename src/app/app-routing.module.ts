import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { redirectUnauthorizedTo, canActivate } from '@angular/fire/auth-guard';

import { PATH_LOGIN, PATH_MAP, PATH_NOT_FOUND } from './constants';
import { LoginComponent } from './login/login.component';
import { MapComponent } from './map/map.component';
import { NotFoundComponent } from './not-found/not-found.component';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(PATH_LOGIN);
// const redirectLoggedInToItems = () => redirectLoggedInTo(['items']);
// const belongsToAccount = (next: any) => hasCustomClaim(`account-${next.params.id}`);

export const routes: Routes = [
  {
    path: PATH_MAP,
    component: MapComponent,
    ...canActivate(redirectUnauthorizedToLogin),
  },
  { path: PATH_LOGIN, component: LoginComponent },
  { path: '', redirectTo: PATH_MAP, pathMatch: 'full' },
  { path: PATH_NOT_FOUND, component: NotFoundComponent },
  { path: '**', redirectTo: PATH_NOT_FOUND },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
