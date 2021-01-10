import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './dashboard/screens/login/login.component';
import { SignupComponent } from './dashboard/screens/signup/signup.component';
import { WorkExperienceComponent } from './dashboard/screens/work-experience/work-experience.component';
import { AuthGuard } from './dashboard/services/authGuard';


const routes: Routes = [
  { path:"", redirectTo:"login", pathMatch:"full"},
  { path:"login", component:LoginComponent},
  { path:"signup", component:SignupComponent},
  { path:"home", component:WorkExperienceComponent, canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
