import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IEmployee } from './services-angular/employee-details';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {

  private _url: string = 'https://random-data-api.com/api/name/random_name?size=11';
  constructor(private http: HttpClient) { }

  getEmployees(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this._url).pipe(
      catchError(this.errorHandler)
    )
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || "")
  }
}
