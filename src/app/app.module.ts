import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { DocumentationComponent } from './documentation/documentation.component';
import { TimetableComponent } from './timetable/timetable.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { MdfPresentationComponent } from './mdf-presentation/mdf-presentation.component';
import { MdfFooterComponent } from './mdf-footer/mdf-footer.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { LoginComponent } from './login/login.component';
import { AuthService } from './core/services/auth.service';
import { AuthGuard } from './core/guards/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    NewsletterComponent,
    DocumentationComponent,
    TimetableComponent,
    MdfPresentationComponent,
    MdfFooterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AngularSvgIconModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [AuthService, AuthGuard, AngularFireAuth],
  bootstrap: [AppComponent]
})
export class AppModule { }
