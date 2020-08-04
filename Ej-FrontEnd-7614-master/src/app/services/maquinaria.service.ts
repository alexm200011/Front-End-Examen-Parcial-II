import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Maquinaria } from '../models/maquinaria';
import {Observable } from 'rxjs';
import { retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MaquinariaService {

  url : string = "https://localhost:44344/api/Maquinaria";

  httpOptions={
    headers:new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'      
    })
  };

  constructor(private http:HttpClient) { }

  save(a:Maquinaria) : Observable<any> {
    let maquinariaBody = JSON.stringify(a);    
    if(a.idmaquinaria === undefined){      
      return this.http.post<any>(this.url, maquinariaBody, this.httpOptions);
    }
    return this.http.put<any>(this.url, maquinariaBody, this.httpOptions);
  }

  retrieve(id:number): Observable<Maquinaria> {
    return this.http.get<Maquinaria>(this.url + "/" + id, this.httpOptions)
      .pipe(
        retry(1)
      );
  } 

  delete(a: Maquinaria) : Observable<any> {
    return this.http.delete<any>(this.url + '/' + a.idmaquinaria, 
      this.httpOptions);
  }

  list(): Observable<Maquinaria[]> {
    return this.http.get<Maquinaria[]>(this.url, this.httpOptions)
      .pipe(
        retry(1)
      );
  }


}
