import {NgModule} from '@angular/core';
import {InputTextComponent} from './components/elements/input-text/input-text.component';
import {InputNumberComponent} from './components/elements/input-number/input-number.component';
import {LinearLayoutComponent} from './components/layout/linear-layout/linear-layout.component';
import {BootstrapComponentCollection} from './bootstrap-component-collection/bootstrap-component-collection';
import {DropDownComponent} from './components/elements/drop-down/drop-down.component';
import {NgSelectModule} from '@ng-select/ng-select';
import {CommonModule} from '@angular/common';
import {ComponentCollection, KFormBuilderModule} from '@ngx-k/form-builder';
import {DateTimeComponent} from './components/elements/date-time/date-time.component';
import { InputHiddenComponent } from './components/elements/input-hidden/input-hidden.component';
import {NgPersianDatepickerModule} from 'ng-persian-datepicker';
import { SelectComponent } from './components/elements/select/select.component';

@NgModule({
	declarations: [
		InputTextComponent,
		InputNumberComponent,
		LinearLayoutComponent,
		DropDownComponent,
		DateTimeComponent,
		InputHiddenComponent,
		SelectComponent,
	],
	imports: [
		KFormBuilderModule,
		NgSelectModule,
		CommonModule,
		NgPersianDatepickerModule
	],
	exports: [
		NgSelectModule,
		KFormBuilderModule
	],
	providers: [
		{provide: ComponentCollection, useClass: BootstrapComponentCollection},
	]
})
export class KFormBuilderBootstrapModule {
}
