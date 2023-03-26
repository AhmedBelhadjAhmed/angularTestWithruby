import { OwnersService } from 'src/app/services/owners.service';
import { CarsService } from 'src/app/services/cars.service';
import { NgForm } from '@angular/forms';
import { Component } from '@angular/core';
import { Cars } from 'src/app/model/car';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carsform',
  templateUrl: './carsform.component.html',
  styleUrls: ['./carsform.component.css']
})
export class CarsformComponent {

  car! : any
  cars : any
  owners : any = []
   owner : any
  constructor(private carService : CarsService,private ownerService: OwnersService, private router : Router){
       this.car = new Cars();
  }
  ngOnInit(): void {
    this.ownerService.getOwners().subscribe(owners => {
      this.owners = owners;
      if (this.owners.length > 0) {
        this.car.owner_id = this.owners[0].id;
      }
    });
  }

  onSbmit(f:NgForm){
    this.carService.createCar( this.car).subscribe()
    if(f.valid){
      this.router.navigate(['/cars']);
    }
  }

  getOwnersFromService(){
    return this.ownerService.getOwners().subscribe(o => this.owners = o);
  }
  CompareList(o1 :any , o2 :any): boolean {
    if(o1 === undefined && o2 === undefined) return true
    return o1===null || o2===null || o1 === undefined || o2 === undefined ? false: o1.id == o2.id ;
  }
}
