import { Component, OnInit } from '@angular/core';
import { Employee1Service } from '../service/employee1.service';

@Component({
  selector: 'app-employee1',
  templateUrl: './employee1.component.html',
  styleUrls: ['./employee1.component.css']
})
export class Employee1Component  {
  filteredString:string=''; 
  sortby:any='1';
  employees:any=[];
  errMsg:any;
  constructor(proService:Employee1Service){
    proService.getEmployee1Info().subscribe(
      result => this.employees= result,
      error => this.errMsg = error
    )
  }


}
  
  