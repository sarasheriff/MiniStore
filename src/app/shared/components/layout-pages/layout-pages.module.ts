import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminlayoutComponent } from './adminlayout/adminlayout.component';
import { HomelayoutComponent } from './homelayout/homelayout.component';
import { AuthlayoutComponent } from './authlayout/authlayout.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [AdminlayoutComponent, HomelayoutComponent, AuthlayoutComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
 
  ]
})
export class LayoutPagesModule { }
