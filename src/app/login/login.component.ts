// import { Component, OnInit } from '@angular/core';
// import { FormGroup,FormControl,Validators } from '@angular/forms';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent implements OnInit {
//   loginForm :any = FormGroup
// hide: any;
//   constructor() { }

//   ngOnInit() {
//     this.loginForm = new FormGroup(
//       {
//         email : new FormControl('',[Validators.required,Validators.email]),
//         password : new FormControl('',[Validators.required,Validators.minLength(6)])
//       }
//     )
//   }

//   onLogin(){
//     console.log("dfb")

//   }

// }

// login.component.ts

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  // public loginModel = {
  //   username: '',
  //   password: ''
  // };

  user = {
    username: '',
    password: '',
  };
  constructor(private router: Router) { }
  // Handle the login form submission
  public onSubmit(): void {
    // Implement your login logic here
    console.log('Login submitted:', this.user);
    this.router.navigate(['/users']);
  }
}

