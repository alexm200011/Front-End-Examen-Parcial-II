import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Maquinaria } from 'src/app/models/maquinaria';
import { MaquinariaService } from 'src/app/services/maquinaria.service';

@Component({
  selector: 'app-maquinaria-form',
  templateUrl: './maquinaria-form.component.html',
  styleUrls: ['./maquinaria-form.component.css']
})
export class MaquinariaFormComponent implements OnInit {

  title = "Nuevo registro de maquinaria";

  maquinaria : Maquinaria = new Maquinaria();
  
  form: FormGroup;  
  
  constructor(private maquinariaService: MaquinariaService, 
    private formBuilder: FormBuilder, 
    private activatedRoute : ActivatedRoute, 
    private router: Router) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      codigo: [''],
      fecha_adquisicion: [''],      
      precio: [''],      
      porcentaje_depreciacion: [''],      
    });  

    this.activatedRoute.params.subscribe(
      params => {
        if(params['id']){
          this.maquinariaService.retrieve(params['id']).subscribe(
              result =>
              { 
                this.maquinaria = result;
                this.title = "Actualizando el registro de " + this.maquinaria.nombre;
              }
          )
        }
      }
    );
  
  }


  onSubmit() : void {
    if(this.form.invalid){
      console.error('Error en formulario');
      return;
    }

    console.log(this.maquinaria);

    this.maquinariaService.save(this.maquinaria).subscribe(
      result => {
        console.log(result);   
        this.router.navigate(['maquinaria/list']);

      }
    );
  }

  onReset() : void {   
    this.form.reset();    
  }


}
