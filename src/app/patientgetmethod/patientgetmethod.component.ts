import { Component } from '@angular/core';
import { Patient } from '../Patient';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-patientgetmethod',
  templateUrl: './patientgetmethod.component.html',
  styleUrls: ['./patientgetmethod.component.css']
})
export class PatientgetmethodComponent {
  patients?: Patient[];

  constructor(private patientService: PatientService) { }
  
  ngOnInit(): void {
    this.getAllPatients();
  }

  getAllPatients(): void {
    this.patientService.getData().subscribe((data: Patient[] | undefined) => {
      this.patients = data;
    });
  }
}
