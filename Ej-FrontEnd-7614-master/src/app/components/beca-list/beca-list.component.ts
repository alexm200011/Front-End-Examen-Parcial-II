import { Component, OnInit } from '@angular/core';
import { Beca } from 'src/app/models/beca';
import { BecaService } from 'src/app/services/beca.service';
import { faListAlt, faEye, faPencilAlt, faTrash, faPlus } from '@fortawesome/free-solid-svg-icons';
import swal from 'sweetalert2';

@Component({
  selector: 'app-beca-list',
  templateUrl: './beca-list.component.html',
  styleUrls: ['./beca-list.component.css']
})
export class BecaListComponent implements OnInit {

  faListAlt= faListAlt;
  faEye=faEye; 
  faPencilAlt=faPencilAlt; 
  faTrash=faTrash;
  faPlus = faPlus;
  becas : Beca[];
  
  constructor(private becaService : BecaService) { }


  ngOnInit(): void {
    this.list();
  }

  list() : void{

    this.becaService.list().subscribe(result=> this.becas = result);
  }

  delete(a:Beca) :void {
    swal.fire({
      title: '¿Está seguro de continuar?',
      text: "El registro de " + a.tipo +" será eliminado.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {
        this.becaService.delete(a).subscribe(
          result => {console.log(result)
                     this.list();
          }
        )
      }
    })
  }

}
