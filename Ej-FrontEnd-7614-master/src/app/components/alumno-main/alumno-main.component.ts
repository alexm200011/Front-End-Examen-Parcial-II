import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/models/alumno';

@Component({
  selector: 'app-alumno-main',
  templateUrl: './alumno-main.component.html'  
})
export class AlumnoMainComponent implements OnInit {

  mainAlumno : Alumno; //Un atributo del componente AlumnoMain que se va a inyectar en
                       //el componente AlumnoForm

  mainTitle : string;
  mainReload : boolean;

  constructor() { }

  ngOnInit(): void {
    this.onInit();    
  }

  onInit() : void {
    this.mainAlumno = new Alumno();
    this.mainTitle = "Registro de nuev@ alumno";
    this.mainReload = false;
  }

  toUpdate($event) : void{    
    this.mainAlumno = $event;
    this.mainAlumno.fecha_nacimiento = this.mainAlumno.fecha_nacimiento.replace("T00:00:00","");
    console.log(this.mainAlumno);
    this.mainTitle = "Editando registro de " + $event.nombres + " " + $event.apellidos;
  }

  toReload($event) : void {    
    this.onInit();
    console.log($event);   
    this.mainReload = $event; 
  }

  reloadDone($event){
    this.mainReload = !$event;    
  }
 
}
