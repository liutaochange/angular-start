import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  private products: Array<Product>

  constructor() { }

  ngOnInit() {
    /*this.products = [{
      new Product(1,'商品名称',2.99,3.55,'还不错',['实战','入门']),
      new Product(2,'商品名称',2.99,3.55,'还不错',['实战','入门']),
      new Product(3,'商品名称',2.99,3.55,'还不错',['实战','入门']),
      new Product(4,'商品名称',2.99,3.55,'还不错',['实战','入门']),
      new Product(5,'商品名称',2.99,3.55,'还不错',['实战','入门']),
      new Product(6,'商品名称',2.99,3.55,'还不错',['实战','入门']),
    }]*/
  }

}

export class Product {
  id:number;
  title:string;
  price:number;
  rating:number;
  desc:string;
  categories: Array<string>;
}
