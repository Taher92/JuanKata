import { Component, OnInit } from '@angular/core';
import {IEmployee} from '../employees';
import {Router} from '@angular/router';
import {EmployeeService} from '../employee.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.css']
})
export class DeleteEmployeeComponent implements OnInit {

  currentEmployee:IEmployee |null = null

  constructor( private employeeService:EmployeeService, private router:Router,private activatedRoute: ActivatedRoute) 
  { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params => { const id = params['Id']; 
  
    this.employeeService.getItemById(id) 
    .subscribe(result => {
    
    this.currentEmployee = { 
   id: result.id,
    firstName: result.firstName,
    lastName: result.lastName,
    email:result.email,            
    specialization:
                {

                    id:(result.specialization!=null)?result.specialization?.id:0,

                    name:(result.specialization!=null)?result.specialization?.name:"",                  
                }, 
    team:
    {
        id:(result.team!=null)?result.team?.id:0,
        name:(result.team!=null)?result.team?.name:"",      
    },   
  }
    }, error => console.error(error)
    )

});
  }

  delete()
  { 
    if (this.currentEmployee != null) {      
    this.employeeService.delete(this.currentEmployee.id) 
       .subscribe(result => {
       this.router.navigate(["/"]);
       }, error => console.error(error)
       );
      }      
  }

}
