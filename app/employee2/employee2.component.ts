import { Component, OnInit } from '@angular/core';
import { Employee1Service } from '../service/employee1.service';

@Component({
  selector: 'app-employee2',
  templateUrl: './employee2.component.html',
  styleUrls: ['./employee2.component.css']
})
export class Employee2Component  {

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
  
