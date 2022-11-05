import {Artwork} from "../artwork/artwork";

export interface MuseumExhibitions { id:number,name:string,description:string }
export interface MuseumImage { id: number, source: string, altText:string, height:number, width: number }
export const AbstractLength = 11

export class Museum {
  private readonly _id: number;
  private readonly _name: string;
  private readonly _description: string;
  private readonly _address: string;
  private readonly _city: string;
  private _image?:MuseumImage = undefined;
  private readonly _artworks: Artwork[];
  private readonly _exhibitions: MuseumExhibitions[];

  constructor(
   id: number,
   name: string,
   description: string,
   address: string,
   city: string,
   artworks: Artwork[],
   exhibitions: MuseumExhibitions[],
   image?:MuseumImage
  ) {
    this._id = id;
    this._name = name;
    this._description = description;
    this._address = address;
    this._city = city;
    this._exhibitions = exhibitions;
    this._artworks = artworks;
    this._image = image;
  }

  get short_text(){
    return this._description.split(/\s+/).slice(0, AbstractLength).join(" ");
  }

  get id(): number {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get description(): string {
    return this._description;
  }

  get address(): string {
    return this._address;
  }

  get city(): string {
    return this._city;
  }

  get image():MuseumImage|undefined {
    return this._image;
  }

  get artworks(): Artwork[] {
    return this._artworks;
  }

  get exhibitions(): MuseumExhibitions[] {
    return this._exhibitions;
  }

  set image(value: MuseumImage|undefined) {
    this._image = value;
  }

}
