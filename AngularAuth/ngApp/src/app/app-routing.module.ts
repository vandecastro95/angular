import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsComponent } from './events/events.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './services/auth/guard/auth.guard';
import { SpecialEventsComponent } from './special-events/special-events.component';

const routes: Routes = [
  { path: "", redirectTo: "event", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "events", component: EventsComponent, canActivate: [AuthGuard] },
  { path: "special", component: SpecialEventsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {


}

export const routeComponents = [
  LoginComponent,
  RegisterComponent,
  EventsComponent,
  SpecialEventsComponent
]
