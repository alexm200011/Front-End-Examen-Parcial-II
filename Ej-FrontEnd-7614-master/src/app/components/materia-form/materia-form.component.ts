import { Component, OnInit } from '@angular/core';
import { MateriaService } from 'src/app/services/materia.service';
import { AreaService } from 'src/app/services/area.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Materia } from 'src/app/models/materia';
import { Area } from 'src/app/models/area';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-materia-form',
  templateUrl: './materia-form.component.html',
  styleUrls: ['./materia-form.component.css']
})
export class MateriaFormComponent implements OnInit {

  title = "Nuevo registro de maquinaria";

  materia : Materia = new Materia();
  areas : Area[];
  materias : Materia[];

  form: FormGroup;  
  submitted: boolean = false;

  constructor(private materiaService: MateriaService, private areaService: AreaService, private formBuilder: FormBuilder, private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void 
  {
    this.listArea();
    this.listMaterias();

    this.form = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      nrc: ['', [Validators.required, Validators.minLength(4)]],
      creditos: [2, [Validators.required]],      
      idarea: ['',[Validators.required]],      
    });  

    this.activatedRoute.params.subscribe(
      params => {
        if(params['id']){
          this.materiaService.retrieve(params['id']).subscribe(
            result => {
              this.materia = result;
              this.title = "Actualizando registro de " + this.materia.nombre;
            }
          )
        }
      }
    );
  }

  listArea() : void {
    this.areaService.list().subscribe(result => this.areas = result);
  }

  listMaterias() : void {
    this.materiaService.list().subscribe(result => {
      this.materias = result; 
      console.log(this.materias);
    });
  }

  onSubmit() : void {

    this.submitted = true;

    if(this.form.invalid){
      console.error('Error en formulario');
      return;
    }

    console.log(this.materia);


    this.materiaService.save(this.materia).subscribe(
      result => {
        console.log(result);   
      }
    );
  }

  onReset() : void {
    this.submitted = false;
    this.form.reset();    
  }







}
