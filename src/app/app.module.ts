import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatRadioModule} from "@angular/material/radio";
import {MatInputModule} from "@angular/material/input";
import {DoctorRequestResultsComponent} from "./request-results/pages/doctor/doctor-request-results.component";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSortModule} from "@angular/material/sort";
import {HttpClientModule} from "@angular/common/http";
import {MatCardModule} from "@angular/material/card";
import {DoctorAppointmentsComponent} from "./appointments/pages/doctor/doctor-appointments.component";
import {BaseService} from "./shared/services/base.service";
import { PageNotFoundComponent } from './public/pages/page-not-found/page-not-found.component';
import {DoctorTreatmentsComponent} from "./treatments/pages/doctor/doctor-treatments.component";
import {CdkDragPlaceholder} from "@angular/cdk/drag-drop";
import {MatOption, MatSelect} from "@angular/material/select";
import { DoctorRequestHistoryComponent } from './request-history/pages/doctor/doctor-request-history.component';
import { ReviewAppointmentComponent } from './appointments/components/review-appointment/review-appointment.component';
import {MatSlider} from "@angular/material/slider";
import { PatientExamResultsComponent } from './request-results/pages/patient/patient-request-results/patient-exam-results.component';
import {MatMenuModule} from "@angular/material/menu";
import {Register} from "./public/pages/register-page/register";
import {PatientRegisterFormComponent} from "./public/components/patient-register-form/patient-register-form.component";
import {DoctorRegisterFormComponent} from "./public/components/doctor-register-form/doctor-register-form.component";
import {
  ConsultancyRegisterFormComponent
} from "./public/components/consultancy-register-form/consultancy-register-form.component";
import {NgOptimizedImage} from "@angular/common";
import { PatientAppointmentsComponent } from './appointments/pages/patient/patient-appointments.component';
import {NewAppointmentComponent} from "./appointments/components/new-appointment/new-appointment.component";
import {MatStep, MatStepLabel, MatStepper, MatStepperNext, MatStepperPrevious} from "@angular/material/stepper";


@NgModule({
  declarations: [
    AppComponent,
    DoctorRequestResultsComponent,
    DoctorAppointmentsComponent,
    PageNotFoundComponent,
    DoctorTreatmentsComponent,
    DoctorRequestHistoryComponent,
    ReviewAppointmentComponent,
    Register,
    PatientRegisterFormComponent,
    DoctorRegisterFormComponent,
    ConsultancyRegisterFormComponent,
    PatientExamResultsComponent,
    PatientAppointmentsComponent,
    NewAppointmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    FormsModule,
    MatRadioModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule,
    HttpClientModule,
    CdkDragPlaceholder,
    MatSelect,
    MatOption,
    MatSlider,
    ReactiveFormsModule,
    NgOptimizedImage,
    MatMenuModule,
    MatStep,
    MatStepperNext,
    MatStepper,
    MatStepLabel,
    MatStepperPrevious
  ],
  providers: [
    BaseService,provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
