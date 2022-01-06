import { Component, OnInit } from "@angular/core";
import { DepartmentService } from "../department.service";
import { IDepartment, } from "./department.details";

@Component({
  selector: 'department-list',
  template: `
    <h2>Department List</h2>
    <ul *ngFor="let department of departments">
        <department-details [department]="department"></department-details>
    </ul>
  `,
  styles: []
})

export class DepartmentList implements OnInit {
  public departments: IDepartment[] = [];
  public errorMessage: string;
  constructor(private _departmentService: DepartmentService) {

  }

  ngOnInit(): void {
    this._departmentService.getDepartments().subscribe(
      data => this.departments = data,
      error => this.errorMessage = error
    )
  }
}
