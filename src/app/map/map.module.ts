import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map.component';
import { MatSidenavModule } from '@angular/material/sidenav';



@NgModule({
  declarations: [
    MapComponent
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
  ]
})
export class MapModule { }
