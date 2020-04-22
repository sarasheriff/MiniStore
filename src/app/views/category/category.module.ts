import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryAddComponent } from './category-add/category-add.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CategoryUpdateComponent } from './category-update/category-update.component';


@NgModule({
  declarations: [CategoryListComponent, CategoryAddComponent, CategoryUpdateComponent],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class CategoryModule { }
