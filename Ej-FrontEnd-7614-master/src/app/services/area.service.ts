import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Area } from '../models/area';
import {Observable } from 'rxjs';
import { retry } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class AreaService {

  url : string = "https://localhost:44344/api/Area";

  httpOptions={
    headers:new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'      
    })
  };

  constructor(private http:HttpClient) { }


  list(): Observable<Area[]> {
    return this.http.get<Area[]>(this.url, this.httpOptions)
      .pipe(
        retry(1)
      );
  } 

}
