import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

private urlApi = 'https://restcountries.com';

  constructor(private http: HttpClient) { }


  public getPais(pais: String): Observable<any>{
    return this.http.get<any>(`${this.urlApi}/v3.1/name/${pais}`);
  }
  public getCapital(capital: String): Observable<any>{
    return this.http.get<any>(`${this.urlApi}/v3.1/capital/${capital}`);
  }
}
