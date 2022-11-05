import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {Vehicle} from "./vehicle";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  private apiUrl: string = environment.requestUrl;
  constructor(private http: HttpClient) { }

  getVehicles(): Observable<Vehicle[]> {
    return this.http.get<Vehicle[]>(this.apiUrl);
  }

}
