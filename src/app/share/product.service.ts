import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    new Product(1, '商品名称', 2.99, 3.55, '还不错', ['实战', '入门']),
    new Product(2, '商品名称', 2.99, 3.55, '还不错', ['实战', '入门']),
    new Product(3, '商品名称', 2.99, 3.55, '还不错', ['实战', '入门']),
    new Product(4, '商品名称', 2.99, 3.55, '还不错', ['实战', '入门']),
    new Product(5, '商品名称', 2.99, 3.55, '还不错', ['实战', '入门']),
    new Product(6, '商品名称', 2.99, 3.55, '还不错', ['实战', '入门'])
  ];

  private comments: Comment[] = [
    new Comment(1, 1, '2018/6/11 22:26:29', '逍遥', 4, '良心推荐'),
    new Comment(2, 1, '2018/6/12 22:26:29', '逍遥子', 4, '良心推荐'),
    new Comment(3, 1, '2018/6/13 22:26:29', '奇点', 4, '良心推荐'),
    new Comment(4, 2, '2018/6/14 22:26:29', '杨烁', 4, '良心推荐'),
    new Comment(5, 3, '2018/6/15 22:26:29', '王子', 4, '良心推荐'),
    new Comment(6, 4, '2018/6/16 22:26:29', '小李', 4, '良心推荐'),
  ];

  constructor() {
  }

  getProducts() {
    return this.products
  }

  getProductItem(id: number): Product {
    return this.products.find((product) => product.id == id)
  }

  getComments(id: number): Comment[] {
    return this.comments.filter((item: Comment) => item.productId == id)
  }
}

export class Product {
  constructor(
    id: number,
    title: string,
    price: number,
    rating: number,
    desc: string,
    categories: Array<string>
  ) {
  }
}

export class Comment {
  constructor(
    id: number,
    productId: number,
    timestamp: string,
    user: string,
    rating: number,
    content: string,
  ) {
  }
}
