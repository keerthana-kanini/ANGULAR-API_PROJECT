import { Component } from '@angular/core';
import { DPService } from '../dp.service';
import { Doctor } from '../Doctor';

@Component({
  selector: 'app-doctorgetbyid',
  templateUrl: './doctorgetbyid.component.html',
  styleUrls: ['./doctorgetbyid.component.css']
})
export class DoctorgetbyidComponent {
  public doctor_Id!: number;
  public doctor: Doctor | undefined;  // Change type to Doctor | undefined
  
  constructor(private apiser: DPService) { }
  
  ngOnInit(): void {
    
  }
  
  Getbyid() {
    this.apiser.getdoctorById(Number(this.doctor_Id))
      .subscribe((data: Doctor | undefined) => this.doctor = data)  // Assign single Doctor object to doctor
  
  }
}

