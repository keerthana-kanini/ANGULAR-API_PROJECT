import { Component } from '@angular/core';
import { PatientService } from '../patient.service';
import { Doctor } from '../Doctor';
import { Patient } from '../Patient';

@Component({
  selector: 'app-patient-put',
  templateUrl: './patient-put.component.html',
  styleUrls: ['./patient-put.component.css']
})
export class PatientPutComponent {
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

  updatePatient() {
    const doctor: Doctor = {
      doctor_Id: this.patient.doctor_Id,
      doctor_Name: '',
      specialization: '',
      doctor_No: '',
      patients: []
    };

    this.patient.doctor = doctor;

    const patientId: number = this.patient.patient_Id;

    this.patientService.updatePatient(patientId, this.patient)
      .subscribe({
        next: (data: Patient) => {
          console.log('Patient updated:', data);
          this.patient = data; // Update the patient with the returned data
          alert('Patient updated successfully!');
        },
        error: (error: any) => {
          console.error('Error updating patient:', error);
          alert('Error updating patient. Please try again.');
        }
      });
  }
}
