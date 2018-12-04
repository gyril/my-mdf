import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NewsletterComponent} from './newsletter/newsletter.component';
import {DocumentationComponent} from './documentation/documentation.component';
import {TimetableComponent} from './timetable/timetable.component';
import {LoginComponent} from './login/login.component';
import {AuthGuard} from './core/guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'newsletter', component: NewsletterComponent, canActivate: [AuthGuard] },
  { path: 'documentation', component: DocumentationComponent, canActivate: [AuthGuard] },
  { path: 'timetable', component: TimetableComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
