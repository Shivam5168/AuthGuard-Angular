import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent {

  loginForm!: FormGroup;

  constructor(private fb : FormBuilder, private router : Router){ }

  ngOnInit(){
    this.initializeForm();
  }

  login(){
    debugger
    if(this.loginForm.valid){
    localStorage.setItem('username', this.loginForm.value.username);
    localStorage.setItem('password', this.loginForm.value.password);
    //alert(this.loginForm.value.username + ' ' + this.loginForm.value.password);
    this.router.navigate(['/dashboard']);
    }else{
      alert("Please enter the username or password to login");
    } 
  }

  initializeForm(){
    this.loginForm = this.fb.group({
      username : ['', Validators.required],
      password : ['', Validators.required]
    })
  }

}
