import { Component, OnInit } from '@angular/core';
import {Vehicle} from "../vehicle";
import {VehicleService} from "../vehicle.service";



@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.scss']
})
export class VehicleListComponent implements OnInit {
  vehicles: Vehicle[] = [];
  loading:boolean =true;
  error:boolean = false

  constructor(private vehicleService: VehicleService) { }

  ngOnInit(): void {
    this.vehicleService.getVehicles().subscribe({
      next: () => {},
      error: () => {this.error = true}
    }).add(() => {
      this.loading = false
    })
  }

}
