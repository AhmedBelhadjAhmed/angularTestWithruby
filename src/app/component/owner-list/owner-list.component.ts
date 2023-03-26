import { Component } from '@angular/core';
import { Owners } from 'src/app/model/owners';
import { OwnersService } from 'src/app/services/owners.service';

@Component({
  selector: 'app-owner-list',
  templateUrl: './owner-list.component.html',
  styleUrls: ['./owner-list.component.css']
})
export class OwnerListComponent {

 owners : any =[]
 owner :any
  constructor(private ownerService : OwnersService){

  }
  ngOnInit(): void {
    this.getOwnersFromServices();
  }

  getOwnersFromServices(){
    return this.ownerService.getOwners().subscribe( data => this.owners = data )
  }


 getOwnerByidFromService(owner: any) {

  this.ownerService.getOwnerById(owner.id).subscribe(result => this.owner = result);
}


deleteOwner(id: number) {
  this.ownerService.deleteOwner(id).subscribe(() => {
     this.owners = this.owners.filter((o : any ) => o.id !== id);
     this.owner = null;
  });
}

}
