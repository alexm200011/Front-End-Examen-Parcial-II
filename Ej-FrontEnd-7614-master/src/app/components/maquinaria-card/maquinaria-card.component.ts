import { Component, OnInit } from '@angular/core';
import { Maquinaria } from 'src/app/models/maquinaria';
import { MaquinariaService } from 'src/app/services/maquinaria.service';
import { ActivatedRoute } from '@angular/router';
import { faListAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-maquinaria-card',
  templateUrl: './maquinaria-card.component.html',
  styleUrls: ['./maquinaria-card.component.css']
})
export class MaquinariaCardComponent implements OnInit {

  faListAlt = faListAlt;

  maquinaria : Maquinaria;

  constructor(private maquinariaService : MaquinariaService, private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      params => {
        if(params['id']){
          this.maquinariaService.retrieve(params['id']).subscribe(
            result => this.maquinaria = result
          )
        }
      }
    );
  }

}
