import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {KButtonModule} from '@ngx-k/components/button';
import {KAlertModule} from '@ngx-k/components/alert';
import {KBadgeModule} from '@ngx-k/components/badge';
import {KCardModule} from '@ngx-k/components/card';
import {KSidebarModule, SidebarMode, SidebarStatus} from '@ngx-k/components/sidebar';
import {KFormModule} from '@ngx-k/components/form';
import {KNavbarModule} from '@ngx-k/components/navbar';
import {KTableModule} from '@ngx-k/components/table';
import {KBootstrapDialogModule} from '@ngx-k/components-bootstrap/dialog';
import {NgbModalModule} from '@ng-bootstrap/ng-bootstrap';
import {SimpleFormBuilderPageComponent} from './components/_form-builder/simple-form-builder-page/simple-form-builder-page.component';
import {KFormBuilderModule} from '@ngx-k/form-builder';
import {KFormBuilderBootstrapModule} from '@ngx-k/form-builder-bootstrap';
import { DashboardPageComponent } from './components/dashboard-page/dashboard-page.component';

@NgModule({
	declarations: [
		AppComponent,
		SimpleFormBuilderPageComponent,
		DashboardPageComponent,
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
			isFixed: true,
			mode: SidebarMode.Push
		}),
		KFormModule,
		KFormBuilderModule,
		KFormBuilderBootstrapModule,
		KNavbarModule,
		KTableModule,
		NgbModalModule,
		KBootstrapDialogModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
