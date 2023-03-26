import { Component } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { ngxCsv } from 'ngx-csv/ngx-csv';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  table : any = []

   constructor(private ps : ProductsService){

   }

  ngOnInit(): void {
    this.getProduct();

  }

  getProduct(){
    this.table = this.ps.tabService
  }

   data = [
    {
      name: "Test 1",
      age: 13,
      average: 8.2,
      approved: true,
      description: "using 'Content here, content here' "
    },
    {
      name: 'Test 2',
      age: 11,
      average: 8.2,
      approved: true,
      description: "using 'Content here, content here' "
    },
    {
      name: 'Test 4',
      age: 10,
      average: 8.2,
      approved: true,
      description: "using 'Content here, content here' "
    },
  ];

  downloadCsvFile(){
    var options = {
      fieldSeparator: ';',
      quoteStrings: '"',
      decimalseparator: '.',
      showLabels: true,
      showTitle: true,
      title: 'My title',
      useBom: true,
      noDownload: false,
      headers: ["Name", "Age", "Average", "Approved", "Description"]
    };

    new ngxCsv(this.data, "CsvFile", options);
  }


}
