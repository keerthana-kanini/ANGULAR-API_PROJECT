import { Component } from '@angular/core';
import { Appointment } from '../Appointment';
import { AppointmentService } from '../appointment.service';

@Component({
  selector: 'app-appointment-get-by-id',
  templateUrl: './appointment-get-by-id.component.html',
  styleUrls: ['./appointment-get-by-id.component.css']
})
export class AppointmentGetByIdComponent {
  appointment: Appointment | undefined;
  appointmentId: number = 0;

  constructor(private appointmentService: AppointmentService) { }

  getAppointmentById(): void {
    this.appointmentService.getAppointmentById(this.appointmentId)
      .subscribe(appointment => this.appointment = appointment);
  }
}
