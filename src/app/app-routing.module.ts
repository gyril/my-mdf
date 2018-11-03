import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NewsletterComponent} from './newsletter/newsletter.component';
import {DocumentationComponent} from './documentation/documentation.component';
import {TimetableComponent} from './timetable/timetable.component';

const routes: Routes = [
	{
		path: 'newsletter',
		component: NewsletterComponent
	},
	{
		path: 'documentation',
		component: DocumentationComponent
	},
	{
		path: 'timetable',
		component: TimetableComponent
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
