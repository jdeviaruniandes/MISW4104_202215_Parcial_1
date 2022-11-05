import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleListComponent } from './vehicle-list/vehicle-list.component';
import { VehicleBrandsPipe } from './vehicle-list/vehicle-brands.pipe';

@NgModule({
  declarations: [
    VehicleListComponent,
    VehicleBrandsPipe
  ],
  imports: [
    CommonModule
  ]
})
export class VehicleModule { }
