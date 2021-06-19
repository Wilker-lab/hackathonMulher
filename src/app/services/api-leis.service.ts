import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LeisApiModel } from './leis-api-model';

@Injectable({
  providedIn: 'root'
})
export class ApiLeisService {

  constructor(private http: HttpClient) { }

  private apiLeisUrl = 'https://it3-klj-default-rtdb.firebaseio.com/leisMulheres.json';
​
   public get(): Observable<LeisApiModel[]> {
    return this.http.get<LeisApiModel[]>(this.apiLeisUrl);
  }
}
