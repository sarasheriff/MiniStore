import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/shared/services/product.service';
@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.scss']
})
export class ProductUpdateComponent implements OnInit {

  itemId: String; product
  editForm: FormGroup
  submitted: Boolean
  itemInfo = {}
  constructor(private router: Router,
    private activatedRout: ActivatedRoute,
    private fb: FormBuilder,
    private service: ProductService) {

  }

  ngOnInit(): void {
    this.editFunForm();
    this.activatedRout.params.subscribe(params => {
      this.itemId = params.id
      this.product= this.service.getSingleObj(this.itemId).valueChanges().subscribe(res => {
        this.itemInfo = res;
        this.editForm.patchValue({
          name: res['name'],
          description: res['desc'],
          price:res['price'],
          img:res['img']
        })
      })

    })
  }
  
  // get form control
  get f() {
    return this.editForm.controls
  }
  // angular form
  editFunForm() {
    this.editForm = this.fb.group({
      name: [null, Validators.required],
      description: [null, Validators.required],
      price: [null, Validators.required],
      img: [null, Validators.required]
    })
  }
  // submit function
  onSubmit(input: HTMLInputElement, des: HTMLInputElement,img:HTMLInputElement,price:HTMLInputElement) {
    this.submitted = true;
    if (this.editForm.invalid) return;
    // update data
    this.service.updateData(this.itemId)({
      name: input.value,
      desc: des.value
    })
    this.router.navigate(['../admin/products'])
  }

}


