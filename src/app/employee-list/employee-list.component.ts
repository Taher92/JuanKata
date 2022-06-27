import { Component, OnInit } from '@angular/core';
import { EMPLOYEES } from '../employees';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees = EMPLOYEES;

  ngOnInit(): void {
    console.table(this.employees)
  }
}
