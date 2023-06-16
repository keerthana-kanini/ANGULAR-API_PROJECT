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
  Patients?:Patient;

  constructor(private apiser:PatientService){}
  ngOnInit(): void{

  }
  deletebyid()
  {
    return this.apiser.deleteById(Number(this.patient_Id))
     .subscribe((data: Patient | undefined) => this.Patients =data)
    
  }

}
