import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {  HttpClientModule } from '@angular/common/http';
import { DoctorgetmethodComponent } from './doctorgetmethod/doctorgetmethod.component';
import { DoctorgetbyidComponent } from './doctorgetbyid/doctorgetbyid.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { DoctorpostComponent } from './doctorpost/doctorpost.component';
import { DoctorputComponent } from './doctorput/doctorput.component';
import { DoctordeleteComponent } from './doctordelete/doctordelete.component';
import { AdminSideComponentComponent } from './admin-side-component/admin-side-component.component';
import { AppointmentPageComponent } from './appointment-page/appointment-page.component';
import { PatientgetmethodComponent } from './patientgetmethod/patientgetmethod.component';
import { PatientgetbyidComponent } from './patientgetbyid/patientgetbyid.component';
import { PatientPostComponent } from './patient-post/patient-post.component';
import { PatientPutComponent } from './patient-put/patient-put.component';
import { PatientDeleteComponent } from './patient-delete/patient-delete.component';
import { AppointmentGetMethodComponent } from './appointment-get-method/appointment-get-method.component';
import { AppointmentMainComponent } from './appointment-main/appointment-main.component';
import { AppointmentGetByIdComponent } from './appointment-get-by-id/appointment-get-by-id.component';
import { AppointmentPostComponent } from './appointment-post/appointment-post.component';
import { AppointmentPutComponent } from './appointment-put/appointment-put.component';
import { AppointmentDeleteComponent } from './appointment-delete/appointment-delete.component';
import { DoctorPatientCountComponent } from './doctor-patient-count/doctor-patient-count.component';


@NgModule({
  declarations: [
    AppComponent,
    DoctorgetmethodComponent,
    DoctorgetbyidComponent,
    MainpageComponent,
    DoctorpostComponent,
    DoctorputComponent,
    DoctordeleteComponent,
    AdminSideComponentComponent,
    AppointmentPageComponent,
    PatientgetmethodComponent,
    PatientgetbyidComponent,
    PatientPostComponent,
    PatientPutComponent,
    PatientDeleteComponent,
    AppointmentGetMethodComponent,
    AppointmentMainComponent,
    AppointmentGetByIdComponent,
    AppointmentPostComponent,
    AppointmentPutComponent,
    AppointmentDeleteComponent,
    DoctorPatientCountComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
