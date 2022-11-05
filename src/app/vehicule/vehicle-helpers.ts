import {faker} from "@faker-js/faker";
import {Vehicle} from "./vehicle";

export function generateVehicles(quantity:number):Vehicle[]
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
