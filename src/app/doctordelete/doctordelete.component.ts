import { Component } from '@angular/core';
import { DPService } from '../dp.service';
import { Doctor } from '../Doctor';

@Component({
  selector: 'app-doctordelete',
  templateUrl: './doctordelete.component.html',
  styleUrls: ['./doctordelete.component.css']
})
export class DoctordeleteComponent {
  public doctor_Id!: number;
  Doctors?: Doctor;

  constructor(private apiser: DPService) {}

  deletebyid() {
    const confirmDelete = confirm('Are you sure you want to delete this doctor?');
    if (confirmDelete) {
      this.apiser.deleteById(Number(this.doctor_Id))
        .subscribe((data: Doctor | undefined) => {
          this.Doctors = data;
          alert('Doctor deleted successfully!');
        });
    }
  }
  
}
