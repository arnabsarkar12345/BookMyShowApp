import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Show } from './show.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShowService {

  constructor(private http : HttpClient) { }

  readonly baseUrl = 'https://localhost:7242/api/show';
  getShowByMovieId(movieId : number): Observable<Show[]>{
    return this.http.get<Show[]>(`${this.baseUrl}/${movieId}`);
  }
  getShowByShowId(showId : number): Observable<Show>{
    return this.http.get<Show>(`${this.baseUrl}/booking/${showId}`);
  }
}
