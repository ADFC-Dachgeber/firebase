import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { canActivate, customClaims } from '@angular/fire/auth-guard';
import { map, pipe } from 'rxjs';

import { PATH_ACCOMMODATION, PATH_LOGIN, PATH_MAP, PATH_NOT_FOUND } from './constants';
import { LoginComponent } from './login/login.component';
import { MapComponent } from './map/map.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { EditAccommodationComponent } from './accommodation/edit-accommodation/edit-accommodation.component';

const approvedOnly = () => pipe(
  customClaims,
  map(({ approved }) => approved || [PATH_LOGIN]),
);

// const redirectLoggedInToItems = () => redirectLoggedInTo(['items']);
// const belongsToAccount = (next: any) => hasCustomClaim(`account-${next.params.id}`);

export const routes: Routes = [
  {
    path: PATH_MAP,
    component: MapComponent,
    // @ts-ignore: Type check freaks out here otherwise.
    ...canActivate(approvedOnly),
  },
  { path: PATH_LOGIN, component: LoginComponent },
  { path: '', redirectTo: PATH_MAP, pathMatch: 'full' },
  { path: PATH_NOT_FOUND, component: NotFoundComponent },
  {
    path: PATH_ACCOMMODATION, children: [
      { path: ':id', component: EditAccommodationComponent }
    ]
  },
  { path: '**', redirectTo: PATH_NOT_FOUND },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
