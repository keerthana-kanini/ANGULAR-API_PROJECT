import { Component } from '@angular/core';
import { Doctor } from '../Doctor';
import { DPService } from '../dp.service';

@Component({
  selector: 'app-doctorpost',
  templateUrl: './doctorpost.component.html',
  styleUrls: ['./doctorpost.component.css']
})
export class DoctorpostComponent {
  doctorpost: Doctor = {
    doctor_Id: 0,
    doctor_Name: '',
    specialization: '',
    doctor_No: ''
  };

  constructor(private apiser: DPService) { }

  create(): void {
    if (this.isValidForm()) {
      this.apiser.createDoctor(this.doctorpost)
        .subscribe(() => {
          alert('Doctor Inserted successfully!');
        });
    }
  }

  private isValidForm(): boolean {
    if (!this.doctorpost.doctor_Name || !this.doctorpost.specialization || !this.doctorpost.doctor_No) {
      alert('Please fill in all the required fields.');
      return false;
    }
    return true;
  }
}
