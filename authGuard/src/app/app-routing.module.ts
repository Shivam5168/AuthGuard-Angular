import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login/login.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { authGuard } from './shared/auth/auth.guard';
import { ListComponent } from './features/list/list.component';

const routes: Routes = [{path: 'login', component: LoginComponent},
 {path: 'dashboard', canActivate:[authGuard], component: DashboardComponent},
  {path: 'list', canActivate:[authGuard], component: ListComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
