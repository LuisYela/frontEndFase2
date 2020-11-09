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

const address2 = ' https://sistemas-operativos-2-286302.uc.r.appspot.com/'; //direccion donde estara el backend
const address = ' https://sistemas-operativos-2-286302.uc.r.appspot.com/graphql'; //direccion donde estara el backend
@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor(private http: HttpClient) { }
  query(data) {
    return this.http.post(`${address}`, JSON.stringify({"query": data}),httpOptions).toPromise();
  }

  postTabla(): Observable<any> {
    console.log(this.http.post<any>(address2 + 'graphql' , httpOptions));
    return this.http.post<any>(address2 + 'graphql' , httpOptions);
  }

  postGrafico(texto:grafico): Observable<any> {
    return this.http.post<any>(address2 + 'urlservicio', texto , httpOptions);
  }

}
