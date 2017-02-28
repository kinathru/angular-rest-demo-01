// Observable Version
import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

import { Car }           from './car';
import { Observable }     from 'rxjs/Observable';

@Injectable()
export class HttpCarService {
  private carsUrl = 'app/cars';  // URL to web API

  constructor (private http: Http) {}

  getCars (): Observable<Car[]> {
    return this.http.get(this.carsUrl)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  addCar (name: string): Observable<Car> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.carsUrl, { name }, options)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
  }

  private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
 


/*
Copyright  http://www.angulartypescript.com/. All Rights Reserved.
*/