import { Component, OnInit } from '@angular/core';
import { Product, ProductService } from "../shared/product.service";
import { FormControl } from "@angular/forms";
import 'rxjs/RX'
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  birthday: Date = new Date();
  public keyword: string;
  private titleFilter: FormControl = new FormControl();
  public products: Array<Product>;
  private imgUrl = "http://placehold.it/320x150";
  m: number = 0;
  constructor(private productService: ProductService) {
    this.titleFilter.valueChanges
      .debounceTime(500)
      .subscribe(
      value => this.keyword = value,
      ()=>console.log(this.keyword)
      )
  }

  ngOnInit() {
    this.products = this.productService.getProducts();

  }
}

