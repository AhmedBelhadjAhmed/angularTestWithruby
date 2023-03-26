import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cars } from '../model/car';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  constructor(private http : HttpClient ) { }

  getCars(): Observable<any>  {
    return this.http.get<any> ('http://localhost:3000/cars?include=owner', { headers: new HttpHeaders({ 'Cache-Control': 'no-cache' }) });
  }

  getCarsById(id : number): Observable<any> {
    return this.http.get<any>(`http://localhost:3000/cars/${id}` , { headers: new HttpHeaders({ 'Cache-Control': 'no-cache' }) });
  }
  deleteCar(id: number): Observable<any> {
    const url = `http://localhost:3000/cars/${id}`;
    return this.http.delete(url, { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) });
  }


  createCar(car: Cars): Observable<any> {
    return this.http.post('http://localhost:3000/cars', car, { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) });
  }

  updateCar( car: any): Observable<any> {
    return this.http.put(`http://localhost:3000/cars/${car.id}`, car, { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) });
  }


}
