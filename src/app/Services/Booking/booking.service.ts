import { Booking } from './booking.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http : HttpClient) { }
  bookingFormData : Booking = new Booking();

  readonly baseUrl = 'https://localhost:7242/api/booking';
  postBooking(){
    return this.http.post(this.baseUrl, this.bookingFormData);
  }
}
