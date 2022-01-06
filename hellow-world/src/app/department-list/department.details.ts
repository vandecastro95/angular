import { Component, Input } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

export interface IDepartment {
  business_name: string;
  industry: string;
  id: number;

}

@Component({
  selector: 'department-details',
  template: `
    <li (click)="onSelect()">{{ department.id}} : {{ department.business_name }} - {{ department.industry }} </li>
  `,
  styles: []
})

export class DepartmentDetails {
  @Input() public department: IDepartment;
  constructor(private router: Router, private route: ActivatedRoute) {

  }
  onSelect() {
    this.router.navigate([this.department.id], { state: this.department, relativeTo: this.route })
  }
}
