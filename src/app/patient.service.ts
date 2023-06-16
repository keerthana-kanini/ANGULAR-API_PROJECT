import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Patient } from './Patient';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private http:HttpClient) { }

  getData() :Observable<Patient[]>
  {
    return this.http.get<Patient[]>('https://localhost:7206/api/Patients')
  }
  getpatientById(Patient_Id : number) :Observable<Patient | undefined>
  {
    return this.http.get<Patient>(`https://localhost:7206/api/Patients/${Patient_Id}`);

  }
  insertPatient(Patient:Patient) : Observable<Patient>{
    return this.http.post<Patient>('https://localhost:7206/api/Patients',Patient);

  }
  updatePatient(Patient_Id:number,Patient: Patient) :Observable<Patient>{
    return this.http.put<Patient>(`https://localhost:7206/api/Patients/${Patient_Id}`,Patient);
  }
  deleteById(Patient_Id : number) :Observable<Patient | undefined>
  {
    return this.http.delete<Patient>(`https://localhost:7206/api/Patients/${Patient_Id}`);

  }
}

  
