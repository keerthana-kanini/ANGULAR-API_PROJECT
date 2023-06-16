import { Component } from '@angular/core';
import { AppointmentService } from '../appointment.service';

@Component({
  selector: 'app-appointment-delete',
  templateUrl: './appointment-delete.component.html',
  styleUrls: ['./appointment-delete.component.css']
})
export class AppointmentDeleteComponent {
  appointmentId: number = 0;

  constructor(private appointmentService: AppointmentService) { }

  deleteAppointment(): void {
    this.appointmentService.deleteAppointment(this.appointmentId)
      .subscribe(() => {
        alert('Appointment deleted successfully!');
        this.appointmentId = 0;
      });
  }
}
