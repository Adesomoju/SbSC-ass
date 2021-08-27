import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard.component';
import { ComponentsModule } from '../../components/components.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { ConsultantComponent } from './consultant/consultant.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ChartsModule } from 'ng2-charts';


@NgModule({
    declarations: [
        DashboardComponent,
        ConsultantComponent,
        ScheduleComponent,
    ],
    imports: [
        CommonModule,
        DashboardRoutingModule,
        ComponentsModule,
        MatSidenavModule,
        MatListModule,
        MatToolbarModule,
        ChartsModule
    ],
    providers: [ ]
})
export class DashboardModule { }
