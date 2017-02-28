import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class BookingsService {

    private bookingsUrl: string = 'http://localhost:8080/IdeaRestDemo05/bookings';
    private getBookingUrl: string = 'http://localhost:8080/IdeaRestDemo05/booking';
    private addBookingUrl: string = 'http://localhost:8080/IdeaRestDemo05/booking/add';

    constructor(private http: Http) {
        console.log('Bookings service Initialized......');
    }

    getBookings() {
        return this.http.get(this.bookingsUrl).map(res => res.json());
    }

    addBooking() {
    }

    getBookingWithId(bookingId: string) {
        console.log("Get the boooking using bookingId");

        let data = new URLSearchParams();
        data.append('bookingId', bookingId);

        return this.http.get(this.getBookingUrl, {search:data}).map(res => res.json());
    }

    searchBookings() {

    }
}