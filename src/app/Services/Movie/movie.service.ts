import { Injectable } from '@angular/core';
import { Movie } from './movie.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  constructor(private http : HttpClient) { }

  formData:Movie = new Movie();
  list: Movie[];
  readonly baseUrl='https://localhost:7242/api/movie';

  postMovie(){
    return this.http.post(this.baseUrl, this.formData);
  }

  refreshList(){
    this.http.get(this.baseUrl)
    .toPromise()
    .then(res => this.list = res as Movie[]);
  }

  getMovieByMovieId(movieId : number): Observable<Movie>{
    return this.http.get<Movie>(`${this.baseUrl}/${movieId}`);
  }

}
