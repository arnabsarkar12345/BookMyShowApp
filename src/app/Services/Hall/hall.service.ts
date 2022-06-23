import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Hall } from './hall.model';

@Injectable({
  providedIn: 'root'
})
export class HallService {

  constructor(private http : HttpClient) { }

  readonly baseUrl = 'https://localhost:7242/api/hall';
  getHallByMovieId(movieId : number): Observable<Hall[]>{
    return this.http.get<Hall[]>(`${this.baseUrl}/${movieId}`);
  }
  getHallByHallId(showId : number): Observable<Hall>{
    return this.http.get<Hall>(`${this.baseUrl}/booking/${showId}`);
  }
}
