import {Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  private title: string

  constructor(private routerInfo: ActivatedRoute) {
  }

  ngOnInit() {
    this.title = this.routerInfo.snapshot.paramMap.get('productId')
  }

}
