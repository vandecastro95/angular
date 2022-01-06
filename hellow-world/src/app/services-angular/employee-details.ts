import { Component, Input } from "@angular/core";

export interface IEmployee {
  name: string;
  id: number;
}

@Component({
  selector: 'employee-details',
  template: `
    <li> {{ employee.id }}. {{employee.name}}</li>
  `,
  styles: []
})

export class EmployeeDetails {
  @Input('employee') public employee: IEmployee;
}
