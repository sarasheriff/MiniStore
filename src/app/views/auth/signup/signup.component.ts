import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  forms:FormGroup;
  submitted:boolean
  constructor(private fb:FormBuilder,private router: Router) { }

  ngOnInit(): void {
    this.getForm()
  }
  getForm(){
    this.forms=this.fb.group({
      email:[null,[Validators.required,Validators.pattern(/^[a-z]\w{1,}@[a-z]{1,}.com$/)]],
      password:[null,[Validators.required,Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{5,}$/)]]
    })
  }
  get  f(){
    return this.forms.controls
  }
 
  
  // submit function
  onSubmit(email: HTMLInputElement, pass: HTMLInputElement) {
    this.submitted = true;
    if (this.forms.invalid) return;
   console.log('registred')
    this.router.navigate(['../admin/category'])
  }

}
