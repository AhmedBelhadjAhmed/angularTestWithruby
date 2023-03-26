import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cars } from 'src/app/model/car';
import { CarsService } from 'src/app/services/cars.service';
import { OwnersService } from 'src/app/services/owners.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {

  owner!:any

   constructor(  private carService : CarsService, private router : Router ,private ownerservice : OwnersService ){

   }

   //declare empty table
   cars : any = [];
   selectedCar: any;
   owners : any = [];

ngOnInit(): void {
  this.getCarFromService()


}
   getCarFromService(){
    this.carService.getCars().subscribe(result =>  this.cars  = result);
    console.log(this.cars)
   }

   onCarSelected(car: any) {
    this.carService.getCarsById(car.id).subscribe(result => {
      this.selectedCar = result;

      // check if the selected car has a different owner
      if (this.owner == null || this.owner.id !== this.selectedCar.owner_id) {
        this.ownerservice.getOwnerById(this.selectedCar.owner_id).subscribe(o => {
          this.owner = o;
        });
      }
    });
  }


  deleteCar(id: number) {
    this.carService.deleteCar(id).subscribe(() => {
       this.cars = this.cars.filter((car: any) => car.id !== id);
       this.selectedCar = null;
    });
 }



}
