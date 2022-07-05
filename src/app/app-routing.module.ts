import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import{CreateEmployeeComponent} from './create-employee/create-employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import{EditEmployeeComponent} from './edit-employee/edit-employee.component';
import{DeleteEmployeeComponent} from './delete-employee/delete-employee.component';

// const routes: Routes = [
//   {component:}
// ];

const routes: Routes = [
  { path: '', redirectTo: '/list', pathMatch:'full'},
  { path: 'list', component: EmployeeListComponent},
  { path: 'employee-create', component: CreateEmployeeComponent},
  { path: 'employee-edit/:Id', component: EditEmployeeComponent},
  { path: 'employee-delete/:Id', component: DeleteEmployeeComponent},
  {path:'**', redirectTo: '/list', pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
