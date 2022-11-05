import { Pipe, PipeTransform } from '@angular/core';
import {Vehicle} from "../vehicle";
import {VehicleBrandStructure} from "../vehicle-helpers";

@Pipe({
  name: 'VehicleBrands'
})

export class VehicleBrandsPipe implements PipeTransform {

  transform(vehicles: Vehicle[],limit?:number):VehicleBrandStructure[]
  {
    const brands:{[key:string]: VehicleBrandStructure} = {}
    for (const vehicle of vehicles){
      if (!brands[vehicle.marca]) {
        brands[vehicle.marca] = {brand: vehicle.marca,quantity: 0}
      }
      brands[vehicle.marca].quantity++
    }

    let result = Object.values(brands)
    result = result.sort((vb1,vb2) => (vb1.quantity < vb2.quantity) ? 1 : (vb1.quantity > vb2.quantity) ? -1 : 0)

    return limit ? result.slice(0,limit) : result
  }

}
