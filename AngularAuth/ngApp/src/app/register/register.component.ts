import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  public registerUserData = {
    email: "",
    password: ""
  }
  constructor(private _authService: AuthService, private router: Router) { }

  onRegister() {
    this._authService.registerUser(this.registerUserData).subscribe(
      res => {
        localStorage.setItem('token', res.token)
        this.router.navigate(['/events'])
      },
      err => console.log(err)
    )
  }

}
