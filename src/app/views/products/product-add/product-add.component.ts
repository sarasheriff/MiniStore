import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/shared/services/product.service';
@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {

   // form
   addForm: FormGroup
   submitted:boolean
   product:Observable<any[]>;
   constructor(private fb: FormBuilder,private router: Router,private productSer:ProductService) {
       this.product = this.productSer.getData().valueChanges()
   }

  ngOnInit(): void {
    this.getForm() 
  }
  getForm() {
    this.addForm = this.fb.group({
      name: [null, Validators.required],
      description: [null, Validators.required],
      price: [null, Validators.required],
      img: [null, Validators.required]
    })
  }
  //get form controls
  get f() {
    return this.addForm.controls
  }
  // add new item function
  onSubmit(name:HTMLInputElement,des:HTMLInputElement,
    price:HTMLInputElement,img:HTMLInputElement) {
    this.submitted = true
    if (this.addForm.invalid) return;
   let res = this.productSer.getData().push({
      name:name.value,
      desc:des.value,
      price:price.value,
      img:img.value
    }).key;
    name.value=''
   this.router.navigate(['../admin/products'])
    
    console.log('ok')
  }
}
