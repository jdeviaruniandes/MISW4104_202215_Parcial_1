import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleListComponent } from './vehicle-list.component';
import {DebugElement} from "@angular/core";
import {By} from "@angular/platform-browser";
import {faker} from "@faker-js/faker";
import {generateVehicles} from "../vehicle-helpers";


describe('VehiculeListComponent', () => {
  let component: VehicleListComponent;
  let fixture: ComponentFixture<VehicleListComponent>;
  let debug: DebugElement;
  const fakeVehicles = faker.datatype.number({min: 50, max: 100});

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicleListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehicleListComponent);
    component = fixture.componentInstance;
    component.vehicles = generateVehicles(fakeVehicles)
    fixture.detectChanges();

    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create a list of vehicles based on return quantity', () => {
    const quantity = component.vehicles.length
    expect(debug.queryAll(By.css('table.vehicles-table .vehicle-info'))).toHaveSize(quantity)
  });

});
