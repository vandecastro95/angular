import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'department-expanded',
  template: `
  <h2> Department Details </h2>
  <ul *ngFor="let key of objectKeys">
    <li>{{key}} : {{department[key]}} </li>
  </ul>
  <button (click)="goToContact()"> Contact </button>
  <button (click)="goToDepartments()">Go Back</button>
  <router-outlet></router-outlet>
  `,
  styles: []
})

export class DepartmentExpanded implements OnInit {
  public department: any;
  public objectKeys: string[];

  constructor(private router: Router, private route: ActivatedRoute) {
    if (this.router.getCurrentNavigation()?.extras?.state) {
      this.department = this.router.getCurrentNavigation()?.extras.state
    } else {
      this.router.navigate(["../"], { relativeTo: this.route })
    }
  };

  ngOnInit(): void {
    this.objectKeys = Object.keys(this.department)
  }

  goToDepartments() {
    this.router.navigate(["../"], { relativeTo: this.route })
  }

  goToContact() {
    this.router.navigate(["./", "contact"], { relativeTo: this.route, state: this.department })
  }

}
