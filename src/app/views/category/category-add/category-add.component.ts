import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { CategoryServicesService } from 'src/app/shared/services/category-services.service';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.scss']
})
export class CategoryAddComponent implements OnInit {
  // form
  addForm: FormGroup
  submitted:boolean
  cats$:Observable<any[]>;
  constructor(private fb: FormBuilder,private router: Router,private serviceCat:CategoryServicesService) {
      this.cats$ = this.serviceCat.getData().valueChanges()
  }

  ngOnInit(){ 
    this.getForm() }

  getForm() {
    this.addForm = this.fb.group({
      name: [null, Validators.required],
      description: [null, Validators.required]
    })
  }
  // get form control
  get f() {
    return this.addForm.controls
  }
  // add function
  onSubmit(course:HTMLInputElement,des:HTMLInputElement) {
    this.submitted = true
    if (this.addForm.invalid) return;
   let res = this.serviceCat.getData().push({
      name:course.value,
      desc:des.value
    }).key;
console.log(res)
    course.value=''
   this.router.navigate(['../admin/category'])
    
    console.log('ok')
  }
}
