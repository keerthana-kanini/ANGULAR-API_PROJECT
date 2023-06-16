import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorgetmethodComponent } from './doctorgetmethod/doctorgetmethod.component';
import { DoctorgetbyidComponent } from './doctorgetbyid/doctorgetbyid.component';
import { DoctorpostComponent } from './doctorpost/doctorpost.component';
import { DoctorputComponent } from './doctorput/doctorput.component';
import { DoctordeleteComponent } from './doctordelete/doctordelete.component';
import { MainpageComponent } from './mainpage/mainpage.component';
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
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { UserLoginComponent } from './user-login/user-login.component';

const routes: Routes = [
  {path : '', redirectTo:'/list', pathMatch:'full'},
  {path:'choose', component : AdminSideComponentComponent},
  {path:'docpage', component :MainpageComponent},
  {path:'apppage', component :AppointmentMainComponent},
  {path:'patpage', component :AppointmentPageComponent},
  {path:'Getall', component :DoctorgetmethodComponent},
  {path:'GetbyId', component :DoctorgetbyidComponent},
  {path:'Create', component :DoctorpostComponent},
  { path: 'doctorput/:id', component: DoctorputComponent },
  {path:'Update', component :DoctorputComponent},
  {path:'Delete', component :DoctordeleteComponent},
  {path:'Count', component :DoctorPatientCountComponent},
  {path:'patientgetall', component :PatientgetmethodComponent},
  {path:'patientgetbyid', component :PatientgetbyidComponent},
  {path:'patientinsert', component :PatientPostComponent},
  { path: 'patientupdate/:id', component: PatientPutComponent } ,
  {path:'patientupdate', component :PatientPutComponent},
  {path:'patientdelete', component :PatientDeleteComponent},
  {path:'appointmentgetall', component :AppointmentGetMethodComponent},
  {path:'appointmentgetbyid', component :AppointmentGetByIdComponent},
  {path:'appointmentput', component :AppointmentPutComponent},
  { path: 'appointput/:id', component: AppointmentPutComponent },
  {path:'appointmentpost', component :AppointmentPostComponent},
  {path:'appointmentdelete', component :AppointmentDeleteComponent},
  {path:'adminlogin', component :AdminLoginComponent},
  {path:'userlogin', component :UserLoginComponent},


  {path:'**',redirectTo:'/list'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
