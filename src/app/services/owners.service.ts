import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Owners } from '../model/owners';

@Injectable({
  providedIn: 'root'
})
export class OwnersService {

  constructor(private http : HttpClient ) { }


  getOwners(): Observable<any>  {
    return this.http.get<any> ('http://localhost:3000/owners');
  }

  createOwner(owner: Owners): Observable<any> {
    return this.http.post('http://localhost:3000//owners', owner );
  }


  getOwnerById(id : number): Observable<any> {
    return this.http.get<any>(`http://localhost:3000/owners/${id}` );
  }
  deleteOwner(id: number): Observable<any> {
    const url = `http://localhost:3000/owners/${id}`;
    return this.http.delete(url);
  }

  updateOwner( owner: any): Observable<any> {
    return this.http.put(`http://localhost:3000/owners/${owner.id}`, owner);
  }


}
