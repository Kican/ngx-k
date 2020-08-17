import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ToastService} from '@ngx-k/components/toast';
import {BsToastService} from './services/bs-toast.service';
import {ToastrModule} from 'ngx-toastr';


@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		ToastrModule
	],
	exports: [],
	providers: [
		{provide: ToastService, useClass: BsToastService}
	],
})
export class KBootstrapToastModule {
}
