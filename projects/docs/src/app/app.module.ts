import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {KButtonModule} from 'ngx-k-components/button';
import {KAlertModule} from 'ngx-k-components/alert';
import {KBadgeModule} from 'ngx-k-components/badge';
import {KCardModule} from 'ngx-k-components/card';
import {KSidebarModule} from 'ngx-k-components/sidebar';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
	declarations: [
		AppComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		ReactiveFormsModule,
		KButtonModule,
		KAlertModule,
		KBadgeModule,
		KCardModule,
		KSidebarModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
