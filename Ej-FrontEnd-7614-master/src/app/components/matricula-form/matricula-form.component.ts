import { Component, OnInit } from '@angular/core';
import { faCheck, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Alumno } from 'src/app/models/alumno';
import { Materia } from 'src/app/models/materia';
import { AlumnoService } from 'src/app/services/alumno.service';
import { MateriaService } from 'src/app/services/materia.service';
import { Matricula } from 'src/app/models/matricula';
import { NumberValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-matricula-form',
  templateUrl: './matricula-form.component.html',
  styleUrls: ['./matricula-form.component.css']
})
export class MatriculaFormComponent implements OnInit {

  faSearch = faSearch;
  faCheck = faCheck;

  alumnos : Alumno[];
  alumno : Alumno;
  materias : Materia[];
  matriculas : Matricula[];

  constructor(private alumnoService: AlumnoService, private materiaService : MateriaService) { }

  ngOnInit(): void {
    this.materiaService.list().subscribe(result=>{
      this.materias = result;      
      this.materias.forEach(mat => {
        let nueva = new Matricula();
        nueva.materia = mat;
        this.matriculas.push(nueva);
      })
    });
  }

  searchAlumno($event) : void {
    console.info($event.target.value);
    this.alumnoService.search($event.target.value).subscribe(
      result => this.alumnos = result
    )
  }

  selectAlumno(id:number):void{
    this.alumnoService.retrieve(id).subscribe(result => this.alumno = result);
  }

}
