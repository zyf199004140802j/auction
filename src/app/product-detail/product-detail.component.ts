import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Product, ProductService, Comment } from "../shared/product.service";
import { Observable } from "rxjs";
import { FormControl } from "@angular/forms";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: Product;
  comments: Comment[];
  newRating: number = 5;
  newComment: string = "";
  isCommentHidden = true;

  constructor(private routerInfo: ActivatedRoute, private productService: ProductService) {
  }

  ngOnInit() {
    let productId: number = this.routerInfo.snapshot.params["productId"];
    console.log(productId);

    this.product = this.productService.getProductById(productId);
    this.comments = this.productService.getCommentsForProductId(productId);
  }

  addComment() {
    let comment = new Comment(0, this.product.id, new Date().toDateString(), "someOne", this.newRating, this.newComment);
    this.comments.unshift(comment);
    let sum = this.comments.reduce((sum, comment) => sum + comment.rating, 0);
    this.product.rating = sum / this.comments.length;
    this.newComment = null;
    this.newRating = 5;
    this.isCommentHidden = true;
  }

}
