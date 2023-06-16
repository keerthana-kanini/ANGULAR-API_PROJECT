import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Doctor } from '../Doctor';
import { DPService } from '../dp.service';

@Component({
  selector: 'app-doctorput',
  templateUrl: './doctorput.component.html',
  styleUrls: ['./doctorput.component.css']
})
export class DoctorputComponent implements OnInit {
  doctorput: Doctor = {
    doctor_Id: 0,
    doctor_Name: '',
    specialization: '',
    doctor_No: '',
  };

  constructor(
    private route: ActivatedRoute,
    private apiser: DPService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const doctorId = Number(params.get('id'));
      if (!isNaN(doctorId)) {
        this.getDoctor(doctorId);
      }
    });
  }

  getDoctor(doctorId: number): void {
    this.apiser.getdoctorById(doctorId).subscribe(
      (doctor: Doctor | undefined) => {
        if (doctor) {
          this.doctorput = doctor;
        } else {
          console.error('Doctor not found.');
        }
      },
      error => {
        console.error('Error retrieving doctor:', error);
      }
    );
  }

  Updatedoctor(): void {
    if (!this.doctorput.doctor_Id || this.doctorput.doctor_Id <= 0) {
      alert('Please enter a valid doctor ID.');
      return;
    }
  
    this.apiser.update(this.doctorput.doctor_Id, this.doctorput).subscribe(
      () => {
        alert('Doctor updated successfully!');
      },
      error => {
        console.error('Error updating doctor:', error);
        alert('An error occurred while updating the doctor. Please try again later.');
      }
    );
  }
  
}