import { Component, OnInit } from "@angular/core";
import { EmployeeService } from "../employee.service";
import { IEmployee } from "./employee-details";

@Component({
  selector: "angular-services-test",
  template: `
    <h2>Employee List</h2>
    <h5 *ngIf="errorMessage">{{ errorMessage }}</h5>
    <ul *ngFor="let employee of employees">
      <employee-details [employee]="employee"></employee-details>

    </ul>
  `,
  styles: []
})

export class AngularServicesTest implements OnInit {

  public employees: IEmployee[] = []
  public errorMessage: string;
  constructor(private _employeeService: EmployeeService) {

  }

  ngOnInit() {
    this._employeeService.getEmployees().subscribe(
      (data) => this.employees = data,
      (error) => this.errorMessage = error
    )
  }
}
