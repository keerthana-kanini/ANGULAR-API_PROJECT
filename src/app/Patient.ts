import { Doctor } from './Doctor';

export interface Patient {
  patient_Id: number;
  patient_Name: string;
  disease: string;
  email: string;
  patient_No: string;
  doctor_Id: number; // Add the doctor_Id foreign key
  doctor?: Doctor;
}
