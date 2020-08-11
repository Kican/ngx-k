import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormBuilderComponent} from './components/form-builder/form-builder.component';

@NgModule({
	declarations: [
		FormBuilderComponent
	],
	imports: [
		CommonModule,
	],
	exports: [
		CommonModule,
		FormBuilderComponent
	]
})
export class KFormBuilderModule {
}
