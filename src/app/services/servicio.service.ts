import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

import{ grafico } from '../models/grafico'
import{ tabla } from '../models/tabla'

const httpOptions = {
  headers : new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

const address2 = 'http://Localhost:0000/'; //direccion donde estara el backend

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor(private http: HttpClient) { }
  getInfo(): Observable<any>{
    return this.http.get<any>(address2+'urlservicio',httpOptions);
  }

  postTabla(): Observable<any> {
    return this.http.post<any>(address2 + 'graphql' , httpOptions);
  }

  postGrafico(texto:grafico): Observable<any> {
    return this.http.post<any>(address2 + 'urlservicio', texto , httpOptions);
  }

}
