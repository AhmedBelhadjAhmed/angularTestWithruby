import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() public sendNameToChild :any

  @Output() public childEvent = new EventEmitter();

  eventChild(){
    this.childEvent.emit("message from child to parent");
  }

}
