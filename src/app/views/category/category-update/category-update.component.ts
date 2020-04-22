import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryServicesService } from 'src/app/shared/services/category-services.service';

@Component({
  selector: 'app-category-update',
  templateUrl: './category-update.component.html',
  styleUrls: ['./category-update.component.scss']
})
export class CategoryUpdateComponent implements OnInit {
  itemId: String;
  cats$
  editForm: FormGroup
  submitted: Boolean
  itemInfo = {}
  constructor(private router: Router,
    private activatedRout: ActivatedRoute,
    private fb: FormBuilder,
    private service: CategoryServicesService) {

  }
  ngOnInit() {
    this.editFunForm();
    this.activatedRout.params.subscribe(params => {
      this.itemId = params.id
      this.cats$ = this.service.getSingleObj(this.itemId).valueChanges().subscribe(res => {
        this.itemInfo = res
        this.editForm.patchValue({
          name: res['name'],
          description: res['desc']
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
      description: [null, Validators.required]
    })
  }
  // submit function
  onSubmit(input: HTMLInputElement, des: HTMLInputElement) {
    this.submitted = true;
    if (this.editForm.invalid) return;
    // update data
    this.service.updateData(this.itemId)({
      name: input.value,
      desc: des.value
    })
    this.router.navigate(['../admin/category'])
  }
}

