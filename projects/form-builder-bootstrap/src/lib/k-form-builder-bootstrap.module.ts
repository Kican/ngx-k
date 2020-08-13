import {NgModule} from '@angular/core';
import {InputTextComponent} from './components/input-text/input-text.component';
import {InputNumberComponent} from './components/input-number/input-number.component';
import {LinearLayoutComponent} from './components/layout/linear-layout/linear-layout.component';
import {KFormBuilderModule, ComponentCollection} from '@ngx-k/form-builder';
import {BootstrapComponentCollection} from './bootstrap-component-collection/bootstrap-component-collection';

@NgModule({
	declarations: [
		InputTextComponent,
		InputNumberComponent,
		LinearLayoutComponent,
	],
	imports: [
		KFormBuilderModule
	],
	providers: [
		{provide: ComponentCollection, useClass: BootstrapComponentCollection},
	]
})
export class KFormBuilderBootstrapModule {
}
