import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormBuilderComponent} from './components/form-builder/form-builder.component';
import {ComponentDescriptorCollection} from './classes';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
	declarations: [
		FormBuilderComponent
	],
	imports: [
		CommonModule,
		ReactiveFormsModule
	],
	exports: [
		CommonModule,
		ReactiveFormsModule,
		FormBuilderComponent
	],
	providers: [
		{provide: ComponentDescriptorCollection, useClass: ComponentDescriptorCollection},
	]
})
export class KFormBuilderModule {
}
