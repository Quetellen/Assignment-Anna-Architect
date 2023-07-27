import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientMeetingComponent } from './client-meeting/client-meeting.component';
import { ClientCreationComponent } from './client-creation/client-creation.component';
import { MyProjectComponent } from './my-project/my-project.component';
import { ClientComponent } from './client/client.component';
import { ClientPortfolioComponent } from './client-portfolio/client-portfolio.component';

const routes: Routes = [
  {path:'client-meeting', component: ClientMeetingComponent},
  {path:'My-project', component: MyProjectComponent},
  {path:'client-portfolio', component: ClientPortfolioComponent},
  {path: 'client-creation', component: ClientCreationComponent},
  {path: 'client', component: ClientComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
