import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { AboutComponent } from './about/about.component';
import { WellnessCenterComponent } from './wellness-center/wellness-center.component';
import { BookingComponent } from './booking/booking.component';
import { NearbyPlacesComponent } from './nearby-places/nearby-places.component';
import { CottagesComponent } from './cottages/cottages.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    AboutComponent,
    WellnessCenterComponent,
    BookingComponent,
    NearbyPlacesComponent,
    CottagesComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
