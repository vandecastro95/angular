import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginUserData = {
    email: "",
    password: ""
  }
  constructor(private authService: AuthService, private router: Router) { }
  loginUser() {
    this.authService.loginUserData(this.loginUserData).subscribe(
      (res) => {
        localStorage.setItem('token', res.token);
        this.router.navigate(['/events'])
      },
      (error) => console.log(error)
    )
  }

}
