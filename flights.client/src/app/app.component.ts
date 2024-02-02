import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

interface FlightRm {
  guid: string;
  airline: string;
  price: number;
  departure: TimePlaceRm;
  arrival: TimePlaceRm;
  remainingNumberOfSeats: number;
}

interface TimePlaceRm {
  place: string;
  time: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  public flights: FlightRm[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getFlights();
  }

  getFlights() {
    this.http.get<FlightRm[]>('/flight').subscribe(
      (result) => {
        this.flights = result;
        console.log(result);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  title = 'flights.client';
}
