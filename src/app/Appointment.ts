import { Doctor } from "./Doctor";
import { Patient } from "./Patient";

export interface Appointment {
    appointment_Id: number;
    patient_Id: number;
    patient?: Patient;
    doctor_Id: number;
    doctor?: Doctor;
    appointment_Date: Date;
  }