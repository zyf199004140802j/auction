import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {

  private products: Product[] = [
    new Product(1, "one", 1.99, 3.5, "first product", ["电子商品1,硬件设备1"]),
    new Product(2, "two", 2.99, 2.5, "second product", ["电子商品2,硬件设备2"]),
    new Product(3, "three", 3.99, 4.5, "third product", ["电子商品3,硬件设备3"]),
    new Product(4, "four", 4.99, 1.5, "fourrth product", ["电子商品4,硬件设备4"]),
    new Product(5, "five", 5.99, 3.5, "fifth product", ["电子商品5,硬件设备5"]),
    new Product(6, "six", 6.99, 2.5, "sixth product", ["电子商品6,硬件设备6"])
  ]

  public comments: Comment[]=[
    new Comment(1,1,"2017-02-02 22:22:22","张三",3,"东西不错"),
    new Comment(2,1,"2017-02-02 23:22:22","李四",4,"东西不错"),
    new Comment(3,1,"2017-02-02 2:22:22","王五",2,"东西不错"),
    new Comment(4,2,"2017-02-02 2:22:22","张三",4,"东西不错")
  ];

  constructor() { }

  getProducts():Product[] {
    return this.products;
  }

  getProductById(id: number): Product {
    return this.products.find((product) => product.id == id);

  }

  getCommentsForProductId(id:number):Comment[]{
    return this.comments.filter((comment:Comment)=>comment.productId==id);
  }
}
export class Product {

  constructor(public id: number,
    public title: string,
    public price: number,
    public rating: number,
    public desc: string,
    public categories: Array<string>) {

  }
}

export class Comment {
  constructor(public id: number,
    public productId: number,
    public timestamp: string,
    public user: string,
    public rating: number,
    public content: string) {

  }
}