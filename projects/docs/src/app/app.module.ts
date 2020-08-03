import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {KButtonModule} from 'ngx-k-components/button';
import {KAlertModule} from 'ngx-k-components/alert';
import {KBadgeModule} from 'ngx-k-components/badge';
import {KCardModule} from 'ngx-k-components/card';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {KSidebarModule, SidebarMode, SidebarStatus} from 'ngx-k-components/sidebar';
import {KFormModule} from '../../../components/form/src/k-form.module';

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
		KFormModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
