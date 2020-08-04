import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Alumno } from '../models/alumno';
import {Observable } from 'rxjs';
import { retry } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  url : string = "https://localhost:44344/api/Alumno";

  httpOptions={
    headers:new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'      
    })
  };

  constructor(private http:HttpClient) { }

  save(a:Alumno) : Observable<any> {
    let alumnoBody = JSON.stringify(a);    
    if(a.idalumno === undefined){      
      return this.http.post<any>(this.url, alumnoBody, this.httpOptions);
    }
    return this.http.put<any>(this.url, alumnoBody, this.httpOptions);
  }

  retrieve(id:number): Observable<Alumno> {
    return this.http.get<Alumno>(this.url + "/" + id, this.httpOptions)
      .pipe(
        retry(1)
      );
  } 

  delete(a: Alumno) : Observable<any> {
    return this.http.delete<any>(this.url + '/' + a.idalumno, 
      this.httpOptions);
  }

  list(): Observable<Alumno[]> {
    return this.http.get<Alumno[]>(this.url, this.httpOptions)
      .pipe(
        retry(1)
      );
  } 

  search(criteria:string): Observable<Alumno[]> {
    return this.http.get<Alumno[]>(this.url.concat("?criteria=").concat(criteria), this.httpOptions)
      .pipe(
        retry(1)
      );
  } 
}
