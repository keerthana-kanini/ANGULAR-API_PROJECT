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
      .subscribe(
        appointment => {
          if (appointment) {
            this.appointment = appointment;
          } else {
            alert('Appointment not found. Please check the ID and try again.');
          }
        },
        error => {
          console.error('Error retrieving appointment:', error);
          alert('An error occurred while retrieving the appointment. Please try again later.');
        }
      );
  }

  updateAppointment(): void {
    if (!this.isValidAppointment()) {
      alert('Please enter valid appointment details.');
      return;
    }
  
    this.appointmentService.updateAppointment(this.appointment.appointment_Id, this.appointment).subscribe(
      () => {
        alert('Appointment updated successfully!');
        this.resetForm();
      },
      error => {
        console.error('Error updating appointment:', error);
        alert('Please enter valid appointment details.');
      }
    );
  }
  

  private isValidAppointment(): boolean {
    
    // Return true if the appointment details are valid; otherwise, return false
    return true;
  }

  private resetForm(): void {
    this.appointmentId = 0;
    this.appointment = {
      appointment_Id: 0,
      patient_Id: 0,
      doctor_Id: 0,
      appointment_Date: new Date()
    };
  }
}
