import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { faListAlt, faEye, faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons';
import swal from 'sweetalert2';
import { Alumno } from 'src/app/models/alumno';
import { AlumnoService } from 'src/app/services/alumno.service';

@Component({
  selector: 'app-alumno-list',
  templateUrl: './alumno-list.component.html',
  styleUrls: ['./alumno-list.component.css']
})
export class AlumnoListComponent implements OnInit {

  faListAlt = faListAlt;
  faEye = faEye;
  faPencilAlt = faPencilAlt;
  faTrash = faTrash;

  alumnos : Alumno[];
  @Output() alumnoToEdit = new EventEmitter<Alumno>();
  @Input() flagToReload;
  @Output() reloadComplete = new EventEmitter<Boolean>();

  constructor(private alumnoService:AlumnoService) { }

  ngOnInit(): void {
    this.list();
  }

  ngOnChanges(changes: SimpleChanges) {
    if(changes.flagToReload.currentValue){
      if(this.flagToReload){
        this.list();
      }
    }
  }


  update(a:Alumno) :void {
    console.log(a);
    this.alumnoToEdit.emit(a);
  }

  delete(a:Alumno) :void {
    swal.fire({
      title: '¿Está seguro de continuar?',
      text: "El registro de " + a.nombres + " " + a.apellidos + " será eliminado.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {
        this.alumnoService.delete(a).subscribe(
          result => console.log(result)
        )
      }
    })
  }



  list() : void {
    this.alumnoService.list().subscribe(result => {      
      this.alumnos = result;
      this.reloadComplete.emit(true);
    });
  }

  

}
