import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//import { HomeComponent } from './home/home.component';
//import { AboutComponent } from './about/about.component';

const routes: Routes = [
  

   //{ path: '', redirectTo: '/home', pathMatch: 'full' },
  // { path: 'about', loadChildren: './about/about.module#AboutModule' }
    
];

//export const routing = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }