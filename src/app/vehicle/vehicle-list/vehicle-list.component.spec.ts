import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleListComponent } from './vehicle-list.component';
import {DebugElement} from "@angular/core";
import {By} from "@angular/platform-browser";
import {faker} from "@faker-js/faker";
import {generateVehicles} from "../vehicle-helpers";
import {HttpClientModule} from "@angular/common/http";


describe('VehiculeListComponent', () => {
  let component: VehicleListComponent;
  let fixture: ComponentFixture<VehicleListComponent>;
  let debug: DebugElement;
  const fakeVehicles = faker.datatype.number({min: 50, max: 100});
  const generatedVehicles = generateVehicles(fakeVehicles);
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicleListComponent ],
      imports: [HttpClientModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehicleListComponent);
    component = fixture.componentInstance;
    component.vehicles = generatedVehicles
    component.loading = true
    component.error = false
    fixture.detectChanges();

    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show loading status', () => {
    fixture.detectChanges();
    expect(debug.queryAll(By.css('div.loading-status .spinner-border'))).toHaveSize(1)
  })

  it('should show empty error message after loading is finished', () => {
    component.loading = false
    component.error = false
    component.vehicles = []
    fixture.detectChanges();
    expect(debug.queryAll(By.css('table.vehicles-table .error-loading'))).toHaveSize(1)
  });

  it('should create a list of vehicles based on return quantity', () => {
    const quantity = component.vehicles.length
    component.loading = false
    component.error = false
    fixture.detectChanges();
    expect(debug.queryAll(By.css('table.vehicles-table .vehicle-info'))).toHaveSize(quantity)
  });

  it('should create a list of vehicles based on return quantity using online service', async () => {
    await fixture.whenStable();
    fixture.detectChanges();
    const quantity = component.vehicles.length
    expect(debug.queryAll(By.css('table.vehicles-table .vehicle-info'))).toHaveSize(quantity)
  });

});
