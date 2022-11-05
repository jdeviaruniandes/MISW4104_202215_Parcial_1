import { Component, OnInit } from '@angular/core';
import {Vehicle} from "../vehicle";



@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.scss']
})
export class VehicleListComponent implements OnInit {
  vehicles: Vehicle[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
