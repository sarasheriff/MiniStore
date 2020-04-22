import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomelayoutComponent } from './shared/components/layout-pages/homelayout/homelayout.component';
import { AdminlayoutComponent } from './shared/components/layout-pages/adminlayout/adminlayout.component';
import { AuthlayoutComponent } from './shared/components/layout-pages/authlayout/authlayout.component';


const routes: Routes = [{
  path:'',
  component:HomelayoutComponent,
  children:[{
    path:'',
    loadChildren:()=>import('./views/page-home/page-home.module').then(m=>m.PageHomeModule)
  }]
},
{
  path:'admin',component:AdminlayoutComponent,
  children:[{
    path:'category',
    loadChildren:()=>import('./views/category/category.module').then(m=>m.CategoryModule)
  },{
    path:'products',
    loadChildren:()=>import('./views/products/products.module').then(m=>m.ProductsModule)
  }]
},
{path:'auth',component:AuthlayoutComponent,
children:[{
  path:'',
  loadChildren:()=>import('./views/auth/auth.module').then(m=>m.AuthModule)
}]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
