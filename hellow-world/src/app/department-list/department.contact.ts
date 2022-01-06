import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "department-contact",
  template: `
    <h2>
      {{ department.phone_number }}
    </h2>
  `
})

export class DepartmentContact {
  public department: any;
  constructor(private router: Router) {
    if (router.getCurrentNavigation()?.extras.state) {
      this.department = router.getCurrentNavigation()?.extras.state
      console.log(this.department)
    } else {
      router.navigate(["/departments"])
    }
  }
}
