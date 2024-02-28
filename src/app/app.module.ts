import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { SlideFormComponent } from './components/slide-form/slide-form.component';
import { SlideListComponent } from './components/slide-list/slide-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    SlideFormComponent,
    SlideListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
