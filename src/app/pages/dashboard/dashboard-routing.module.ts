import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { ConsultantComponent } from './consultant/consultant.component';
import { ScheduleComponent } from './schedule/schedule.component';



const routes: Routes = [
    {
        path: '',
        component: DashboardComponent,
        children: [
            {
                path: '',
                redirectTo: 'home',
                pathMatch: 'full'
            },
            {
                path: 'home',
                component: ConsultantComponent
            },
            {
                path: 'schedule',
                component: ScheduleComponent
            },
            {
                path: '**',
                redirectTo: 'home'
            }
        ]
    }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
