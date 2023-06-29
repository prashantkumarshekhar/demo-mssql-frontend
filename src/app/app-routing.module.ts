import { HomeComponent } from './component/home/home.component';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './component/login/login.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { BookDashboardComponent } from './component/book-dashboard/book-dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: 'book', component: BookDashboardComponent,canActivate:[AuthGuard] },
  { path: 'emp', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path:'',component:HomeComponent}
];  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})



export class AppRoutingModule { 

}
