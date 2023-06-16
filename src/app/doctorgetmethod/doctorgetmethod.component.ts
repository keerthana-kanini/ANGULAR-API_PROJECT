import { Component } from '@angular/core';
import { Doctor } from '../Doctor';
import { DPService } from '../dp.service';

@Component({
  selector: 'app-doctorgetmethod',
  templateUrl: './doctorgetmethod.component.html',
  styleUrls: ['./doctorgetmethod.component.css']
})
export class DoctorgetmethodComponent {
  Doctor?: Doctor[]
  constructor(private apiser:DPService) { }
  
  ngOnInit(): void {
    this.GetAll();
  }
  GetAll()
  {
    return this.apiser.getData().subscribe((data: Doctor[] | undefined) => this.Doctor=data)
  }
}
