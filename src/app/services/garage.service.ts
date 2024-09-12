import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GarageService {
  private apiUrl = 'https://customersservices.migdal.co.il/api/experts/getgarages';


  constructor(private http: HttpClient) { }

  getGarages(city: string = '', area: string = ''): Observable<any> {
    return this.http.post<any>(this.apiUrl, { City: city, Area: area }, {
      headers: { 'Content-Type': 'application/json; charset=UTF-8' }
    });
  }
}
