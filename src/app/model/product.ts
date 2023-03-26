export class Product {
  productName : String;
  price : number;
  quantity : number ;

  constructor(productName : String, price:number, quantity:number) {
    this.productName = productName;
    this.price = price;
    this.quantity = quantity;
  }
}
