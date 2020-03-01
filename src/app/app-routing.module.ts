import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// add imports
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';
import { AuthGuardService } from './guard/auth-guard.service';
import { ResgisterComponent } from './resgister/resgister.component';

const routes: Routes = [
  {
    path: '',
    component: ResgisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'users',
    canActivate: [AuthGuardService],
    component: UsersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
