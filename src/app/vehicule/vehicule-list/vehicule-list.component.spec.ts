import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiculeListComponent } from './vehicule-list.component';
import {DebugElement} from "@angular/core";
import {By} from "@angular/platform-browser";
import {faker} from "@faker-js/faker";
import {Vehicle} from "../vehicle";

function generateVehicles(quantity:number):Vehicle[]
{
  const vehicles:Vehicle[] = []

  for (let i = 1; i <= quantity; i++) {
    vehicles.push(new Vehicle({
      id: i,
      color: faker.vehicle.color(),
      imagen: faker.image.imageUrl(),
      kilometraje: faker.datatype.number({min: 0}),
      linea: faker.vehicle.model(),
      marca: faker.vehicle.manufacturer(),
      modelo: faker.datatype.number({min: 1912, max: 2020}),
      referencia: faker.vehicle.type()
    }))
  }

  return vehicles
}

describe('VehiculeListComponent', () => {
  let component: VehiculeListComponent;
  let fixture: ComponentFixture<VehiculeListComponent>;
  let debug: DebugElement;
  const fakeVehicles = faker.datatype.number({min: 50, max: 100});

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehiculeListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehiculeListComponent);
    component = fixture.componentInstance;
    component.vehicles = generateVehicles(fakeVehicles)
    fixture.detectChanges();

    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create a list of vehicles based on return quantity', () => {
    const quantity = component.vehicles?.length
    expect(debug.queryAll(By.css('div.list-group .vehicle-info'))).toHaveSize(quantity)
  });

});
