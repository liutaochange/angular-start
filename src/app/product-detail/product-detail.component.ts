import {Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  private title: number

  constructor(private routerInfo: ActivatedRoute) {
  }

  ngOnInit() {
    let productId: number = this.routerInfo.snapshot.paramMap.get('productId')
    this.title = productId
  }

}
