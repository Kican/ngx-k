import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {KButtonModule} from 'ngx-k-components/button';
import {KAlertModule} from 'ngx-k-components/alert';
import {KBadgeModule} from 'ngx-k-components/badge';
import {KCardModule} from 'ngx-k-components/card';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {KFormModule} from '../../../components/form/src/k-form.module';
import {KNavbarModule} from '../../../components/navbar/src/k-navbar.module';
import {KSidebarModule} from '../../../components/sidebar/src/k-sidebar.module';
import {SidebarStatus} from "../../../components/sidebar/src/models/sidebar-status.enum";
import {SidebarMode} from "../../../components/sidebar/src/models/sidebar-mode.enum";

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
