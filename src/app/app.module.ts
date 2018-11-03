import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { DocumentationComponent } from './documentation/documentation.component';
import { TimetableComponent } from './timetable/timetable.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { MdfPresentationComponent } from './mdf-presentation/mdf-presentation.component';
import { MdfFooterComponent } from './mdf-footer/mdf-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsletterComponent,
    DocumentationComponent,
    TimetableComponent,
    MdfPresentationComponent,
    MdfFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AngularSvgIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
