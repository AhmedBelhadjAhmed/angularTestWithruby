import { OwnersService } from './../../services/owners.service';
import { NgForm } from '@angular/forms';
import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Cars } from 'src/app/model/car';
import { CarsService } from 'src/app/services/cars.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {

  selectedCar!: Cars
  owners : any = []

  constructor(  private router : Router, private ar: ActivatedRoute,private ownerService : OwnersService, private carService : CarsService ){

  }

  ngOnInit(): void {
    let id!:number
    id = this.ar.snapshot.params["id"];
    this.carService.getCarsById(id).subscribe(result => this.selectedCar = result );
    this.ownerService.getOwners().subscribe(result => this.owners = result)

  }

  update(f: NgForm) {

    this.carService.updateCar(this.selectedCar).subscribe( )

    if (f.valid){
      this.router.navigate(['/cars']);
    }
  }
}
