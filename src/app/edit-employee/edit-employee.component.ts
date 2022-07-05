import { Component, OnInit } from '@angular/core';

import {IEmployee} from '../employees';
import {Router} from '@angular/router';
import {EmployeeService} from '../employee.service';
import {ActivatedRoute} from '@angular/router';

import { Team,specialization } from '../employees';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
  public teams: Team[]=[];
  public specializations: specialization[]=[];

  currentEmployee:IEmployee |null = null

  constructor( private employeeService:EmployeeService, private router:Router,private activatedRoute: ActivatedRoute) 
  { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params => {      const id = params['Id'];   
  
    // this.employeeService.createNewEmployee(this.currentEmployee)
    this.employeeService.getItemById(id)  
              .subscribe(result => {              
                this.currentEmployee = { 
                  id: result.id,
                   firstName: result.firstName,
                   lastName: result.lastName, 
                   email:result.email,                    
                   specialization:{id:result.specialization.id,name:result.specialization.name},
                   team:{id:result.team.id,name:result.team.name}
                 }
      console.log(this.currentEmployee);
              }, error => console.error(error)
              );  
     });

     this.loadTeams();
     this.loadSpecializations();
  }

  updateTeam(event){
    console.log(event);
    
    this.currentEmployee.team = this.teams.find(t=> t.id == event.id);
  }
  save()
  {
    this.employeeService.saveToDo(this.currentEmployee).subscribe(result => 
    { 
      console.log(this.currentEmployee);
     this.router.navigate( ["/"] );
     }, error => console.error(error)
     );
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
