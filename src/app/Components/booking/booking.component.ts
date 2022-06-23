import { Booking } from './../../Services/Booking/booking.model';
import { BookingService } from './../../Services/Booking/booking.service';
import { Movie } from './../../Services/Movie/movie.model';
import { Hall } from 'src/app/Services/Hall/hall.model';
import { Show } from './../../Services/Show/show.model';
import { Component,Inject, OnInit } from '@angular/core';
import {HttpClient} from'@angular/common/http';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
import { HallService } from 'src/app/Services/Hall/hall.service';
import { ShowService } from 'src/app/Services/Show/show.service';
import { MovieService } from 'src/app/Services/Movie/movie.service';
import { FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  form : FormGroup;

  showId : any;
  show : Show;
  hall : Hall;
  movie : Movie;
  booking : Booking;
  constructor(private route:ActivatedRoute,
    private http:HttpClient,
    public HallService : HallService,
    public ShowService : ShowService,
    public MovieService : MovieService,
    public BookingService : BookingService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.showId = params.get("showId")
    });
    this.getShowByShowId();
  }

  onSubmit(form : NgForm){
    this.BookingService.postBooking().subscribe(
      res =>{

      },
      err =>{
        console.log(err);
      }
    );
  }

 /* updateProfile() {
  this.form.patchValue({
    startTime : this.show.startTime
  });
} */

  /*
  setDefaults(){
    this.booking.bookingDate = this.show.date;
    this.booking.hallName = this.hall.hallName;
    this.booking.startTime = this.show.startTime;
    this.booking.title = this.movie.title;
    this.booking.hallId = this.hall.hallId;
    this.booking.showId = this.booking.showId;
  } */

  getShowByShowId(){
    this.ShowService.getShowByShowId(this.showId)
    .subscribe(
      response=>{
        this.show=response;
        this.getHallByHallId(this.show.hallId);
        this.getMovieByMovieId(this.show.movieId);
      },
      err=>{
        console.log(err);
      }
    );
  }

  getHallByHallId(hallId: number){
    this.HallService.getHallByHallId(hallId)
    .subscribe(
      response=>{
        this.hall=response;
      },
      err=>{
        console.log(err);
      }
    );
}

getMovieByMovieId(movieId : number){
  this.MovieService.getMovieByMovieId(movieId)
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
