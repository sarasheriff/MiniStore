import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductUpdateComponent } from './product-update/product-update.component';
import { SingleProductComponent } from './single-product/single-product.component';


const routes: Routes = [{
  path:'',component:ProductListComponent
},
{
  path:'add',component:ProductAddComponent
},
{
  path:'edit/:id',component:ProductUpdateComponent
},
{
  path:'product/:id',component:SingleProductComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
