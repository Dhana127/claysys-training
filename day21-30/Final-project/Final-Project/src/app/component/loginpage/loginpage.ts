import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-loginpage',
  standalone:true,
  imports: [RouterModule,ReactiveFormsModule],
  providers:[FormControl],
  templateUrl: './loginpage.html',
  styleUrl: './loginpage.css',
})
export class Loginpage {
  
  loginForm=new FormGroup({
  email : new FormControl('',Validators.required),
  password :new FormControl('',Validators.required)
  });

  constructor(private router: Router) {
    
  }

  onLogin() {
    if (this.loginForm.invalid) {
    alert('Please enter both email and password');
    return;
  }
    console.log('Login clicked');
    this.router.navigate(['/order']);
  }
}
