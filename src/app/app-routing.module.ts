import { BookingComponent } from './Components/booking/booking.component';
import { HallComponent } from './Components/hall/hall.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { MovieComponent } from './Components/movie/movie.component';
import { ParticularMovieComponent } from './Components/particular-movie/particular-movie.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'particular-movie/:movieId', component: ParticularMovieComponent },
  { path: 'hall/:movieId', component: HallComponent },
  { path: 'movie', component: MovieComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'booking/:showId', component: BookingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
