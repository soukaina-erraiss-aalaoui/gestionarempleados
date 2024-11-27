import { Routes } from '@angular/router';
import { EmpleadosTableComponent } from './components/empleados-table/empleados-table.component';
import { AddEmpleadoComponent } from './components/add-empleado/add-empleado.component';

export const routes: Routes = [
    { path: 'empleados', component: EmpleadosTableComponent },
  { path: 'add-empleado', component: AddEmpleadoComponent },
  { path: '', redirectTo: '/empleados', pathMatch: 'full' } 
];
