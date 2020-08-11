import {NgModule} from '@angular/core';
import {InputTextComponent} from './components/input-text/input-text.component';
import {InputNumberComponent} from './components/input-number/input-number.component';
import {LinearLayoutComponent} from './components/layout/linear-layout/linear-layout.component';
import {NgxKFormBuilderModule} from '@ngx-k/form-builder';


@NgModule({
	declarations: [
		InputTextComponent,
		InputNumberComponent,
		LinearLayoutComponent,
	],
	imports: [
		NgxKFormBuilderModule
	]
})
export class NgxKFormBuilderBootstrapModule {
}
