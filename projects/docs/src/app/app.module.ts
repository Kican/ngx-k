import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {KButtonModule} from 'ngx-k-components/button';
import {KAlertModule} from 'ngx-k-components/alert';
import {KBadgeModule} from 'ngx-k-components/badge';
import {KCardModule} from 'ngx-k-components/card';
import {KSidebarModule, SidebarMode, SidebarStatus} from '../../../components/sidebar/src/public-api';
import {KFormModule} from 'ngx-k-components/form';
import {KNavbarModule} from 'ngx-k-components/navbar';

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
		KSidebarModule.forRoot({
			initialState: SidebarStatus.Opened,
			hasBackdrop: false,
			mode: SidebarMode.Push
		}),
		KFormModule,
		KNavbarModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
