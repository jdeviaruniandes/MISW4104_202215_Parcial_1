import { TestBed } from '@angular/core/testing';

import { VehicleService } from './vehicle.service';
import {HttpClientModule} from "@angular/common/http";
import {Vehicle} from "./vehicle";

describe('VehicleService', () => {
  let service: VehicleService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(VehicleService);
  });

  it('should get the data successfully', (done: DoneFn) => {
    service.getVehicles().subscribe({
      next: (vehicles) => {
        expect(Array.isArray(vehicles)).toBeTrue();
        for (const vehicle of vehicles){
          expect(vehicle.id).toBeTruthy()
          expect(vehicle.linea).toBeTruthy()
          expect(vehicle.marca).toBeTruthy()
          expect(vehicle.modelo).toBeTruthy()
        }

        done();
      }
    });
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
