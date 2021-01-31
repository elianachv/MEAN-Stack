import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Estudiante } from '../models/estudiante';


@Injectable({
  providedIn: 'root'
})
export class EstudianteService {
  apiUrl = 'http://localhost:3000/api';
  constructor(private http: HttpClient) { }

  //Crear estudiante
  registrarEstudiante(nuevoEstudiante: any): Observable<any> {
    let url = this.apiUrl + '/crear'
    let params = JSON.stringify(nuevoEstudiante);
    console.log('Se envia: ' + params);
    let options = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(url, params, { headers: options }).pipe((res) => res);
  }


  //Mostrar estudiantes
  mostrarEstudiantes(): Observable<any> {
    let url = this.apiUrl + '/estudiantes';
    let options = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get(url, { headers: options }).pipe((res) => res);
  }

  //Mostrar estudiantes por apellido
  mostrarEstudiantesApellidos(apellidos: string): Observable<any> {
    let url = this.apiUrl + '/estudiantes/' + apellidos;
    let options = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get(url, { headers: options }).pipe((res) => res);
  }

  //Eliminar estudiantes 
  eliminarEstudiante(id: string): Observable<any> {
    let url = this.apiUrl + '/eliminar/' + id;
    let options = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.delete(url, { headers: options }).pipe((res) => res);
  }

  //Actualizar estudiantes 
  actualizarEstudiante(idEstudiante: string, estudianteActualizado: Estudiante): Observable<any> {
    let url = this.apiUrl + '/actualizar/' + idEstudiante;
    let params = JSON.stringify(estudianteActualizado);
    let options = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.put(url, params, { headers: options }).pipe((res) => res);
  }



}
