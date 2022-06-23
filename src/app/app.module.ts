import { HttpClientModule } from '@angular/common/http';
import { MovieComponent } from './Components/movie/movie.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { ParticularMovieComponent } from './Components/particular-movie/particular-movie.component';
import { HallComponent } from './Components/hall/hall.component';
import { ShowComponent } from './Components/show/show.component';
import { BookingComponent } from './Components/booking/booking.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MovieComponent,
    ParticularMovieComponent,
    HallComponent,
    ShowComponent,
    BookingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
