import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Beca } from '../models/beca';
import {Observable } from 'rxjs';
import { retry } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class BecaService {

  url : string = "https://localhost:44344/api/Beca";

  httpOptions={
    headers:new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'      
    })
  };


  constructor(private http:HttpClient) { }

  save(a:Beca) : Observable<any> {
    let becaBody = JSON.stringify(a);    
    if(a.idbeca === undefined){      
      return this.http.post<any>(this.url, becaBody, this.httpOptions);
    }
    return this.http.put<any>(this.url, becaBody, this.httpOptions);
  }

  retrieve(id:number): Observable<Beca> {
    return this.http.get<Beca>(this.url + "/" + id, this.httpOptions)
      .pipe(
        retry(1)
      );
  } 

  delete(a:Beca) : Observable<any> {
    return this.http.delete<any>(this.url + '/' + a.idbeca, 
      this.httpOptions);
  }

  list(): Observable<Beca[]> {
    return this.http.get<Beca[]>(this.url, this.httpOptions)
      .pipe(
        retry(1)
      );
  }

  list2(id:number): Observable<Beca[]> {
    return this.http.get<Beca[]>(this.url.concat("/") + id, this.httpOptions)
      .pipe(
        retry(1)
      );
  } 

}
