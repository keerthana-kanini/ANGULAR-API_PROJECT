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
  Doctors?:Doctor;

  constructor(private apiser:DPService){}
  ngOnInit(): void{

  }
  deletebyid()
  {
    return this.apiser.deleteById(Number(this.doctor_Id))
     .subscribe((data: Doctor | undefined) => this.Doctors =data)
    
  }

}
