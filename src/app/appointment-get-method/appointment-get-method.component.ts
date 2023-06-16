import { Component, OnInit } from '@angular/core';
import { Appointment } from '../Appointment';
import { AppointmentService } from '../appointment.service';

@Component({
  selector: 'app-appointment-get-method',
  templateUrl: './appointment-get-method.component.html',
  styleUrls: ['./appointment-get-method.component.css']
})
export class AppointmentGetMethodComponent implements OnInit {
  appointments: Appointment[] = [];

  constructor(private appointmentService: AppointmentService) { }

  ngOnInit(): void {
    this.getAppointments();
  }

  getAppointments(): void {
    this.appointmentService.getAppointments()
      .subscribe(appointments => this.appointments = appointments);
  }
}
