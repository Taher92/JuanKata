import { Component, OnInit } from '@angular/core';
import {IEmployee} from '../employees';
import {Router} from '@angular/router';

import {EmployeeService} from '../employee.service';

import { Team,specialization } from '../employees';


@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  public teams: Team[]=[];
  public specializations: specialization[]=[];
  

  public currentEmployee: IEmployee = {
    id: Math.random(),
    firstName: "max",
    lastName: "Musterman",
    email:"aa@aaa.com",
    team:null,
    specialization:null
  };

  constructor(private employeeService:EmployeeService,private router:Router) { 
    console.log("cons");
  }

  ngOnInit(): void {
    console.log("init");
    this.loadTeams();
    this.loadSpecializations();
  }
  save()
  { //ToDo EmployServices

    this.employeeService.createNewEmployee(this.currentEmployee)
    .subscribe(result => { 
      this.router.navigate( ["/"] );
      }, error => console.error(error)
      );

    // console.log("saved");
    // console.log(this.currentEmployee);
    // this.router.navigate( ["/"] )
  }
  loadTeams() {
    this.employeeService.getTeams()
    .subscribe( resultArray => this.teams= resultArray,    error => console.log("Error :: " + error) )
   }
   //specialization
   loadSpecializations() {
    this.employeeService.getSpecializations()
    .subscribe( resultArray => this.specializations= resultArray,    error => console.log("Error :: " + error) )
   }

}
