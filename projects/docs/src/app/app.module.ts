import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {KButtonModule} from 'ngx-k-components/button';
import {KAlertModule} from 'ngx-k-components/alert';
import {KBadgeModule} from 'ngx-k-components/badge';
import {KComponentsModule} from 'ngx-k-components';

@NgModule({
	declarations: [
		AppComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		KComponentsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
