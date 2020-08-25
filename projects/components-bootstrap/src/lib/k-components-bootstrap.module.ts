import {NgModule} from '@angular/core';
import {KBootstrapDialogModule} from '@ngx-k/components-bootstrap/dialog';
import {KBootstrapToastModule} from '@ngx-k/components-bootstrap/toast';


@NgModule({
	declarations: [],
	imports: [
		KBootstrapDialogModule,
		KBootstrapToastModule
	],
	exports: [
		KBootstrapDialogModule,
		KBootstrapToastModule
	]
})
export class KComponentsBootstrapModule {
}
