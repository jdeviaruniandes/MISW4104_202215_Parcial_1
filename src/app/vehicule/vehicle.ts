export class Vehicle {
  private readonly _id: number
  private readonly _marca: string
  private readonly _linea: string
  private readonly _referencia: string
  private readonly _modelo: number
  private readonly _kilometraje: number
  private readonly _color: string
  private readonly _imagen: string

  constructor(vehicle:{id:number,marca:string,linea:string,referencia:string,modelo:number,kilometraje:number,color:string,imagen:string}) {
    this._id = vehicle.id;
    this._marca = vehicle.marca;
    this._linea = vehicle.linea;
    this._referencia = vehicle.referencia;
    this._modelo = vehicle.modelo;
    this._kilometraje = vehicle.kilometraje;
    this._color = vehicle.color;
    this._imagen = vehicle.imagen;
  }


  get id(): number {
    return this._id;
  }

  get marca(): string {
    return this._marca;
  }

  get linea(): string {
    return this._linea;
  }

  get referencia(): string {
    return this._referencia;
  }

  get modelo(): number {
    return this._modelo;
  }

  get kilometraje(): number {
    return this._kilometraje;
  }

  get color(): string {
    return this._color;
  }

  get imagen(): string {
    return this._imagen;
  }
}
