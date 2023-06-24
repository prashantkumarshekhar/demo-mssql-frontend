import { DashboardComponent } from './component/dashboard/dashboard.component';
import { BookDashboardComponent } from './component/book-dashboard/book-dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: 'book', component: BookDashboardComponent },
  { path: 'emp', component: DashboardComponent }
];  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})



export class AppRoutingModule { 

}
