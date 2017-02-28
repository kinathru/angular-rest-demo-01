import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { InMemoryWebApiModule }     from 'angular-in-memory-web-api';

import { AppComponent } from './app.component';


import { ApiService } from './shared';
import { AppRoutingModule } from './app.routing';


import { removeNgStyles, createNewHosts } from '@angularclass/hmr';


/* Angular 2 HTTP Service EXAMPLE Start*/
import { CarData }                 from './car-data';
import { CarListComponent }        from './http-cars/car-list.component';
import { SassexampleComponent } from './sassexample/sassexample.component';
/* Angular 2 HTTP Service EXAMPLE End*/
 

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule,    
    InMemoryWebApiModule.forRoot(CarData),
  ],
  declarations: [
    AppComponent,    
    CarListComponent, SassexampleComponent
  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(public appRef: ApplicationRef) {}
  hmrOnInit(store) {
    console.log('HMR store', store);
  }
  hmrOnDestroy(store) {
    let cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);
    // recreate elements
    store.disposeOldHosts = createNewHosts(cmpLocation);
    // remove styles
    removeNgStyles();
  }
  hmrAfterDestroy(store) {
    // display new elements
    store.disposeOldHosts();
    delete store.disposeOldHosts;
  }
}
