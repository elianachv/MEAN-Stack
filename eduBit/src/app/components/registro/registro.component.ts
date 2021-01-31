import { isGeneratedFile } from '@angular/compiler/src/aot/util';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Estudiante } from '../../models/estudiante';
import { EstudianteService } from '../../services/estudiante.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  nuevoEstudiante: Estudiante;

  constructor(private estudianteService: EstudianteService, private router:Router) {
    this.nuevoEstudiante = new Estudiante('', '', '', 0, '', '', '');
  }

  ngOnInit(): void {}

  registrar() {
    this.estudianteService.registrarEstudiante(this.nuevoEstudiante).subscribe(

      (res: any) => {
        if (res.statusCode !== 200) {
          alert('No se pudo registrar el usuario');
        } else {
          alert('Registro exitoso');
          this.router.navigate(['/listado'])
        }

      }, (error) => {
        var errorMensaje = <any>error;
        if (errorMensaje != null) {
          console.log(errorMensaje);
        }
      }
    );
  }

}
