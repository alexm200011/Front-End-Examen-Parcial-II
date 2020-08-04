
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Beca } from 'src/app/models/beca';
import { BecaService } from 'src/app/services/beca.service';

@Component({
  selector: 'app-beca-form',
  templateUrl: './beca-form.component.html',
  styleUrls: ['./beca-form.component.css']
})
export class BecaFormComponent implements OnInit {

  title = "Nuevo registro de beca";

  beca : Beca = new Beca();
  
  form: FormGroup;  

    
  submitted: boolean = false;
  
  constructor(private becaService: BecaService, 
    private formBuilder: FormBuilder, 
    private activatedRoute : ActivatedRoute, 
    private router: Router) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      tipo: ['', [Validators.required]],
      beneficio: ['',[Validators.required]],
      presupuesto: ['',[Validators.required]],      
      max_est_por_nivel: ['',[Validators.required]]     
    });  

  

    this.activatedRoute.params.subscribe(
      params => {
        if(params['id']){
          this.becaService.retrieve(params['id']).subscribe(
              result =>
              { 
                this.beca = result;
                this.title = "Actualizando el registro de " + this.beca.tipo;
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

    console.log(this.beca);

    this.becaService.save(this.beca).subscribe(
      result => {
        console.log(result);   
        this.router.navigate(['beca/list']);

      }
    );
  }

  onReset() : void {   
    this.router.navigate(['beca/list']);   
  }


}
