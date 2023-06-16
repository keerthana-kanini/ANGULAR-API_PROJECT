import { Patient } from "./Patient";

export interface Doctor {
    doctor_Id?:number;
    doctor_Name?:string;
    specialization?:string;
    doctor_No?:string;
    patients?: Patient[];
  }