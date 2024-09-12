import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AreaService {
  private apiUrl = 'https://front.migdal.co.il//experts/api/garageareas';


  constructor(private http: HttpClient) { }

  getAreas(): Observable<any> {
    return this.http.post<any>(this.apiUrl, {});
  }
}
