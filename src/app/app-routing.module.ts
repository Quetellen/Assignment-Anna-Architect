import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientMeetingComponent } from './client-meeting/client-meeting.component';
import { ClientCreationComponent } from './client-creation/client-creation.component';
import { MyProjectComponent } from './my-project/my-project.component';
import { MaterialPricesComponent } from './material-prices/material-prices.component';

const routes: Routes = [
  {path:'client-meeting', component: ClientMeetingComponent},
  {path:'My-project', component: MyProjectComponent},
  {path:'material-prices', component: MaterialPricesComponent},
  {path: 'client-creation', component: ClientCreationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
