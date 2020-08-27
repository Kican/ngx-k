import {NgModule} from '@angular/core';
import {KBootstrapDialogModule} from '@ngx-k/components-bootstrap/dialog';
import {KBootstrapToastModule} from '@ngx-k/components-bootstrap/toast';
import {KBootstrapButtonModule} from '@ngx-k/components-bootstrap/button';


@NgModule({
	declarations: [],
	imports: [
		KBootstrapDialogModule,
		KBootstrapToastModule,
		KBootstrapButtonModule
	],
	exports: [
		KBootstrapDialogModule,
		KBootstrapToastModule,
		KBootstrapButtonModule
	]
})
export class KComponentsBootstrapModule {
}
