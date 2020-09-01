import {NgModule} from '@angular/core';
import {InputTextComponent} from './components/elements/input-text/input-text.component';
import {InputNumberComponent} from './components/elements/input-number/input-number.component';
import {LinearLayoutComponent} from './components/layout/linear-layout/linear-layout.component';
import {BootstrapComponentCollection} from './bootstrap-component-collection/bootstrap-component-collection';
import {DropDownComponent} from './components/elements/drop-down/drop-down.component';
import {NgSelectModule} from '@ng-select/ng-select';
import {CommonModule} from '@angular/common';
import {ComponentCollection, KFormBuilderModule} from '@ngx-k/form-builder';

@NgModule({
	declarations: [
		InputTextComponent,
		InputNumberComponent,
		LinearLayoutComponent,
		DropDownComponent,
	],
	imports: [
		KFormBuilderModule,
		NgSelectModule,
		CommonModule
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
