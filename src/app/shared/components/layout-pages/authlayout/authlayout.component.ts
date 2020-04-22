import { Component, OnInit } from '@angular/core';
import {Validators, FormBuilder} from '@angular/forms'
// import { usernameValidators } from './customeValidat.validators';
@Component({
  selector: 'app-authlayout',
  templateUrl: './authlayout.component.html',
  styleUrls: ['./authlayout.component.scss']
})
export class AuthlayoutComponent implements OnInit {
 
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }
 

 

}

