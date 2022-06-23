import { ParticularMovieService } from './../../Services/ParticularMovie/particular-movie.service';
import { Movie } from './../../Services/Movie/movie.model';
import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/Services/Movie/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public service: MovieService,  public PMService : ParticularMovieService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }

}
