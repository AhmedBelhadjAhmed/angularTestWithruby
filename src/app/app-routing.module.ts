import { EditOwnerComponent } from './component/edit-owner/edit-owner.component';
import { AjouterOwnerComponent } from './component/ajouter-owner/ajouter-owner.component';
import { CarsformComponent } from './component/carsform/carsform.component';
import { CarsComponent } from './component/cars/cars.component';

import { ParentComponent } from './component/parent/parent.component';
import { ChildComponent } from './component/child/child.component';

import { TestComponent } from './test/test.component';
import { RegisterComponent } from './register/register.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductsComponent } from './component/products/products.component';
import { ObservableComponent } from './component/observable/observable.component';
import { FormComponent } from './component/form/form.component';
import { UpdateComponent } from './component/update/update.component';
import { OwnerListComponent } from './component/owner-list/owner-list.component';

 const routes: Routes = [

  { path: 'user' , component: UserComponent },
  { path: 'register' , component:  RegisterComponent },
  { path: 'test' , component:  TestComponent },
  { path: 'parent' , component:  ParentComponent },
  { path: 'child' , component:  ChildComponent },
  { path: 'products' , component:  ProductsComponent },
  { path: 'observable' , component:  ObservableComponent },
  { path: 'form' , component:  FormComponent },
  { path: 'cars' , component:  CarsComponent },
  { path: 'carsform' , component:  CarsformComponent },
  { path: 'updateCar/:id' , component:  UpdateComponent },
  { path: 'owners' , component:  OwnerListComponent },
  { path: 'addowner' , component:  AjouterOwnerComponent },
  { path: 'updateOwner/:id' , component:  EditOwnerComponent },
  { path: '**' , component:  UserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
