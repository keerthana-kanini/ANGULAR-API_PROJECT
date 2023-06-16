import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Appointment } from './Appointment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private http: HttpClient) { }

  getAppointments(): Observable<Appointment[]> {
    return this.http.get<Appointment[]>('https://localhost:7206/api/Appointments');
  }

  getAppointmentById(appointmentId: number): Observable<Appointment> {
    return this.http.get<Appointment>(`https://localhost:7206/api/Appointments/${appointmentId}`);
  }

  createAppointment(appointment: Appointment): Observable<Appointment> {
    return this.http.post<Appointment>('https://localhost:7206/api/Appointments', appointment);
  }

  updateAppointment(appointmentId: number, appointment: Appointment): Observable<Appointment> {
    return this.http.put<Appointment>(`https://localhost:7206/api/Appointments/${appointmentId}`, appointment);
  }

  deleteAppointment(appointmentId: number): Observable<void> {
    return this.http.delete<void>(`https://localhost:7206/api/Appointments/${appointmentId}`);
  }
}
