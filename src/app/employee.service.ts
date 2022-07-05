import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
//import {ToDo} from '../app/to-do';
import {IEmployee, Team,specialization} from '../app/employees';
// import { EMPLOYEES } from '..//app/employees';

import { Observable, throwError } from "rxjs";
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

 // employees = EMPLOYEES;
  private employeeUrl = '../../assets/employees.json';

  constructor(private http: HttpClient) {

    console.log(this.employeeUrl);
  }

  // getEmployees() {
  //   return this.http.get<IEmployee[]>('../../assets/employees.json');
  // }
  public getEmployees(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>("http://localhost:3000/employees");
  }
  // getEmployees(): Observable<IEmployee[]> {
  //   return this.http.get<IEmployee[]>(this.employeeUrl)
  //     .pipe(
  //       tap(data => console.log('All: ', JSON.stringify(data))),
  //       catchError(this.handleError)
  //     );
  // }
  public createNewEmployee(newemployee:IEmployee): Observable<IEmployee> {
    return this.http.post<IEmployee>("http://localhost:3000/employees",newemployee);
  }

  private handleError(err: HttpErrorResponse): Observable<never> {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }

  public saveToDo(updateemployee:IEmployee): Observable<IEmployee> {
    return this.http.put<IEmployee>("http://localhost:3000/employees/"+updateemployee?.id,updateemployee);
  }
  public delete(id:any): Observable<any> {
    return this.http.delete<IEmployee>("http://localhost:3000/employees/" +id);
  }
  public getItemById(id:any): Observable<IEmployee> {
    return this.http.get<IEmployee>("http://localhost:3000/employees/"+id);
  }

  public getTeams(): Observable<Team[]> {
    return this.http.get<Team[]>("http://localhost:3000/teams");
  }
  public getSpecializations(): Observable<Team[]> {
    return this.http.get<specialization[]>("http://localhost:3000/specializations");
  }


}
