import { Component } from '@angular/core';
import { BookingsService } from '../services/bookings.service';

@Component({
    moduleId: module.id,
    selector: 'bookingsearch',
    templateUrl: 'bookingsearch.component.html',
    providers: [BookingsService]
})
export class BookingSearchComponent {
    title: string;
    bookings: Booking[];
    loadedBooking: Booking;

    constructor(private bookingsService: BookingsService) {
        this.title = 'Booking Search';
        // this.bookingsService.getBookings().subscribe(bookings=>{
        //     console.log(bookings);
        //     this.bookings = bookings;
        // }
        // //,error => console.log("Error: " + error)
        // );
    }

    loadBooking(bookingId: string) {
        console.log('Loading Booking');
        this.bookingsService.getBookingWithId(bookingId).subscribe(
            data => {
                console.log(data);
                this.loadedBooking = data;
            }, error => console.log("Error: " + error)
        );
    }

    isEmptyObject(obj: Object) {
        return (Object.keys(obj).length === 0);
    }
}

interface Booking {
    bookingId: number;
    product: string;
    bookingItems: BookingItem[];
}

interface BookingItem {
    bookingId: number;
    productCode: string;
    itemNo: number;
}