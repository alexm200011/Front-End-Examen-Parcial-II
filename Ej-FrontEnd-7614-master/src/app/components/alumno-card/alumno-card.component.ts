import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/models/alumno';
import { AlumnoService } from 'src/app/services/alumno.service';
import { ActivatedRoute } from '@angular/router';
import { faUser, faIdCard, faCalendar, faMapMarked, faGenderless } from '@fortawesome/free-solid-svg-icons';
import { Matricula } from 'src/app/models/matricula';
import { MatriculaService } from 'src/app/services/matricula.service';

@Component({
  selector: 'app-alumno-card',
  templateUrl: './alumno-card.component.html',
  styleUrls: ['./alumno-card.component.css']
})
export class AlumnoCardComponent implements OnInit {

  faUser = faUser;
  faIdCard = faIdCard;
  faCalendar = faCalendar;
  faMapMarked = faMapMarked;
  faGenderless = faGenderless;

  alumno : Alumno;
  matriculas : Matricula[];

  constructor(private alumnoService: AlumnoService, 
    private matriculaService: MatriculaService,
    private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      params => {
        if(params['id']){
          this.alumnoService.retrieve(params['id']).subscribe(
            result => { 
              this.alumno = result; 
              this.listMatriculas();
            }
          )
        }
      }
    );
  }

  listMatriculas() : void {
    this.matriculaService.list(this.alumno.idalumno).subscribe(
      result => this.matriculas = result
    );
  }
}
