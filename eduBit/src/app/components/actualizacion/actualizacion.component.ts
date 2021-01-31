import { Component, OnInit } from '@angular/core';
import { Estudiante } from '../../models/estudiante';
import { EstudianteService } from '../../services/estudiante.service';
import {CanActivate, Router} from '@angular/router';

@Component({
  selector: 'app-actualizacion',
  templateUrl: './actualizacion.component.html',
  styleUrls: ['./actualizacion.component.css']
})
export class ActualizacionComponent implements OnInit {

  public estudianteActualizado: Estudiante;
  public estudianteStorage: any;


  constructor(private estudianteService: EstudianteService, private router: Router) {
    this.estudianteActualizado = new Estudiante('', '', '', 0, '', '', '');
  }

  ngOnInit(): void {
    this.llenarFormulario();
  }

  modificar() {
    this.estudianteService.actualizarEstudiante(this.estudianteStorage._id, this.estudianteStorage).subscribe(
      (res: any) => {
        if (res.statusCode !== 200) {
          alert('No se pudo actualizar el usuario');
        } else {
          alert('Usuario actualizado');
          localStorage.clear();
          this.router.navigate(['/listado']);

        }
      }, (error) => {
        var errorMensaje = <any>error;
        if (errorMensaje != null) {
          console.log('Mensaje de angular: ' + error);
        }

      }
    );


  }

  llenarFormulario() {
    this.estudianteStorage = JSON.parse(localStorage.getItem('estudiante') || '{}');
  }

}
