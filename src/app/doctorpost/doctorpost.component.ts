import { Component } from '@angular/core';
import { Doctor } from '../Doctor';
import { DPService } from '../dp.service';

@Component({
  selector: 'app-doctorpost',
  templateUrl: './doctorpost.component.html',
  styleUrls: ['./doctorpost.component.css']
})
export class DoctorpostComponent {
  doctorpost : Doctor ={
    doctor_Id:0,
    doctor_Name:' ',
    specialization:' ',
    doctor_No:' ',
    

  };

  constructor(private apiser:DPService){ }

  ngOnInit():void{

  }
  create()
  {
    this.apiser.createDoctor(this.doctorpost)
    .subscribe(Doctor => 
      {
        console.log('Created Doctor'),Doctor
      })
  }


}
