import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Matricula } from '../models/matricula';
import {Observable } from 'rxjs';
import { retry } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class MatriculaService {


  url : string = "https://localhost:44344/api/Matricula";

  httpOptions={
    headers:new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'      
    })
  };

  constructor(private http:HttpClient) { }

  list(id:number): Observable<Matricula[]> {
    return this.http.get<Matricula[]>(this.url.concat("/") + id, this.httpOptions)
      .pipe(
        retry(1)
      );
  } 


}
