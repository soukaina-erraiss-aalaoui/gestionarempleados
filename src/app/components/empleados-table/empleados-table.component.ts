import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from '../../services/empleado.service';
import { Empleado } from '../../model/empleado';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-empleados-table',
  imports: [CommonModule],
  templateUrl: './empleados-table.component.html',
  styleUrl: './empleados-table.component.css'
})
export class EmpleadosTableComponent implements OnInit {
  empleados: Empleado[] = []; // Use the Empleado class here

  constructor(private empleadoService: EmpleadoService) {}

  ngOnInit(): void {
    this.loadEmpleados();
  }
  loadEmpleados() {
    this.empleadoService.getEmpleados().subscribe((data) => {
      this.empleados = data;
    });
  }
  deleteEmpleado(id: number) {
    this.empleadoService.deleteEmpleado(id).subscribe(
      (response) => {
        console.log('Empleado deleted:', response);
        this.loadEmpleados();
      },
      (error) => {
        console.error('Error deleting empleado', error);
      }
    );
  }
}
