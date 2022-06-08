import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { ProductCartComponent } from './product-cart/product-cart.component';


@NgModule({
  declarations: [
    ProductListComponent,
    ProductViewComponent,
    ProductCartComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ],
  exports:[
    ProductListComponent,
    ProductViewComponent
  ]
})
export class ProductsModule { }
