import { Injectable } from '@angular/core';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
    p1 = new Product("pc" , 1222,22 );
    p2 = new Product("imprimente" , 35622, 2 );
    p3 = new Product("phone", 34, 12 );

    tabService = [this.p1 , this.p2 , this.p3];

  constructor() { }
}
