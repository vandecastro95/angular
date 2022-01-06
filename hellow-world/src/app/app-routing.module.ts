import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DepartmentList } from "./department-list/department.list";
import { AngularServicesTest } from "./services-angular/services-angular";
import { PageNotFound } from "./page-not-found/page.not.found";
import { DepartmentExpanded } from "./department-list/department.expand";
import { DepartmentContact } from "./department-list/department.contact";

const routes: Routes = [
  { path: '', redirectTo: '/departments', pathMatch: 'full' },
  { path: 'departments', component: DepartmentList },
  {
    path: 'departments/:id',
    component: DepartmentExpanded,
    children: [
      // { path: "overview", component: DepartmentOverview },
      { path: "contact", component: DepartmentContact },
    ]
  },
  { path: 'employees', component: AngularServicesTest },
  { path: "**", component: PageNotFound }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
export const routingComponents = [DepartmentList, AngularServicesTest, PageNotFound, DepartmentExpanded, DepartmentContact]
