import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { AboutComponent } from './about/about.component';
import { CottagesComponent } from './cottages/cottages.component';
import { NearbyPlacesComponent } from './nearby-places/nearby-places.component';
import { BookingComponent } from './booking/booking.component';
import { WellnessCenterComponent } from './wellness-center/wellness-center.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: LandingComponent },
  {
    path: 'about-songfum-retreat',
    pathMatch: 'full',
    component: AboutComponent,
  },
  { path: 'songfum-cottages', pathMatch: 'full', component: CottagesComponent },
  {
    path: 'nearby-destinations',
    pathMatch: 'full',
    component: NearbyPlacesComponent,
  },
  { path: 'book-a-cottage', pathMatch: 'full', component: BookingComponent },
  {
    path: 'songfum-retreats-wellness-center',
    pathMatch: 'full',
    component: WellnessCenterComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
