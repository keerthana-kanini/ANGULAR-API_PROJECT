import { Component } from '@angular/core';
import { Appointment } from '../Appointment';
import { AppointmentService } from '../appointment.service';

@Component({
  selector: 'app-appointment-post',
  templateUrl: './appointment-post.component.html',
  styleUrls: ['./appointment-post.component.css']
})
export class AppointmentPostComponent {
  appointment: Appointment = {
    appointment_Id: 0,
    patient_Id: 0,
    doctor_Id: 0,
    appointment_Date: new Date()
  };

  constructor(private appointmentService: AppointmentService) { }

  createAppointment(): void {
    this.appointmentService.createAppointment(this.appointment)
      .subscribe(() => {
        alert('Appointment created successfully!');
        this.appointment = {
          appointment_Id: 0,
          patient_Id: 0,
          doctor_Id: 0,
          appointment_Date: new Date()
        };
      });
  }
}
