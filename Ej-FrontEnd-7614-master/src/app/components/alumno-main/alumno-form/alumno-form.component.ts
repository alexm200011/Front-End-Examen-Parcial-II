import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faUserPlus, faIdCard, faSave, faTimes, faUser, faCalendar, faMapMarkedAlt, faGenderless } from '@fortawesome/free-solid-svg-icons';
import { Alumno } from 'src/app/models/alumno';
import { AlumnoService } from 'src/app/services/alumno.service';
import { FormBuilder, FormGroup, Validators} from '@angular/forms'

@Component({
  selector: 'app-alumno-form',
  templateUrl: './alumno-form.component.html'  
})
export class AlumnoFormComponent implements OnInit {

  faUserPlus =faUserPlus;
  faIdCard = faIdCard;
  faSave = faSave;
  faTimes = faTimes;
  faUser = faUser;
  faCalendar = faCalendar;
  faMapMarkedAlt = faMapMarkedAlt;
  faGenderless = faGenderless;

  @Input() alumno : Alumno;
  @Input() title : string;
  @Output() flagToReload = new EventEmitter<Boolean>();
 
  form: FormGroup;  
  submitted: boolean = false;

  constructor(private alumnoService: AlumnoService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      cedula: ['', [Validators.required, Validators.minLength(10)]],
      nombres: ['', [Validators.required]],
      apellidos: ['', [Validators.required]],
      fecha_nacimiento: [''],
      lugar_nacimiento: [''],
      sexo: ['',[Validators.maxLength(1)]],      
    });
  }

  get f(){
    return this.form.controls;
  }

  onSubmit() : void {

    this.submitted = true;

    if(this.form.invalid){
      console.error('Error en formulario');
      return;
    }

    this.alumnoService.save(this.alumno).subscribe(
      result => {
        this.submitted = false;
        console.log(result);
        this.flagToReload.emit(true);
      }
    );
  }

  onReset() : void {
    this.submitted = false;
    this.form.reset();
    this.alumno = new Alumno();
  }

}
