import { Component } from '@angular/core';
import { Appointment } from '../Appointment';
import { AppointmentService } from '../appointment.service';

@Component({
  selector: 'app-appointment-put',
  templateUrl: './appointment-put.component.html',
  styleUrls: ['./appointment-put.component.css']
})
export class AppointmentPutComponent {
  appointmentId: number = 0;
  appointment: Appointment = {
    appointment_Id: 0,
    patient_Id: 0,
    doctor_Id: 0,
    appointment_Date: new Date()
  };

  constructor(private appointmentService: AppointmentService) { }

  getAppointmentById(): void {
    this.appointmentService.getAppointmentById(this.appointmentId)
      .subscribe(appointment => this.appointment = appointment);
  }

  updateAppointment(): void {
    this.appointmentService.updateAppointment(this.appointmentId, this.appointment)
      .subscribe(() => {
        alert('Appointment updated successfully!');
        this.appointmentId = 0;
        this.appointment = {
          appointment_Id: 0,
          patient_Id: 0,
          doctor_Id: 0,
          appointment_Date: new Date()
        };
      });
  }
}
