import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { TestComponent } from './interpolationDataBinding/test.component';
import { ClassBinding } from "./classBinding/test.component";
import { AppComponent } from './app.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TemplateReference } from './template-reference/templateReference';
import { TwoWayBinding } from './two-way-binding/twoWayBinding';
import { NgIf } from "./ng-if/ngIf";
import { NgSwitchTest } from './ng-switch-test/ng-switch-test';
import { NgForLoopTest } from './ng-for-loop/ng-for-loop-text';
import { ComponentInteraction } from './component-interaction/component-interaction';
import { TestPipes } from './pipes/pipes';
import { EmployeeDetails } from './services-angular/employee-details';
import { EmployeeService } from './employee.service';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { DepartmentDetails } from './department-list/department.details';
import { DepartmentExpanded } from './department-list/department.expand';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    ClassBinding,
    EventBindingComponent,
    TemplateReference,
    TwoWayBinding,
    NgIf,
    NgSwitchTest,
    NgForLoopTest,
    ComponentInteraction,
    TestPipes,
    EmployeeDetails,
    DepartmentDetails,
    routingComponents,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
