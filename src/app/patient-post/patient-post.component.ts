import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { PatientService } from '../patient.service';
import { Doctor } from '../Doctor';
import { Patient } from '../Patient';


@Component({
  selector: 'app-patient-post',
  templateUrl: './patient-post.component.html',
  styleUrls: ['./patient-post.component.css']
})
export class PatientPostComponent {
  public patient: Patient = {
    patient_Id: 0,
    patient_Name: '',
    disease: '',
    email: '',
    patient_No: '',
    doctor_Id: 0,
    doctor: undefined
  };

  constructor(private patientService: PatientService) { }

  insertPatient() {
    const doctor: Doctor = {
      doctor_Id: this.patient.doctor_Id,
      doctor_Name: '',
      specialization: '',
      doctor_No: '',
      patients: []
    };

    this.patient.doctor = doctor;

    this.patientService.insertPatient(this.patient)
      .subscribe({
        next: (data: Patient) => {
          console.log('Patient inserted:', data);
          this.patient = data; // Update the patient with the returned data
        },
        error: (error: any) => {
          console.error('Error inserting patient:', error);
        }
      });
  }
}
