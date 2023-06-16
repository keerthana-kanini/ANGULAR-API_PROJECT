import { Component } from '@angular/core';
import { PatientService } from '../patient.service';
import { Patient } from '../Patient';

@Component({
  selector: 'app-patient-delete',
  templateUrl: './patient-delete.component.html',
  styleUrls: ['./patient-delete.component.css']
})
export class PatientDeleteComponent {
  public patient_Id!: number;
  Patients?: Patient;

  constructor(private apiser: PatientService) {}

  deletebyid() {
    this.apiser.deleteById(Number(this.patient_Id))
      .subscribe(
        (data: Patient | undefined) => {
          if (data) {
            this.Patients = data;
            alert('Patient deleted successfully!');
          } else {
            alert('Unable to delete patient. Please check the ID and try again.');
          }
        },
        (error: any) => {
          console.error('Error deleting patient:', error);
          alert('Unable to delete patient. Please check the ID and try again.');
        }
      );
  }
}
