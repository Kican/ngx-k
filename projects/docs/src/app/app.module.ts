import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {KButtonModule} from 'ngx-k-components/button';
import {KAlertModule} from 'ngx-k-components/alert';
import {KBadgeModule} from 'ngx-k-components/badge';
import {KCardModule} from 'ngx-k-components/card';

@NgModule({
	declarations: [
		AppComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		KButtonModule,
		KAlertModule,
		KBadgeModule,
		KCardModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
