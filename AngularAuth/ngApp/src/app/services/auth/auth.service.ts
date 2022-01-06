import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface ILoginCredentials {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private registerUrl = "http://localhost:3000/api/register";
  private loginUrl = "http://localhost:3000/api/login";
  constructor(private http: HttpClient) { }

  registerUser(userData: ILoginCredentials) {
    return this.http.post<any>(this.registerUrl, userData)
  }

  loginUserData(userData: ILoginCredentials) {
    return this.http.post<any>(this.loginUrl, userData)
  }

  logoutUser() {
    localStorage.removeItem('token');
  }

  loggedIn() {
    return Boolean(localStorage.getItem('token'));
  }

  getToken() {
    return localStorage.getItem('token');
  }
}
