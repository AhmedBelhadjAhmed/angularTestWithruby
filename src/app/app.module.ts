

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TestComponent } from './test/test.component';
import { ParentComponent } from './component/parent/parent.component';
import { ChildComponent } from './component/child/child.component';
import { ProductsComponent } from './component/products/products.component';
import { ObservableComponent } from './component/observable/observable.component';
import { FormComponent } from './component/form/form.component';
import { QRCodeModule } from 'angular2-qrcode';
import { HttpClientModule } from '@angular/common/http';
import { CarsComponent } from './component/cars/cars.component';
import { CarsformComponent } from './component/carsform/carsform.component';
import { UpdateComponent } from './component/update/update.component';
import { OwnerListComponent } from './component/owner-list/owner-list.component';
import { AjouterOwnerComponent } from './component/ajouter-owner/ajouter-owner.component';
import { EditOwnerComponent } from './component/edit-owner/edit-owner.component';



@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    RegisterComponent,
    NavbarComponent,
    TestComponent,
    ParentComponent,
    ChildComponent,
    ProductsComponent,
    ObservableComponent,
    FormComponent,
    CarsComponent,
    CarsformComponent,
    UpdateComponent,
    OwnerListComponent,
    AjouterOwnerComponent,
    EditOwnerComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
    QRCodeModule,
    HttpClientModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
