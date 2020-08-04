import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/models/libro';
import { LibroService } from 'src/app/services/libro.service';
import { faListAlt, faEye, faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons';
import swal from 'sweetalert2';


@Component({
  selector: 'app-libro-list',
  templateUrl: './libro-list.component.html',
  styleUrls: ['./libro-list.component.css']
})
export class LibroListComponent implements OnInit {

  faEye=faEye; 
  faPencilAlt=faPencilAlt;
  faTrash=faTrash;
  
  libros : Libro[];
 
  constructor(private libroService : LibroService) { }

  ngOnInit(): void {
    this.list();
  }

  delete(a:Libro) :void {
    swal.fire({
      title: '¿Está seguro de continuar?',
      text: "El registro de " + a.nombre +" será eliminado.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {
        this.libroService.delete(a).subscribe(
          result => {console.log(result)
                     this.list();
          }
        )
      }
    })
  }




  list() : void {
    this.libroService.list().subscribe(result => this.libros = result);   
  }
}
