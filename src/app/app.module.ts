import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { BookDashboardComponent } from './component/book-dashboard/book-dashboard.component';
import { LoginComponent } from './component/login/login.component';
import { HomeComponent } from './component/home/home.component';
import { RegistrationComponent } from './component/registration/registration.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UimenuComponent } from './datamanagement/uimenu/uimenu.component';
import { HeaderComponent } from './component/header/header.component';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    BookDashboardComponent,
    LoginComponent,
    HomeComponent,
    RegistrationComponent,
    SidebarComponent,
    UimenuComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
