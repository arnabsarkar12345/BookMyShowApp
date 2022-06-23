import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/Services/Movie/movie.service';
import { NgForm } from '@angular/forms';
import { Movie } from 'src/app/Services/Movie/movie.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  constructor(public service : MovieService,
    private toastr:ToastrService) { }

  ngOnInit(): void {
  }
  onSubmit(form: NgForm){
    this.service.postMovie().subscribe(
      res => {
        this.resetForm(form);
        this.toastr.success('Movie added to Database','Movie Database');
      },
      err => {
        console.log(err);
      }
    );
  }
  resetForm(form:NgForm){
    form.form.reset();
    this.service.formData = new Movie();
  }

}
