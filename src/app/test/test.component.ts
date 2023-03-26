import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
alg = true
tun = false
bra = false

changeColor() {
  switch (true) {
    case this.alg:
      this.alg = false;
      this.tun = true;
      break;
    case this.tun:
      this.tun = false;
      this.bra = true;
      break;
    case this.bra:
      this.bra = false;
      this.alg = true;
      break;
    default:
      // do nothing
  }
}

}
