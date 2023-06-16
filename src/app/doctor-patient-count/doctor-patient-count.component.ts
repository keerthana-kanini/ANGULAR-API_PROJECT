import { Component } from '@angular/core';
import { DPService } from '../dp.service';

@Component({
  selector: 'app-doctor-patient-count',
  templateUrl: './doctor-patient-count.component.html',
  styleUrls: ['./doctor-patient-count.component.css']
})
export class DoctorPatientCountComponent {
  doctor_Id!: number;
  patientCount!: number;

  constructor(private apiser:DPService) {}

  getPatientCount(): void {
    if (this.doctor_Id) {
      this.apiser.getPatientCountByDoctorId(this.doctor_Id).subscribe({
        next: (count: number) => {
          this.patientCount = count;
        },
        error: (error: any) => {
          console.error(error);
        }
      });
    }
  }

}
