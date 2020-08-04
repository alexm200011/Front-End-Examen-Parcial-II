import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Libro } from '../models/libro';
import {Observable } from 'rxjs';
import { retry } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class LibroService {
 
  url : string = "https://localhost:44344/api/Libro";

  httpOptions={
    headers:new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'      
    })
  };


  constructor(private http:HttpClient) { }

  save(a:Libro) : Observable<any> {
    let LibroBody = JSON.stringify(a);    
    if(a.idlibro === undefined){      
      return this.http.post<any>(this.url, LibroBody, this.httpOptions);
    }
    return this.http.put<any>(this.url, LibroBody, this.httpOptions);
  }

  retrieve(id:number): Observable<Libro> {
    return this.http.get<Libro>(this.url + "/" + id, this.httpOptions)
      .pipe(
        retry(1)
      );
  } 

  delete(a: Libro) : Observable<any> {
    return this.http.delete<any>(this.url + '/' + a.idlibro, 
      this.httpOptions);
  }

  list(): Observable<Libro[]> {
    return this.http.get<Libro[]>(this.url, this.httpOptions)
      .pipe(
        retry(1)
      );
  } 
}
