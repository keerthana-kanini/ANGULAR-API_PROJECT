import { Component } from '@angular/core';
import { Doctor } from '../Doctor';
import { DPService } from '../dp.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctorgetmethod',
  templateUrl: './doctorgetmethod.component.html',
  styleUrls: ['./doctorgetmethod.component.css']
})
export class DoctorgetmethodComponent {
  Doctor?: Doctor[];
  searchId: string = '';
  filteredDoctors: Doctor[] = [];

  constructor(private apiser: DPService, private router: Router) {}

  ngOnInit(): void {
    this.GetAll();
  }

  GetAll(): void {
    this.apiser.getData().subscribe((data: Doctor[] | undefined) => {
      this.Doctor = data;
      this.filteredDoctors = this.Doctor || [];
    });
  }

  deleteDoctor(doctor: Doctor): void {
    if (doctor.doctor_Id) {
      const confirmDelete = confirm('Are you sure you want to delete this doctor?');
      if (confirmDelete) {
        this.apiser.deleteById(doctor.doctor_Id).subscribe((data: Doctor | undefined) => {
          // Handle success or error response
          console.log('Doctor deleted:', data);
          // Refresh the doctor list after deletion
          this.GetAll();
        });
      }
    }
  }

  openUpdateForm(doctor: Doctor): void {
    if (doctor.doctor_Id) {
      this.router.navigate(['/doctorput', doctor.doctor_Id]);
    }
  }

  searchDoctor(): void {
    if (!this.searchId) {
      this.filteredDoctors = this.Doctor || [];
    } else {
      this.filteredDoctors = this.Doctor?.filter(
        (doctor) => doctor.doctor_Id?.toString() === this.searchId
      ) || [];
    }
  }
  
}
