import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { FeatureComponent } from './feature/feature.component';
import { FeaturesComponent } from './features/features.component';
import { AgencyComponent } from './agency/agency.component';
import { ServicesComponent } from './services/services.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { CrousalComponent } from './crousal/crousal.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    FeatureComponent,
    FeaturesComponent,
    AgencyComponent,
    ServicesComponent,
    TestimonialComponent,
    CrousalComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, 
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
