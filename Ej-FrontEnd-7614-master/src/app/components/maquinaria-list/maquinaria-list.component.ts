import { Component, OnInit } from '@angular/core';
import { Maquinaria } from 'src/app/models/maquinaria';
import { MaquinariaService } from 'src/app/services/maquinaria.service';
import { faPlus, faEye, faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-maquinaria-list',
  templateUrl: './maquinaria-list.component.html',
  styleUrls: ['./maquinaria-list.component.css']
})
export class MaquinariaListComponent implements OnInit {

  faEye = faEye;
  faPlus = faPlus;
  faPencilAlt = faPencilAlt;
  faTrash = faTrash;

  maquinarias : Maquinaria[];

  constructor(private maquinariaService : MaquinariaService) { }

  ngOnInit(): void {
    this.list();
  }

  list() : void {
    this.maquinariaService.list().subscribe(result => this.maquinarias = result);
  }

  
  delete(a:Maquinaria) :void {
    Swal.fire({
      title: '¿Está seguro de continuar?',
      text: "El registro de " + a.nombre + " será eliminado.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {
        this.maquinariaService.delete(a).subscribe(
          result => {
            console.log(result);
            this.list();
          }
        )
      }
    })
  }


}
