import { Component, OnInit } from '@angular/core';
import { IProduct } from '../models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products:IProduct[]= [];
  errorMessage = '';
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.getProductList();
  }
  getProductList()
  {
    this.productService.getProducts().subscribe({
      next: products => {
        this.products = products.data;
      },
      error: err => this.errorMessage = err
    });
  }

}
