import { Movie } from './../../Services/Movie/movie.model';
import { Component,Inject, OnInit } from '@angular/core';
import {HttpClient} from'@angular/common/http';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
import { MovieService } from 'src/app/Services/Movie/movie.service';

@Component({
  selector: 'app-particular-movie',
  templateUrl: './particular-movie.component.html',
  styleUrls: ['./particular-movie.component.css']
})
export class ParticularMovieComponent implements OnInit {
  movieId : any;
  movie: Movie;
  constructor(private route:ActivatedRoute,private http:HttpClient, public MovieService:MovieService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.movieId = params.get("movieId")
    });
    this.getMovieByMovieId();
  }

  getMovieByMovieId(){
    this.MovieService.getMovieByMovieId(this.movieId)
    .subscribe(
      response=>{
        this.movie=response;
      },
      err=>{
        console.log(err);
      }
    );
  }


}
