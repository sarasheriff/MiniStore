import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  admin
  disable: boolean = false
  forms: FormGroup;
  submitted: boolean
  constructor(private fb: FormBuilder, private router: Router, private db: AngularFireDatabase) { }

  ngOnInit(): void {
    this.getForm()
    // console.log(this.f.email.value)
  }
  getForm() {
    this.forms = this.fb.group({
      email: [null, [Validators.required, Validators.pattern(/^[a-z]\w{1,}@[a-z]{1,}.com$/)]],
      password: [null, [Validators.required, Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{5,}$/)]]
    })
  }
  // get form controls
  get f() {
    return this.forms.controls
  }


  // submit function
  onSubmit(input: HTMLInputElement, pass: HTMLInputElement, form: FormGroup) {
    this.submitted = true;
    if (this.forms.invalid) return;
    console.log(form.controls.email.value)
    this.db.object(`/adminInfo/1`).valueChanges().subscribe(res => {
      this.admin = res
      console.log(this.admin)
      if (form.controls.email.value != this.admin.username && form.controls.password.value != this.admin.password) {
        this.disable = true;
      }
    })
    console.log('registred')
    this.router.navigate(['../'])
  }

}
