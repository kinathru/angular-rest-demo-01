import { Component } from '@angular/core';

import { ApiService } from './shared';

import '../style/app.scss';

// Add the RxJS Observable operators.
import './rxjs-operators';

@Component({
  selector: 'my-app', // <my-app></my-app>
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  url = 'http://www.angulartypescript.com';

  constructor(private api: ApiService) {
    // Do something with api
  }
}
