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
import {KFormModule} from '../../../components/form/src/k-form.module';
import {KNavbarModule} from '@ngx-k/components/navbar';
import {KTableModule} from '@ngx-k/components/table';
import {KBootstrapDialogModule} from '@ngx-k/components-bootstrap/dialog';
import {NgbModalModule} from '@ng-bootstrap/ng-bootstrap';
import {SimpleFormBuilderPageComponent} from './components/_form-builder/simple-form-builder-page/simple-form-builder-page.component';
import {DashboardPageComponent} from './components/dashboard-page/dashboard-page.component';
import {HttpClientModule} from '@angular/common/http';
import {KFormBuilderModule} from '@ngx-k/form-builder';
import {KFormBuilderBootstrapModule} from '@ngx-k/form-builder-bootstrap';
import {DropDownFormBuilderPageComponent} from './components/_form-builder/drop-down-form-builder-page/drop-down-form-builder-page.component';
import {CUSTOM_ERROR_MESSAGES, CustomErrorMessageFormatters} from '../../../components/form/src/models/custom-error-messages.token';
import {KBootstrapButtonModule} from '@ngx-k/components-bootstrap/button';
import {DataTablePageComponent} from './components/data-table-page/data-table-page.component';
import {DataTableConfig, DataTableModule} from '@ngx-k/components/data-table';
import {KCoreCommonModule} from '@ngx-k/core/common';

export const errorMessages: CustomErrorMessageFormatters = [
	{
		error: 'required',
		format: (label: string, error: any) => `${label} is required`
	},
	{
		error: 'minlength',
		format: (label: string, error: any) => `${label} must be at least ${error.requiredLength} character`
	}
];

@NgModule({
	declarations: [
		AppComponent,
		SimpleFormBuilderPageComponent,
		DashboardPageComponent,
		DropDownFormBuilderPageComponent,
		DataTablePageComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		ReactiveFormsModule,
		HttpClientModule,
		KButtonModule,
		KAlertModule,
		KBadgeModule,
		KCardModule,
		DataTableModule,
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
		KBootstrapButtonModule,
		KBootstrapDialogModule,
		KCoreCommonModule,
	],
	providers: [
		{provide: DataTableConfig, useClass: DataTableConfig},
		{provide: CUSTOM_ERROR_MESSAGES, useValue: errorMessages}
	],
	bootstrap: [AppComponent]
})
export class AppModule {
}
