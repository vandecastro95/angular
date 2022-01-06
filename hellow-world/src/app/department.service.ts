import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { IDepartment } from "./department-list/department.details";
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class DepartmentService {
  private _url: string = 'https://random-data-api.com/api/company/random_company?size=10';

  constructor(private _http: HttpClient) {

  }

  getDepartments(): Observable<IDepartment[]> {
    return this._http.get<IDepartment[]>(this._url).pipe(
      catchError(this.errorHandler)
    )
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || "")
  }
}
