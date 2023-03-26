import { OwnersService } from 'src/app/services/owners.service';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-owner',
  templateUrl: './edit-owner.component.html',
  styleUrls: ['./edit-owner.component.css']
})
export class EditOwnerComponent {
 owner! : any

 constructor(private router : Router, private ar: ActivatedRoute, private OwnersService  : OwnersService){
 }


 ngOnInit(): void {
  let id!:number
  id = this.ar.snapshot.params["id"];
  this.OwnersService.getOwnerById(id).subscribe(result => this.owner = result );
}


update(f: NgForm) {

  this.OwnersService.updateOwner(this.owner).subscribe( )

  if (f.valid){
    this.router.navigate(['/owners']);
  }
}

}
