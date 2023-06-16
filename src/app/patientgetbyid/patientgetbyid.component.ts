import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Patient } from '../Patient';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-patientgetbyid',
  templateUrl: './patientgetbyid.component.html',
  styleUrls: ['./patientgetbyid.component.css']
})
export class PatientgetbyidComponent {
  public patient_Id!: number;
  public patient: Patient | undefined;

  constructor(private router: Router, private patientService: PatientService) {}

  Getbyid() {
    this.patientService.getpatientById(Number(this.patient_Id)).subscribe(
      (data: Patient | undefined) => {
        if (data) {
          this.patient = data;
          alert('Patient retrieved successfully!');
        } else {
          alert('Patient not found. Please check the ID and try again.');
        }
      },
      (error: any) => {
        console.error('Error retrieving patient:', error);
        alert('Patient not found. Please check the ID and try again.');
      }
    );
  }

  editPatient(patient: Patient | undefined): void {
    if (patient) {
      // Navigate to the PatientPutComponent with the patient ID as a route parameter
      const route = ['/patientupdate', patient.patient_Id];
      console.log('Generated URL:', this.router.createUrlTree(route).toString());
      this.router.navigate(route);
    }
  }

  deletePatient(patientId: number | undefined): void {
    if (patientId) {
      const confirmation = confirm('Are you sure you want to delete this patient?');
      if (confirmation) {
        this.patientService.deleteById(patientId).subscribe((data: Patient | undefined) => {
          // Perform any additional actions after successful deletion, such as refreshing the patient list
          this.search();
        });
      }
    }
  }
  search() {
    throw new Error('Method not implemented.');
  }
}
