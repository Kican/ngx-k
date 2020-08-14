import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ConfirmDialogComponent} from './components/confirm-dialog/confirm-dialog.component';
import {DialogService} from '@ngx-k/components/dialog';
import {BsDialogServiceService} from './services/bs-dialog-service.service';
import {NgbModalModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
	declarations: [
		ConfirmDialogComponent
	],
	imports: [
		CommonModule,
		NgbModalModule
	],
	exports: [NgbModalModule],
	providers: [
		{provide: DialogService, useClass: BsDialogServiceService}
	],
})
export class KBootstrapDialogModule {
}
