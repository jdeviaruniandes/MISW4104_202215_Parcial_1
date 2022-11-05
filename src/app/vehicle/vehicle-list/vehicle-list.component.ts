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
  loading:boolean = false;
  error:boolean = false

  constructor(public vehicleService: VehicleService) { }

  ngOnInit(): void {
    this.vehicleService.getVehicles().subscribe({
      next: (vehicles) => {
        const vehiclesCollection:Vehicle[] = []
        for (const vehicle of vehicles){
          vehiclesCollection.push(new Vehicle(vehicle))
        }
        this.vehicles = vehiclesCollection;
      },
      error: () => {
        this.error = true
      }
    }).add(() => {
      this.loading = false
    })
  }

}
