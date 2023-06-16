import { Component } from '@angular/core';
import { Appointment } from '../Appointment';
import { AppointmentService } from '../appointment.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-appointment-get-method',
  templateUrl: './appointment-get-method.component.html',
  styleUrls: ['./appointment-get-method.component.css']
})
export class AppointmentGetMethodComponent {
  appointments: Appointment[] = [];
  filteredAppointments: Appointment[] = [];
  searchQuery: string = '';
  appointmentId: number = 0;

  constructor(private appointmentService: AppointmentService,private router: Router) {}

  ngOnInit(): void {
    this.getAppointments();
  }

  getAppointments(): void {
    this.appointmentService.getAppointments().subscribe(appointments => {
      this.appointments = appointments;
      this.filteredAppointments = appointments;
    });
  }

  filterAppointments(): void {
    if (this.searchQuery) {
      this.filteredAppointments = this.appointments.filter(appointment =>
        appointment.appointment_Id.toString().includes(this.searchQuery) ||
        appointment.patient_Id.toString().includes(this.searchQuery) ||
        appointment.doctor_Id.toString().includes(this.searchQuery)
      );
    } else {
      this.filteredAppointments = this.appointments;
    }
  }

  getAppointmentById(): void {
    if (this.appointmentId) {
      const appointment = this.appointments.find(a => a.appointment_Id === this.appointmentId);
      if (appointment) {
        this.filteredAppointments = [appointment];
      } else {
        this.filteredAppointments = [];
      }
    } else {
      this.filteredAppointments = this.appointments;
    }
  }

  editAppointment(appointment: Appointment): void {
    this.router.navigate(['/appointput', appointment.appointment_Id]);
  }
  
  confirmDeleteAppointment(appointment: Appointment): void {
    const confirmDelete = confirm('Are you sure you want to delete this appointment?');
    if (confirmDelete) {
      this.deleteAppointment(appointment);
    }
  }

  deleteAppointment(appointment: Appointment): void {
    this.appointmentService.deleteAppointment(appointment.appointment_Id).subscribe(
      () => {
        alert('Appointment deleted successfully!');
        this.filteredAppointments = this.filteredAppointments.filter(a => a !== appointment);
      },
      error => {
        console.error('Error deleting appointment:', error);
        alert('An error occurred while deleting the appointment. Please try again later.');
      }
    );
  }
}
