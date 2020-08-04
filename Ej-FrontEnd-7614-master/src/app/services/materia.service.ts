import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Materia } from '../models/materia';
import {Observable } from 'rxjs';
import { retry } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class MateriaService {

  url : string = "https://localhost:44344/api/Materia";

  httpOptions={
    headers:new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'      
    })
  };

  constructor(private http:HttpClient) { }

  save(a:Materia) : Observable<any> {
    let alumnoBody = JSON.stringify(a);    
    if(a.idmateria === undefined){      
      return this.http.post<any>(this.url, alumnoBody, this.httpOptions);
    }
    return this.http.put<any>(this.url, alumnoBody, this.httpOptions);
  }

  retrieve(id:number): Observable<Materia> {
    return this.http.get<Materia>(this.url + "/" + id, this.httpOptions)
      .pipe(
        retry(1)
      );
  } 

  list(): Observable<Materia[]> {
    return this.http.get<Materia[]>(this.url, this.httpOptions)
      .pipe(
        retry(1)
      );
  } 


}
