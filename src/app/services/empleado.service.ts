import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Empleado } from '../model/empleado';

@Injectable({
  providedIn: 'root',
})
export class EmpleadoService {
  private apiUrl = 'http://localhost:8080/api/Empleados';

  constructor(private http: HttpClient) {}
  getEmpleados(): Observable<Empleado[]> {
    return this.http.get<Empleado[]>(this.apiUrl);
  }

  addEmpleado(empleado: Empleado): Observable<Empleado> {
    return this.http.post<Empleado>(this.apiUrl, empleado);
  }
  deleteEmpleado(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
