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
    if (!this.isValidAppointment()) {
      alert('Please enter valid appointment details.');
      return;
    }

    this.appointmentService.createAppointment(this.appointment)
      .subscribe(
        () => {
          alert('Appointment created successfully!');
          this.resetForm();
        },
        error => {
          console.error('Error creating appointment:', error);
          alert('Please enter valid appointment details.');
        }
      );
  }

  private isValidAppointment(): boolean {
    
    if (this.appointment.patient_Id <= 0 || this.appointment.doctor_Id <= 0) {
      return false;
    }
    
    return true;
  }

  private resetForm(): void {
    this.appointment = {
      appointment_Id: 0,
      patient_Id: 0,
      doctor_Id: 0,
      appointment_Date: new Date()
    };
  }
}
