import { Component } from '@angular/core';
import { EmpleadoService } from '../../services/empleado.service';
import { Empleado } from '../../model/empleado';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-empleado',
  imports: [CommonModule,FormsModule],
  templateUrl: './add-empleado.component.html',
  styleUrl: './add-empleado.component.css'
})
export class AddEmpleadoComponent {
  empleado: Empleado = {
    id: 0,
    name: '',
    designation: '',
  };

  constructor(private empleadoService: EmpleadoService) {}

  addEmpleado(): void {
    this.empleadoService.addEmpleado(this.empleado).subscribe({
      next: (response) => {
        console.log('Empleado added successfully:', response);
        this.empleado = { id: 0, name: '', designation: '' };
      },
      error: (err) => {
        console.error('Error adding empleado:', err);
      },
    });
  }
}