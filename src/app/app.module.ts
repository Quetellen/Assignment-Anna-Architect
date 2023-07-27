import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ClientCreationComponent } from './client-creation/client-creation.component';
import { ClientMeetingComponent } from './client-meeting/client-meeting.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MyProjectComponent } from './my-project/my-project.component';
import { ClientComponent } from './client/client.component';
import { ClientPortfolioComponent } from './client-portfolio/client-portfolio.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ClientCreationComponent,
    ClientMeetingComponent,
    DashboardComponent,
    MyProjectComponent,
    ClientComponent,
    ClientPortfolioComponent   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
