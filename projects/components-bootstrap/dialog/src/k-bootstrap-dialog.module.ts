import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ConfirmDialogComponent} from './components/confirm-dialog/confirm-dialog.component';
import {DialogService} from '@ngx-k/components/dialog';
import {BsDialogService} from './services/bs-dialog.service';
import {NgbModalModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
	declarations: [
		ConfirmDialogComponent
	],
	imports: [
		CommonModule,
		NgbModalModule
	],
	exports: [],
	providers: [
		{provide: DialogService, useClass: BsDialogService}
	],
})
export class KBootstrapDialogModule {
}
