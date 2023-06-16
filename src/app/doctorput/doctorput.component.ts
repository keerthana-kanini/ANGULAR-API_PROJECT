import { Component } from '@angular/core';
import { Doctor } from '../Doctor';
import { DPService } from '../dp.service';

@Component({
  selector: 'app-doctorput',
  templateUrl: './doctorput.component.html',
  styleUrls: ['./doctorput.component.css']
})
export class DoctorputComponent {
  doctorput: Doctor = {
    doctor_Id: 0,
    doctor_Name: '',
    specialization: '',
    doctor_No: '',
  };
  doctor_Id!: number;

  constructor(private apiser: DPService) {}

  Updatedoctor() {
    this.apiser.update(this.doctor_Id, this.doctorput).subscribe(updated => {
      console.log('Update', updated);
    });
  }
}
