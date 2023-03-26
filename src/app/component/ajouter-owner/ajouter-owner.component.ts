import { OwnersService } from 'src/app/services/owners.service';
import { Component } from '@angular/core';
import { Owners } from 'src/app/model/owners';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-ajouter-owner',
  templateUrl: './ajouter-owner.component.html',
  styleUrls: ['./ajouter-owner.component.css']
})
export class AjouterOwnerComponent {
  owner! : Owners

  constructor(private ownerService : OwnersService, private router : Router){
       this.owner = new Owners();
  }

  onSbmit(f:NgForm){
    this.ownerService.createOwner( this.owner).subscribe()
    if(f.valid){
      this.router.navigate(['/owners']);
    }
  }


}
