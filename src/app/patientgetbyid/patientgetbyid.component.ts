import { Component } from '@angular/core';
import { Patient } from '../Patient';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-patientgetbyid',
  templateUrl: './patientgetbyid.component.html',
  styleUrls: ['./patientgetbyid.component.css']
})
export class PatientgetbyidComponent {
  public patient_Id!: number;
  public patient: Patient | undefined;

  constructor(private apiser: PatientService) { }

  ngOnInit(): void {}

  Getbyid() {
    this.apiser.getpatientById(Number(this.patient_Id))
      .subscribe((data: Patient | undefined) => this.patient = data);
  }
}
