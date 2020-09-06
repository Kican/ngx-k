import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormBuilderComponent} from './components/form-builder/form-builder.component';
import {ReactiveFormsModule} from '@angular/forms';
import {COMPONENTS_DESCRIPTOR, ComponentsDescriptor} from './classes/component-descriptor-collection/components-descriptor';

@NgModule({
	declarations: [
		FormBuilderComponent
	],
	imports: [
		CommonModule,
		ReactiveFormsModule
	],
	exports: [
		ReactiveFormsModule,
		FormBuilderComponent
	],
	providers: [
		{provide: COMPONENTS_DESCRIPTOR, useClass: ComponentsDescriptor}
	]
})
export class KFormBuilderModule {
}
