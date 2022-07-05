import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EMPLOYEES, IEmployee } from '../employees';


import {EmployeeService} from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  // employees = EMPLOYEES;
   public employees: IEmployee[]=[];

   constructor(private employeeService:EmployeeService) {}

  ngOnInit(): void {
    //console.table(this.employees)
   // Router.na
    this.loadData();
  }
  loadData() {
    this.employeeService.getEmployees()
    .subscribe( resultArray => this.employees= resultArray,    error => console.log("Error :: " + error) )
   }
}
