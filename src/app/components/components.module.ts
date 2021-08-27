import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CanlederComponent } from './canleder/canleder.component';
import { ActivitiesComponent } from './activities/activities.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { AppointmentChartComponent } from './appointment-chart/appointment-chart.component';
import { GenderChartComponent } from './gender-chart/gender-chart.component';
import { ChartsModule } from 'ng2-charts';



@NgModule({
  exports: [
    CanlederComponent, ActivitiesComponent, PatientListComponent, AppointmentChartComponent, GenderChartComponent
  ],
  declarations: [ 
    CanlederComponent, ActivitiesComponent, PatientListComponent, AppointmentChartComponent, GenderChartComponent
  ],
  imports: [
    CommonModule,
    ChartsModule
  
  ]
})
export class ComponentsModule { }