import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductUpdateComponent } from './product-update/product-update.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SingleProductComponent } from './single-product/single-product.component';


@NgModule({
  declarations: [ProductListComponent, ProductAddComponent, ProductUpdateComponent, SingleProductComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    ReactiveFormsModule
  ]
})
export class ProductsModule { }
