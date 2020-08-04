import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlumnoMainComponent } from './components/alumno-main/alumno-main.component';
import { AlumnoCardComponent } from './components/alumno-card/alumno-card.component';
import { MateriaFormComponent } from './components/materia-form/materia-form.component';
import { MatriculaFormComponent } from './components/matricula-form/matricula-form.component';
import { MaquinariaListComponent } from './components/maquinaria-list/maquinaria-list.component';
import { MaquinariaCardComponent } from './components/maquinaria-card/maquinaria-card.component';
import { MaquinariaFormComponent } from './components/maquinaria-form/maquinaria-form.component';
import { LibroListComponent } from './components/libro-list/libro-list.component';
import { LibroCardComponent } from './components/libro-card/libro-card.component';
import { LibroFormComponent } from './components/libro-form/libro-form.component';
import { BecaFormComponent } from './components/beca-form/beca-form.component';
import { BecaListComponent } from './components/beca-list/beca-list.component';
import { BecaCardComponent } from './components/beca-card/beca-card.component';



const routes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: 'alumnos', component: AlumnoMainComponent},
  {path: 'alumnos/:id', component: AlumnoCardComponent},
  {path: 'materias', component: MateriaFormComponent},
  {path: 'materias/:id', component: MateriaFormComponent},
  {path: 'matriculas', component: MatriculaFormComponent},
  //----
  {path: 'maquinaria/form', component: MaquinariaFormComponent},
  {path: 'maquinaria/form/:id', component: MaquinariaFormComponent},
  {path: 'maquinaria/list', component: MaquinariaListComponent},
  {path: 'maquinaria/card/:id', component: MaquinariaCardComponent},
  //practica
  {path: 'libro/form/', component: LibroFormComponent},
  {path: 'libro/form/:id', component: LibroFormComponent},
  {path: 'libro/list', component: LibroListComponent},
  {path: 'libro/card/:id', component: LibroCardComponent},
  //prueba Becas
  {path: 'beca/form/', component: BecaFormComponent},
  {path: 'beca/form/:id', component: BecaFormComponent},
  {path: 'beca/list', component: BecaListComponent},
  {path: 'beca/card/:id', component: BecaCardComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
