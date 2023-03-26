import { Component } from '@angular/core';
import { Observable , interval } from 'rxjs';


@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent {

 seconds! : number
 qrcode: string ='ahmed'

 ngOnInit(): void {
   const counter =  interval(1000);
   counter.subscribe((sec : number) => {
    this.seconds = sec;
   })
 }
}
