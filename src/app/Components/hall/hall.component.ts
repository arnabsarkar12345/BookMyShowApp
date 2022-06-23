import { MovieService } from 'src/app/Services/Movie/movie.service';
import { Movie } from './../../Services/Movie/movie.model';
import { Show } from './../../Services/Show/show.model';
import { Component,Inject, OnInit } from '@angular/core';
import {HttpClient} from'@angular/common/http';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
import { HallService } from 'src/app/Services/Hall/hall.service';
import { ShowService } from 'src/app/Services/Show/show.service';
import { Hall } from 'src/app/Services/Hall/hall.model';
@Component({
  selector: 'app-hall',
  templateUrl: './hall.component.html',
  styleUrls: ['./hall.component.css']
})
export class HallComponent implements OnInit {

  movieId : any;
  halls : Hall[];
  shows : Show[];
  movie : Movie;
  constructor(private route:ActivatedRoute,
    private http:HttpClient,
    public HallService : HallService,
    public ShowService : ShowService,
    public MovieService : MovieService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.movieId = params.get("movieId")
    });
    this.getHallByMovieId();
    this.getShowByMovieId();
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

  getHallByMovieId(){
    this.HallService.getHallByMovieId(this.movieId)
    .subscribe(
      response=>{
        this.halls=response;
      },
      err=>{
        console.log(err);
      }
    );
  }
  getShowByMovieId(){
    this.ShowService.getShowByMovieId(this.movieId)
    .subscribe(
      response=>{
        this.shows=response;
      },
      err=>{
        console.log(err);
      }
    );
  }

}
