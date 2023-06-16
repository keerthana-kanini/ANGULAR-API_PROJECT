import { Component, OnInit } from '@angular/core';
import { Patient } from '../Patient';
import { PatientService } from '../patient.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patientgetmethod',
  templateUrl: './patientgetmethod.component.html',
  styleUrls: ['./patientgetmethod.component.css']
})
export class PatientgetmethodComponent implements OnInit {
  patients?: Patient[];
  searchId?: number;

  constructor(private patientService: PatientService, private router: Router) { }
  
  ngOnInit(): void {
    this.getAllPatients();
  }

  getAllPatients(): void {
    this.patientService.getData().subscribe((data: Patient[] | undefined) => {
      this.patients = data;
    });
  }

  getById(): void {
    if (this.searchId) {
      this.patientService.getpatientById(this.searchId).subscribe(
        (data: Patient | undefined) => {
          if (data) {
            this.patients = [data]; // Display only the found patient
            alert('Patient retrieved successfully!');
          } else {
            this.patients = []; // Clear the table if patient not found
            alert('Patient not found. Please check the ID and try again.');
          }
        },
        (error: any) => {
          console.error('Error retrieving patient:', error);
          this.patients = []; // Clear the table on error
          alert('Patient not found. Please check the ID and try again.');
        }
      );
    }
  }

  search(): void {
    if (this.searchId) {
      this.getById(); // Call the getById method to search by ID
    } else {
      this.getAllPatients(); // Call the getAllPatients method to show all patients
    }
  }

  editPatient(patient: Patient): void {
    // Navigate to the PatientPutComponent with the patient ID as a route parameter
    const route = ['/patientupdate', patient.patient_Id];
    console.log('Generated URL:', this.router.createUrlTree(route).toString());
    this.router.navigate(route);
  }

  deletePatient(patientId: number): void {
    const confirmation = confirm('Are you sure you want to delete this patient?');
    if (confirmation) {
      this.patientService.deleteById(patientId).subscribe((data: Patient | undefined) => {
        // Perform any additional actions after successful deletion, such as refreshing the patient list
        this.search();
      });
    }
  }
}
