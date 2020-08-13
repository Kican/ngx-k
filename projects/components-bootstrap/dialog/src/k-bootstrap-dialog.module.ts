import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ConfirmDialogComponent} from './components/confirm-dialog/confirm-dialog.component';
import {ModalModule} from 'ngx-bootstrap/modal';
import {DialogService} from '@ngx-k/components/dialog';
import {BsDialogServiceService} from './services/bs-dialog-service.service';


@NgModule({
	declarations: [
		ConfirmDialogComponent
	],
	imports: [
		CommonModule,
		ModalModule
	],
	providers: [
		{provide: DialogService, useClass: BsDialogServiceService}
	],
})
export class KBootstrapDialogModule {
}
