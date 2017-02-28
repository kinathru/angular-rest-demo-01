// Observable Version
import { Component, OnInit } from '@angular/core';
import { Car }              from './car';
import { HttpCarService }       from './http-cars.service';

@Component({  
  selector: 'car-list',
  templateUrl: './car-list.component.html',
  providers: [ HttpCarService ],
  styles: ['.error {color:red;}']
})
export class CarListComponent implements OnInit {
  errorMessage: string;
  cars: Car[];
  mode = 'Observable';

  constructor (private carService: HttpCarService) {}

  ngOnInit() { this.getCars(); }

  getCars() {
    this.carService.getCars()
                     .subscribe(
                       cars => this.cars = cars,
                       error =>  this.errorMessage = <any>error);
  }

  addCar (name: string) {
    if (!name) { return; }
    this.carService.addCar(name)
                     .subscribe(
                       car  => this.cars.push(car),
                       error =>  this.errorMessage = <any>error);
  }
}

/*
Copyright  http://www.angulartypescript.com/. All Rights Reserved.
*/