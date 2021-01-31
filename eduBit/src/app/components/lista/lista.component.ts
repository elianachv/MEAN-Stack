import { Component, OnInit } from '@angular/core';
import { Estudiante } from 'src/app/models/estudiante';
import { EstudianteService } from '../../services/estudiante.service';
import {CanActivate, Router} from '@angular/router';
import { routing } from 'src/app/app.routing';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  public estudiante: Estudiante;
  public estudiantes: any = [];
  public buscarApellidos: string = '';

  constructor(private estudianteService: EstudianteService, private router: Router) {
    this.estudiante = new Estudiante('', '', '', 0, '', '', '');
  }

  ngOnInit(): void {
    this.listar1();
  }

  listar1() {
    this.estudianteService.mostrarEstudiantes().subscribe(
      (res: any) => {
        this.estudiantes = res.allUser;
      }, (error) => {
        var errorMensaje = <any>error;
        if (errorMensaje != null) {
          console.log('Mensaje de angular: ' + errorMensaje);
        }
      }
    );
  }

  listar() {
    this.estudianteService.mostrarEstudiantes().subscribe(
      (res: any) => {
        if (res.statusCode !== 200) {
          alert('No se encontraron los usuarios');
        } else {
          if (res.allUser == null || res.allUser == undefined || res.allUser == '') {
            alert('No hay usuarios');

          } else {
            //alert('Usuarios encontrados ' + res.allUser);

          }
          this.estudiantes = res.allUser;
        }
      }, (error) => {
        var errorMensaje = <any>error;
        if (errorMensaje != null) {
          console.log('Mensaje de angular: ' + errorMensaje);
        }

      }
    );
  }

  listarApellido() {
    this.estudianteService.mostrarEstudiantesApellidos(this.buscarApellidos).subscribe(
      (res: any) => {
        if (res.statusCode !== 200) {
          alert('No se encontraron los usuarios');
        } else {
          alert('Usuarios encontrados ' + res.estudiantes);
          this.estudiantes = res.estudiantes;
        }
      }, (error) => {
        var errorMensaje = error;
        if (errorMensaje != null) {
          console.log('Mensaje de angular: ' + errorMensaje);
        }

      }
    );
  }

  eliminar(idEstudiante: string) {
    this.estudianteService.eliminarEstudiante(idEstudiante).subscribe(
      (res: any) => {
        if (res.statusCode !== 200) {
          alert('No se pudo eliminar');
        } else {
          console.log('Estudiante eliminado: ' + JSON.stringify(res.dataUser))
          this.listar1();
        }
      }, (error) => {
        var errorMensaje = error;
        if (errorMensaje != null) {
          console.log('Mensaje de angular: ' + error.message);
        }

      }
    );

  }

  guardarEstudiante(estudiante: Estudiante) {
    const estudianteString = JSON.stringify(estudiante);
    localStorage.setItem('estudiante', estudianteString);
    this.router.navigate(['/actualizacion']);
    
  }

}
