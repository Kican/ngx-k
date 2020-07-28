import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {KComponentsModule} from 'k-components';
import {KButtonModule} from 'k-components/src/lib/modules/button';

@NgModule({
	declarations: [
		AppComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		KComponentsModule,
		KButtonModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
