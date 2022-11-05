import { VehicleBrandsPipe } from './vehicle-brands.pipe';
import {generateVehicles} from "../vehicle-helpers";
import {faker} from "@faker-js/faker";

describe('VehicleBrandsPipe', () => {
  it('create an instance', () => {
    const pipe = new VehicleBrandsPipe();
    const vehicles = generateVehicles(faker.datatype.number({min: 25,max: 100}))

    let brands:{[key:string]: number} = {}
    for (const vehicle of vehicles){
      if (!brands[vehicle.marca]) brands[vehicle.marca] = 0

      brands[vehicle.marca]++
    }


    expect(pipe).toBeTruthy();

    const result = pipe.transform(vehicles)
    let previewQuantity = null
    for (const vehicleBrand of result){
      if (!previewQuantity){
        previewQuantity = vehicleBrand.quantity
      }

      expect(vehicleBrand.quantity).toBeLessThanOrEqual(previewQuantity)
      expect(vehicleBrand.quantity).toBe(brands[vehicleBrand.brand])
      previewQuantity = vehicleBrand.quantity
    }

    let limitedResult = pipe.transform(vehicles,2)
    expect(limitedResult.length).toBeLessThanOrEqual(Object.values(brands).length>2?2:Object.values(brands).length)

    limitedResult = pipe.transform(vehicles,Object.values(brands).length+1)
    expect(limitedResult.length).toBeLessThanOrEqual(Object.values(brands).length)
  });
});
