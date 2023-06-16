import { Injectable } from '@angular/core';
import { Doctor } from './Doctor';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DPService {
  constructor(private http:HttpClient) { }
  getData() :Observable<Doctor[]>
  {
    return this.http.get<Doctor[]>('https://localhost:7206/api/Doctor')
  }
  getdoctorById(doctor_Id : number) :Observable<Doctor | undefined>
  {
    return this.http.get<Doctor>(`https://localhost:7206/api/Doctor/${doctor_Id}`);

  }
  createDoctor(Doctor:Doctor) : Observable<Doctor>{
    return this.http.post<Doctor>('https://localhost:7206/api/Doctor',Doctor);

  }
  update(doctor_Id:number,Doctor: Doctor) :Observable<Doctor>{
    return this.http.put<Doctor>(`https://localhost:7206/api/Doctor/${doctor_Id}`,Doctor);
  }
  deleteById(doctor_Id : number) :Observable<Doctor | undefined>
  {
    return this.http.delete<Doctor>(`https://localhost:7206/api/Doctor/${doctor_Id}`);

  }
  getPatientCountByDoctorId(doctorId: number): Observable<number> {
    return this.http.get<number>(`https://localhost:7206/api/Doctor/${doctorId}/patients/count`);
  }
  
}
